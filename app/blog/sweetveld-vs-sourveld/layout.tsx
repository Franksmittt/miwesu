import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { absoluteAsset } from '@/lib/open-graph'
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData'
import { getBlogPostBySlug } from '@/lib/blog-posts'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const pillarOgImage = absoluteAsset(baseUrl, '/images/greater-kudu_card.png')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: "Hunter's Journal", url: baseUrl + '/blog' },
  { name: 'Sweetveld vs Sourveld', url: constructCanonicalUrl('blog/sweetveld-vs-sourveld') },
]

export const metadata: Metadata = {
  title: 'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
  description: 'How Sweetveld grasses in the Makoppa district sustain plains game in peak condition. Nutrient density, trophy quality, and why MIWESU\'s Arid Sweet Bushveld matters for hunters.',
  keywords: ['Sweetveld', 'Sourveld', 'nutrient density', 'trophy quality', 'Makoppa', 'Limpopo', 'bushveld', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
    'How Sweetveld in the Makoppa district sustains game in peak condition. Trophy quality and ecology.',
    constructCanonicalUrl('blog/sweetveld-vs-sourveld'),
    pillarOgImage
  ),
  twitter: generateTwitterCard(
    'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns',
    'How Sweetveld in the Makoppa district sustains game in peak condition. Trophy quality and ecology.',
    pillarOgImage
  ),
  alternates: { canonical: constructCanonicalUrl('blog/sweetveld-vs-sourveld') },
}

const sweetveldPost = getBlogPostBySlug('sweetveld-vs-sourveld')!
const sweetveldCanonical = constructCanonicalUrl('blog/sweetveld-vs-sourveld')

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline={sweetveldPost.title}
        description={sweetveldPost.excerpt}
        url={sweetveldCanonical}
        datePublished={sweetveldPost.date}
        image={sweetveldPost.heroImage}
      />
      {children}
    </>
  )
}
