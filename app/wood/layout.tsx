import { Metadata } from 'next'
import {
  constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWoodProductsGraph, generateWebPageSchema, } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { WOOD_PRODUCTS } from '@/lib/wood-products'
import { BreadcrumbSchema, WoodProductsGraphSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'wood')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' }, { name: 'Wood & Thermal', url: constructCanonicalUrl('wood') }, ]
const woodProductsGraph = generateWoodProductsGraph(WOOD_PRODUCTS)
const woodWebPage = generateWebPageSchema({
  name: 'Thermal hardware | MIWESU engineered heat, Sekelbos, Geelhak, Braai Mix', description:
    'Kiln-verified hardwood fuel for closed-combustion systems and commercial ovens. Sekelbos, Geelhak, Braai Mix, ZAR per bag, MOQs, WhatsApp concierge checkout. Makoppa · Gauteng delivery.', url: constructCanonicalUrl('wood'), })

export const metadata: Metadata = {
  title: 'Thermal Hardware | Engineered Heat, MIWESU Wood', description:
    'MIWESU engineered thermal fuel: Geelhak, Braai Mix, Sekelbos. Kiln moisture gate under 12%, ZAR pricing with MOQs, WhatsApp order hand-off. Closed-combustion and pizza-oven grade. Gauteng.', keywords: [
    'Sekelbos', 'Geelhak', 'braai wood', 'kiln dried firewood', 'thermal wood', 'closed combustion fireplace wood', 'Miwesu wood', 'Gauteng', 'Makoppa', 'MIWESU GAME FARM', ], openGraph: generateOpenGraph(
    'Thermal Hardware | Engineered Heat, MIWESU Wood', 'Kiln-verified hardwood SKUs. ZAR pricing, MOQs, WhatsApp concierge, Gauteng delivery.', constructCanonicalUrl('wood'), ogImage
  ), twitter: generateTwitterCard(
    'Thermal Hardware | Engineered Heat, MIWESU Wood', 'Kiln-verified thermal fuel. ZAR offers with MOQs. WhatsApp checkout.', ogImage
  ), alternates: {
    canonical: constructCanonicalUrl('wood'), }, }

export default function WoodLayout({
  children, }: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={woodWebPage} />
      <WoodProductsGraphSchema schema={woodProductsGraph} />
      {children}
    </>
  )
}
