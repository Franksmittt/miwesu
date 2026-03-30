import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { speciesOgAbsolute } from '@/lib/open-graph'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'greater-kudu'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const ogImage = speciesOgAbsolute(baseUrl, slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Greater Kudu Hunting Guide | Tragelaphus strepsiceros',
  description: 'Greater Kudu (Tragelaphus strepsiceros) hunting at MIWESU: Grey Ghost, spiral horns. Recommended .300 Win Mag /.30-06. Rowland Ward min 53 7/8". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Greater Kudu hunting', 'Tragelaphus strepsiceros', 'Grey Ghost', 'Rowland Ward', '53 7/8', '.300 Win Mag', 'spiral horn', 'trophy hunting', 'MIWESU', 'Makoppa', 'Limpopo'],
  openGraph: { ...generateOpenGraph('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', pageUrl, ogImage), locale: 'en_ZA' },
  twitter: generateTwitterCard('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', ogImage),
  alternates: {
    canonical: pageUrl,
    languages: { 'en-US': pageUrl, 'x-default': pageUrl },
  },
}

export default function GreaterKuduLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

