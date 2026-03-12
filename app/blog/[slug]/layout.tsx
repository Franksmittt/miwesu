import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'
import { getBlogPostBySlug } from '@/lib/blog-posts'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  const path = `blog/${slug}`
  const canonical = constructCanonicalUrl(path)
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      'MIWESU',
      'Makoppa',
      'Thabazimbi',
      'Limpopo',
      'conservation harvest',
      'Hunter\'s Journal',
    ],
    openGraph: {
      ...generateOpenGraph(post.title, post.excerpt, canonical, post.heroImage ? `${baseUrl}${post.heroImage}` : `${baseUrl}/og-image.jpg`),
      locale: 'en_ZA',
    },
    twitter: generateTwitterCard(post.title, post.excerpt, post.heroImage ? `${baseUrl}${post.heroImage}` : `${baseUrl}/og-image.jpg`),
    alternates: { canonical },
  }
}

export default async function BlogSlugLayout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()
  const path = `blog/${slug}`
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl + '/' },
    { name: "Hunter's Journal", url: constructCanonicalUrl('blog') },
    { name: post.title, url: constructCanonicalUrl(path) },
  ]
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
