'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export default function DePage() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active')
      })
    }
    window.addEventListener('scroll', reveal)
    reveal()
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
              alt="MIWESU Game Farm - Jagd in Limpopo, Makoppa Thabazimbi"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6 py-20">
            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              Limpopo · Malaria-frei
            </span>
            <h1 className="type-h1-hero mb-6">
              Jagd in <span className="text-gradient-gold">Limpopo</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10">
              Luxus-Privatresidenzen und Trophäenjagd im Makoppa-Bezirk, Thabazimbi. Waterberg, Arid Sweet Bushveld. 14 Arten -Kudu, Impala, Büffel und mehr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors"
              >
                Anfrage senden <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-semibold uppercase tracking-wider hover:bg-white hover:text-onyx transition-colors"
              >
                English
              </Link>
            </div>
            <p className="mt-8 text-white/60 text-sm flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> D1432, Makoppa District, Thabazimbi, Limpopo
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
