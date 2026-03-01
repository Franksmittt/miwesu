# Push entire project to GitHub - run this after closing other Git processes if index.lock exists
Set-Location $PSScriptRoot

# Remove stale lock if present
if (Test-Path .git/index.lock) {
    Remove-Item .git/index.lock -Force -ErrorAction SilentlyContinue
}

# Stage everything
git add -A
if ($LASTEXITCODE -ne 0) {
    Write-Host "Git add failed. Close any other Git/editor windows and try again."
    exit 1
}

$status = git status --short
if (-not $status) {
    Write-Host "Nothing to commit - working tree clean."
    exit 0
}

git commit -m "Add docs, prompts, kudu images, New Knowledge, photoshoot catalog, scripts"
if ($LASTEXITCODE -ne 0) { exit 1 }

git push origin main
Write-Host "Done."
