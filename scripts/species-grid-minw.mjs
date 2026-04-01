import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const files = [
  'app/blesbok/page.tsx',
  'app/bushbuck/page.tsx',
  'app/cape-buffalo/page.tsx',
  'app/dapple-impala/page.tsx',
  'app/gemsbok/page.tsx',
  'app/golden-wildebeest/page.tsx',
  'app/greater-kudu/page.tsx',
  'app/impala/page.tsx',
  'app/lechwe/page.tsx',
  'app/livingstone-eland/page.tsx',
  'app/red-hartebeest/page.tsx',
  'app/springbok/page.tsx',
  'app/warthog/page.tsx',
  'app/wildebeest/page.tsx',
  'components/wildlife/WildlifeIndexPage.tsx',
]

const gridRe = /md:grid-cols-2(?!\s\[&>\*\]:min-w-0)(\s+)(gap-\d+)/g
const flexRe = /(flex flex-col md:flex-row md:items-stretch)(?!\s\[&>\*\]:min-w-0)(\s+)(gap-\d+)/g

for (const rel of files) {
  const p = path.join(root, rel)
  let c = fs.readFileSync(p, 'utf8')
  const o = c
  c = c.replace(gridRe, 'md:grid-cols-2 [&>*]:min-w-0$1$2')
  c = c.replace(flexRe, '$1 [&>*]:min-w-0$2$3')
  if (c !== o) fs.writeFileSync(p, c)
  console.log(rel, c !== o ? 'updated' : 'unchanged')
}
