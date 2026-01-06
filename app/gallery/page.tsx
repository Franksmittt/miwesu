'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { X } from 'lucide-react'

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

  const galleryImages = [
    {
      src: '/images/home-hero.jpg',
      category: 'Landscape',
      title: 'Makoppa Sunset',
      description: 'The granite koppies at golden hour',
    },
    {
      src: '/images/home-species-kudu.jpg',
      category: 'Wildlife',
      title: 'Greater Kudu',
      description: 'The Grey Ghost of the thickets',
    },
    {
      src: '/images/residences-homestead-main.jpg',
      category: 'Accommodation',
      title: 'The Homestead',
      description: 'Luxury 10-sleeper residence',
    },
    {
      src: '/images/residences-stone-villa-main.jpg',
      category: 'Accommodation',
      title: 'The Stone Villa',
      description: 'Intimate 4-sleeper sanctuary',
    },
    {
      src: '/images/home-species-wildebeest.jpg',
      category: 'Wildlife',
      title: 'Blue Wildebeest',
      description: 'Thriving on sweet grazing lawns',
    },
    {
      src: '/images/home-species-impala.jpg',
      category: 'Wildlife',
      title: 'Impala',
      description: 'The athlete of the bushveld',
    },
    {
      src: '/images/home-species-gemsbok.jpg',
      category: 'Wildlife',
      title: 'Gemsbok',
      description: 'Kalahari transition zone specialist',
    },
    {
      src: '/images/home-species-warthog.jpg',
      category: 'Wildlife',
      title: 'Warthog',
      description: 'Character and charm at waterholes',
    },
    {
      src: '/images/home-origins-main.jpg',
      category: 'Landscape',
      title: 'Leadwood Forest',
      description: 'Ancient trees of the Makoppa',
    },
    {
      src: '/images/home-origins-soil.jpg',
      category: 'Landscape',
      title: 'Arid Sweet Bushveld',
      description: 'The nutrient-rich heartland',
    },
    {
      src: '/images/about-dust-road.jpg',
      category: 'Landscape',
      title: 'D1432 Road',
      description: 'The journey to Miwesu',
    },
    {
      src: '/images/wildlife-kudu-featured.jpg',
      category: 'Wildlife',
      title: 'Kudu Bull',
      description: 'Peak condition in Sweetveld',
    },
    {
      src: '/images/residences-homestead-kitchen.jpg',
      category: 'Accommodation',
      title: 'Chef\'s Kitchen',
      description: 'Industrial appliances and luxury',
    },
    {
      src: '/images/residences-homestead-living.jpg',
      category: 'Accommodation',
      title: 'Living Spaces',
      description: 'Bespoke luxury interiors',
    },
    {
      src: '/images/residences-homestead-boma.jpg',
      category: 'Accommodation',
      title: 'Private Boma',
      description: 'Evening fires under African stars',
    },
  ]

  const categories = ['All', 'Landscape', 'Wildlife', 'Accommodation']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/gallery-hero.jpg"
              alt="Gallery"
              fill
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
        <section className="py-32 bg-onyx">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto leading-loose">
                Explore the beauty of MIWESU GAME FARM through our visual journey. From the ancient granite koppies to the wildlife that calls the Makoppa home, every image tells a story of conservation, luxury, and the African bushveld.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative h-64 sm:h-80 overflow-hidden cursor-pointer reveal"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.title || `Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-serif text-lg mb-1">{image.title || image.category}</h4>
                      <p className="text-gray-300 text-xs">{image.description || ''}</p>
                      <span className="text-gold-400 text-xs uppercase tracking-widest mt-2 block">
                        {image.category}
                      </span>
                    </div>
                  </div>
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

