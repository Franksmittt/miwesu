import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'livingstone-eland'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei',
  description: 'Livingstone Eland (Taurotragus oryx livingstonii) at MIWESU: largest antelope, massive dewlap. Caliber .338 Win Mag / 9.3x62. Rowland Ward min 35". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Livingstone Eland hunting', 'Taurotragus oryx livingstonei', 'giant antelope', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei', 'Comprehensive guide to Livingstone Eland hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Livingstone Eland Hunting Guide | Taurotragus oryx livingstonei', 'Comprehensive guide to Livingstone Eland hunting at MIWESU Game Farm.', ogImage),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function LivingstoneElandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

