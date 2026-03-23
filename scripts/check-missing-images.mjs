import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const exts = ['.tsx', '.ts', '.css']
function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name)
    if (name.isDirectory()) {
      if (name.name === 'node_modules' || name.name === '.next') continue
      walk(p, files)
    } else if (exts.some((e) => name.name.endsWith(e))) files.push(p)
  }
  return files
}

const re = /\/images\/[a-zA-Z0-9_\-\./]+/g
const set = new Set()
for (const f of walk(path.join(root, 'app'))) {
  const t = fs.readFileSync(f, 'utf8')
  let m
  while ((m = re.exec(t))) set.add(m[0])
}
for (const f of walk(path.join(root, 'lib'))) {
  const t = fs.readFileSync(f, 'utf8')
  let m
  while ((m = re.exec(t))) set.add(m[0])
}
for (const f of walk(path.join(root, 'components'))) {
  const t = fs.readFileSync(f, 'utf8')
  let m
  while ((m = re.exec(t))) set.add(m[0])
}

const missing = []
for (const r of set) {
  const rel = r.replace(/^\//, '')
  const fp = path.join(root, 'public', rel)
  if (!fs.existsSync(fp)) missing.push(r)
}
missing.sort()
for (const m of missing) console.log(m)
console.error('--- total missing:', missing.length)
