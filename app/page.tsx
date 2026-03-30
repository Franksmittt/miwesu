import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
  HomePageFaqGraphSchema,
} from '@/components/StructuredData'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeTrustBanner } from '@/components/home/HomeTrustBanner'
import { HomeResidencesBento } from '@/components/home/HomeResidencesBento'
import { HomeConservationHarvest } from '@/components/home/HomeConservationHarvest'
import { HomeBushveldLeisure } from '@/components/home/HomeBushveldLeisure'
import { HomeFirewoodBlock } from '@/components/home/HomeFirewoodBlock'
import { HomeFAQ } from '@/components/home/HomeFAQ'
import { HOME_PAGE_FAQ_ITEMS } from '@/lib/home-faq-data'

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
