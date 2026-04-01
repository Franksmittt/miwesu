'use client'

import Image from 'next/image'
import { authenticGalleryItems } from '@/lib/facebook-gallery'

/**
 * Duplicated sequence for seamless CSS marquee (see globals.css animate-footer-marquee).
 */
export function FooterFacebookMarquee() {
  const footerImages = [...authenticGalleryItems, ...authenticGalleryItems]

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20 min-h-[140px] md:min-h-[200px]">
      <div className="flex h-full w-max min-h-[140px] md:min-h-[200px] animate-footer-marquee items-stretch">
        {footerImages.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="relative ml-2 h-[140px] w-[140px] shrink-0 overflow-hidden rounded-lg border border-white/10 first:ml-0 md:ml-4 md:h-[200px] md:w-[200px]"
          >
            <Image
              src={item.src}
              alt={item.title ?? 'MIWESU'}
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
