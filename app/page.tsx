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
  Thermometer,
  Wind,
  Clock,
  ChefHat,
  Wifi,
  Flame,
  Shield,
  Sun,
  Star,
  Coffee,
  Gem,
  Download,
  Heart,
  Activity,
  Quote,
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

      {/* Hero: Monolith + Cinematic (Apple / Samsung) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-onyx">
        {/* Ken Burns background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%] animate-ken-burns">
            <Image
              src={heroImages.home}
              alt="MIWESU Hunters Lodge - Braai and patio under thatch with waterhole and bushveld"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
          </div>
        </div>

        {/* Desktop frame: under vignette so it fades into shadows */}
        <div
          className="absolute inset-8 md:inset-12 border border-white/5 z-[1] pointer-events-none hidden md:block"
          aria-hidden
        />

        {/* Radial vignette: OLED void – Onyx at edges, transparent center */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 0%, transparent 25%, rgba(5,5,5,0.5) 55%, #050505 100%)',
          }}
          aria-hidden
        />

        {/* Content: staggered entrance (One UI ease) */}
        <motion.div
          className="relative z-20 text-center px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            hidden: {},
          }}
        >
          {/* Eyebrow */}
          <motion.span
            className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70 mb-4 sm:mb-6 block"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            THE MAKOPPA SANCTUARY
          </motion.span>

          {/* Monolithic headline */}
          <motion.h1
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-4 sm:mb-6 px-2"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            IRON <span className="text-gradient-gold">EDEN.</span>
          </motion.h1>

          {/* Syntactic sub-headline */}
          <motion.p
            className="font-sans text-lg md:text-xl text-white/80 font-normal max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            A peerless sanctuary of silence. Forged over 2.5 billion years.
          </motion.p>

          {/* CTAs: primary + secondary */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.25, 0, 1] } },
            }}
          >
            <Link
              href="/book"
              className="group relative px-8 sm:px-10 py-4 rounded-2xl bg-[#C5A059] text-onyx font-sans text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-[cubic-bezier(0.22,0.25,0,1)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(197,160,89,0.4)]"
            >
              Book Your Stay
            </Link>
            <Link
              href="/residences"
              className="font-sans text-sm font-medium text-white border-b border-white/50 pb-0.5 transition-all duration-300 ease-[cubic-bezier(0.22,0.25,0,1)] hover:border-white hover:text-gold-400 inline-flex items-center gap-1.5"
            >
              Explore Residences
              <span className="inline-block translate-y-[-1px]">↗</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 w-full border-t border-white/5 bg-onyx/90 backdrop-blur-md py-6 hidden md:block z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between text-white/50 text-[10px] uppercase tracking-[0.2em] font-sans">
            <div className="flex items-center">
              <Thermometer className="inline w-3 h-3 mr-2 mb-0.5 text-gold-600" />{' '}
              28°C / Clear Sky
            </div>
            <div className="flex items-center">
              <Wind className="inline w-3 h-3 mr-2 mb-0.5 text-gold-600" /> Wind: NW
              5km/h
            </div>
            <div className="flex items-center">
              <Clock className="inline w-3 h-3 mr-2 mb-0.5 text-gold-600" /> Sunset:
              18:42
            </div>
          </div>
        </div>
      </section>

      {/* Private Residences - The Product */}
      <section
        id="accommodation"
        className="pt-24 lg:pt-32 pb-12 lg:pb-24 bg-onyx text-white relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12 sm:mb-20">
            <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold font-sans">
              The Collection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white mt-6 tracking-tight">
              Private Residences
            </h2>
            <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Residence Card 1 - The Homestead */}
            <Link
              href="/residences/homestead"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] overflow-hidden rounded-2xl reveal block"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative rounded-t-2xl">
                <Image
                  src="/images/residences-homestead-main.jpg"
                  alt="The Homestead - Main lodge 16-sleeper private residence at Miwesu Game Reserve"
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
                  {mainLodgeHouse.subtitle || 'The Homestead'}
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

            {/* Residence Card 2 - The Stone Villa */}
            <Link
              href="/residences/stone-villa"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] overflow-hidden rounded-2xl reveal delay-100 block"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative rounded-t-2xl">
                <Image
                  src="/images/residences-second-house-main.jpg"
                  alt="The Stone Villa - 6-sleeper luxury accommodation near the pool at Miwesu"
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
                  The Stone Villa
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
                  src="/images/home-species-wildebeest.jpg"
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
                  src="/images/home-species-warthog.jpg"
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
          <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-bold font-sans">
            Beyond the Rifle
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-onyx mt-6 mb-12 sm:mb-20 tracking-tight">
            The Observer's Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-6 shadow-luxury">
            <Link
              href="/activities"
              className="group relative p-8 sm:p-12 rounded-2xl bg-white border border-gray-100 hover:bg-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer block"
            >
              <div className="mb-6 sm:mb-8">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-onyx group-hover:text-white transition-colors mb-3 sm:mb-4">
                Celestial Safaris
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                Thabazimbi offers some of the darkest skies in the southern
                hemisphere. Private astronomy sessions available.
              </p>
            </Link>
            <Link
              href="/activities"
              className="group relative p-8 sm:p-12 rounded-2xl bg-white border border-gray-100 hover:bg-onyx transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] cursor-pointer block"
            >
              <div className="mb-6 sm:mb-8">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-onyx group-hover:text-white transition-colors mb-3 sm:mb-4">
                Mobile Wellness
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                In-villa spa treatments using indigenous Marula oils. Relaxation
                without leaving your sanctuary.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* What Guests Say - Social Proof */}
      <section className="py-16 lg:py-24 bg-marble border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold-600 text-xs tracking-[0.2em] uppercase font-bold font-sans block text-center mb-6">
            What Guests Say
          </span>
          <div className="grid md:grid-cols-2 gap-6">
            {intent === 'biltong' ? (
              <>
                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-2xl reveal">
                  <Quote className="w-10 h-10 text-gold-500 mb-4" />
                  <p className="font-sans text-gray-600 leading-relaxed mb-6">
                    &quot;Die gesin het na die naweek gevoel of ons werklik onttrek het. Die biltongjag en die koppie-uitsigte -ons kom weer.&quot;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold-600 font-bold">Family biltong hunt · Gauteng</p>
                </div>
                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-2xl reveal delay-100">
                  <Quote className="w-10 h-10 text-gold-500 mb-4" />
                  <p className="font-sans text-gray-600 leading-relaxed mb-6">
                    &quot;Weekend weg van die stad. Pryse in Rand, duidelik. Die huis is stil en die veld is vol.&quot;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold-600 font-bold">Weekend getaway · SA</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-2xl reveal">
                  <Quote className="w-10 h-10 text-gold-500 mb-4" />
                  <p className="font-sans text-gray-600 leading-relaxed mb-6">
                    &quot;Flew JFK to Johannesburg, 2.5 hours to the farm. The kudu we took was exactly what we came for. Logistics and export were handled -no surprises.&quot;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold-600 font-bold">International hunter · USA</p>
                </div>
                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-2xl reveal delay-100">
                  <Quote className="w-10 h-10 text-gold-500 mb-4" />
                  <p className="font-sans text-gray-600 leading-relaxed mb-6">
                    &quot;Malaria-free was a big deal for us. The Waterberg bushveld and the lodge -first-class. Already planning our next trip.&quot;
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold-600 font-bold">Trophy safari · Florida</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Legacy / Impact - The Final CTA */}
      <section
        id="conservation"
        className="py-24 lg:py-32 bg-onyx relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0 reveal">
            <div className="inline-block bg-gold-500 text-onyx px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6">
              Conservation First
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 text-white tracking-tight">
              If It Pays,
              <br />
              It Stays.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-loose mb-6 sm:mb-10 font-light max-w-lg">
              The reality of African conservation is economic. Your visit directly
              funds our Anti-Poaching Units and habitat restoration. The meat from
              your harvest feeds 300 local families monthly.
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

          <div className="md:w-1/3 relative reveal delay-100 w-full md:w-auto">
            <div className="glass-panel-dark p-8 sm:p-12 border border-gold-500/30 rounded-2xl">
              <Quote className="w-8 h-8 text-gold-500 mb-6" />
              <p className="text-white font-serif text-2xl mb-8 leading-normal">
                "I acknowledge that Miwesu is a sanctuary of silence. I respect the
                ethics of the fair chase and the peace of the Iron Mountain."
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                 - The Guardian's Pledge
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
    </Layout>
  )
}

