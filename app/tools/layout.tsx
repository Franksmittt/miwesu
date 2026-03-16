import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'tools'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Tools & Resources', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Tools & Resources | SAPS 520, Biltong Calculator, Telemetry',
  description: 'Radical Trust Hub: SAPS 520 firearm permit generator, Biltong Yield Calculator for 14 species, and Live Telemetry Dashboard. Free tools for international hunters and conservation transparency at MIWESU.',
  keywords: ['SAPS 520', 'firearm permit South Africa', 'biltong calculator', 'game meat yield', 'conservation telemetry', 'MIWESU tools', 'hunting logistics'],
  openGraph: generateOpenGraph(
    'Tools & Resources | MIWESU Game Farm',
    'SAPS 520 generator, Biltong Yield Calculator, Live Telemetry Dashboard. Free tools for hunters and conservation transparency.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Tools & Resources | MIWESU Game Farm',
    'SAPS 520 generator, Biltong Calculator, Telemetry. Free tools for hunters.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
