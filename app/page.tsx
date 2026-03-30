import type { Metadata } from 'next'
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  HomePageFaqGraphSchema,
} from '@/components/StructuredData'
import { constructCanonicalUrl, generateOpenGraph, generateTwitterCard } from '@/lib/seo'
import { marketingOgAbsolute } from '@/lib/open-graph'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeTrustBanner } from '@/components/home/HomeTrustBanner'
import { HomeResidencesBento } from '@/components/home/HomeResidencesBento'
import { HomeConservationHarvest } from '@/components/home/HomeConservationHarvest'
import { HomeBushveldLeisure } from '@/components/home/HomeBushveldLeisure'
import { HomeFirewoodBlock } from '@/components/home/HomeFirewoodBlock'
import { HomeFAQ } from '@/components/home/HomeFAQ'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-faq-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.miwesu.co.za'
const homeOgImage = marketingOgAbsolute(baseUrl, 'root')
const homeTitle = 'IRON EDEN | The Makoppa Sanctuary & Game Reserve'
const homeDescription =
  'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, and malaria-free bushveld safaris. D1432 Makoppa District, Limpopo.'

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    ...generateOpenGraph(
      homeTitle,
      'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, and malaria-free bushveld safaris.',
      constructCanonicalUrl(''),
      homeOgImage
    ),
    locale: 'en_ZA',
  },
  twitter: generateTwitterCard(
    homeTitle,
    'A 2.5-billion-year-old private sanctuary of silence in Thabazimbi. Bespoke luxury living, ethical conservation harvesting, malaria-free safaris.',
    homeOgImage
  ),
  alternates: {
    canonical: constructCanonicalUrl(''),
    languages: {
      'en-GB': constructCanonicalUrl(''),
      de: constructCanonicalUrl('de'),
      es: constructCanonicalUrl('es'),
      'x-default': constructCanonicalUrl(''),
    },
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <HomePageFaqGraphSchema faqs={HOME_PAGE_FAQ_ITEMS} />
      <main id="main-content" className="min-w-0">
        <HomeHero />
        <HomeTrustBanner />
        <HomeResidencesBento />
        <HomeConservationHarvest />
        <HomeBushveldLeisure />
        <HomeFirewoodBlock />
        <HomeFAQ items={HOME_PAGE_FAQ_ITEMS} />
      </main>
    </>
  )
}
