import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

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
    constructCanonicalUrl('blesbok'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Blesbok Hunting Guide | Damaliscus pygargus phillipsi',
    'Comprehensive guide to Blesbok hunting at MIWESU Game Farm. Learn about morphology, behavior, hunting strategies, trophy evaluation, and venison utilization.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('blesbok'),
  },
}

export default function BlesbokLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

