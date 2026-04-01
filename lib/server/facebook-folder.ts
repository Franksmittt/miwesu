import 'server-only'

import { readdir } from 'fs/promises'
import path from 'path'
import { cache } from 'react'
import { authenticGalleryItems, type AuthenticGalleryCategory } from '@/lib/facebook-gallery'

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i

export type FacebookFolderEntry = {
  src: string
  category?: AuthenticGalleryCategory
  title?: string
}

/**
 * All image files in public/images/Facebook (sorted), with titles/categories from
 * lib/facebook-gallery when the path matches.
 * Cached per request so layout + page do not read disk twice.
 */
export const getFacebookFolderGalleryEntries = cache(async function getFacebookFolderGalleryEntries(): Promise<
  FacebookFolderEntry[]
> {
  const dir = path.join(process.cwd(), 'public', 'images', 'Facebook')
  let files: string[] = []
  try {
    const dirents = await readdir(dir, { withFileTypes: true })
    files = dirents.filter((d) => d.isFile() && IMAGE_EXT.test(d.name)).map((d) => d.name)
  } catch {
    return []
  }

  files.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

  const metaBySrc = new Map(authenticGalleryItems.map((i) => [i.src, i] as const))

  return files.map((name) => {
    const src = `/images/Facebook/${name}`
    const m = metaBySrc.get(src)
    if (!m) return { src }
    return { src, category: m.category, title: m.title }
  })
})
