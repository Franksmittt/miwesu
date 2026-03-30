import { Metadata } from 'next'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard, generateWebPageSchema } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const ogImage = marketingOgAbsolute(baseUrl, 'root')
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' }, { name: 'Jagd in Limpopo', url: constructCanonicalUrl('de') }, ]

export const metadata: Metadata = {
  title: 'Jagd in Limpopo | MIWESU GAME FARM', description:
    'Luxus-Jagd und Privatresidenzen in Limpopo, Südafrika: malariafreier Waterberg, Makoppa bei Thabazimbi. 14 Arten, ethische Erhaltungsjagd, Hunter\'s House und Rooibok Kraal. D1432, internationale Gäste willkommen.', keywords: ['Jagd Limpopo', 'Südafrika Jagd', 'Trophäenjagd', 'Waterberg', 'Malaria-frei', 'MIWESU GAME FARM'], openGraph: generateOpenGraph(
    'Jagd in Limpopo | MIWESU GAME FARM', 'Luxus-Jagdlodge in Limpopo. Trophäenjagd, Malaria-frei. Makoppa, Thabazimbi.', constructCanonicalUrl('de'), ogImage
  ), twitter: generateTwitterCard(
    'Jagd in Limpopo | MIWESU GAME FARM', 'Luxus-Jagdlodge in Limpopo. Trophäenjagd, Malaria-frei. Makoppa, Thabazimbi.', ogImage
  ), alternates: {
    canonical: constructCanonicalUrl('de'), languages: {
      'de': constructCanonicalUrl('de'), 'en-GB': baseUrl + '/', 'x-default': baseUrl + '/', }, }, }

const deWebPage = generateWebPageSchema({
  name: 'Jagd in Limpopo | MIWESU GAME FARM', description:
    'Deutschsprachige Einstiegsseite: Trophäenjagd, Luxusunterkunft und Conservation Harvest auf MIWESU in Thabazimbi, Waterberg, Südafrika.', url: constructCanonicalUrl('de'), inLanguage: 'de', })

export default function Delayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={deWebPage} />
      {children}
    </>
  )
}
