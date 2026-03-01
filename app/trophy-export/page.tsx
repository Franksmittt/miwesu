'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Package, Plane, FileCheck, Clock, Shield, ArrowRight, MapPin } from 'lucide-react'

export default function TrophyExportPage() {
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
        {/* Hero */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/conservation-harvest-kudu.jpg"
              alt="Trophy preparation at MIWESU Game Farm - Limpopo conservation harvest, Makoppa district"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-4 block">
              Logistics & Peace of Mind
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
              Trophy Export & <span className="text-gradient-gold">Travel</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-4">
              How we get your trophy from Limpopo to Texas -or anywhere in the world.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              International hunters often ask one question above all: <strong className="text-onyx">How do I get my trophy home?</strong> At MIWESU GAME FARM we work with trusted dipping, shipping, and taxidermy partners so your Limpopo trophy reaches you without hassle. This guide outlines the process from field to your door.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24 bg-onyx text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 reveal">
              From the Bushveld to Your Home
            </h2>

            <div className="space-y-12 md:space-y-16">
              <div className="reveal flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-400 mb-3">1. Field Preparation & Salt</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your professional hunter and our team ensure capes and skulls are properly prepared in the field. Initial salting happens on the farm to preserve the trophy before it leaves MIWESU. We follow best practices so your taxidermist receives workable, quality material.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-400 mb-3">2. Dipping, Tanning & CITES</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your trophy is delivered to a licensed dip-and-ship facility. They handle EU and USDA-compliant dipping/tanning and all CITES permits required for export from South Africa. We work with agents who specialize in hunting trophies and know the requirements for the USA, Europe, and other destinations.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-400 mb-3">3. Shipping</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once cleared, your crate is shipped by air or sea to your chosen port of entry. Your dip-and-ship agent coordinates with customs and your taxidermist. Typical timelines: several months for processing and permits, then 4–12 weeks shipping depending on destination and method. We can connect you with our preferred partners for seamless logistics.
                  </p>
                </div>
              </div>

              <div className="reveal flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-gold-400 mb-3">4. Timeline Expectations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From the day you take your trophy in Limpopo to the day it reaches your taxidermist or home: plan on 6–18 months depending on species, CITES workload, and destination. Our partners keep you updated at each stage so there are no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel to Miwesu */}
        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-onyx text-center mb-10 reveal">
              Getting to MIWESU
            </h2>
            <div className="reveal flex gap-6 items-start">
              <MapPin className="w-10 h-10 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-sans text-gray-600 leading-relaxed mb-4">
                  MIWESU GAME FARM is on <strong>D1432 Road, Makoppa District, Thabazimbi, Limpopo</strong>. The nearest major airport is <strong>OR Tambo International (Johannesburg)</strong>, approximately 2.5 hours by road. We recommend a high-clearance vehicle for the district road. GPS: -24.4523956, 27.0450853. The Waterberg is malaria-free -no prophylaxis required.
                </p>
                <p className="font-sans text-gray-600 leading-relaxed">
                  International guests often fly into Johannesburg (ATL, JFK, LHR, FRA, and other hubs connect to OR Tambo). Our concierge can advise on transfers and rental options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 md:py-24 bg-onyx text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <Shield className="w-14 h-14 text-gold-400 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              A Complete Logistics Solution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              We don’t just offer the hunt -we connect you with trusted partners for dipping, shipping, and taxidermy so your entire experience, from arrival in Limpopo to trophy at home, is handled with care. See our <Link href="/partners" className="text-gold-400 hover:text-gold-300 underline">Trusted Partners</Link> page for more, or contact our concierge with any logistics questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors"
            >
              Ask About Export & Travel <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
