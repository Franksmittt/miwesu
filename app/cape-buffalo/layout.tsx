import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Cape Buffalo Hunting Guide | Syncerus caffer',
  description: 'Comprehensive guide to Cape Buffalo hunting at MIWESU Game Farm. Learn about the Black Death - one of Africa\'s most dangerous Big Five animals.',
  keywords: ['Cape Buffalo hunting', 'Syncerus caffer', 'Big Five', 'dangerous game', 'buffalo hunting South Africa', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph(
    'Cape Buffalo Hunting Guide | Syncerus caffer',
    'Comprehensive guide to Cape Buffalo hunting at MIWESU Game Farm.',
    constructCanonicalUrl('cape-buffalo'),
    `${baseUrl}/og-image.jpg`
  ),
  twitter: generateTwitterCard(
    'Cape Buffalo Hunting Guide | Syncerus caffer',
    'Comprehensive guide to Cape Buffalo hunting at MIWESU Game Farm.',
    `${baseUrl}/og-image.jpg`
  ),
  alternates: {
    canonical: constructCanonicalUrl('cape-buffalo'),
  },
}

export default function CapeBuffaloLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

