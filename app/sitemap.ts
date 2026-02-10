import { MetadataRoute } from 'next'
import { constructCanonicalUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', // Home
    'about',
    'residences',
    'activities',
    'wildlife',
    'blesbok',
    'bushbuck',
    'cape-buffalo',
    'dapple-impala',
    'gemsbok',
    'golden-wildebeest',
    'greater-kudu',
    'impala',
    'lechwe',
    'livingstone-eland',
    'red-hartebeest',
    'springbok',
    'warthog',
    'wildebeest',
    'conservation',
    'gallery',
    'rates',
    'faq',
    'contact',
  ]

  const priorityTier = (route: string): number => {
    if (route === '') return 1.0
    if (['rates', 'activities', 'wildlife'].includes(route)) return 0.95
    if (['blesbok', 'bushbuck', 'cape-buffalo', 'dapple-impala', 'gemsbok', 'golden-wildebeest', 'greater-kudu', 'impala', 'lechwe', 'livingstone-eland', 'red-hartebeest', 'springbok', 'warthog', 'wildebeest'].includes(route)) return 0.95
    if (['about', 'residences', 'conservation'].includes(route)) return 0.9
    return 0.85 // faq, contact, gallery
  }

  return routes.map((route) => ({
    url: constructCanonicalUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: priorityTier(route),
  }))
}

