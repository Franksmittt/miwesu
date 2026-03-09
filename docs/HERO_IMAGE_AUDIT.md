# MIWESU - Hero Image Audit & Crop Specs

**Purpose:** Finalize hero images across the site. Use this checklist to crop and replace assets in `/public/images/` to match layout, safe zones, and brand (Hardware Noir, Cinematic Verité, Clean Kill).

**Legend:**  
- **Placeholder / wrong species** = none; all species and Wood hero images now use dedicated assets.  
- **Current file** = path used in code.

---

## 1. Standard hero pattern (most pages)

- **Section:** `relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx`
- **Image:** `fill`, `sizes="100vw"`, `object-cover opacity-50`
- **Overlay:** `bg-gradient-to-t from-onyx via-onyx/40 to-transparent` (darkest at bottom, fade to transparent top)
- **Text:** `relative z-20 text-center px-4 sm:px-6`: **centered**, sitting over the **center-middle** of the image with the gradient darkening the **bottom half** for contrast.

**Crop guidance for this pattern:**
- **Desktop:** Effective viewport is ~16:9 to 2:1 landscape (50–60vh × 100vw). Crop to **16:9 landscape**; keep important subject/content in the **center third** vertically; **bottom 40%** will be darkened by gradient (safe for text).
- **Mobile:** 50vh × full width ≈ **1:2 to 1:2.2** (portrait-ish strip). Crop a **4:5 or 1:1** variant if you want a dedicated mobile hero; otherwise the same 16:9 will center-crop (object-cover) and the **center** remains the safe zone for type.

---

## 2. Master table: every page with a hero image

| # | Page Name | Route | Section dimensions | Image (current) | Desktop crop | Mobile crop | Text overlay / safe zone | Content & aesthetic directive |
|---|-----------|--------|--------------------|------------------|--------------|-------------|---------------------------|--------------------------------|
| 1 | **Home** | `/` | `h-screen` (100vh) full viewport. Ken Burns: `w-[120%] h-[120%]` | `heroImages.home` → `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | **16:9** (full viewport width). Ken Burns animates; keep subject in **center 60%** | Same 16:9; center 50% visible | **Center.** Subtitle, “Iron Eden”, supporting line, CTAs. Gradient bottom → top. Leave **center and lower third** clear. | Lodge/life shot: braai, patio, waterhole, bushveld. Cinematic Verité, moody, no harsh sun. “Peerless sanctuary of silence.” |
| 2 | **About** | `/about` | `h-[50vh] sm:h-[60vh]` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | 16:9 landscape | 4:5 or center of 16:9 | **Center.** “The Provenance”, “Our Story”. Bottom gradient. | Same as Home: lodge in landscape, provenance and place. |
| 3 | **Activities** | `/activities` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg` | 16:9 | 4:5 or center | **Center.** Tagline + “Activities” title. Bottom gradient. | Lodge life, braai under trees, savanna; outdoor activity, not a single species. |
| 4 | **Availability** | `/availability` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg` | 16:9 | 4:5 or center | **Center.** “Plan Your Visit”, “Availability”, one line. Bottom gradient. | Same as Activities: inviting lodge/scene for planning a stay. |
| 5 | **Rates** | `/rates` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_200jpeg_Nano_Banana_Pro_84885.jpg` | 16:9 | 4:5 or center | **Center.** Intent subtitle, “Rates & Pricing”, currency line. Bottom gradient. | **Stone Villa exterior** or strong accommodation shot; investment-grade, premium. |
| 6 | **Contact** | `/contact` | `h-[50vh] sm:h-[60vh]` | `_filename_Panoramicjpg_style_A_Nano_Banana_Pro_56938.jpg` | 16:9 | 4:5 or center | **Center.** “Contact” title. Bottom gradient. | Panoramic braai/contact area; welcoming, place of connection. |
| 7 | **FAQ** | `/faq` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_38jpg_s_Nano_Banana_Pro_03494.jpg` | 16:9 | 4:5 or center | **Center.** “Information”, “Frequently Asked Questions”. Bottom gradient. | Main house / living area, thatched roof; warm, informative. |
| 8 | **Gallery** | `/gallery` | `h-[50vh] sm:h-[60vh]` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | 16:9 | 4:5 or center | **Center.** Gallery title. Bottom gradient. | Strongest Cinematic Verité shot: one hero image that sells the gallery. |
| 9 | **Conservation** | `/conservation` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg` | 16:9 | 4:5 or center | **Center.** “If It Pays…” / conservation headline. Bottom gradient. | Bushveld/lodge that speaks to conservation and place, not gore. |
| 10 | **Wood & Thermal** | `/wood` | `h-[45vh] sm:h-[50vh]` (slightly shorter) | `_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg` | 16:9 | 4:5 or center | **Center.** “From the Farm”, “Wood & Thermal”, one line. Bottom gradient. | Macro texture of dense hardwood grain (Sekelbos/Kameeldoring); Vantablack void, premium Engineered Heat. |
| 11 | **Trophy Export** | `/trophy-export` | `h-[50vh] sm:h-[60vh]` | `conservation-harvest-kudu.jpg` | 16:9 | 4:5 or center | **Center.** “Trophy Export & Travel”. Bottom gradient. | Kudu or trophy-prep in context: professional, logistical, no blood/gore. |
| 12 | **Partners** | `/partners` | `h-[50vh] sm:h-[60vh]` | `_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg` | 16:9 | 4:5 or center | **Center.** Partners headline. Bottom gradient. | Lodge/trust: braai under trees or similar “we partner with the best” scene. |
| 13 | **Wildlife** | `/wildlife` | `h-[50vh] sm:h-[60vh]` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | 16:9 | 4:5 or center | **Center.** “The Portfolio”, “Conservation Harvest”. Bottom gradient. | Species/landscape that says “portfolio” — one iconic wildlife or habitat shot. |
| 14 | **Residences (overview)** | `/residences` | `h-[50vh] sm:h-[60vh] min-h-[300px]`; **Ken Burns**, **no opacity** (full saturation) | `_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg` | 16:9 | 4:5 or center | **No text on image.** Title block sits **below** the hero in a card. Hero is full-bleed only. | Braai under trees, savanna, water; warm architectural/lodge life contrasting with dark bushveld. |
| 15 | **Residences – Homestead** | `/residences/homestead` | `h-[50vh] min-h-[320px]`; **no gradient** | `residences-homestead-main.jpg` | 16:9 | 4:5 or center | **No text on image.** Title/copy in card below. | **The Homestead:** warm architectural lighting, building + bushveld; day or golden hour. |
| 16 | **Residences – Stone Villa** | `/residences/stone-villa` | `h-[50vh] min-h-[320px]`; **no gradient** | `residences-second-house-main.jpg` | 16:9 | 4:5 or center | **No text on image.** Title/copy in card below. | **Stone Villa:** same as Homestead: warm lights, structure, dark bushveld contrast. |
| 17 | **Book** | `/book` | Content-height strip (no fixed vh). `opacity-30` + `bg-gradient-to-b from-onyx/60 to-onyx` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | **Wide 21:9 or 3:1** (short strip) | Same | **Left-aligned block** (max-w-4xl mx-auto). “Book your stay” + subtext. Image is subtle background; keep **left-center** and **center** relatively uncluttered. | Soft lodge/panoramic; supports booking, not dominant. |
| 18 | **DE (German)** | `/de` | `min-h-[70vh]`; gradient `via-onyx/50` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | **Tall 16:9 or 3:4** (70vh feel) | 4:5 | **Center.** “Jagd in Limpopo”, CTA. Bottom gradient. | Same as Home: Limpopo, malaria-free, EU hunter. |
| 19 | **ES (Spanish)** | `/es` | `min-h-[70vh]`; gradient `via-onyx/50` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | Tall 16:9 or 3:4 | 4:5 | **Center.** “Caza en Limpopo”, CTA. Bottom gradient. | Same as DE. |
| 20 | **Blog index** | `/blog` | `h-[45vh] sm:h-[50vh]` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | 16:9 | 4:5 or center | **Center.** Hunter’s Journal title. Bottom gradient. | Lodge or bushveld that says “stories” and authority. |
| 21 | **Blog – Sweetveld** | `/blog/sweetveld-vs-sourveld` | **No text on image.** Container: `aspect-video sm:aspect-[21/9] max-h-[50vh]` | `about-sweetveld-kudu.jpg` | **21:9 ultrawide** (or 16:9) | 16:9 | Title and copy **below** image. | Kudu in Sweetveld habitat; nutrient-rich grasses, Makoppa. |
| 22 | **Blog – Limpopo** | `/blog/limpopo-vs-eastern-cape` | Same: `aspect-video sm:aspect-[21/9] max-h-[50vh]` | `_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg` | 21:9 or 16:9 | 16:9 | Title below. | Plains game / Limpopo bushveld; editorial, comparison. |
| 23 | **Compare** | `/compare` | **No hero image.** Solid `bg-onyx` section, text only. | - | - | - | - | N/A |

---

## 3. Species pages (14): one table

All species heroes use the **same layout**:  
`h-[50vh] sm:h-[60vh]`, `fill`, `object-cover opacity-50`, gradient `from-onyx via-onyx/40 to-transparent`, **text centered** (tagline, species name, scientific name).

**Universal species directive:**  
Moody, **parallax-ready portrait** of the animal. **Direct eye contact** with camera where possible. Cinematic Verité: natural light, deep shadows, no blood or gore. Clean Kill / respect; animal in habitat, dignified. Crop so **face/head is in the center** for text overlay; bottom 40% can be darker (gradient).

| # | Species | Route | Current hero image | Status | Desktop crop | Mobile crop | Content & aesthetic |
|---|---------|--------|--------------------|--------|--------------|-------------|----------------------|
| 24 | Greater Kudu | `/greater-kudu` | `kudu-bull-portrait-01.png` | OK | 16:9 (center subject) | 4:5 | Grey Ghost; moody bull portrait, eye contact. |
| 25 | Cape Buffalo | `/cape-buffalo` | `1cape-buffalo-bull-portrait-01.png` | OK | 16:9 | 4:5 | “Black Death”; mature bull, direct gaze, no gore. |
| 26 | Impala | `/impala` | `impala-ram-portrait-01.png` | OK | 16:9 | 4:5 | Athlete of the bushveld; ram portrait. |
| 27 | Gemsbok | `/gemsbok` | `gemsbok-portrait-01.png` | OK | 16:9 | 4:5 | Rapier horns, black-and-white face, portrait. |
| 28 | Blue Wildebeest | `/wildebeest` | `1wildebeest-bull-portrait-01.png` | OK | 16:9 | 4:5 | Brindled gnu, heavy boss, portrait. |
| 29 | Blesbok | `/blesbok` | `1blesbok-ram-portrait-01.png` | OK | 16:9 | 4:5 | White blaze, lyre horns, portrait. |
| 30 | **Bushbuck** | `/bushbuck` | `_filename_bushbuck-ram-portrai_Nano_Banana_Pro_79460.jpg` | OK | 16:9 | 4:5 | Bushbuck ram, spiral horns, shy thicket dweller; moody portrait, eye contact. |
| 31 | **Dapple Impala** | `/dapple-impala` | `_filename_dapple-impala-ram-po_Nano_Banana_Pro_49376.jpg` | OK | 16:9 | 4:5 | Dapple/piebald impala; colour variant, Cinematic Verité portrait. |
| 32 | **Golden Wildebeest** | `/golden-wildebeest` | `_filename_golden-wildebeest-bu_Nano_Banana_Pro_61762.jpg` | OK | 16:9 | 4:5 | Golden/copper colour variant wildebeest; portrait. |
| 33 | **Lechwe** | `/lechwe` | `_filename_lechwe-ram-portrait-_Nano_Banana_Pro_14464.jpg` | OK | 16:9 | 4:5 | Lechwe ram, long lyre horns, semi-aquatic; wetland/thicket edge portrait. |
| 34 | **Livingstone Eland** | `/livingstone-eland` | `_filename_livingstone-eland-bu_Nano_Banana_Pro_88557.jpg` | OK | 16:9 | 4:5 | Large eland bull, spiral horns; largest antelope, portrait. |
| 35 | Red Hartebeest | `/red-hartebeest` | `1red-hartebeest-bull-portrait-01.png` | OK | 16:9 | 4:5 | Lyre horns, elongated face, “heart-beast” portrait. |
| 36 | Springbok | `/springbok` | `1springbok-ram-portrait-01.png` | OK | 16:9 | 4:5 | Lyre horns, portrait. |
| 37 | Warthog | `/warthog` | `1warthog-boar-portrait-01.png` | OK | 16:9 | 4:5 | Four tusks, facial warts; boar portrait. |

---

## 4. File replacement checklist (priority)

**All done (March 2026):** All species heroes (including Dapple Impala, Bushbuck, Lechwe, Golden Wildebeest, Livingstone Eland) and the Wood hero now use dedicated images. Code and audit doc are updated.

- **Livingstone Eland:** `_filename_livingstone-eland-bu_Nano_Banana_Pro_88557.jpg` (hero + in-page)
- **Wood & Thermal:** `_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg` (macro grain, Engineered Heat)

---

## 5. Quick reference: aspect ratios

| Context | Aspect ratio | Notes |
|--------|--------------|--------|
| Standard hero (50–60vh × 100vw) | **16:9** | Safe zone: center third vertically; bottom 40% darkened. |
| Mobile (50vh strip) | **4:5 or 1:1** | Optional; else 16:9 center-crops. |
| Home (100vh) | **16:9** | Ken Burns; keep subject in center 60%. |
| Residences (no text on image) | **16:9** | Full bleed; subject can use full frame. |
| Blog article hero (21:9) | **21:9** | Ultrawide; no text on image. |
| Book (strip) | **21:9 or 3:1** | Short, wide; image faint (opacity 30%). |
| DE/ES (70vh) | **16:9 or 3:4** | Taller; center safe. |
| **Species** | **16:9** (subject centered) | Portrait-style crop within 16:9: animal face in **center**, negative space or habitat top/bottom. |

---

## 6. Brand reminders

- **Hardware Noir:** Dark, substantial, premium. Avoid bright midday flat light.
- **Cinematic Verité:** Natural light, deep shadows, documentary feel. No staged or over-lit stock look.
- **Clean Kill:** Species imagery is respectful; no blood, no gore. Dignified animal in habitat.
- **Residences:** Warm architectural lighting vs dark bushveld.
- **Wood:** Product as “thermal hardware” — macro grain, void background, premium fuel.

Use this doc in Photoshop/Lightroom to crop and export assets, then drop into `/public/images/` and update any `src` paths in the app if you use new filenames.
