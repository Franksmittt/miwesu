'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Calendar, ArrowRight, Home, Users } from 'lucide-react'

export default function AvailabilityPage() {
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
              src="/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg"
              alt="MIWESU Game Farm residences availability - Hunter's House and Rooibok Kraal Makoppa Thabazimbi"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              Plan Your Visit
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
              <span className="text-gradient-gold">Availability</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Check dates and request your stay. Our concierge will confirm availability and guide you through vetting.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-32 bg-marble">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal bg-white border border-gray-100 shadow-sm p-8 md:p-12 text-center mb-12">
              <Calendar className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl text-onyx mb-4">
                Live Availability View
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are implementing a direct availability view so you can see open dates for Hunter&apos;s House and Rooibok Kraal at a glance. In the meantime, our concierge will respond quickly with available dates and next steps. All stays are subject to our vetting process.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-onyx text-white font-sans font-semibold uppercase tracking-wider hover:bg-gold-500 transition-colors"
              >
                Request Availability & Booking <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="reveal grid sm:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100 bg-white">
                <Home className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-2">Hunter&apos;s House</h3>
                <p className="text-gray-600 text-sm">10-sleeper. Exclusive use. Ideal for groups and families.</p>
              </div>
              <div className="p-6 border border-gray-100 bg-white">
                <Users className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-2">Rooibok Kraal</h3>
                <p className="text-gray-600 text-sm">4-sleeper. Exclusive use. Intimate bushveld escape.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
