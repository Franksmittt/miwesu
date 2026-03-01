# Copy one image per Card 1 folder into public/images/ with the filename the site expects.
# Run from repo root: .\scripts\copy-card1-images.ps1
# Optional: .\scripts\copy-card1-images.ps1 -Card1Path "C:\path\to\Card 1"

param(
    [string]$Card1Path = ".\Miwesu-20260228T133504Z-1-001\Miwesu\Card 1"
)

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path $PSScriptRoot -Parent
if (-not (Test-Path $projectRoot)) { $projectRoot = Get-Location }
$destDir = Join-Path $projectRoot "public\images"
if (-not (Test-Path $destDir)) { Write-Host "Create public\images first."; exit 1 }

# Folder name -> one or more target filenames (first image -> first name, second -> second, etc.)
$map = @(
    @{ Folder = "main_house_outside";                    Targets = @("residences-homestead-main.jpg") },
    @{ Folder = "main_house_lower_room_1_sleeps_3";     Targets = @("residences-main-lodge-lower-room-1.jpg") },
    @{ Folder = "main_house_lower_room_2_sleeps_3";     Targets = @("residences-main-lodge-lower-room-2.jpg") },
    @{ Folder = "main_house_kitchen_living_room";       Targets = @("residences-homestead-kitchen.jpg", "residences-homestead-living.jpg") },
    @{ Folder = "main_house_first_outside_area_before_boma_and_braai"; Targets = @("residences-main-lodge-first-patio.jpg") },
    @{ Folder = "main_house_boma_and_braai";            Targets = @("residences-main-lodge-boma-braai.jpg") },
    @{ Folder = "main_house_upper_room_1_sleeps_5";     Targets = @("residences-main-lodge-upper-room-1.jpg") },
    @{ Folder = "main_house_upper_room_2_sleeps_5";     Targets = @("residences-main-lodge-upper-room-2.jpg") },
    @{ Folder = "03_lapa_kitchen_pool_table";           Targets = @("residences-main-lodge-lapa.jpeg") },
    @{ Folder = "06_boma_braai_under_trees";           Targets = @("residences-main-lodge-braai-trees.jpg") },
    @{ Folder = "05_trampoline_jungle_gym";             Targets = @("residences-main-lodge-trampoline-jungle-gym.jpg") },
    @{ Folder = "01_swimming_pool_slide";               Targets = @("residences-main-lodge-pool.jpg") },
    @{ Folder = "house2_outside";                       Targets = @("residences-second-house-main.jpg", "residences-second-house-braai.jpg") },
    @{ Folder = "house2_kitchen";                       Targets = @("residences-second-house-kitchen.jpg") },
    @{ Folder = "house2_living_room";                   Targets = @("residences-second-house-living.jpg") },
    @{ Folder = "house2_main_bedroom";                  Targets = @("residences-second-house-master-bedroom.jpg") },
    @{ Folder = "house2_main_bedroom_bathroom";        Targets = @("residences-second-house-ensuite.jpg") },
    @{ Folder = "house2_room2";                         Targets = @("residences-second-house-bedroom-2.jpg") },
    @{ Folder = "house2_room2_bathroom";                Targets = @("residences-second-house-room2-ensuite.jpg") }
)

$cardBase = if ([System.IO.Path]::IsPathRooted($Card1Path)) { $Card1Path } else { Join-Path $projectRoot $Card1Path }
if (-not (Test-Path $cardBase)) {
    Write-Host "Card 1 path not found: $cardBase"
    Write-Host "Set -Card1Path to your Card 1 folder, e.g. C:\Users\User1\miwesu\Miwesu-20260228T133504Z-1-001\Miwesu\Card 1"
    exit 1
}

$extensions = @(".jpg", ".jpeg", ".png")
$copied = 0
foreach ($entry in $map) {
    $folderPath = Join-Path $cardBase $entry.Folder
    if (-not (Test-Path $folderPath)) { Write-Host "Skip (missing): $($entry.Folder)"; continue }
    $images = Get-ChildItem -Path $folderPath -File | Where-Object { $extensions -contains $_.Extension } | Sort-Object Name
    if (-not $images) { Write-Host "Skip (no images): $($entry.Folder)"; continue }
    $idx = 0
    foreach ($target in $entry.Targets) {
        if ($idx -ge $images.Count) { Write-Host "Skip (not enough images): $($entry.Folder) -> $target"; break }
        $src = $images[$idx].FullName
        $dest = Join-Path $destDir $target
        Copy-Item -Path $src -Destination $dest -Force
        Write-Host "Copied: $($entry.Folder) -> $target"
        $copied++
        $idx++
    }
}
Write-Host "Done. Copied $copied image(s) to public\images\"
