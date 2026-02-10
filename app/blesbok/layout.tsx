import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'blesbok'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Blesbok Hunting Guide | Damaliscus pygargus phillipsi',
  description: 'Comprehensive guide to Blesbok hunting at MIWESU Game Farm. Learn about morphology, behavior, hunting strategies, trophy evaluation, and venison utilization of this iconic Highveld antelope. Conservation status, ballistics, and field judging tips included.',
  keywords: [
    'Blesbok hunting',
    'Damaliscus pygargus phillipsi',
    'South African antelope',
    'Highveld hunting',
    'Blesbok trophy',
    'game hunting South Africa',
    'antelope hunting guide',
    'trophy evaluation',
    'Blesbok venison',
    'conservation harvest',
    'MIWESU game farm',
    'Makoppa district',
    'sweetveld antelope',
    'Alcelaphini',
    'Blesbok behavior',
    'hunting ballistics',
    'spot and stalk',
    'Rowland Ward',
    'SCI scoring',
  ],
  openGraph: generateOpenGraph(
    'Blesbok Hunting Guide | Damaliscus pygargus phillipsi',
    'Comprehensive guide to Blesbok hunting at MIWESU Game Farm. Learn about morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    pageUrl,
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Blesbok Hunting Guide | Damaliscus pygargus phillipsi',
    'Comprehensive guide to Blesbok hunting at MIWESU Game Farm. Learn about morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: pageUrl, languages: { 'en-US': pageUrl, 'x-default': pageUrl } },
}

export default function BlesbokLayout({
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

