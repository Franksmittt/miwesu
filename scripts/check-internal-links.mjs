import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function walkFiles(dir, exts, acc = []) {
  if (!fs.existsSync(dir)) return acc
  for (const n of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, n.name)
    if (n.isDirectory()) {
      if (n.name === 'node_modules' || n.name === '.git') continue
      walkFiles(full, exts, acc)
    } else if (exts.some((e) => n.name.endsWith(e))) acc.push(full)
  }
  return acc
}

function extractHrefsFromFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8')
  const hrefs = new Set()
  const re = /href=["'](\/[^"'?#]*)["']/g
  let m
  while ((m = re.exec(text))) hrefs.add(m[1] || '/')
  const reLib = /href:\s*["'](\/[^"'?#]*)["']/g
  while ((m = reLib.exec(text))) hrefs.add(m[1] || '/')
  return [...hrefs]
}

function collectRoutes(dir, segments = []) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const n of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!n.isDirectory()) continue
    const name = n.name
    if (name === 'api') continue
    if (name.startsWith('_')) continue
    const next = [...segments, name]
    const full = path.join(dir, name)
    const hasPage =
      fs.existsSync(path.join(full, 'page.tsx')) || fs.existsSync(path.join(full, 'page.js'))
    if (hasPage) {
      const route = '/' + next.join('/')
      out.push(route)
    }
    out.push(...collectRoutes(full, next))
  }
  return out
}

const appDir = path.join(root, 'app')
const discovered = new Set(collectRoutes(appDir))
discovered.add('/')
if (fs.existsSync(path.join(appDir, 'page.tsx')) || fs.existsSync(path.join(appDir, 'page.js'))) {
  discovered.add('/')
}

const SPECIES = new Set([
  'greater-kudu',
  'wildebeest',
  'golden-wildebeest',
  'impala',
  'dapple-impala',
  'gemsbok',
  'warthog',
  'blesbok',
  'bushbuck',
  'cape-buffalo',
  'lechwe',
  'livingstone-eland',
  'red-hartebeest',
  'springbok',
])

function routeExists(pathname) {
  const [noHash] = pathname.split('#')
  const p = noHash.replace(/\/$/, '') || '/'
  if (discovered.has(p)) return true
  // Dynamic blog slug: any /blog/foo if blog has catch-all - check static files
  const blogMatch = /^\/blog\/([^/]+)$/.exec(p)
  if (blogMatch) {
    const slug = blogMatch[1]
    const staticBlog = path.join(appDir, 'blog', slug, 'page.tsx')
    if (fs.existsSync(staticBlog)) return true
    // dynamic [slug] - assume valid if in content (optional strict check)
    return true
  }
  if (/^\/admin\/bookings\/[^/]+$/.test(p)) return true
  if (/^\/wildlife\/[^/]+$/.test(p)) {
    const slug = p.replace('/wildlife/', '')
    return SPECIES.has(slug)
  }
  const one = p.startsWith('/') ? p.slice(1) : p
  const firstSeg = one.split('/')[0]
  if (one && !one.includes('/') && SPECIES.has(one)) return true
  return false
}

const hrefs = new Set()
for (const f of [
  ...walkFiles(path.join(root, 'app'), ['.tsx', '.ts']),
  ...walkFiles(path.join(root, 'components'), ['.tsx']),
  ...walkFiles(path.join(root, 'lib'), ['.ts']),
]) {
  for (const h of extractHrefsFromFile(f)) hrefs.add(h.split('?')[0])
}

const bad = [...hrefs].filter((h) => !routeExists(h)).sort()
console.log('Discovered', discovered.size, 'routes; checked', hrefs.size, 'unique hrefs')
if (process.env.DEBUG) console.log([...hrefs].sort().join('\n'))
if (bad.length) {
  console.error('MISSING ROUTES:', bad.join('\n'))
  process.exit(1)
}
console.log('All href="..." paths resolve to known routes.')
