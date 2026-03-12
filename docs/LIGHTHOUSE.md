# Lighthouse & PageSpeed

## Running Lighthouse

1. **Build and start the app** (production mode for realistic scores):
   ```bash
   npm run build
   npm run start
   ```
2. **In another terminal**, run Lighthouse:
   ```bash
   npm run lighthouse
   ```
   This writes `lighthouse-report.report.json` and `lighthouse-report.report.html` in the project root. Open the HTML file in a browser for the full report.

   Or run manually with options:
   ```bash
   npx lighthouse https://your-production-url.com --view --output=html
   ```

## Fixes applied for higher scores

### Accessibility
- **Color contrast:** Gold eyebrow labels on light backgrounds (e.g. "Beyond the Rifle", "What Guests Say", testimonial tags) now use `text-gold-700` (#7c6426) instead of `text-gold-600` for WCAG AA 4.5:1 on marble/marble-dark. `gold-700` is defined in `tailwind.config.js`.
- **Heading order:** Footer column titles ("Stay", "Experience", "Concierge", "Reach us") were changed from `<h4>` to `<h2>` so the document outline doesn’t skip levels (h1 → h2 → h2 in footer).

### Best practices
- **Console errors:** Ambient audio no longer loads `/audio/bushveld.mp3` on initial page load. The `Audio` instance is created only when the user first clicks "Play ambient sound", so a missing file no longer causes a 404 at load time. Add `public/audio/bushveld.mp3` if you want the soundscape; see `public/audio/README.md`.

### SEO
- Already in good shape (canonicals, meta, sitemap, robots, JSON-LD). No changes made for Lighthouse.

### Performance
- Performance is heavily influenced by environment (throttling, CPU, network). Local Lighthouse runs often score lower than production.
- For more representative scores, run Lighthouse (or [PageSpeed Insights](https://pagespeed.web.dev/)) against your **deployed URL** (e.g. Vercel).
- The hero image already uses Next.js `priority` for LCP. Further gains would come from reducing main-thread work (e.g. code splitting, lighter client JS).

## Target scores

- **Accessibility:** 98%+ (contrast and heading order fixes should help).
- **Best practices:** 98%+ (no console errors on load after the audio change).
- **SEO:** 100% (already achieved in testing).
- **Performance:** Aim for 98%+ on **production**; local/throttled runs often sit lower (e.g. 40–60%) even for well-optimized sites.

## Optional: avoid any audio 404

If you want to avoid a 404 when a user enables ambient sound without adding a real file, you can add a silent or very short placeholder MP3 at `public/audio/bushveld.mp3`. The app will then load that file when the user clicks play.
