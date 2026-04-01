/**
 * Regenerates FACEBOOK_IMAGES_WHAT_YOU_SEE.txt from:
 * - Every file in public/images/Facebook
 * - lib/facebook-gallery.ts (title + category → rich line + veg hint)
 * - data/facebook-folder-captions.json (extra per-file paragraphs)
 *
 * Run: node scripts/generate-facebook-images-guide.mjs
 *   or: npm run facebook-guide
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const fbDir = path.join(root, 'public', 'images', 'Facebook')
const galleryTs = path.join(root, 'lib', 'facebook-gallery.ts')
const captionsJson = path.join(root, 'data', 'facebook-folder-captions.json')
const outFile = path.join(root, 'FACEBOOK_IMAGES_WHAT_YOU_SEE.txt')

const vegHint = {
  Landscape:
    'Vegetation and setting: open bushveld / savanna — grass (often golden or dry brown), scattered trees and shrubs, big sky; sometimes water, tracks, or vehicle foreground.',
  Lodge:
    'Setting: lodge infrastructure — thatch, timber, glass, tiles, lawn or paving; pool, braai, boma fire, bedrooms, bathrooms, or signage as applicable.',
  Wildlife:
    'Habitat: bushveld around the animals — grass, scrub, trees, soil, waterhole edge, or (trail camera) night-time ground cover; lodge roofs can appear behind game near the buildings.',
}

/** Robust parse: one gallery line = one src template + category + title */
function parseGallery() {
  const text = fs.readFileSync(galleryTs, 'utf8')
  const map = new Map()
  for (const line of text.split('\n')) {
    const srcM = line.match(/\$\{BASE\}\/([^`]+)`/)
    if (!srcM) continue
    const file = srcM[1]
    const catM = line.match(/category:\s*'([^']+)'/)
    const titleM = line.match(/title:\s*'((?:\\'|[^'])*)'/)
    if (!catM || !titleM) continue
    const title = titleM[1].replace(/\\'/g, "'")
    map.set(file, { category: catM[1], title })
  }
  return map
}

function loadExtraCaptions() {
  try {
    const raw = fs.readFileSync(captionsJson, 'utf8')
    const j = JSON.parse(raw)
    return typeof j === 'object' && j !== null ? j : {}
  } catch {
    return {}
  }
}

function blockForFile(name, galleryMeta, extraText) {
  let body
  if (galleryMeta) {
    body = `What you see: ${galleryMeta.title}. ${vegHint[galleryMeta.category] || vegHint.Landscape}`
  } else if (extraText) {
    body = `What you see: ${extraText}`
  } else {
    body =
      'What you see: no caption yet. Add a paragraph to data/facebook-folder-captions.json (key = this filename), or run: npm run facebook-captions-openai — requires OPENAI_API_KEY and charges the API per image.'
  }
  return `FILE: ${name}\n  ${body.split('\n').join('\n  ')}\n`
}

function main() {
  let files = []
  try {
    files = fs
      .readdirSync(fbDir)
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  } catch (e) {
    console.error('Cannot read', fbDir, e.message)
    process.exit(1)
  }

  const galleryMap = parseGallery()
  const extra = loadExtraCaptions()
  const fromGallery = files.filter((f) => galleryMap.has(f)).length
  const fromJson = files.filter((f) => !galleryMap.has(f) && extra[f]).length
  const missing = files.length - fromGallery - fromJson

  const header = `================================================================================
MIWESU — FACEBOOK FOLDER: EACH FILE, WHAT YOU SEE
================================================================================
Generated: ${new Date().toISOString().slice(0, 10)} (run: npm run facebook-guide)

Every file under public/images/Facebook/ is listed A–Z by filename.

  • ${fromGallery} — captions from lib/facebook-gallery.ts (site gallery) + setting line.
  • ${fromJson} — extra captions from data/facebook-folder-captions.json.
  • ${missing} — still need JSON entries or: npm run facebook-captions-openai

================================================================================

`

  const blocks = files.map((name) => blockForFile(name, galleryMap.get(name), extra[name]))
  const footer = `================================================================================
END — ${files.length} file(s)
================================================================================
`

  fs.writeFileSync(outFile, header + blocks.join('\n') + footer, 'utf8')
  console.log('Wrote', outFile, `(${files.length} images, ${missing} without caption)`)
}

main()
