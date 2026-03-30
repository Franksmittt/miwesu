/**
 * Open Graph / Twitter image URLs, single source for share previews & JSON-LD.
 * Paths are under /public; use absoluteAsset() with NEXT_PUBLIC_BASE_URL for meta tags.
 */
import { heroImages } from '@/lib/hero-images'
import { activityImages } from '@/lib/activity-images'

export function absoluteAsset(baseUrl: string, path: string): string {
  const base = baseUrl.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

/** Species slug → card art (verified paths used on /wildlife) */
export const SPECIES_OG_PATH: Record<string, string> = {
  'greater-kudu': '/images/greater-kudu_card.png', wildebeest: '/images/blue-wildebeest_card.png', 'golden-wildebeest': '/images/golden-wildebeest_card.png', impala: '/images/impala_card.png', 'dapple-impala': '/images/dapple-impala_card.png', gemsbok: '/images/gemsbok_card.png', warthog: '/images/warthog_card.png', blesbok: '/images/blesbok_card.png', bushbuck: '/images/bushbuck_card.png', 'cape-buffalo': '/images/cape-buffalo_card.png', lechwe: '/images/Lechwe_card.png', 'livingstone-eland': '/images/livingstone-eland_card.png', 'red-hartebeest': '/images/red-hartebeest_card.png', springbok: '/images/springbok_card.png',
}

export function speciesOgAbsolute(baseUrl: string, slug: string): string {
  const path = SPECIES_OG_PATH[slug] ?? '/og-image.jpg'
  return absoluteAsset(baseUrl, path)
}

/** Marketing routes, real lodge / bushveld photography for social previews */
export const MARKETING_OG = {
  root: heroImages.home, about: heroImages.home, activities: activityImages.hero, wildlife: heroImages.wildlife, residences: '/images/residences-homestead-main.jpg', conservation: heroImages.conservation, gallery: heroImages.gallery, compare: heroImages.wildlife, book: heroImages.home, contact: heroImages.contact, faq: heroImages.faq, rates: heroImages.rates, availability: heroImages.residences, wood: heroImages.home, partners: heroImages.home, trophyExport: heroImages.wildlife, tools: heroImages.home, toolsSaps520: heroImages.home, toolsBiltong: heroImages.home, /** Hunter's Journal index */
  blog: heroImages.home,
} as const

export function marketingOgAbsolute(baseUrl: string, key: keyof typeof MARKETING_OG): string {
  return absoluteAsset(baseUrl, MARKETING_OG[key])
}
