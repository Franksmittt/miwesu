'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import {
  ChefHat,
  Flame,
  Shield,
  ArrowRight,
  Car,
  MapPin,
  Layout as LayoutIcon,
  TreePine,
  Activity,
  Waves,
} from 'lucide-react'
import {
  mainLodgeHouse,
  secondHouse,
  lodgeSummary,
  type ResidenceFacility,
} from '@/lib/residences-data'

/** Renders Image with fallback if primary src fails (e.g. file not yet copied) */
function FacilityImage({
  facility,
  sizes,
  className,
  priority,
}: {
  facility: ResidenceFacility
  sizes: string
  className?: string
  priority?: boolean
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
      priority={priority}
      onError={() => {
        if (facility.fallbackImagePath && src === facility.imagePath) {
          setSrc(facility.fallbackImagePath)
        }
      }}
    />
  )
}

export default function ResidencesPage() {
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
        {/* Hero: image only, then text box below */}
        <section className="bg-onyx">
          <div className="relative h-[50vh] sm:h-[60vh] min-h-[300px] overflow-hidden">
            <Image
              src="/images/residences-hero.jpg"
              alt="Private residences at MIWESU Game Farm - The Homestead and The Stone Villa luxury accommodation Makoppa"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-onyx-light border border-white/5 p-6 sm:p-10 -mt-0 relative z-10">
              <span className="text-gold-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold block mb-2">
                The Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Private <span className="text-gradient-gold">Residences</span>
              </h1>
              <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-2xl">
                Exclusive use. The Homestead (16 sleepers) and The Stone Villa (6 sleepers). Bespoke living, daily housekeeping, absolute privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Residences Grid */}
        <section className="py-16 sm:py-24 lg:py-32 bg-onyx text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 sm:mb-20 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
                Exclusive Use
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-white mt-6">
                Your Private Sanctuary
              </h2>
              <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
            </div>

            {/* Lodge at a glance  - from data */}
            <div className="mb-16 reveal">
              <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto text-center">
                <span className="text-white font-medium">{mainLodgeHouse.title}:</span> {lodgeSummary.mainHouse.bedrooms} bedrooms ({lodgeSummary.mainHouse.lowerRooms} lower, {lodgeSummary.mainHouse.upperRooms} upper), {lodgeSummary.mainHouse.sleepers} sleepers · Kitchen, living, first patio, boma & braai, lapa, pool, trampoline & jungle gym, braai under trees.
                <br />
                <span className="text-white font-medium">The Stone Villa:</span> {lodgeSummary.secondHouse.bedrooms} bedrooms, {lodgeSummary.secondHouse.sleepers} sleepers · Kitchen, living, master & bunk room, 2 en-suites, outdoor braai.
                <span className="block mt-2 text-gold-400/90">Total: {lodgeSummary.totalSleepers} sleepers across two residences.</span>
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
              {/* Main Lodge House */}
              <div className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal">
                <div className="h-72 sm:h-96 overflow-hidden relative">
                  <Image
                    src="/images/residences-homestead-main.jpg"
                    alt="Main Lodge House at MIWESU Game Farm"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 sm:p-10 relative">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 sm:mb-4">{mainLodgeHouse.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed mb-4 sm:mb-6">
                    The heart of the property. {lodgeSummary.mainHouse.description}
                  </p>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 mb-6 sm:mb-8">
                    <li>Lower Room 1 & 2 (sleep 3 each) · Kitchen · Living Area</li>
                    <li>Upper Room 1 & 2 (sleep 5 each)</li>
                    <li>First patio · Boma and Braai (BBQ) · Lapa (pool table & darts)</li>
                    <li>Braai under the trees · Trampoline & Jungle Gym</li>
                    <li>Swimming pool with slide</li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/residences/homestead"
                      className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                    >
                      View The Homestead <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-white text-xs uppercase tracking-widest"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              {/* The Stone Villa (Near the pool) */}
              <div className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal delay-100">
                <div className="h-72 sm:h-96 overflow-hidden relative">
                  <Image
                    src="/images/residences-second-house-main.jpg"
                    alt="The Stone Villa near the pool at MIWESU Game Farm"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 sm:p-10 relative">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 sm:mb-3">The Stone Villa</h3>
                  <p className="text-gold-400/90 text-xs italic mb-3">{secondHouse.subtitle}</p>
                  <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed mb-4 sm:mb-6">
                    {lodgeSummary.secondHouse.description}
                  </p>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 mb-6 sm:mb-8">
                    <li>Kitchen · Living Area</li>
                    <li>Master Bedroom · En-suite (shower)</li>
                    <li>Second bedroom (2 bunk beds, sleeps 4) · En-suite (bathtub)</li>
                    <li>Outdoor Braai</li>
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/residences/stone-villa"
                      className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                    >
                      View The Stone Villa <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-white text-xs uppercase tracking-widest"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Lodge House  - Facilities */}
            <div className="space-y-20 mb-20">
              <div className="reveal">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
                  Main Lodge House
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                  Facilities & Layout
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-loose mb-10 max-w-3xl">
                  The main lodge has four bedrooms (two lower rooms sleeping 3 each, two upper rooms sleeping 5 each), open-plan kitchen and living area, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline and jungle gym, and swimming pool with slide.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {mainLodgeHouse.facilities.map((facility) => (
                    <div key={facility.id} className="bg-onyx-light border border-white/5 overflow-hidden reveal group">
                      <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                        <FacilityImage
                          facility={facility}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 sm:p-5 border-t border-white/5">
                        <span className="font-serif text-white text-sm sm:text-base">{facility.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Stone Villa  - Facilities */}
              <div className="reveal delay-100">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
                  The Stone Villa
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2">
                  Near the Pool
                </h3>
                <p className="text-gray-400 text-sm italic mb-6">Sleeps {secondHouse.sleepers} · 2 bedrooms, 2 en-suites</p>
                <p className="text-gray-300 text-base sm:text-lg leading-loose mb-10 max-w-3xl">
                  {lodgeSummary.secondHouse.description}
                </p>
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
                        <span className="font-serif text-white text-sm sm:text-base">{facility.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities overview */}
            <div className="mb-20 reveal delay-200">
              <div className="text-center mb-12">
                <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                  On the Property
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Main Lodge & The Stone Villa
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-loose">
                  Main lodge: four bedrooms ({lodgeSummary.mainHouse.sleepers} sleepers), kitchen, living area, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide. The Stone Villa (near the pool): sleeps {lodgeSummary.secondHouse.sleepers}, kitchen, living, master and second bedroom (2 bunk beds), two en-suites, outdoor braai.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <ChefHat className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Kitchen</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Full kitchen in main lodge and The Stone Villa.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <Flame className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Boma & Braai</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Boma and braai at main lodge; braai under the trees; outdoor braai at The Stone Villa.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <LayoutIcon className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Lapa</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Pool table and darts at main lodge lapa.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <TreePine className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Braai under the trees</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Additional braai area at main lodge.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <Activity className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Trampoline & Jungle Gym</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Family-friendly at main lodge.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <Waves className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Swimming pool with slide</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">At main lodge; The Stone Villa is near the pool.</p>
                </div>
              </div>
            </div>

            {/* Daily Housekeeping */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 sm:mb-20 reveal delay-300">
              <div className="relative h-[280px] sm:h-[360px] md:h-[500px] min-h-[240px]">
                <Image
                  src="/images/residences-housekeeping.jpg"
                  alt="Daily housekeeping service at Miwesu"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                  Invisible Service
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Daily Housekeeping
                </h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Our housekeeping operates invisibly, ensuring your residence remains pristine without intrusion. Beds are made, dishes cleaned, and spaces refreshed while you're out exploring the reserve or tracking game.
                </p>
                <p className="text-gray-300 text-lg leading-loose">
                  We understand that privacy is paramount. Our team respects your space and operates on a schedule that works around your activities, ensuring you can focus on what matters: the experience.
                </p>
              </div>
            </div>

            {/* Location & Access */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-6 sm:p-10 md:p-16 mb-12 sm:mb-20 reveal delay-400">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <MapPin className="w-8 h-8 text-gold-500" />
                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    Location & Access
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Both residences are located within the secure boundaries of MIWESU GAME FARM, approximately 40 kilometers from Thabazimbi town on the D1432 district road. The journey itself is part of the experience -a transition from the modern world into the heart of the Makoppa district.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-8">
                  <span className="text-gold-400 font-medium">Vehicle Requirements:</span> High-clearance vehicles are recommended, especially during the summer rainy season (October–March). The D1432 is a gravel road that can become challenging after heavy rains.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-white mb-2">4x4 Tracks</h4>
                      <p className="text-gray-400 text-sm">
                        Extensive network of farm tracks for game viewing and exploration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-white mb-2">Secure Perimeter</h4>
                      <p className="text-gray-400 text-sm">
                        Electric fencing and secure boundaries ensure safety for families.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gold-500 p-6 sm:p-10 md:p-20 reveal delay-500">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  Experience Absolute Privacy
                </h2>
                <p className="text-onyx/90 font-sans text-lg leading-loose mb-8">
                  Both residences offer exclusive use, ensuring complete privacy and autonomy during your stay. Whether you're planning a family hunting safari or a corporate retreat, we provide the perfect base for your Makoppa adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-onyx text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-onyx transition-all"
                  >
                    Request Availability
                  </Link>
                  <Link
                    href="/rates"
                    className="inline-block border-2 border-onyx text-onyx px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all"
                  >
                    View Rates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

