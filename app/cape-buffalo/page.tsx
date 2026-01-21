'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function CapeBuffaloPage() {
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
              alt="Cape Buffalo in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Black Death
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Cape Buffalo</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Syncerus caffer
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">500-900 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">40+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.375 H&H</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Minimum Caliber</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">15-20 years</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Lifespan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="bg-red-900/20 border-y border-red-500/30 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 text-red-400">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Dangerous Game</h3>
                <p className="text-red-300 text-sm">
                  Cape Buffalo are classified as dangerous game and are responsible for more hunter fatalities in Africa than any other animal. Hunting requires experienced Professional Hunters, proper equipment, and strict safety protocols.
                </p>
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
                  The Black Death
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Cape Buffalo is one of Africa's most formidable and respected animals. Known as "The Black Death" for its dark coat and reputation as one of the continent's most dangerous game animals, this massive bovine is a member of the "Big Five" and represents the ultimate African hunting challenge.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its massive build, formidable horns, and legendary tenacity, the Cape Buffalo has earned a reputation for being one of the most dangerous animals to hunt. They are responsible for more hunter fatalities in Africa than any other species, making them a quarry that demands the utmost respect, preparation, and skill.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Cape Buffalo thrive in the dense bushveld areas where they can find both grazing opportunities and thick cover. Their presence adds an element of danger and excitement to the reserve, even for those not actively hunting them.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Cape Buffalo bull in dense bushveld"
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
                  The Cape Buffalo belongs to the family Bovidae, subfamily Bovinae, and the genus <em className="text-gold-400">Syncerus</em>. The specific name <em className="text-gold-400">caffer</em> derives from the Latin word for "Cape," referring to the Cape of Good Hope where European explorers first encountered them.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Cape Buffalo is one of four subspecies of the African Buffalo. The southern African populations (S. c. caffer) are among the largest and most aggressive, with bulls reaching weights exceeding 900 kilograms.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Cape Buffalo (S. c. caffer) is found in southern and eastern Africa. Other subspecies include the Forest Buffalo (S. c. nanus) of Central and West Africa, the Sudan Buffalo (S. c. brachyceros), and the Nile Buffalo (S. c. aequinoctialis). The Makoppa district is home to the Cape Buffalo subspecies.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Cape Buffalo Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Cape Buffalo's range extends throughout sub-Saharan Africa, from Senegal in the west to Ethiopia in the east, and southward to South Africa. They favor areas with dense bushveld, grasslands, and access to water. They require thick cover for security and open areas for grazing.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's dense bushveld provides ideal habitat, offering both grazing opportunities and thick cover. Cape Buffalo are commonly found near water sources, where they wallow to cool off and protect themselves from insects.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Status</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Cape Buffalo is listed as "Near Threatened" by the IUCN, with populations declining in some areas due to habitat loss and disease. However, in well-managed reserves, populations are stable and even increasing.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The species' value to the hunting industry has contributed significantly to habitat conservation. Well-managed reserves like MIWESU ensure healthy populations through sustainable utilization and habitat protection.
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
                The Cape Buffalo is a massive, powerfully built animal with adaptations that reflect its status as one of Africa's most formidable creatures.
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
                      <td className="px-6 py-4 font-sans text-gray-600">500 – 900 kg (1,102 – 1,984 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">400 – 700 kg (882 – 1,543 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Bulls are significantly larger with massive necks and shoulders</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 150 cm (51 – 59 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 140 cm (47 – 55 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Massive, powerful build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">240 – 340 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">220 – 300 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Robust, barrel-shaped body</td>
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
                  src="/images/home-species-wildebeest.jpg"
                  alt="Cape Buffalo coat coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Cape Buffalo's coat is typically dark brown to black, giving rise to the nickname "Black Death." The color can vary from almost black in mature bulls to lighter brown in younger animals and cows.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The hair is sparse and coarse, with older bulls often appearing almost hairless. The skin is thick and tough, providing protection from thorns, insects, and the elements. The sparse hair allows for better heat dissipation in the African sun.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Bulls are significantly larger than cows, with more massive necks, shoulders, and horns. Mature bulls often have a "boss" where the horns meet on the forehead—a solid mass of bone that protects the skull during combat. Cows' horns are typically smaller and lack the heavy boss.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both bulls and cows carry horns, though bulls' horns are typically larger and more massive. The horns grow outward and downward from the sides of the head, then curve upward and inward, creating the distinctive "boss" where they meet on the forehead in mature bulls.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The boss is a solid mass of bone that develops as the animal matures. It serves as protection during head-to-head combat and is a key indicator of a mature bull. The horns themselves are used for defense, combat, and digging.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A mature trophy bull will have horns with a spread of 40 inches or more, with exceptional specimens exceeding 50 inches. The Rowland Ward minimum is 40 inches. Look for wide spread, heavy boss, and good symmetry. The horns should appear massive and well-developed, with the boss fully formed.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Cape Buffalo Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Survival</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Massive Build</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Cape Buffalo's massive build is its primary defense. Weighing up to 900 kilograms, they are among the largest bovines in Africa. This size, combined with their powerful muscles, makes them capable of charging at speeds up to 56 km/h (35 mph).
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their thick hide provides protection from thorns, insects, and even some predators. The combination of size, strength, and aggression makes them one of the most dangerous animals on the continent.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Sensory Adaptations</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Cape Buffalo have excellent senses of smell and hearing, which are crucial for detecting predators and threats. Their eyesight is also good, allowing them to spot danger at a distance.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their large, mobile ears can rotate to pinpoint the source of sounds, providing early warning of approaching danger. The acute sense of smell is used for detecting predators, finding food, and social communication.
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
                  Cape Buffalo form large herds that can number in the hundreds or even thousands. These herds provide safety through numbers, as many eyes and ears can detect predators more effectively than a few individuals. Herds are typically led by older, experienced cows.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Dagga Boys</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Old bulls, often past their prime breeding age, may leave the herd and form small bachelor groups or become solitary. These "dagga boys" (from the Zulu word for mud, as they often wallow) are among the most dangerous to hunt, as they are more unpredictable and aggressive.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Aggression</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cape Buffalo are renowned for their aggression, especially when wounded or cornered. They are known to charge without warning and will pursue threats over long distances. This aggressive nature, combined with their size and strength, makes them extremely dangerous.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Cape Buffalo Herd Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Cape Buffalo are active throughout the day, with peak feeding activity during early morning and late afternoon. During the heat of midday, they may rest in the shade or wallow in mud to cool off and protect themselves from insects.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Feeding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cape Buffalo are bulk grazers, feeding primarily on grasses. They prefer fresh, green growth and will move to areas with recent rain or new growth. Their grazing helps maintain grassland health by preventing grass from becoming too tall.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Cape Buffalo are during early morning and late afternoon when they are actively feeding. During these periods, they are more focused on grazing and less alert to potential threats. However, extreme caution is always required.
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
                    The rut can occur year-round, but peaks during the rainy season when food is abundant. During this period, bulls become more aggressive and may fight with rivals for access to estrous cows.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Bulls will follow herds, attempting to mate with receptive cows. Competition can be intense, with bulls using their massive horns and boss in combat. The dominant bull typically secures mating rights.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Calving and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 11 months, cows give birth to a single calf. Calving typically occurs during the rainy season when food is abundant. The herd provides protection for vulnerable newborns.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Calves remain close to their mothers and are protected by the entire herd. Cows are highly protective of their young, and the herd will form defensive formations around calves when threatened.
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

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Grazing Preferences</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Cape Buffalo are bulk grazers, feeding primarily on grasses. They prefer fresh, green growth and will move to areas with recent rain or new growth. Their grazing helps maintain grassland health by preventing grass from becoming too tall and unpalatable.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Dietary Flexibility</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    While primarily grazers, Cape Buffalo will also browse on leaves, fruits, and other vegetation when grass is scarce. This dietary flexibility allows them to survive in a variety of habitats and conditions.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/home-species-wildebeest.jpg"
                  alt="Cape Buffalo grazing"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Waterhole Activity Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Habitat Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Cape Buffalo prefer areas with dense bushveld, grasslands, and access to water. They require thick cover for security and open areas for grazing. The combination of these habitats provides food, water, and protection from predators.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa district's dense bushveld provides ideal habitat, offering both grazing opportunities and thick cover. Cape Buffalo are commonly found near water sources, where they wallow to cool off and protect themselves from insects.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water and Wallowing</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cape Buffalo are water-dependent and must drink daily. They also require mud wallows, which serve multiple purposes: cooling, protection from insects, and removal of parasites. Waterholes and mud wallows are prime locations for hunting, though extreme caution is required.
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
                Hunting Cape Buffalo is the ultimate African dangerous game experience. It requires experienced Professional Hunters, proper equipment, and strict safety protocols. This is not a hunt for the inexperienced or ill-equipped.
              </p>
            </div>

            {/* Safety Warning */}
            <div className="bg-red-900/30 border-2 border-red-500/50 p-8 mb-16 reveal">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-white mb-4">Critical Safety Information</h3>
                  <p className="text-red-200 text-lg leading-loose mb-4">
                    Cape Buffalo are classified as dangerous game and are responsible for more hunter fatalities in Africa than any other animal. They are known to charge without warning and will pursue threats over long distances.
                  </p>
                  <ul className="text-red-200 space-y-2 ml-4 list-disc">
                    <li>Hunting requires an experienced, licensed Professional Hunter (PH)</li>
                    <li>Minimum caliber requirements must be strictly adhered to</li>
                    <li>Backup rifles and experienced trackers are essential</li>
                    <li>Wounded animals are extremely dangerous and must be followed with extreme caution</li>
                    <li>Never hunt alone or without proper backup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Spot and Stalk</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Glassing from a vehicle or high vantage point to locate a herd or bull, then stalking on foot. This method requires extreme caution and is typically used for herd bulls rather than dagga boys.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Move slowly and quietly. Use available cover. Cape Buffalo have excellent senses.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Always stalk with the wind in your face. Cape Buffalo have a keen sense of smell.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Shots are typically taken from 50 to 150 meters. Getting closer requires exceptional fieldcraft and is extremely dangerous.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Tracking</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Following fresh tracks of a bull or dagga boy group. This method requires expert tracking skills and extreme caution, as wounded animals may backtrack and ambush pursuers. Always have backup rifles ready.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Waterhole/Mud Wallow)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Setting up a blind at a waterhole or mud wallow can be effective, especially during the dry season. This method allows for careful trophy evaluation but requires extreme patience and caution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Hunting Stalk Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Rifle Selection */}
            <div className="bg-onyx-light border border-white/10 p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Rifle and Caliber Selection</h3>
              <p className="text-gray-300 text-lg leading-loose mb-8">
                <strong className="text-red-400">CRITICAL:</strong> Cape Buffalo require heavy calibers with premium bullet construction. Minimum caliber is .375 H&H Magnum. Smaller calibers are inadequate and dangerous. The animal's massive size, thick hide, and dense bone structure demand maximum penetration and energy.
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
                      <td className="px-6 py-4 font-sans text-white font-medium">.375 H&H Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The absolute minimum for Cape Buffalo. Adequate with perfect shot placement, but lacks margin for error. Not recommended for inexperienced hunters.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.416 Rigby / .416 Rem Mag</td>
                      <td className="px-6 py-4 font-sans text-gray-300">400 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent choice for Cape Buffalo. Heavy bullets provide deep penetration and reliable expansion. Manageable recoil for most shooters.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.458 Winchester / .458 Lott</td>
                      <td className="px-6 py-4 font-sans text-gray-300">500 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Maximum confidence. Heavy bullets provide exceptional penetration and stopping power. Higher recoil but maximum effectiveness.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.470 Nitro Express</td>
                      <td className="px-6 py-4 font-sans text-gray-300">500 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Premium</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The classic dangerous game caliber. Exceptional stopping power. Typically used in double rifles for close-range work.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-red-900/30 border border-red-500/50 p-6">
                <h4 className="font-serif text-xl text-red-400 mb-3">Bullet Construction - CRITICAL</h4>
                <p className="text-red-200 text-sm leading-relaxed">
                  <strong>ONLY premium, solid, or bonded bullets should be used.</strong> Cape Buffalo have thick hide, dense bone structure, and massive muscle mass. Bullets must penetrate deeply and retain weight. Recommended: Barnes TSX/TTSX, Swift A-Frame, Woodleigh Weldcore, or traditional solid bullets. <strong>NEVER use frangible or varmint bullets.</strong>
                </p>
              </div>
            </div>

            {/* Shot Placement */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Shot Placement Diagram Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Shot Placement</h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  <strong className="text-red-400">CRITICAL:</strong> Proper shot placement is absolutely essential. A poorly placed shot on a Cape Buffalo can result in a dangerous follow-up situation. The animal's massive size and tenacity mean that marginal shots may not anchor the animal.
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
                  <div className="bg-red-900/30 border border-red-500/50 p-6">
                    <h4 className="font-serif text-xl text-red-400 mb-3">Frontal</h4>
                    <p className="text-red-200 text-sm leading-relaxed">
                      <strong>Only for experienced marksmen with adequate caliber.</strong> Aim at the base of the neck where it meets the chest, or between the eyes for a brain shot. This shot requires precision and heavy bullet construction. <strong>Not recommended for inexperienced hunters.</strong>
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
                Judging a Cape Buffalo trophy in the field requires careful observation. Since both bulls and cows carry horns, identification is important, but evaluating trophy quality requires understanding the key characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Distinguishing Bulls vs. Cows</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Shooting a cow by mistake is a serious error in trophy hunting. Careful observation is required, especially at distance.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Sex Differentiation Guide</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Boss</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Mature bulls have a solid "boss" where the horns meet on the forehead. This is a key indicator of a mature bull.<br/>
                        <strong>Cow:</strong> Cows' horns typically do not form a solid boss. The horns may meet but do not fuse into a solid mass.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> Large, massive horns with wide spread. Horns are typically thicker and more substantial.<br/>
                        <strong>Cow:</strong> Smaller horns, though they can still be substantial. Horns are typically narrower and less massive.
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
                      <h5 className="font-sans font-bold text-onyx mb-2">Behavior</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Bull:</strong> May be solitary (dagga boys) or with herd. More aggressive and territorial.<br/>
                        <strong>Cow:</strong> Associated with other cows and calves. Part of nursery herds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
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
                      <span><strong>Spread:</strong> A mature bull will have horns with a spread of 40 inches or more. The Rowland Ward minimum is 40 inches. Exceptional trophies exceed 50 inches.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Boss:</strong> Look for a solid, well-developed boss where the horns meet. A fully formed boss indicates a mature bull.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Mass:</strong> Heavy, thick horns indicate a mature bull. The horns should appear substantial and well-developed.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Symmetry:</strong> Both horns should be similar in length and shape. Asymmetrical horns reduce trophy value.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the tip-to-tip spread (width) of the horns.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 40 inches</p>
                      <p className="text-gold-600 font-bold mt-2">Gold Medal: 45+ inches</p>
                    </div>
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both horns, tip-to-tip spread, and boss circumference.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 100 points</p>
                      <p className="text-gold-600 font-bold mt-2">Gold Medal: 110+ points</p>
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
                Cape Buffalo meat is highly regarded and commercially significant. The meat is lean, flavorful, and nutritious, making it a valuable resource. All meat from MIWESU harvests is donated to local communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Cape Buffalo meat is dark red, fine-grained, and lean. It has a rich, gamey flavor that is often compared to beef but with a distinctive wild game character. The meat is versatile and can be prepared in a variety of ways.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cape Buffalo meat is lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Cape Buffalo Venison Image Placeholder</span>
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
                The Black Death
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Cape Buffalo is the ultimate African dangerous game animal. Its combination of massive size, formidable strength, and legendary tenacity makes it one of the most respected and feared animals on the continent. Hunting Cape Buffalo is not for the faint of heart or the ill-prepared.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Cape Buffalo thrive in the dense bushveld areas where they can find both grazing opportunities and thick cover. Their presence adds an element of danger and excitement to the reserve, representing the pinnacle of African hunting.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the ultimate challenge, the trophy, or the exceptional venison, the Cape Buffalo offers an unforgettable hunting experience. Success requires proper preparation, adequate equipment, experienced guidance, and above all, respect for this formidable and dangerous animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 40 inches spread for Rowland Ward. Exceptional trophies exceed 50 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Near Threatened - Populations stable in well-managed reserves. Value-based conservation is essential.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Danger Level</h3>
                <p className="text-gray-300 text-sm">Extremely dangerous. Responsible for more hunter fatalities than any other African animal. Requires experienced PH and proper equipment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Cape Buffalo at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your dangerous game experience and pursue The Black Death in the Makoppa district's prime Cape Buffalo habitat. <strong>This hunt requires experienced Professional Hunters and proper equipment.</strong>
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
