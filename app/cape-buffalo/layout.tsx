import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'cape-buffalo'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Cape Buffalo Caliber Guide: .375 H&H Minimum | Syncerus caffer',
  description: 'Cape Buffalo (Syncerus caffer) at MIWESU: dangerous game, fused boss. Legal minimum .375 H&H Mag, 300-grain monolithic solids. Rowland Ward min 42". Makoppa district, Limpopo.',
  keywords: ['Cape Buffalo hunting', 'Syncerus caffer', '.375 H&H', 'dangerous game', 'buffalo South Africa', 'Rowland Ward', 'trophy hunting', 'MIWESU', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph(
    'Cape Buffalo Hunting Guide | Syncerus caffer',
    'Comprehensive guide to Cape Buffalo hunting at MIWESU Game Farm.',
    pageUrl,
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Cape Buffalo Hunting Guide | Syncerus caffer',
    'Comprehensive guide to Cape Buffalo hunting at MIWESU Game Farm.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function CapeBuffaloLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

