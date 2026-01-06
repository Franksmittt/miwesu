'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Shield, Heart, Users, Leaf, Quote, Target, ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function ConservationPage() {
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
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/conservation-hero.jpg"
              alt="Conservation"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              Our Legacy
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              If It Pays,<br />
              <span className="text-gradient-gold">It Stays.</span>
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-32 bg-onyx text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-fixed"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/90 to-transparent"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 sm:mb-20">
              <div className="reveal">
                <div className="inline-block bg-gold-500 text-onyx px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6">
                  Conservation First
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 text-white">
                  Economic Sustainability
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-loose mb-6 sm:mb-10 font-light">
                  The reality of African conservation is economic. Your visit directly funds our Anti-Poaching Units and habitat restoration. The meat from your harvest feeds 300 local families monthly.
                </p>
                <div className="grid grid-cols-2 gap-6 sm:gap-12">
                  <div>
                    <span className="block text-4xl sm:text-6xl font-serif text-gold-500">100%</span>
                    <span className="uppercase text-[10px] tracking-widest text-white mt-2 block">
                      Meat Donated
                    </span>
                  </div>
                  <div>
                    <span className="block text-4xl sm:text-6xl font-serif text-gold-500">24/7</span>
                    <span className="uppercase text-[10px] tracking-widest text-white mt-2 block">
                      Anti-Poaching
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative reveal delay-100 w-full md:w-auto">
                <div className="glass-panel-dark p-8 sm:p-12 border border-gold-500/30">
                  <Quote className="w-8 h-8 text-gold-500 mb-6" />
                  <p className="text-white font-serif text-2xl mb-8 leading-normal">
                    "I acknowledge that Miwesu is a sanctuary of silence. I respect the ethics of the fair chase and the peace of the Iron Mountain."
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    — The Guardian's Pledge
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
              <div className="text-center reveal">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-3xl sm:text-4xl text-white mb-2">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Protection
                </span>
              </div>
              <div className="text-center reveal delay-100">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-3xl sm:text-4xl text-white mb-2">300</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Families Fed
                </span>
              </div>
              <div className="text-center reveal delay-200">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-3xl sm:text-4xl text-white mb-2">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Meat Donated
                </span>
              </div>
              <div className="text-center reveal delay-300">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-3xl sm:text-4xl text-white mb-2">Ongoing</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Restoration
                </span>
              </div>
            </div>

            {/* Programs Section - Detailed */}
            <div className="space-y-20 mb-20">
              {/* Anti-Poaching Units */}
              <div className="reveal delay-200">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/conservation-anti-poaching.jpg"
                      alt="Anti-poaching unit patrol"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      24/7 Protection
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Anti-Poaching Units
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      Our 24/7 anti-poaching teams patrol the reserve continuously, protecting not just our wildlife but the entire ecosystem. These dedicated units operate around the clock, using advanced tracking and monitoring systems.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      Every guest contribution directly funds these critical operations. Your visit ensures that the Makoppa district remains a safe haven for wildlife, free from the threat of poaching. This is conservation that pays for itself.
                    </p>
                    <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                      <Shield className="w-5 h-5" />
                      <span>Continuous Protection</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Support */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-300">
                <div>
                  <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    Community Impact
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    Feeding 300 Families Monthly
                  </h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    All meat from harvests is donated to 300 local families monthly. This creates a direct link between conservation and community welfare, ensuring local support for our efforts and demonstrating that conservation can benefit everyone.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose mb-8">
                    The "If It Pays, It Stays" philosophy extends beyond the reserve boundaries. By feeding local families, we create a sustainable model where conservation directly supports the community, ensuring long-term success.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-l-2 border-gold-500 pl-4">
                      <span className="block font-serif text-3xl text-gold-400 mb-1">300</span>
                      <span className="text-xs uppercase tracking-widest text-gray-400">Families Fed</span>
                    </div>
                    <div className="border-l-2 border-gold-500 pl-4">
                      <span className="block font-serif text-3xl text-gold-400 mb-1">100%</span>
                      <span className="text-xs uppercase tracking-widest text-gray-400">Meat Donated</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px]">
                  <Image
                    src="/images/conservation-community-support.jpg"
                    alt="Community support and meat donation"
                    fill
                    className="object-cover shadow-luxury"
                  />
                </div>
              </div>

              {/* Habitat Restoration & Research */}
              <div className="grid md:grid-cols-2 gap-8 mb-20 reveal delay-400">
                <div className="bg-onyx-light border border-white/5 p-10">
                  <Leaf className="w-12 h-12 text-gold-500 mb-6" />
                  <h4 className="font-serif text-2xl text-white mb-4">Habitat Restoration</h4>
                  <p className="text-gray-300 font-sans leading-relaxed mb-6">
                    Ongoing projects to restore and maintain the natural habitat of the Makoppa district. We work to preserve the Arid Sweet Bushveld, protect ancient Leadwood forests, and ensure the ecosystem remains healthy for generations to come.
                  </p>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    From controlled burns to invasive species management, every action is taken with the long-term health of the ecosystem in mind. The Makoppa's unique biodiversity depends on careful stewardship.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-10">
                  <Target className="w-12 h-12 text-gold-500 mb-6" />
                  <h4 className="font-serif text-2xl text-white mb-4">Ecological Research</h4>
                  <p className="text-gray-300 font-sans leading-relaxed mb-6">
                    Annual censuses and research programs help us understand and manage the ecosystem sustainably. We track population dynamics, monitor health indicators, and ensure balanced populations across all species.
                  </p>
                  <p className="text-gray-300 font-sans leading-relaxed">
                    This data-driven approach ensures that every conservation decision is based on science, not speculation. We manage an ecosystem, not just a hunting operation.
                  </p>
                </div>
              </div>

              {/* Programs Grid */}
              <div className="bg-onyx-light border border-white/5 p-12 reveal delay-500">
                <h3 className="font-serif text-3xl text-white mb-12 text-center">Our Conservation Programs</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-serif text-xl text-gold-500 mb-4">Anti-Poaching Units</h4>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      Our 24/7 anti-poaching teams patrol the reserve, protecting not just our wildlife but the entire ecosystem. Every guest contribution directly funds these critical operations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-gold-500 mb-4">Community Support</h4>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      All meat from harvests is donated to 300 local families monthly. This creates a direct link between conservation and community welfare, ensuring local support for our efforts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-gold-500 mb-4">Habitat Restoration</h4>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      Ongoing projects to restore and maintain the natural habitat of the Makoppa district, ensuring the ecosystem remains healthy for generations to come.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-gold-500 mb-4">Ecological Research</h4>
                    <p className="text-gray-400 font-sans leading-relaxed">
                      Annual censuses and research programs help us understand and manage the ecosystem sustainably, ensuring balanced populations and healthy wildlife.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-32 bg-marble-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                The Impact
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                Conservation Through Utilization
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto leading-loose">
                The reality of African conservation is economic. Your visit directly funds our Anti-Poaching Units and habitat restoration. The meat from your harvest feeds 300 local families monthly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-10 text-center reveal">
                <Shield className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                <span className="block font-serif text-5xl text-onyx mb-4">24/7</span>
                <h3 className="font-serif text-2xl text-onyx mb-4">Anti-Poaching</h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Continuous protection of the reserve and surrounding ecosystem through dedicated patrol units.
                </p>
              </div>
              <div className="bg-white p-10 text-center reveal delay-100">
                <Users className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                <span className="block font-serif text-5xl text-onyx mb-4">300</span>
                <h3 className="font-serif text-2xl text-onyx mb-4">Families Fed</h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Monthly meat donations ensure local communities benefit directly from conservation efforts.
                </p>
              </div>
              <div className="bg-white p-10 text-center reveal delay-200">
                <Heart className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                <span className="block font-serif text-5xl text-onyx mb-4">100%</span>
                <h3 className="font-serif text-2xl text-onyx mb-4">Meat Donated</h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Every harvest contributes to community welfare—nothing goes to waste.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 text-center reveal delay-300">
              <h3 className="font-serif text-3xl md:text-4xl text-onyx mb-6">
                Be Part of the Solution
              </h3>
              <p className="font-sans text-gray-600 text-lg leading-loose mb-8 max-w-2xl mx-auto">
                Your visit directly supports conservation. Every stay, every activity, every harvest contributes to protecting the Makoppa ecosystem and supporting local communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-10 py-4 bg-onyx text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all"
                >
                  Get Involved <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/activities"
                  className="inline-flex items-center px-10 py-4 border-2 border-onyx text-onyx uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all"
                >
                  Explore Activities <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

