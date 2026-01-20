import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Springbok Hunting Guide | Antidorcas marsupialis',
  description: 'Comprehensive guide to Springbok hunting at MIWESU Game Farm. Learn about the Pronking Gazelle - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Springbok hunting', 'Antidorcas marsupialis', 'gazelle', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Springbok Hunting Guide | Antidorcas marsupialis', 'Comprehensive guide to Springbok hunting at MIWESU Game Farm.', constructCanonicalUrl('springbok'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Springbok Hunting Guide | Antidorcas marsupialis', 'Comprehensive guide to Springbok hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('springbok') },
}

export default function SpringbokLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

