/**
 * Fills data/facebook-folder-captions.json using Google AI (Gemini) vision.
 * Set: GOOGLE_API_KEY or GEMINI_API_KEY
 *
 * Run: npm run facebook-captions-google
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const fbDir = path.join(root, 'public', 'images', 'Facebook')
const galleryTs = path.join(root, 'lib', 'facebook-gallery.ts')
const captionsJson = path.join(root, 'data', 'facebook-folder-captions.json')

/** Prefer newest IDs; older flash models may return 404 for new API keys */
const MODELS = [
  'gemini-2.5-flash',
  'gemini-flash-latest',
  'gemini-2.0-flash-001',
  'gemini-2.0-flash-lite',
  'gemini-2.5-pro',
]

function parseGalleryFiles() {
  const text = fs.readFileSync(galleryTs, 'utf8')
  const set = new Set()
  for (const line of text.split('\n')) {
    const m = line.match(/\$\{BASE\}\/([^`]+)`/)
    if (m) set.add(m[1])
  }
  return set
}

function loadJson() {
  try {
    return JSON.parse(fs.readFileSync(captionsJson, 'utf8'))
  } catch {
    return {}
  }
}

function saveJson(obj) {
  fs.mkdirSync(path.dirname(captionsJson), { recursive: true })
  fs.writeFileSync(captionsJson, JSON.stringify(obj, null, 2) + '\n', 'utf8')
}

async function describeImage(apiKey, absPath, filename, model) {
  const buf = fs.readFileSync(absPath)
  const b64 = buf.toString('base64')
  const lower = filename.toLowerCase()
  const mime = lower.endsWith('.png')
    ? 'image/png'
    : lower.endsWith('.webp')
      ? 'image/webp'
      : 'image/jpeg'

  const prompt = `Describe this photograph for a lodge inventory document (MIWESU private game farm, Limpopo bushveld, South Africa).

Write 2–4 clear sentences covering: main subject(s), vegetation and landscape, any buildings/vehicles/pool/thatch, time of day or light if obvious.

Use neutral, factual language. If the image shows hunters or harvested game, say "harvest documentation" briefly without graphic detail.

Plain text only, no markdown, no bullet list.`

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: prompt },
            { inline_data: { mime_type: mime, data: b64 } },
          ],
        },
      ],
      generationConfig: { maxOutputTokens: 512, temperature: 0.4 },
    }),
  })

  const raw = await res.text()
  if (!res.ok) {
    throw new Error(`${res.status} ${raw.slice(0, 500)}`)
  }
  let data
  try {
    data = JSON.parse(raw)
  } catch {
    throw new Error(`Bad JSON: ${raw.slice(0, 200)}`)
  }

  const block = data.promptFeedback?.blockReason
  if (block) throw new Error(`Blocked: ${block}`)

  const text =
    data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('')?.trim() ||
    data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

  if (!text) throw new Error(`No text: ${JSON.stringify(data).slice(0, 400)}`)
  return text.replace(/\s+/g, ' ')
}

async function main() {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.error('Set GOOGLE_API_KEY or GEMINI_API_KEY')
    process.exit(1)
  }

  const galleryFiles = parseGalleryFiles()
  const data = loadJson()
  const files = fs
    .readdirSync(fbDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()

  const todo = files.filter((f) => !galleryFiles.has(f) && !data[f])
  console.log('Gallery (skip):', galleryFiles.size)
  console.log('JSON existing:', Object.keys(data).length)
  console.log('To caption:', todo.length)

  if (todo.length === 0) {
    console.log('Nothing to do. Run: npm run facebook-guide')
    process.exit(0)
  }

  let model = null
  let rest = todo
  for (const m of MODELS) {
    try {
      const first = todo[0]
      const text = await describeImage(apiKey, path.join(fbDir, first), first, m)
      model = m
      data[first] = text
      saveJson(data)
      rest = todo.slice(1)
      console.log('Using model:', model, '(first image captioned)')
      break
    } catch (e) {
      console.log('Skip model', m, '-', String(e.message).split('\n')[0].slice(0, 140))
    }
  }
  if (!model) {
    console.error('No working Gemini model. Enable Generative Language API for this key.')
    process.exit(1)
  }

  let n = 1
  for (const name of rest) {
    const abs = path.join(fbDir, name)
    process.stdout.write(`${++n}/${todo.length} ${name.slice(0, 40)}… `)
    let tries = 0
    while (tries < 3) {
      tries++
      try {
        data[name] = await describeImage(apiKey, abs, name, model)
        saveJson(data)
        console.log('ok')
        break
      } catch (e) {
        if (tries >= 3) {
          console.log('FAIL', e.message.slice(0, 200))
          process.exit(1)
        }
        await new Promise((r) => setTimeout(r, 2000 * tries))
      }
    }
    await new Promise((r) => setTimeout(r, 550))
  }

  console.log('Done. Run: npm run facebook-guide')
}

main()
