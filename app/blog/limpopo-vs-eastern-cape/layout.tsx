import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
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
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl('blog/limpopo-vs-eastern-cape') },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
