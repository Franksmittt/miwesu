# MIWESU — Project Overview

Luxury Next.js website for **MIWESU Game Farm / Hunters Lodge**, Thabazimbi, South Africa. The site presents the **Iron Eden** sanctuary in the Makoppa district (Waterberg region): private residences, wildlife, activities, conservation, and booking.

---

## 1. Lodge / Farm — Features & Benefits

### Location & setting
- **Thabazimbi**, Limpopo; Makoppa district (D1432 road).
- **Makoppa Dome** — ancient Swazian granite and gneiss; 2.5 billion years.
- **Arid Sweet Bushveld** — nutrient-rich grasses, malaria-free; red sandy loam, granite koppies.
- Exclusive use, privacy, daily housekeeping.

### Accommodation summary
- **Total sleepers:** 22 across two residences.
- **The Homestead (Main Lodge House):** 16 sleepers, 4 bedrooms (2 lower × 3, 2 upper × 5), open-plan kitchen/living, first patio, boma & braai, lapa (pool table & darts), braai under the trees, trampoline, jungle gym, swimming pool with slide.
- **The Stone Villa:** 6 sleepers, 2 bedrooms (master + bunk room), open-plan kitchen/living, master en-suite (shower), second en-suite (bathtub), outdoor braai.

### On-site facilities & benefits
- **First patio** — thatched roof, octagonal table, Adirondack chairs; glass doors to kitchen/living.
- **Boma and braai (BBQ)** — circular fire pit, built-in braai, bar table and stools.
- **Braai under the trees** — boma/braai with grill, paved area, seating; waterhole visible in views.
- **Lapa** — open-sided thatched structure; pool table, bar, small kitchen/wet bar; links main house and pool.
- **Swimming pool** — rectangular pool, water slide complex (thatched tower; red/blue and yellow slides), lawn, thatched umbrella.
- **Trampoline & jungle gym** — in-ground trampoline(s), wooden jungle gym; family play area near pool.
- **Stone Villa** — own braai, lawn, bushveld setting; near pool.

### Activities & experiences (high level)
- Conservation harvest (ethical, quota-based).
- Photographic safaris.
- Celestial safaris (dark skies, astronomy).
- Mobile wellness (in-villa treatments, e.g. Marula oils).
- Wildlife viewing (game drives, walking safaris).
- Trophy export support; wood & thermal products (braai wood).

### Conservation & ethos
- Conservation-led harvest; anti-poaching; community support.
- Sweetveld focus; sustainable use; “Luxury is silence” — sanctuary positioning.

---

## 2. Wildlife / Animals

Species are documented with research-backed data (weights, heights, diet, habitat, caliber, Rowland Ward, lifespan). Each species has a dedicated page and is included in the **Compare species** tool where applicable.

### Species list (14 in comparison tool + pages)

| Species            | Slug               | Notes                          |
|--------------------|--------------------|--------------------------------|
| Greater Kudu       | `greater-kudu`     | “Grey Ghost”; spiral horns     |
| Blue Wildebeest    | `wildebeest`       | Grazer; brindled gnu           |
| Impala             | `impala`           | Lyre horns; plains game        |
| Gemsbok            | `gemsbok`          | Arid-adapted; rapier horns     |
| Warthog            | `warthog`          | Four tusks; waterholes         |
| Blesbok            | `blesbok`          | White blaze; lyre horns        |
| Bushbuck           | `bushbuck`         | Thicket dweller; spiral horns  |
| Cape Buffalo       | `cape-buffalo`     | Dangerous game; fused boss     |
| Dapple Impala      | `dapple-impala`    | Colour variant                 |
| Golden Wildebeest  | `golden-wildebeest`| Golden/copper variant          |
| Springbok          | `springbok`       | Pronking; dorsal fold          |
| Red Hartebeest     | `red-hartebeest`   | “Heart-beast”; lyre horns      |
| Lechwe             | `lechwe`          | Semi-aquatic; wetlands         |
| Livingstone Eland  | `livingstone-eland`| Largest antelope               |

**Data source:** `lib/species-comparison-data.ts` (weights, heights, diet, habitat, caliber, Rowland Ward, lifespan, trophy notes). Individual species pages use this and extend with narrative, images, and quick-fact banners. **Compare** page: side-by-side comparison; shareable URLs (`/compare?a=slug&b=slug`).

---

## 3. Accommodation & Facilities (Data Model)

Single source of truth: **`lib/residences-data.ts`**.

### Main Lodge House (The Homestead)
- **Facilities:** Main lodge house (exterior), Lower Room 1 (sleeps 3), Lower Room 2 (sleeps 3), Lower Room en-suite (bathroom), Kitchen, Living area, First patio, Boma and Braai, Upper Room 1 (sleeps 5), Upper Room 2 (sleeps 5), Lapa (pool table & darts), Braai under the trees, Trampoline & jungle gym, Swimming pool with slide.
- Each facility has: `id`, `label`, `description`, `imagePath`, optional `fallbackImagePath`, optional `card1Source` (for asset mapping).

### The Stone Villa
- **Facilities:** Exterior, Kitchen, Living area, Master bedroom, Master en-suite (shower), 2nd bedroom (2 bunks, sleeps 4), 2nd bedroom en-suite (bathtub), Outdoor braai.
- Same structure; images include Thabazimbi lodge photography (e.g. N_200, N_158, N_171, W_105).

### Gallery
- **`galleryAccommodationImages`** — array of `{ src, category: 'Accommodation', title, description }` used on the Gallery page and for accommodation imagery. Many entries use Thabazimbi/processed lodge images.

---

## 4. Layout & Styling

### Design system
- **Palette:** Gold (300–600), Onyx (default, light), Marble (default, dark). Defined in `tailwind.config.js`.
- **Fonts:** **Cinzel** (serif, headings), **Montserrat** (sans, body); loaded in `app/layout.tsx`.
- **Hero imagery:** Lodge photos (no generic placeholders). Central reference: `lib/hero-images.ts`. Hero backgrounds use Thabazimbi panoramic braai, braai under trees, Stone Villa exterior, main house living as appropriate per page.
- **Tailwind:** Custom utilities — `text-gradient-gold`, `glass-panel`, `glass-panel-dark`, `reveal` (scroll animation), `bg-hero-pattern`, `luxury-gradient`, `gold-gradient`, `shadow-luxury`, `shadow-gold-glow`, `widest-xl` letter-spacing.

### Global behaviour
- **Navigation:** Fixed top; on home and not scrolled: gradient; else solid onyx. Logo center; “Private Access” opens vetting modal. Full-screen menu overlay (Stay, Experience, Practical, Reach us).
- **Layout:** `Layout` wraps pages with `Navigation` and shared footer/modal. Main content typically `min-h-screen`, sections with consistent padding and max-width (e.g. `max-w-7xl`).
- **Accessibility:** Focus-visible outline (gold); `prefers-reduced-motion` respected; selection styling; touch targets (e.g. 44px) for menu items.
- **Responsive:** Breakpoints sm/md/lg; grid layouts; hero heights (e.g. 50vh–60vh); image `sizes` for performance.

### Key UI patterns
- Serif headings with gold gradient accent (e.g. “Iron **Eden**”).
- Uppercase tracking labels (e.g. “The Makoppa Sanctuary”).
- Dark (onyx) sections with gold accents; light (marble) sections for text-heavy content.
- Cards with border, hover scale/shadow; CTA buttons (gold border, fill on hover).
- Compare button on species pages (opens modal to pick second species, then navigates to `/compare?a=...&b=...`).

### Immersion & motion (image-driven blueprint)
- **Slow-Breathe Hero (Ken Burns):** Home, Residences, and Activities heroes use a subtle 18s loop: scale 1→1.08 and translate for a cinematic “breathe” effect. Implemented via Tailwind `animate-ken-burns`; disabled when `prefers-reduced-motion` is set.
- **Design Your Escape (HoverTakeover):** Homepage section “Who’s Eden?” with six vibe cards (Bachelor Bash, Romantic Escape, Family Eden, The Oasis, Hunter’s Brotherhood, City Escape). Hovering a card cross-fades the section background to that vibe’s Thabazimbi image (Framer Motion). Cards link to /activities, /residences, /wildlife, /about; “Book your stay” CTA below.
- **A Day in Eden (DayInLife):** Homepage vertical timeline with five moments (06:00 Dawn, 10:00 Morning, 15:00 Afternoon, 19:00 Golden hour, 22:00 Night). Each row: image + time/label/title/description; alternating layout; scroll-triggered reveals (Framer Motion). Uses lodge imagery throughout; “Book your day” CTA at bottom.
- **ScrollReveal:** Reusable Framer Motion component (`components/ScrollReveal.tsx`) for scroll-triggered opacity + y reveal. Used on home for “Private Residences” and “Conservation Harvest” section headers.
- **Gallery — Experience by Vibe:** Gallery page includes a “Feel your Eden” block with four vibe groups (The Oasis, After Dark, The Homestead, The Disconnect). Each card: image, title, short description, link to residences/activities. Asymmetric grid with hover scale; Framer Motion on scroll-in.
- **Framer Motion:** Used for hover takeovers, scroll reveals, and Day in the Life; no video—motion is subtle and respects reduced-motion preferences where applied.

---

## 5. Pages & Summary

### Core / marketing

| Route        | Purpose |
|-------------|---------|
| **/** (Home) | Hero (Ken Burns lodge image), tagline “Iron Eden”, CTAs. Design Your Escape (vibe hover takeover). Origins (Makoppa Dome, Sweetveld). Residence cards. A Day in Eden (5-moment timeline). Conservation Harvest / species cards. Footer. |
| **/about**  | Provenance; Makoppa Dome, D1432, Sweetveld; family experience; trophy/estate story. |
| **/residences** | Hero; “Private Residences”; Homestead and Stone Villa cards with sleepers/bedrooms; facility list; housekeeping note. |
| **/residences/homestead** | Main lodge: facility grid with image, label, description; fallback images on error. |
| **/residences/stone-villa** | Stone Villa: same facility-grid pattern. |
| **/book**   | Booking flow (dates, residence, guest count, etc.); hero strip; link back to Residences. |
| **/availability** | Check availability; hero; likely date/residence selection. |
| **/rates**   | Rates for Homestead and Stone Villa; hero (Stone Villa image). |
| **/contact** | Contact form / concierge; hero (lodge). |
| **/faq**    | FAQ; hero (main house living). |

### Experience

| Route          | Purpose |
|----------------|---------|
| **/activities** | Activities list (Conservation Harvest, Photographic Safaris, Celestial Safaris, Mobile Wellness, Wildlife Viewing); hero; expandable sections with imagery. |
| **/wildlife**  | Species grid (cards with name, image, link); “Compare species” link; hero. |
| **/compare**   | Side-by-side species comparison; dropdowns for species A/B; URL params `?a=slug&b=slug`; table of attributes. |
| **/conservation** | Conservation ethos; anti-poaching; community; hero. |
| **/gallery**   | Hero; **Experience by Vibe** (Oasis, After Dark, Homestead, Disconnect) with links; then gallery grid by category (All, Landscape, Wildlife, Accommodation); Featured Collections; lightbox. |
| **/partners**  | Partners / affiliations; hero (activities image). |

### Species (dynamic [slug])

| Route (examples) | Purpose |
|------------------|---------|
| **/greater-kudu**, **/wildebeest**, **/impala**, **/gemsbok**, **/warthog**, **/blesbok**, **/bushbuck**, **/cape-buffalo**, **/dapple-impala**, **/golden-wildebeest**, **/springbok**, **/red-hartebeest**, **/lechwe**, **/livingstone-eland** | Dedicated species page: hero image, quick-facts banner (weights, height, diet, habitat, etc.), Compare button, narrative sections, imagery (habitat, coat, horns, herd, etc.). Content aligned with research and `species-comparison-data`. |

### Practical / other

| Route            | Purpose |
|------------------|---------|
| **/faq**         | Frequently asked questions. |
| **/wood**        | Wood & thermal products (braai wood, etc.); hero (conservation/lodge). |
| **/trophy-export** | Trophy export information; hero. |
| **/blog**        | Blog index; hero. |
| **/blog/limpopo-vs-eastern-cape** | Blog post; hero. |
| **/blog/sweetveld-vs-sourveld**   | Blog post; hero. |
| **/de**, **/es** | German and Spanish entry/locale pages; hero. |
| **/admin/bookings** | Admin view for bookings (if applicable). |

### API routes (examples)
- **/api/contact** — contact form submit.
- **/api/availability** — availability check.
- **/api/checkout** — booking/checkout (e.g. Stripe).
- **/api/webhooks/stripe** — Stripe webhooks.
- **/api/wood-order** — wood product orders.
- **/api/admin/bookings** — admin bookings.

---

## 6. Tech Stack & Repo

- **Framework:** Next.js 14 (App Router).
- **Language:** TypeScript.
- **Styling:** Tailwind CSS; custom theme (colors, fonts, utilities).
- **UI:** React 18; Lucide React icons; Next.js `Image`.
- **Data:** `lib/residences-data.ts`, `lib/species-comparison-data.ts`, `lib/hero-images.ts`; Prisma if used for bookings.
- **Key components:** `Layout`, `Navigation`, `BookingWidget`, `CompareButton`, `HoverTakeover`, `DayInLife`, `ScrollReveal`, `StructuredData` (SEO), `VettingModal`.
- **Motion:** `framer-motion` for scroll reveals, hover takeovers, and timeline; Tailwind `animate-ken-burns` for hero breathing.

For setup, scripts, and dev instructions, see the root **README.md**.

---

*Last updated to reflect Thabazimbi lodge imagery, hero image replacement, Compare feature, and current pages/data.*
