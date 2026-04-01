# MIWESU — Project Overview

**A complete summary of the MIWESU Game Farm / Iron Eden website and backend.**  
Luxury Next.js 15 application for the private sanctuary in the Makoppa district (Thabazimbi, Limpopo): private residences, 14 wildlife species, activities, conservation, booking enquiries, trust tools, and a full admin/CRM backend with calendar and manual booking.

---

## 1. Project Summary

**What it is**  
A marketing, booking, and operations site for **MIWESU Game Farm** (“Iron Eden”) in the Makoppa Dome, Thabazimbi. The site presents two private residences (The Homestead 16 sleepers, The Stone Villa 6 sleepers), 14 huntable species, activities (conservation harvest, guided game drives, walking safaris, boma evenings, wellness, wildlife viewing, birding), conservation impact, and practical tools (SAPS 520 PDF, Biltong calculator). Guests submit **enquiry-only** bookings (no online payment); owners manage enquiries in a **private admin portal** (dashboard, bookings list/detail, **calendar view**, manual “Add booking,” email from platform, invoice PDF, status workflow). A **Rates Manager** lets owners edit accommodation/species/activities/extras and export a **Master Pricelist PDF**. **Pricing is on request only on the public site**; no amounts are shown on the website. SEO is implemented site-wide (metadata, canonicals, sitemap, robots, JSON-LD). Design: Onyx/Gold palette, Cinzel + Montserrat, Liquid Glass, Bento Grids; sensory UX (optional ambient audio, haptic on primary actions).

**Tech**  
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion. Data: `lib/*` (residences, species, activities, blog, gallery); **Prisma + Supabase** (PostgreSQL) for bookings, units, rates, email log; when DB is empty, admin uses mock data. **Resend** for all email (contact form, booking notifications, admin→guest, confirmation on status→Confirmed). **pdf-lib** (SAPS 520, invoice); **@react-pdf/renderer** (Master Pricelist PDF; uses built-in Helvetica fonts so PDF generates reliably in serverless). Stripe checkout wired but not used in enquiry flow.

**Current status (March 2026)**  
All species page images integrated. Home: Hero (Ken Burns, vignette), Private Residences, A Day in Eden, Conservation Harvest, testimonials, Legacy. **Admin:** login, dashboard, **bookings** (list + detail, filter, status dropdown with visible options, email client, invoice), **Calendar** (month view per unit, manual “Add booking”), **Rates** (ZAR/USD, inline edit, Export Pricelist PDF), **Email** (diagnostics, sandbox test, test from domain). Contact form and booking enquiry emails working via Resend; contact form shows Resend error on page when send fails. Public **rates** page shows “On request” only. Blog: 15 pillar articles. Sitemap and robots include all public routes plus blog slugs and species. Accessibility: gold labels on light backgrounds use `text-gold-700` (WCAG AA); footer column titles use `<h2>`; ambient audio loads only on first user play.

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
Indoor: kitchen, living, master en-suite, second bedroom (bunks, en-suite). Outdoor: braai overlooking dam, near main pool; outdoor deck; Nespresso; daily housekeeping.

### Activities (brief)
| Activity | Description |
|----------|-------------|
| Conservation Harvest | Quota-based ethical hunting with professional trackers. |
| Guided game drives | Wildlife viewing from safari vehicles with the PH team. |
| Walking safaris | On-foot time with guides when arranged. |
| Boma, lapa & braai | Homestead outdoor braai, boma fire, shared evenings. |
| Friends & family / shared stays | Exclusive-use groups, pool and play, multi-gen rhythm. |
| Wildlife Viewing | Quiet viewing and birding in habitat. |

Additional themes: birding. **Page:** `/activities`; imagery from `lib/activity-images.ts`.

---

## 3. Wildlife / Species

**14+ species**, each with a dedicated page and an entry in the **Compare** tool (`lib/species-comparison-data.ts`, `lib/species-data.ts`).

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

Each species page: hero, Quick Facts (SpeciesBentoGrid), Compare button, taxonomy, physical description, behaviour, habitat, hunting strategies, shot placement, caliber, trophy evaluation, venison/utilisation. Content images are integrated.

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
| **/rates** | Accommodation and activity sections; **all prices shown as “On request”** (no amounts on public site). Currency switcher (ZAR/USD). Investment Guide CTA. |
| **/contact** | Contact form (Resend); address, map, directions, intent dropdown. **From** is verified domain; **Reply-To** is submitter. Resend error shown on page when send fails. |
| **/faq** | Accordion FAQ (`lib/faq-data.ts`); location, vetting, what’s included, best time, contact. JSON-LD FAQPage. |

### Experience
| Route | Summary |
|-------|--------|
| **/activities** | Conservation Harvest, guided game drives, walking safaris, birding, boma/lapa section, Friends & family, wildlife viewing; sections with imagery; hero. |
| **/wildlife** | Species grid (cards with image, name, tag, link); featured species; Specialist Species list; Ecological Management; Compare and Rates CTAs. |
| **/compare** | Side-by-side species comparison; select species A/B; URL params `?a=slug&b=slug`; table (weight, height, diet, habitat, caliber, Rowland Ward, lifespan). CompareButton on each species page. |
| **/conservation** | “If It Pays, It Stays”; Guardian’s Pledge; impact (ethical harvest, anti-poaching, local economy); anti-poaching; community; habitat. |
| **/gallery** | Filterable gallery (All, Landscape, Wildlife, Accommodation); unified grid (curated + Facebook images); no overlays. |
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

**Blog categories:** Conservation, Ballistics, Luxury Living, Logistics.

### Locale
| Route | Summary |
|-------|--------|
| **/de** | German landing (Jagd in Limpopo); hero, copy, CTA. |
| **/es** | Spanish landing (Caza en Limpopo); hero, copy, CTA. |

### Tools (Radical Trust)
| Route | Summary |
|-------|--------|
| **/tools** | Tools hub: SAPS 520 Generator and Biltong Yield Calculator (liquid-glass-dark cards). |
| **/tools/saps-520** | SAPS 520 form: applicant (name, passport, DOB, address, email, phone), travel (ports, dates, reason), up to 4 firearms. Submit → API generates PDF (pdf-lib). Legal notice: do not sign until SAPS. Haptic on Generate. |
| **/tools/biltong-calculator** | Species dropdown (14), wet carcass weight; estimated dry biltong yield (SA ~38%). Uses `lib/biltong-data.ts`. |

### Admin (backend)
| Route | Summary |
|-------|--------|
| **/admin/login** | Password sign-in (`ADMIN_PASSWORD`); session cookie; redirect to /admin. |
| **/admin** | Dashboard: summary cards (pending, confirmed, upcoming); quick links to Bookings, Calendar, Rates, Email, Site; logout. |
| **/admin/bookings** | Bookings list; filter by status (Pending, Quoted, Confirmed, Cancelled); table with guest, dates, residence, status; link to detail. |
| **/admin/bookings/[id]** | Single booking: full details, internal notes, **status dropdown** (visible options), **Email client** (compose/send; logged in EmailLog; success even if log fails), **Generate invoice PDF**, Create Quote (modal: pull from RateItem, total). |
| **/admin/calendar** | **Calendar:** month view per unit (Homestead, Stone Villa); each day shows if booked and by whom (link to booking detail). **Add booking** button opens modal: unit, check-in/out, guest name/email/phone, guests, price, status; creates booking via API. For phone bookings and visual availability. |
| **/admin/rates** | Rates Manager: global ZAR/USD toggle; categorized bento (Accommodation, Species, Activities, Extras); inline edit; **Export Pricelist (PDF)** button. Uses `RateItem` (DB or mock). Seed includes mock prices for testing PDF. |
| **/admin/email-status** | **Email diagnostics:** shows if RESEND_API_KEY and from addresses are set; **Send test (your domain)** and **Send sandbox test** (onboarding@resend.dev) to verify delivery. |

### Species (14)
| Route | Summary |
|-------|--------|
| **/greater-kudu**, **/wildebeest**, **/impala**, **/gemsbok**, **/warthog**, **/blesbok**, **/bushbuck**, **/cape-buffalo**, **/dapple-impala**, **/golden-wildebeest**, **/springbok**, **/red-hartebeest**, **/lechwe**, **/livingstone-eland** | Dedicated species page: hero, Quick Facts (SpeciesBentoGrid), Compare, taxonomy, physical, behaviour, habitat, hunting, shot placement, caliber, trophy, venison. Content images integrated. |

### System
| Route | Summary |
|-------|--------|
| **/sitemap.xml** | Dynamic sitemap: static routes + blog slugs + species; priority and changeFrequency per route. |
| **/robots.txt** | Env-aware; production: allow /, disallow /api/, /admin/, etc.; sitemap URL. |

---

## 5. Backend (Admin Portal & APIs)

### Purpose
Private backend for lodge owners: receive booking enquiries, view them in one place, **see a calendar of when each unit is booked**, **add manual bookings** (e.g. phone enquiries), email clients, generate invoices, create quotes from rate items, lock in dates by setting status to Confirmed (which blocks those dates on the site). Acts as a lightweight **CRM** for enquiries and bookings.

### Flow
1. **Guest:** /book → dates, residence, guests, details → **Submit enquiry** (no payment).  
2. **System:** Creates PENDING booking; sends owner email (“You have a new booking enquiry…”); Resend.  
3. **Owner:** Logs in at /admin → Dashboard → **Bookings** (list + filter) or **Calendar** (month view per unit). Can **Add booking** manually (e.g. someone phoned).  
4. **Per booking:** View details and notes; **Send email** to guest (stored in EmailLog; API returns success when Resend delivers even if log fails); **Create Quote** (modal); **Generate invoice PDF**; set **Status** to Quoted or **Confirmed** (Confirmed blocks dates and sends guest confirmation email).  
5. **Rates:** /admin/rates — edit accommodation, species, activities, extras (ZAR/USD); **Export Pricelist PDF** (branded, built-in fonts for serverless).  
6. **Email:** /admin/email-status — check config, send test or sandbox test.

### Admin routes
- **/admin/login** — Password auth; cookie-based session.  
- **/admin** — Dashboard (summary cards, quick links).  
- **/admin/bookings** — List all enquiries/bookings; status filter.  
- **/admin/bookings/[id]** — One booking: details, notes, status, email client, invoice, Create Quote.  
- **/admin/calendar** — Month view per unit; Add booking modal (manual create).  
- **/admin/rates** — Rates Manager; inline edit; Export Pricelist PDF.  
- **/admin/email-status** — Email config and test sends.

### Admin APIs
| Method | Route | Purpose |
|--------|-------|--------|
| POST | /api/admin/login | Validate password; set session cookie. |
| POST | /api/admin/logout | Clear session cookie. |
| GET | /api/admin/me | Check session; 401 if not authenticated. |
| GET | /api/admin/units | List units (id, name, maxGuests) for calendar and forms. |
| GET | /api/admin/bookings | List bookings (with unitId); optional status filter; mock when no DB. |
| POST | /api/admin/bookings/create | Create booking manually (unitId, guest, dates, guests, price, status). |
| GET / PATCH | /api/admin/bookings/[id] | Load or update one booking (status, internal notes). On PATCH to CONFIRMED, sends guest confirmation email. |
| GET | /api/admin/bookings/[id]/invoice | Generate and return invoice PDF (pdf-lib). |
| POST | /api/admin/send-email | Send email to guest; log in EmailLog (non-fatal if log fails). |
| GET | /api/admin/rates | List RateItem by category; system settings (e.g. exchange rate). |
| PATCH | /api/admin/rates/[id] | Update one rate item (priceZAR, priceUSD, etc.). |
| GET / PATCH | /api/admin/settings | System settings (e.g. global ZAR/USD exchange rate). |
| GET | /api/admin/pricelist-pdf | Generate Master Pricelist PDF (@react-pdf/renderer; Helvetica fonts). |

### Data (Prisma + Supabase)
- **Unit** — name, maxGuests, description, basePricePerNight.  
- **Booking** — guest details, dates, unitId, totalGuests, status (PENDING, QUOTED, CONFIRMED, CANCELLED), totalPrice, internalNotes; relation to Unit, EmailLog, Quote.  
- **EmailLog** — bookingId, subject, body, sentAt, direction.  
- **RateItem** — category (ACCOMMODATION, SPECIES, ACTIVITY, EXTRA), name, description, priceZAR, priceUSD, isAvailable, sortOrder. Seed has mock prices for accommodation, 14+ species, activities, extra.  
- **Quote / QuoteItem** — linked to Booking; items from RateItem.  
- **SystemSettings** — e.g. exchangeRateZarUsd.  

When DB is empty or Prisma fails, admin uses mock bookings and default rate items from `lib/rates-data.ts` and `lib/admin-mock-bookings.ts`.

---

## 6. Public APIs

| Method | Route | Purpose |
|--------|-------|--------|
| POST | /api/contact | Contact form (Resend). From = verified domain; Reply-To = submitter. Returns resendError in JSON on failure. |
| GET | /api/availability | Blocked dates from CONFIRMED bookings only. |
| POST | /api/booking-enquiry | Create PENDING booking; send owner notification email. |
| POST | /api/checkout | Stripe checkout session (wired; not used in enquiry flow). |
| POST | /api/webhooks/stripe | Stripe webhooks. |
| POST | /api/saps520/pdf | Generate SAPS 520 PDF (pdf-lib) from form data. |
| POST | /api/wood-order | Wood product order submission (Resend). |

---

## 7. SEO

### Root metadata (`app/layout.tsx`)
- **Title:** default “IRON EDEN | The Makoppa Sanctuary & Game Reserve”; template “%s | Miwesu Conservation Harvest”.  
- **Description:** 2.5-billion-year-old sanctuary, Thabazimbi, bespoke luxury, ethical conservation, malaria-free bushveld, D1432 Makoppa.  
- **Keywords:** MIWESU, Iron Eden, Makoppa, Thabazimbi, conservation harvest, luxury hunting lodge, malaria-free safari, plains game, Sweetveld, Waterberg, etc.  
- **Open Graph / Twitter:** title, description, url, image (og-image.jpg), siteName, locale **en_ZA**.  
- **Robots:** index, follow; googleBot directives.

### Per-page SEO
- Every content page: `title`, `description`, `keywords`, `openGraph`, `twitter`, `alternates.canonical` (via `constructCanonicalUrl` in `lib/seo.ts`).  
- Species: scientific names, caliber, Rowland Ward in descriptions.  
- Blog: dynamic metadata from `getBlogPostBySlug` in `app/blog/[slug]/layout.tsx`.

### Sitemap (`app/sitemap.ts`)
- Static routes (home, rates, availability, wildlife, residences, species, about, activities, conservation, gallery, wood, book, faq, contact, tools, compare, blog); locale de/es.  
- Species: one URL per slug; blog: one per slug from `getBlogSlugs()`.

### Robots (`app/robots.ts`)
- Production: allow /; disallow /api/, /admin/, /guest/, /_next/, /private/; sitemap URL.  
- Non-production: disallow / for all crawlers.

### JSON-LD (lib/seo.ts, StructuredData, layouts)
- Organization, LocalBusiness (LodgingBusiness), SpeciesTaxonSchema per species, Product (wood), TouristTrip, FAQPage (/faq), Breadcrumb where used.

---

## 8. Layout, Design & Tech

### Design system — colours
- **Onyx** — `#050505` (true black); **onyx-light** — `#121212` (cards, admin).  
- **Gold** — 300 `#E5C687`, 400 `#D4AF37`, 500 `#C5A059`, 600 `#997B3D`, 700 `#7c6426` (contrast-safe on light).  
- **Marble** — `#FAFAFA` (background); **marble-dark** — `#F4F4F4`.  
- **Tailwind:** `tailwind.config.js`; themeColor in layout `#050505`.

### Design system — typography
- **Cinzel** (serif) — headings, brand; `var(--font-cinzel)`.  
- **Montserrat** (sans) — body, labels; `var(--font-montserrat)`.  
- Loaded via `next/font/google` in `app/layout.tsx`.

### Design system — UI patterns
- **Hero:** Ken Burns animation (`animate-ken-burns`); radial vignette; thin border frame on desktop.  
- **Liquid glass:** `.liquid-glass`, `.liquid-glass-dark` (backdrop-filter, borders).  
- **Bento grids:** SpeciesBentoGrid (species pages); blog index; admin rates.  
- **Gold gradient text:** `.text-gradient-gold` on “Eden” and key headlines.  
- **CTAs:** Gold buttons; ghost/secondary with underline or arrow.  
- **Squircle / ease:** Rounded corners (e.g. `rounded-2xl`); Framer Motion ease `cubic-bezier(0.22, 0.25, 0, 1)` (Samsung One UI) on Home sections.  
- **Admin:** Dark theme (onyx); status and filter dropdowns use `.admin-select` and `option` styles in `globals.css` for visible text.

### Key components
- **Layout** — Navigation, VettingModal, main, Footer; skip link.  
- **Navigation** — Fixed; logo; menu overlay (Stay, Experience, Practical, Journal, Reach); AmbientAudioToggle; Private Access (VettingModal).  
- **Footer** — Top section: cols 1–2 brand + tagline (“MIWESU”, “Est. 1984 · The Makoppa Sanctuary”, paragraph); cols 3–6 **infinite scroll** of Facebook gallery images (`animate-footer-marquee`). Below: column links (Stay, Experience, Concierge, Reach us) as `<h2>`; contact; social.  
- **SpeciesBentoGrid** — Quick-facts grid on species pages.  
- **CompareButton** — Modal to pick second species; navigates to /compare.  
- **DayInLife** — “A Day in Eden” timeline (5 moments); alternating image/text; squircle, One UI ease.  
- **StructuredData** — JSON-LD (Organization, LocalBusiness, SpeciesTaxon, Product, FAQPage, Breadcrumb).  
- **AdminShell** — Sticky admin header: Dashboard, Bookings, **Calendar**, Rates, **Email**, Site (external), Log out.

### Tech stack
- **Framework:** Next.js 15 (App Router). **Language:** TypeScript.  
- **Styling:** Tailwind CSS; custom theme (gold, onyx, marble).  
- **UI:** React 19; Lucide React; Next.js Image; Framer Motion.  
- **Data:** `lib/residences-data.ts`, `lib/species-data.ts`, `lib/species-comparison-data.ts`, `lib/hero-images.ts`, `lib/activity-images.ts`, `lib/facebook-gallery.ts`, `lib/blog-posts.ts`, `lib/blog-content.ts`, `lib/rates-data.ts`. **Backend:** Prisma + Supabase (PostgreSQL); `prisma/seed.ts` (units, rate items with mock prices, system settings).  
- **Email:** Resend (contact, booking notifications, admin→guest, confirmation on CONFIRMED).  
- **PDF:** pdf-lib (SAPS 520, invoice); @react-pdf/renderer (Master Pricelist; Helvetica only for serverless).  
- **Sensory:** Ambient audio toggle (bushveld); haptic on primary buttons.

---

## 9. Documentation (current)

- **docs/PROJECT_OVERVIEW.md** — This file.  
- **docs/ADMIN_PORTAL_OVERVIEW.md** — Admin/CRM flow, features, routes, mock data.  
- **docs/BACKEND_AND_EMAILS.md** — Backend overview; how emails work; Resend, domain verification, troubleshooting.  
- **docs/SETUP_BACKEND_AND_EMAILS.md** — Step-by-step: database, env vars, Resend API key and domain verification, Prisma migrate/seed, Vercel build.  
- **docs/RESEND_SETUP_CHECKLIST.md** — Resend + DNS checklist; sandbox test; “When you add Resend again.”  
- **docs/ENV_AND_DNS_REFERENCE.md** — Env var names and purpose; current Afrihost DNS (baseline); “When you add Resend again.”  
- **docs/CONTACT_FORM_EMAIL_TROUBLESHOOTING.md** — Contact form “Failed to send”; common Resend errors and fixes.  
- **docs/DNS_ROLLBACK_PRE_RESEND.md** — How to roll back DNS to pre-Resend state (incoming mail only).  
- **docs/AFRIHOST_INCOMING_MAIL_CHECKLIST.md** — Incoming mail (Gmail → info@) not arriving; MX and mailbox checks.  
- **docs/HOME_AND_DESIGN_GUIDE.md** — Home page sections and design notes.  
- **prisma/README_BOOKING.md**, **prisma/SUPABASE_CONNECT.md** — DB and deployment notes (when present).

---

*Last updated: March 2026. Reflects full site (all pages, backend, SEO, blog, tools), Prisma + Supabase, enquiry-only booking, Calendar + manual booking, Rates Manager with Master Pricelist PDF (built-in fonts), Email diagnostics page, public rates “On request” only, and current docs list.*
