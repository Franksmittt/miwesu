'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-onyx border-t border-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top: Brand + tagline */}
        <div className="pt-16 pb-12 border-b border-white/5">
          <Link href="/" className="inline-block group">
            <span className="block font-serif text-2xl sm:text-3xl tracking-[0.2em] text-white font-bold group-hover:text-gold-500 transition-colors">
              MIWESU
            </span>
            <span className="block text-[10px] sm:text-xs tracking-[0.3em] text-gold-500/90 uppercase font-sans mt-1">
              Est. 1984 · The Makoppa Sanctuary
            </span>
          </Link>
          <p className="mt-6 max-w-md text-gray-400 text-sm font-sans leading-relaxed">
            Private residence collection in the Arid Sweet Bushveld. Exclusive use, bespoke living, absolute privacy.
          </p>
        </div>

        {/* Links: two rows  - primary then secondary */}
        <div className="py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 font-sans">
              Stay
            </h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-sm">
              <li><Link href="/residences" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group py-2 -my-2 block"><span>Residences</span><ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="/residences/homestead" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">The Homestead</Link></li>
              <li><Link href="/residences/stone-villa" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">The Stone Villa</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 font-sans">
              Experience
            </h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-sm">
              <li><Link href="/activities" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Activities</Link></li>
              <li><Link href="/wildlife" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Wildlife</Link></li>
              <li><Link href="/conservation" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Conservation</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 font-sans">
              Concierge
            </h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-sm">
              <li><Link href="/rates" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Rates</Link></li>
              <li><Link href="/availability" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Availability</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors py-2 -my-2 block">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-bold mb-4 font-sans">
              Reach us
            </h4>
            <ul className="space-y-2 sm:space-y-3 font-sans text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500/80 mt-0.5 flex-shrink-0" />
                <span>D1432, Makoppa District<br />Thabazimbi, Limpopo</span>
              </li>
              <li>
                <a href="mailto:guardians@miwesu.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-gold-500/80 flex-shrink-0" />
                  guardians@miwesu.com
                </a>
              </li>
              <li>
                <a href="tel:+27730309679" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-gold-500/80 flex-shrink-0" />
                  +27 73 030 9679
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 border-t border-white/5">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-sans">
            © {new Date().getFullYear()} MIWESU GAME FARM
          </p>
          <Link
            href="/contact"
            className="text-[10px] uppercase tracking-widest font-bold text-gold-500 hover:text-gold-400 transition-colors font-sans"
          >
            Request a stay
          </Link>
        </div>
      </div>
    </footer>
  )
}
