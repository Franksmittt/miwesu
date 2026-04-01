'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MEGA_NAV_CATEGORIES } from '@/lib/site-mega-nav'

/**
 * Desktop chrome: near-opaque onyx + blur so legibility holds over bright heroes (body is marble/#111).
 * Layout: brand left · primary nav centered · utilities + CTA right.
 */
export function SiteHeaderDesktop() {
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
    setActiveMega(id)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveMega(null), 200)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  return (
    <div className="hidden border-b border-white/15 bg-onyx/95 text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl lg:block">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center gap-4 sm:gap-6">
          {/* Brand, always readable; does not compete with nav cluster */}
          <Link
            href="/"
            className="shrink-0 py-2 text-left transition-colors hover:text-gold-400"
            aria-label="MIWESU home"
          >
            <span className="block font-serif text-lg font-bold tracking-[0.2em] text-white sm:text-xl">
              MIWESU
            </span>
          </Link>

          {/* Primary, centered mega triggers */}
          <nav
            className="scrollbar-none flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto sm:gap-2"
            aria-label="Primary"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MEGA_NAV_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="relative shrink-0"
                onMouseEnter={() => openMega(cat.id)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={cat.href}
                  className={`inline-flex items-center whitespace-nowrap rounded-md px-2 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 ease-in-out sm:px-3 sm:text-[11px] sm:tracking-[0.16em] ${
                    activeMega === cat.id
                      ? 'text-gold-400'
                      : 'hover:bg-white/5 hover:text-gold-400'
                  }`}
                >
                  {cat.label}
                </Link>

                <div
                  className={`absolute left-1/2 top-full z-40 w-screen max-w-[100vw] -translate-x-1/2 pt-0 transition-opacity duration-200 ease-in-out ${
                    activeMega === cat.id
                      ? 'pointer-events-auto visible opacity-100'
                      : 'pointer-events-none invisible opacity-0'
                  }`}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  {/* Solid bridge so hero blur does not show between bar and panel */}
                  <div className="bg-onyx/95 px-4 pb-8 pt-2 sm:px-6 lg:px-8">
                    <div className="liquid-glass-dark shadow-noir-lg mx-auto max-w-7xl rounded-b-2xl border border-white/12 border-t-0 px-5 py-8 text-white sm:px-8">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7">
                          {cat.columns.map((col) => (
                            <div key={col.heading}>
                              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                                {col.heading}
                              </p>
                              <ul className="mt-4 space-y-1">
                                {col.links.map((link) => (
                                  <li key={link.href + link.label}>
                                    <Link
                                      href={link.href}
                                      className="group block rounded-lg px-2 py-2 font-sans text-sm leading-snug text-white transition-colors duration-200 ease-in-out hover:bg-white/5 hover:text-gold-400"
                                    >
                                      <span className="block">{link.label}</span>
                                      {link.description ? (
                                        <span className="mt-1 block text-xs text-white/50 group-hover:text-white/65">
                                          {link.description}
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="relative min-h-[200px] lg:col-span-5">
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 lg:aspect-auto lg:h-full lg:min-h-[240px]">
                            <Image
                              src={cat.imageSrc}
                              alt={cat.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 38vw"
                            />
                            <div
                              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/25 to-transparent"
                              aria-hidden
                            />
                            <p className="absolute bottom-4 left-4 right-4 font-sans text-[10px] uppercase tracking-[0.25em] text-gold-400">
                              {cat.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/gallery"
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-md px-2 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 ease-in-out sm:px-3 sm:text-[11px] sm:tracking-[0.16em] hover:bg-white/5 hover:text-gold-400"
            >
              Gallery
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link
              href="/book"
              className="inline-flex min-h-10 items-center border border-gold-500/60 bg-gold-500/15 px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-300 transition-all duration-200 ease-in-out hover:border-gold-400 hover:bg-gold-500/25 hover:text-gold-200 sm:px-4 sm:tracking-[0.18em]"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
