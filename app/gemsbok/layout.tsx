import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'gemsbok'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Gemsbok Hunting Guide | Oryx gazella',
  description: 'Gemsbok (Oryx gazella) hunting at MIWESU: rapier horns, arid-adapted. Caliber .30-06 /.300 Win Mag. Rowland Ward min 40". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Gemsbok hunting', 'Oryx gazella', 'South African antelope', 'desert antelope', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Gemsbok Hunting Guide | Oryx gazella', 'Comprehensive guide to Gemsbok hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Gemsbok Hunting Guide | Oryx gazella', 'Comprehensive guide to Gemsbok hunting at MIWESU Game Farm.', ogImage),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function GemsbokLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

