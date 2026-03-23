'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import {
  MapPin,
  Mountain,
  Leaf,
  Target,
  Users,
  Shield,
  Heart,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
              alt="MIWESU Hunters Lodge - Patio and braai under thatch with waterhole and bushveld"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              About us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              Our <span className="text-gradient-gold">Story</span>
            </h1>
          </div>
        </section>

        {/* Grounded in earth - light */}
        <section className="bg-marble py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch mb-16 sm:mb-24">
              <div className="lg:col-span-5 reveal flex flex-col lg:h-full min-h-0 order-2 lg:order-1">
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1 rounded-2xl overflow-hidden border border-gray-200/80 shadow-luxury">
                  <Image
                    src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
                    alt="Makoppa Dome, bushveld and lodge at MIWESU"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 reveal delay-100 flex flex-col order-1 lg:order-2">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 block">
                  The land
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-onyx mb-6 sm:mb-8">
                  Grounded in precious earth
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-4 sm:mb-6">
                  MIWESU GAME FARM sits inside the <span className="text-onyx font-medium">Makoppa Dome</span>, where ancient Swazian granite and gneiss rise out of deep time. This is not background scenery: it is the stage for everything we do. The red soil underfoot, the heat off the rocks at midday, the cool when the sun drops behind a koppie. That is part of the experience.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-6 sm:mb-8">
                  In the <span className="text-onyx font-medium">Arid Sweet Bushveld</span>, grasses carry nutrition through the year. Granite koppies and sandy loam frame a landscape where game, family, and friends can share the same slow day. Roughly 40 km from Thabazimbi along the D1432, we built a place to linger: braai smoke on the breeze, kids shouting at the pool, and nights so quiet you hear only the bush.
                </p>
                <div className="border-l-2 border-gold-500 pl-6 sm:pl-8 py-2 mt-auto">
                  <p className="font-serif italic text-xl sm:text-2xl text-onyx leading-relaxed">
                    Luxury is silence, together.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats - no dates; place and people */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24">
              <div className="text-center reveal">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-onyx mb-2">Together</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Friends &amp; family
                </span>
              </div>
              <div className="text-center reveal delay-100">
                <Mountain className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-onyx mb-2">Sweetveld</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Nutrient rich
                </span>
              </div>
              <div className="text-center reveal delay-200">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-onyx mb-2">Makoppa</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  District
                </span>
              </div>
              <div className="text-center reveal delay-300">
                <Leaf className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-3 sm:mb-4" />
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl text-onyx mb-2">Malaria</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Free zone
                </span>
              </div>
            </div>

            {/* The Journey - image matches text height */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch mb-0">
              <div className="lg:col-span-7 reveal flex flex-col order-2 lg:order-1">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  The journey
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-onyx mb-6 sm:mb-8">
                  Silence, space, and the spirit of the Makoppa
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-6">
                  To reach MIWESU you leave the tar for the D1432: a dust-red line through Thabazimbi bushveld. Somewhere past the last mine-town hurry, the noise thins out. Turtle Doves, acacia moving in the wind, the smell of dust and sun-warmed grass. That is the real arrival.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-6">
                  This is not a resort strip. It is a pocket where Bushveld and Kalahari flavours meet, where koppies break the horizon and the day belongs to your group. We keep it that way on purpose: room for the hunt, room for the braai, room for cousins on the lawn and old friends around the fire.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light">
                  Why we do what we do is simple: love of this land, respect for the animals we manage, and the people we host. MIWESU exists so those things can share one fence line: ethical sport, family memory, and wild beauty in one place.
                </p>
              </div>
              <div className="lg:col-span-5 reveal delay-100 flex flex-col lg:h-full min-h-0 order-1 lg:order-2">
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1 rounded-2xl overflow-hidden border border-gray-200/80 shadow-luxury">
                  <Image
                    src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
                    alt="Road and bushveld toward MIWESU, Makoppa district"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sweetveld - full-width dark */}
        <section className="w-full bg-onyx text-white py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch">
              <div className="lg:col-span-6 flex flex-col justify-center reveal order-2 lg:order-1">
                <span className="text-gold-500 text-xs tracking-[0.35em] uppercase font-bold mb-6 block">
                  The Sweetveld advantage
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
                  Hunt in the nutrient-rich heartland
                </h2>
                <p className="font-sans text-gray-300 text-base sm:text-lg leading-loose mb-6">
                  Unlike sour mountain veld, our Arid Sweet Bushveld stays nutritious through the year: golden in winter, alive with scent and insect noise when the rains come. Animals carry condition; trophies and venison reflect that.
                </p>
                <p className="font-sans text-gray-300 text-base sm:text-lg leading-loose mb-8">
                  For hunters it means fair-chase opportunity on animals in{' '}
                  <span className="text-gold-400 font-medium">peak shape</span>. For everyone else it means kudu in the thickets, wildebeest on the open bits, and sunsets that do not need a filter.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <span className="block font-serif text-2xl sm:text-3xl text-gold-400 mb-2">Peak</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Condition year-round</span>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <span className="block font-serif text-2xl sm:text-3xl text-gold-400 mb-2">Open</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Landscape &amp; sky</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 flex flex-col lg:h-full min-h-0 reveal delay-100 order-1 lg:order-2">
                <div className="relative w-full flex-1 min-h-[280px] aspect-[4/3] lg:aspect-auto lg:min-h-0 lg:flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/kudu-bull-portrait-01.png"
                    alt="Kudu bull in the Sweetveld at MIWESU"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Family and friends - light */}
        <section className="bg-marble py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-stretch mb-20 sm:mb-28">
              <div className="lg:col-span-5 flex flex-col lg:h-full min-h-0 reveal order-2 md:order-1">
                <div className="relative w-full flex-1 min-h-[280px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-0 lg:flex-1 rounded-2xl overflow-hidden border border-gray-200/80 shadow-luxury">
                  <Image
                    src="/images/residences-main-lodge-boma-braai.jpg"
                    alt="Boma and braai at MIWESU, shared evenings with family and friends"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 reveal delay-100 flex flex-col order-1 md:order-2">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Friends &amp; family
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-onyx mb-6 sm:mb-8">
                  One place, every generation
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-6">
                  MIWESU sits in the sweet spot between serious hunting and a real holiday. While someone is on a stalk, the rest of the group might be at the pool, on a slow drive, or walking the kids through tracks and trees. Evenings belong to the boma: meat on the coals, stories that get louder, then softer, under the stars.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-base sm:text-lg font-light mb-8">
                  We built for groups: space to spread out, corners for quiet, and a rhythm that lets first-timers and old hands share the same week without stepping on each other. Ethical hunting and family time are not opposites here: they share the same fence.
                </p>
                <div className="flex items-center gap-4 text-gold-600 font-sans text-sm uppercase tracking-widest mt-auto">
                  <Shield className="w-5 h-5 shrink-0" />
                  <span>Malaria-free Waterberg</span>
                </div>
              </div>
            </div>

            {/* Trophy quality - same card pattern as home (Conservation Harvest grid) */}
            <div className="mb-12 sm:mb-20 reveal">
              <div className="text-center mb-8 sm:mb-12">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 block">
                  Trophy quality
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-onyx mb-4 sm:mb-6">
                  The Grey Ghost of the thickets
                </h2>
                <p className="font-sans text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-loose px-4">
                  Heavy-horned kudu favour the acacia thickets; wildebeest and gemsbok use the open sweetveld. The land does the heavy lifting. Our job is to manage it honestly.
                </p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl bg-onyx p-4 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link
                    href="/greater-kudu"
                    className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden block"
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
                          <span className="text-white">Min. 53 7/8&quot;</span>
                        </div>
                        <div className="flex justify-between text-xs font-sans text-gray-400">
                          <span className="uppercase tracking-widest">Terrain</span>
                          <span className="text-white">Mountain Thickets</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/wildebeest"
                    className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden block"
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
                      <h3 className="font-serif text-2xl text-white mb-1">Blue Wildebeest</h3>
                      <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                        Connochaetes taurinus
                      </p>
                      <div className="space-y-4 border-t border-white/10 pt-6">
                        <div className="flex justify-between text-xs font-sans text-gray-400">
                          <span className="uppercase tracking-widest">Caliber</span>
                          <span className="text-white">.375 H&amp;H Recommended</span>
                        </div>
                        <div className="flex justify-between text-xs font-sans text-gray-400">
                          <span className="uppercase tracking-widest">Rowland Ward</span>
                          <span className="text-white">Min. 28 1/2&quot; (Width)</span>
                        </div>
                        <div className="flex justify-between text-xs font-sans text-gray-400">
                          <span className="uppercase tracking-widest">Terrain</span>
                          <span className="text-white">Open Plains</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/gemsbok"
                    className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 ease-[cubic-bezier(0.22,0.25,0,1)] rounded-2xl overflow-hidden block sm:col-span-2 lg:col-span-1"
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
                          <span className="text-white">Min. 40&quot;</span>
                        </div>
                        <div className="flex justify-between text-xs font-sans text-gray-400">
                          <span className="uppercase tracking-widest">Terrain</span>
                          <span className="text-white">Open Scrub</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission - full-width dark */}
        <section className="w-full bg-onyx text-white py-16 sm:py-24 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <span className="text-gold-500 text-xs tracking-[0.35em] uppercase font-bold mb-6 block">
              Why MIWESU
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8">
              Land, wildlife, and the people you bring
            </h2>
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-loose mb-8">
              We believe a private reserve should feel like more than a booking. It should smell like woodsmoke and rain, sound like laughter at the lapa, and leave you with stories you repeat for years. Managing game ethically (quotas, habitat, professional processing) is how we pay for that privilege. The point is not paperwork; it is passing this piece of the Makoppa to the next hunt, the next family week, the next quiet sunrise.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="text-center">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-xl sm:text-2xl text-white mb-2">Wildlife</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Respected &amp; managed</span>
              </div>
              <div className="text-center">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-xl sm:text-2xl text-white mb-2">Experience</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Shared &amp; sensory</span>
              </div>
              <div className="text-center">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-xl sm:text-2xl text-white mb-2">Ethics</span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Fair chase &amp; care</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - light */}
        <section className="bg-marble py-16 sm:py-24 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 rounded-2xl reveal">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-onyx mb-6">
                  Experience the Makoppa
                </h2>
                <p className="font-sans text-gray-600 text-base sm:text-lg leading-loose mb-8 max-w-2xl mx-auto">
                  Track a kudu through leadwood shade, watch light leave the koppies, or simply do nothing loud with the people you came with. That is the week we are built for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-onyx text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors shadow-luxury flex items-center justify-center gap-2 rounded-xl"
                  >
                    Get in touch <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/activities"
                    className="border-2 border-onyx text-onyx px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-colors flex items-center justify-center gap-2 rounded-xl"
                  >
                    Explore activities <ArrowRight className="w-4 h-4" />
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
