'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { DollarSign, Calendar, Users, ArrowRight, Download, Home, Target, Camera, Star } from 'lucide-react'

export default function RatesPage() {
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

  const openModal = () => {
    const modal = document.getElementById('vettingModal')
    if (modal) {
      modal.classList.remove('hidden')
    }
  }

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/rates-hero.jpg"
              alt="Rates"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              Investment Guide
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Rates & <span className="text-gradient-gold">Pricing</span>
            </h1>
          </div>
        </section>

        {/* Rates Section */}
        <section className="py-32 bg-onyx text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
                Exclusive Pricing
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-white mt-6 mb-8">
                Transparent Investment
              </h2>
              <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto leading-loose">
                All rates are quoted in South African Rand (ZAR). Pricing varies by season, residence, and activities. Contact our concierge for detailed quotes.
              </p>
            </div>

            {/* Accommodation Rates */}
            <div className="mb-20 reveal delay-100">
              <h3 className="font-serif text-3xl text-white mb-12 flex items-center">
                <Calendar className="w-8 h-8 text-gold-500 mr-4" />
                Accommodation Rates
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-onyx-light border border-white/5 p-8">
                  <h4 className="font-serif text-2xl text-white mb-4">The Homestead</h4>
                  <p className="text-gray-400 mb-6">10-sleeper exclusive use</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-gray-400 uppercase text-xs tracking-widest">
                        Per Night
                      </span>
                      <span className="font-serif text-2xl text-gold-500">
                        From R 25,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-gray-400 uppercase text-xs tracking-widest">
                        Weekly Rate
                      </span>
                      <span className="font-serif text-2xl text-gold-500">
                        From R 150,000
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-onyx-light border border-white/5 p-8">
                  <h4 className="font-serif text-2xl text-white mb-4">The Stone Villa</h4>
                  <p className="text-gray-400 mb-6">4-sleeper exclusive use</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-gray-400 uppercase text-xs tracking-widest">
                        Per Night
                      </span>
                      <span className="font-serif text-2xl text-gold-500">
                        From R 12,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-gray-400 uppercase text-xs tracking-widest">
                        Weekly Rate
                      </span>
                      <span className="font-serif text-2xl text-gold-500">
                        From R 70,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Rates */}
            <div className="mb-20 reveal delay-200">
              <h3 className="font-serif text-3xl text-white mb-12 flex items-center">
                <Users className="w-8 h-8 text-gold-500 mr-4" />
                Activity Rates
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-onyx-light border border-white/5 p-8">
                  <h4 className="font-serif text-xl text-white mb-4">Conservation Harvest</h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Trophy fees vary by species. Contact for detailed pricing guide.
                  </p>
                  <span className="text-gold-500 font-serif text-lg">
                    On Request
                  </span>
                </div>

                <div className="bg-onyx-light border border-white/5 p-8">
                  <h4 className="font-serif text-xl text-white mb-4">Photographic Safaris</h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Guided game drives and walking safaris
                  </p>
                  <span className="text-gold-500 font-serif text-lg">
                    From R 2,500
                  </span>
                </div>

                <div className="bg-onyx-light border border-white/5 p-8">
                  <h4 className="font-serif text-xl text-white mb-4">Wellness & Activities</h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Spa treatments, astronomy, and special experiences
                  </p>
                  <span className="text-gold-500 font-serif text-lg">
                    From R 1,500
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Pricing Sections */}
            <div className="space-y-20 mb-20">
              {/* Accommodation Details */}
              <div className="reveal delay-300">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      The Homestead
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Exclusive Use Pricing
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      The Homestead offers complete privacy and autonomy for groups of up to 10 guests. Rates include exclusive use of the entire residence, daily housekeeping, all utilities, fiber optic internet, and full access to the reserve.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      Weekly rates offer significant savings for extended stays. Minimum stay requirements may apply during peak seasons. All rates are quoted in South African Rand (ZAR) and are subject to change.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">10</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Sleepers</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">5</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Bedrooms</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/rates-homestead.jpg"
                      alt="The Homestead luxury accommodation"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-400">
                <div className="relative h-[500px] order-2 md:order-1">
                  <Image
                    src="/images/rates-stone-villa.jpg"
                    alt="The Stone Villa intimate accommodation"
                    fill
                    className="object-cover shadow-luxury"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    The Stone Villa
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    Intimate Sanctuary
                  </h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    Perfect for couples or small families, The Stone Villa offers the same exclusive use experience in a more intimate setting. Rates include all amenities, daily housekeeping, and full reserve access.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose mb-8">
                    The plunge pool, stargazing deck, and telescope make this an ideal choice for those seeking a romantic or contemplative retreat in the Makoppa district.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-l-2 border-gold-500 pl-4">
                      <span className="block font-serif text-2xl text-gold-400 mb-1">4</span>
                      <span className="text-xs uppercase tracking-widest text-gray-400">Sleepers</span>
                    </div>
                    <div className="border-l-2 border-gold-500 pl-4">
                      <span className="block font-serif text-2xl text-gold-400 mb-1">2</span>
                      <span className="text-xs uppercase tracking-widest text-gray-400">Bedrooms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trophy Fees Section */}
              <div className="bg-onyx-light border border-white/5 p-12 reveal delay-500">
                <div className="text-center mb-12">
                  <Target className="w-12 h-12 text-gold-500 mx-auto mb-6" />
                  <h3 className="font-serif text-3xl text-white mb-6">Conservation Harvest Fees</h3>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-loose">
                    Trophy fees vary by species, trophy quality, and season. Our annual ecological census determines availability. All fees include professional tracking, field preparation, and meat processing. 100% of meat is donated to local communities.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h4 className="font-serif text-xl text-gold-400 mb-4">Greater Kudu</h4>
                    <p className="text-gray-400 text-sm mb-4">The Grey Ghost</p>
                    <p className="text-white font-serif text-lg">R 12,000 - R 25,000</p>
                    <p className="text-gray-500 text-xs mt-2">Based on horn length</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif text-xl text-gold-400 mb-4">Blue Wildebeest</h4>
                    <p className="text-gray-400 text-sm mb-4">Tough plains game</p>
                    <p className="text-white font-serif text-lg">From R 5,500</p>
                    <p className="text-gray-500 text-xs mt-2">Per trophy</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-serif text-xl text-gold-400 mb-4">Impala</h4>
                    <p className="text-gray-400 text-sm mb-4">Classic bushveld</p>
                    <p className="text-white font-serif text-lg">From R 2,500</p>
                    <p className="text-gray-500 text-xs mt-2">Per trophy</p>
                  </div>
                </div>
                <p className="text-center text-gray-400 text-sm mt-8">
                  Detailed pricing for all species, including Gemsbok, Warthog, Eland, and Red Hartebeest, available in our Investment Guide.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gold-500 p-12 md:p-16 text-center reveal delay-600">
              <DollarSign className="w-16 h-16 text-onyx mx-auto mb-6" />
              <h3 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Detailed Investment Guide
              </h3>
              <p className="text-onyx/90 font-sans text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Download our confidential 2025 Conservation Investment Guide, detailing comprehensive trophy fees, taxidermy logistics, meat processing procedures, seasonal rates, and complete pricing structure. This guide is available only to vetted prospective guests.
              </p>
              <button
                onClick={openModal}
                className="px-10 py-4 bg-onyx text-white uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-onyx transition-all inline-flex items-center"
              >
                Request Access <Download className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32 bg-marble-dark">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
              Custom Packages Available
            </h2>
            <p className="font-sans text-gray-600 text-lg leading-loose mb-10">
              Our concierge team can create bespoke packages tailored to your needs. Contact us for personalized quotes and availability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-onyx text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all"
            >
              Contact Concierge <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

