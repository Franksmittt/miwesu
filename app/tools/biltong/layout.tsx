import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'tools/biltong'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Tools', url: constructCanonicalUrl('tools') },
  { name: 'Biltong Yield Calculator', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Biltong Yield Calculator | Game Meat to Dry Weight',
  description: 'Estimate dry biltong yield from wet carcass weight for all 14 MIWESU species. Select species, enter weight, get yield based on standard SA processing. Built for the local market.',
  keywords: ['biltong calculator', 'game meat yield', 'carcass to biltong', 'South Africa', 'venison', 'MIWESU species'],
  openGraph: generateOpenGraph(
    'Biltong Yield Calculator | MIWESU Game Farm',
    'Estimate dry biltong yield from wet carcass weight for 14 species. Standard SA processing variables.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Biltong Yield Calculator | MIWESU',
    'Estimate dry biltong yield by species and carcass weight.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function BiltongLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
