'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { MapPin, ArrowLeft } from 'lucide-react'

export default function LimpopoVsEasternCapePage() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
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
              src="/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg"
              alt="Plains game in Limpopo bushveld - MIWESU Game Farm Makoppa district"
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
              Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game in South Africa
            </h1>
            <p className="text-gray-500 text-sm mb-12">MIWESU GAME FARM · Makoppa district, Limpopo</p>

            <div className="prose prose-lg max-w-none font-sans text-gray-600 space-y-6">
              <p className="reveal leading-relaxed">
                International hunters choosing South Africa often weigh <strong className="text-onyx">Limpopo</strong> (including the Waterberg and bushveld) against the <strong className="text-onyx">Eastern Cape</strong>. Both offer outstanding plains game hunting, but the terrain, species mix, climate, and logistics differ. Here&apos;s a clear comparison so you can decide where your next safari belongs.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">Limpopo: Bushveld and Sweetveld</h2>
              <p className="reveal leading-relaxed">
                Limpopo is classic African bushveld -rolling hills, thicket, and nutrient-rich Sweetveld in areas like the Makoppa district. Species include kudu, wildebeest, impala, gemsbok, warthog, and Cape buffalo in some areas. The hunting is often spot-and-stalk in varied cover; the landscape is dramatic and the experience feels &quot;wild.&quot; The Waterberg is <strong className="text-onyx">malaria-free</strong>, a major plus for families and travelers who prefer to avoid prophylaxis. MIWESU GAME FARM sits in this belt: Arid Sweet Bushveld, Makoppa, Thabazimbi -prime Limpopo hunting with strong trophy quality and year-round condition.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">Eastern Cape: Open Plains and Diversity</h2>
              <p className="reveal leading-relaxed">
                The Eastern Cape offers more open, grassy plains and a different mix of species -including many of the same plains game plus species like nyala and bushbuck in the thicker riverine areas. It&apos;s also malaria-free and often marketed as &quot;Big Five free&quot; for those focused purely on plains game. Access from Port Elizabeth or East London is straightforward. The feel is more open savanna in many concessions.
              </p>
              <h2 className="font-serif text-2xl text-onyx mt-10 mb-4 reveal">Which Should You Choose?</h2>
              <p className="reveal leading-relaxed">
                If you want classic bushveld, Sweetveld-driven trophy quality, and a malaria-free Waterberg experience with a strong species list and luxury private residences, Limpopo -and the Makoppa district -is hard to beat. If you prefer more open country and a different ecological flavor, the Eastern Cape is an excellent alternative. Many hunters do both over time; for a first South African safari, Limpopo&apos;s combination of accessibility (from Johannesburg), malaria-free status, and iconic bushveld makes it a top choice.
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-200 reveal">
              <Link href="/activities" className="inline-flex items-center px-6 py-3 bg-onyx text-white font-sans font-medium hover:bg-gold-500 transition-colors">
                Explore Our Experiences <ArrowLeft className="w-4 h-4 mr-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
