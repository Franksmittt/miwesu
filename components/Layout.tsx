'use client'

import Navigation from './Navigation'
import VettingModal from './VettingModal'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 bg-onyx text-white px-4 py-2 text-sm font-bold uppercase tracking-wider transition-transform"
      >
        Skip to main content
      </a>
      <Navigation />
      <VettingModal />
      {children}
      <Footer />
    </>
  )
}

