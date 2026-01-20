'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function WildebeestPage() {
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
              alt="Blue Wildebeest in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Tough One
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Blue Wildebeest</span>
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
                  The Tough One of the Plains
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Blue Wildebeest, also known as the Brindled Gnu, is one of Africa's most iconic and resilient antelope species. Known as "The Tough One" for its remarkable tenacity and ability to survive in harsh conditions, this large antelope is a cornerstone of the African plains ecosystem.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Blue Wildebeest thrives in open plains and grasslands, where it forms large herds that migrate in search of fresh grazing. Their distinctive appearance—with a massive head, shaggy mane, and curved horns—makes them instantly recognizable on the African savanna.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, our Sweetveld grasslands provide ideal habitat for Blue Wildebeest. The nutrient-rich grasses sustain them in peak condition year-round, resulting in exceptional trophy quality and superior meat production.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Blue Wildebeest bull on open plains"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Taxonomy & History Section */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                Classification & History
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Taxonomy and Evolutionary Distinctiveness
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Taxonomic Classification</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Blue Wildebeest belongs to the family Bovidae, subfamily Alcelaphinae, and the tribe Alcelaphini. This tribe includes other large grazers such as the Hartebeest and Topi. The genus <em className="text-gold-400">Connochaetes</em> contains two species: the Blue Wildebeest (Connochaetes taurinus) and the Black Wildebeest (Connochaetes gnou).
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The specific name <em className="text-gold-400">taurinus</em> derives from Latin, meaning "bull-like," a reference to the animal's massive head and robust build. The common name "gnu" is derived from the Khoikhoi name for these animals, while "wildebeest" comes from Afrikaans/Dutch, meaning "wild beast."
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Five subspecies of Blue Wildebeest are recognized, with the southern African populations (C. t. taurinus) being among the largest. These animals are well-adapted to the grasslands and savannas of southern Africa, including the Makoppa district.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Wildebeest Taxonomy Comparison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Blue Wildebeest's range extends from southern Kenya and Tanzania southward through eastern and southern Africa. In South Africa, they are found throughout the grassland and savanna regions, favoring open plains with access to water.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's combination of Sweetveld grasslands and open plains provides ideal habitat. Unlike sourveld areas where grasses lose nutritional value in winter, our Sweetveld sustains Wildebeest in peak condition year-round.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Blue Wildebeest is one of Africa's conservation success stories. While populations in some areas have declined due to habitat loss, the species remains abundant and is listed as "Least Concern" by the IUCN.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The species' success is largely due to its adaptability and the value-based conservation model, where hunting revenue funds habitat protection. Well-managed reserves like MIWESU ensure stable, healthy populations that benefit both the ecosystem and the local economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Morphology & Physical Characteristics */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                Physical Characteristics
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Morphology and Physiological Adaptations
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                The Blue Wildebeest is a large, robust antelope with a distinctive appearance that reflects its adaptation to life on the open plains.
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
                      <td className="px-6 py-4 font-sans text-gray-600">150 – 220 kg (331 – 485 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Bulls are significantly larger with massive necks and shoulders</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 145 cm (51 – 57 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">115 – 135 cm (45 – 53 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">High shoulders, sloping back typical of Alcelaphines</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">170 – 240 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">160 – 220 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Robust, muscular build adapted for endurance running</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 22 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Blue Wildebeest coat coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Blue Wildebeest's coat is a distinctive bluish-grey to dark grey, with darker vertical stripes running along the flanks. The name "Blue" refers to this bluish-grey coloration, which can appear almost black in certain lighting conditions.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  A prominent black mane runs from the forehead down the neck and along the back, creating a striking contrast with the body color. The face is typically darker than the body, and both males and females have a beard of long, dark hair under the chin.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Bulls are generally larger and darker than cows, with more pronounced manes and beards. The horns are similar in both sexes, though bulls' horns are typically thicker at the base. Both sexes carry horns, making field identification more challenging than in species where only males are horned.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry horns, which is unusual among antelope. The horns are broad at the base and curve outward, then upward, and finally inward, creating a distinctive shape that resembles a handlebar mustache or the letter "S".
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The horns are heavily ridged (annulated) along their length, with smooth, sharp tips. In bulls, the horns are typically thicker and more massive, while cows' horns are more slender but can be equally long.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Trophy evaluation focuses on horn width (tip-to-tip spread) and overall mass. The Rowland Ward minimum is 28 1/2 inches width. Exceptional trophies exceed 32 inches. Look for wide spread, heavy bases, and symmetrical curves. The horns should appear massive and well-developed.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Wildebeest Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Plains Living</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Body Shape</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Wildebeest's body is designed for endurance running. High shoulders and a sloping back, combined with long, powerful legs, allow them to cover great distances at a steady pace. This adaptation is crucial for their migratory lifestyle.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their large, broad hooves provide excellent traction on various terrains, from soft mud to hard-packed earth. This allows them to maintain speed and stability even in challenging conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Sensory Adaptations</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Wildebeest have excellent eyesight, with eyes positioned on the sides of the head to provide a wide field of view. This is essential for detecting predators on the open plains where cover is minimal.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their sense of smell is highly developed, used for detecting predators, finding water, and social communication. Large, mobile ears can rotate to pinpoint the source of sounds, providing early warning of approaching danger.
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
                Ethology and Social Organization
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 reveal">
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Large Herds</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Blue Wildebeest are highly gregarious, forming herds that can number in the hundreds or even thousands. These large aggregations provide safety through numbers, as many eyes and ears can detect predators more effectively than a few individuals.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Bulls</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  During the breeding season, mature bulls establish territories that they defend vigorously. They mark their territories with dung piles and engage in displays and combat with rival bulls. Outside the breeding season, bulls may form bachelor groups.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Nursery Herds</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cows and their calves form the core of the herd structure. Calves are born in synchrony during the calving season, which helps overwhelm predators through sheer numbers. This "predator satiation" strategy is highly effective.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Wildebeest Herd Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Wildebeest are active throughout the day, with peak feeding activity during the early morning and late afternoon. During the heat of midday, they may rest in the shade or stand in groups, but they remain alert and ready to flee.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Grazing Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Wildebeest are bulk grazers, feeding primarily on short grasses. They prefer fresh, green growth and will move to areas with recent rain or new growth. Their grazing helps maintain the grassland ecosystem by preventing grass from becoming too tall and unpalatable.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Wildebeest are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on grazing and less alert to potential threats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">The Rut and Reproductive Cycle</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Breeding Season</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The rut typically occurs from April to June in southern Africa, with peak activity in May. During this period, bulls become highly territorial and aggressive, engaging in displays and combat to establish dominance and secure mating rights.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Bulls will defend their territories vigorously, chasing away rivals and attempting to keep estrous females within their domain. The competition is intense, and only the strongest, most dominant bulls successfully breed.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Calving and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 8.5 months, calves are born from December to February, coinciding with the rainy season when fresh grass is abundant. Calves are born in synchrony, with most births occurring within a few weeks.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Calves are precocial, able to stand and run within minutes of birth. This is essential for survival on the open plains where hiding is impossible. The synchronized calving creates a "predator satiation" effect, overwhelming predators with sheer numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Habitat & Diet */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                Habitat & Diet
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Ecological Footprint
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Grazing Preferences</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Blue Wildebeest are bulk grazers, feeding primarily on short, sweet grasses. They prefer Themeda triandra (red grass), Cynodon dactylon (couch grass), and other palatable grass species. They favor areas with fresh growth, often moving to recently burned or mowed areas where new grass is sprouting.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sweetveld Advantage</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    The Makoppa district's Sweetveld grasslands provide year-round nutrition. Unlike sourveld areas where grasses lose nutritional value in winter, our Sweetveld remains nutritious even when dry and yellow. This sustains Wildebeest in peak condition throughout the year, resulting in superior trophy quality and meat production.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Wildebeest grazing in Sweetveld"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Waterhole Activity Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Water Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Wildebeest are water-dependent and must drink daily when water is available. This dependency makes waterholes focal points for their daily movement patterns, especially during the dry season.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  On hunting farms, waterholes become prime locations for hunting, as Wildebeest visit them regularly and predictably. During the dry season, when water dependency peaks, waterholes offer excellent ambush opportunities.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Habitat Management</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Wildebeest are excellent grazers that help maintain grassland health by preventing grass from becoming too tall and unpalatable. However, overstocking can lead to overgrazing and veld degradation. Proper population management through hunting harvests is essential for maintaining both the ecosystem and trophy quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hunting Section */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                The Hunt
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Strategies, Gear, and Ballistics
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Hunting the Blue Wildebeest is a classic African plains experience. While they may appear less challenging than some species, their toughness and tenacity make them a worthy quarry that demands respect and proper preparation.
              </p>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Spot and Stalk (The Classic Method)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Glassing from a high vantage point or vehicle to locate a herd, then stalking on foot to get within range. This method works well on open plains where visibility is good.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Use available cover and terrain features. Move slowly and deliberately. Wildebeest have excellent eyesight.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Always stalk with the wind in your face. Wildebeest have a keen sense of smell.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Shots are typically taken from 150 to 300 meters. Getting closer than 150 meters requires exceptional fieldcraft.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Waterhole Hunting)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Setting up a blind at a waterhole is highly effective, especially during the dry season when Wildebeest must drink daily. This method allows for careful trophy evaluation and reduces the need for long stalks.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Vehicle-Based Hunting</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      On large properties, hunting from a vehicle can be effective. The hunter and PH drive slowly, glassing for trophy bulls. Once a target is identified, the vehicle is used to get into position for a shot.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Hunting Stalk Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Rifle Selection */}
            <div className="bg-onyx-light border border-white/10 p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Rifle and Caliber Selection</h3>
              <p className="text-gray-300 text-lg leading-loose mb-8">
                The Blue Wildebeest is a large, tough animal with a reputation for being tenacious. A poorly placed shot can result in a long, difficult tracking job. Adequate caliber and bullet construction are essential.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-onyx">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-300">Caliber</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-300">Bullet Weight</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-300">Suitability</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-300">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-300">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gray-300">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Adequate with perfect shot placement, but lacks margin for error. Not recommended for quartering shots.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.300 Winchester Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">180 – 200 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent trajectory, deep penetration, and reliable expansion. Handles all shot angles well.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.375 H&H Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The recommended choice for Wildebeest. Provides maximum confidence and handles all shot angles. Also allows hunting larger game on the same safari.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.416 / .458</td>
                      <td className="px-6 py-4 font-sans text-gray-300">400 gr+</td>
                      <td className="px-6 py-4 font-sans text-gray-400">Overkill</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Effective but excessive for Wildebeest alone. Only practical if hunting dangerous game on the same safari.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Premium controlled-expansion bullets are essential. Wildebeest have heavy bone structure, and shots may need to penetrate shoulder blades or ribs. Bullets like Barnes TSX, Swift A-Frame, or Nosler Partition provide reliable performance. Avoid frangible varmint bullets, which may not penetrate adequately.
                </p>
              </div>
            </div>

            {/* Shot Placement */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Shot Placement Diagram Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Shot Placement</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Proper shot placement is critical. The Wildebeest's vitals are positioned slightly lower and more forward than in North American deer, and the animal's toughness means marginal shots may not anchor the animal.
                </p>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Broadside</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white">The ideal shot.</strong> Aim one-third of the way up the body, just behind the front leg. This placement ensures the bullet passes through both lungs and the top of the heart. For maximum anchoring power, aim slightly higher to break the shoulder.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Quartering Away</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Aim for the off-side shoulder. The bullet should enter behind the ribs and exit through the opposite shoulder. This angle provides excellent penetration through the vitals. Ensure adequate bullet construction for this shot angle.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Frontal</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Only for experienced marksmen with adequate caliber. Aim at the base of the neck where it meets the chest. This shot requires precision and heavy bullet construction to penetrate the heavy bone structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trophy Evaluation */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                Trophy Evaluation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Field Judging and Trophy Evaluation
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                Judging a Wildebeest trophy in the field can be challenging, especially since both bulls and cows carry horns. Understanding the key characteristics of a trophy bull is essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Distinguishing Bulls vs. Cows</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Shooting a cow by mistake is a serious error in trophy hunting. Careful observation is required.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Sex Differentiation Guide</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Significantly larger, with a massive neck and heavy shoulders. Overall bulk is much greater.<br/>
                        <strong>Cow:</strong> Smaller, more slender frame. Lighter build overall.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Mass</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Thick, heavy bases. Horns appear massive and substantial.<br/>
                        <strong>Cow:</strong> More slender horns, though they can be equally long. Bases are narrower.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Mane and Beard</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> More pronounced, darker mane and beard. Often appears more "shaggy."<br/>
                        <strong>Cow:</strong> Less pronounced mane and beard, though still present.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Behavior</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> During rut, territorial and aggressive. May be solitary or with females.<br/>
                        <strong>Cow:</strong> Associated with other cows and calves. Part of nursery herds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bull vs Cow Comparison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-8">Estimating Trophy Size</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Trophy Characteristics</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Width:</strong> The Rowland Ward minimum is 28 1/2 inches tip-to-tip. Look for horns that appear wide and sweeping. Exceptional trophies exceed 32 inches.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Mass:</strong> Heavy, thick bases indicate a mature bull. The horns should appear substantial, not spindly.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Symmetry:</strong> Both horns should be similar in length and curve. Asymmetrical horns reduce trophy value.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the tip-to-tip width (spread) of the horns.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 28 1/2 inches</p>
                    </div>
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 70 points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venison & Utilization */}
        <section className="py-20 md:py-32 bg-onyx text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                The Harvest
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Venison, Butchery, and Utilization
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Wildebeest venison is highly regarded and commercially significant. The meat is lean, flavorful, and nutritious, making it a valuable resource.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Wildebeest meat is deep red, fine-grained, and extremely lean. It has a rich, gamey flavor that reflects the animal's grass-based diet. The meat is often described as having a "beef-like" quality but with a distinctive wild game character.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Like all game meat, Wildebeest is very lean with minimal fat. The fat that is present is yellow and should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Wildebeest Venison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-onyx-light border border-white/10 p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Primary Cuts and Usage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fillet (Tenderloin)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The most tender cut, located inside the ribcage. Best cooked quickly to rare or medium-rare. Pan-searing or grilling over high heat preserves the tenderness.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Backstrap (Loin)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Excellent for steaks or whole roasts. Do not overcook—medium-rare is ideal. Overcooking results in tough, dry meat due to the lack of fat.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Hindquarters</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The heavy muscles of the hind leg are ideal for roasting (if larded with bacon) or for making Biltong. The topside and silverside are particularly prized for Biltong.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Shanks and Neck</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    High in collagen, these cuts are perfect for slow-cooked stews and Potjiekos. The long, slow cooking breaks down the connective tissue, resulting in tender, flavorful meat.
                  </p>
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
                The Tough One of the Plains
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Blue Wildebeest is a true icon of the African plains. Its combination of size, toughness, and distinctive appearance makes it a sought-after trophy and a cornerstone of the African hunting experience.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, our Sweetveld grasslands provide ideal habitat for Wildebeest. The nutrient-rich grasses sustain them in peak condition year-round, resulting in exceptional trophy quality and superior meat production.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the challenge, the trophy, or the exceptional venison, the Blue Wildebeest offers an unforgettable hunting experience. Success requires proper preparation, adequate caliber, and respect for this tough and tenacious animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 28 1/2 inches width for Rowland Ward. Exceptional trophies exceed 32 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable and abundant in well-managed reserves.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">A classic African plains hunt requiring proper caliber and shot placement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Blue Wildebeest at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Tough One in the Makoppa district's prime Wildebeest habitat.
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
