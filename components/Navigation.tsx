'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-6 ${
        isScrolled
          ? 'bg-onyx shadow-lg'
          : 'bg-gradient-to-b from-onyx/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Left: Menu Trigger */}
        <button
          onClick={toggleMenu}
          className="group flex items-center space-x-2 sm:space-x-3 text-white hover:text-gold-500 transition-colors focus:outline-none z-10"
        >
          <div className="space-y-1.5">
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-5 sm:group-hover:w-6"></div>
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-6 sm:group-hover:w-8"></div>
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-4 sm:group-hover:w-4"></div>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans font-medium hidden md:block">
            Concierge
          </span>
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Link href="/" className="block group">
            <span className="block font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest-xl text-white font-bold group-hover:text-gold-500 transition-colors duration-500">
              MIWESU
            </span>
            <span className="block text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-gold-500 uppercase font-sans mt-0.5 sm:mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Est. 1984 • Iron Eden
            </span>
          </Link>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                const modal = document.getElementById('vettingModal')
                if (modal) {
                  modal.classList.remove('hidden')
                }
              }
            }}
            className="hidden md:block px-6 py-2 border border-white/30 text-white text-[10px] uppercase tracking-[0.2em] hover:border-gold-500 hover:text-gold-500 transition-all duration-300 backdrop-blur-sm"
          >
            Private Access
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        id="mobile-menu"
        className={`menu-overlay fixed inset-0 bg-onyx z-50 flex flex-col justify-between items-center py-20 px-6 overflow-y-auto ${
          isMenuOpen ? 'open' : ''
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 z-10 text-white hover:text-gold-500 transition-colors p-2"
          aria-label="Close menu"
        >
          <X className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-2xl">
          <nav className="space-y-4 md:space-y-6 text-center w-full">
            <Link
              href="/"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              About
            </Link>
            <Link
              href="/residences"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Residences
            </Link>
            <Link
              href="/activities"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Activities
            </Link>
            <Link
              href="/wildlife"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Wildlife
            </Link>
            <Link
              href="/conservation"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Conservation
            </Link>
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Gallery
            </Link>
            <Link
              href="/rates"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Rates
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white hover:text-gold-500 transition-colors tracking-widest py-2"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 text-center pb-4">
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-sans">
            Thabazimbi • South Africa
          </p>
        </div>
      </div>
    </nav>
  )
}

