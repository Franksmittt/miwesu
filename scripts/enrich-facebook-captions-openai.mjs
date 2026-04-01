/**
 * Fills data/facebook-folder-captions.json for Facebook images that are not in
 * lib/facebook-gallery.ts and do not already have a JSON caption.
 *
 * Requires: OPENAI_API_KEY in environment (https://platform.openai.com/)
 * Model: gpt-4o-mini (vision). Approximate cost: a few cents per image.
 *
 * Run: npm run facebook-captions-openai
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const fbDir = path.join(root, 'public', 'images', 'Facebook')
const galleryTs = path.join(root, 'lib', 'facebook-gallery.ts')
const captionsJson = path.join(root, 'data', 'facebook-folder-captions.json')

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

async function describeImage(apiKey, absPath, filename) {
  const buf = fs.readFileSync(absPath)
  const b64 = buf.toString('base64')
  const mime = filename.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 300,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Describe this photo for a lodge inventory text file (MIWESU bushveld, South Africa). 
2–4 sentences: main subject, vegetation/landscape, structures (thatch, pool, vehicle), lighting/time of day. 
Neutral, factual tone. If dead game or hunters appear, say "harvest documentation" briefly without graphic detail. 
No markdown.`,
            },
            {
              type: 'image_url',
              image_url: { url: `data:${mime};base64,${b64}` },
            },
          ],
        },
      ],
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`OpenAI ${res.status}: ${err}`)
  }
  const data = await res.json()
  const text = data.choices?.[0]?.message?.content?.trim()
  if (!text) throw new Error('Empty response')
  return text.replace(/\s+/g, ' ')
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('Set OPENAI_API_KEY in the environment.')
    process.exit(1)
  }

  const galleryFiles = parseGalleryFiles()
  const data = loadJson()
  const files = fs
    .readdirSync(fbDir)
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .sort()

  const todo = files.filter((f) => !galleryFiles.has(f) && !data[f])
  console.log('Already in gallery:', galleryFiles.size)
  console.log('Already in JSON:', Object.keys(data).length)
  console.log('To process:', todo.length)

  let done = 0
  for (const name of todo) {
    const abs = path.join(fbDir, name)
    process.stdout.write(`${++done}/${todo.length} ${name} ... `)
    try {
      data[name] = await describeImage(apiKey, abs, name)
      saveJson(data)
      console.log('ok')
    } catch (e) {
      console.log('FAIL', e.message)
      process.exit(1)
    }
    await new Promise((r) => setTimeout(r, 400))
  }

  console.log('Done. Run: npm run facebook-guide')
}

main()
