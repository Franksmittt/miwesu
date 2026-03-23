# Activities Page – Image Audit & Best-Suited Mapping

**Page:** https://www.miwesu.co.za/activities  
**Purpose:** Replace random or duplicate images with content-matched images from the Facebook gallery and existing `public/images` assets.

---

## Current Issues

1. **Duplicate / wrong reuse:** Hero and "Meat processing facility" both used the same image (`Thabazimbi_N_198`). Conservation Harvest card and main section use the same image (`Thabazimbi_N_171`).
2. **Missing files:** Page hardcodes `/images/kudu-bull-portrait-01.png` and `/images/4x4-trails-main.jpg` – these files do not exist.
3. **Generic naming:** Many slots use `_filename_Thabazimbi_N_XXX` with no clear semantic match to the section (e.g. "celestial" vs "stargazing", "birding" vs habitat).

---

## Section-by-Section: Best-Suited Images

| Section | Slot | Content intent | Best-suited image (source) |
|--------|------|----------------|----------------------------|
| **Hero** | Hero | Activities overview, Makoppa feel | Panoramic / savanna. Use: Facebook "Eland and kudu on dirt road; dawn pastel sky" or "Sunrise/sunset landscape; golden-brown grass". |
| **Top cards** | Conservation Harvest | Hunting, trackers, ethical harvest | Facebook "Rifle in wooden hunting blind; diagonal sunlight" – anticipation, bushveld. |
| | Photographic Safaris | Wildlife/landscape for photographers | Facebook "Waterhole at sunset; reflections" or "Zebras drinking at waterhole". |
| | Celestial Safaris | Dark skies, stargazing | Keep Thabazimbi_N_150 if it is night sky; else keep as placeholder until a real night-sky photo exists. |
| | Friends & family | Boma, shared evenings, exclusive-use groups | `residences-main-lodge-boma-braai.jpg` or Facebook braai / gathering shots. |
| | Wildlife Viewing | Game drives, wildlife | Facebook "Herd of African buffalo; safari vehicle observing" or "Zebras drinking at waterhole". |
| | Birding (top card only) | Habitat / koppies — distinct from section hero | `birdingCard` → Facebook koppies / landscape (`469407140_...`); section uses `birdingMain` (sunset habitat). |
| **Conservation Harvest** | Main | Ethical hunting in Sweetveld | Same as card: "Rifle in wooden hunting blind" or "Two rifles from vehicle; sunset over savanna". |
| | Tracker | Professional tracker in bushveld | Facebook "Rifle in wooden hunting blind" or keep current tracker image if it shows a person/tracker. |
| | Kudu (gallery) | Kudu bull in peak condition | **Fix:** Use existing `kudu-bull-portrait-02.png` or Facebook "Male kudu in bushveld; spiralled horns". |
| | Processing (gallery) | Meat processing facility | No processing photo in gallery. Use lodge/kitchen as stand-in: Facebook "Outdoor kitchen and braai; pool; thatched bomas" or keep a single generic Thabazimbi image (not hero). |
| **Photographic Safaris** | Main | Photographic safari, Makoppa | Facebook "Zebras drinking at waterhole" or "Waterhole at sunset; reflections". |
| | Gallery: Waterhole | Wildlife at waterhole | Facebook "Waterhole at sunset; reflections" or "Zebras drinking at waterhole". |
| | Gallery: Koppies | Granite koppies, landscape | Facebook "Sunrise/sunset landscape; golden-brown grass" or "Dramatic cloudy sky at sunset; vehicle tracks". |
| | Gallery: Sunset | Sunset bushveld | Facebook "Sun through silhouetted tree; golden hour" or "Sunset at waterhole; silhouetted person". |
| **Celestial Safaris** | Main | Stargazing, dark skies | Keep current if it is night sky; otherwise leave as-is until a dedicated night-sky asset exists. |
| **Birding** | Main | Birding habitat, Makoppa | Facebook "Sun through silhouetted tree; golden hour" (habitat) or "Waterhole at sunset" (bird habitat). |
| **4x4 Trails** | Main | 4x4 tracks, vehicle, terrain | **Fix:** Use Facebook "4x4 bull bar; MIWESU GP license plate" or "Dramatic cloudy sky at sunset; vehicle tracks". |
| **Walking Safaris** | Main | On foot, bushveld | Facebook "Eland and kudu on dirt road; dawn pastel sky" or "Sun through silhouetted tree; golden hour". |

---

## Facebook Image Paths Used (from `lib/facebook-gallery.ts`)

- `469490837_..._n.jpg` – Eland and kudu on dirt road; dawn pastel sky  
- `469407140_..._n.jpg` – Sunrise/sunset landscape; golden-brown grass  
- `469596637_..._n.jpg` – Rifle in wooden hunting blind; diagonal sunlight  
- `470233517_..._n.jpg` – Sunset from vehicle; rifles in foreground; orange horizon  
- `469463473_..._n.jpg` – Waterhole at sunset; reflections  
- `469647598_..._n.jpg` – Zebras drinking at waterhole  
- `475763558_..._n.jpg` – Dramatic cloudy sky at sunset; vehicle tracks  
- `484079097_..._n.jpg` – 4x4 bull bar; MIWESU GP license plate  
- `558423669_..._n.jpg` – Sun through silhouetted tree; golden hour  
- `469594294_..._n.jpg` – Sunset at waterhole; silhouetted person  
- `469680087_..._n.jpg` – Herd of African buffalo; safari vehicle observing  
- `475678135_..._n.jpg` – Male kudu in bushveld; spiralled horns  
- `470232310_..._n.jpg` – Outdoor kitchen and braai; pool; thatched bomas  

---

## Implementation

- **`lib/activity-images.ts`** – Point each key to the best-suited path (Facebook or existing `/images/...`).
- **`app/activities/page.tsx`** – Replace hardcoded `/images/kudu-bull-portrait-01.png` with `activityImages.conservationHarvestKudu`. Replace `/images/4x4-trails-main.jpg` with `activityImages.fourByFourMain` (and ensure `fourByFourMain` points to a real 4x4/terrain image).
