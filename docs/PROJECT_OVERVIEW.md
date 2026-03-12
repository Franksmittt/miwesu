# MIWESU — Project Overview

**A complete summary of the MIWESU Game Farm / Iron Eden website and backend.**  
Luxury Next.js 15 application for the private sanctuary in the Makoppa district (Thabazimbi, Limpopo): private residences, 14 wildlife species, activities, conservation, booking enquiries, trust tools, and a full admin/CRM backend.

---

## 1. Project Summary

**What it is**  
A marketing, booking, and operations site for **MIWESU Game Farm** (“Iron Eden”) in the Makoppa Dome, Thabazimbi. The site presents two private residences (Homestead 16 sleepers, Stone Villa 6 sleepers), 14 huntable species, activities (conservation harvest, photographic safaris, celestial safaris, wellness, wildlife viewing), conservation impact, and practical tools (SAPS 520 PDF, Biltong calculator, Live Telemetry). Guests submit **enquiry-only** bookings (no online payment); owners manage enquiries in a **private admin portal** (dashboard, bookings list/detail, email from platform, invoice PDF, status workflow). A **Rates Manager** lets owners edit accommodation/species/activities/extras and export a **Master Pricelist PDF**. SEO is implemented site-wide (metadata, canonicals, sitemap, robots, JSON-LD). Design: Onyx/Gold palette, Cinzel + Montserrat, Liquid Glass, Bento Grids; sensory UX (optional ambient audio, haptic on primary actions).

**Tech**  
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion. Data: `lib/*` (residences, species, activities, blog, gallery); Prisma is stubbed for faster builds and re-enabled when DB is connected. Resend (contact + booking notifications), Stripe (checkout wired, not used for enquiry flow), pdf-lib (SAPS 520, invoice), @react-pdf/renderer (Master Pricelist PDF).

**Current status (March 2026)**  
All species page images integrated. Home: Hero (Ken Burns, vignette), Private Residences, A Day in Eden, Conservation Harvest, testimonials, Legacy. Admin: login, dashboard, bookings (list + detail, filter, email, invoice), Rates Manager (ZAR/USD, inline edit, PDF export). Blog: 15 pillar articles (13 dynamic from `lib/blog-content`, 2 static). Sitemap and robots include all public routes plus blog slugs and species. **Lighthouse / accessibility:** Gold labels on light backgrounds use `text-gold-700` (WCAG AA contrast); footer column titles use `<h2>` for valid heading order; ambient audio loads only on first user play (no 404 on initial load). See `docs/LIGHTHOUSE.md` and `npm run lighthouse` (run after `npm run start`).

---

## 2. Location, Accommodation & Activities

### Location & setting
- **Thabazimbi**, Limpopo; **Makoppa district** (D1432 road); ~40 km from town.
- **Makoppa Dome** — ancient Swazian granite/gneiss; 2.5 billion years.
- **Arid Sweet Bushveld** — nutrient-rich grasses, malaria-free; red sandy loam; flat to gently rolling.
- Exclusive use of chosen residence; daily housekeeping; fibre internet; secure perimeter; both houses inside the reserve. D1432 gravel; high-clearance vehicle recommended Oct–Mar.

### Accommodation — bedrooms & capacity

| Residence | Sleepers | Bedrooms | Layout |
|-----------|----------|----------|--------|
| **The Homestead** (Main Lodge) | 16 | 4 | Lower: Lower Room 1 & 2 (3 each), shared bathroom; Kitchen, Living. Upper: Upper Room 1 & 2 (5 each). |
| **The Stone Villa** | 6 | 2 | Master (en-suite shower); 2nd bedroom with 2 bunks (sleeps 4), en-suite with bathtub. Open-plan Kitchen, Living. |

**Source:** `lib/residences-data.ts`.

### Homestead amenities
Indoor: full kitchen, living, first patio (thatched). Lapa: pool table, darts, wet bar. Outdoor: boma/braai, braai under trees, trampoline/jungle gym, pool with water slide, lawn, thatched shade.

### Stone Villa amenities
Indoor: kitchen, living, master en-suite, second bedroom (bunks, en-suite). Outdoor: braai overlooking dam, near main pool; stargazing deck and telescope; Nespresso; daily housekeeping.

### Activities (brief)
| Activity | Description |
|----------|-------------|
| Conservation Harvest | Quota-based ethical hunting with professional trackers. |
| Photographic Safaris | Guided wildlife photography in the Makoppa. |
| Celestial Safaris | Dark-sky astronomy sessions. |
| Mobile Wellness | In-villa treatments (e.g. Marula oils). |
| Wildlife Viewing | Game drives and walking safaris. |

Additional themes: birding, 4x4 trails. **Page:** `/activities`; imagery from `lib/activity-images.ts`.

---

## 3. Wildlife / Species

**14 species**, each with a dedicated page and an entry in the **Compare** tool (`lib/species-comparison-data.ts`, `lib/species-data.ts`).

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

Each species page: hero, Quick Facts (SpeciesBentoGrid), Compare button, taxonomy, physical description, behaviour, habitat, hunting strategies, shot placement, caliber, trophy evaluation, venison/utilisation. Content images are integrated (see `docs/SPECIES_IMAGE_PLACEHOLDER_AUDIT.md` when relevant).

---

## 4. All Pages — Brief Summary

### Core / marketing
| Route | Summary |
|-------|--------|
| **/** (Home) | Hero (“Iron Eden,” Ken Burns, vignette), eyebrow “The Makoppa Sanctuary,” CTAs (Book Your Stay, Explore Residences). Private Residences cards (Homestead 16, Stone Villa 6). A Day in Eden (5 moments). Conservation Harvest / species cards. What Guests Say (cookie-driven US vs SA). Legacy / impact. Footer. |
| **/about** | Provenance; Makoppa Dome, D1432, Sweetveld; family experience; trophy/estate story; stats (Est. 1984, Sweetveld, Malaria-Free). |
| **/residences** | Private Residences overview; Homestead and Stone Villa cards; facility summary; link to sub-pages and book. |
| **/residences/homestead** | The Homestead: facility grid (exterior, rooms, kitchen, living, patio, boma, lapa, braai, trampoline, pool) with images and copy. |
| **/residences/stone-villa** | The Stone Villa: facility grid (exterior, kitchen, living, master, 2nd bedroom, braai) with images and copy. |
| **/book** | Multi-step booking: dates (DayPicker), residence + guests (availability), guest details, submit **enquiry** (no payment). Haptic on primary actions. |
| **/availability** | Check availability by dates; residence summary; CTA to /book or contact. |
| **/rates** | Rates for Homestead and Stone Villa; activities and trophy fees; investment guide. Currency switcher (ZAR/USD). |
| **/contact** | Contact form (Resend), address, map, directions, intent dropdown. |
| **/faq** | Accordion FAQ (`lib/faq-data.ts`); location, vetting, what’s included, best time, contact. JSON-LD FAQPage. |

### Experience
| Route | Summary |
|-------|--------|
| **/activities** | Five activities (Conservation Harvest, Photographic Safaris, Celestial Safaris, Mobile Wellness, Wildlife Viewing); expandable sections with imagery; hero. |
| **/wildlife** | Species grid (cards with image, name, tag, link); featured species; Specialist Species list; Ecological Management; Compare and Rates CTAs. |
| **/compare** | Side-by-side species comparison; select species A/B; URL params `?a=slug&b=slug`; table (weight, height, diet, habitat, caliber, Rowland Ward, lifespan). CompareButton on each species page. |
| **/conservation** | “If It Pays, It Stays”; Guardian’s Pledge; impact (meat donated, anti-poaching, families fed); anti-poaching; community; habitat. |
| **/gallery** | Filterable gallery (All, Landscape, Wildlife, Accommodation); unified grid (curated + Facebook images); lightbox; no overlays. |
| **/partners** | Dipping/shipping, taxidermy, travel insurance; CTAs to trophy-export and contact. |

### Practical / products
| Route | Summary |
|-------|--------|
| **/wood** | Miwesu Premium Firewood (Sekelbos, Geelhak, Braai Mix); moisture/heat stats; product cards; WoodOrderModal; thermal order CTA. |
| **/trophy-export** | Trophy export and travel: field prep, dipping/CITES, shipping, timeline; getting to MIWESU (OR Tambo, D1432); link to Partners. |

### Blog (Hunter’s Journal)
| Route | Summary |
|-------|--------|
| **/blog** | Blog index; Bento-style grid; category filter (All, Conservation, Ballistics, Luxury Living, Logistics); links to all 15 articles. |
| **/blog/[slug]** | Dynamic post (13 pillars from `lib/blog-content.ts`): hero, category, title, sections, author placeholder, contextual CTA (tool, book, compare, etc.). |
| **/blog/sweetveld-vs-sourveld** | Static: Sweetveld vs Sourveld (SEO, HNWI). |
| **/blog/limpopo-vs-eastern-cape** | Static: Limpopo vs Eastern Cape hunting. |

**Blog categories:** Conservation, Ballistics, Luxury Living, Logistics. **Pillar slugs (examples):** saps-520-firearm-permit-us-hunters, 300-win-mag-blue-wildebeest-terminal-performance, exclusive-16-sleeper-luxury-lodge-thabazimbi, art-of-authentic-south-african-biltong-making, rowland-ward-trophy-standards-greater-kudu, ethical-shot-placement-cape-buffalo-fused-boss, malaria-free-celestial-safaris-waterberg, conservation-harvest-esg-environmental-stewardship, bespoke-bushveld-living-fiber-optic-internet, golden-vs-blue-wildebeest-african-plains-game, limpopo-hunting-season-2026-weather-tactics, livingstone-eland-harvesting-africas-largest-antelope, stone-villa-experience-intimate-luxury-makoppa, south-africa-vs-usa-hunting-regulations, transparency-conservation-live-telemetry-dashboard, sweetveld-vs-sourveld, limpopo-vs-eastern-cape.

### Locale
| Route | Summary |
|-------|--------|
| **/de** | German landing (Jagd in Limpopo); hero, copy, CTA. |
| **/es** | Spanish landing (Caza en Limpopo); hero, copy, CTA. |

### Tools (Radical Trust)
| Route | Summary |
|-------|--------|
| **/tools** | Tools hub: SAPS 520 Generator, Biltong Yield Calculator, Live Telemetry Dashboard (liquid-glass-dark cards). |
| **/tools/saps520** | SAPS 520 form: applicant (name, passport, DOB, address, email, phone), travel (ports, dates, reason), up to 4 firearms. Submit → API generates PDF (pdf-lib). Legal notice: do not sign until SAPS. Haptic on Generate. |
| **/tools/biltong** | Species dropdown (14), wet carcass weight; estimated dry biltong yield (SA ~38%). Uses `lib/biltong-data.ts`. |
| **/tools/telemetry** | Two panels: Conservation Impact (hectares, anti-poaching hours, community ZAR); Kiln Telemetry (moisture %, temp, batch). Data from `/api/telemetry` (simulated); refresh. |

### Admin (backend)
| Route | Summary |
|-------|--------|
| **/admin/login** | Password sign-in (`ADMIN_PASSWORD`); session cookie; redirect to /admin. |
| **/admin** | Dashboard: summary cards (pending, confirmed, upcoming); quick links to Bookings, Rates, Site; logout. |
| **/admin/bookings** | Bookings list (enquiries); filter by status (Pending, Quoted, Confirmed, Cancelled); table with guest, dates, residence, status; link to detail. Calendar view section. |
| **/admin/bookings/[id]** | Single booking: full details, internal notes, status change, **Email client** (compose/send; logged in EmailLog), **Generate invoice PDF**, Create Quote (modal: pull from RateItem, total). Centralized “CRM” record. |
| **/admin/rates** | Rates Manager: global ZAR/USD toggle; categorized bento (Accommodation, Species, Activities, Extras); inline edit; **Export Pricelist (PDF)** button. Uses `RateItem` (DB or mock). |

### Species (14)
| Route | Summary |
|-------|--------|
| **/greater-kudu**, **/wildebeest**, **/impala**, **/gemsbok**, **/warthog**, **/blesbok**, **/bushbuck**, **/cape-buffalo**, **/dapple-impala**, **/golden-wildebeest**, **/springbok**, **/red-hartebeest**, **/lechwe**, **/livingstone-eland** | Dedicated species page: hero, Quick Facts (SpeciesBentoGrid), Compare, taxonomy, physical, behaviour, habitat, hunting, shot placement, caliber, trophy, venison. Content images integrated. |

### System
| Route | Summary |
|-------|--------|
| **/sitemap.xml** | Dynamic sitemap: static routes + blog slugs + species; priority and changeFrequency per route. |
| **/robots.txt** | Env-aware; production: allow /, disallow /api/, /admin/, /guest/, /_next/, /private/; sitemap URL. |

---

## 5. Backend (Admin Portal & APIs)

### Purpose
Private backend for lodge owners: receive booking enquiries, view them in one place, email clients, generate invoices, create quotes from rate items, lock in dates by setting status to Confirmed (which blocks those dates on the site). Acts as a lightweight **CRM** for enquiries and bookings.

### Flow
1. **Guest:** /book → dates, residence, guests, details → **Submit enquiry** (no payment).  
2. **System:** Creates PENDING booking; sends owner email (“You have a new booking enquiry…”); optional Resend.  
3. **Owner:** Logs in at /admin → Dashboard (counts, upcoming) → Bookings list (filter Pending/Quoted/Confirmed/Cancelled) → opens booking detail.  
4. **Per booking:** View details and notes; **Send email** to guest (stored in EmailLog); **Create Quote** (modal: select rate items, quantity, total); **Generate invoice PDF**; set **Status** to Quoted or Confirmed (Confirmed blocks dates in /api/availability).  
5. **Rates:** /admin/rates — edit accommodation, species, activities, extras (ZAR/USD); **Export Pricelist PDF** (branded brochure from RateItem data).

### Admin routes
- **/admin/login** — Password auth; cookie-based session; redirect to /admin.  
- **/admin** — Dashboard (summary cards, quick links).  
- **/admin/bookings** — List all enquiries/bookings; status filter.  
- **/admin/bookings/[id]** — One booking: details, notes, status, email client, invoice, Create Quote.  
- **/admin/rates** — Rates Manager UI; inline edit; Export Pricelist PDF.

### Admin APIs
| Method | Route | Purpose |
|--------|-------|--------|
| POST | /api/admin/login | Validate password; set session cookie. |
| POST | /api/admin/logout | Clear session cookie. |
| GET | /api/admin/me | Check session; 401 if not authenticated. |
| GET | /api/admin/bookings | List bookings; optional status filter; mock data when no DB. |
| GET / PATCH | /api/admin/bookings/[id] | Load or update one booking (status, internal notes). |
| GET | /api/admin/bookings/[id]/invoice | Generate and return invoice PDF (pdf-lib). |
| POST | /api/admin/send-email | Send email to guest; log in EmailLog (if Prisma). |
| GET | /api/admin/rates | List RateItem by category; system settings (e.g. exchange rate). |
| PATCH | /api/admin/rates/[id] | Update one rate item (priceZAR, priceUSD, etc.). |
| GET / PATCH | /api/admin/settings | System settings (e.g. global ZAR/USD exchange rate). |
| GET | /api/admin/pricelist-pdf | Generate Master Pricelist PDF (@react-pdf/renderer); branded Onyx/Gold. |

### Data (when Prisma enabled)
- **Booking:** guest details, dates, residence, guests, status (PENDING, QUOTED, CONFIRMED, CANCELLED), totalPrice, internalNotes; relation to Quote.  
- **Quote / QuoteItem:** linked to Booking; items from RateItem; totalAmount, currency, validUntil.  
- **EmailLog:** per booking; sent emails from portal.  
- **RateItem:** category (ACCOMMODATION, SPECIES, ACTIVITY, EXTRA), name, description, priceZAR, priceUSD, isAvailable, sortOrder.  
- **SystemSettings:** e.g. exchangeRateZarUsd.  

When Prisma is stubbed, admin uses mock bookings and mock rate data; behaviour is unchanged except persistence.

### Mock data
- **Bookings:** Demo rows (e.g. Sarah van der Berg, James & Emma Thompson) so the portal can be demonstrated without real enquiries.  
- **Rates:** Default rate items from `lib/rates-data.ts` when DB is unavailable.

---

## 6. Public APIs

| Method | Route | Purpose |
|--------|-------|--------|
| POST | /api/contact | Contact form submission (Resend). |
| GET | /api/availability | Check availability (blocked dates from CONFIRMED bookings only). |
| POST | /api/booking-enquiry | Create PENDING booking; send owner notification email. |
| POST | /api/checkout | Stripe checkout session (wired; not used in enquiry flow). |
| POST | /api/webhooks/stripe | Stripe webhooks. |
| POST | /api/saps520/pdf | Generate SAPS 520 PDF (pdf-lib) from form data. |
| GET | /api/telemetry | Simulated conservation + kiln telemetry data. |
| POST | /api/wood-order | Wood product order submission. |

---

## 7. SEO

### Root metadata (`app/layout.tsx`)
- **Title:** default “IRON EDEN | The Makoppa Sanctuary & Game Reserve”; template “%s | Miwesu Conservation Harvest”.  
- **Description:** 2.5-billion-year-old sanctuary, Thabazimbi, bespoke luxury, ethical conservation, malaria-free bushveld, D1432 Makoppa.  
- **Keywords:** MIWESU, Iron Eden, Makoppa, Thabazimbi, conservation harvest, luxury hunting lodge, malaria-free safari, plains game, Sweetveld, Waterberg, etc.  
- **Open Graph:** title, description, url, image (og-image.jpg), siteName, locale **en_ZA**.  
- **Twitter:** summary_large_image, title, description, image.  
- **Robots:** index, follow; googleBot directives.

### Per-page SEO
- **Every content page:** layout exports (or `generateMetadata` for dynamic) `title`, `description`, `keywords`, `openGraph`, `twitter`, `alternates.canonical` (via `constructCanonicalUrl`).  
- **Species:** scientific names, caliber, Rowland Ward minimums in descriptions where relevant.  
- **Blog:** dynamic metadata from `getBlogPostBySlug` in `app/blog/[slug]/layout.tsx`.

### Canonicals & URLs
- **lib/seo.ts:** `constructCanonicalUrl(path)` — no trailing slash (except root).  
- **Base URL:** `NEXT_PUBLIC_BASE_URL` or https://www.miwesu.com.

### Sitemap (`app/sitemap.ts`)
- **Static routes:** home (priority 1.0, daily), rates/availability (daily), wildlife/residences/species (weekly/high priority), about/activities/conservation/gallery/wood/book/faq/contact/tools/compare/blog (monthly), locale de/es (monthly, lower priority).  
- **Species:** one URL per slug; weekly; priority 0.85.  
- **Blog:** one URL per slug from `getBlogSlugs()`; monthly; priority 0.7.

### Robots (`app/robots.ts`)
- **Production:** allow /; disallow /api/, /admin/, /guest/, /_next/, /private/; sitemap URL.  
- **Non-production:** disallow / for all crawlers.

### JSON-LD (lib/seo.ts, StructuredData, layouts)
- **Organization:** name, url, logo, description, address, contactPoint, sameAs (e.g. safariclub.org, phasa.co.za), areaServed.  
- **LocalBusiness (LodgingBusiness):** name, image, description, address, geo, telephone, email, priceRange, numberOfRooms, openingHours, amenityFeature.  
- **SpeciesTaxonSchema:** per species page (scientific name, etc.).  
- **Product:** wood products.  
- **TouristTrip:** trip-related.  
- **FAQPage:** /faq.  
- **Breadcrumb:** where used (e.g. blog, tools, book).

---

## 8. Layout, Design & Tech

### Design system
- **Palette:** Gold (300–600), Onyx, Marble (light/dark). Tailwind; `tailwind.config.js`.  
- **Fonts:** Cinzel (serif, headings), Montserrat (sans, body).  
- **Hero imagery:** `lib/hero-images.ts`. Ken Burns on Home; species heroes per page.  
- **Utilities:** `text-gradient-gold`, `liquid-glass`, `liquid-glass-dark`, `reveal`, `shadow-luxury`, etc.

### Key UI patterns
- Serif headings with gold gradient (“Iron **Eden**”). Uppercase tracking labels.  
- Dark (onyx) and light (marble) sections; gold accents. Cards: border, hover scale/shadow; CTAs gold.  
- Species: SpeciesBentoGrid (liquid-glass tiles), CompareButton (modal → /compare).  
- Home Hero: radial vignette, thin border frame, Framer Motion stagger (Samsung One UI easing).

### Tech stack
- **Framework:** Next.js 15 (App Router). **Language:** TypeScript.  
- **Styling:** Tailwind CSS; custom theme.  
- **UI:** React 19; Lucide React; Next.js Image.  
- **Data:** `lib/residences-data.ts`, `lib/species-data.ts`, `lib/species-comparison-data.ts`, `lib/hero-images.ts`, `lib/activity-images.ts`, `lib/facebook-gallery.ts`, `lib/blog-posts.ts`, `lib/blog-content.ts`, `lib/rates-data.ts`. Prisma stubbed for build speed.  
- **Motion:** Framer Motion (scroll reveals, DayInLife, nav); Tailwind `animate-ken-burns` for hero.  
- **Sensory:** Ambient audio toggle (bushveld soundscape); haptic feedback on primary buttons.

### Key components
- **Layout** — Navigation, VettingModal, main, Footer; skip link.  
- **Navigation** — Fixed; logo; menu overlay (Stay, Experience, Practical, Journal, Reach); AmbientAudioToggle; Private Access (VettingModal).  
- **Footer** — Brand, tagline, infinite scroll of Facebook gallery images; column titles as `<h2>` (Stay, Experience, Concierge, Reach us); Residence/Experience/Concierge/Journal links; contact; social.  
- **SpeciesBentoGrid** — Quick-facts grid on species pages.  
- **CompareButton** — Modal to pick second species; navigates to /compare.  
- **DayInLife** — “A Day in Eden” timeline (5 moments); alternating image/text; squircle, One UI ease.  
- **StructuredData** — JSON-LD injection (Organization, LocalBusiness, SpeciesTaxon, Product, FAQPage, Breadcrumb, etc.).  
- **AdminShell** — Sticky admin top bar: Dashboard, Bookings, Rates, Site (external), Log out.

---

## 9. Documentation

- **docs/PROJECT_OVERVIEW.md** — This file.  
- **docs/ADMIN_PORTAL_OVERVIEW.md** — Admin/CRM flow, features, routes, mock data.  
- **docs/LIGHTHOUSE.md** — How to run Lighthouse, fixes applied (contrast, heading order, console errors), target scores.  
- **docs/HERO_IMAGE_AUDIT.md** — Hero image specs per page (dimensions, safe zones, aesthetics).  
- **docs/SPECIES_IMAGE_PLACEHOLDER_AUDIT.md** — Species content image audit.  
- **docs/SPECIES_PLACEHOLDER_IMAGE_PROMPTS.json** — Remaining image prompts (when applicable).  
- **docs/HOME_AND_DESIGN_GUIDE.md** — Home and design notes.  
- **prisma/README_BOOKING.md**, **prisma/SUPABASE_CONNECT.md** — DB and deployment notes.

---

*Last updated: March 2026. Reflects full site (all pages, backend, SEO, blog, tools), Prisma stubbed, enquiry-only booking flow, Rates Manager with Master Pricelist PDF, and Lighthouse/accessibility fixes (gold-700 contrast, footer heading order, ambient audio lazy load).*
