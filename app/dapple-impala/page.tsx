'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function DappleImpalaPage() {
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
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home-species-impala.jpg"
              alt="Dapple Impala in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Rare Color Variant
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Dapple Impala</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Aepyceros melampus
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">40-65 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Ram Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">23+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.243 Win</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Recommended Caliber</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">12-15 years</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Lifespan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 reveal">
              <div>
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Introduction
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  The Rare Color Variant
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Dapple Impala is a rare color variant of the common Impala (Aepyceros melampus), distinguished by its unique dappled or mottled coat pattern. This genetic variation produces a striking appearance that sets it apart from the typical reddish-brown Impala, making it a highly sought-after trophy for collectors and hunters seeking something unique.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  While sharing all the physical characteristics, behavior, and habitat preferences of the standard Impala, the Dapple Impala's distinctive coloration makes it a rare and valuable addition to any collection. The dappled pattern can vary from subtle mottling to dramatic patches of lighter and darker coloration.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Dapple Impala occur naturally within Impala populations, though they are relatively rare. Their unique appearance and rarity make them a special trophy for hunters seeking something beyond the ordinary.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Dapple Impala ram showing unique coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Color Variant Section */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                The Color Variant
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Understanding the Dapple Pattern
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Genetic Variation</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Dapple Impala's unique coloration is the result of a genetic variation that affects pigmentation. This variation can be inherited, though the expression of the dapple pattern can vary significantly between individuals. Some Dapple Impala show subtle mottling, while others display dramatic patches of lighter and darker coloration.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The dapple pattern typically appears as irregular patches or spots of lighter coloration against the standard reddish-brown base. The pattern can be more pronounced on certain parts of the body, such as the flanks, shoulders, or hindquarters.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Rarity and Value</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dapple Impala are relatively rare, occurring naturally in small numbers within standard Impala populations. Their rarity and unique appearance make them highly valued by trophy hunters and collectors. The distinctiveness of the dapple pattern can significantly affect the trophy's value.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Dapple Impala Color Pattern Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Comparison with Standard Impala</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Standard Impala</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Uniform reddish-brown coat</li>
                    <li>• White underbelly and inner legs</li>
                    <li>• Black markings on face, ears, and tail</li>
                    <li>• Common and widespread</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Dapple Impala</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Dappled or mottled coat pattern</li>
                    <li>• Irregular patches of lighter/darker coloration</li>
                    <li>• Same black markings as standard Impala</li>
                    <li>• Rare color variant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Taxonomy & Biology */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                Biology & Characteristics
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Physical Characteristics
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                The Dapple Impala shares all physical characteristics with the standard Impala, with the exception of its unique coat coloration.
              </p>
            </div>

            {/* Biometrics Table */}
            <div className="bg-white border border-gray-200 shadow-luxury mb-16 reveal">
              <div className="p-6 md:p-8 border-b border-gray-200">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx">Biometric Data</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-marble-dark">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Parameter</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Ram (Male)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Ewe (Female)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Live Weight</td>
                      <td className="px-6 py-4 font-sans text-gray-600">40 – 65 kg (88 – 143 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">30 – 50 kg (66 – 110 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Similar to standard Impala</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">75 – 95 cm (30 – 37 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">70 – 85 cm (28 – 33 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Medium-sized antelope</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 160 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">110 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Elegant, streamlined build</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 18 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Dapple Impala horn configuration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Only rams carry horns, which are lyre-shaped and ridged. The horns grow upward and backward in a graceful curve, creating the distinctive lyre shape. Horn development and characteristics are identical to standard Impala.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Trophy quality is determined by length, mass, and symmetry. A mature ram will have horns measuring 23 inches or more, with exceptional specimens exceeding 28 inches. The Rowland Ward minimum is 23 5/8 inches.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Trophy Characteristics</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    When evaluating a Dapple Impala trophy, both horn quality and the distinctiveness of the dapple pattern should be considered. A well-marked dapple pattern can significantly enhance the trophy's value, making it a unique and prized addition to any collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Ecology */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                Behavioral Ecology
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Behavior and Habitat
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Dapple Impala exhibit identical behavior and habitat preferences to standard Impala. The color variation does not affect their behavior, social structure, or ecological requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Social Structure</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Dapple Impala form the same social structures as standard Impala: bachelor herds of young males, territorial breeding rams with harems, and nursery herds of females and young. The dapple pattern does not affect social interactions.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Activity Patterns</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Active during early morning and late afternoon, with peak feeding activity during these periods. During the heat of midday, they rest in the shade. The dapple pattern may provide some camouflage advantage in certain lighting conditions.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Leaf className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Habitat Preferences</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Prefer bushveld fringe areas with a mix of open grassland and dense cover. They require access to water and prefer areas with both grazing and browsing opportunities. Habitat requirements are identical to standard Impala.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Dapple Impala Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Feeding Behavior</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Dapple Impala are mixed feeders, consuming both grass and browse. They prefer fresh, green grass when available but will browse on leaves, fruits, and flowers when grass is scarce. This dietary flexibility allows them to thrive in a variety of habitats.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Rut</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Breeding behavior is identical to standard Impala. The rut typically occurs in late autumn (April-May), with rams competing for access to estrous ewes. Territorial rams maintain harems and defend their territories aggressively. The dapple pattern does not affect breeding success or mate selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hunting Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                The Hunt
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Strategies, Gear, and Ballistics
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                Hunting Dapple Impala follows the same strategies and techniques as hunting standard Impala. The primary difference is the rarity and unique appearance of the trophy.
              </p>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Spot and Stalk</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Glassing from a vehicle or high vantage point to locate a ram, then stalking on foot. This method allows for careful evaluation of both horn quality and dapple pattern distinctiveness.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-600">The Approach:</strong> Move slowly and quietly. Use available cover. Impala have excellent senses.</li>
                      <li><strong className="text-gold-600">Wind:</strong> Critical. Always stalk with the wind in your face. Impala have a keen sense of smell.</li>
                      <li><strong className="text-gold-600">Distance:</strong> Shots are typically taken from 100 to 200 meters, though closer shots are preferred for better pattern evaluation.</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Ambush (Blind Hunting)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sitting in a blind over a waterhole or food plot can be effective, especially during the dry season. This method allows for careful trophy evaluation and assessment of the dapple pattern's distinctiveness.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Still Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Moving slowly through known Impala habitat, stopping frequently to glass. This method requires patience and good fieldcraft but can be effective for locating Dapple Impala within standard herds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Hunting Stalk Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Rifle Selection */}
            <div className="bg-white border border-gray-200 shadow-luxury p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-8">Rifle and Caliber Selection</h3>
              <p className="font-sans text-gray-600 text-lg leading-loose mb-8">
                Dapple Impala are identical in size and toughness to standard Impala, so the same caliber recommendations apply. Light to medium calibers are ideal, with emphasis on accuracy and proper bullet construction.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-marble-dark">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Caliber</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Bullet Weight</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Suitability</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.243 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-600">100 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Excellent choice with premium bullets. Low recoil allows for accurate shot placement, important for preserving the unique hide.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">6.5mm Creedmoor</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 140 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Modern, accurate cartridge. Excellent ballistics and manageable recoil. Perfect for precise shot placement.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.270 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 150 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Versatile and effective. Flat trajectory makes it ideal for longer shots. Widely available ammunition.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.308 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-600">150 – 165 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Reliable and effective. Good penetration and expansion. Handles all shot angles well.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-600">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Versatile and powerful. Excellent for longer shots. Provides good margin for error.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-gold-500/10 border-l-4 border-gold-500 p-6">
                <h4 className="font-serif text-xl text-onyx mb-3">Bullet Selection</h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Use premium controlled-expansion bullets for clean kills and minimal meat damage. Since Dapple Impala are often mounted as full mounts to showcase the unique pattern, clean shot placement is important to preserve the hide quality.
                </p>
              </div>
            </div>

            {/* Shot Placement */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Shot Placement Diagram Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Shot Placement</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Proper shot placement is essential for clean kills and to preserve the unique hide for taxidermy. Since Dapple Impala are often mounted as full mounts to showcase the dapple pattern, careful shot placement is important.
                </p>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Broadside</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong className="text-onyx">The ideal shot.</strong> Aim one-third of the way up the body, just behind the front leg. This placement ensures the bullet passes through both lungs and the top of the heart, resulting in a quick, clean kill.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Quartering Away</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Aim for the off-side shoulder. The bullet should enter behind the ribs and exit through the opposite shoulder. This angle provides excellent penetration through the vitals.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Frontal</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Aim at the base of the neck where it meets the chest. This shot requires precision and should only be taken by experienced marksmen at close range.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trophy Evaluation */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                Trophy Evaluation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Field Judging and Trophy Evaluation
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                When evaluating a Dapple Impala trophy, both horn quality and the distinctiveness of the dapple pattern should be considered. The unique coloration adds significant value to the trophy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Horn Evaluation</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Horn evaluation follows the same criteria as standard Impala: length, mass, and symmetry. A mature ram will have horns measuring 23 inches or more, with exceptional specimens exceeding 28 inches.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Field Judging Guide</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div>
                      <strong className="text-gold-400">Length:</strong> Horns should appear long and graceful. If they extend well past the ears and have good curvature, the ram is likely in the 23+ inch class.
                    </div>
                    <div>
                      <strong className="text-gold-400">Mass:</strong> Look for thick bases and substantial horn throughout. Heavy horns indicate a mature ram.
                    </div>
                    <div>
                      <strong className="text-gold-400">Symmetry:</strong> Both horns should be similar in length and shape. Asymmetrical horns reduce trophy value.
                    </div>
                    <div>
                      <strong className="text-gold-400">Shape:</strong> The classic lyre shape is most desirable. Horns that curve too much or too little reduce aesthetic appeal.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Dapple Impala Ram Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Evaluating the Dapple Pattern</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Pattern Distinctiveness</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The distinctiveness of the dapple pattern significantly affects the trophy's value. Well-marked patterns with clear contrast between light and dark areas are more desirable than subtle mottling.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The pattern should be visible and well-defined. Dramatic patches or spots of lighter coloration against the standard reddish-brown base are most prized.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-onyx p-4 border border-white/10">
                      <h5 className="font-serif text-lg text-gold-400 mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        Measures the length of the longest horn along the curve from base to tip.
                      </p>
                      <p className="text-gold-400 font-bold">Minimum for entry: 23 5/8 inches</p>
                      <p className="text-gold-400 font-bold mt-2">Gold Medal: 26+ inches</p>
                    </div>
                    <div className="bg-onyx p-4 border border-white/10">
                      <h5 className="font-serif text-lg text-gold-400 mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                      </p>
                      <p className="text-gold-400 font-bold">Bronze Medal: 60+ points</p>
                      <p className="text-gold-400 font-bold mt-2">Gold Medal: 70+ points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venison & Utilization */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                The Harvest
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Venison, Butchery, and Utilization
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                Dapple Impala venison is identical in quality and characteristics to standard Impala. The meat is lean, flavorful, and highly regarded. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Meat Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Dapple Impala venison is lean, fine-grained, and flavorful. The meat is lighter in color than browsing antelope and has a mild, sweet flavor. It is highly regarded and versatile in the kitchen.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Taxidermy Consideration</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Since Dapple Impala are often mounted as full mounts to showcase the unique dapple pattern, careful field care of the hide is important. The hide should be properly skinned and preserved to maintain the pattern's distinctiveness.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Dapple Impala Venison Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                Conclusion
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                The Rare Color Variant
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Dapple Impala represents a rare and unique opportunity for hunters seeking something beyond the ordinary. While sharing all the characteristics of the standard Impala, the distinctive dapple pattern makes it a highly prized and valuable trophy.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Dapple Impala occur naturally within Impala populations, though they are relatively rare. Their unique appearance and rarity make them a special trophy for collectors and hunters seeking something distinctive.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the unique coloration, the trophy quality, or the exceptional venison, the Dapple Impala offers a memorable hunting experience. Success requires patience, skill, and the ability to recognize and evaluate both horn quality and pattern distinctiveness.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 23 5/8 inches for Rowland Ward. Pattern distinctiveness adds significant value.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Rarity</h3>
                <p className="text-gray-300 text-sm">Rare color variant occurring naturally in small numbers. Unique appearance makes it highly prized.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">Same challenge as standard Impala, with the added difficulty of locating a rare color variant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Dapple Impala at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue the rare Dapple Impala in the Makoppa district's prime Impala habitat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-onyx text-white font-sans font-semibold uppercase tracking-wider hover:bg-gold-500 transition-colors duration-300"
                >
                  Plan Your Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/wildlife"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-onyx text-onyx font-sans font-semibold uppercase tracking-wider hover:bg-onyx hover:text-white transition-colors duration-300"
                >
                  Explore Other Species
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
