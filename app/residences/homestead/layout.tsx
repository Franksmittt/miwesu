import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const path = 'residences/homestead'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Private Residences', url: constructCanonicalUrl('residences') },
  { name: 'The Homestead', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'The Homestead | Private Residences',
  description: 'The Homestead at MIWESU  - 16-sleeper main lodge. Four bedrooms, kitchen, living, first patio, boma and braai, lapa, pool. Exclusive use.',
  alternates: { canonical: constructCanonicalUrl(path) },
  openGraph: generateOpenGraph(
    'The Homestead | Private Residences',
    '16-sleeper main lodge. Exclusive use. Kitchen, living, boma, lapa, pool.',
    constructCanonicalUrl(path),
    `${baseUrl}/images/residences-homestead-main.jpg`
  ),
  twitter: generateTwitterCard(
    'The Homestead | Private Residences',
    '16-sleeper main lodge. Exclusive use.',
    `${baseUrl}/images/residences-homestead-main.jpg`
  ),
}

export default function HomesteadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
