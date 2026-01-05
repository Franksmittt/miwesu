'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { MapPin, Calendar, Mountain, Leaf, Target, Trophy, Users, Shield, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Miwesu Estate"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              The Provenance
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Our <span className="text-gradient-gold">Story</span>
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
              <div className="reveal">
                <Image
                  src="/images/about-makoppa-dome.jpg"
                  alt="Makoppa Dome - Ancient granite and gneiss formations in the Thabazimbi district"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover shadow-luxury"
                />
              </div>
              <div className="reveal delay-100">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Established 1984
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                  Grounded in Precious Earth
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-6">
                  MIWESU GAME FARM stands within the <span className="text-onyx font-medium">Makoppa Dome</span>, a geological structure of ancient Swazian granite and gneiss dating back billions of years. This is not merely land; it is a monument to deep time.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-8">
                  Located in the <span className="text-onyx font-medium">Arid Sweet Bushveld</span> of the Makoppa district, our nutrient-rich grasses sustain game in peak condition year-round. The red sandy loam and granite koppies create a landscape of rare beauty and ecological significance. Here, roughly 40 kilometers from Thabazimbi on the D1432 road, we have created a sanctuary that honors both the ancient landscape and the luxury of silence.
                </p>
                <div className="border-l-2 border-gold-500 pl-8 py-2">
                  <p className="font-serif italic text-2xl text-onyx leading-relaxed">
                    "Luxury is silence."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center reveal">
                <Calendar className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-4xl text-onyx mb-2">1984</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Established
                </span>
              </div>
              <div className="text-center reveal delay-100">
                <Mountain className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-4xl text-onyx mb-2">Sweetveld</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Nutrient Rich
                </span>
              </div>
              <div className="text-center reveal delay-200">
                <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-4xl text-onyx mb-2">Makoppa</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  District
                </span>
              </div>
              <div className="text-center reveal delay-300">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <span className="block font-serif text-4xl text-onyx mb-2">Malaria</span>
                <span className="text-[10px] text-gold-600 uppercase tracking-widest font-bold">
                  Free Zone
                </span>
              </div>
            </div>

            {/* The Journey Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="reveal">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  The Journey
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                  Silence, Space, and the Spirit of the Makoppa
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-6">
                  To find MIWESU GAME FARM, you must leave the tar road behind. You must travel the D1432, a dust-red ribbon that winds through the heart of the Thabazimbi bushveld. Here, roughly 40 kilometers from the clamor of the mining town, the world slows down.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-6">
                  The noise of industry is replaced by the call of the Turtle Dove and the rustle of the Acacia wind. This is not a resort; it is a return to the source.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light">
                  For generations, the Makoppa district has been a place of convergence. It is where the Bushveld meets the Kalahari, where the riverine forests meet the granite outcrops of the interior. At Miwesu, we honor this convergence.
                </p>
              </div>
              <div className="reveal delay-100">
                <Image
                  src="/images/about-dust-road.jpg"
                  alt="Dust road through the Makoppa district bushveld"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover shadow-luxury"
                />
              </div>
            </div>

            {/* Sweetveld Advantage - Hunter Focus */}
            <div className="bg-gradient-to-br from-onyx to-onyx/90 text-white p-12 md:p-20 mb-20 reveal">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-6 block">
                      The Sweetveld Advantage
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl mb-8">
                      Hunt in the Nutrient-Rich Heartland
                    </h2>
                    <p className="font-sans text-gray-300 text-lg leading-loose mb-6">
                      The Arid Sweet Bushveld of the Makoppa district is a hunter's paradise. Unlike the sour grasses of the mountains, our sweetveld remains nutritious year-round, even when dry and yellow during the winter hunting season.
                    </p>
                    <p className="font-sans text-gray-300 text-lg leading-loose mb-8">
                      This means animals hunted here are in <span className="text-gold-400 font-medium">peak physical condition</span>—with higher body mass, superior trophy quality, and better meat quality than those in nutrient-poor areas. The Sweetveld advantage is real, and it shows in every harvest.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-3xl text-gold-400 mb-2">Peak</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Condition Year-Round</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-3xl text-gold-400 mb-2">Superior</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Trophy Quality</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/about-sweetveld-kudu.jpg"
                      alt="Kudu bull in the Sweetveld - peak condition"
                      width={800}
                      height={600}
                      className="w-full h-[500px] object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Family Hunting Experience */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="reveal order-2 md:order-1">
                <Image
                  src="/images/about-family-experience.jpg"
                  alt="Family-friendly hunting experience at Miwesu"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover shadow-luxury"
                />
              </div>
              <div className="reveal delay-100 order-1 md:order-2">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Family Hunting
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                  Where Tradition Meets Family Time
                </h2>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-6">
                  MIWESU GAME FARM occupies the lucrative middle ground: The Family Hunting Destination. While Dad tracks a Kudu bull through the Leadwood forests, the family can relax by the pool, take guided nature walks, or simply watch the sunset paint the granite koppies in shades of fire and gold.
                </p>
                <p className="font-sans text-gray-600 leading-loose text-lg font-light mb-8">
                  We offer a sanctuary where the traditions of ethical hunting coexist with the joy of a family holiday. Safety zones, enclosed gardens, and family-friendly amenities ensure everyone can enjoy the experience.
                </p>
                <div className="flex items-center gap-4 text-gold-600 font-sans text-sm uppercase tracking-widest">
                  <Shield className="w-5 h-5" />
                  <span>Malaria-Free Zone</span>
                </div>
              </div>
            </div>

            {/* Trophy Quality Section */}
            <div className="mb-20 reveal">
              <div className="text-center mb-12">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Trophy Quality
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  The Grey Ghost of the Thickets
                </h2>
                <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto leading-loose">
                  The Makoppa area is famous for its heavy-horned Kudu bulls which thrive in the thick Acacia thickets. Our Sweetveld sustains game in peak condition, resulting in exceptional trophy quality.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/about-trophy-kudu.jpg"
                    alt="Greater Kudu bull - trophy quality"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">Greater Kudu</h3>
                    <p className="text-gray-300 text-sm">The Grey Ghost of the thickets</p>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/about-trophy-wildebeest.jpg"
                    alt="Blue Wildebeest in Sweetveld"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">Blue Wildebeest</h3>
                    <p className="text-gray-300 text-sm">Thrives on sweet grazing lawns</p>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/about-trophy-gemsbok.jpg"
                    alt="Gemsbok in Arid Sweet Bushveld"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h3 className="font-serif text-2xl text-white mb-2">Gemsbok</h3>
                    <p className="text-gray-300 text-sm">Kalahari transition zone specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-onyx text-white p-12 md:p-20 reveal mb-20">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-6 block">
                  Our Mission
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-8">
                  Conservation Through Utilization
                </h2>
                <p className="font-sans text-gray-300 text-lg leading-loose mb-8">
                  We believe that the future of African wildlife lies in making conservation economically viable. Every guest who visits Miwesu directly contributes to our anti-poaching efforts, habitat restoration, and community support programs.
                </p>
                <p className="font-sans text-gray-300 text-lg leading-loose mb-12">
                  The meat from every harvest feeds 300 local families monthly. Our 24/7 anti-poaching units protect not just our reserve, but the entire ecosystem. This is conservation that pays for itself—ensuring that the Iron Mountain remains a sanctuary for generations to come.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <span className="block font-serif text-3xl text-white mb-2">300</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Families Fed Monthly</span>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <span className="block font-serif text-3xl text-white mb-2">24/7</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Anti-Poaching Units</span>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                    <span className="block font-serif text-3xl text-white mb-2">100%</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Meat Donated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 reveal">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  Experience the Makoppa
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-8 max-w-2xl mx-auto">
                  Whether you are tracking a Kudu bull through the Leadwood forests or watching the sunset paint the granite koppies, Miwesu offers something rare in the modern world: absolute, uninterrupted presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-onyx text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors shadow-luxury flex items-center justify-center gap-2"
                  >
                    Request Access <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/activities"
                    className="border-2 border-onyx text-onyx px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    Explore Activities <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
