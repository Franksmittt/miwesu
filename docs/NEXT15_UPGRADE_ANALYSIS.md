# Next.js 15 + PPR Upgrade Analysis

Prepared for the MIWESU luxury elevation (Step 1). The codebase is **ready for a surgical upgrade** when you choose to enable Partial Prerendering and React 19.

## Current state

- **Next.js:** 14.2.x  
- **React:** 18.3.x  
- **Middleware:** GeoIP (x-vercel-ip-country) – no `cookies()` or `headers()` from `next/headers`, so **no async API changes** required in middleware.
- **App Router:** All species routes are **static** (e.g. `greater-kudu`, `wildebeest`) – no dynamic `params` or `searchParams` in layout/page that need async migration.
- **Data:** No use of `cookies()` or `headers()` from `next/headers` in the app.

## What’s already done (Step 1 – no breaking changes)

1. **Liquid Glass** – New CSS in `app/globals.css`:
   - `.liquid-glass` and `.liquid-glass-dark` (stronger blur, specular highlights, gradient edge).
   - Existing `.glass-panel` and `.glass-panel-dark` are **unchanged**.

2. **Species Bento Grid** – New component and usage:
   - `components/SpeciesBentoGrid.tsx`: reusable Bento grid for quick-facts (cells + optional footer).
   - **Greater Kudu** quick-facts section refactored to use it (other species pages can be migrated the same way).

3. **Next 15 upgrade not applied** – To avoid risk to the current build, the upgrade was **not** run. When you’re ready, follow the steps below.

## When you’re ready: Next 15 + React 19 upgrade steps

1. **Install**
   ```bash
   npm install next@15 react@19 react-dom@19 --legacy-peer-deps
   npm install -D @types/react@19 @types/react-dom@19
   ```

2. **Config** (`next.config.js`)
   - Replace `images.domains` with `images.remotePatterns`:
     ```js
     remotePatterns: [
       { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
     ],
     ```
   - Enable PPR when you want it:
     ```js
     experimental: {
       optimizePackageImports: ['lucide-react'],
       ppr: true,
     },
     ```

3. **Async APIs**  
   This project does **not** use `params`, `searchParams`, `cookies()`, or `headers()` from Next in a way that requires changes. If you later add dynamic routes or server-side auth:
   - `params` / `searchParams`: use `await params` and `await searchParams` in async page/layout.
   - `cookies()` / `headers()`: use `await cookies()` and `await headers()`.

4. **Codemod (optional)**
   ```bash
   npx @next/codemod@canary upgrade latest
   ```
   Run from project root; fix any remaining issues the codemod reports.

5. **Build and test**
   ```bash
   npm run build
   npm run dev
   ```
   Verify home, species (e.g. greater-kudu), book, and compare.

## PPR usage after upgrade

With `experimental.ppr: true`:

- Wrap **dynamic** content (e.g. booking widget, currency-dependent rates) in `<Suspense fallback={…}>`.
- Static shell (nav, footer, hero) stays cached; dynamic parts stream.
- No change required for existing static species pages.

## Summary

- **Done:** Liquid Glass CSS, Species Bento Grid, Greater Kudu refactor, this analysis.
- **Deferred:** Next 15 + React 19 + PPR (run when you’re ready using the steps above).
- **Risk:** Low for current app; main risk is React 19 type/behavior changes in third-party libs (e.g. react-day-picker, react-hook-form). Test booking and forms after upgrading.
