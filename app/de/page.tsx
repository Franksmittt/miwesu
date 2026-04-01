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
              Luxus-Privatresidenzen und Trophäenjagd im Makoppa-Bezirk, Thabazimbi. Waterberg, Arid Sweet Bushveld. 14+ Arten -Kudu, Impala, Büffel und mehr.
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

        <section className="py-16 md:py-24 bg-marble border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 font-sans text-onyx space-y-6 text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl text-onyx">Warum MIWESU im Waterberg?</h2>
            <p>
              MIWESU GAME FARM liegt im <strong>Makoppa-Bezirk</strong> bei Thabazimbi, im malariafreien{' '}
              <strong>Waterberg</strong> (Limpopo). Hier treffen Arid Sweet Bushveld, exklusive
              Privatresidenzen und eine verwaltete Population von{' '}
              <strong>14+ Huftierarten</strong> zusammen, von Großer Kudu und Kapbüffel bis Impala, Springbock und Lechwe.
            </p>
            <p>
              Internationale Jäger profitieren von klarer Kommunikation zu{' '}
              <Link href="/trophy-export" className="text-gold-600 hover:underline font-medium">
                Trophäen-Export
              </Link>, {' '}
              <Link href="/rates" className="text-gold-600 hover:underline font-medium">
                Preisen
              </Link>{' '}
              und{' '}
              <Link href="/wildlife" className="text-gold-600 hover:underline font-medium">
                Artenprofilen
              </Link>
              . Für Unterkunft und Verfügbarkeit:{' '}
              <Link href="/residences" className="text-gold-600 hover:underline font-medium">
                Residenzen
              </Link>{' '}
              und{' '}
              <Link href="/book" className="text-gold-600 hover:underline font-medium">
                Buchungsanfrage
              </Link>
              .
            </p>
            <p className="text-sm text-gray-600">
              Vollständige Informationen in Englisch auf der{' '}
              <Link href="/" className="text-gold-600 hover:underline">
                Startseite (English)
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  )
}
