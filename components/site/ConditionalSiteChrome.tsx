'use client'

import { usePathname } from 'next/navigation'
import VettingModal from '@/components/VettingModal'
import { SiteHeader } from '@/components/site/SiteHeader'
import { MobileSiteMenuProvider } from '@/components/site/MobileSiteMenuProvider'
import { MobileBottomBar } from '@/components/site/MobileBottomBar'
import { SiteMarketingFooter } from '@/components/site/SiteMarketingFooter'

export function ConditionalSiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) {
    return <>{children}</>
  }

  return (
    <MobileSiteMenuProvider>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0 focus-visible:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx bg-onyx text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-transform"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <VettingModal />
      <div className="min-w-0 overflow-x-hidden pt-14 pb-24 lg:pb-0 lg:pt-16">{children}</div>
      <MobileBottomBar />
      <SiteMarketingFooter />
    </MobileSiteMenuProvider>
  )
}
