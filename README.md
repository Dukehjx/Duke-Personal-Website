# Duke Hu's portfolio

A quiet, responsive portfolio for professional and academic visitors. The four existing routes remain: `/`, `/computer`, `/music`, and `/cv`.

## Development

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run test:ui
```

The browser suite uses installed Google Chrome. Change `channel` in `playwright.config.js` if using a different browser. Tests run against a production build and generate ignored screenshots and a CV print sample in `artifacts/`.

## Design and content

- Graphite surfaces, restrained blue accents, system fonts, and a static SVG wireframe sculpture.
- Content appears immediately. No video backgrounds, loading gates, scroll reveals, rotating text, or continuous decorative animation.
- Shared navigation, an obvious CV link, section anchors, visible project descriptions, and a print/save-as-PDF action on the CV.
- Project content lives in `src/data/projects.js`; the original CV data is preserved in `src/data/cv.js`.
- Original photographs are retained. Pages use local 480px/960px WebP derivatives with reserved display space and lazy loading. To regenerate derivatives, install Python's Pillow package and run `python scripts/optimize-images.py`.

## Accessibility and performance

The implementation targets [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/): semantic landmarks, logical headings, real navigation links, current-page identification, keyboard focus and skip navigation, touch targets, readable contrast, responsive reflow, and reduced-motion support. Automatic checks are evidence, not a complete conformance certification. Assistive-technology testing with real users is still valuable.

The 20 browser checks cover all four pages at 320, 390, 768, and 1440 CSS pixels, axe accessibility and visible-label checks, keyboard navigation, route focus, section links, touch navigation, reduced motion, image loading, and CV print styling.

Latest homepage Lighthouse lab run, September 7, 2026:

| Measurement | Mobile | Desktop |
| --- | ---: | ---: |
| Performance score | 99 | 100 |
| Accessibility score | 100 | 100 |
| Best practices score | 100 | 100 |
| SEO score | 100 | 100 |
| LCP | 1.90 s | 0.46 s |
| CLS | 0 | 0 |
| Total blocking time | 33 ms | 0 ms |

The inner-page mobile audits also met the LCP and CLS targets:

| Page | Performance | Accessibility | LCP | CLS |
| --- | ---: | ---: | ---: | ---: |
| Work & research | 99 | 100 | 1.81 s | 0 |
| Music | 100 | 100 | 1.51 s | 0 |
| CV | 100 | 100 | 1.36 s | 0 |

An eight-interaction local touch-navigation check at 4× CPU slowdown reported a maximum Event Timing duration of 96 ms. Run `node scripts/measure-interactions.mjs` with the production preview on port 4173 to reproduce. This is a lab responsiveness check, **not field INP**; TBT is not INP either.

[Core Web Vitals targets](https://web.dev/articles/defining-core-web-vitals-thresholds) remain LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile, evaluated separately for mobile and desktop. Confirm these on the deployed site with real-user measurement or CrUX/Search Console when sufficient traffic is available. No analytics collection or external reporting endpoint is introduced by this redesign.

Lighthouse reports are saved locally under `artifacts/`. To repeat an audit with a production preview running:

```sh
npx lighthouse http://127.0.0.1:4173/ --output=json --output-path=artifacts/lighthouse-mobile.json --chrome-flags="--headless"
```

Add `--preset=desktop` for desktop. Lab results vary with machine load, hosting, and network conditions.
