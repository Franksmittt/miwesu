import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.com'

export const metadata: Metadata = {
  title: 'Dapple Impala Hunting Guide | Aepyceros melampus',
  description: 'Comprehensive guide to Dapple Impala hunting at MIWESU Game Farm. Learn about this unique color variant of the Impala.',
  keywords: ['Dapple Impala hunting', 'Aepyceros melampus', 'color variant', 'trophy hunting', 'MIWESU game farm'],
  openGraph: generateOpenGraph('Dapple Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Dapple Impala hunting at MIWESU Game Farm.', constructCanonicalUrl('dapple-impala'), `${baseUrl}/og-image.jpg`),
  twitter: generateTwitterCard('Dapple Impala Hunting Guide | Aepyceros melampus', 'Comprehensive guide to Dapple Impala hunting at MIWESU Game Farm.', `${baseUrl}/og-image.jpg`),
  alternates: { canonical: constructCanonicalUrl('dapple-impala') },
}

export default function DappleImpalaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

