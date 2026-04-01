'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { ZoomIn, ZoomOut, X } from 'lucide-react'
import type { ResidenceFacility } from '@/lib/residences-data'

const ZOOM_MIN = 1
const ZOOM_MAX = 3
const ZOOM_STEP = 0.25

function FacilityThumb({
  facility,
  sizes,
  onOpen,
}: {
  facility: ResidenceFacility
  sizes: string
  onOpen: (facility: ResidenceFacility, resolvedSrc: string) => void
}) {
  const [src, setSrc] = useState(facility.imagePath)
  useEffect(() => {
    setSrc(facility.imagePath)
  }, [facility.imagePath])

  return (
    <button
      type="button"
      onClick={() => onOpen(facility, src)}
      className="bg-onyx-light border border-white/5 overflow-hidden reveal group text-left w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-onyx"
      aria-label={`Open larger view: ${facility.label}`}
    >
      <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
        <Image
          src={src}
          alt={facility.label}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-100"
          onError={() => {
            if (facility.fallbackImagePath && src === facility.imagePath) {
              setSrc(facility.fallbackImagePath)
            }
          }}
        />
      </div>
      <div className="p-4 sm:p-5 border-t border-white/5">
        <span className="font-serif text-white text-sm sm:text-base">{facility.label}</span>
      </div>
    </button>
  )
}

function FacilityLightbox({
  facility,
  initialSrc,
  onClose,
}: {
  facility: ResidenceFacility
  initialSrc: string
  onClose: () => void
}) {
  const [src, setSrc] = useState(initialSrc)
  const [zoom, setZoom] = useState(1)
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null)

  useEffect(() => {
    setSrc(initialSrc)
    setZoom(1)
    setNatural(null)
  }, [initialSrc, facility.id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  const onImgError = useCallback(() => {
    if (facility.fallbackImagePath && src === facility.imagePath) {
      setSrc(facility.fallbackImagePath)
    }
  }, [facility.fallbackImagePath, facility.imagePath, src])

  const maxBaseW = typeof window !== 'undefined' ? Math.min(window.innerWidth * 0.92, 1400) : 1400
  const maxBaseH = typeof window !== 'undefined' ? window.innerHeight * 0.62 : 620

  let baseW = 640
  let baseH = 480
  if (natural && natural.w > 0 && natural.h > 0) {
    const r = natural.w / natural.h
    baseW = Math.min(natural.w, maxBaseW, maxBaseH * r)
    baseH = baseW / r
    if (baseH > maxBaseH) {
      baseH = maxBaseH
      baseW = baseH * r
    }
  }

  const zw = baseW * zoom
  const zh = baseH * zoom

  const bumpZoom = (delta: number) => {
    setZoom((z) => {
      const next = Math.round((z + delta) * 100) / 100
      return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, next))
    })
  }

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Enlarged image: ${facility.label}`}
    >
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-20">
        <div className="flex items-center gap-1 rounded-sm border border-white/15 bg-onyx-light/90 px-1 py-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              bumpZoom(-ZOOM_STEP)
            }}
            disabled={zoom <= ZOOM_MIN}
            className="p-2 text-white hover:text-gold-400 disabled:opacity-30 disabled:hover:text-white transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-gray-400 text-xs tabular-nums w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              bumpZoom(ZOOM_STEP)
            }}
            disabled={zoom >= ZOOM_MAX}
            className="p-2 text-white hover:text-gold-400 disabled:opacity-30 disabled:hover:text-white transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
        </div>
        <button
          type="button"
          className="p-2 text-white hover:text-gold-500 transition-colors rounded-sm border border-white/15 bg-onyx-light/90"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div
        className="flex flex-col items-center w-full max-w-[min(100vw-2rem,1400px)] flex-1 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-auto max-h-[calc(100vh-10rem)] w-full touch-pan-x touch-pan-y rounded-sm border border-white/10 bg-black/40">
          <div className="flex min-h-[min(320px,calc(100vh-10rem))] w-full items-center justify-center p-3 sm:p-5">
            <div
              style={
                natural
                  ? { width: zw, height: zh, minWidth: zw, minHeight: zh }
                  : { width: 'min(90vw, 800px)', minHeight: '200px' }
              }
              className="relative shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={facility.label}
                onLoad={(e) => {
                  const t = e.currentTarget
                  setNatural({ w: t.naturalWidth, h: t.naturalHeight })
                }}
                onError={onImgError}
                className={
                  natural
                    ? 'absolute inset-0 h-full w-full object-contain'
                    : 'block max-h-[65vh] max-w-full w-auto h-auto object-contain mx-auto'
                }
              />
            </div>
          </div>
        </div>
        <p className="text-white font-serif text-sm sm:text-base mt-4 text-center px-2">{facility.label}</p>
        <p className="text-gray-500 text-[10px] sm:text-xs mt-2 text-center">Scroll to pan when zoomed · Esc to close</p>
      </div>
    </div>
  )
}

export function ResidenceFacilitiesGrid({ facilities }: { facilities: ResidenceFacility[] }) {
  const [lightbox, setLightbox] = useState<{
    facility: ResidenceFacility
    src: string
  } | null>(null)

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {facilities.map((facility) => (
          <FacilityThumb
            key={facility.id}
            facility={facility}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onOpen={(f, resolvedSrc) => setLightbox({ facility: f, src: resolvedSrc })}
          />
        ))}
      </div>

      {lightbox && (
        <FacilityLightbox
          facility={lightbox.facility}
          initialSrc={lightbox.src}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
