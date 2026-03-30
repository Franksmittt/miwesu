'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { MOBILE_SITEMAP_SECTIONS } from '@/lib/site-mega-nav'

type MobileSiteMenuContextValue = {
  sheetOpen: boolean
  openSheet: () => void
  closeSheet: () => void
}

const MobileSiteMenuContext = createContext<MobileSiteMenuContextValue | null>(null)

export function useMobileSiteMenu() {
  const ctx = useContext(MobileSiteMenuContext)
  if (!ctx) {
    throw new Error('useMobileSiteMenu must be used within MobileSiteMenuProvider')
  }
  return ctx
}

function MobileSiteMenuSheet({ sheetOpen, closeSheet }: { sheetOpen: boolean; closeSheet: () => void }) {
  const openVetting = () => {
    closeSheet()
    document.getElementById('vettingModal')?.classList.remove('hidden')
  }

  return (
    <div
      className={`fixed inset-0 z-[55] lg:hidden ${sheetOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!sheetOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ease-in-out ${
          sheetOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeSheet}
        aria-label="Close menu"
      />
      <div
        id="mobile-site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute inset-x-0 bottom-0 z-[60] max-h-[88dvh] overflow-hidden rounded-t-2xl border border-white/10 bg-onyx/95 text-white shadow-noir-lg backdrop-blur-xl transition-transform duration-200 ease-in-out ${
          sheetOpen ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <span className="font-serif text-lg tracking-widest">MIWESU</span>
          <button
            type="button"
            onClick={closeSheet}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/15 text-white/90 transition-colors hover:border-gold-500/40 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>
        <div className="max-h-[calc(88dvh-4.5rem)] overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-lg space-y-8">
            {MOBILE_SITEMAP_SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="type-overline text-gold-500/90">{section.title}</p>
                <ul className="mt-4 space-y-1">
                  {section.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        onClick={closeSheet}
                        className="flex min-h-11 items-center rounded-lg px-2 py-2 font-sans text-sm text-white transition-colors hover:bg-white/5 hover:text-gold-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={openVetting}
                className="flex min-h-11 w-full items-center justify-center rounded-xl border border-white/20 px-4 font-sans text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-gold-500/40 hover:text-gold-400"
              >
                Private access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileSiteMenuProvider({ children }: { children: ReactNode }) {
  const [sheetOpen, setSheetOpen] = useState(false)

  const openSheet = useCallback(() => setSheetOpen(true), [])
  const closeSheet = useCallback(() => setSheetOpen(false), [])

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [sheetOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSheet()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeSheet])

  const value = useMemo(
    () => ({ sheetOpen, openSheet, closeSheet }),
    [sheetOpen, openSheet, closeSheet]
  )

  return (
    <MobileSiteMenuContext.Provider value={value}>
      {children}
      <MobileSiteMenuSheet sheetOpen={sheetOpen} closeSheet={closeSheet} />
    </MobileSiteMenuContext.Provider>
  )
}
