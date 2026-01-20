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

  return routes.map((route) => ({
    url: constructCanonicalUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}

