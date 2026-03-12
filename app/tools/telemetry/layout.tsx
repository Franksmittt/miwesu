import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const path = 'tools/telemetry'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Tools', url: constructCanonicalUrl('tools') },
  { name: 'Live Telemetry Dashboard', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Live Telemetry | Conservation Impact & Firewood Kiln',
  description: 'Real-time conservation impact metrics and Miwesu Premium Firewood kiln telemetry. Hectares protected, community impact, moisture and temperature data. Transparency for the Iron Eden.',
  keywords: ['conservation telemetry', 'firewood moisture', 'kiln data', 'conservation impact', 'MIWESU', 'sustainability', 'E-E-A-T'],
  openGraph: generateOpenGraph(
    'Live Telemetry Dashboard | MIWESU Game Farm',
    'Conservation impact and firewood kiln telemetry. Transparency for the Iron Eden.',
    constructCanonicalUrl(path),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Live Telemetry | MIWESU',
    'Conservation impact and kiln telemetry. Real-time transparency.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: { canonical: constructCanonicalUrl(path) },
}

export default function TelemetryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
