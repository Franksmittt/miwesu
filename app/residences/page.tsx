'use client'

import { useEffect } from 'react'
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
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/residences-hero.jpg"
              alt="Private residences at MIWESU Game Farm - The Homestead and The Stone Villa luxury accommodation Makoppa"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Collection
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              Private <span className="text-gradient-gold">Residences</span>
            </h1>
          </div>
        </section>

        {/* Residences Grid */}
        <section className="py-32 bg-onyx text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
                Exclusive Use
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-white mt-6">
                Your Private Sanctuary
              </h2>
              <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent" />
                  <div className="absolute top-6 right-6 bg-gold-500 text-onyx w-16 h-16 flex items-center justify-center font-serif text-2xl font-bold shadow-gold-glow">
                    I
                  </div>
                </div>
                <div className="p-6 sm:p-10 relative">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 sm:mb-4">Main Lodge House</h3>
                  <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed mb-4 sm:mb-6">
                    The heart of the property. Bedrooms on two levels, full kitchen, living area, boma, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide.
                  </p>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 mb-6 sm:mb-8">
                    <li>Lower Room 1 & 2 · Kitchen · Living Area</li>
                    <li>Upper Room 1 & 2</li>
                    <li>Boma and Braai (BBQ) · Lapa (pool table & darts)</li>
                    <li>Braai under the trees · Trampoline & Jungle Gym</li>
                    <li>Swimming pool with slide</li>
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Inquire <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* 2nd House (Near the pool) */}
              <div className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal delay-100">
                <div className="h-72 sm:h-96 overflow-hidden relative">
                  <Image
                    src="/images/residences-second-house-main.jpg"
                    alt="Second house near the pool at MIWESU Game Farm"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent" />
                  <div className="absolute top-6 right-6 bg-white text-onyx w-16 h-16 flex items-center justify-center font-serif text-2xl font-bold">
                    II
                  </div>
                </div>
                <div className="p-6 sm:p-10 relative">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 sm:mb-3">2nd House</h3>
                  <p className="text-gold-400/90 text-xs italic mb-3">Near the pool</p>
                  <p className="text-gray-400 text-sm sm:text-base font-sans leading-relaxed mb-4 sm:mb-6">
                    Kitchen, living area, master bedroom with en-suite, second bedroom with bunk beds (very small) and en-suite. Outdoor braai area overlooking the dam.
                  </p>
                  <ul className="text-gray-400 text-xs sm:text-sm space-y-1.5 mb-6 sm:mb-8">
                    <li>Kitchen · Living Area</li>
                    <li>Master Bedroom · En-suite Bathroom</li>
                    <li>2nd Bedroom (bunk beds) · En-suite Bathroom</li>
                    <li>Outdoor Braai overlooking the dam</li>
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Inquire <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Lodge House — Facilities */}
            <div className="space-y-20 mb-20">
              <div className="reveal">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
                  Main Lodge House
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                  Facilities & Layout
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-loose mb-10 max-w-3xl">
                  The main lodge is the heart of the property: two levels of bedrooms, full kitchen and living area, boma and braai, lapa with pool table and darts, braai under the trees, trampoline and jungle gym, and swimming pool with slide.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    { src: '/images/residences-homestead-main.jpg', label: 'Main Lodge House' },
                    { src: '/images/residences-homestead-main.jpg', label: 'Lower Room 1' },
                    { src: '/images/residences-homestead-main.jpg', label: 'Lower Room 2' },
                    { src: '/images/residences-homestead-kitchen.jpg', label: 'Kitchen' },
                    { src: '/images/residences-homestead-living.jpg', label: 'Living Area' },
                    { src: '/images/residences-homestead-main.jpg', label: 'Upper Room 1' },
                    { src: '/images/residences-homestead-main.jpg', label: 'Upper Room 2' },
                    { src: '/images/residences-main-lodge-boma-braai.jpg', label: 'Boma and Braai (BBQ)' },
                    { src: '/images/residences-main-lodge-lapa.jpeg', label: 'Lapa (pool table & darts)' },
                    { src: '/images/residences-main-lodge-braai-trees.jpg', label: 'Braai under the trees' },
                    { src: '/images/residences-main-lodge-trampoline-jungle-gym.jpg', label: 'Trampoline & Jungle Gym' },
                    { src: '/images/residences-main-lodge-pool.jpg', label: 'Swimming pool with slide' },
                  ].map((item) => (
                    <div key={item.label} className="relative h-[220px] sm:h-[260px] overflow-hidden border border-white/5">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm sm:text-base drop-shadow-lg">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2nd House (Near the pool) — Facilities */}
              <div className="reveal delay-100">
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-3 block">
                  2nd House
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2">
                  Near the Pool
                </h3>
                <p className="text-gray-400 text-sm italic mb-6">Likely the owner&apos;s house.</p>
                <p className="text-gray-300 text-base sm:text-lg leading-loose mb-10 max-w-3xl">
                  Kitchen, living area, master bedroom with en-suite bathroom, second bedroom with bunk beds (very small) and en-suite bathroom. Outdoor braai area overlooking the dam.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {[
                    { src: '/images/residences-second-house-main.jpg', label: '2nd House' },
                    { src: '/images/residences-second-house-kitchen.jpg', label: 'Kitchen' },
                    { src: '/images/residences-second-house-living.jpg', label: 'Living Area' },
                    { src: '/images/residences-second-house-master-bedroom.jpg', label: 'Master Bedroom' },
                    { src: '/images/residences-second-house-ensuite.jpg', label: 'En-suite Bathroom' },
                    { src: '/images/residences-second-house-living.jpg', label: '2nd Bedroom (bunk beds)' },
                    { src: '/images/residences-main-lodge-braai-trees.jpg', label: 'Outdoor Braai overlooking the dam' },
                  ].map((item) => (
                    <div key={item.label} className="relative h-[220px] sm:h-[260px] overflow-hidden border border-white/5">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm sm:text-base drop-shadow-lg">
                        {item.label}
                      </span>
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
                  Main Lodge & Second House
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-loose">
                  Main lodge: bedrooms on two levels, kitchen, living area, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide. Second house near the pool: kitchen, living, master and second bedroom (bunk beds), en-suites, outdoor braai overlooking the dam.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <ChefHat className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Kitchen</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Full kitchen in main lodge and second house.</p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-6 text-center">
                  <Flame className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                  <h4 className="font-serif text-lg text-white mb-2">Boma & Braai</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Boma and braai at main lodge; outdoor braai at second house overlooking the dam.</p>
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
                  <p className="text-gray-400 text-sm leading-relaxed">At main lodge; second house is near the pool.</p>
                </div>
              </div>
            </div>

            {/* Daily Housekeeping */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-300">
              <div className="relative h-[500px]">
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
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 mb-20 reveal delay-400">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <MapPin className="w-8 h-8 text-gold-500" />
                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    Location & Access
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Both residences are located within the secure boundaries of MIWESU GAME FARM, approximately 40 kilometers from Thabazimbi town on the D1432 district road. The journey itself is part of the experience—a transition from the modern world into the heart of the Makoppa district.
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
            <div className="bg-gold-500 p-12 md:p-20 reveal delay-500">
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

