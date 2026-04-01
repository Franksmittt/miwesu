'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ChefHat, Flame, Layout as LayoutIcon, TreePine, Activity, Waves } from 'lucide-react'
import { heroImages } from '@/lib/hero-images'
import { lodgeSummary, mainLodgeHouse, secondHouse } from '@/lib/residences-data'
import { ResidenceFlagshipCard } from '@/components/residences/ResidenceFlagshipCard'

/** Species card images (same as wildlife page) for the 14+ Species sliding bento */
const SPECIES_CARD_IMAGES = [
  '/images/greater-kudu_card.png',
  '/images/blue-wildebeest_card.png',
  '/images/impala_card.png',
  '/images/gemsbok_card.png',
  '/images/warthog_card.png',
  '/images/blesbok_card.png',
  '/images/bushbuck_card.png',
  '/images/cape-buffalo_card.png',
  '/images/dapple-impala_card.png',
  '/images/golden-wildebeest_card.png',
  '/images/springbok_card.png',
  '/images/red-hartebeest_card.png',
  '/images/Lechwe_card.png',
  '/images/livingstone-eland_card.png',
]

export default function ResidencesPageClient() {
  const [speciesSlideIndex, setSpeciesSlideIndex] = useState(0)
  const [speciesFade, setSpeciesFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeciesFade(false)
      setTimeout(() => {
        setSpeciesSlideIndex((i) => (i + 1) % SPECIES_CARD_IMAGES.length)
        setSpeciesFade(true)
      }, 500)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx text-marble pb-[10vh]">
        {/* 1. Hero – breadcrumb and title (no background image) */}
        <section className="w-full flex flex-col justify-center items-center text-center py-16 md:py-24 bg-onyx">
          <div className="max-w-[1000px] px-4 md:px-[4vw]">
            <div className="inline-flex gap-4 text-[#86868b] text-sm font-medium tracking-[0.2em] uppercase mb-8 border border-white/10 py-2 px-6 rounded-full">
              Sanctuary <span className="text-marble">/</span> Residences
            </div>
            <h1 className="sr-only">Residences at MIWESU</h1>
            <p className="font-sans text-[1.05rem] sm:text-[1.15rem] font-light text-[#d1d1d1] leading-relaxed max-w-[800px] mx-auto">
              Discover absolute isolation. Unyielding luxury designed to exist seamlessly within the 2.5-billion-year-old
              Makoppa Dome.
            </p>
          </div>
        </section>

        {/* 2 & 3. Flagship cards, shared component with home (max-w-6xl) */}
        <div className="mx-auto mb-[4vh] grid w-[96vw] max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <ResidenceFlagshipCard
            titleHeading="h2"
            priority
            imageSrc="/images/residences-homestead-main.jpg"
            imageAlt="Hunter's House at MIWESU"
            eyebrow="Monumental Scale"
            title="THE HOMESTEAD"
            description="Designed for absolute immersion in the Sweetveld. Featuring expansive entertainment areas, a traditional boma, and seamless integration with the surrounding wildlife."
            exploreHref="/residences/homestead"
            stats={[
              { value: mainLodgeHouse.sleepers, label: 'Sleepers' },
              { value: lodgeSummary.mainHouse.bedrooms, label: 'Bedrooms' },
              { value: 'Boma', label: 'Fire Pit' },
            ]}
          />
          <ResidenceFlagshipCard
            titleHeading="h2"
            imageSrc="/images/residences-second-house-main.jpg"
            imageAlt="Rooibok Kraal at MIWESU"
            eyebrow="Intimate Seclusion"
            title="THE STONE VILLA"
            description="Carved from the earth. Elevated to provide sweeping views of the ancient canopy, with an outdoor deck and immediate access to the wild."
            exploreHref="/residences/stone-villa"
            stats={[
              { value: secondHouse.sleepers, label: 'Sleepers' },
              { value: 2, label: 'En-Suites' },
              { value: 'Deck', label: 'Outdoor deck' },
            ]}
          />
        </div>

        {/* 4. Bespoke Amenities – 6 boxes, rounded edges */}
        <section className="w-[96vw] max-w-6xl mx-auto my-[10vh]">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold font-sans mb-4 block">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-tight">
              Bespoke Amenities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <ChefHat className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Kitchen</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">
                Full kitchen in main lodge and Rooibok Kraal.
              </p>
            </div>
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <Flame className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Boma & Braai</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">
                Boma and braai at main lodge; braai under the trees; outdoor braai at Rooibok Kraal.
              </p>
            </div>
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <LayoutIcon className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Lapa</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">Pool table and darts at main lodge lapa.</p>
            </div>
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <TreePine className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Braai under the trees</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">Additional braai area at main lodge.</p>
            </div>
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <Activity className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Trampoline & Jungle Gym</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">Family-friendly at main lodge.</p>
            </div>
            <div className="bg-onyx-light border border-white/[0.05] rounded-[32px] p-8 md:p-10 text-center transition-all duration-300 hover:bg-[#1a1a1c] hover:border-gold-500/20">
              <Waves className="w-10 h-10 text-gold-500 mx-auto mb-4" aria-hidden />
              <h3 className="font-serif text-lg font-normal text-white mb-2">Swimming pool with slide</h3>
              <p className="text-[#a1a1a6] text-sm font-light leading-relaxed">
                At main lodge; Rooibok Kraal is near the pool.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Bento – Beyond the Walls */}
        <section className="w-[96vw] max-w-6xl mx-auto mt-[5vh] mb-[10vh]">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-xs tracking-[0.2em] uppercase font-bold font-sans mb-4 block">
              The Ecosystem
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white tracking-tight">
              Beyond the Walls
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,350px)] md:grid-rows-[350px_350px_350px]">
            <Link
              href="/wildlife"
              className="relative rounded-[40px] overflow-hidden border border-white/[0.08] flex flex-col justify-end p-8 md:p-10 group min-h-[280px] md:col-span-2 md:row-span-2"
            >
              <div
                className="absolute inset-0 transition-opacity duration-500 ease-out"
                style={{ opacity: speciesFade ? 1 : 0 }}
              >
                <Image
                  src={SPECIES_CARD_IMAGES[speciesSlideIndex]}
                  alt="Wildlife at MIWESU"
                  fill
                  className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.5) 50%, transparent 75%)',
                }}
              />
              <div className="relative z-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_2px_12px_rgba(0,0,0,0.6)]">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-400 mb-2 font-normal tracking-tight">
                  14+ Species
                </h3>
                <p className="font-sans text-white/95 text-base md:text-lg font-light leading-relaxed">
                  Encounter unmatched biodiversity. From majestic herds to elusive quarry, the sanctuary is alive right
                  outside your door.
                </p>
              </div>
            </Link>
            <Link
              href="/residences"
              className="relative rounded-[40px] overflow-hidden border border-white/[0.08] flex flex-col justify-end p-6 md:p-8 group min-h-[240px] md:col-span-1 md:row-span-2"
            >
              <Image
                src={heroImages.residencesBentoPrivacy}
                alt="Rooibok Kraal, private residence and Sweetveld at MIWESU"
                fill
                className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.5) 50%, transparent 75%)',
                }}
              />
              <div className="relative z-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_2px_12px_rgba(0,0,0,0.6)]">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-400 mb-2 font-normal tracking-tight">
                  Radical Privacy
                </h3>
                <p className="font-sans text-white/95 text-base md:text-lg font-light leading-relaxed">
                  No other vehicles. No cross-traffic. Just your private group and the Sweetveld.
                </p>
              </div>
            </Link>
            <Link
              href="/conservation"
              className="relative rounded-[40px] overflow-hidden border border-white/[0.08] flex flex-col justify-end p-6 md:p-8 group min-h-[240px] md:col-span-1 md:row-span-1"
            >
              <Image
                src={heroImages.residencesBentoHarvest}
                alt="Ethical conservation harvest, tracking game in the Sweetveld at MIWESU"
                fill
                className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.5) 50%, transparent 75%)',
                }}
              />
              <div className="relative z-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_2px_12px_rgba(0,0,0,0.6)]">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-400 mb-2 font-normal tracking-tight">
                  Ethical Harvest
                </h3>
                <p className="font-sans text-white/95 text-base md:text-lg font-light leading-relaxed">
                  Rooted in respect for the land and meticulous conservation.
                </p>
              </div>
            </Link>
            <Link
              href="/about"
              className="relative rounded-[40px] overflow-hidden border border-white/[0.08] flex flex-col justify-end p-6 md:p-8 group min-h-[240px] md:col-span-2 md:row-span-1"
            >
              <Image
                src={heroImages.residencesBentoDome}
                alt="Makoppa region bushveld and lodge, ancient dome terrain"
                fill
                className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.5) 50%, transparent 75%)',
                }}
              />
              <div className="relative z-10 [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_2px_12px_rgba(0,0,0,0.6)]">
                <h3 className="font-serif text-2xl md:text-3xl text-gold-400 mb-2 font-normal tracking-tight">
                  The Ancient Dome
                </h3>
                <p className="font-sans text-white/95 text-base md:text-lg font-light leading-relaxed">
                  A geological masterpiece 2.5 billion years in the making. Terrain that commands respect and offers
                  unparalleled tracking.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="w-[96vw] max-w-6xl mx-auto mt-[10vh] rounded-[40px] overflow-hidden border border-gold-500/15 bg-gradient-to-br from-[#0a0a0a] to-onyx p-8 md:p-[6vw] text-center">
          <span className="text-gold-500 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 block">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 tracking-tight bg-gradient-to-r from-gold-300 to-gold-400 bg-clip-text text-transparent">
            Experience Absolute Privacy
          </h2>
          <p className="font-sans text-white/90 text-base md:text-lg font-light max-w-[640px] mx-auto mb-10 leading-relaxed">
            Both residences offer exclusive use, ensuring complete privacy and autonomy during your stay. Whether you&apos;re
            planning a family hunting safari or a corporate retreat, we provide the perfect base for your Makoppa adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-gold-400 text-onyx px-10 py-4 rounded-full font-medium uppercase tracking-widest text-sm hover:bg-marble hover:scale-[1.02] transition-all duration-300 no-underline"
            >
              Request Availability
            </Link>
            <Link
              href="/rates"
              className="inline-block border-2 border-gold-400 text-gold-400 px-10 py-4 rounded-full font-medium uppercase tracking-widest text-sm hover:bg-gold-400 hover:text-onyx transition-all duration-300 no-underline"
            >
              View Rates
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}
