# MIWESU — Project Overview

Luxury Next.js website for **MIWESU Game Farm / Hunters Lodge**, Thabazimbi, South Africa. The site presents the **Iron Eden** sanctuary in the Makoppa district (Waterberg): private residences, 14 wildlife species, activities, conservation, booking, and trust tools.

**Current status (March 2026):** All species page content images are integrated (no placeholders). Homepage: Hero (Ken Burns, cinematic vignette), Private Residences, A Day in Eden, Conservation Harvest, testimonials, Legacy. Design: Onyx/Gold palette, Cinzel + Montserrat, Liquid Glass, Bento Grids on species pages. Prisma is currently stubbed for faster builds; re-enable when database is needed. Stripe, Resend, SAPS 520 PDF, Biltong calculator, and Telemetry dashboard are implemented.

---

## 1. Lodge / Farm — Features & Benefits

### Location & setting
- **Thabazimbi**, Limpopo; Makoppa district (D1432 road). ~40 km from Thabazimbi.
- **Makoppa Dome** — ancient Swazian granite and gneiss; 2.5 billion years.
- **Arid Sweet Bushveld** — nutrient-rich grasses, malaria-free; red sandy loam, flat to gently rolling terrain.
- Exclusive use of chosen residence; daily housekeeping; fibre internet. Secure perimeter, electric fencing; both houses inside the reserve. Gravel road (D1432); high-clearance vehicle recommended Oct–Mar.

### Accommodation — bedrooms & capacity

| Residence | Sleepers | Bedrooms | Layout |
|-----------|----------|----------|--------|
| **The Homestead** (Main Lodge House) | 16 | 4 | Lower level: Lower Room 1 (sleeps 3), Lower Room 2 (sleeps 3), shared bathroom; Kitchen, Living. Upper level: Upper Room 1 (sleeps 5), Upper Room 2 (sleeps 5). |
| **The Stone Villa** (Near the pool) | 6 | 2 | Master bedroom (en-suite shower); 2nd bedroom with 2 bunk beds (sleeps 4), en-suite with bathtub. Open-plan Kitchen, Living. |

**Source of truth:** `lib/residences-data.ts`.

### The Homestead — amenities
- **Indoor:** Full kitchen (chef’s kitchen), living area, first patio (thatched, octagonal table, Adirondack chairs). Lapa: pool table, darts, wet bar.
- **Outdoor:** Boma and braai (circular fire pit, built-in braai, bar table and stools). Braai under the trees (second braai, waterhole views). Trampoline and jungle gym. Swimming pool with water slide complex (thatched tower; red/blue and yellow slides), lawn, thatched umbrella.
- **Rooms:** Lower Room 1 & 2 each sleep 3 (en-suite / shared bathroom). Upper Room 1 & 2 each sleep 5.

### The Stone Villa — amenities
- **Indoor:** Kitchen, living area. Master bedroom (en-suite shower). Second bedroom (2 bunks, sleeps 4; en-suite with bathtub).
- **Outdoor:** Outdoor braai overlooking the dam. Near main lodge swimming pool. Stargazing deck and telescope (per rates copy). Nespresso; daily housekeeping; full reserve access.

### Shared / on property
- One main swimming pool with slide (Homestead); Stone Villa is “near the pool.” Reserve access: 4x4 tracks, game viewing, exploration. Ideal for families and groups.

---

## 2. Activities (brief)

| Activity | Description |
|----------|-------------|
| **Conservation Harvest** | Ethical, quota-based hunting with professional trackers. All harvests follow conservation and ethical practice. |
| **Photographic Safaris** | Guided photographic safaris in the Makoppa district for wildlife enthusiasts and photographers. |
| **Celestial Safaris** | Dark skies in Thabazimbi; private astronomy sessions. |
| **Mobile Wellness** | In-villa spa treatments (e.g. indigenous Marula oils). |
| **Wildlife Viewing** | Guided game drives and walking safaris; diverse wildlife of the reserve. |

Additional themes on site: birding, 4x4 trails, custom experiences. **Page:** `/activities`; data and imagery from `lib/activity-images.ts`.

---

## 3. Wildlife / Species

**14 species**, each with a dedicated page and entry in the **Compare** tool (`lib/species-comparison-data.ts`, `lib/species-data.ts`).

| Species | Slug | Notes |
|---------|------|--------|
| Greater Kudu | `greater-kudu` | “Grey Ghost”; spiral horns |
| Blue Wildebeest | `wildebeest` | Grazer; brindled gnu |
| Impala | `impala` | Lyre horns; plains game |
| Gemsbok | `gemsbok` | Arid-adapted; rapier horns |
| Warthog | `warthog` | Four tusks; waterholes |
| Blesbok | `blesbok` | White blaze; lyre horns |
| Bushbuck | `bushbuck` | Thicket dweller; spiral horns |
| Cape Buffalo | `cape-buffalo` | Dangerous game; fused boss |
| Dapple Impala | `dapple-impala` | Colour variant |
| Golden Wildebeest | `golden-wildebeest` | Golden/copper variant |
| Springbok | `springbok` | Pronking; dorsal fold |
| Red Hartebeest | `red-hartebeest` | “Heart-beast”; lyre horns |
| Lechwe | `lechwe` | Semi-aquatic; wetlands |
| Livingstone Eland | `livingstone-eland` | Largest antelope |

Each species page: hero image, Quick Facts (SpeciesBentoGrid), Compare button, taxonomy, physical description, behaviour, habitat, hunting strategies, shot placement, rifle/caliber, trophy evaluation, venison/utilisation. All content image placeholders have been replaced with real assets (see `docs/SPECIES_IMAGE_PLACEHOLDER_AUDIT.md` when applicable).

---

## 4. All Pages — List & Brief Description

### Core / marketing
| Route | Description |
|-------|-------------|
| **/** (Home) | Hero (Ken Burns, “Iron Eden,” cinematic vignette), eyebrow “The Makoppa Sanctuary,” CTAs (Book Your Stay, Explore Residences). Private Residences cards (Homestead 16 sleepers, Stone Villa 6 sleepers). A Day in Eden (DayInLife: 5 moments). Conservation Harvest / species cards. What Guests Say (cookie-driven US vs SA). Legacy / impact. Footer. |
| **/about** | Provenance; Makoppa Dome, D1432, Sweetveld; family experience; trophy/estate story; stats (Est. 1984, Sweetveld, Malaria-Free). |
| **/residences** | Private Residences overview; Homestead and Stone Villa cards (sleepers, bedrooms); facility summary; housekeeping; link to sub-pages and book. |
| **/residences/homestead** | The Homestead: facility grid (exterior, lower rooms, kitchen, living, first patio, boma, upper rooms, lapa, braai under trees, trampoline/jungle gym, pool) with image and description. |
| **/residences/stone-villa** | The Stone Villa: facility grid (exterior, kitchen, living, master, en-suites, 2nd bedroom, outdoor braai) with image and description. |
| **/book** | Multi-step booking: dates (DayPicker), residence + guests (availability), guest details, confirm → Stripe checkout or demo. Haptic on primary actions. |
| **/availability** | Check availability by dates; residence summary; CTA to /book or contact. |
| **/rates** | Rates for Homestead and Stone Villa; activity and trophy fees; investment guide. Currency switcher (ZAR/USD). |
| **/contact** | Contact form (Resend), address, map, directions, intent dropdown. |
| **/faq** | Accordion FAQ (lib/faq-data.ts); location, vetting, what’s included, best time, contact. JSON-LD FAQPage. |

### Experience
| Route | Description |
|-------|-------------|
| **/activities** | Five main activities (Conservation Harvest, Photographic Safaris, Celestial Safaris, Mobile Wellness, Wildlife Viewing); expandable sections with imagery; hero. |
| **/wildlife** | Species grid (cards with image, name, tag, link to species page); featured species; Specialist Species list; Ecological Management; Compare and Rates CTAs. |
| **/compare** | Side-by-side species comparison; select species A/B; URL params `?a=slug&b=slug`; table (weight, height, diet, habitat, caliber, Rowland Ward, lifespan). CompareButton on each species page. |
| **/conservation** | “If It Pays, It Stays”; Guardian’s Pledge; impact (meat donated, anti-poaching, families fed); anti-poaching units; community; habitat. |
| **/gallery** | Filterable gallery (All, Landscape, Wildlife, Accommodation); unified grid with curated + Facebook-sourced images; lightbox; no overlays. |
| **/partners** | Trusted partners: dipping/shipping, taxidermy, travel insurance; CTAs to trophy-export and contact. |

### Practical / products
| Route | Description |
|-------|-------------|
| **/wood** | Miwesu Premium Firewood (Engineered Heat): Sekelbos, Geelhak, Braai Mix; moisture/heat stats; product cards; WoodOrderModal; thermal order CTA. |
| **/trophy-export** | Trophy export and travel: field prep, dipping/CITES, shipping, timeline; getting to MIWESU (OR Tambo, D1432); link to Partners. |

### Blog & locale
| Route | Description |
|-------|-------------|
| **/blog** | Hunter’s Journal index; links to articles. |
| **/blog/sweetveld-vs-sourveld** | Authority content: Sweetveld vs Sourveld (SEO, HNWI). |
| **/blog/limpopo-vs-eastern-cape** | Authority content: Limpopo vs Eastern Cape hunting. |
| **/de** | German locale landing (Jagd in Limpopo); hero, copy, CTA. |
| **/es** | Spanish locale landing (Caza en Limpopo); hero, copy, CTA. |

### Tools (Radical Trust)
| Route | Description |
|-------|-------------|
| **/tools** | Tools hub: three cards — SAPS 520 Generator, Biltong Yield Calculator, Live Telemetry Dashboard (liquid-glass-dark). |
| **/tools/saps520** | SAPS 520 form: applicant (name, passport, DOB, address, email, phone), travel (ports, dates, reason), up to 4 firearms. Submit → API generates PDF (pdf-lib). Legal notice: do not sign until SAPS. Haptic on Generate. |
| **/tools/biltong** | Species dropdown (14 species), wet carcass weight; outputs estimated dry biltong yield (SA processing ~38%). Uses lib/biltong-data.ts. |
| **/tools/telemetry** | Two panels: Conservation Impact (hectares, anti-poaching hours, community ZAR); Kiln Telemetry (moisture %, temp, batch). Data from /api/telemetry (simulated); refresh. |

### Admin
| Route | Description |
|-------|-------------|
| **/admin/bookings** | Admin bookings list (from Prisma when enabled). Protected by NEXT_PUBLIC_ADMIN_BOOKING_SECRET query. |

### Species (14)
| Route | Description |
|-------|-------------|
| **/greater-kudu**, **/wildebeest**, **/impala**, **/gemsbok**, **/warthog**, **/blesbok**, **/bushbuck**, **/cape-buffalo**, **/dapple-impala**, **/golden-wildebeest**, **/springbok**, **/red-hartebeest**, **/lechwe**, **/livingstone-eland** | Dedicated species page: hero, Quick Facts (SpeciesBentoGrid), Compare button, taxonomy, physical, behaviour, habitat, hunting, shot placement, caliber table, trophy evaluation, venison/utilisation. All content images integrated. |

### System
| Route | Description |
|-------|-------------|
| **/sitemap.xml** | Dynamic sitemap (public routes); priority tiers; lastModified. |
| **/robots.txt** | Env-aware; production allow with disallow for /api/, /admin/; sitemap ref. |

### API routes (examples)
- **/api/contact** — contact form (Resend).
- **/api/availability** — availability check (Prisma or stub).
- **/api/checkout** — Stripe checkout session.
- **/api/webhooks/stripe** — Stripe webhooks.
- **/api/saps520/pdf** — generate SAPS 520 PDF (pdf-lib).
- **/api/telemetry** — simulated conservation + kiln data.
- **/api/wood-order** — wood product order.
- **/api/admin/bookings** — admin bookings (when Prisma enabled).

---

## 5. Layout, Design & Tech

### Design system
- **Palette:** Gold (300–600), Onyx, Marble (light/dark). Tailwind; `tailwind.config.js`.
- **Fonts:** Cinzel (serif, headings), Montserrat (sans, body). `app/layout.tsx`.
- **Hero imagery:** `lib/hero-images.ts`. Ken Burns on Home, Residences, Activities; species heroes per page.
- **Utilities:** `text-gradient-gold`, `liquid-glass`, `liquid-glass-dark`, `reveal` (scroll animation), `shadow-luxury`, etc.

### Key UI patterns
- Serif headings with gold gradient (“Iron **Eden**”). Uppercase tracking labels.
- Dark (onyx) and light (marble) sections; gold accents. Cards: border, hover scale/shadow; CTAs gold.
- Species: SpeciesBentoGrid (liquid-glass tiles), CompareButton (modal → /compare).
- Home Hero: radial vignette, thin border frame, Framer Motion stagger (Samsung One UI easing). No Design Your Escape or Provenance section on current home.

### Tech stack
- **Framework:** Next.js 15 (App Router). **Language:** TypeScript.
- **Styling:** Tailwind CSS; custom theme.
- **UI:** React 19; Lucide React; Next.js Image.
- **Data:** `lib/residences-data.ts`, `lib/species-comparison-data.ts`, `lib/hero-images.ts`, `lib/activity-images.ts`, `lib/facebook-gallery.ts`. Prisma stubbed for build speed; Stripe, Resend, pdf-lib, date-fns in use.
- **Motion:** Framer Motion (scroll reveals, DayInLife, nav); Tailwind `animate-ken-burns` for hero.
- **Sensory:** Ambient audio toggle (bushveld soundscape); haptic feedback on primary buttons (Compare, Book, Tools).

### Key components
- **Layout** — Navigation, VettingModal, main, Footer; skip link.
- **Navigation** — Fixed; logo; menu overlay (Stay, Experience, Practical, Reach); AmbientAudioToggle; Private Access (VettingModal).
- **Footer** — Brand, tagline, infinite scroll of Facebook gallery images; Residence/Experience/Concierge links; contact; social.
- **SpeciesBentoGrid** — Quick-facts grid on species pages.
- **CompareButton** — Opens modal to pick second species; navigates to /compare.
- **DayInLife** — “A Day in Eden” timeline (5 moments); alternating image/text; squircle, One UI ease.
- **StructuredData** — JSON-LD (Organization, LocalBusiness, SpeciesTaxon, Product, FAQPage, Breadcrumb, etc.).

---

## 6. SEO & Structured Data

- **Metadata:** Every content page has title, description, canonical, Open Graph, Twitter. Species: hreflang (en-US, x-default).
- **Sitemap:** Public routes only; priority: home 1.0; rates/activities/wildlife/species high; about, residences, conservation, blog, etc.
- **Robots:** Env-aware; disallow /api/, /admin/ in production.
- **JSON-LD:** Organization, LocalBusiness (home); SpeciesTaxonSchema per species; Product (wood); TouristTrip; FAQPage; Breadcrumb where used.

---

*Last updated: March 2026. Reflects current homepage structure, all species images integrated, residences data (16 + 6 sleepers, 4 + 2 bedrooms), activities, full page list, and tech stack (Prisma stubbed).*
