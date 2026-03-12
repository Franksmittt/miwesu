import { MetadataRoute } from 'next'
import { constructCanonicalUrl } from '@/lib/seo'
import { SPECIES_SLUGS } from '@/lib/species-data'
import { getBlogSlugs } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

  const staticRoutes: Array<{ path: string; changeFrequency: 'daily' | 'weekly' | 'monthly'; priority: number }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: 'about', changeFrequency: 'monthly', priority: 0.85 },
    { path: 'activities', changeFrequency: 'monthly', priority: 0.85 },
    { path: 'wildlife', changeFrequency: 'weekly', priority: 0.9 },
    { path: 'residences', changeFrequency: 'monthly', priority: 0.9 },
    { path: 'residences/homestead', changeFrequency: 'monthly', priority: 0.9 },
    { path: 'residences/stone-villa', changeFrequency: 'monthly', priority: 0.9 },
    { path: 'conservation', changeFrequency: 'monthly', priority: 0.85 },
    { path: 'gallery', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'wood', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'rates', changeFrequency: 'daily', priority: 0.9 },
    { path: 'availability', changeFrequency: 'daily', priority: 0.85 },
    { path: 'book', changeFrequency: 'monthly', priority: 0.9 },
    { path: 'faq', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'contact', changeFrequency: 'monthly', priority: 0.85 },
    { path: 'trophy-export', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'partners', changeFrequency: 'monthly', priority: 0.75 },
    { path: 'tools', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'tools/saps520', changeFrequency: 'monthly', priority: 0.75 },
    { path: 'tools/biltong', changeFrequency: 'monthly', priority: 0.75 },
    { path: 'tools/telemetry', changeFrequency: 'monthly', priority: 0.75 },
    { path: 'compare', changeFrequency: 'monthly', priority: 0.75 },
    { path: 'blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: 'blog/sweetveld-vs-sourveld', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'blog/limpopo-vs-eastern-cape', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'de', changeFrequency: 'monthly', priority: 0.6 },
    { path: 'es', changeFrequency: 'monthly', priority: 0.6 },
  ]

  const speciesEntries: MetadataRoute.Sitemap = SPECIES_SLUGS.map((slug) => ({
    url: constructCanonicalUrl(slug),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const blogSlugs = getBlogSlugs()
  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: constructCanonicalUrl(`blog/${slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, changeFrequency, priority }) => ({
    url: constructCanonicalUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  return [...staticEntries, ...blogEntries, ...speciesEntries]
}
