'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Brand & Description */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 rounded-full flex items-center justify-center text-onyx font-serif font-bold text-sm sm:text-base">
                M
              </div>
              <span className="font-serif text-xl sm:text-2xl text-white tracking-widest uppercase font-bold">
                MIWESU
              </span>
            </div>
            <p className="text-gray-500 max-w-md text-xs sm:text-sm leading-loose font-sans">
              MIWESU GAME FARM - An exclusive private residence collection in the Makoppa district, Thabazimbi. Located in the Arid Sweet Bushveld, dedicated to the preservation of the African bushveld through sustainable utilization and uncompromising luxury.
            </p>
          </div>

          {/* Navigation Links - Column 1 */}
          <div>
            <h4 className="text-white font-serif mb-4 text-sm uppercase tracking-wider">Residence</h4>
            <ul className="text-gray-500 text-sm space-y-2.5 font-sans">
              <li>
                <Link href="/" className="hover:text-gold-500 transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-500 transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/residences" className="hover:text-gold-500 transition-colors block">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-500 transition-colors block">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links - Column 2 */}
          <div>
            <h4 className="text-white font-serif mb-4 text-sm uppercase tracking-wider">Experiences</h4>
            <ul className="text-gray-500 text-sm space-y-2.5 font-sans">
              <li>
                <Link href="/activities" className="hover:text-gold-500 transition-colors block">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/wildlife" className="hover:text-gold-500 transition-colors block">
                  Wildlife
                </Link>
              </li>
              <li>
                <Link href="/conservation" className="hover:text-gold-500 transition-colors block">
                  Conservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-serif mb-4 text-sm uppercase tracking-wider">Concierge</h4>
            <ul className="text-gray-500 text-sm space-y-3 font-sans">
              <li>
                <Link href="/rates" className="hover:text-gold-500 transition-colors block">
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-500 transition-colors block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors block">
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs leading-relaxed">
                    D1432 Road, Makoppa District<br />
                    Thabazimbi, Limpopo 0380
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:guardians@miwesu.com"
                  className="hover:text-gold-500 transition-colors text-xs"
                >
                  guardians@miwesu.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+27730309679"
                  className="hover:text-gold-500 transition-colors text-xs"
                >
                  +27 73 030 9679
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-sans">
            &copy; {new Date().getFullYear()} MIWESU GAME FARM. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gold-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gold-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

