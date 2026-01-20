'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function GoldenWildebeestPage() {
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
              src="/images/home-species-wildebeest.jpg"
              alt="Golden Wildebeest in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Golden Variant
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Golden Wildebeest</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Connochaetes taurinus
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">180-270 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">28+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.375 H&H</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Recommended Caliber</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">15-20 years</div>
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
                  The Golden Variant
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Golden Wildebeest is a rare color variant of the Blue Wildebeest (Connochaetes taurinus), distinguished by its striking golden or blonde coloration. This genetic variation produces a stunning appearance that sets it apart from the typical blue-gray Wildebeest, making it one of the most sought-after color variants in African hunting.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  While sharing all the physical characteristics, behavior, and habitat preferences of the standard Blue Wildebeest, the Golden Wildebeest's distinctive coloration makes it a rare and highly valuable addition to any collection. The golden hue can range from pale blonde to rich golden tones, creating a dramatic contrast with the typical blue-gray coloration.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Golden Wildebeest occur naturally within Blue Wildebeest populations, though they are relatively rare. Their unique appearance and rarity make them a special trophy for hunters seeking something beyond the ordinary.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Golden Wildebeest bull showing unique golden coloration"
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
                Understanding the Golden Coloration
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Genetic Variation</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Golden Wildebeest's unique coloration is the result of a genetic variation that affects pigmentation. This variation can be inherited, though the expression of the golden color can vary significantly between individuals. Some Golden Wildebeest show subtle golden tones, while others display dramatic blonde or golden coloration throughout their body.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The golden coloration typically replaces the standard blue-gray base color, while maintaining the characteristic black facial markings, mane, and tail. The contrast between the golden body and the dark markings creates a striking appearance that is highly prized by collectors.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Rarity and Value</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Golden Wildebeest are relatively rare, occurring naturally in small numbers within standard Blue Wildebeest populations. Their rarity and unique appearance make them highly valued by trophy hunters and collectors. The distinctiveness and intensity of the golden coloration can significantly affect the trophy's value.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Golden Wildebeest Color Pattern Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Comparison with Standard Blue Wildebeest</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Blue Wildebeest</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Blue-gray base coloration</li>
                    <li>• Black facial markings and mane</li>
                    <li>• Dark vertical stripes on the body</li>
                    <li>• Common and widespread</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Golden Wildebeest</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Golden or blonde base coloration</li>
                    <li>• Same black facial markings and mane</li>
                    <li>• Maintains dark vertical stripes</li>
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
                The Golden Wildebeest shares all physical characteristics with the standard Blue Wildebeest, with the exception of its unique coat coloration.
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
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Bull (Male)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Cow (Female)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Live Weight</td>
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 270 kg (397 – 595 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">150 – 200 kg (331 – 441 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Similar to standard Blue Wildebeest</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 150 cm (51 – 59 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 140 cm (47 – 55 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Large, robust build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">170 – 240 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">160 – 220 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Massive head and shoulders</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 25 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Golden Wildebeest horn configuration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry horns, though bulls' horns are typically larger and more massive. The horns grow outward and then curve upward and inward, creating a distinctive shape. Horn development and characteristics are identical to standard Blue Wildebeest.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Trophy quality is determined by width (spread), mass, and symmetry. A mature bull will have horns with a spread of 28 inches or more, with exceptional specimens exceeding 35 inches. The Rowland Ward minimum is 28 1/2 inches (width).
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Trophy Characteristics</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    When evaluating a Golden Wildebeest trophy, both horn quality and the distinctiveness of the golden coloration should be considered. A well-marked golden coat can significantly enhance the trophy's value, making it a unique and prized addition to any collection.
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
                Golden Wildebeest exhibit identical behavior and habitat preferences to standard Blue Wildebeest. The color variation does not affect their behavior, social structure, or ecological requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Herd Structure</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Golden Wildebeest form the same social structures as standard Blue Wildebeest: large herds with territorial breeding bulls, bachelor groups of young males, and nursery herds of females and young. The golden coloration does not affect social interactions.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Activity Patterns</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Active throughout the day, with peak feeding activity during early morning and late afternoon. During the heat of midday, they rest in the shade. The golden coloration may provide some camouflage advantage in certain lighting conditions.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Leaf className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Habitat Preferences</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Prefer open plains and grasslands with access to water. They require Sweetveld (nutrient-rich) grasslands for optimal condition. Habitat requirements are identical to standard Blue Wildebeest.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Golden Wildebeest Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Feeding Behavior</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Golden Wildebeest are bulk grazers, feeding primarily on grasses. They prefer fresh, green grass when available and will move to areas with recent rain or new growth. Their grazing helps maintain grassland health by preventing grass from becoming too tall and unpalatable.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Rut</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Breeding behavior is identical to standard Blue Wildebeest. The rut typically occurs during the dry season (May-July), with bulls competing for access to estrous cows. Territorial bulls maintain harems and defend their territories aggressively. The golden coloration does not affect breeding success or mate selection.
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
                Hunting Golden Wildebeest follows the same strategies and techniques as hunting standard Blue Wildebeest. The primary difference is the rarity and unique appearance of the trophy.
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
                      Glassing from a vehicle or high vantage point to locate a bull, then stalking on foot. This method allows for careful evaluation of both horn quality and golden coloration distinctiveness.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-600">The Approach:</strong> Move slowly and quietly. Use available cover. Wildebeest have excellent senses.</li>
                      <li><strong className="text-gold-600">Wind:</strong> Critical. Always stalk with the wind in your face. Wildebeest have a keen sense of smell.</li>
                      <li><strong className="text-gold-600">Distance:</strong> Shots are typically taken from 100 to 200 meters, though closer shots are preferred for better pattern evaluation.</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Ambush (Blind Hunting)</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sitting in a blind over a waterhole or food plot can be effective, especially during the dry season. This method allows for careful trophy evaluation and assessment of the golden coloration's distinctiveness.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Vehicle-Based Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In open plains areas, vehicle-based hunting can be effective. The vehicle allows for covering large areas and locating Golden Wildebeest within standard herds. Once located, a stalk can be initiated.
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
                Golden Wildebeest are identical in size and toughness to standard Blue Wildebeest, so the same caliber recommendations apply. Medium to heavy calibers are recommended due to the animal's size and tenacity.
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
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-600">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Adequate with premium bullets and perfect shot placement. Lacks margin for error.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.300 Winchester Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 200 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Excellent choice. Good penetration and energy. Handles all shot angles well.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.375 H&H Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-600">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Recommended</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">The recommended choice for Wildebeest. Heavy bullets provide deep penetration and reliable expansion. Maximum confidence.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.338 Winchester Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-600">225 – 250 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Powerful and effective. Excellent penetration and stopping power. Good choice for longer shots.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-gold-500/10 border-l-4 border-gold-500 p-6">
                <h4 className="font-serif text-xl text-onyx mb-3">Bullet Selection</h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Use premium controlled-expansion bullets for clean kills and reliable penetration. Since Golden Wildebeest are often mounted as full mounts to showcase the unique coloration, clean shot placement is important to preserve the hide quality.
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
                  Proper shot placement is essential for clean kills and to preserve the unique hide for taxidermy. Since Golden Wildebeest are often mounted as full mounts to showcase the golden coloration, careful shot placement is important.
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
                      Aim at the base of the neck where it meets the chest. This shot requires precision and should only be taken by experienced marksmen at close range with adequate caliber.
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
                When evaluating a Golden Wildebeest trophy, both horn quality and the distinctiveness of the golden coloration should be considered. The unique coloration adds significant value to the trophy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Horn Evaluation</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Horn evaluation follows the same criteria as standard Blue Wildebeest: width (spread), mass, and symmetry. A mature bull will have horns with a spread of 28 inches or more, with exceptional specimens exceeding 35 inches.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Field Judging Guide</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div>
                      <strong className="text-gold-400">Width (Spread):</strong> The tip-to-tip spread is the primary measurement. If the horns appear wide and well-spread, the bull is likely in the 28+ inch class.
                    </div>
                    <div>
                      <strong className="text-gold-400">Mass:</strong> Look for thick bases and substantial horn throughout. Heavy horns indicate a mature bull.
                    </div>
                    <div>
                      <strong className="text-gold-400">Symmetry:</strong> Both horns should be similar in length and shape. Asymmetrical horns reduce trophy value.
                    </div>
                    <div>
                      <strong className="text-gold-400">Shape:</strong> The classic curved shape is most desirable. Horns should curve upward and inward gracefully.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Golden Wildebeest Bull Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Evaluating the Golden Coloration</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Color Distinctiveness</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The distinctiveness of the golden coloration significantly affects the trophy's value. Well-marked golden coats with clear contrast between the golden body and dark markings are more desirable than subtle golden tones.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The coloration should be visible and well-defined. Rich golden or blonde tones that contrast dramatically with the standard blue-gray coloration are most prized.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-onyx p-4 border border-white/10">
                      <h5 className="font-serif text-lg text-gold-400 mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        Measures the tip-to-tip spread (width) of the horns.
                      </p>
                      <p className="text-gold-400 font-bold">Minimum for entry: 28 1/2 inches</p>
                      <p className="text-gold-400 font-bold mt-2">Gold Medal: 32+ inches</p>
                    </div>
                    <div className="bg-onyx p-4 border border-white/10">
                      <h5 className="font-serif text-lg text-gold-400 mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                      </p>
                      <p className="text-gold-400 font-bold">Bronze Medal: 70+ points</p>
                      <p className="text-gold-400 font-bold mt-2">Gold Medal: 80+ points</p>
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
                Golden Wildebeest venison is identical in quality and characteristics to standard Blue Wildebeest. The meat is lean, flavorful, and highly regarded. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Meat Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Golden Wildebeest venison is lean, dark red, and flavorful. The meat has a rich, gamey flavor that is often compared to beef but with a distinctive wild game character. It is highly regarded and versatile in the kitchen.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Taxidermy Consideration</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Since Golden Wildebeest are often mounted as full mounts to showcase the unique golden coloration, careful field care of the hide is important. The hide should be properly skinned and preserved to maintain the coloration's distinctiveness.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Golden Wildebeest Venison Image Placeholder</span>
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
                The Golden Variant
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Golden Wildebeest represents a rare and unique opportunity for hunters seeking something beyond the ordinary. While sharing all the characteristics of the standard Blue Wildebeest, the distinctive golden coloration makes it one of the most highly prized color variants in African hunting.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Golden Wildebeest occur naturally within Blue Wildebeest populations, though they are relatively rare. Their unique appearance and rarity make them a special trophy for collectors and hunters seeking something distinctive.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the unique coloration, the trophy quality, or the exceptional venison, the Golden Wildebeest offers a memorable hunting experience. Success requires patience, skill, and the ability to recognize and evaluate both horn quality and color distinctiveness.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 28 1/2 inches spread for Rowland Ward. Golden coloration adds significant value.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Rarity</h3>
                <p className="text-gray-300 text-sm">Rare color variant occurring naturally in small numbers. Unique appearance makes it highly prized.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">Same challenge as standard Blue Wildebeest, with the added difficulty of locating a rare color variant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Golden Wildebeest at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue the rare Golden Wildebeest in the Makoppa district's prime Wildebeest habitat.
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
