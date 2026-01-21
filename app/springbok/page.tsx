'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function SpringbokPage() {
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
              alt="Springbok in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Pronking Gazelle
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Springbok</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Antidorcas marsupialis
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">30-50 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Ram Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">14+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.243 Win</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Recommended Caliber</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">10-12 years</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Lifespan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Introduction
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  The Pronking Gazelle
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Springbok is one of South Africa's most iconic and graceful antelope species. Known as "The Pronking Gazelle" for its spectacular jumping display, this medium-sized antelope is a symbol of the open plains and arid regions of southern Africa.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its elegant build, distinctive white face markings, and the unique "pronking" behavior—where it leaps straight up into the air with all four legs extended—the Springbok is instantly recognizable. Their ability to survive in arid environments and their remarkable speed make them one of the most adaptable antelope on the continent.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Springbok thrive in the open plains and grasslands where they can take advantage of both grazing opportunities and their remarkable ability to survive with minimal water. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Springbok ram in open plains"
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

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Taxonomic Classification</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Springbok belongs to the family Bovidae, subfamily Antilopinae, and the genus <em className="text-gold-400">Antidorcas</em>. The specific name <em className="text-gold-400">marsupialis</em> refers to the "pouch" or fold of skin along the back that opens when the animal pronks, revealing white hair.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Springbok is the only member of its genus and is endemic to southern Africa. It is closely related to gazelles but has unique adaptations for life in arid environments, including the ability to survive without free water for extended periods.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Pronking Display</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Springbok's most distinctive feature is the "pronk"—a spectacular jumping display where the animal leaps straight up into the air with all four legs extended and the back arched. During this display, a fold of skin along the back opens, revealing white hair. This behavior serves as both a warning signal and a display of fitness.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Springbok Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Springbok's range extends throughout the arid and semi-arid regions of southern Africa, from southern Angola and Namibia through Botswana and South Africa. They prefer open grasslands, savannas, and semi-desert areas with sparse vegetation.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's open plains and grasslands provide ideal habitat, offering both grazing opportunities and the open spaces that Springbok require. They are well-adapted to the region's climate and vegetation.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Springbok is listed as "Least Concern" by the IUCN, with populations stable and even increasing in many areas. Their adaptability and high reproductive rate have ensured their survival despite historical hunting pressure.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Well-managed reserves like MIWESU ensure healthy populations through sustainable utilization and habitat protection. The species' value to the hunting industry has contributed to habitat conservation.
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
                The Springbok is a medium-sized antelope with distinctive markings and adaptations for life in open, arid environments.
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
                      <td className="px-6 py-4 font-sans text-gray-600">30 – 50 kg (66 – 110 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">25 – 40 kg (55 – 88 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Lightweight, agile build</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">70 – 90 cm (28 – 35 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">65 – 85 cm (26 – 33 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Medium-sized antelope</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">110 – 140 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Streamlined, graceful build</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">10 – 12 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">10 – 12 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 15 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Springbok coat coloration and markings"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Springbok's coat is a light tan or fawn color on the back and sides, with a white underbelly. A distinctive dark brown stripe runs along the flanks, separating the tan upper body from the white underbelly. The face is white with dark brown markings around the eyes and on the forehead.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The most distinctive feature is the "pouch" or fold of skin along the back that opens during the pronking display, revealing white hair. This fold runs from the middle of the back to the tail and is unique to the Springbok.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Rams are slightly larger than ewes and have thicker, more robust horns. Both sexes have the same coloration and markings, though rams' horns are typically longer and more massive.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both rams and ewes carry horns, though rams' horns are typically longer and more massive. The horns grow upward and backward in a graceful curve, creating a distinctive lyre shape. They are ridged and black-tipped.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Trophy quality is determined by length, mass, and symmetry. A mature ram will have horns measuring 14 inches or more, with exceptional specimens exceeding 18 inches. The Rowland Ward minimum is 14 inches.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Look for long, graceful horns with good curvature. The horns should be thick at the base and maintain good mass throughout. Symmetry is important, as asymmetrical horns reduce trophy value. The classic lyre shape is most desirable.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Springbok Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Arid Environments</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Water Independence</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Springbok have remarkable adaptations for surviving in arid environments. They can survive without free water for extended periods, obtaining moisture from the vegetation they consume and from metabolic water production.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their kidneys are highly efficient at conserving water, and they can concentrate their urine to minimize water loss. This adaptation allows them to thrive in areas where other antelope cannot survive.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Speed and Agility</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Springbok are built for speed and agility. Their lightweight build, long legs, and powerful hindquarters allow them to reach speeds of up to 88 km/h (55 mph) and make spectacular leaps.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The pronking display—where they leap straight up into the air—is thought to serve multiple purposes: warning conspecifics of danger, displaying fitness to predators, and possibly confusing predators about the animal's location.
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
                <h3 className="font-serif text-xl text-white mb-3">Herd Structure</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Springbok form large herds that can number in the hundreds or even thousands. These herds provide safety through numbers, as many eyes and ears can detect predators more effectively. Herds are typically led by older, experienced ewes.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">The Pronk</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The Springbok's most distinctive behavior is the "pronk"—a spectacular jumping display where the animal leaps straight up into the air with all four legs extended. This behavior serves as both a warning signal and a display of fitness.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Leaf className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Habitat Preferences</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Prefer open grasslands, savannas, and semi-desert areas with sparse vegetation. They require open spaces for escape and prefer areas with access to water, though they can survive without it for extended periods.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Springbok Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Feeding Behavior</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Springbok are selective grazers, feeding primarily on grasses and forbs. They prefer fresh, green growth when available and will move to areas with recent rain or new growth. Their grazing helps maintain grassland health by preventing grass from becoming too tall and unpalatable.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Rut</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Breeding behavior is seasonal, with the rut typically occurring during the dry season (May-July). During this period, rams become territorial and compete for access to estrous ewes. Territorial rams maintain harems and defend their territories aggressively.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Springbok are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on grazing and less alert to potential threats.
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
                Hunting Springbok is a classic African plains game experience. Their speed, alertness, and open habitat make them a challenging but rewarding quarry.
              </p>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Spot and Stalk</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      Glassing from a vehicle or high vantage point to locate a ram, then stalking on foot. This method allows for careful evaluation of horn quality and trophy potential.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-600">The Approach:</strong> Move slowly and quietly. Use available cover. Springbok have excellent vision and are very alert.</li>
                      <li><strong className="text-gold-600">Wind:</strong> Critical. Always stalk with the wind in your face. Springbok have a keen sense of smell.</li>
                      <li><strong className="text-gold-600">Distance:</strong> Shots are typically taken from 150 to 300 meters, though closer shots are preferred for better accuracy.</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Vehicle-Based Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In open plains areas, vehicle-based hunting can be effective. The vehicle allows for covering large areas and locating rams within herds. Once located, a stalk can be initiated or a shot taken from the vehicle if legal and ethical.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Still Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Moving slowly through known Springbok habitat, stopping frequently to glass. This method requires patience and good fieldcraft but can be effective for locating rams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Hunting Stalk Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Rifle Selection */}
            <div className="bg-white border border-gray-200 shadow-luxury p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-8">Rifle and Caliber Selection</h3>
              <p className="font-sans text-gray-600 text-lg leading-loose mb-8">
                Springbok are relatively small but require accurate shot placement. Light to medium calibers are ideal, with emphasis on accuracy and flat trajectory for longer shots.
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
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Excellent choice with premium bullets. Low recoil allows for accurate shot placement. Perfect for Springbok.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">6.5mm Creedmoor</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 140 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Modern, accurate cartridge. Excellent ballistics and manageable recoil. Perfect for longer shots.</td>
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
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-gold-500/10 border-l-4 border-gold-500 p-6">
                <h4 className="font-serif text-xl text-onyx mb-3">Bullet Selection</h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Use premium controlled-expansion bullets for clean kills and minimal meat damage. Since Springbok are often hunted at longer ranges, bullets with good ballistic coefficients and reliable expansion are important.
                </p>
              </div>
            </div>

            {/* Shot Placement */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Shot Placement Diagram Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Shot Placement</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Proper shot placement is essential for clean kills. Springbok are relatively small, so accurate shot placement is critical. The animal's speed and alertness make shot placement even more important.
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
                Field judging a Springbok requires careful observation of horn length, mass, and symmetry. The open habitat makes evaluation easier than with many other species.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Field Judging Guide</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  When evaluating a Springbok trophy, look for long, graceful horns with good curvature. The horns should be thick at the base and maintain good mass throughout. Symmetry is important, as asymmetrical horns reduce trophy value.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Key Indicators</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div>
                      <strong className="text-gold-400">Length:</strong> Horns should appear long and graceful. If they extend well past the ears and have good curvature, the ram is likely in the 14+ inch class.
                    </div>
                    <div>
                      <strong className="text-gold-400">Mass:</strong> Look for thick bases and substantial horn throughout. Heavy horns indicate a mature ram.
                    </div>
                    <div>
                      <strong className="text-gold-400">Symmetry:</strong> Both horns should be similar in length and shape. Asymmetrical horns reduce trophy value.
                    </div>
                    <div>
                      <strong className="text-gold-400">Shape:</strong> The classic lyre shape is most desirable. Horns should curve upward and backward gracefully.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Springbok Ram Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Scoring Systems</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Rowland Ward (RW)</h4>
                  <p className="text-gray-300 leading-loose mb-2">
                    Measures the length of the longest horn along the curve from base to tip.
                  </p>
                  <p className="text-gold-400 font-bold">Minimum for entry: 14 inches</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 16+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-300 leading-loose mb-2">
                    Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-400 font-bold">Bronze Medal: 50+ points</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 60+ points</p>
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
                Springbok venison is lean, flavorful, and highly regarded. The meat is fine-grained and has a mild, sweet flavor. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Meat Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Springbok venison is lean, fine-grained, and flavorful. The meat is lighter in color than browsing antelope and has a mild, sweet flavor. It is highly regarded and versatile in the kitchen.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Fat Content</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Like all game meat, Springbok is very lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Springbok Venison Image Placeholder</span>
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
                The Pronking Gazelle
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Springbok is one of South Africa's most iconic and graceful antelope species. Its combination of elegant appearance, remarkable adaptations for arid environments, and the spectacular pronking display make it a symbol of the African plains.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Springbok thrive in the open plains and grasslands where they can take advantage of both grazing opportunities and their remarkable ability to survive with minimal water. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the trophy, the exceptional venison, or the classic African hunting experience, the Springbok offers a memorable hunt. Success requires patience, skill, and the ability to make accurate shots at longer ranges in open terrain.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 14 inches for Rowland Ward. Exceptional trophies exceed 16 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable and increasing. Adaptable to various habitats.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">Classic African plains game. Speed, alertness, and open terrain make it challenging.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Springbok at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Pronking Gazelle in the Makoppa district's prime Springbok habitat.
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
