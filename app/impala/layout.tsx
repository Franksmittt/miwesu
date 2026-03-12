import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'impala'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Impala Hunting Guide | Aepyceros melampus',
  description: 'Impala (Aepyceros melampus) hunting at MIWESU: lyre-shaped horns, bushveld fringe. Caliber .243 Win / 6.5mm Creedmoor. Rowland Ward min 23 5/8". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Impala hunting', 'Aepyceros melampus', '.243 Win', '6.5 Creedmoor', 'Rowland Ward', 'trophy hunting', 'MIWESU', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph('Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Impala hunting at MIWESU Game Farm.', pageUrl, `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Impala hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function ImpalaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

