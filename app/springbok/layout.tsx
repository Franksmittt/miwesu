import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'springbok'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Springbok Hunting Guide | Antidorcas marsupialis',
  description: 'Springbok (Antidorcas marsupialis) at MIWESU: national animal, pronking. Caliber .243 Win /.260 Rem. Rowland Ward min 14". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Springbok hunting', 'Antidorcas marsupialis', 'gazelle', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Springbok Hunting Guide | Antidorcas marsupialis', 'Comprehensive guide to Springbok hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Springbok Hunting Guide | Antidorcas marsupialis', 'Comprehensive guide to Springbok hunting at MIWESU Game Farm.', ogImage),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function SpringbokLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

