import Link from 'next/link'

const nav = [
  { href: '/residences', label: 'Residences' },
  { href: '/wildlife', label: 'Hunting (14 species)' },
  { href: '/activities', label: 'Activities' },
  { href: '/wood', label: 'Firewood' },
  { href: '/contact', label: 'Contact' },
] as const

export function SiteMarketingFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-onyx text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl tracking-widest text-white">MIWESU</p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.25em] text-gold-500/90">
              Iron Eden · Makoppa, Thabazimbi
            </p>
            <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-gray-400">
              Private, exclusive-use luxury game farm and hunting sanctuary in malaria-free Waterberg bushveld.
            </p>
          </div>
          <nav
            className="flex flex-col gap-4 lg:col-span-4"
            aria-label="Footer"
          >
            <p className="type-overline text-gold-400">Explore</p>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-white/80 transition-colors duration-200 ease-in-out hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="type-overline text-gold-400">Contact</p>
            <address className="mt-4 not-italic">
              <p className="font-sans text-sm leading-relaxed text-gray-400">
                D1432 Road, Makoppa District, Thabazimbi
              </p>
              <p className="mt-4 space-y-2 font-sans text-sm">
                <a
                  href="mailto:info@miwesu.co.za"
                  className="block text-white/90 transition-colors duration-200 hover:text-gold-400"
                >
                  info@miwesu.co.za
                </a>
                <a
                  href="tel:+27730309679"
                  className="block text-white/90 transition-colors duration-200 hover:text-gold-400"
                >
                  +27 73 030 9679
                </a>
                <a
                  href="https://wa.me/27730309679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold-500/90 transition-colors duration-200 hover:text-gold-400"
                >
                  WhatsApp
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center font-sans text-xs uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} MIWESU Game Farm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
