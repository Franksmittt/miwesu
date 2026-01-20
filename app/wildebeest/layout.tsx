import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Blue Wildebeest Hunting Guide | Connochaetes taurinus',
  description: 'Comprehensive guide to Blue Wildebeest hunting at MIWESU Game Farm. Learn about the Tough One - morphology, behavior, hunting strategies, and trophy evaluation.',
  keywords: ['Blue Wildebeest hunting', 'Connochaetes taurinus', 'plains game', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Blue Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Blue Wildebeest hunting at MIWESU Game Farm.', constructCanonicalUrl('wildebeest'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Blue Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Blue Wildebeest hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('wildebeest') },
}

export default function WildebeestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

