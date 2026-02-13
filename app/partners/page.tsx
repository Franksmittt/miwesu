'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Handshake, Package, Palette, Shield, ArrowRight } from 'lucide-react'

export default function PartnersPage() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal')
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 100
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active')
        }
      }
    }
    window.addEventListener('scroll', reveal)
    reveal()
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/activities-hero.jpg"
              alt="MIWESU Game Farm experiences - Makoppa district Thabazimbi Limpopo"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              The Full Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
              Trusted <span className="text-gradient-gold">Partners</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Taxidermy, dipping & shipping, and travel insurance—so your hunt is a complete logistics solution.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-4xl mx-auto px-6 text-center reveal mb-16">
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              MIWESU GAME FARM works with a select group of partners to ensure your trophy and your trip are handled from the field in the Makoppa district to your home. Contact our concierge for current recommendations and introductions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 space-y-16">
            <div className="reveal grid md:grid-cols-[auto_1fr] gap-8 items-start p-8 bg-white border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-gold-600" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-onyx mb-3">Dipping & Shipping</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our preferred dip-and-ship agents handle EU and USDA-compliant treatment, CITES permits, and international freight so your Limpopo trophy reaches your taxidermist or port of entry without hassle. They specialize in hunting trophies and know the requirements for the USA, Europe, and other destinations.
                </p>
                <Link href="/trophy-export" className="text-gold-600 font-sans font-medium hover:underline inline-flex items-center gap-1">
                  See Trophy Export guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="reveal grid md:grid-cols-[auto_1fr] gap-8 items-start p-8 bg-white border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Palette className="w-7 h-7 text-gold-600" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-onyx mb-3">Taxidermy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We can refer you to reputable taxidermists who work with African game and understand the quality of capes and skulls from our Sweetveld herds. Whether you prefer a local studio or an international specialist, our concierge can point you in the right direction.
                </p>
                <Link href="/contact" className="text-gold-600 font-sans font-medium hover:underline inline-flex items-center gap-1">
                  Request recommendations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="reveal grid md:grid-cols-[auto_1fr] gap-8 items-start p-8 bg-white border border-gray-100 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-gold-600" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-onyx mb-3">Travel Insurance</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  International hunters and families often ask about travel and medical coverage for South Africa. We recommend speaking with insurers who understand safari and hunting travel, including coverage for activities and emergency evacuation if needed. Our concierge can suggest providers used by our guests.
                </p>
                <Link href="/contact" className="text-gold-600 font-sans font-medium hover:underline inline-flex items-center gap-1">
                  Ask about insurance options <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-onyx text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <Handshake className="w-14 h-14 text-gold-400 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Not Just a Farm—A Full Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              From the moment you land in Johannesburg to the day your trophy hangs at home, we aim to connect you with trusted partners who share our standards. Contact our concierge to start planning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors"
            >
              Contact Concierge <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
