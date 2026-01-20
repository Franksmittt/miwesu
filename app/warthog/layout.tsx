import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Warthog Hunting Guide | Phacochoerus africanus',
  description: 'Comprehensive guide to Warthog hunting at MIWESU Game Farm. Learn about the Opportunist - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Warthog hunting', 'Phacochoerus africanus', 'tusk hunting', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Warthog Hunting Guide | Phacochoerus africanus', 'Comprehensive guide to Warthog hunting at MIWESU Game Farm.', constructCanonicalUrl('warthog'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Warthog Hunting Guide | Phacochoerus africanus', 'Comprehensive guide to Warthog hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('warthog') },
}

export default function WarthogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

