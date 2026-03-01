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
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/residences-second-house-main.jpg"
              alt="The Stone Villa at MIWESU Game Farm"
              fill
              sizes="100vw"
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4">
            <Link
              href="/residences"
              className="inline-flex items-center text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> All Residences
            </Link>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white leading-none">
              The Stone Villa
            </h1>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              {secondHouse.subtitle} · {lodgeSummary.secondHouse.bedrooms} bedrooms
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 reveal">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {lodgeSummary.secondHouse.description}
              </p>
              <ul className="text-gray-400 text-sm mt-6 space-y-1.5">
                <li>Kitchen · Living Area</li>
                <li>Master Bedroom · En-suite (shower)</li>
                <li>Second bedroom (2 bunk beds, sleeps 4) · En-suite (bathtub)</li>
                <li>Outdoor Braai</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-8 reveal">
              Facilities & Layout
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {secondHouse.facilities.map((facility) => (
                <div key={facility.id} className="relative h-[220px] sm:h-[260px] overflow-hidden border border-white/5 reveal">
                  <FacilityImage
                    facility={facility}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm sm:text-base drop-shadow-lg">
                    {facility.label}
                  </span>
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
