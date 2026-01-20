'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function GemsbokPage() {
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
              src="/images/home-species-gemsbok.jpg"
              alt="Gemsbok in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Desert Warrior
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Gemsbok</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Oryx gazella
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">180-240 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">40+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.30-06</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Recommended Caliber</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">18-20 years</div>
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
                  The Desert Warrior
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Gemsbok, also known as the South African Oryx, is one of Africa's most striking and resilient antelope species. Known as "The Desert Warrior" for its ability to thrive in harsh, arid environments, this large antelope is a symbol of adaptation and survival.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its distinctive black and white facial markings, long straight horns, and elegant build, the Gemsbok is instantly recognizable. Their ability to survive without water for extended periods, extracting moisture from roots and tubers, makes them perfectly adapted to the arid regions of southern Africa.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Gemsbok thrive in the open scrub and transition zones between grassland and desert. The Arid Sweet Bushveld provides ideal habitat, sustaining them in peak condition year-round and resulting in exceptional trophy quality.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-gemsbok.jpg"
                  alt="Gemsbok bull in arid habitat"
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
                  The Gemsbok belongs to the family Bovidae, subfamily Hippotraginae. The genus <em className="text-gold-400">Oryx</em> contains four species, with the Gemsbok (Oryx gazella) being the largest and most widespread. This subfamily also includes the Sable Antelope and Roan Antelope.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The specific name <em className="text-gold-400">gazella</em> is somewhat misleading, as Gemsbok are not true gazelles. The common name "Gemsbok" comes from the Afrikaans/Dutch, meaning "chamois buck," though they are not related to chamois either.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Gemsbok is generally considered a single species with minor geographic variations. The southern African populations, including those in the Makoppa district, are among the largest-bodied and heaviest-horned in the species' range.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Gemsbok Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Gemsbok's range extends throughout the arid and semi-arid regions of southern Africa, from Namibia and Botswana through South Africa. They favor open scrub, grasslands, and desert fringes where they can find sufficient browse and access to water (though they can survive without it for extended periods).
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's Arid Sweet Bushveld provides ideal habitat, offering both grazing and browsing opportunities. The transition zone between grassland and desert is particularly favored, as it provides diverse food sources and cover.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Gemsbok is one of Africa's most successful antelope species. Listed as "Least Concern" by the IUCN, populations are stable and abundant throughout much of their range.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their success is due to their adaptability to harsh environments, ability to survive without daily water, and value to the game industry. Well-managed reserves like MIWESU ensure healthy populations that benefit both the ecosystem and sustainable utilization programs.
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
                The Gemsbok is a large, robust antelope with distinctive markings and impressive horns that reflect its adaptation to life in arid environments.
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
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 240 kg (397 – 529 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">140 – 200 kg (309 – 441 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Bulls are significantly larger with thicker necks</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">115 – 125 cm (45 – 49 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">110 – 120 cm (43 – 47 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Tall, elegant build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">190 – 240 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 220 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Robust, muscular build</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">18 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">18 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 22 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-gemsbok.jpg"
                  alt="Gemsbok coat coloration and markings"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Gemsbok's coat is a beautiful fawn to greyish-brown color, with a lighter underside. The most distinctive feature is the striking black and white facial markings: a black stripe runs from the base of the horns down the nose, with white patches on either side of the face.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Black markings extend down the front legs, and there is a black stripe along the flanks separating the fawn body from the white belly. The tail is black with a white tip. These markings are thought to serve as visual signals and may help with heat regulation.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Both bulls and cows carry horns, though bulls' horns are typically thicker and more massive. Bulls are also larger and more robust, with thicker necks. The facial markings are similar in both sexes, making field identification more challenging than in species where only males are horned.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry long, straight horns that are among the most impressive in the animal kingdom. The horns grow straight up and slightly backward, then curve forward at the tips, creating a distinctive shape.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The horns are heavily ridged (annulated) along their length, with smooth, sharp tips. In bulls, the horns are typically thicker and more massive, while cows' horns are more slender but can be equally long.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A mature trophy bull will have horns measuring 40 inches or more, with exceptional specimens exceeding 45 inches. The Rowland Ward minimum is 40 inches. Look for long, straight horns with heavy bases and sharp tips. The horns should appear massive and well-developed, with good symmetry between the two horns.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Gemsbok Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Arid Environments</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Water Conservation</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Gemsbok's most remarkable adaptation is its ability to survive without drinking water for extended periods. They can extract sufficient moisture from roots, tubers, and succulent plants, allowing them to thrive in areas where other antelope would perish.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their kidneys are highly efficient at conserving water, producing concentrated urine. They also have the ability to raise their body temperature during the day to reduce water loss through sweating, then cool down at night.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Heat Regulation</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Gemsbok's light-colored coat reflects sunlight, helping to keep the body cool. The black and white facial markings may also play a role in heat regulation, with the black areas absorbing heat and the white areas reflecting it.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their large, broad hooves provide excellent traction on sandy and rocky terrain, allowing them to move efficiently across the varied landscapes of their arid habitat.
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
                <h3 className="font-serif text-xl text-white mb-3">Mixed Herds</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Gemsbok form herds of 10-40 animals, typically consisting of both bulls and cows with their offspring. These herds are fluid, with individuals joining and leaving. Herds provide safety through numbers and shared vigilance.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Bulls</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  During the breeding season, mature bulls establish territories that they defend vigorously. They mark territories with dung piles and engage in displays and combat with rival bulls. Outside the breeding season, bulls may form bachelor groups.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Bachelor Groups</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Young bulls and bulls without territories form bachelor groups. These groups wander the periphery of territories and serve as a reservoir for future territorial bulls. Old bulls may also join bachelor groups.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Gemsbok Herd Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Gemsbok are active throughout the day, with peak feeding activity during early morning and late afternoon. During the heat of midday, they may rest in the shade, but remain alert and ready to flee.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Feeding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Gemsbok are mixed feeders, both grazing and browsing. They feed on grasses, leaves, fruits, and roots, adapting their diet to seasonal availability. Their ability to dig for roots and tubers is crucial for survival in arid environments.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Gemsbok are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on feeding and less alert to potential threats.
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
                    The rut typically occurs from April to June in southern Africa, with peak activity in May. During this period, bulls become highly territorial and aggressive, engaging in displays and combat to establish dominance.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Territorial bulls will defend their domains vigorously, chasing away rivals and attempting to keep estrous cows within their territory. The competition is intense, with only the strongest, most dominant bulls successfully breeding.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Calving and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 9 months, calves are born from November to January, coinciding with the rainy season when fresh vegetation is abundant. Most births occur within a few weeks, creating a synchronized calving period.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Newborn calves are hidden in dense cover for the first few weeks, with the mother returning periodically to nurse. This "hider" strategy protects vulnerable young from predators. After a few weeks, calves join the herd.
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
                  Gemsbok are unique in their ability to both graze and browse effectively, and to extract moisture from roots and tubers. They feed on grasses, leaves, fruits, and roots, adapting their diet to seasonal availability. This flexibility allows them to thrive in harsh, arid environments.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Water Independence</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Unlike most antelope, Gemsbok can survive without drinking water for extended periods. They extract sufficient moisture from roots, tubers, and succulent plants. This adaptation allows them to thrive in areas where other antelope would struggle or perish.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-gemsbok.jpg"
                  alt="Gemsbok feeding in arid habitat"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Arid Habitat Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Habitat Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Gemsbok prefer open scrub, grasslands, and desert fringes. They favor areas with a mix of vegetation types, allowing them to both graze and browse. The transition zone between grassland and desert is particularly favored.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa district's Arid Sweet Bushveld provides ideal habitat, offering both grazing and browsing opportunities. The open scrub areas provide excellent visibility for detecting predators, while the transition zones offer diverse food sources.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water Requirements</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While Gemsbok can survive without daily water, they will drink when water is available. Waterholes in or near cover are utilized when present, making them potential hunting locations, though Gemsbok are less dependent on water than most other antelope species.
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
                Hunting the Gemsbok is a classic African experience. Their preference for open terrain makes them visible, but their wariness and ability to cover ground quickly make them a challenging quarry.
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
                      Glassing from a high vantage point or vehicle to locate a herd, then stalking on foot to get within range. This method works well in open terrain where visibility is good.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Use available cover and terrain features. Move slowly and deliberately. Gemsbok have excellent eyesight.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Always stalk with the wind in your face. Gemsbok have a keen sense of smell.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Shots are typically taken from 150 to 300 meters. Getting closer than 150 meters requires exceptional fieldcraft.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Waterhole Hunting)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      While Gemsbok are less dependent on water than other antelope, setting up a blind at a waterhole can still be effective, especially during the dry season. This method allows for careful trophy evaluation.
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
                The Gemsbok is a large, tough animal. While not as dangerous as Cape Buffalo, a poorly placed shot can result in a long, difficult tracking job. Adequate caliber and bullet construction are essential.
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
                      <td className="px-6 py-4 font-sans text-white font-medium">.270 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">130 – 150 gr</td>
                      <td className="px-6 py-4 font-sans text-gray-300">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Adequate with perfect shot placement, but lacks margin for error. Not recommended for quartering shots.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-300">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The classic African caliber. Versatile, reliable, and widely available. A 180gr bullet provides excellent penetration.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.300 Winchester Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">180 – 200 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent trajectory, deep penetration, and reliable expansion. Handles all shot angles well. Perfect for longer shots across open terrain.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.375 H&H Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Versatile</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent for Gemsbok and allows hunting larger game on the same safari. Higher recoil but maximum confidence.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Premium controlled-expansion bullets are recommended. Gemsbok have heavy bone structure, and shots may need to penetrate shoulder blades or ribs. Bullets like Barnes TSX, Swift A-Frame, or Nosler Partition provide reliable performance. Avoid frangible varmint bullets.
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
                  Proper shot placement is critical. The Gemsbok's vitals are positioned slightly lower and more forward than in North American deer, and the animal's toughness means marginal shots may not anchor the animal.
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
                Judging a Gemsbok trophy in the field can be challenging, especially since both bulls and cows carry horns. Understanding the key characteristics of a trophy bull is essential.
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
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Mass</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Thick, heavy bases. Horns appear massive and substantial.<br/>
                        <strong>Cow:</strong> More slender horns, though they can be equally long. Bases are narrower.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Significantly larger, with a massive neck and heavy shoulders. Overall bulk is much greater.<br/>
                        <strong>Cow:</strong> Smaller, more slender frame. Lighter build overall.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Neck Thickness</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Thick, muscular neck. Very pronounced.<br/>
                        <strong>Cow:</strong> Slender neck, more delicate appearance.
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
                      <span><strong>Length:</strong> A mature bull will have horns measuring 40 inches or more. The Rowland Ward minimum is 40 inches. Exceptional trophies exceed 45 inches.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Straightness:</strong> Look for long, straight horns with minimal curve. The horns should appear parallel when viewed from the front.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Bases:</strong> Heavy, thick bases indicate a mature bull. The bases should appear substantial, not spindly.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the length of the longest horn along the straight line from base to tip.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 40 inches</p>
                    </div>
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 80 points</p>
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
                Gemsbok venison is highly regarded and commercially significant. The meat is lean, flavorful, and nutritious, making it a valuable resource.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Gemsbok meat is deep red, fine-grained, and extremely lean. It has a rich, gamey flavor that reflects the animal's mixed diet of grasses, leaves, and roots. The meat is often described as having a "beef-like" quality but with a distinctive wild game character.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Like all game meat, Gemsbok is very lean with minimal fat. The fat that is present is yellow and should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Gemsbok Venison Image Placeholder</span>
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
                The Desert Warrior
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Gemsbok is a true icon of the African arid regions. Its combination of size, beauty, resilience, and distinctive appearance makes it one of the most sought-after trophies on the continent. The magnificent straight horns are among the most impressive in the animal kingdom.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, our Arid Sweet Bushveld provides ideal habitat for Gemsbok. The nutrient-rich vegetation sustains them in peak condition year-round, resulting in exceptional trophy quality and superior meat production.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the challenge, the trophy, or the exceptional venison, the Gemsbok offers an unforgettable hunting experience. Success requires proper preparation, adequate caliber, and respect for this tough and resilient animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 40 inches for Rowland Ward. Exceptional trophies exceed 45 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable and abundant throughout their range.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">A classic African hunt requiring proper caliber and shot placement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Gemsbok at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Desert Warrior in the Makoppa district's prime Gemsbok habitat.
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
