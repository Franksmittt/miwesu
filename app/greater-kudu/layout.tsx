import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { SpeciesTaxonSchema, BreadcrumbSchema } from '@/components/StructuredData'
import { SPECIES_BY_SLUG } from '@/lib/species-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const slug = 'greater-kudu'
const species = SPECIES_BY_SLUG[slug]
const pageUrl = constructCanonicalUrl(slug)
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
  { name: species.name, url: pageUrl },
]

export const metadata: Metadata = {
  title: 'Greater Kudu Hunting Guide | Tragelaphus strepsiceros',
  description: 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm. Learn about the Grey Ghost - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Greater Kudu hunting', 'Tragelaphus strepsiceros', 'Grey Ghost', 'spiral horn antelope', 'trophy hunting', 'MIWESU game farm', 'Makoppa', 'Limpopo'],
  openGraph: generateOpenGraph('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', pageUrl, `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Greater Kudu Hunting Guide | Tragelaphus strepsiceros', 'Comprehensive guide to Greater Kudu hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
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

