/**
 * One-time mapping: missing placeholder → existing asset in public/images
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const MAP = {
  '/images/2springbok-ram-standing-01.png': '/images/1springbok-ram-portrait-01.png',
  '/images/5springbok-herd-bushveld-01.png': '/images/3springbok-ewe-bushveld-01.png',
  '/images/6springbok-ram-standing-02.png': '/images/4springbok-ram-portrait-02.png',
  '/images/5blesbok-herd-bushveld-01.png': '/images/3blesbok-ewe-bushveld-01.png',
  '/images/6blesbok-ram-standing-02.png': '/images/4blesbok-ram-portrait-02.png',
  '/images/4red-hartebeest-bull-portrait-02.png': '/images/1red-hartebeest-bull-portrait-01.png',
  '/images/5red-hartebeest-herd-bushveld-01.png': '/images/3red-hartebeest-cow-bushveld-01.png',
  '/images/6red-hartebeest-bull-standing-02.png': '/images/2red-hartebeest-bull-standing-01.png',
  '/images/2warthog-boar-standing-01.png': '/images/1warthog-boar-portrait-01.png',
  '/images/4warthog-boar-portrait-02.png': '/images/1warthog-boar-portrait-01.png',
  '/images/5warthog-family-bushveld-01.png': '/images/3warthog-sow-bushveld-01.png',
  '/images/5wildebeest-herd-bushveld-01.png': '/images/3wildebeest-cow-bushveld-01.png',
  '/images/about-dust-road.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/about-makoppa-dome.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/about-sweetveld-kudu.jpg': '/images/greater-kudu_card.png',
  '/images/conservation-anti-poaching.jpg': '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
  '/images/conservation-community-support.jpg': '/images/residences-main-lodge-boma-braai.jpg',
  '/images/conservation-harvest-kudu.jpg': '/images/greater-kudu_card.png',
  '/images/gallery-accommodation-collection.jpg': '/images/residences-homestead-main.jpg',
  '/images/gallery-landscape-collection.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/gallery-wildlife-collection.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/home-origins-main.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/home-origins-soil.jpg': '/images/_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg',
  '/images/home-species-wildebeest.jpg': '/images/4wildebeest-bull-portrait-02.png',
  '/images/home-species-warthog.jpg': '/images/warthog_card.png',
  '/images/lechwe-behavior.png': '/images/lechwe-taxonomy.png',
  '/images/lechwe-hunting-stalk.png': '/images/lechwe-taxonomy.png',
  '/images/residences-homestead-boma.jpg': '/images/residences-main-lodge-boma-braai.jpg',
  '/images/wildlife-ecological-management.jpg': '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
  '/images/wildlife-predators.jpg': '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
  '/images/wildlife-species-gallery-1.jpg': '/images/greater-kudu_card.png',
  '/images/wildlife-species-gallery-2.jpg': '/images/4wildebeest-bull-portrait-02.png',
  '/images/wildlife-species-gallery-3.jpg': '/images/impala-ram-portrait-01.png',
  '/images/wildlife-warthog.jpg': '/images/1warthog-boar-portrait-01.png',
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name)
    if (name.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(name.name)) continue
      walk(p, files)
    } else if (/\.(tsx|ts|css|md)$/.test(name.name)) files.push(p)
  }
  return files
}

let n = 0
for (const f of walk(root)) {
  if (f.includes('scripts' + path.sep + 'fix-broken')) continue
  let t = fs.readFileSync(f, 'utf8')
  const orig = t
  for (const [from, to] of Object.entries(MAP)) {
    if (t.includes(from)) {
      t = t.split(from).join(to)
    }
  }
  if (t !== orig) {
    fs.writeFileSync(f, t)
    n++
    console.log('updated', path.relative(root, f))
  }
}
console.log('files updated:', n)
