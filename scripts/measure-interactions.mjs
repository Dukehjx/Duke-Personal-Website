import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

// Local interaction smoke check. Event Timing is a lab signal, not field INP.
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
const cdp = await page.context().newCDPSession(page);
await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
await page.addInitScript(() => {
  window.interactionSamples = [];
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.interactionId)
        window.interactionSamples.push({
          type: entry.name,
          duration: entry.duration,
          interactionId: entry.interactionId,
        });
    }
  }).observe({ type: "event", buffered: true, durationThreshold: 16 });
});
try {
  await page.goto("http://127.0.0.1:4173/");
  for (const name of [
    "Work & Research",
    "Music",
    "CV",
    "Home",
    "CV",
    "Music",
    "Work & Research",
    "Home",
  ]) {
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name, exact: true })
      .tap();
    await page.waitForTimeout(150);
  }
  await page.waitForTimeout(500);
  const samples = await page.evaluate(() => window.interactionSamples);
  const report = {
    environment: "Local Chrome, 390×844 viewport, touch input, 4× CPU slowdown",
    interactions: 8,
    eventTimingReportingThresholdMs: 16,
    maximumReportedDurationMs: samples.length
      ? Math.max(...samples.map((s) => s.duration))
      : null,
    note: "Durations below the reporting threshold may be omitted. This smoke check does not establish field INP. Verify LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile on the deployed site.",
    samples,
  };
  await mkdir("artifacts", { recursive: true });
  await writeFile(
    "artifacts/interaction-timing.json",
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  if (report.maximumReportedDurationMs > 200) process.exitCode = 1;
} finally {
  await browser.close();
}
