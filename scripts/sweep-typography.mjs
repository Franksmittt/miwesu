/**
 * One-off replacements: map long Tailwind typography stacks to .type-* classes.
 * Run: node scripts/sweep-typography.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name)
    if (name.isDirectory()) {
      if (name.name === 'node_modules' || name.name === '.next') continue
      walk(p, acc)
    } else if (name.name.endsWith('.tsx') || name.name.endsWith('.ts')) acc.push(p)
  }
  return acc
}

const replacements = [
  // Hero title (standardized across marketing + species)
  [
    'font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4',
    'type-h1-hero mb-4 sm:mb-6 px-4',
  ],
  [
    'font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none',
    'type-h1-hero mb-4 sm:mb-6',
  ],
  [
    'font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none',
    'type-h1-hero mb-4',
  ],
  [
    'font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none',
    'type-h1-hero mb-6',
  ],
  // Hero eyebrow
  [
    'text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block',
    'type-eyebrow-hero mb-4 sm:mb-6 block',
  ],
  [
    'text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 block',
    'type-eyebrow-hero mb-4 block',
  ],
  // Species latin line
  [
    'text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif',
    'type-species-latin',
  ],
  // Section intro (common on species + marble)
  [
    'text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block',
    'type-eyebrow mb-6 block',
  ],
  [
    'font-serif text-4xl md:text-5xl text-onyx mb-6',
    'type-h2-section mb-6',
  ],
  [
    'font-serif text-4xl md:text-5xl text-white mb-6',
    'type-h2-section-dark mb-6',
  ],
  [
    'font-sans text-gray-600 text-lg leading-loose mb-4',
    'type-lead mb-4',
  ],
  [
    'font-sans text-gray-600 text-lg leading-loose',
    'type-lead',
  ],
]

let totalFiles = 0
let totalRepls = 0

for (const f of [...walk(path.join(root, 'app')), ...walk(path.join(root, 'components'))]) {
  let s = fs.readFileSync(f, 'utf8')
  let n = 0
  for (const [from, to] of replacements) {
    const c = s.split(from).length - 1
    if (c) {
      s = s.split(from).join(to)
      n += c
    }
  }
  if (n) {
    fs.writeFileSync(f, s)
    totalFiles++
    totalRepls += n
    console.log(path.relative(root, f), n)
  }
}

console.log('--- done:', totalFiles, 'files,', totalRepls, 'replacements')
