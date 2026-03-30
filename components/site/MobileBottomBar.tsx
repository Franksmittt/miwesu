'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MessageCircle, Menu, CalendarDays } from 'lucide-react'
import { WHATSAPP_HREF } from '@/lib/site-mega-nav'
import { useMobileSiteMenu } from '@/components/site/MobileSiteMenuProvider'

export function MobileBottomBar() {
  const pathname = usePathname()
  const { sheetOpen, openSheet, closeSheet } = useMobileSiteMenu()

  const isHome = pathname === '/'

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/15 bg-onyx/95 text-white backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      aria-label="Mobile primary"
    >
      <Link
        href="/"
        className={`flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 py-2 font-sans text-[10px] uppercase tracking-wider transition-colors duration-200 ease-in-out ${
          isHome ? 'text-gold-400' : 'text-white/75 hover:text-gold-400'
        }`}
      >
        <Home className="h-6 w-6 shrink-0" aria-hidden />
        <span>Home</span>
      </Link>
      <Link
        href="/book"
        className="flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 py-2 font-sans text-[10px] uppercase tracking-wider text-white/75 transition-colors duration-200 ease-in-out hover:text-gold-400"
      >
        <CalendarDays className="h-6 w-6 shrink-0" aria-hidden />
        <span>Enquire</span>
      </Link>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 py-2 font-sans text-[10px] uppercase tracking-wider text-white/75 transition-colors duration-200 ease-in-out hover:text-gold-400"
      >
        <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={() => (sheetOpen ? closeSheet() : openSheet())}
        className={`flex min-h-11 min-w-11 flex-1 flex-col items-center justify-center gap-1 py-2 font-sans text-[10px] uppercase tracking-wider transition-colors duration-200 ease-in-out ${
          sheetOpen ? 'text-gold-400' : 'text-white/75 hover:text-gold-400'
        }`}
        aria-expanded={sheetOpen}
        aria-controls="mobile-site-menu"
        aria-haspopup="dialog"
        aria-label={sheetOpen ? 'Close site menu' : 'Open site menu'}
      >
        <Menu className="h-6 w-6 shrink-0" aria-hidden />
        <span>Menu</span>
      </button>
    </nav>
  )
}
