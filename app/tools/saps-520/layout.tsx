import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'toolsSaps520')
const path = 'tools/saps-520'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' }, { name: 'Tools', url: constructCanonicalUrl('tools') }, { name: 'SAPS 520 Generator', url: constructCanonicalUrl(path) },
]

export const metadata: Metadata = {
  title: 'SAPS 520 Generator | Firearm import PDF', description:
    'Multi-step SAPS 520 helper for international hunters: applicant, travel & flight, up to 4 firearms. Zod-validated form, pdf-lib document download. Legal signing warning included.', keywords: ['SAPS 520', 'South Africa firearm permit', 'temporary import', 'hunting rifle', 'MIWESU'], openGraph: generateOpenGraph(
    'SAPS 520 Generator | MIWESU', 'Validated steps · PDF hand-off · do not sign until SAPS instructs.', constructCanonicalUrl(path), ogImage
  ), twitter: generateTwitterCard(
    'SAPS 520 Generator | MIWESU', 'Firearm import PDF generator for South Africa.', ogImage
  ), alternates: { canonical: constructCanonicalUrl(path) },
}

const webPage = generateWebPageSchema({
  name: 'SAPS 520 generator | MIWESU hunter logistics', description:
    'React Hook Form + Zod workflow; pdf-lib PDF. Applicant, travel, max four firearms. Not a government form, summary for official SAPS 520.', url: constructCanonicalUrl(path),
})

export default function Saps520Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={webPage} />
      {children}
    </>
  )
}
