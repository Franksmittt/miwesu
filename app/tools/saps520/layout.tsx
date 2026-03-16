import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'tools/saps520'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Tools', url: constructCanonicalUrl('tools') },
  { name: 'SAPS 520 Generator', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'SAPS 520 Firearm Permit Generator for US Hunters',
  description: 'Generate a compliant SAPS 520 temporary firearm import form for South Africa. Enter applicant details and up to four firearms. Pre-filled PDF ready for submission. Free tool for international hunters.',
  keywords: ['SAPS 520', 'firearm permit South Africa', 'temporary import', 'US hunter', 'rifle import SA', 'police service', 'MIWESU'],
  openGraph: generateOpenGraph(
    'SAPS 520 Firearm Permit Generator for US Hunters | Miwesu',
    'Generate a compliant SAPS 520 form for South Africa. Pre-filled PDF for temporary firearm import. Free for international hunters.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'SAPS 520 Firearm Permit Generator | Miwesu',
    'Generate a compliant SAPS 520 form for South Africa. Free tool for international hunters.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function SAPS520Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
