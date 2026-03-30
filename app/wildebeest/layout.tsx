import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'wildebeest'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Blue Wildebeest Hunting Guide | Connochaetes taurinus',
  description: 'Blue Wildebeest (Connochaetes taurinus) at MIWESU: Poor Man\'s Buffalo, open savanna. Caliber .300 Win Mag /.375 H&H, premium bonded. Rowland Ward min 28 1/2". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Blue Wildebeest hunting', 'Connochaetes taurinus', 'plains game', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Blue Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Blue Wildebeest hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Blue Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Blue Wildebeest hunting at MIWESU Game Farm.', ogImage),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function WildebeestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

