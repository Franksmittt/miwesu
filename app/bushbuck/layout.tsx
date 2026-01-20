import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Bushbuck Hunting Guide | Tragelaphus sylvaticus',
  description: 'Comprehensive guide to Bushbuck hunting at MIWESU Game Farm. Learn about the Prince of the Thickets - morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
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
    constructCanonicalUrl('bushbuck'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Bushbuck Hunting Guide | Tragelaphus sylvaticus',
    'Comprehensive guide to Bushbuck hunting at MIWESU Game Farm. Learn about the Prince of the Thickets - morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('bushbuck'),
  },
}

export default function BushbuckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

