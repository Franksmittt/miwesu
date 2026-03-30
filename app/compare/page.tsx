import type { Metadata } from 'next'
import {
  constructCanonicalUrl,
  generateCompareWebPageSchema,
  generateOpenGraph,
  generateTwitterCard,
} from '@/lib/seo'
import { absoluteAsset } from '@/lib/open-graph'
import { resolveCompareSlugs } from '@/lib/species-comparison-data'
import ComparePageClient from './ComparePageClient'
import { CompareWebPageSchema } from '@/components/StructuredData'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'

function firstParam(v: string | string[] | undefined): string | undefined {
  if (v === undefined) return undefined
  return Array.isArray(v) ? v[0] : v
}

type SearchParams = Promise<{ a?: string | string[]; b?: string | string[] }>

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const sp = await searchParams
  const { slugA, slugB, speciesA, speciesB } = resolveCompareSlugs(firstParam(sp.a), firstParam(sp.b))
  const title = `${speciesA.name} vs ${speciesB.name} | Species comparison`
  const description = `Compare ${speciesA.name} (${speciesA.scientific}) and ${speciesB.name} (${speciesB.scientific}): habitat, caliber, Rowland Ward minimums, diet, and trophy notes. Plains game at MIWESU, Makoppa district, Limpopo.`
  const canonical = `${constructCanonicalUrl('compare')}?a=${encodeURIComponent(slugA)}&b=${encodeURIComponent(slugB)}`
  const ogImage = absoluteAsset(baseUrl, speciesA.image)

  return {
    title,
    description,
    keywords: [
      `${speciesA.name} vs ${speciesB.name}`,
      speciesA.scientific,
      speciesB.scientific,
      'compare plains game',
      'trophy comparison South Africa',
      'Limpopo hunting',
      'Makoppa',
      'MIWESU',
      'Rowland Ward',
    ],
    openGraph: {
      ...generateOpenGraph(title, description, canonical, ogImage),
      locale: 'en_ZA',
    },
    twitter: generateTwitterCard(title, description, ogImage),
    alternates: { canonical },
    robots: { index: true, follow: true },
  }
}

export default async function ComparePage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams
  const { slugA, slugB, speciesA, speciesB } = resolveCompareSlugs(firstParam(sp.a), firstParam(sp.b))
  const pageUrl = `${constructCanonicalUrl('compare')}?a=${encodeURIComponent(slugA)}&b=${encodeURIComponent(slugB)}`
  const schema = generateCompareWebPageSchema({ pageUrl, speciesA, speciesB })

  return (
    <>
      <CompareWebPageSchema schema={schema} />
      <ComparePageClient initialSlugA={slugA} initialSlugB={slugB} />
    </>
  )
}
