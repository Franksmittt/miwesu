import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'tools')
const path = 'tools'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Tools & Resources', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Tools & Resources | SAPS 520, Biltong Calculator',
  description: 'SAPS 520 firearm permit generator and Biltong Yield Calculator for 14 species. Free planning tools for international hunters at MIWESU.',
  keywords: ['SAPS 520', 'firearm permit South Africa', 'biltong calculator', 'game meat yield', 'MIWESU tools', 'hunting logistics'],
  openGraph: generateOpenGraph(
    'Tools & Resources | MIWESU Game Farm',
    'SAPS 520 generator and Biltong Yield Calculator. Free tools for hunters.',
    constructCanonicalUrl(path),
    ogImage
  ),
  twitter: generateTwitterCard(
    'Tools & Resources | MIWESU Game Farm',
    'SAPS 520 generator and Biltong calculator. Free tools for hunters.',
    ogImage
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

const toolsWebPage = generateWebPageSchema({
  name: 'Tools & resources | MIWESU hunter utilities',
  description:
    'SAPS 520 PDF helper and biltong yield calculator for 14 species. Free tools for international hunters.',
  url: constructCanonicalUrl(path),
})

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={toolsWebPage} />
      {children}
    </>
  )
}
