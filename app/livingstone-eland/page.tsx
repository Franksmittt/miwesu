'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function LivingstoneElandPage() {
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
              src="/images/home-species-kudu.jpg"
              alt="Livingstone Eland in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Giant Antelope
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Livingstone Eland</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Taurotragus oryx livingstonei
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">400-900 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">30+ inches</div>
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
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Introduction
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  The Giant Antelope
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Livingstone Eland is Africa's largest antelope species, a true giant of the bushveld. Known as "The Giant Antelope" for its massive size and impressive presence, this magnificent animal is a symbol of the African wilderness.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its massive build, distinctive spiral horns, and calm demeanor, the Livingstone Eland is one of the most impressive animals on the continent. Despite their size, they are remarkably agile and can jump over obstacles up to 2 meters high from a standing position.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Livingstone Eland thrive in the open bushveld areas where they can take advantage of both browsing and grazing opportunities. Their massive size and impressive trophy quality make them a highly sought-after species for hunters.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Livingstone Eland bull in open bushveld"
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
                  The Livingstone Eland belongs to the family Bovidae, subfamily Bovinae, and the genus <em className="text-gold-400">Taurotragus</em>. The specific name <em className="text-gold-400">oryx livingstonei</em> refers to the subspecies found in southern and eastern Africa, named after the explorer David Livingstone.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Livingstone Eland is one of two Eland species, the other being the Giant Eland (Taurotragus derbianus) of West and Central Africa. The Eland is the largest antelope in the world, with bulls reaching weights exceeding 900 kilograms.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Livingstone Eland (T. o. livingstonei) is found in southern and eastern Africa, from South Africa through Zimbabwe, Zambia, and into Tanzania. Other subspecies include the Cape Eland (T. o. oryx) and the East African Eland (T. o. pattersonianus).
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Livingstone Eland Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Livingstone Eland's range extends throughout the savannas and open bushveld of southern and eastern Africa, from South Africa through Zimbabwe, Zambia, and into Tanzania. They prefer open bushveld with scattered trees and access to water.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's open bushveld provides ideal habitat, offering both browsing and grazing opportunities. Livingstone Eland are well-adapted to the region's climate and vegetation.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Status</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Livingstone Eland is listed as "Least Concern" by the IUCN, with populations stable in many areas. However, habitat loss and fragmentation pose threats to some populations.
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
                The Livingstone Eland is the largest antelope in the world, with massive build and impressive physical adaptations.
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
                      <td className="px-6 py-4 font-sans text-gray-600">400 – 900 kg (882 – 1,984 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">300 – 600 kg (662 – 1,323 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Largest antelope in the world</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">150 – 180 cm (59 – 71 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">140 – 160 cm (55 – 63 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Massive, powerful build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">240 – 340 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">220 – 300 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Long, robust body</td>
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

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Livingstone Eland coat coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Livingstone Eland's coat is typically tan to fawn in color, with faint white vertical stripes on the sides. The coat is short and smooth, with a distinctive dewlap (fold of skin) hanging from the neck. The face has distinctive markings, including a dark patch on the forehead and white markings around the eyes.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Males are typically darker than females, with more pronounced markings. The dewlap is more prominent in males and serves as a display feature during the rut. The coloration provides good camouflage in bushveld environments.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Bulls are significantly larger than cows and have thicker, more massive horns. Both sexes have the same coloration pattern, though bulls' coats are typically darker and more pronounced.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry horns, though bulls' horns are typically longer and more massive. The horns grow in a distinctive spiral pattern, creating a unique appearance. They are ridged and can be straight or slightly curved.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Trophy quality is determined by length, mass, and symmetry. A mature bull will have horns measuring 30 inches or more, with exceptional specimens exceeding 40 inches. The Rowland Ward minimum is 30 inches.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Look for long, massive horns with good spiral development. The horns should be thick at the base and maintain good mass throughout. The distinctive spiral pattern is most desirable, with horns that show clear ridges and good symmetry.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Livingstone Eland Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Size and Agility</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Massive Build</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Livingstone Eland's massive build is its primary defense. Weighing up to 900 kilograms, they are the largest antelope in the world. This size, combined with their powerful muscles, makes them capable of defending themselves against most predators.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Despite their size, Livingstone Eland are remarkably agile and can jump over obstacles up to 2 meters high from a standing position. Their powerful hindquarters provide the strength needed for these impressive leaps.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Mixed Feeding Strategy</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Livingstone Eland are mixed feeders, consuming both grass and browse. This dietary flexibility allows them to thrive in a variety of habitats and conditions, from open grasslands to dense bushveld.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their ability to browse on leaves, fruits, and flowers, combined with their grazing on grasses, makes them highly adaptable. This flexibility is essential for maintaining their massive size and energy requirements.
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
                  Livingstone Eland form small to medium-sized herds that can number from a few individuals to several dozen. These herds provide safety through numbers, as many eyes and ears can detect predators more effectively.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Calm Demeanor</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Despite their massive size, Livingstone Eland are generally calm and non-aggressive. They are known for their docile nature and are often approachable, making them easier to hunt than many other species.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Leaf className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Habitat Preferences</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Prefer open bushveld with scattered trees and access to water. They require areas with both browsing and grazing opportunities. The combination of these habitats provides food, water, and cover.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Livingstone Eland Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Feeding Behavior</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Livingstone Eland are mixed feeders, consuming both grass and browse. They prefer fresh, green growth when available and will move to areas with recent rain or new growth. Their feeding helps maintain vegetation health.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Rut</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Breeding behavior is seasonal, with the rut typically occurring during the dry season (May-July). During this period, bulls become more active and may compete for access to estrous cows. However, combat is generally less aggressive than in many other antelope species.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Livingstone Eland are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on feeding and less alert to potential threats.
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
                Hunting Livingstone Eland is a unique African experience. Their massive size and calm demeanor make them a challenging but rewarding quarry.
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
                      Glassing from a vehicle or high vantage point to locate a bull, then stalking on foot. This method allows for careful evaluation of horn quality and trophy potential.
                    </p>
                    <ul className="text-gray-600 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-600">The Approach:</strong> Move slowly and quietly. Use available cover. Livingstone Eland have excellent vision but are generally less alert than smaller antelope.</li>
                      <li><strong className="text-gold-600">Wind:</strong> Important but less critical than with smaller species. Livingstone Eland have a good sense of smell but are generally more tolerant of human presence.</li>
                      <li><strong className="text-gold-600">Distance:</strong> Shots are typically taken from 100 to 200 meters, though closer shots are preferred for better accuracy.</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Vehicle-Based Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In open bushveld areas, vehicle-based hunting can be effective. The vehicle allows for covering large areas and locating bulls within herds. Once located, a stalk can be initiated or a shot taken from the vehicle if legal and ethical.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm p-6">
                    <h4 className="font-serif text-xl text-onyx mb-3">Still Hunting</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Moving slowly through known Livingstone Eland habitat, stopping frequently to glass. This method requires patience and good fieldcraft but can be effective for locating bulls.
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
                Livingstone Eland are massive animals that require heavy calibers with premium bullet construction. Medium to heavy calibers are essential, with emphasis on penetration and energy.
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
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">The recommended choice for Livingstone Eland. Heavy bullets provide deep penetration and reliable expansion. Maximum confidence.</td>
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
                  Use premium controlled-expansion bullets for clean kills and reliable penetration. Livingstone Eland are massive animals with dense muscle mass, so bullets must penetrate deeply and retain weight.
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
                  Proper shot placement is essential for clean kills. Livingstone Eland are massive animals, so accurate shot placement is critical. The animal's size makes shot placement even more important.
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
                Field judging a Livingstone Eland requires careful observation of horn length, mass, and symmetry. The open bushveld habitat makes evaluation easier than with many other species.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Field Judging Guide</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  When evaluating a Livingstone Eland trophy, look for long, massive horns with good spiral development. The horns should be thick at the base and maintain good mass throughout. The distinctive spiral pattern is most desirable.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Key Indicators</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div>
                      <strong className="text-gold-400">Length:</strong> Horns should appear long and massive. If they extend well past the ears and have good spiral development, the bull is likely in the 30+ inch class.
                    </div>
                    <div>
                      <strong className="text-gold-400">Mass:</strong> Look for thick bases and substantial horn throughout. Heavy horns indicate a mature bull.
                    </div>
                    <div>
                      <strong className="text-gold-400">Symmetry:</strong> Both horns should be similar in length and shape. Asymmetrical horns reduce trophy value.
                    </div>
                    <div>
                      <strong className="text-gold-400">Spiral:</strong> The distinctive spiral pattern is most desirable. Horns should show clear ridges and good spiral development.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Livingstone Eland Bull Image Placeholder</span>
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
                  <p className="text-gold-400 font-bold">Minimum for entry: 30 inches</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 36+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-300 leading-loose mb-2">
                    Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-400 font-bold">Bronze Medal: 100+ points</p>
                  <p className="text-gold-400 font-bold mt-2">Gold Medal: 120+ points</p>
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
                Livingstone Eland venison is lean, flavorful, and highly regarded. The meat is dark red and has a rich, gamey flavor. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Meat Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Livingstone Eland venison is lean, dark red, and flavorful. The meat has a rich, gamey flavor that is often compared to beef but with a distinctive wild game character. It is highly regarded and versatile in the kitchen.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Fat Content</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Like all game meat, Livingstone Eland is very lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Livingstone Eland Venison Image Placeholder</span>
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
                The Giant Antelope
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Livingstone Eland is Africa's largest antelope species, a true giant of the bushveld. Its combination of massive size, impressive presence, and calm demeanor make it one of the most impressive animals on the continent.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Livingstone Eland thrive in the open bushveld areas where they can take advantage of both browsing and grazing opportunities. Their massive size and impressive trophy quality make them a highly sought-after species for hunters.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the trophy, the exceptional venison, or the unique hunting experience, the Livingstone Eland offers a memorable hunt. Success requires patience, skill, and adequate equipment to handle these massive animals.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 30 inches for Rowland Ward. Exceptional trophies exceed 36 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable in many areas. Habitat protection is essential.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">Unique hunting experience. Massive size requires adequate equipment and skill.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Livingstone Eland at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Giant Antelope in the Makoppa district's prime Livingstone Eland habitat.
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
