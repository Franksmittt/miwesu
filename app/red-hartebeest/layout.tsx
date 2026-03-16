import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const slug = 'red-hartebeest'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama',
  description: 'Red Hartebeest (Alcelaphus buselaphus caama) at MIWESU: Heart-beast, elongated face. Caliber .308 /.30-06. Rowland Ward min 23". Makoppa district, Limpopo. Conservation harvest.',
  keywords: ['Red Hartebeest hunting', 'Alcelaphus buselaphus caama', 'antelope hunting', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph('Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama', 'Comprehensive guide to Red Hartebeest hunting at MIWESU Game Farm.', pageUrl, `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Red Hartebeest Hunting Guide | Alcelaphus buselaphus caama', 'Comprehensive guide to Red Hartebeest hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function RedHartebeestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

