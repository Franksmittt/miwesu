'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/StructuredData'
import { getCurrency, getIntent } from '@/lib/cookies'
import { lodgeSummary, mainLodgeHouse, secondHouse } from '@/lib/residences-data'
import { heroImages } from '@/lib/hero-images'
import {
  ChefHat,
  Wifi,
  Flame,
  Shield,
  Sun,
  Star,
  Coffee,
  Gem,
  Download,
  Activity,
  Wind,
  Users,
  Camera,
} from 'lucide-react'
import BookingWidget from '@/components/BookingWidget'
import DayInLife from '@/components/DayInLife'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  const [intent, setIntent] = useState<'biltong' | 'trophy'>('trophy')
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('USD')

  useEffect(() => {
    setIntent(getIntent())
    setCurrency(getCurrency())
  }, [])

  useEffect(() => {
    // Reveal Animation on Scroll
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
    reveal() // Trigger once on load

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
      <OrganizationSchema />
      <LocalBusinessSchema />
      <main id="main-content">

      {/* Hero: Pure Cinematic - full bleed image, radial overlay (dark edges, clear center), liquid glass CTAs */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-onyx">
        {/* Background image: cover, center 40% so subject pops */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.home}
            alt="MIWESU, The Makoppa Sanctuary"
            fill
            sizes="100vw"
            className="object-cover object-[center_40%]"
            priority
          />
        </div>

        {/* Radial overlay: dark edges, darker center band behind text for readability */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 50%, rgba(5,5,5,0.88) 100%)',
          }}
          aria-hidden
        />

        {/* Content: pushed down to frame subject, max 800px; less on mobile */}
        <motion.div
          className="relative z-10 text-center px-5 max-w-[800px] mx-auto flex flex-col items-center mt-[5vh] md:mt-[15vh]"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            hidden: {},
          }}
        >
          <motion.span
            className="font-sans text-[0.85rem] md:text-[0.9rem] uppercase tracking-[0.3em] text-gold-400 font-bold mb-6 block"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)' }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            The Makoppa Sanctuary
          </motion.span>

          <motion.h1
            className="font-serif text-[3.2rem] md:text-[5rem] font-normal text-white tracking-[0.08em] mb-4 leading-none"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            IRON EDEN
          </motion.h1>

          <motion.p
            className="font-sans text-[1.15rem] md:text-[1.2rem] font-light text-white max-w-xl mx-auto mb-14 leading-[1.8]"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.7)' }}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            Discover a 2.5-billion-year-old landscape. Bespoke luxury, ethical conservation, and the raw beauty of the Sweetveld.
          </motion.p>

          {/* Liquid glass CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center w-full sm:w-auto max-w-[300px] sm:max-w-none mx-auto"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            <Link
              href="/book"
              className="px-10 py-4 bg-white/[0.03] backdrop-blur-md border border-white/20 text-marble font-sans text-[0.85rem] font-medium uppercase tracking-[0.15em] text-center transition-all duration-400 hover:bg-white/10 hover:border-gold-300 hover:text-white"
            >
              Book Your Stay
            </Link>
            <Link
              href="/wildlife"
              className="px-10 py-4 bg-white/[0.03] backdrop-blur-md border border-white/20 text-marble font-sans text-[0.85rem] font-medium uppercase tracking-[0.15em] text-center transition-all duration-400 hover:bg-white/10 hover:border-gold-300 hover:text-white"
            >
              Discover Wildlife
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Private Residences - The Product */}
      <section
        id="accommodation"
        className="pt-24 lg:pt-32 pb-12 lg:pb-24 bg-onyx text-white relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12 sm:mb-20">
            <span className="type-eyebrow block">
              The Collection
            </span>
            <h2 className="type-h2-home mt-6">
              Private Residences
            </h2>
            <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Residence Card 1 - Hunter's House */}
            <Link
              href="/residences/homestead"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] overflow-hidden rounded-2xl reveal block"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative rounded-t-2xl">
                <Image
                  src="/images/residences-homestead-main.jpg"
                  alt="Hunter's House - Main lodge 16-sleeper private residence at Miwesu Game Reserve"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-10 relative">
                <div className="absolute -top-4 sm:-top-6 right-4 sm:right-8 bg-gold-500 text-onyx w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-serif text-lg sm:text-xl font-bold shadow-gold-glow">
                  I
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">
                  {mainLodgeHouse.subtitle || "Hunter's House"}
                </h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6 sm:mb-8">
                  The pinnacle of exclusive use. Main lodge  - {lodgeSummary.mainHouse.sleepers} sleepers, four bedrooms, kitchen, living, boma, lapa, pool and braai.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-[10px] uppercase tracking-widest text-gold-400">
                  <span className="flex items-center">
                    <ChefHat className="w-3 h-3 mr-2" /> Chef's Kitchen
                  </span>
                  <span className="flex items-center">
                    <Wifi className="w-3 h-3 mr-2" /> Fiber Optic
                  </span>
                  <span className="flex items-center">
                    <Flame className="w-3 h-3 mr-2" /> Private Boma
                  </span>
                  <span className="flex items-center">
                    <Shield className="w-3 h-3 mr-2" /> Secure
                  </span>
                </div>
              </div>
            </Link>

            {/* Residence Card 2 - Rooibok Kraal */}
            <Link
              href="/residences/stone-villa"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] overflow-hidden rounded-2xl reveal delay-100 block"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative rounded-t-2xl">
                <Image
                  src="/images/residences-second-house-main.jpg"
                  alt="Rooibok Kraal - 6-sleeper luxury accommodation near the pool at Miwesu"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-10 relative">
                <div className="absolute -top-4 sm:-top-6 right-4 sm:right-8 bg-white text-onyx w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-serif text-lg sm:text-xl font-bold">
                  II
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4">
                  Rooibok Kraal
                </h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6 sm:mb-8">
                  {secondHouse.subtitle}. Master bedroom and second bedroom (2 bunk beds), two en-suites, kitchen, living, outdoor braai.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-[10px] uppercase tracking-widest text-gold-400">
                  <span className="flex items-center">
                    <Sun className="w-3 h-3 mr-2" /> En-suite
                  </span>
                  <span className="flex items-center">
                    <Wind className="w-3 h-3 mr-2" /> Outdoor Braai
                  </span>
                  <span className="flex items-center">
                    <Star className="w-3 h-3 mr-2" /> Near Pool
                  </span>
                  <span className="flex items-center">
                    <Coffee className="w-3 h-3 mr-2" /> Kitchen
                  </span>
                </div>
              </div>
            </Link>

            {/* Features Box */}
            <div className="bg-gold-500 p-6 sm:p-10 flex flex-col justify-center reveal delay-200 shadow-gold-glow rounded-2xl md:col-span-2 lg:col-span-1">
              <Gem className="w-10 h-10 sm:w-12 sm:h-12 text-onyx mb-4 sm:mb-6" />
              <h3 className="font-serif text-2xl sm:text-3xl text-onyx mb-4 sm:mb-6">
                Bespoke Living
              </h3>
              <p className="text-onyx/80 font-sans leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                We have reimagined the self-catering model. Expect industrial Smeg
                appliances, Le Creuset cookware, and daily housekeeping that
                operates invisibly.
              </p>
              <Link
                href="/residences"
                className="bg-onyx text-white px-8 py-4 rounded-2xl uppercase tracking-[0.2em] text-xs font-bold font-sans hover:bg-white hover:text-onyx transition-all duration-300 ease-[cubic-bezier(0.22,0.25,0,1)] w-fit inline-block"
              >
                Explore Amenities
              </Link>
            </div>
            <div className="lg:hidden mt-8 flex justify-center reveal">
              <BookingWidget variant="dark" compact />
            </div>
          </div>
          <div className="mt-12 flex justify-center reveal">
            <BookingWidget variant="dark" />
          </div>
        </div>
      </section>

      {/* A Day in Eden - The Experience */}
      <DayInLife />

      {/* Conservation Harvest - The Specifics */}
      <section id="hunting" className="pt-8 pb-24 border-t border-white/5 bg-onyx text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-transparent to-onyx"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12 sm:mb-24">
            <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold font-sans">
              The Portfolio
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mt-6 mb-8 tracking-tight">
              Conservation <br />
              <span className="text-gradient-gold">Harvest</span>
            </h2>
            <p className="font-sans text-gray-400 text-sm max-w-2xl mx-auto leading-loose">
              {intent === 'biltong'
                ? 'Ons verkoop nie diere nie; ons bestuur \'n ekosisteem. Beskikbaarheid word deur ons jaarlikse sensus bepaal. Pryse in Rand. Hier is die primêre spesies van die Ystergberg.'
                : 'We do not sell animals; we manage an ecosystem. The availability of specific quarry is dictated strictly by our annual ecological census. Inquire for USD packages. Below are the primary species of the Iron Mountain.'}
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Species Card 1: Greater Kudu */}
            <Link
              href="/greater-kudu"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden reveal block"
            >
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <Image
                  src="/images/kudu-bull-portrait-01.png"
                  alt="Greater Kudu (Tragelaphus strepsiceros) - Iconic antelope species at Miwesu"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-onyx text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Iconic
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-1">Greater Kudu</h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-4 sm:mb-6">
                  Tragelaphus strepsiceros
                </p>
                <div className="space-y-3 sm:space-y-4 border-t border-white/10 pt-4 sm:pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400 flex-wrap gap-1">
                    <span className="uppercase tracking-widest">Caliber</span>
                    <span className="text-white">.300 Win Mag / .30-06</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Rowland Ward</span>
                    <span className="text-white">Min. 53 7/8"</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Terrain</span>
                    <span className="text-white">Mountain Thickets</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Species Card 2: Blue Wildebeest */}
            <Link
              href="/wildebeest"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden reveal delay-100 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/4wildebeest-bull-portrait-02.png"
                  alt="Blue Wildebeest (Connochaetes taurinus) - Tough plains game species"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Tough
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-1">
                  Blue Wildebeest
                </h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                  Connochaetes taurinus
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Caliber</span>
                    <span className="text-white">.375 H&H Recommended</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Rowland Ward</span>
                    <span className="text-white">Min. 28 1/2" (Width)</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Terrain</span>
                    <span className="text-white">Open Plains</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Species Card 3: Impala */}
            <Link
              href="/impala"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden reveal delay-200 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/impala-ram-portrait-01.png"
                  alt="Impala (Aepyceros melampus) - Classic African antelope species"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Classic
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-1">Impala</h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                  Aepyceros melampus
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Caliber</span>
                    <span className="text-white">.243 / 6.5mm Creedmoor</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Rowland Ward</span>
                    <span className="text-white">Min. 23 5/8"</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Terrain</span>
                    <span className="text-white">Bushveld Fringe</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Species Card 4: Gemsbok */}
            <Link
              href="/gemsbok"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden reveal block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/gemsbok-portrait-01.png"
                  alt="Gemsbok (Oryx gazella) - Distinct desert antelope with long straight horns"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Distinct
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-1">Gemsbok</h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                  Oryx gazella
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Caliber</span>
                    <span className="text-white">.30-06 / .300 Win Mag</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Rowland Ward</span>
                    <span className="text-white">Min. 40"</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Terrain</span>
                    <span className="text-white">Open Scrub</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Species Card 5: Warthog */}
            <Link
              href="/warthog"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden reveal delay-100 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/warthog_card.png"
                  alt="Warthog (Phacochoerus africanus) - Opportunistic game species at waterholes"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.25,0,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/10 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Opportunity
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-1">Warthog</h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                  Phacochoerus africanus
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Caliber</span>
                    <span className="text-white">7x57 Mauser / .308</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Rowland Ward</span>
                    <span className="text-white">Min. 13" (Tusk)</span>
                  </div>
                  <div className="flex justify-between text-xs font-sans text-gray-400">
                    <span className="uppercase tracking-widest">Terrain</span>
                    <span className="text-white">Waterholes / Mud Wallows</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* CTA Card */}
            <div className="group relative bg-gold-500 border border-gold-500 hover:bg-white hover:text-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl reveal delay-200 flex flex-col justify-center items-center p-8 text-center">
              <Download className="w-12 h-12 mb-6 text-onyx group-hover:text-gold-500 transition-colors" />
              <h3 className="font-serif text-2xl text-onyx mb-4">
                {intent === 'biltong' ? 'Jag & Biltong pryse' : 'Investment Guide'}
              </h3>
              <p className="font-sans text-xs text-onyx/70 mb-8 leading-relaxed">
                {intent === 'biltong'
                  ? 'Vra toegang tot ons 2026 jag- en biltongpryse, slagfooi en vleisverwerking.'
                  : 'Download our confidential 2026 Conservation Investment Guide, detailing trophy fees, taxidermy logistics, and meat processing.'}
              </p>
              <button
                onClick={openModal}
                type="button"
                className="px-8 py-3 rounded-2xl border border-onyx text-onyx uppercase text-[10px] tracking-[0.2em] font-bold font-sans group-hover:bg-onyx group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer"
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Rifle - The Specifics */}
      <section className="py-24 lg:py-32 bg-marble-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="type-eyebrow text-gold-700 block">
            Beyond the Rifle
          </span>
          <h2 className="type-h2-marble-lg mt-6 mb-12 sm:mb-20">
            The Observer's Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6 shadow-luxury text-left">
            <Link
              href="/activities"
              className="group relative p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 hover:bg-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer block"
            >
              <div className="mb-6 sm:mb-8">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-onyx group-hover:text-white transition-colors mb-3 sm:mb-4 text-center">
                Celestial Safaris
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-center">
                Thabazimbi offers some of the darkest skies in the southern
                hemisphere. Private astronomy sessions available.
              </p>
            </Link>
            <Link
              href="/activities"
              className="group relative p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 hover:bg-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer block"
            >
              <div className="mb-6 sm:mb-8">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-onyx group-hover:text-white transition-colors mb-3 sm:mb-4 text-center">
                Friends &amp; family
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-center">
                Exclusive-use stays where everyone shares the rhythm, from first hunts beside seasoned hands to long tables at the boma and evenings that pull the whole group in.
              </p>
            </Link>
            <Link
              href="/activities"
              className="group relative p-8 sm:p-10 rounded-2xl bg-white border border-gray-100 hover:bg-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer block"
            >
              <div className="mb-6 sm:mb-8">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-onyx group-hover:text-white transition-colors mb-3 sm:mb-4 text-center">
                Photographic safaris
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed text-center">
                For observers and shutterbugs: guided drives and light walks to capture the Waterberg: wildlife, light, and landscape without the pressure of a rifle.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience - split layout, no pledge block */}
      <section
        id="conservation"
        className="relative overflow-hidden bg-[#0c0c0c] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_20%,rgba(212,175,55,0.06),transparent_55%)]" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch">
            {/* Image - matches text column height on large screens */}
            <div className="lg:col-span-5 reveal flex flex-col lg:h-full min-h-0">
              <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={heroImages.conservation}
                  alt="Boma, braai and bushveld at MIWESU, shared evenings in the Makoppa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" aria-hidden />
              </div>
            </div>

            {/* Copy - editorial column */}
            <div className="lg:col-span-7 reveal delay-100 flex flex-col">
              <p className="type-overline mb-5">
                The experience
              </p>
              <h2 className="type-h2-section-dark mb-6">
                Evenings at the boma, mornings on the koppies
              </h2>
              <p className="type-lead-onyx mb-4 max-w-2xl">
                MIWESU is for the people you bring: first-timers beside old hands, kids laughing by the pool, and the slow stories after dark when the bush goes quiet. The Sweetveld has its own rhythm: dust, rain on tin, firelight, and the kind of thrill you only get when you are really out there.
              </p>
              <p className="type-body-sm text-gray-500 mb-10 max-w-2xl border-l-2 border-gold-500/40 pl-5">
                Hunting here is done properly, with quotas, ethics, and professional processing. What you remember is the feel of the place: the animals, the air, and the night closing in around the fire.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link
                  href="/book"
                  className="inline-flex justify-center items-center px-8 py-3.5 bg-gold-500 text-onyx font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-gold-400 transition-colors"
                >
                  Book Your Stay
                </Link>
                <Link
                  href="/activities"
                  className="inline-flex justify-center items-center px-8 py-3.5 border border-white/20 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:border-gold-500/60 hover:text-gold-300 transition-colors"
                >
                  Explore activities
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

