import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData'
import { getBlogPostBySlug } from '@/lib/blog-posts'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const pillarOgImage = marketingOgAbsolute(baseUrl, 'wildlife')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: "Hunter's Journal", url: baseUrl + '/blog' },
  { name: 'Limpopo vs Eastern Cape', url: constructCanonicalUrl('blog/limpopo-vs-eastern-cape') },
]

export const metadata: Metadata = {
  title: 'Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game in South Africa',
  description: 'Compare Limpopo and Eastern Cape for plains game hunting: bushveld vs open plains, species mix, climate, malaria-free status. Why the Waterberg and Makoppa rank among the best.',
  keywords: ['Limpopo hunting', 'Eastern Cape hunting', 'plains game South Africa', 'Waterberg', 'Makoppa', 'where to hunt', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game',
    'Compare Limpopo and Eastern Cape for plains game. Bushveld, species, climate. Why the Waterberg ranks among the best.',
    constructCanonicalUrl('blog/limpopo-vs-eastern-cape'),
    pillarOgImage
  ),
  twitter: generateTwitterCard(
    'Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game',
    'Compare Limpopo and Eastern Cape for plains game. Bushveld, species, climate. Why the Waterberg ranks among the best.',
    pillarOgImage
  ),
  alternates: { canonical: constructCanonicalUrl('blog/limpopo-vs-eastern-cape') },
}

const limpopoPost = getBlogPostBySlug('limpopo-vs-eastern-cape')!
const limpopoCanonical = constructCanonicalUrl('blog/limpopo-vs-eastern-cape')

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline={limpopoPost.title}
        description={limpopoPost.excerpt}
        url={limpopoCanonical}
        datePublished={limpopoPost.date}
        image={limpopoPost.heroImage}
      />
      {children}
    </>
  )
}
