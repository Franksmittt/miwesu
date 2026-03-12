import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'golden-wildebeest'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Golden Wildebeest Hunting Guide | Connochaetes taurinus',
  description: 'Golden Wildebeest (Connochaetes taurinus variant) at MIWESU: golden/copper coat, Limpopo variant. Caliber .300 Win Mag /.375 H&H. Rowland Ward min 28 1/2". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Golden Wildebeest hunting', 'Connochaetes taurinus', 'color variant', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph('Golden Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Golden Wildebeest hunting at MIWESU Game Farm.', pageUrl, `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Golden Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Golden Wildebeest hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function GoldenWildebeestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

