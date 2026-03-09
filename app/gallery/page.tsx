'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { X } from 'lucide-react'
import { galleryAccommodationImages } from '@/lib/residences-data'
import { authenticGalleryItems } from '@/lib/facebook-gallery'

type GalleryCategory = 'Landscape' | 'Wildlife' | 'Accommodation'

type GalleryImage = {
  src: string
  category: GalleryCategory
  title?: string
  description?: string
}

/** Fisher–Yates shuffle; returns new array so we can keep referential stability in useMemo */
function shuffle<T>(array: T[]): T[] {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/** Map Facebook "Lodge" to "Accommodation" for unified gallery filter */
const facebookAsGallery = authenticGalleryItems.map(
  (item): GalleryImage => ({
    src: item.src,
    category: item.category === 'Lodge' ? 'Accommodation' : item.category,
    title: item.title,
    description: '',
  })
)

const landscapeAndWildlifeImages = [
  { src: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', category: 'Landscape' as const, title: 'Lodge patio and braai', description: 'Braai under thatch with waterhole and bushveld' },
  { src: '/images/kudu-bull-portrait-01.png', category: 'Wildlife' as const, title: 'Greater Kudu', description: 'The Grey Ghost of the thickets' },
  { src: '/images/home-species-wildebeest.jpg', category: 'Wildlife' as const, title: 'Blue Wildebeest', description: 'Thriving on sweet grazing lawns' },
  { src: '/images/impala-ram-portrait-01.png', category: 'Wildlife' as const, title: 'Impala', description: 'The athlete of the bushveld' },
  { src: '/images/gemsbok-portrait-01.png', category: 'Wildlife' as const, title: 'Gemsbok', description: 'Kalahari transition zone specialist' },
  { src: '/images/home-species-warthog.jpg', category: 'Wildlife' as const, title: 'Warthog', description: 'Character and charm at waterholes' },
  { src: '/images/home-origins-main.jpg', category: 'Landscape' as const, title: 'Leadwood Forest', description: 'Ancient trees of the Makoppa' },
  { src: '/images/home-origins-soil.jpg', category: 'Landscape' as const, title: 'Arid Sweet Bushveld', description: 'The nutrient-rich heartland' },
  { src: '/images/about-dust-road.jpg', category: 'Landscape' as const, title: 'D1432 Road', description: 'The journey to Miwesu' },
  { src: '/images/kudu-bull-standing-01.png', category: 'Wildlife' as const, title: 'Kudu Bull', description: 'Peak condition in Sweetveld' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

  const galleryImages = useMemo(
    () =>
      shuffle([
        ...landscapeAndWildlifeImages,
        ...galleryAccommodationImages,
        ...facebookAsGallery,
      ] as GalleryImage[]),
    []
  )

  const categories = ['All', 'Landscape', 'Wildlife', 'Accommodation']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
              alt="Gallery - MIWESU Game Farm landscapes, wildlife and luxury accommodation photography Makoppa district"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              Visual Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              The <span className="text-gradient-gold">Gallery</span>
            </h1>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sm:py-12 bg-onyx border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all ${
                    activeCategory === category
                      ? 'bg-gold-500 text-onyx'
                      : 'bg-onyx-light text-white hover:text-gold-500 border border-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 sm:py-24 lg:py-32 bg-onyx">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto leading-loose">
                Private access. No crowds, no queues—just the Iron Eden. These moments are from the reserve: golden-hour savanna, thatched bomas under the stars, and the species of the Makoppa in their Sweetveld home. Every frame is real—captured on the farm, not staged for brochures.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
              {filteredImages.map((image) => (
                <div
                  key={image.src}
                  className="group relative h-64 sm:h-80 overflow-hidden cursor-pointer reveal"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.title || `Gallery image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Featured Collections */}
            <div className="space-y-16 mb-20">
              <div className="reveal">
                <h3 className="font-serif text-3xl text-white mb-8 text-center">Featured Collections</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                  <div className="relative h-[300px] sm:h-[400px] group cursor-pointer">
                    <Image
                      src="/images/gallery-wildlife-collection.jpg"
                      alt="Wildlife Collection"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h4 className="font-serif text-2xl text-white mb-2">Wildlife</h4>
                        <p className="text-gray-300 text-sm">The species of the Makoppa district in their natural habitat</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] group cursor-pointer">
                    <Image
                      src="/images/gallery-landscape-collection.jpg"
                      alt="Landscape Collection"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h4 className="font-serif text-2xl text-white mb-2">Landscape</h4>
                        <p className="text-gray-300 text-sm">The ancient granite koppies and Arid Sweet Bushveld</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] group cursor-pointer">
                    <Image
                      src="/images/gallery-accommodation-collection.jpg"
                      alt="Accommodation Collection"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 to-transparent flex items-end">
                      <div className="p-6 w-full">
                        <h4 className="font-serif text-2xl text-white mb-2">Accommodation</h4>
                        <p className="text-gray-300 text-sm">Luxury residences in the heart of the reserve</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-gold-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Full size"
                fill
                sizes="100vw"
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}

