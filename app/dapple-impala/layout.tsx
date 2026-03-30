import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'dapple-impala'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Dapple Impala Hunting Guide | Aepyceros melampus',
  description: 'Dapple Impala (Aepyceros melampus variant) at MIWESU: rare color variant, high trophy value. Caliber .243 Win / 6.5 Creedmoor. Rowland Ward min 23 5/8". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Dapple Impala hunting', 'Aepyceros melampus', 'color variant', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Dapple Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Dapple Impala hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Dapple Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Dapple Impala hunting at MIWESU Game Farm.', ogImage),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function DappleImpalaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

