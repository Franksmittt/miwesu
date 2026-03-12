import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const path = 'compare'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Compare Species', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Compare Species | Wildlife & Trophy Guide',
  description: 'Compare two species from the MIWESU portfolio: ballistics, habitat, trophy minimums, and biology. Blue Wildebeest vs Golden Wildebeest, Kudu vs Eland, and more. Makoppa district, Limpopo.',
  keywords: ['compare species', 'blue wildebeest vs golden', 'trophy comparison', 'ballistics comparison', 'MIWESU wildlife', 'Limpopo species'],
  openGraph: generateOpenGraph(
    'Compare Species | MIWESU Game Farm',
    'Compare two species: ballistics, habitat, trophy minimums. Programmatic comparison for the 14 managed species.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Compare Species | MIWESU',
    'Compare two species: ballistics, habitat, trophy minimums.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
