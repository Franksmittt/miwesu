import Link from 'next/link'
import { FooterFacebookMarquee } from '@/components/site/FooterFacebookMarquee'
import { WHATSAPP_HREF } from '@/lib/site-mega-nav'

const linkGroups = [
  {
    title: 'Stay',
    links: [
      { href: '/residences', label: 'Residences' },
      { href: '/residences/homestead', label: "Hunter's House" },
      { href: '/residences/stone-villa', label: 'Rooibok Kraal' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  {
    title: 'The hunt',
    links: [
      { href: '/wildlife', label: 'Wildlife & species' },
      { href: '/compare', label: 'Compare species' },
      { href: '/conservation', label: 'Conservation' },
      { href: '/trophy-export', label: 'Trophy export' },
    ],
  },
  {
    title: 'Experience',
    links: [
      { href: '/activities', label: 'Activities' },
      { href: '/blog', label: "Hunter's Journal" },
      { href: '/about', label: 'About' },
      { href: '/partners', label: 'Partners' },
    ],
  },
  {
    title: 'Plan & visit',
    links: [
      { href: '/book', label: 'Book / enquire' },
      { href: '/availability', label: 'Availability' },
      { href: '/rates', label: 'Rates' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Tools & thermal',
    links: [
      { href: '/tools', label: 'Tools hub' },
      { href: '/tools/biltong-calculator', label: 'Biltong calculator' },
      { href: '/tools/saps-520', label: 'SAPS 520' },
      { href: '/wood', label: 'Firewood' },
    ],
  },
] as const

export function SiteMarketingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-onyx text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Brand + Facebook strip */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-12 md:grid-cols-6 md:gap-10 md:py-14 lg:py-16">
          <div className="flex flex-col justify-center md:col-span-2">
            <Link href="/" className="group inline-block w-fit">
              <p className="font-serif text-2xl tracking-[0.2em] text-white transition-colors group-hover:text-gold-400">
                MIWESU
              </p>
              <p className="mt-2 font-sans text-xs uppercase tracking-[0.25em] text-gold-500/90">
                Est. 1984 · Iron Eden · Makoppa
              </p>
            </Link>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-gray-400">
              Private, exclusive-use luxury game farm and ethical conservation hunting in malaria-free Waterberg bushveld —
              Thabazimbi, Limpopo.
            </p>
            <Link
              href="/book"
              className="type-overline mt-8 inline-flex w-fit items-center text-gold-500 transition-colors hover:text-gold-400"
            >
              Request a stay →
            </Link>
          </div>
          <div className="md:col-span-4">
            <p className="type-overline mb-3 text-gold-400">From the farm · Facebook</p>
            <FooterFacebookMarquee />
          </div>
        </div>

        {/* Sitemap columns */}
        <nav
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8 lg:py-14"
          aria-label="Footer"
        >
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="type-overline text-gold-400">{group.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-sans text-sm text-white/80 transition-colors duration-200 hover:text-gold-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="type-overline text-gold-400">Reach us</p>
            <address className="mt-4 not-italic">
              <p className="font-sans text-sm leading-relaxed text-gray-400">
                D1432 Road, Makoppa District
                <br />
                Thabazimbi, Limpopo, South Africa
              </p>
              <p className="mt-4 space-y-2 font-sans text-sm">
                <a
                  href="mailto:info@miwesu.co.za"
                  className="block text-white/90 transition-colors hover:text-gold-400"
                >
                  info@miwesu.co.za
                </a>
                <a href="tel:+27730309679" className="block text-white/90 transition-colors hover:text-gold-400">
                  +27 73 030 9679
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold-500/90 transition-colors hover:text-gold-400"
                >
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-center font-sans text-xs uppercase tracking-widest text-white/40 sm:text-left">
            © {year} MIWESU Game Farm. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/de" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-500">
              DE
            </Link>
            <Link href="/es" className="text-xs uppercase tracking-widest text-white/50 hover:text-gold-500">
              ES
            </Link>
            <Link href="/contact" className="text-xs uppercase tracking-widest text-gold-500 hover:text-gold-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
