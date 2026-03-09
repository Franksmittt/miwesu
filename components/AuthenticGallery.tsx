'use client'

import Image from 'next/image'
import { useState } from 'react'
import { authenticGalleryItems, type AuthenticGalleryCategory } from '@/lib/facebook-gallery'
import { X } from 'lucide-react'

const CATEGORY_LABELS: Record<AuthenticGalleryCategory, string> = {
  Landscape: 'Landscape',
  Lodge: 'Lodge',
  Wildlife: 'Wildlife',
}

export default function AuthenticGallery() {
  const [category, setCategory] = useState<AuthenticGalleryCategory | 'All'>('All')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string | undefined>(undefined)

  const filtered =
    category === 'All'
      ? authenticGalleryItems
      : authenticGalleryItems.filter((item) => item.category === category)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-onyx border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-gold-500 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-3">
            Real moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Moments in Eden
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Curated from the field: golden hour, lodge life, and wildlife in their habitat. No filter.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {(['All', 'Landscape', 'Lodge', 'Wildlife'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all rounded-sm ${
                category === c
                  ? 'bg-gold-500 text-onyx'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry grid: CSS columns for true masonry feel */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5"
          style={{ columnFill: 'balance' }}
        >
          {filtered.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="break-inside-avoid mb-4 sm:mb-5"
            >
              <button
                type="button"
                onClick={() => {
                  setLightboxSrc(item.src)
                  setLightboxTitle(item.title)
                }}
                className="block w-full text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx rounded-sm overflow-hidden"
              >
                <div className="liquid-glass-dark rounded-sm overflow-hidden border border-white/10 p-1.5 sm:p-2 transition-all duration-500 group-hover:border-gold-500/30 group-hover:shadow-lg group-hover:shadow-black/20">
                  <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-sm">
                    <Image
                      src={item.src}
                      alt={item.title ?? `Authentic moment ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-gold-400 text-[10px] uppercase tracking-widest">
                        {CATEGORY_LABELS[item.category]}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors z-10 p-2"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 w-full min-h-0">
              <Image
                src={lightboxSrc}
                alt={lightboxTitle ?? 'Full size'}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {lightboxTitle && (
              <p className="text-gray-400 text-sm mt-4 text-center max-w-xl">
                {lightboxTitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
