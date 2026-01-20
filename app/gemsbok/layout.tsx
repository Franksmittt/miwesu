import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Gemsbok Hunting Guide | Oryx gazella',
  description: 'Comprehensive guide to Gemsbok hunting at MIWESU Game Farm. Learn about the Desert Warrior - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Gemsbok hunting', 'Oryx gazella', 'South African antelope', 'desert antelope', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Gemsbok Hunting Guide | Oryx gazella', 'Comprehensive guide to Gemsbok hunting at MIWESU Game Farm.', constructCanonicalUrl('gemsbok'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Gemsbok Hunting Guide | Oryx gazella', 'Comprehensive guide to Gemsbok hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('gemsbok') },
}

export default function GemsbokLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

