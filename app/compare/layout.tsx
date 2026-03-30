import { constructCanonicalUrl } from '@/lib/seo'
import { BreadcrumbSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const path = 'compare'
const breadcrumbItems = [
  { name: 'Home', url: baseUrl + '/' },
  { name: 'Compare Species', url: constructCanonicalUrl(path) },
]

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  )
}
