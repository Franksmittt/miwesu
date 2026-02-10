import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'lechwe'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Lechwe Hunting Guide | Kobus leche',
  description: 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm. Learn about the Water Antelope - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Lechwe hunting', 'Kobus leche', 'water antelope', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph('Lechwe Hunting Guide | Kobus leche', 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm.', pageUrl, `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Lechwe Hunting Guide | Kobus leche', 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function LechweLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

