import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'bushbuck'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Bushbuck Hunting Guide | Tragelaphus sylvaticus',
  description: 'Bushbuck (Tragelaphus sylvaticus) at MIWESU: Prince of the Thickets, dangerous when wounded. Caliber .308 / 7mm-08. Rowland Ward min 15". Makoppa district, Limpopo. Conservation harvest.',
  keywords: [
    'Bushbuck hunting',
    'Tragelaphus sylvaticus',
    'South African antelope',
    'bush hunting',
    'Bushbuck trophy',
    'game hunting South Africa',
    'thicket antelope',
    'trophy evaluation',
    'Bushbuck venison',
    'conservation harvest',
    'MIWESU game farm',
    'Makoppa district',
    'Tragelaphini',
    'Bushbuck behavior',
    'hunting ballistics',
    'spot and stalk',
    'Rowland Ward',
    'SCI scoring',
  ],
  openGraph: generateOpenGraph(
    'Bushbuck Hunting Guide | Tragelaphus sylvaticus',
    'Comprehensive guide to Bushbuck hunting at MIWESU Game Farm. Learn about the Prince of the Thickets - morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    pageUrl,
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Bushbuck Hunting Guide | Tragelaphus sylvaticus',
    'Comprehensive guide to Bushbuck hunting at MIWESU Game Farm. Learn about the Prince of the Thickets - morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function BushbuckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SpeciesTaxonSchema params={species} pageUrl={pageUrl} />
      {children}
    </>
  )
}

