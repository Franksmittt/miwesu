'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Info, Trophy, Leaf, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function WildlifePage() {
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

  const species = [
    {
      name: 'Greater Kudu',
      scientific: 'Tragelaphus strepsiceros',
      image: '/images/home-species-kudu.jpg',
      caliber: '.300 Win Mag / .30-06',
      rowlandWard: 'Min. 53 7/8"',
      terrain: 'Mountain Thickets',
      tag: 'Iconic',
      tagColor: 'bg-gold-500',
    },
    {
      name: 'Blue Wildebeest',
      scientific: 'Connochaetes taurinus',
      image: '/images/home-species-wildebeest.jpg',
      caliber: '.375 H&H Recommended',
      rowlandWard: 'Min. 28 1/2" (Width)',
      terrain: 'Open Plains',
      tag: 'Tough',
      tagColor: 'bg-white/10',
    },
    {
      name: 'Impala',
      scientific: 'Aepyceros melampus',
      image: '/images/home-species-impala.jpg',
      caliber: '.243 / 6.5mm Creedmoor',
      rowlandWard: 'Min. 23 5/8"',
      terrain: 'Bushveld Fringe',
      tag: 'Classic',
      tagColor: 'bg-white/10',
    },
    {
      name: 'Gemsbok',
      scientific: 'Oryx gazella',
      image: '/images/home-species-gemsbok.jpg',
      caliber: '.30-06 / .300 Win Mag',
      rowlandWard: 'Min. 40"',
      terrain: 'Open Scrub',
      tag: 'Distinct',
      tagColor: 'bg-white/10',
    },
    {
      name: 'Warthog',
      scientific: 'Phacochoerus africanus',
      image: '/images/home-species-warthog.jpg',
      caliber: '7x57 Mauser / .308',
      rowlandWard: 'Min. 13" (Tusk)',
      terrain: 'Waterholes / Mud Wallows',
      tag: 'Opportunity',
      tagColor: 'bg-white/10',
    },
  ]

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/wildlife-hero.jpg"
              alt="Wildlife"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              The Portfolio
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Conservation <span className="text-gradient-gold">Harvest</span>
            </h1>
          </div>
        </section>

        {/* Species Section */}
        <section className="py-32 bg-onyx text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
                The Species
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-white mt-6 mb-8">
                Primary Species of the Iron Mountain
              </h2>
              <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto leading-loose">
                We do not sell animals; we manage an ecosystem. The availability of specific quarry is dictated strictly by our annual ecological census.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {species.map((animal, index) => (
                <div
                  key={index}
                  className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 reveal"
                >
                  <div className="h-64 overflow-hidden relative">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`${animal.tagColor} text-onyx text-[10px] font-bold px-3 py-1 uppercase tracking-widest ${animal.tagColor.includes('gold') ? 'text-onyx' : 'text-white'}`}>
                        {animal.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-white mb-1">
                      {animal.name}
                    </h3>
                    <p className="text-gold-500 text-[10px] italic font-serif mb-6">
                      {animal.scientific}
                    </p>
                    <div className="space-y-4 border-t border-white/10 pt-6">
                      <div className="flex justify-between text-xs font-sans text-gray-400">
                        <span className="uppercase tracking-widest flex items-center">
                          <Target className="w-3 h-3 mr-2" /> Caliber
                        </span>
                        <span className="text-white">{animal.caliber}</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans text-gray-400">
                        <span className="uppercase tracking-widest flex items-center">
                          <Info className="w-3 h-3 mr-2" /> Rowland Ward
                        </span>
                        <span className="text-white">{animal.rowlandWard}</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans text-gray-400">
                        <span className="uppercase tracking-widest flex items-center">
                          <MapPin className="w-3 h-3 mr-2" /> Terrain
                        </span>
                        <span className="text-white">{animal.terrain}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Species Sections */}
            <div className="space-y-20 mt-20">
              {/* Greater Kudu - Featured */}
              <div className="reveal">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/wildlife-kudu-featured.jpg"
                      alt="Greater Kudu bull - The Grey Ghost"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      The Grey Ghost
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Greater Kudu
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      The Makoppa area is famous for its heavy-horned Kudu bulls which thrive in the thick Acacia thickets. These magnificent animals are the "Grey Ghost" of the bushveld—elusive, intelligent, and a true test of the hunter's skill.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      Our Sweetveld sustains Kudu in peak condition year-round, resulting in exceptional trophy quality. The thick mountain thickets provide perfect habitat, and our annual census ensures sustainable management of this iconic species.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">53 7/8"</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Rowland Ward Min</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">Peak</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Condition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Species Gallery */}
              <div className="grid md:grid-cols-3 gap-6 mb-20 reveal delay-100">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/wildlife-species-gallery-1.jpg"
                    alt="Blue Wildebeest in Sweetveld"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h4 className="font-serif text-xl text-white mb-1">Blue Wildebeest</h4>
                    <p className="text-gray-300 text-sm">Thrives on sweet grazing lawns</p>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/wildlife-species-gallery-2.jpg"
                    alt="Impala - The athlete of the bushveld"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h4 className="font-serif text-xl text-white mb-1">Impala</h4>
                    <p className="text-gray-300 text-sm">The athlete of the bushveld</p>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/wildlife-species-gallery-3.jpg"
                    alt="Gemsbok in Arid Sweet Bushveld"
                    fill
                    className="object-cover shadow-luxury"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-onyx/90 to-transparent p-6">
                    <h4 className="font-serif text-xl text-white mb-1">Gemsbok</h4>
                    <p className="text-gray-300 text-sm">Kalahari transition zone specialist</p>
                  </div>
                </div>
              </div>

              {/* Additional Species */}
              <div className="grid md:grid-cols-2 gap-12 mb-20 reveal delay-200">
                <div>
                  <h3 className="font-serif text-3xl text-white mb-6">Specialist Species</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-gold-500 pl-6">
                      <h4 className="font-serif text-xl text-white mb-2">Eland</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        The largest antelope, often kept for meat hunting and trophy status. Thrives in the open areas of the reserve.
                      </p>
                    </div>
                    <div className="border-l-2 border-gold-500 pl-6">
                      <h4 className="font-serif text-xl text-white mb-2">Red Hartebeest</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        A fast runner offering a challenging hunt. Prefers the open plains and sweetveld areas.
                      </p>
                    </div>
                    <div className="border-l-2 border-gold-500 pl-6">
                      <h4 className="font-serif text-xl text-white mb-2">Warthog</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Character and charm around the waterholes. Often seen at mud wallows, providing excellent opportunities for observation and harvest.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px]">
                  <Image
                    src="/images/wildlife-warthog.jpg"
                    alt="Warthog at waterhole"
                    fill
                    className="object-cover shadow-luxury"
                  />
                </div>
              </div>

              {/* Predators Section */}
              <div className="bg-gradient-to-br from-onyx to-onyx/90 p-12 md:p-16 mb-20 reveal delay-300">
                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                        The Silent Watchers
                      </span>
                      <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Predators of the Makoppa
                      </h3>
                      <p className="text-gray-300 text-lg leading-loose mb-6">
                        While Miwesu is not a "Big 5" reserve, the area is home to free-roaming Leopard and Brown Hyena. The presence of these elusive predators adds a thrill to the experience, even if they are rarely seen.
                      </p>
                      <p className="text-gray-300 text-lg leading-loose mb-8">
                        The call of the Jackal and the track of the Leopard remind us that this is truly wild country. These apex predators play a crucial role in maintaining the ecosystem's balance.
                      </p>
                      <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                        <Trophy className="w-5 h-5" />
                        <span>Elusive & Rare</span>
                      </div>
                    </div>
                    <div className="relative h-[500px]">
                      <Image
                        src="/images/wildlife-predators.jpg"
                        alt="Leopard track in the Makoppa"
                        fill
                        className="object-cover shadow-luxury"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecological Management Section */}
        <section className="py-32 bg-marble-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20 reveal">
              <div>
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Sustainable Management
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                  Ecological Management
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  We do not sell animals; we manage an ecosystem. Our annual ecological census determines which species are available for harvest, ensuring sustainable population management and maintaining the delicate balance of the ecosystem.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-8">
                  All harvests are conducted ethically, with respect for the animal and the environment. The meat from every harvest is donated to local communities—feeding 300 families monthly—ensuring nothing goes to waste.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <span className="block font-serif text-3xl text-gold-600 mb-2">Annual</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Ecological Census</span>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <span className="block font-serif text-3xl text-gold-600 mb-2">100%</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Meat Donated</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/images/wildlife-ecological-management.jpg"
                  alt="Ecological management and conservation"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            {/* Sweetveld Advantage */}
            <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 reveal delay-100">
              <div className="max-w-4xl mx-auto text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-6" />
                <h3 className="font-serif text-3xl md:text-4xl text-onyx mb-6">
                  The Sweetveld Advantage
                </h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-8">
                  The Arid Sweet Bushveld of the Makoppa district sustains game in peak condition year-round. Unlike sourveld areas where grasses lose nutritional value in winter, our sweetveld remains nutritious even when dry and yellow.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  This means animals hunted here are in superior physical condition—with higher body mass, better trophy quality, and exceptional meat quality. The Sweetveld advantage is real, and it shows in every harvest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-onyx text-white">
          <div className="max-w-4xl mx-auto px-6 text-center reveal">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Experience the Portfolio
            </h2>
            <p className="font-sans text-gray-300 text-lg leading-loose mb-10">
              Contact our concierge to learn more about species availability, trophy quality, and our conservation harvest program. All inquiries are subject to our vetting process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-gold-500 text-onyx uppercase tracking-widest text-xs font-bold hover:bg-white transition-all"
              >
                Request Information <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center px-10 py-4 border-2 border-gold-500 text-gold-500 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-onyx transition-all"
              >
                Explore Activities <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

