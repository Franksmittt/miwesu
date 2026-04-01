import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'toolsBiltong')
const path = 'tools/biltong-calculator'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' }, { name: 'Tools', url: constructCanonicalUrl('tools') }, { name: 'Biltong Yield Calculator', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'Biltong Yield Calculator | 38% SA dry yield', description:
    'Interactive wet carcass to dry biltong calculator for all 14+ MIWESU species. Uses the standard 38% South African processing conversion. Hardware Noir tool for hunters.', keywords: ['biltong calculator', '38% yield', 'game meat yield', 'wet carcass', 'South Africa', 'MIWESU'], openGraph: generateOpenGraph(
    'Biltong Yield Calculator | MIWESU', '14+ species · wet kg in → dry biltong kg out · 38% SA standard.', constructCanonicalUrl(path), ogImage
  ), twitter: generateTwitterCard(
    'Biltong Yield Calculator | MIWESU', 'Estimate dry biltong from wet carcass, 38% conversion.', ogImage
  ), alternates: { canonical: constructCanonicalUrl(path) },
}

const webPage = generateWebPageSchema({
  name: 'Biltong yield calculator | MIWESU 14+ species', description:
    'Wet carcass to dry biltong estimator using the 38% South African industry standard. All managed MIWESU species.', url: constructCanonicalUrl(path),
})

export default function BiltongCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={webPage} />
      {children}
    </>
  )
}
