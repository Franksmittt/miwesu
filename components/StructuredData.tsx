import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateSpeciesTaxonSchema,
  generateWebSiteSchema,
  generateProductSchema,
  generateTouristTripSchema,
  generateFAQPageSchema,
  generateHomePageFaqJsonLd,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateCompareWebPageSchema,
  generateWoodProductsGraph,
  generateGalleryItemListSchema,
  generateWebPageSchema,
  generateSpeciesPowerPageJsonLd,
  type SpeciesSchemaParams,
} from '@/lib/seo'

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateOrganizationSchema()),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateLocalBusinessSchema()),
      }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateWebSiteSchema()),
      }}
    />
  )
}

export function SpeciesTaxonSchema({
  params,
  pageUrl,
  primaryImage,
}: {
  params: SpeciesSchemaParams
  pageUrl: string
  primaryImage?: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          generateSpeciesTaxonSchema(params, pageUrl, primaryImage ? { primaryImage } : undefined)
        ),
      }}
    />
  )
}

export function SpeciesPowerPageSchema({
  graph,
}: {
  graph: ReturnType<typeof generateSpeciesPowerPageJsonLd>
}) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export function ProductSchema({
  schema,
}: {
  schema: ReturnType<typeof generateProductSchema>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function TouristTripSchema({
  schema,
}: {
  schema: ReturnType<typeof generateTouristTripSchema>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateFAQPageSchema(faqs)),
      }}
    />
  )
}

/** Home only: WebPage + nested FAQPage @graph */
export function HomePageFaqGraphSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateHomePageFaqJsonLd(faqs)),
      }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema(items)),
      }}
    />
  )
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          generateArticleSchema({
            headline,
            description,
            url,
            datePublished,
            dateModified,
            image,
          })
        ),
      }}
    />
  )
}

export function CompareWebPageSchema({
  schema,
}: {
  schema: ReturnType<typeof generateCompareWebPageSchema>
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function WoodProductsGraphSchema({
  schema,
}: {
  schema: ReturnType<typeof generateWoodProductsGraph>
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function GalleryItemListSchema({
  schema,
}: {
  schema: ReturnType<typeof generateGalleryItemListSchema>
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function WebPageSchema({
  schema,
}: {
  schema: ReturnType<typeof generateWebPageSchema>
}) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

