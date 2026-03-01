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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center min-h-[56px] sm:min-h-[64px]">
        {/* Left: Menu Trigger - min 44px touch target */}
        <button
          onClick={toggleMenu}
          className="group flex items-center space-x-2 sm:space-x-3 text-white hover:text-gold-500 transition-colors focus:outline-none z-10 p-2 -m-2 min-h-[44px] min-w-[44px] justify-center sm:justify-start"
          aria-label="Open menu"
        >
          <div className="space-y-1.5">
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-5 sm:group-hover:w-6"></div>
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-6 sm:group-hover:w-8"></div>
            <div className="w-6 sm:w-8 h-px bg-current transition-all group-hover:w-4 sm:group-hover:w-4"></div>
          </div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-sans font-medium hidden md:block">
            Menu
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
        className={`menu-overlay fixed inset-0 bg-onyx z-50 flex flex-col py-16 px-6 sm:px-8 overflow-y-auto ${
          isMenuOpen ? 'open' : ''
        }`}
      >
        <div className="flex justify-between items-center max-w-4xl mx-auto w-full mb-12 sm:mb-16">
          <Link href="/" onClick={closeMenu} className="font-serif text-xl sm:text-2xl tracking-widest text-white hover:text-gold-500 transition-colors">
            MIWESU
          </Link>
          <button
            onClick={closeMenu}
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-white/70 hover:text-white p-2 -m-2 transition-colors touch-manipulation"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <nav className="flex-1 max-w-4xl mx-auto w-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">
            <div>
              <p className="text-gold-500/90 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium mb-4">Stay</p>
              <ul className="space-y-3">
                <li><Link href="/" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Home</Link></li>
                <li><Link href="/residences" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Residences</Link></li>
                <li><Link href="/activities" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Activities</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-gold-500/90 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium mb-4">Experience</p>
              <ul className="space-y-3">
                <li><Link href="/wildlife" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Wildlife</Link></li>
                <li><Link href="/conservation" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Conservation</Link></li>
                <li><Link href="/gallery" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-gold-500/90 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium mb-4">Practical</p>
              <ul className="space-y-3">
                <li><Link href="/rates" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Rates</Link></li>
                <li><Link href="/faq" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">FAQ</Link></li>
                <li><Link href="/wood" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Wood & Thermal</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-gold-500/90 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-medium mb-4">Reach us</p>
              <ul className="space-y-3">
                <li><Link href="/contact" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">Contact</Link></li>
                <li><Link href="/about" onClick={closeMenu} className="font-serif text-lg sm:text-xl text-white/90 hover:text-gold-500 transition-colors block py-2.5 -my-2.5 min-h-[44px] flex items-center touch-manipulation">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto w-full mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-sans">
            Thabazimbi · South Africa
          </p>
        </div>
      </div>
    </nav>
  )
}

