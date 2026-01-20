import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Golden Wildebeest Hunting Guide | Connochaetes taurinus',
  description: 'Comprehensive guide to Golden Wildebeest hunting at MIWESU Game Farm. Learn about this unique color variant of the Blue Wildebeest.',
  keywords: ['Golden Wildebeest hunting', 'Connochaetes taurinus', 'color variant', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Golden Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Golden Wildebeest hunting at MIWESU Game Farm.', constructCanonicalUrl('golden-wildebeest'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Golden Wildebeest Hunting Guide | Connochaetes taurinus', 'Comprehensive guide to Golden Wildebeest hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('golden-wildebeest') },
}

export default function GoldenWildebeestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

