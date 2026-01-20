import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Impala Hunting Guide | Aepyceros melampus',
  description: 'Comprehensive guide to Impala hunting at MIWESU Game Farm. Learn about the Athlete of the Bushveld - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Impala hunting', 'Aepyceros melampus', 'bushveld antelope', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Impala hunting at MIWESU Game Farm.', constructCanonicalUrl('impala'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Impala hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('impala') },
}

export default function ImpalaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

