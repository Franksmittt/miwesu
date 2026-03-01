# Scripts

## copy-card1-images.ps1

Copies **one image per Card 1 folder** into `public/images/` with the exact filename the site expects. Use this after you have the Card 1 photo dump so you don’t have to manually pick and rename images (avoids duplicates).

**From repo root (PowerShell):**

```powershell
.\scripts\copy-card1-images.ps1
```

Card 1 path defaults to `.\Miwesu-20260228T133504Z-1-001\Miwesu\Card 1`. If your Card 1 folder is elsewhere:

```powershell
.\scripts\copy-card1-images.ps1 -Card1Path "C:\path\to\Card 1"
```

- For each folder (e.g. `main_house_outside`, `house2_kitchen`), the script takes the **first image** (by name) and copies it to `public/images/<target>.jpg` (or `.jpeg` where the site expects it).
- Folders that appear twice in the mapping (e.g. kitchen + living from same folder) get the first and second image in that folder.
- See `public/images/IMAGE_CHECKLIST.md` for the full list and Card 1 folder names.
