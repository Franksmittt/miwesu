import { SiteHeaderDesktop } from '@/components/site/SiteHeaderDesktop'
import { SiteHeaderMobileStrip } from '@/components/site/SiteHeaderMobileStrip'

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible text-white">
      <SiteHeaderDesktop />
      <SiteHeaderMobileStrip />
    </header>
  )
}
