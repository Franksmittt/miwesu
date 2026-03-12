import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Conservation', url: constructCanonicalUrl('conservation') },
]

export const metadata: Metadata = {
  title: 'Conservation & Guardian\'s Pledge | Ethical Stewardship',
  description: 'Elite environmental stewardship at MIWESU: annual ecological census dictates harvest availability. 100% of harvested meat donated to feed 300 local families monthly. Guardian\'s Pledge: silence, fair chase, respect. Anti-poaching, habitat restoration. Makoppa, Thabazimbi.',
  keywords: ['conservation', 'Guardian\'s Pledge', 'ethical hunting', 'fair chase', 'PHASA', 'meat donation', 'anti-poaching', 'ecological census', 'sustainable use', 'Limpopo', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'],
  openGraph: generateOpenGraph(
    'Conservation | Our Legacy',
    'Learn about MIWESU GAME FARM\'s conservation programs: anti-poaching, community support, and habitat restoration in the Makoppa district.',
    constructCanonicalUrl('conservation'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Conservation | Our Legacy',
    'Learn about MIWESU GAME FARM\'s conservation programs and impact in the Makoppa district.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('conservation'),
  },
}

export default function ConservationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}

