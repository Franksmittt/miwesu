import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'blog')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: "Hunter's Journal", url: constructCanonicalUrl('blog') },
]

export const metadata: Metadata = {
  title: "Hunter's Journal | MIWESU Game Farm",
  description:
    "Authority content for international hunters: trophy export, Sweetveld vs Sourveld, Limpopo vs Eastern Cape hunting, ethical ballistics. MIWESU GAME FARM, Makoppa district.",
  keywords: [
    'hunting blog',
    'trophy export',
    'Sweetveld',
    'Limpopo hunting',
    'Eastern Cape hunting',
    'ethical hunting',
    'MIWESU GAME FARM',
  ],
  openGraph: {
    ...generateOpenGraph(
      "Hunter's Journal | MIWESU Game Farm",
      'Authority content for international hunters. Trophy export, Sweetveld, Limpopo hunting.',
      constructCanonicalUrl('blog'),
      ogImage,
    ),
    locale: 'en_ZA',
  },
  twitter: generateTwitterCard(
    "Hunter's Journal | MIWESU Game Farm",
    'Authority content for international hunters.',
    ogImage,
  ),
  alternates: {
    canonical: constructCanonicalUrl('blog'),
  },
  robots: { index: true, follow: true },
}

const blogIndexWebPage = generateWebPageSchema({
  name: "Hunter's Journal | MIWESU authority content",
  description:
    'Ballistics, logistics, conservation harvest, Limpopo hunting, and trophy export articles for international hunters. Makoppa district, Thabazimbi.',
  url: constructCanonicalUrl('blog'),
})

export default function BlogIndexLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={blogIndexWebPage} />
      {children}
    </>
  )
}
