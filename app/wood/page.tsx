'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import WoodOrderModal from '@/components/WoodOrderModal'
import { Flame, Leaf, Package, ArrowRight, Zap, ShoppingBag } from 'lucide-react'
import { WOOD_PRODUCTS, type WoodProduct } from '@/lib/wood-products'

export default function WoodPage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [orderModalProduct, setOrderModalProduct] = useState<WoodProduct | null>(null)

  const openOrderModal = (product: WoodProduct | null) => {
    setOrderModalProduct(product)
    setOrderModalOpen(true)
  }

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
        {/* Hero */}
        <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg"
              alt="MIWESU Game Farm wood and thermal fuel from the Makoppa district"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
              From the Farm
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 leading-none">
              Wood & <span className="text-gradient-gold">Thermal</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Engineering grade fuel. Gauteng delivery. Order by enquiry -no checkout online.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="py-10 md:py-14 bg-onyx text-white border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="reveal text-center p-6 border border-white/10 rounded-xl">
                <Zap className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <div className="font-serif text-2xl md:text-3xl text-gold-400 mb-1">980°C</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Peak Thermal</div>
              </div>
              <div className="reveal text-center p-6 border border-white/10 rounded-xl">
                <Leaf className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <div className="font-serif text-2xl md:text-3xl text-gold-400 mb-1">11%</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Moisture Verified</div>
              </div>
              <div className="reveal text-center p-6 border border-white/10 rounded-xl">
                <Flame className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <div className="font-serif text-2xl md:text-3xl text-gold-400 mb-1">0%</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Chemical Additives</div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop: product grid */}
        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-onyx mb-2 reveal">
                  Shop thermal wood
                </h2>
                <p className="text-gray-600 reveal">
                  Prices and MOQs as listed. Enquire to order -Gauteng delivery, COD on inspection.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {WOOD_PRODUCTS.map((product, i) => (
                <article
                  key={product.id}
                  className="reveal group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-gold-200 transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-white bg-onyx/80 backdrop-blur px-2 py-1 rounded">
                        {product.weight}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-onyx mb-0.5">
                      {product.name}
                      {product.subtitle && (
                        <span className="text-gray-500 font-sans text-sm font-normal block">{product.subtitle}</span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 flex-1">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-sans text-2xl font-semibold text-onyx">
                          R{product.price.toFixed(2)}
                        </span>
                        <span className="text-gray-500 text-sm">per {product.unitLabel}</span>
                      </div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">
                        MOQ: {product.moq} bags
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openOrderModal(product)}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-onyx text-white font-sans text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-onyx/90 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Order
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-onyx text-white">
          <div className="max-w-3xl mx-auto px-6 text-center reveal">
            <Package className="w-14 h-14 text-gold-500 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Order thermal wood
            </h2>
            <p className="text-gray-400 mb-8">
              Gauteng delivery. Inspect on arrival, pay on delivery (COD). No online checkout -enquire above or use the link below.
            </p>
            <button
              type="button"
              onClick={() => openOrderModal(null)}
              className="inline-flex items-center px-8 py-4 bg-gold-500 text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-gold-400 transition-colors rounded-lg"
            >
              Secure allocation (Gauteng) <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <p className="text-gray-400 text-sm mt-6">
              Or order via WhatsApp:{' '}
              <a href="https://wa.me/27727172572?text=Hi%2C%20I%27d%20like%20to%20order%20braai%20wood%20from%20Miwesu." target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline font-medium">
                +27 72 717 2572
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Bulk or other regions: <a href="mailto:info@miwesu.co.za" className="text-gold-400 hover:underline">info@miwesu.co.za</a>
            </p>
          </div>
        </section>

        <WoodOrderModal
          isOpen={orderModalOpen}
          onClose={() => setOrderModalOpen(false)}
          preselectedProduct={orderModalProduct}
        />
      </main>
    </Layout>
  )
}
