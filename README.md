# MIWESU — The Royal Residence

Luxury Next.js website for **MIWESU Game Farm / Hunters Lodge**, Thabazimbi, South Africa — the **Iron Eden** sanctuary in the Makoppa district (Waterberg).

---

## Project overview

For a full project overview (lodge features & benefits, wildlife, accommodation & facilities, layout & styling, and a summary of every page), see:

- **[docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)**

It covers:

- Lodge / farm features and benefits (location, accommodation summary, on-site facilities, activities, conservation).
- All 14 wildlife species (Greater Kudu, Blue Wildebeest, Impala, Gemsbok, Warthog, Blesbok, Bushbuck, Cape Buffalo, Dapple Impala, Golden Wildebeest, Springbok, Red Hartebeest, Lechwe, Livingstone Eland).
- Accommodation and facilities (Homestead 16 sleepers, Stone Villa 6 sleepers; facilities data model and gallery).
- Layout and styling (design system, colours, fonts, hero images, navigation, responsiveness).
- Every page and a short summary of each (Home, About, Residences, Book, Activities, Wildlife, Compare, Conservation, Gallery, Rates, Contact, FAQ, species pages, blog, etc.).

---

## Features (site)

- Next.js 14 with App Router
- Tailwind CSS with custom luxury palette (Gold, Onyx, Marble) and Cinzel / Montserrat
- Responsive layout, mobile menu, scroll-reveal animations
- Lodge imagery (Thabazimbi) for heroes and accommodation
- Species comparison tool (side-by-side, shareable URLs)
- Booking flow, availability, contact, Stripe checkout/webhooks (as configured)
- Prisma for bookings (if enabled)

---

## Getting started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

---

## Project structure (high level)

```
miwesu/
├── app/
│   ├── layout.tsx, page.tsx, globals.css
│   ├── about/, activities/, book/, compare/, contact/, conservation/
│   ├── faq/, gallery/, rates/, wildlife/, wood/, trophy-export/
│   ├── availability/, partners/
│   ├── residences/ (index, homestead, stone-villa)
│   ├── blog/ (index, limpopo-vs-eastern-cape, sweetveld-vs-sourveld)
│   ├── [slug]/          # Species pages (greater-kudu, blesbok, etc.)
│   ├── de/, es/          # Locale entry pages
│   ├── admin/bookings/
│   └── api/              # contact, availability, checkout, webhooks, wood-order, admin
├── components/
│   ├── Layout.tsx, Navigation.tsx, BookingWidget.tsx, CompareButton.tsx
│   ├── StructuredData.tsx, VettingModal.tsx
│   └── ...
├── lib/
│   ├── residences-data.ts    # Accommodation & facilities
│   ├── species-comparison-data.ts
│   ├── hero-images.ts
│   └── ...
├── public/images/           # Lodge and species imagery
├── docs/
│   ├── PROJECT_OVERVIEW.md  # Full overview (this doc)
│   └── *_IMAGE_PROMPTS.md, IMAGE_NEEDED_CHECKLIST.md
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Customization

- **Colours:** `tailwind.config.js` — Gold (300–600), Onyx, Marble.
- **Fonts:** `app/layout.tsx` — Cinzel (serif), Montserrat (sans).
- **Hero images:** `lib/hero-images.ts` and per-page overrides; assets in `public/images/`.

---

## Technologies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Prisma (optional, for bookings)

---

© 2025 MIWESU Game Reserve · Thabazimbi, South Africa
