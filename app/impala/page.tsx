'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ImpalaPage() {
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
              alt="Impala in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Athlete of the Bushveld
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Impala</span>
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
                  The Athlete of the Bushveld
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Impala is one of Africa's most graceful and athletic antelope species. Known as "The Athlete of the Bushveld" for its remarkable leaping ability and speed, this medium-sized antelope is a cornerstone of the African safari experience.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its elegant build, distinctive black markings, and spectacular jumping displays, the Impala is instantly recognizable. Their ability to leap up to 3 meters high and 10 meters in length makes them one of the most agile antelope on the continent.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Impala thrive in the bushveld fringe areas where they can take advantage of both grazing and browsing opportunities. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Impala ram in bushveld"
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
                  The Impala belongs to the family Bovidae, subfamily Aepycerotinae. The genus <em className="text-gold-400">Aepyceros</em> contains only one species, <em className="text-gold-400">Aepyceros melampus</em>, making the Impala unique among African antelope.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The specific name <em className="text-gold-400">melampus</em> derives from Greek, meaning "black foot," though this is somewhat misleading as the black markings are more extensive than just the feet. The common name "Impala" comes from the Zulu word "impala."
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Two subspecies are recognized: the Common Impala (A. m. melampus) found in southern and eastern Africa, and the Black-faced Impala (A. m. petersi) found in southwestern Africa. The Makoppa district is home to the Common Impala.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Impala Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Impala's range extends from southern Kenya and Tanzania southward through eastern and southern Africa. They are found in a variety of habitats, from open savannas to dense bushveld, but prefer areas with a mix of grassland and woodland.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's bushveld fringe provides ideal habitat, offering both grazing opportunities in open areas and browsing in woodland edges. This mixed habitat allows Impala to thrive year-round.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Impala is one of Africa's most successful antelope species. Listed as "Least Concern" by the IUCN, populations are stable and abundant throughout much of their range.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their success is due to their adaptability, high reproductive rate, and ability to utilize both grazing and browsing. Well-managed reserves like MIWESU ensure healthy populations that benefit both the ecosystem and sustainable utilization programs.
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
                The Impala is a medium-sized antelope with a graceful, athletic build designed for speed and agility.
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
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Rams are significantly larger with thicker necks</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">75 – 95 cm (30 – 37 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">70 – 85 cm (28 – 33 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Compact, athletic build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 160 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">110 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Streamlined body for speed</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 17 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Impala coat coloration and markings"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Impala's coat is a beautiful reddish-brown to tan color, with a lighter underside. The most distinctive feature is the black markings: a vertical stripe on each hind leg (the "M" marking), black patches on the forehead, and black tips on the ears.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  A black stripe runs along the midline of the tail, and there are black markings on the front legs. These markings are thought to serve as visual signals for communication and may help break up the animal's outline in dappled light.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    The most obvious difference is that only rams carry horns. Rams are also larger and more robust, with thicker necks. During the rut, rams may appear darker due to increased activity and less time for grooming.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Only rams carry horns, which are lyre-shaped (lyrate) and heavily ridged. The horns grow outward and backward, then curve forward at the tips, creating the distinctive lyre shape.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The horns are heavily annulated (ringed) along their length, with smooth, sharp tips. Horns begin growing at around 4-5 months of age and continue throughout the ram's life, though growth slows with age.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A mature trophy ram will have horns measuring 23 inches or more, with exceptional specimens exceeding 28 inches. The Rowland Ward minimum is 23 5/8 inches. Look for long, symmetrical horns with a wide spread and deep lyre curve. The ridges should be well-defined, and the tips should be sharp and undamaged.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Impala Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Speed and Agility</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Leaping Ability</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Impala's most famous adaptation is its incredible leaping ability. They can leap up to 3 meters high and 10 meters in length, clearing obstacles and confusing predators. This "pronking" behavior is spectacular to witness.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The powerful hindquarters and flexible spine allow for these remarkable jumps. When alarmed, Impala will often leap repeatedly, creating a confusing visual display that makes it difficult for predators to target a specific individual.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Speed and Endurance</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Impala can reach speeds of up to 90 km/h (56 mph) in short bursts, and maintain high speeds for extended periods. Their lightweight build and long, powerful legs are perfectly adapted for rapid escape.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their hooves are narrow and pointed, providing excellent traction on various terrains. The ability to change direction quickly while maintaining speed is crucial for evading predators in dense bushveld.
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
                <h3 className="font-serif text-xl text-white mb-3">Nursery Herds</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ewes and their offspring form herds of 15-100 animals. These herds are fluid, with individuals joining and leaving. Ewes are highly protective of their lambs, which remain hidden for the first few weeks of life.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Rams</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  During the breeding season, mature rams establish territories that they defend vigorously. They mark territories with dung middens and engage in displays and combat with rival rams. Outside the breeding season, rams may form bachelor groups.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Bachelor Groups</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Young rams and rams without territories form bachelor groups. These groups wander the periphery of territories and serve as a reservoir for future territorial rams. Old rams may also join bachelor groups.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Impala Herd Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Impala are active throughout the day, with peak feeding activity during early morning and late afternoon. During the heat of midday, they may rest in the shade, but remain alert and ready to flee.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Feeding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Impala are mixed feeders, both grazing and browsing. They feed on grasses, leaves, fruits, and flowers, adapting their diet to seasonal availability. This flexibility allows them to thrive in a variety of habitats.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Impala are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on feeding and less alert to potential threats.
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
                    The rut typically occurs from April to June in southern Africa, with peak activity in May. During this period, rams become highly territorial and aggressive, engaging in displays and combat to establish dominance.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Territorial rams will defend their domains vigorously, chasing away rivals and attempting to keep estrous ewes within their territory. The competition is intense, with only the strongest, most dominant rams successfully breeding.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Lambing and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 6.5 months, lambs are born from November to January, coinciding with the rainy season when fresh vegetation is abundant. Most births occur within a few weeks, creating a synchronized lambing period.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Newborn lambs are hidden in dense cover for the first few weeks, with the mother returning periodically to nurse. This "hider" strategy protects vulnerable young from predators. After a few weeks, lambs join the herd.
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
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Mixed Feeding Strategy</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Impala are unique among antelope in their ability to both graze and browse effectively. They feed on grasses, leaves, fruits, and flowers, adapting their diet to seasonal availability. This flexibility allows them to thrive in a variety of habitats.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Seasonal Adaptations</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    During the wet season, Impala feed heavily on fresh grasses and new growth. In the dry season, they shift to browsing on leaves, fruits, and flowers. This dietary flexibility is a key to their success across diverse habitats.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-impala.jpg"
                  alt="Impala feeding in bushveld"
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
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Habitat Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Impala prefer areas with a mix of grassland and woodland, known as "bushveld fringe." They require access to both open areas for grazing and dense cover for security. This mixed habitat provides food, water, and protection from predators.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa district's bushveld fringe provides ideal habitat, offering both grazing opportunities in open areas and browsing in woodland edges. Waterholes are important focal points, especially during the dry season.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water Requirements</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While Impala can obtain moisture from browse, they prefer to drink daily when water is available. Waterholes in or near cover are heavily utilized, making them prime locations for hunting, especially during the dry season.
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
                Hunting the Impala is a classic African experience. While they may appear less challenging than some species, their speed, agility, and wariness make them a worthy quarry that demands skill and proper preparation.
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
                      Glassing from a high vantage point or vehicle to locate a herd, then stalking on foot to get within range. This method works well in bushveld fringe areas where visibility is good.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Use available cover and terrain features. Move slowly and quietly. Impala have excellent eyesight and hearing.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Always stalk with the wind in your face. Impala have a keen sense of smell.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Shots are typically taken from 100 to 200 meters. Getting closer than 100 meters requires exceptional fieldcraft.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Blind Hunting)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Setting up a blind at a waterhole or feeding area is highly effective, especially during the dry season when Impala must drink daily. This method allows for careful trophy evaluation and reduces the need for long stalks.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Still Hunting</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Moving slowly through known Impala habitat, stopping frequently to glass and listen, can be effective. This method requires patience and knowledge of the area, but can be very rewarding.
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
                The Impala is a medium-sized antelope, but proper caliber selection is still important for clean, ethical kills. While they are not as tough as some larger species, they can still cover significant distance if poorly shot.
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
                      <td className="px-6 py-4 font-sans text-white font-medium">.243 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">90 – 100 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The classic Impala caliber. Low recoil, flat trajectory, and adequate power. Perfect for youth hunters and those sensitive to recoil.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">6.5mm (Creedmoor/Swede)</td>
                      <td className="px-6 py-4 font-sans text-gray-300">120 – 140 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">High sectional density ensures deep penetration. Low recoil allows for accurate shot placement. Currently very popular among PHs.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.270 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">130 – 150 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Flat trajectory and good terminal performance. A versatile choice that handles longer shots well.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.308 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">150 – 165 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Versatile</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">More than adequate power. Good choice if hunting larger game on the same safari. Slightly more recoil than smaller calibers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  For Impala, standard soft-point bullets work well. Premium controlled-expansion bullets provide more consistent performance, especially on quartering shots. Avoid frangible varmint bullets, which may not penetrate adequately.
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
                  Proper shot placement is critical. The Impala's vitals are positioned slightly lower and more forward than in North American deer.
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
                      Aim for the off-side shoulder. The bullet should enter behind the ribs and exit through the opposite shoulder. This angle provides excellent penetration through the vitals.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Frontal</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Only for experienced marksmen. Aim at the base of the neck where it meets the chest. This shot requires precision and adequate bullet construction.
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
                Judging an Impala trophy in the field requires careful observation. Since only rams carry horns, identification is straightforward, but evaluating trophy quality requires understanding the key characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Trophy Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  A trophy Impala ram is defined by horn length, symmetry, and overall mass.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Key Indicators</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Length</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Look for horns that extend well past the ears when viewed from the side. A mature ram's horns should appear long and sweeping. The Rowland Ward minimum is 23 5/8 inches, with exceptional trophies exceeding 28 inches.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Lyre Shape</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The horns should show a distinct lyre shape, with a wide spread and deep curve. Look for symmetry between the two horns. Uneven curves reduce trophy value.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Ridges</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The horns should be heavily ridged (annulated) along their length. Well-defined ridges indicate a mature ram. The tips should be sharp and undamaged.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mature rams are significantly larger than ewes, with thicker necks and heavier builds. Older rams often have a darker, more grizzled appearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Impala Ram Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-8">Scoring Systems</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Rowland Ward (RW)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    The historic standard. Measures the length of the longest horn along the front curve from base to tip.
                  </p>
                  <p className="text-gold-600 font-bold">Minimum for entry: 23 5/8 inches</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 26+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    The modern standard. Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-600 font-bold">Minimum for entry: 60 points</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 65+ points</p>
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
                Impala venison is considered among the finest game meat in Africa. The meat is lean, tender, and flavorful, making it highly sought after.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Impala meat is deep red, fine-grained, and extremely lean. It has a mild, sweet flavor that is less gamey than some other antelope species. The meat is tender and versatile, suitable for a wide variety of cooking methods.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Like all game meat, Impala is very lean with minimal fat. The fat that is present is yellow and should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Impala Venison Image Placeholder</span>
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
                The Athlete of the Bushveld
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Impala is a true icon of the African bushveld. Its combination of grace, speed, and agility makes it one of the most beautiful and athletic antelope on the continent. The spectacular leaping displays are unforgettable sights on any African safari.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Impala thrive in the bushveld fringe areas where they can take advantage of both grazing and browsing opportunities. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the challenge, the trophy, or the exceptional venison, the Impala offers an unforgettable hunting experience. Success requires skill, patience, and respect for this graceful and athletic animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 23 5/8 inches for Rowland Ward. Exceptional trophies exceed 28 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable and abundant throughout their range.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">A classic African hunt requiring skill, patience, and proper shot placement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Impala at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Athlete of the Bushveld in the Makoppa district's prime Impala habitat.
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
