'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function RedHartebeestPage() {
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
              alt="Red Hartebeest in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Red Antelope
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Red Hartebeest</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Alcelaphus buselaphus caama
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">120-200 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">18+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.30-06</div>
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
                  The Red Antelope of the Plains
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Red Hartebeest is one of southern Africa's most distinctive and elegant antelope species. Known as "The Red Antelope" for its rich reddish-brown coloration, this large antelope is a member of the Alcelaphini tribe, sharing characteristics with Blesbok and Wildebeest.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its elongated head, high shoulders, sloping back, and distinctive lyre-shaped horns, the Red Hartebeest is instantly recognizable. Their remarkable speed and endurance make them one of the fastest antelope on the continent, capable of maintaining high speeds over long distances.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Red Hartebeest thrive in the open plains and grasslands where they can take advantage of their speed and endurance. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Red Hartebeest bull in open plains"
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
                  The Red Hartebeest belongs to the family Bovidae, subfamily Alcelaphinae, and the genus <em className="text-gold-400">Alcelaphus</em>. The specific name <em className="text-gold-400">buselaphus caama</em> refers to the subspecies found in southern Africa, distinguished by its reddish coloration.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Red Hartebeest is part of the Alcelaphini tribe, which also includes the Blesbok, Bontebok, and Wildebeest. This tribe is characterized by high shoulders, sloping backs, and elongated skulls—adaptations evolved for endurance running and grazing in open environments.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Red Hartebeest (A. b. caama) is found in southern Africa, from Namibia and Botswana through South Africa. Other subspecies include the Lichtenstein's Hartebeest (A. b. lichtensteinii) and the Western Hartebeest (A. b. major), each with distinct coloration and distribution.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Red Hartebeest Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Red Hartebeest's range extends throughout the arid and semi-arid regions of southern Africa, from Namibia and Botswana through South Africa. They prefer open grasslands, savannas, and semi-desert areas with sparse vegetation.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's open plains and grasslands provide ideal habitat, offering both grazing opportunities and the open spaces that Red Hartebeest require. They are well-adapted to the region's climate and vegetation.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Status</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Red Hartebeest is listed as "Least Concern" by the IUCN, with populations stable and even increasing in many areas. Their adaptability and high reproductive rate have ensured their survival despite historical hunting pressure.
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
                The Red Hartebeest is a large antelope with distinctive markings and adaptations for life in open, arid environments.
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
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 200 kg (265 – 441 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">100 – 160 kg (220 – 353 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Large, robust build</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 140 cm (47 – 55 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">110 – 130 cm (43 – 51 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">High shoulders, sloping back</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 240 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">170 – 220 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Elongated head and body</td>
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
                  alt="Red Hartebeest coat coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Red Hartebeest's coat is a rich reddish-brown color, giving it its name. The coloration can vary from light tan to deep reddish-brown, with darker markings on the face, legs, and tail. The underbelly is typically lighter in color.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The face has distinctive black markings around the eyes and on the forehead, creating a mask-like appearance. The tail is black with a white tip, and the legs have dark markings that help break up the animal's outline.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Bulls are slightly larger than cows and have thicker, more robust horns. Both sexes have the same coloration and markings, though bulls' horns are typically longer and more massive.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry horns, though bulls' horns are typically longer and more massive. The horns grow upward and backward in a distinctive lyre shape, creating a unique appearance. They are ridged and black-tipped.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Trophy quality is determined by length, mass, and symmetry. A mature bull will have horns measuring 18 inches or more, with exceptional specimens exceeding 24 inches. The Rowland Ward minimum is 18 inches.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Look for long, graceful horns with good curvature. The horns should be thick at the base and maintain good mass throughout. The distinctive lyre shape is most desirable, with horns that curve upward and backward gracefully.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Red Hartebeest Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Speed and Endurance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Body Shape</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Red Hartebeest's high shoulders, sloping back, and elongated skull are adaptations for endurance running. This body shape allows for efficient movement over long distances at high speeds.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their long legs and powerful hindquarters provide the power needed for rapid acceleration and sustained speed. The elongated head reduces wind resistance and improves aerodynamics during high-speed chases.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Speed and Agility</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Red Hartebeest are among the fastest antelope on the continent, capable of reaching speeds of up to 80 km/h (50 mph) and maintaining high speeds over long distances.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their remarkable endurance allows them to outrun predators over long distances. When threatened, they rely on speed and distance rather than cover, making them well-suited to open plains habitats.
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
                  Red Hartebeest form small to medium-sized herds that can number from a few individuals to several dozen. These herds provide safety through numbers, as many eyes and ears can detect predators more effectively.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Bulls</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mature bulls are territorial and defend their territories aggressively. They maintain harems of cows and will fight with rival bulls to maintain dominance. Territorial behavior is most pronounced during the rut.
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

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Red Hartebeest Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Feeding Behavior</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Red Hartebeest are bulk grazers, feeding primarily on grasses. They prefer fresh, green growth when available and will move to areas with recent rain or new growth. Their grazing helps maintain grassland health by preventing grass from becoming too tall and unpalatable.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Rut</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Breeding behavior is seasonal, with the rut typically occurring during the dry season (May-July). During this period, bulls become highly territorial and compete aggressively for access to estrous cows. Territorial bulls maintain harems and defend their territories with displays and combat.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Red Hartebeest are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on grazing and less alert to potential threats.
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
                Hunting Red Hartebeest is a classic African plains game experience. Their speed, alertness, and open habitat make them a challenging but rewarding quarry.
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
                      Glassing from a vehicle or high vantage point to locate a bull, then stalking on foot. This method allows for careful evaluation of horn quality and trophy potential.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-600">The Approach:</strong> Move slowly and quietly. Use available cover. Red Hartebeest have excellent vision and are very alert.</li>
                      <li><strong className="text-gold-600">Wind:</strong> Critical. Always stalk with the wind in your face. Red Hartebeest have a keen sense of smell.</li>
                      <li><strong className="text-gold-600">Distance:</strong> Shots are typically taken from 150 to 300 meters, though closer shots are preferred for better accuracy.</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Vehicle-Based Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In open plains areas, vehicle-based hunting can be effective. The vehicle allows for covering large areas and locating bulls within herds. Once located, a stalk can be initiated or a shot taken from the vehicle if legal and ethical.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Still Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Moving slowly through known Red Hartebeest habitat, stopping frequently to glass. This method requires patience and good fieldcraft but can be effective for locating bulls.
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
                Red Hartebeest are large, tough animals that require adequate caliber and bullet construction. Medium to heavy calibers are recommended, with emphasis on accuracy and penetration.
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
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.270 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 150 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Adequate with premium bullets and perfect shot placement. Lacks margin for error.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-600">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Excellent choice. Good penetration and energy. Handles all shot angles well. The recommended choice.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.300 Winchester Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-600">180 – 200 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Powerful and effective. Excellent penetration and energy. Ideal for longer shots.</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">.308 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-600">150 – 165 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-600 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Reliable and effective. Good penetration and expansion. Handles all shot angles well.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-gold-500/10 border-l-4 border-gold-500 p-6">
                <h4 className="font-serif text-xl text-onyx mb-3">Bullet Selection</h4>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Use premium controlled-expansion bullets for clean kills and reliable penetration. Red Hartebeest are tough animals with dense muscle mass, so bullets must penetrate deeply and retain weight.
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
                  Proper shot placement is essential for clean kills. Red Hartebeest are large, tough animals, so accurate shot placement is critical. The animal's speed and alertness make shot placement even more important.
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
                Field judging a Red Hartebeest requires careful observation of horn length, mass, and symmetry. The open habitat makes evaluation easier than with many other species.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Field Judging Guide</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  When evaluating a Red Hartebeest trophy, look for long, graceful horns with good curvature. The horns should be thick at the base and maintain good mass throughout. The distinctive lyre shape is most desirable.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Key Indicators</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div>
                      <strong className="text-gold-400">Length:</strong> Horns should appear long and graceful. If they extend well past the ears and have good curvature, the bull is likely in the 18+ inch class.
                    </div>
                    <div>
                      <strong className="text-gold-400">Mass:</strong> Look for thick bases and substantial horn throughout. Heavy horns indicate a mature bull.
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
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Red Hartebeest Bull Image Placeholder</span>
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
                  <p className="text-gold-400 font-bold">Minimum for entry: 18 inches</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 22+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-300 leading-loose mb-2">
                    Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-400 font-bold">Bronze Medal: 60+ points</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 70+ points</p>
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
                Red Hartebeest venison is lean, flavorful, and highly regarded. The meat is dark red and has a rich, gamey flavor. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Meat Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Red Hartebeest venison is lean, dark red, and flavorful. The meat has a rich, gamey flavor that is often compared to beef but with a distinctive wild game character. It is highly regarded and versatile in the kitchen.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Fat Content</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Like all game meat, Red Hartebeest is very lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Red Hartebeest Venison Image Placeholder</span>
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
                The Red Antelope
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Red Hartebeest is one of southern Africa's most distinctive and elegant antelope species. Its combination of rich reddish-brown coloration, remarkable speed and endurance, and distinctive lyre-shaped horns make it a symbol of the African plains.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Red Hartebeest thrive in the open plains and grasslands where they can take advantage of their speed and endurance. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the trophy, the exceptional venison, or the classic African hunting experience, the Red Hartebeest offers a memorable hunt. Success requires patience, skill, and the ability to make accurate shots at longer ranges in open terrain.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 18 inches for Rowland Ward. Exceptional trophies exceed 22 inches.</p>
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
                Experience the Red Hartebeest at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Red Antelope in the Makoppa district's prime Red Hartebeest habitat.
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
