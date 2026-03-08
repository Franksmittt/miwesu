'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { heroImages } from '@/lib/hero-images'

const defaultBg = heroImages.home

const vibes = [
  {
    label: 'Bachelor Bash',
    tagline: 'Lapa, braai & pool. Epic groups.',
    image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    href: '/activities',
  },
  {
    label: 'Romantic Escape',
    tagline: 'Sunset boma, starry skies.',
    image: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_77108.jpg',
    href: '/activities',
  },
  {
    label: 'Family Eden',
    tagline: 'Pool, trampoline, jungle gym.',
    image: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg',
    href: '/residences',
  },
  {
    label: 'The Oasis',
    tagline: 'Pool, lawn, thatched shade.',
    image: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg',
    href: '/residences',
  },
  {
    label: "Hunter's Brotherhood",
    tagline: 'Trophy, braai, lodge life.',
    image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    href: '/wildlife',
  },
  {
    label: 'City Escape',
    tagline: 'Unplug. Silence. Bushveld.',
    image: heroImages.home,
    href: '/about',
  },
]

export default function HoverTakeover() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-onyx">
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
      {/* Hover takeover layer — cross-fades when a vibe card is hovered */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: activeImage ? 0.65 : 0 }}
        transition={{ duration: 0.5 }}
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

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-onyx via-onyx/50 to-onyx/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold-500 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold block mb-4">
            Design Your Escape
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white">
            Who&apos;s <span className="text-gradient-gold">Eden</span>?
          </h2>
          <p className="font-sans text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Hover to step into your vibe — hunters, families, couples, bachelors, city escapees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {vibes.map((vibe) => (
            <VibeCard
              key={vibe.label}
              vibe={vibe}
              onHoverStart={() => setActiveImage(vibe.image)}
              onHoverEnd={() => setActiveImage(null)}
            />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/book"
            className="inline-flex items-center px-8 py-4 border border-gold-500 text-gold-400 hover:bg-gold-500/10 font-sans text-xs uppercase tracking-widest transition-colors"
          >
            Book your stay
          </Link>
        </div>
      </div>
    </section>
  )
}

function VibeCard({
  vibe,
  onHoverStart,
  onHoverEnd,
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
      transition={{ duration: 0.25 }}
      className="group"
    >
      <Link
        href={vibe.href}
        className="block p-6 sm:p-8 rounded-sm bg-onyx-light/80 border border-white/10 hover:border-gold-500/50 backdrop-blur-sm transition-colors"
      >
        <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold-400 transition-colors">
          {vibe.label}
        </h3>
        <p className="font-sans text-gray-400 text-sm mt-2">{vibe.tagline}</p>
      </Link>
    </motion.div>
  )
}
