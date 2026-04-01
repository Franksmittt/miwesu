'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { mainLodgeHouse, lodgeSummary } from '@/lib/residences-data'
import { ResidenceFacilitiesGrid } from '@/components/residences/ResidenceFacilitiesGrid'

export default function HomesteadPage() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal')
      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top
        if (elementTop < window.innerHeight - 100) {
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
      <main id="main-content" className="min-h-screen bg-onyx">
        <section className="px-6 pb-0">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
              <Image
                src="/images/residences-homestead-main.jpg"
                alt="Hunter's House at MIWESU Game Farm"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-onyx-light border border-white/5 p-6 sm:p-10 -mt-0 relative z-10">
              <Link
                href="/residences"
                className="inline-flex items-center text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> All Residences
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2">
                Hunter&apos;s House
              </h1>
              <p className="text-gold-500 text-sm font-serif mb-6">
                Main lodge · {lodgeSummary.mainHouse.sleepers} sleepers · {lodgeSummary.mainHouse.bedrooms} bedrooms
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {lodgeSummary.mainHouse.description}
              </p>
              <ul className="text-gray-400 text-sm space-y-1.5 border-t border-white/10 pt-6">
                <li>Lower Room 1 & 2 (sleep 3 each) · Kitchen · Living Area</li>
                <li>Upper Room 1 & 2 (sleep 5 each)</li>
                <li>First patio · Boma and Braai · Lapa (pool table & darts)</li>
                <li>Braai under the trees · Trampoline & Jungle Gym · Swimming pool with slide</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-8 reveal">
              Facilities & Layout
            </h2>
            <ResidenceFacilitiesGrid facilities={mainLodgeHouse.facilities} />

            <div className="pt-8 border-t border-white/10 reveal">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
              >
                Inquire <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/residences"
                className="inline-flex items-center ml-4 text-gray-400 hover:text-white text-sm uppercase tracking-widest"
              >
                View all residences
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
