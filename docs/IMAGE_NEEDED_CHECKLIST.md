# Species images – what’s done, what’s needed

**Submit tomorrow:** use this list to see which animals still need images and where the prompts are.

---

## ✅ Already have full image sets (no action)

These species pages use their own 6 images; no new assets needed.

| Species            | Slug               | Notes                    |
|--------------------|--------------------|--------------------------|
| Greater Kudu       | `greater-kudu`     | kudu-bull-*, kudu-cow-*   |
| Blue Wildebeest    | `wildebeest`       | 1wildebeest-* … 6        |
| Impala             | `impala`           | impala-ram-*, impala-ewe/herd |
| Gemsbok            | `gemsbok`          | gemsbok-portrait-*, etc. |
| Warthog            | `warthog`          | 1warthog-* … 6           |
| Blesbok            | `blesbok`          | 1blesbok-* … 6          |
| Cape Buffalo       | `cape-buffalo`     | 1cape-buffalo-* … 6     |
| Springbok          | `springbok`        | 1springbok-* … 6        |
| Red Hartebeest     | `red-hartebeest`   | 1red-hartebeest-* … 6   |

---

## ❌ Still need images (5 animals)

These pages currently use **placeholder or wrong-animal images** (e.g. generic impala, kudu, or wildebeest). Each needs **6 images**; prompts are in `docs/*_IMAGE_PROMPTS.md`.

| # | Species             | Slug               | Currently shows   | Prompts file                          |
|---|---------------------|--------------------|-------------------|----------------------------------------|
| 1 | **Dapple Impala**   | `dapple-impala`    | generic impala    | `docs/DAPPLE_IMPALA_IMAGE_PROMPTS.md`  |
| 2 | **Lechwe**          | `lechwe`           | generic impala    | `docs/LECHWE_IMAGE_PROMPTS.md`         |
| 3 | **Livingstone Eland** | `livingstone-eland` | kudu            | `docs/LIVINGSTONE_ELAND_IMAGE_PROMPTS.md` |
| 4 | **Bushbuck**        | `bushbuck`         | kudu             | `docs/BUSHBUCK_IMAGE_PROMPTS.md`       |
| 5 | **Golden Wildebeest**| `golden-wildebeest`| blue wildebeest  | `docs/GOLDEN_WILDEBEEST_IMAGE_PROMPTS.md` |

---

## Quick workflow for tomorrow

1. Open the `*_IMAGE_PROMPTS.md` for each of the 5 species above.
2. Generate the 6 images per species (e.g. with your usual image tool).
3. Save into `public/images/` with the filenames from each doc (number prefix optional, e.g. `1dapple-impala-ram-portrait-01.png`).
4. Tell the dev (or update the page) so the species page and compare data use the new filenames.

---

## Optional: other placeholders

Some species (e.g. Greater Kudu) still have a few **non-hero** placeholders (e.g. “Hunting Stalk”, “Shot Placement”, “Venison”). Those are lower priority; the 5 animals above are the ones that currently show the **wrong species** and should be fixed first.
