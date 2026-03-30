import { BreadcrumbSchema, WebPageSchema } from '@/components/StructuredData'
import WildlifeIndexPage from '@/components/wildlife/WildlifeIndexPage'
import { constructCanonicalUrl, generateWebPageSchema } from '@/lib/seo'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'

const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Wildlife & Species', url: constructCanonicalUrl('wildlife') },
]

const wildlifeWebPage = generateWebPageSchema({
  name: 'Wildlife & species | MIWESU plains game portfolio',
  description:
    'Fourteen managed species for ethical conservation harvest in the Makoppa Dome, Arid Sweet Bushveld, Thabazimbi, Limpopo.',
  url: constructCanonicalUrl('wildlife'),
})

export default function WildlifeListingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema schema={wildlifeWebPage} />
      <WildlifeIndexPage />
    </>
  )
}
