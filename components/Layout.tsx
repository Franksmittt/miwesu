'use client'

import Navigation from './Navigation'
import VettingModal from './VettingModal'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <VettingModal />
      {children}
      <Footer />
    </>
  )
}

