'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { heroImages } from '@/lib/hero-images'

/** Optional loop: place `public/video/hero-cinematic.mp4` (see public/video/README.md). */
const HERO_VIDEO_SRC = '/video/hero-cinematic.mp4'

export function HomeHero() {
  const [videoActive, setVideoActive] = useState(false)

  const onVideoReady = useCallback(() => {
    setVideoActive(true)
  }, [])

  const onVideoError = useCallback(() => {
    setVideoActive(false)
  }, [])

  return (
    <section
      className="relative min-h-[calc(100svh-4rem)] w-full overflow-hidden bg-onyx"
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative h-full min-h-[calc(100svh-4rem)] w-full">
          <Image
            src={heroImages.home}
            alt="Miwesu Game Farm, Makoppa bushveld and lodge atmosphere"
            fill
            sizes="100vw"
            className={`object-cover object-[center_42%] transition-opacity duration-700 ease-out ${
              videoActive ? 'opacity-0' : 'opacity-100'
            }`}
            priority
          />
          <video
            className={`absolute inset-0 z-[1] h-full w-full object-cover object-[center_42%] transition-opacity duration-700 ${
              videoActive ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            poster={heroImages.home}
            onLoadedData={onVideoReady}
            onError={onVideoError}
            aria-label="Miwesu bushveld, atmospheric loop"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,5,5,0.88) 0%, rgba(8,6,5,0.55) 38%, rgba(12,8,6,0.75) 100%), radial-gradient(ellipse 90% 70% at 50% 45%, rgba(40,18,12,0.25) 0%, transparent 55%)', }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="type-hero-eyebrow-fluid text-gold-400/95">Thabazimbi · Waterberg · Malaria-free</p>
        <h1
          id="home-hero-heading"
          className="type-display-fluid mt-6 text-balance text-white"
          style={{
            textShadow: '0 2px 12px rgba(8,4,2,0.85), 0 12px 40px rgba(5,3,2,0.55)', }}
        >
          Guardians of the Iron Mountain.
        </h1>
        <p className="type-display-fluid mt-4 max-w-3xl text-balance text-[clamp(1.15rem,2.8vw,1.65rem)] font-normal leading-snug tracking-[0.08em] text-white/95">
          Where Conservation Meets Legacy.
        </p>
        <p className="type-lead-fluid mx-auto mt-8 max-w-2xl text-pretty text-gray-200/95">
          A 2.5-billion-year-old private sanctuary. Ethical harvests. Absolute silence.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center border border-gold-500 bg-gold-500/90 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-onyx transition-all duration-200 hover:bg-gold-400"
          >
            Enquire now
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center border border-white/25 bg-white/5 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-200 hover:border-gold-500/50 hover:text-gold-400"
          >
            Conservation investment guide
          </Link>
        </div>
      </div>
    </section>
  )
}
