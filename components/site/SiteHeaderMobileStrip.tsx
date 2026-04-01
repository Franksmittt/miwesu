'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useMobileSiteMenu } from '@/components/site/MobileSiteMenuProvider'

export function SiteHeaderMobileStrip() {
  const { sheetOpen, openSheet, closeSheet } = useMobileSiteMenu()

  return (
    <div className="relative grid h-14 grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2 border-b border-white/15 bg-onyx/95 px-4 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:px-6 lg:hidden">
      <div className="flex min-w-0 justify-start">
        <button
          type="button"
          onClick={() => (sheetOpen ? closeSheet() : openSheet())}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/5 hover:text-gold-400"
          aria-expanded={sheetOpen}
          aria-controls="mobile-site-menu"
          aria-haspopup="dialog"
          aria-label={sheetOpen ? 'Close menu' : 'Open menu'}
        >
          <Menu className="h-7 w-7 shrink-0" strokeWidth={1.75} aria-hidden />
        </button>
      </div>
      <Link href="/" className="min-w-0 justify-self-center text-center text-white">
        <span className="block font-serif text-lg font-bold tracking-widest">MIWESU</span>
      </Link>
      <div className="min-w-0" aria-hidden />
    </div>
  )
}
