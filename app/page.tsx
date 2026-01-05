'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { OrganizationSchema, LocalBusinessSchema } from '@/components/StructuredData'
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

export default function Home() {
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
      <main>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-onyx">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home-hero.jpg"
            alt="MIWESU GAME FARM - Makoppa district landscape with dramatic sky, granite koppies, and rolling bushveld"
            fill
            className="object-cover opacity-50 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
        </div>

        <div className="absolute inset-8 md:inset-12 border border-white/5 z-10 pointer-events-none hidden md:block"></div>

        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-12 pb-32">
          <div className="flex flex-col items-center">
            <div className="h-20 w-px bg-gradient-to-b from-transparent via-gold-500 to-transparent mb-8"></div>
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6">
              The Makoppa Sanctuary
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-none tracking-tight">
              Iron <span className="text-gradient-gold">Eden</span>
            </h1>
            <p className="font-sans text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
              A peerless sanctuary of silence.
              <br />
              <span className="text-gold-300">2.5 Billion Years</span> in the making.
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <a
                href="#accommodation"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('accommodation')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="group relative px-10 py-4 bg-transparent border border-gold-500 overflow-hidden rounded-sm transition-all hover:border-white cursor-pointer"
              >
                <div className="absolute inset-0 w-0 bg-gold-500 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gold-500 group-hover:text-onyx text-xs font-bold tracking-[0.2em] uppercase">
                  View Residences
                </span>
              </a>
              <Link
                href="/residences"
                className="group relative px-10 py-4 bg-transparent border border-gold-500 overflow-hidden rounded-sm transition-all hover:border-white"
              >
                <div className="absolute inset-0 w-0 bg-gold-500 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative text-gold-500 group-hover:text-onyx text-xs font-bold tracking-[0.2em] uppercase">
                  View All Residences
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 w-full border-t border-white/5 bg-onyx/90 backdrop-blur-md py-6 hidden md:block z-20">
          <div className="max-w-7xl mx-auto px-6 flex justify-between text-white/50 text-[10px] uppercase tracking-[0.2em] font-sans">
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

      {/* The Estate / Origins */}
      <section
        id="philosophy"
        className="py-32 bg-marble relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-20 reveal">
            <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6">
              The Provenance
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-onyx text-center leading-tight">
              Grounded in <br />
              <span className="text-gradient-gold">Precious Earth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative reveal group">
              <div className="relative h-[600px] w-full overflow-hidden shadow-luxury">
                <Image
                  src="/images/home-origins-main.jpg"
                  alt="Ancient Penge Formation geological rock formation showing 2.5 billion year old iron-rich earth"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 border-8 border-white shadow-2xl hidden md:block z-20">
                <Image
                  src="/images/home-origins-soil.jpg"
                  alt="Red sandy loam soil characteristic of the Makoppa district Sweetveld"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-10 reveal delay-100">
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-8">
                  Miwesu stands within the{' '}
                  <span className="text-onyx font-medium">Makoppa Dome</span>, a
                  geological structure of ancient Swazian granite and gneiss dating back billions of years. This is not merely land; it is a monument to deep time.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-12">
                  Located in the <span className="text-onyx font-medium">Arid Sweet Bushveld</span>, our nutrient-rich grasses sustain game in peak condition year-round. The red sandy loam and granite koppies create a landscape of rare beauty and ecological significance.
                </p>

              <div className="border-l-2 border-gold-500 pl-8 py-2 mb-12">
                <p className="font-serif italic text-2xl text-onyx leading-relaxed">
                  "Luxury is silence."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <span className="block font-serif text-4xl text-onyx mb-2">
                    Sweetveld
                  </span>
                  <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                    Nutrient Rich
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-4xl text-onyx mb-2">
                    Malaria
                  </span>
                  <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                    Free Zone
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residences */}
      <section
        id="accommodation"
        className="py-32 bg-onyx text-white relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
              The Collection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white mt-6">
              Private Residences
            </h2>
            <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Residence Card 1 */}
            <Link
              href="/residences"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal block"
            >
              <div className="h-80 overflow-hidden relative">
                <Image
                  src="/images/home-residence-homestead.jpg"
                  alt="The Homestead - Luxury 10-sleeper private residence at Miwesu Game Reserve"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent"></div>
              </div>
              <div className="p-10 relative">
                <div className="absolute -top-6 right-8 bg-gold-500 text-onyx w-12 h-12 flex items-center justify-center font-serif text-xl font-bold shadow-gold-glow">
                  I
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">
                  The Homestead
                </h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                  The pinnacle of exclusive use. A 10-sleeper manor offering absolute
                  autonomy.
                </p>
                <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest text-gold-400">
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

            {/* Residence Card 2 */}
            <Link
              href="/residences"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal delay-100 block"
            >
              <div className="h-80 overflow-hidden relative">
                <Image
                  src="/images/home-residence-stone-villa.jpg"
                  alt="The Stone Villa - Intimate 4-sleeper luxury accommodation carved into the ridge"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent"></div>
              </div>
              <div className="p-10 relative">
                <div className="absolute -top-6 right-8 bg-white text-onyx w-12 h-12 flex items-center justify-center font-serif text-xl font-bold">
                  II
                </div>
                <h3 className="font-serif text-2xl text-white mb-4">
                  The Stone Villa
                </h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed mb-8">
                  Carved into the ridge. An intimate 4-sleeper sanctuary with
                  panoramic views.
                </p>
                <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest text-gold-400">
                  <span className="flex items-center">
                    <Sun className="w-3 h-3 mr-2" /> Plunge Pool
                  </span>
                  <span className="flex items-center">
                    <Wind className="w-3 h-3 mr-2" /> Deck
                  </span>
                  <span className="flex items-center">
                    <Star className="w-3 h-3 mr-2" /> Telescope
                  </span>
                  <span className="flex items-center">
                    <Coffee className="w-3 h-3 mr-2" /> Nespresso
                  </span>
                </div>
              </div>
            </Link>

            {/* Features Box */}
            <div className="bg-gold-500 p-10 flex flex-col justify-center reveal delay-200 shadow-gold-glow">
              <Gem className="w-12 h-12 text-onyx mb-6" />
              <h3 className="font-serif text-3xl text-onyx mb-6">
                Bespoke Living
              </h3>
              <p className="text-onyx/80 font-sans leading-relaxed mb-8">
                We have reimagined the self-catering model. Expect industrial Smeg
                appliances, Le Creuset cookware, and daily housekeeping that
                operates invisibly.
              </p>
              <Link
                href="/residences"
                className="bg-onyx text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-onyx transition-all w-fit inline-block"
              >
                Explore Amenities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Royal Pursuit */}
      <section id="hunting" className="py-32 bg-onyx text-white relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-5 bg-fixed grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx via-transparent to-onyx"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 reveal">
            <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
              The Portfolio
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mt-6 mb-8">
              Conservation <br />
              <span className="text-gradient-gold">Harvest</span>
            </h2>
            <p className="font-sans text-gray-400 text-sm max-w-2xl mx-auto leading-loose">
              We do not sell animals; we manage an ecosystem. The availability of
              specific quarry is dictated strictly by our annual ecological census.
              Below are the primary species of the Iron Mountain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Species Card 1: Greater Kudu */}
            <Link
              href="/wildlife"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Greater Kudu (Tragelaphus strepsiceros) - Iconic antelope species at Miwesu"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-onyx text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Iconic
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-1">Greater Kudu</h3>
                <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                  Tragelaphus strepsiceros
                </p>
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs font-sans text-gray-400">
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
              href="/wildlife"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal delay-100 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Blue Wildebeest (Connochaetes taurinus) - Tough plains game species"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
              href="/wildlife"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal delay-200 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Impala (Aepyceros melampus) - Classic African antelope species"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
              href="/wildlife"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/home-species-gemsbok.jpg"
                  alt="Gemsbok (Oryx gazella) - Distinct desert antelope with long straight horns"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
              href="/wildlife"
              className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal delay-100 block"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src="/images/home-species-warthog.jpg"
                  alt="Warthog (Phacochoerus africanus) - Opportunistic game species at waterholes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
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
            <div className="group relative bg-gold-500 border border-gold-500 hover:bg-white hover:text-onyx transition-all duration-500 reveal delay-200 flex flex-col justify-center items-center p-8 text-center">
              <Download className="w-12 h-12 mb-6 text-onyx group-hover:text-gold-500 transition-colors" />
              <h3 className="font-serif text-2xl text-onyx mb-4">
                Investment Guide
              </h3>
              <p className="font-sans text-xs text-onyx/70 mb-8 leading-relaxed">
                Download our confidential 2025 Conservation Investment Guide,
                detailing trophy fees, taxidermy logistics, and meat processing.
              </p>
              <button
                onClick={openModal}
                type="button"
                className="px-8 py-3 border border-onyx text-onyx uppercase text-[10px] tracking-widest font-bold group-hover:bg-onyx group-hover:text-white transition-all cursor-pointer"
              >
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle / Observer */}
      <section className="py-32 bg-marble-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold-600 text-xs tracking-[0.4em] uppercase font-bold">
            Beyond the Rifle
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-onyx mt-6 mb-20">
            The Observer's Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-0 shadow-luxury bg-white">
            <Link
              href="/activities"
              className="group relative p-12 border-r border-gray-100 hover:bg-onyx transition-colors duration-500 cursor-pointer block"
            >
              <div className="mb-8">
                <Star className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-onyx group-hover:text-white transition-colors mb-4">
                Celestial Safaris
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                Thabazimbi offers some of the darkest skies in the southern
                hemisphere. Private astronomy sessions available.
              </p>
            </Link>
            <Link
              href="/activities"
              className="group relative p-12 border-r border-gray-100 hover:bg-onyx transition-colors duration-500 cursor-pointer block"
            >
              <div className="mb-8">
                <Heart className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-onyx group-hover:text-white transition-colors mb-4">
                Mobile Wellness
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                In-villa spa treatments using indigenous Marula oils. Relaxation
                without leaving your sanctuary.
              </p>
            </Link>
            <Link
              href="/activities"
              className="group relative p-12 hover:bg-onyx transition-colors duration-500 cursor-pointer block"
            >
              <div className="mb-8">
                <Activity className="w-10 h-10 text-gold-500 mx-auto" />
              </div>
              <h3 className="font-serif text-2xl text-onyx group-hover:text-white transition-colors mb-4">
                Vita-Darting
              </h3>
              <p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                Participate in a non-lethal "Green Hunt." Assist vets with DNA
                collection and micro-chipping.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy / Impact */}
      <section
        id="conservation"
        className="py-32 bg-onyx relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-16 md:mb-0 reveal">
            <div className="inline-block bg-gold-500 text-onyx px-4 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
              Conservation First
            </div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 text-white">
              If It Pays,
              <br />
              It Stays.
            </h2>
            <p className="text-gray-400 text-lg leading-loose mb-10 font-light max-w-lg">
              The reality of African conservation is economic. Your visit directly
              funds our Anti-Poaching Units and habitat restoration. The meat from
              your harvest feeds 300 local families monthly.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="block text-6xl font-serif text-gold-500">100%</span>
                <span className="uppercase text-[10px] tracking-widest text-white mt-2 block">
                  Meat Donated
                </span>
              </div>
              <div>
                <span className="block text-6xl font-serif text-gold-500">24/7</span>
                <span className="uppercase text-[10px] tracking-widest text-white mt-2 block">
                  Anti-Poaching
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 relative reveal delay-100">
            <div className="glass-panel-dark p-12 border border-gold-500/30">
              <Quote className="w-8 h-8 text-gold-500 mb-6" />
              <p className="text-white font-serif text-2xl mb-8 leading-normal">
                "I acknowledge that Miwesu is a sanctuary of silence. I respect the
                ethics of the fair chase and the peace of the Iron Mountain."
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                — The Guardian's Pledge
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
    </Layout>
  )
}

