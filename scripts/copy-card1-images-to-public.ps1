# Copy one image per slot from Card 1 folders to public/images with site filenames.
# Run from repo root: .\scripts\copy-card1-images-to-public.ps1
# Uses first image(s) in each folder (by name); same folder can map to multiple targets (e.g. kitchen + living).

$ErrorActionPreference = "Stop"
$card1 = "C:\Users\User1\miwesu\Miwesu-20260228T133504Z-1-001\Miwesu\Card 1"
$dest = "C:\Users\User1\miwesu\public\images"

if (-not (Test-Path $card1)) {
  Write-Host "Card 1 path not found: $card1"
  exit 1
}
if (-not (Test-Path $dest)) {
  New-Item -ItemType Directory -Path $dest -Force
}

# Folder name -> array of target filenames (one image per target, in order)
$mapping = @(
  @("main_house_outside", @("residences-homestead-main.jpg")),
  @("main_house_lower_room_1_sleeps_3", @("residences-main-lodge-lower-room-1.jpg")),
  @("main_house_lower_room_2_sleeps_3", @("residences-main-lodge-lower-room-2.jpg")),
  @("main_house_kitchen_living_room", @("residences-homestead-kitchen.jpg", "residences-homestead-living.jpg")),
  @("main_house_first_outside_area_before_boma_and_braai", @("residences-main-lodge-first-patio.jpg")),
  @("main_house_boma_and_braai", @("residences-main-lodge-boma-braai.jpg")),
  @("main_house_upper_room_1_sleeps_5", @("residences-main-lodge-upper-room-1.jpg")),
  @("main_house_upper_room_2_sleeps_5", @("residences-main-lodge-upper-room-2.jpg")),
  @("03_lapa_kitchen_pool_table", @("residences-main-lodge-lapa.jpeg")),
  @("06_boma_braai_under_trees", @("residences-main-lodge-braai-trees.jpg")),
  @("05_trampoline_jungle_gym", @("residences-main-lodge-trampoline-jungle-gym.jpg")),
  @("01_swimming_pool_slide", @("residences-main-lodge-pool.jpg")),
  @("house2_outside", @("residences-second-house-main.jpg", "residences-second-house-braai.jpg")),
  @("house2_kitchen", @("residences-second-house-kitchen.jpg")),
  @("house2_living_room", @("residences-second-house-living.jpg")),
  @("house2_main_bedroom", @("residences-second-house-master-bedroom.jpg")),
  @("house2_main_bedroom_bathroom", @("residences-second-house-ensuite.jpg")),
  @("house2_room2", @("residences-second-house-bedroom-2.jpg")),
  @("house2_room2_bathroom", @("residences-second-house-room2-ensuite.jpg"))
)

$copied = 0
$skipped = 0
foreach ($entry in $mapping) {
  $folderName = $entry[0]
  $targets = $entry[1]
  $path = Join-Path $card1 $folderName
  if (-not (Test-Path $path)) {
    Write-Host "Skip (folder missing): $folderName"
    $skipped++
    continue
  }
  $images = Get-ChildItem -Path $path -File | Where-Object { $_.Extension -match '\.(jpg|jpeg)$' -and $_.Name -notmatch 'IMAGE_LOG|README' } | Sort-Object Name
  if ($images.Count -eq 0) {
    Write-Host "Skip (no images): $folderName"
    $skipped++
    continue
  }
  for ($i = 0; $i -lt [Math]::Min($targets.Count, $images.Count); $i++) {
    $targetName = $targets[$i]
    $destPath = Join-Path $dest $targetName
    Copy-Item -LiteralPath $images[$i].FullName -Destination $destPath -Force
    Write-Host "Copied: $folderName -> $targetName"
    $copied++
  }
}
Write-Host "Done. Copied $copied image(s). Skipped $skipped folder(s)."
