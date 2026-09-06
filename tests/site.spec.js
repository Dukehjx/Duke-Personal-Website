import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  ["/", "Duke Hu"],
  ["/computer", "Work & research."],
  ["/music", "Music & performance."],
  ["/cv", "Junxi (Duke) Hu"],
];

for (const width of [320, 390, 768, 1440]) {
  for (const [route, heading] of routes) {
    test(
      route + " at " + width + "px: accessible and readable",
      async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.goto(route);
        await expect(page.getByRole("heading", { level: 1 })).toContainText(
          heading,
        );
        await expect(page.getByRole("main")).toBeVisible();
        await expect(
          page.locator('.primary-nav [aria-current="page"]'),
        ).toHaveCount(1);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        const audit = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(audit.violations).toEqual([]);
        const labels = await new AxeBuilder({ page })
          .withRules(["label-content-name-mismatch"])
          .analyze();
        expect(labels.violations).toEqual([]);
        expect(errors).toEqual([]);
      },
    );
  }
}

test("keyboard skip link, navigation, route focus, and deep links", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Work & Research" })
    .focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/computer$/);
  await expect(page.getByRole("main")).toBeFocused();
  await expect(page).toHaveTitle("Work & Research — Duke Hu");
  await page.getByRole("link", { name: "Academic background" }).click();
  await expect(page).toHaveURL(/cv#academics$/);
  const top = await page
    .locator("#academics")
    .evaluate((el) => el.getBoundingClientRect().top);
  const navBottom = await page
    .locator(".site-header")
    .evaluate((el) => el.getBoundingClientRect().bottom);
  expect(top).toBeGreaterThanOrEqual(navBottom);
  await page.goBack();
  await expect(page).toHaveURL(/computer$/);
  await page.goto("/cv#awards");
  await expect(page.locator("#awards")).toBeInViewport();
});

test("touch navigation and minimum control sizes", async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  for (const link of await page
    .locator(".primary-nav a, .button, .nav-contact")
    .all()) {
    const box = await link.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44);
    expect(box.width).toBeGreaterThanOrEqual(24);
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Music", exact: true })
    .tap();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Music & performance.",
  );
  await context.close();
});

test("reduced motion shows all content without animation or streaming requests", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const externalRequests = [];
  page.on("request", (request) => {
    if (!request.url().startsWith("http://127.0.0.1:4173"))
      externalRequests.push(request.url());
  });
  for (const [route] of routes) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
    expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
    expect(await page.locator("video, canvas").count()).toBe(0);
  }
  expect(externalRequests).toEqual([]);
});

test("all local images load, screenshots, and CV print layout", async ({
  page,
}) => {
  for (const [route] of routes) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route);
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({
      path: "artifacts/" + (route.slice(1) || "home") + "-desktop.png",
      fullPage: true,
    });
  }
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(page.locator(".cv-sidebar")).toBeHidden();
  await expect(page.locator(".cv-content")).toBeVisible();
  await page.pdf({
    path: "artifacts/duke-hu-cv.pdf",
    format: "A4",
    printBackground: true,
  });
  await page.emulateMedia({ media: "screen" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  for (const img of await page.locator("img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((el) => el.complete && el.naturalWidth > 0))
      .toBe(true);
  }
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
});
