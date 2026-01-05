import { MetadataRoute } from 'next'
import { constructCanonicalUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', // Home
    'about',
    'residences',
    'activities',
    'wildlife',
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

