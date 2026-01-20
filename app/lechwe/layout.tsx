import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Lechwe Hunting Guide | Kobus leche',
  description: 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm. Learn about the Water Antelope - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Lechwe hunting', 'Kobus leche', 'water antelope', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Lechwe Hunting Guide | Kobus leche', 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm.', constructCanonicalUrl('lechwe'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Lechwe Hunting Guide | Kobus leche', 'Comprehensive guide to Lechwe hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('lechwe') },
}

export default function LechweLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

