'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Leaf, ArrowLeft } from 'lucide-react'

export default function SweetveldVsSourveldPage() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el, i) => {
        const top = el.getBoundingClientRect().top
        if (top < window.innerHeight - 100) el.classList.add('active')
      })
    }
    window.addEventListener('scroll', reveal)
    reveal()
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        <section className="bg-marble">
          <div className="relative w-full aspect-video sm:aspect-[21/9] max-h-[50vh] overflow-hidden">
            <Image
              src="/images/about-sweetveld-kudu.jpg"
              alt="Kudu in Sweetveld habitat - Makoppa district nutrient-rich grasses"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </section>
        <section className="py-16 md:py-24 bg-marble">
          <div className="max-w-3xl mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center text-gold-600 font-sans text-sm mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Hunter&apos;s Journal
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-onyx mb-6 reveal">
              Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns
            </h1>
            <p className="text-gray-500 text-sm mb-12">MIWESU GAME FARM · Makoppa district, Limpopo</p>

            <div className="prose prose-lg max-w-none font-sans text-gray-600 space-y-6">
              <p className="reveal leading-relaxed">
                South Africa&apos;s hunting and wildlife areas are often described as either <strong className="text-onyx">Sweetveld</strong> or <strong className="text-onyx">Sourveld</strong>. The distinction isn&apos;t just academic -it directly affects the condition of the game you hunt and the quality of the trophies you take home. At MIWESU GAME FARM, we sit in the <strong className="text-onyx">Arid Sweet Bushveld</strong> of the Makoppa district, Thabazimbi, and that placement is central to our trophy quality.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">What Is Sweetveld?</h2>
              <p className="reveal leading-relaxed">
                Sweetveld refers to grassland and bushveld where the dominant grasses retain high nutrient value (protein and minerals) even when dry. Animals can graze or browse year-round and maintain condition. In contrast, Sourveld grasses become fibrous and low in nutrition after the growing season; game in pure Sourveld often loses condition in winter unless they have access to browse or supplementary feed.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">Why It Matters for Trophy Hunting</h2>
              <p className="reveal leading-relaxed">
                Horn and antler growth is nutrient-intensive. Bulls and rams in peak condition -supported by consistent, high-quality forage -develop heavier, more symmetrical horns and better body mass. Our Sweetveld sustains species like kudu, wildebeest, and impala in peak condition year-round, which is why we consistently produce trophies that meet and exceed Rowland Ward and SCI benchmarks. The Makoppa district&apos;s red sandy loam and granite-derived soils, combined with the Arid Sweet Bushveld biome, create an environment where our herds don&apos;t just survive; they thrive.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">The MIWESU Advantage</h2>
              <p className="reveal leading-relaxed">
                We don&apos;t simply &quot;have&quot; Sweetveld -we manage for it. Our ecological census and sustainable harvest model ensure that grazing pressure stays in balance with the carrying capacity of the veld. The result is consistent trophy quality and a hunting experience where the biology of the land works in your favor. When you hunt at MIWESU, you&apos;re hunting in one of Limpopo&apos;s prime Sweetveld areas, and that difference shows in the animals on the ground.
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200 reveal">
              <Link href="/wildlife" className="inline-flex items-center px-6 py-3 bg-onyx text-white font-sans font-medium hover:bg-gold-500 transition-colors">
                Explore Our Species <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
