import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const path = 'residences/stone-villa'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Private Residences', url: constructCanonicalUrl('residences') },
  { name: 'The Stone Villa', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Bespoke Bushveld Living in Limpopo | Stone Villa',
  description: 'The Stone Villa: exclusive 6-sleeper, 2-bedroom property. Stargazing deck, telescope, outdoor braai. Malaria-free Waterberg. Makoppa district, Thabazimbi.',
  keywords: ['Stone Villa', '6-sleeper Thabazimbi', 'stargazing', 'bushveld lodge', 'Limpopo', 'Makoppa', 'exclusive use', 'MIWESU'],
  alternates: { canonical: constructCanonicalUrl(path) },
  openGraph: generateOpenGraph(
    'The Stone Villa | Private Residences',
    '6-sleeper near the pool. Two en-suites, kitchen, living, outdoor braai.',
    constructCanonicalUrl(path),
    `${baseUrl}/images/residences-second-house-main.jpg`
  ),
  twitter: generateTwitterCard(
    'The Stone Villa | Private Residences',
    '6-sleeper near the pool. Two en-suites, kitchen, living.',
    `${baseUrl}/images/residences-second-house-main.jpg`
  ),
}

export default function StoneVillaLayout({
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
