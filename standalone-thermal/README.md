# Miwesu Thermal — Standalone E‑commerce Site

This folder contains a **single-file HTML** shop for Miwesu thermal wood. It is intended to be **copied and hosted separately** (e.g. on its own domain) so you can run it as a standalone site and charge the client a fee for that separate site.

## Contents

- **`miwesu-thermal-2026.html`** — Full e‑commerce-style page:
  - **Header:** Logo, Shop / Contact links, “Gauteng delivery” badge
  - **Hero:** Wood & Thermal headline and short intro
  - **Stats:** 980°C, 11% moisture, 0% additives
  - **Shop grid:** Four products (Geelhak 12kg, Braai mix 12kg, Sekelbos 30kg, Braai mix 30kg) with price, MOQ, and **Order** button
  - **Footer:** Contact email, link to main Miwesu site
  - **Order modal:** Clicking **Order** opens a popup form (name, email, phone, delivery address, product, quantity, notes). Customer submits; Miwesu receives the order and contacts the client to confirm. No online checkout.

All CSS and JS are inline; no build step required.

## Receiving orders

Orders are sent only when a **form action URL** is set. Two options:

### Option A — Main Miwesu site API (recommended if both sites are yours)

1. In the HTML, near the top of the `<script>` block, set:
   ```javascript
   var FORM_ACTION_URL = 'https://miwesu.com/api/wood-order';  // use your real domain
   ```
2. On the main Next.js site, set **Resend** so Miwesu gets emails:
   - Add `RESEND_API_KEY` (and optionally `RESEND_FROM_EMAIL`, `WOOD_ORDER_EMAIL`) to the main site’s environment.
   - See the main project’s README or env example for wood-order API.
3. The main site’s `/api/wood-order` route allows cross-origin requests from the standalone site’s origin. If the standalone site is on another domain (e.g. `https://thermal.miwesu.com`), the request’s `Origin` is allowed automatically. To restrict to one domain, set `WOOD_ORDER_CORS_ORIGIN=https://thermal.miwesu.com` on the main site.

### Option B — Formspree (or another form endpoint)

1. Create a form at [Formspree](https://formspree.io) and get the form ID.
2. In the HTML script, set:
   ```javascript
   var FORM_ACTION_URL = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Formspree will email you the submissions. Their free tier may expect form-encoded fields; if the JSON payload doesn’t appear correctly, use a small serverless function that accepts the JSON and forwards to Formspree, or switch the script to submit as `application/x-www-form-urlencoded` with the same field names.

### If `FORM_ACTION_URL` is left empty

The form falls back to opening the user’s email client (`mailto:info@miwesu.co.za`) with the order details. The success message still appears. Use this only for quick testing.

## How to use

1. Copy the entire `standalone-thermal` folder (or just `miwesu-thermal-2026.html`) to your static host.
2. Host the HTML on any static host (Netlify, Vercel, GitHub Pages, S3, etc.). No Node/npm required.
3. (Optional) Set the main Miwesu site’s Wood page to link to this standalone URL via `NEXT_PUBLIC_THERMAL_ORDER_URL`.

## Customization

- **Products / prices / MOQ:** Edit the `products` array in the `<script>` section.
- **Brand / copy:** Edit the HTML (header, hero, footer text).
- **Styling:** Adjust the `:root` variables and other rules in the `<style>` block.
- **Footer main site link:** Set `MAIN_SITE_URL` in the script if you use it in the footer.
