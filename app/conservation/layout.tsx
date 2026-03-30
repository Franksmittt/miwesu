import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'conservation')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' }, { name: 'Conservation', url: constructCanonicalUrl('conservation') }, ]

export const metadata: Metadata = {
  title: 'Conservation & Guardian\'s Pledge | Ethical Stewardship', description:
    'MIWESU conservation harvest: ecological census, fair chase, and sustainable use on private land in the Makoppa district, Thabazimbi. Guardian\'s Pledge. No fabricated impact dashboards.', keywords: ['conservation', 'Guardian\'s Pledge', 'ethical hunting', 'fair chase', 'PHASA', 'anti-poaching', 'ecological census', 'sustainable use', 'Limpopo', 'Makoppa district', 'Thabazimbi', 'MIWESU GAME FARM'], openGraph: generateOpenGraph(
    'Conservation & Guardian\'s Pledge | Ethical Stewardship', 'MIWESU conservation harvest, habitat stewardship, and ethical plains-game use, Makoppa district, Thabazimbi.', constructCanonicalUrl('conservation'), ogImage
  ), twitter: generateTwitterCard(
    'Conservation & Guardian\'s Pledge | Ethical Stewardship', 'Learn about MIWESU GAME FARM\'s conservation programs and impact in the Makoppa district.', ogImage
  ), alternates: {
    canonical: constructCanonicalUrl('conservation'), }, }

const conservationWebPage = generateWebPageSchema({
  name: 'Conservation & Guardian\'s Pledge | MIWESU GAME FARM', description:
    'Ecological census, fair chase, reserve security, and sustainable use in the Makoppa district, Thabazimbi, Limpopo Waterberg.', url: constructCanonicalUrl('conservation'), })

export default function ConservationLayout({
  children, }: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={conservationWebPage} />
      {children}
    </>
  )
}

