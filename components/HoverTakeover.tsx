'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { heroImages } from '@/lib/hero-images'

const defaultBg = heroImages.home

const ONE_UI_EASE = [0.22, 0.25, 0, 1] as const

const vibes = [
  {
    label: 'Bachelor Bash', tagline: 'Lapa, braai & pool. Epic groups.', image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg', href: '/activities', }, {
    label: 'Romantic Escape', tagline: 'Sunset boma, starry skies.', image: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_77108.jpg', href: '/activities', }, {
    label: 'Family Eden', tagline: 'Pool, trampoline, jungle gym.', image: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg', href: '/residences', }, {
    label: 'The Oasis', tagline: 'Pool, lawn, thatched shade.', image: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg', href: '/residences', }, {
    label: "Hunter's Brotherhood", tagline: 'Trophy, braai, lodge life.', image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg', href: '/wildlife', }, {
    label: 'City Escape', tagline: 'Unplug. Silence. Bushveld.', image: heroImages.home, href: '/about', },
]

export default function HoverTakeover() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-onyx border-t border-white/5">
      {/* Default background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={defaultBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority={false}
        />
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeImage ? 0.65 : 0 }}
        transition={{ duration: 0.5, ease: ONE_UI_EASE }}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-onyx/40 via-onyx/50 to-onyx" />

      {/* Viewing Area: top 1/3, headline, generous whitespace */}
      <div className="relative z-10 flex min-h-[33.333vh] flex-col justify-end pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="text-gold-500 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-bold block mb-4 font-sans">
            Design Your Escape
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
            Who&apos;s <span className="text-gradient-gold">Eden</span>?
          </h2>
          <p className="font-sans text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base tracking-wide">
            Hover to step into your vibe.
            <br />
            Hunters. Families. Couples. Bachelors. City escapees.
          </p>
        </div>
      </div>

      {/* Interaction Area: bottom 2/3, Bento grid, 24px gutters */}
      <div className="relative z-10 flex flex-1 items-start justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vibes.map((vibe) => (
              <VibeCard
                key={vibe.label}
                vibe={vibe}
                onHoverStart={() => setActiveImage(vibe.image)}
                onHoverEnd={() => setActiveImage(null)}
              />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/book"
              className="squircle inline-flex items-center px-8 py-4 border border-gold-500 text-gold-400 hover:bg-gold-500/10 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ease-one-ui"
            >
              Book your stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function VibeCard({
  vibe, onHoverStart, onHoverEnd,
}: {
  vibe: (typeof vibes)[0]
  onHoverStart: () => void
  onHoverEnd: () => void
}) {
  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.22, 0.25, 0, 1] }}
      className="group"
    >
      <Link
        href={vibe.href}
        className="card-rim-light block overflow-hidden"
      >
        <div className="rounded-[1.65rem] bg-onyx-light/85 backdrop-blur-sm p-6 sm:p-8 border border-white/5 group-hover:border-transparent transition-colors duration-300 ease-one-ui">
          <h3 className="font-serif text-xl sm:text-2xl text-white tracking-tight group-hover:text-gold-400 transition-colors duration-300 ease-one-ui">
            {vibe.label}
          </h3>
          <p className="font-sans text-gray-400 text-sm mt-2 tracking-wide">
            {vibe.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
