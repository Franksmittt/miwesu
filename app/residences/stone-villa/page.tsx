'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { secondHouse, lodgeSummary, type ResidenceFacility } from '@/lib/residences-data'

function FacilityImage({
  facility,
  sizes,
  className,
}: {
  facility: ResidenceFacility
  sizes: string
  className?: string
}) {
  const [src, setSrc] = useState(facility.imagePath)
  useEffect(() => {
    setSrc(facility.imagePath)
  }, [facility.imagePath])
  return (
    <Image
      src={src}
      alt={facility.label}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        if (facility.fallbackImagePath && src === facility.imagePath) {
          setSrc(facility.fallbackImagePath)
        }
      }}
    />
  )
}

export default function StoneVillaPage() {
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
                src="/images/residences-second-house-main.jpg"
                alt="The Stone Villa at MIWESU Game Farm"
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
                The Stone Villa
              </h1>
              <p className="text-gold-500 text-sm font-serif mb-6">
                {secondHouse.subtitle} · {lodgeSummary.secondHouse.bedrooms} bedrooms
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {lodgeSummary.secondHouse.description}
              </p>
              <ul className="text-gray-400 text-sm space-y-1.5 border-t border-white/10 pt-6">
                <li>Kitchen · Living Area</li>
                <li>Master Bedroom · En-suite (shower)</li>
                <li>Second bedroom (2 bunk beds, sleeps 4) · En-suite (bathtub)</li>
                <li>Outdoor Braai</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-8 reveal">
              Facilities & Layout
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {secondHouse.facilities.map((facility) => (
                <div key={facility.id} className="bg-onyx-light border border-white/5 overflow-hidden reveal group">
                  <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                    <FacilityImage
                      facility={facility}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 border-t border-white/5">
                    <span className="font-serif text-white text-sm sm:text-base">
                      {facility.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

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
