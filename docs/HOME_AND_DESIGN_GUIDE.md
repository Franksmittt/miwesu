# MIWESU Home Page & Design Guide

Brief overview of the homepage hero sections and the project’s overall look and feel.

---

## 1. Design Your Escape (“Who’s Eden?”)

**Location:** Homepage, below the hero. Component: `HoverTakeover.tsx`.

### What it is
A full-bleed section that asks “Who’s Eden?” and presents six “vibes” (guest types) as cards. The section background changes when you hover a card, so users can “step into” each vibe visually before clicking.

### Layout
- **Section:** Full viewport height (min ~85vh), dark (onyx) background, centred content.
- **Header:** Centred. Small gold label “Design Your Escape”, then large serif heading “Who’s **Eden**?” (gold gradient on “Eden”), then one line of supporting copy.
- **Cards:** Responsive grid:
  - Mobile: 1 column.
  - Small screens: 2 columns.
  - Large: 3 columns.
- **CTA:** Centred “Book your stay” link under the grid.

### How it works
1. **Default state:** A default lodge image fills the background at low opacity; a dark gradient overlays it so text stays readable.
2. **Hover:** Each card is tied to a different image (Thabazimbi/lodge scenes). On hover:
   - A second layer fades in (Framer Motion, ~0.5s) with that card’s image.
   - The card itself gets a light scale (1.02) and the border shifts toward gold.
3. **Leave:** The overlay fades out and the default background returns.
4. **Click:** Cards link to `/activities`, `/residences`, `/wildlife`, or `/about`; the main CTA goes to `/book`.

### Style details
- **Cards:** Semi-transparent dark panels (`bg-onyx-light/80`), thin white border, subtle backdrop blur. On hover: border tinted gold, title tinted gold.
- **Typography:** Serif for headings, sans for taglines and body. Uppercase tracking on the small label.
- **Imagery:** Real Thabazimbi/lodge photos; no text on the background images.

### The six vibes
| Card                 | Tagline                         | Links to   |
|----------------------|----------------------------------|------------|
| Bachelor Bash        | Lapa, braai & pool. Epic groups. | /activities |
| Romantic Escape      | Sunset boma, starry skies.       | /activities |
| Family Eden          | Pool, trampoline, jungle gym.     | /residences |
| The Oasis            | Pool, lawn, thatched shade.      | /residences |
| Hunter's Brotherhood | Trophy, braai, lodge life.       | /wildlife   |
| City Escape          | Unplug. Silence. Bushveld.       | /about      |

---

## 2. A Day in Eden (“From dawn to starlight”)

**Location:** Homepage, below Design Your Escape. Component: `DayInLife.tsx`.

### What it is
A vertical “day in the life” timeline: five moments from 06:00 to 22:00. Each moment has a time, label, title, short description, and a full-width image. The block conveys one ideal day at the lodge for hunters, families, and couples.

### Layout
- **Section:** Full-width, dark background (`bg-onyx`), generous vertical padding.
- **Header:** Centred. “A Day in Eden” label, then “From dawn to **starlight**” (gold on “starlight”), then one line of copy.
- **Timeline:** Five rows. Each row is a two-column grid (on desktop):
  - **Column 1:** Image (full height of row).
  - **Column 2:** Time (e.g. 06:00), label (Dawn / Morning / etc.), title, description.
- **Alternation:** Odd rows: image right, text left. Even rows: image left, text right. On mobile the image is always on top.
- **CTA:** Centred “Book your day” button at the bottom.

### How it works
1. **Scroll:** Rows use Framer Motion `whileInView`: each row fades in and moves up slightly when it enters the viewport (with a small stagger per row).
2. **Images:** Full-bleed within their column; on mobile a light bottom gradient keeps text legible when it sits over the image.
3. **No interaction required:** Purely scroll-driven; no hover or click needed for the narrative.

### The five moments
| Time  | Label       | Title                    | Description (short) |
|-------|-------------|--------------------------|----------------------|
| 06:00 | Dawn        | Sunrise over the koppies | First light, silence, coffee on the patio. |
| 10:00 | Morning     | Safari or trampoline     | Game drive or family play by the pool. |
| 15:00 | Afternoon   | Pool and lawn            | Swim, slide, thatched shade. The Oasis. |
| 19:00 | Golden hour | Boma braai               | Fire under the trees. Waterhole in the distance. |
| 22:00 | Night       | Starry skies             | Quiet on the deck or patio under the Milky Way. Iron Eden at rest. |

### Style details
- **Rows:** Minimum height ~50–60vh on desktop; bottom border between rows (`border-white/5`).
- **Typography:** Large serif time (e.g. 06:00), small uppercase label, serif title, sans description in gray.
- **CTA:** Solid gold button, dark text, hover lightens gold.

---

## 3. General Look & Feel of the Project

### Colour palette
- **Onyx / dark:** `#050505` (primary dark), `#121212` (cards/panels). Used for headers, footers, “luxury” sections, and contrast with gold.
- **Gold:**  
  - 300: `#E5C687` (pale)  
  - 400: `#D4AF37`  
  - 500: `#C5A059` (primary “Rich Dubai Gold”, logo-aligned)  
  - 600: `#997B3D` (dark antique)  
  Used for accents, CTAs, labels, and gradient text.
- **Marble / light:** `#FAFAFA` (main light bg), `#F4F4F4` (off-white). Used for body backgrounds on content-heavy pages.
- **Neutrals:** White/gray scale for text (e.g. `text-gray-400`, `text-gray-300`) on dark, and dark gray on light.

### Typography
- **Serif:** Cinzel (variable `--font-cinzel`) for headings, hero lines, and key phrases (“Iron Eden”, “Eden”, “starlight”).
- **Sans:** Montserrat for body, captions, and UI. Used for readability and a clean, modern counterpoint to the serif.
- **Hierarchy:** Uppercase tracking on small labels (e.g. “Design Your Escape”, “A Day in Eden”); large, tight serif for hero headlines; gold gradient applied to one or two words per headline for emphasis.

### Visual style
- **Luxury / editorial:** Dark sections with gold accents; light sections with plenty of whitespace. No clutter.
- **Imagery:** Real lodge, landscape, and wildlife photography. “Cinematic Verité” and “Clean Kill” (no blood/gore). Hero images often at reduced opacity with a dark gradient for text overlay.
- **Motion:** Ken Burns on the main hero; Framer Motion for scroll reveals and hover (e.g. Design Your Escape, A Day in Eden). Reduced motion respected via `prefers-reduced-motion`.
- **Borders & panels:** Thin borders (`border-white/5`, `border-white/10`) and semi-transparent dark panels with backdrop blur where appropriate (e.g. HoverTakeover cards, liquid glass).
- **CTAs:** Two patterns: (1) Outlined gold border, fill on hover; (2) Solid gold button with dark text. Uppercase, tracked, sans-serif.

### Reusable patterns
- **Gold gradient text:** `.text-gradient-gold` (gradient clip on text).
- **Liquid glass:** `.liquid-glass`, `.liquid-glass-dark` for frosted panels.
- **Reveal on scroll:** `.reveal` plus JS, or Framer Motion `whileInView`, for sections that animate in as you scroll.
- **Section rhythm:** Alternating dark (onyx) and light (marble) sections across the site for contrast and pacing.

### Technical notes
- **Tailwind:** Custom theme in `tailwind.config.js` (gold, onyx, marble, Cinzel/Montserrat, Ken Burns keyframes, luxury shadows).
- **Fonts:** Loaded in `app/layout.tsx`; CSS variables used in Tailwind `fontFamily`.
- **Focus:** Visible focus outline uses gold (`#C5A059`) for accessibility.

---

*This doc describes the homepage “Design Your Escape” and “A Day in Eden” sections and the project’s overall design system. For routes and features see `PROJECT_SUMMARY.txt` and `PROJECT_OVERVIEW.md`.*
