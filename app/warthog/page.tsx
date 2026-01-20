'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function WarthogPage() {
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
              src="/images/home-species-warthog.jpg"
              alt="Warthog in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Opportunist
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Warthog</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Phacochoerus africanus
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">50-150 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Boar Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">13+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.308 Win</div>
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
                  The Opportunist of the Bushveld
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Warthog is one of Africa's most distinctive and adaptable animals. Known as "The Opportunist" for its ability to thrive in a variety of habitats and make use of available resources, this member of the pig family is a common sight across the African savanna.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  With its distinctive facial warts, upward-curving tusks, and habit of running with its tail held high like a flag, the Warthog is instantly recognizable. Despite their somewhat comical appearance, Warthogs are tough, intelligent animals that have successfully adapted to life alongside Africa's predators.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Warthogs are commonly found near waterholes and mud wallows, where they can be seen wallowing to cool off and protect themselves from insects. Their opportunistic feeding habits and adaptability make them an important part of the ecosystem.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/home-species-warthog.jpg"
                  alt="Warthog boar at waterhole"
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
                  The Warthog belongs to the family Suidae (pigs), making it distinct from the antelope species that dominate African hunting. The genus <em className="text-gold-400">Phacochoerus</em> contains two species: the Common Warthog (Phacochoerus africanus) and the Desert Warthog (Phacochoerus aethiopicus).
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The specific name <em className="text-gold-400">africanus</em> reflects the species' African distribution. The common name "Warthog" refers to the distinctive facial warts (protective pads) that are more prominent in males.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Four subspecies of Common Warthog are recognized, with the southern African populations being among the largest. The Makoppa district is home to the southern subspecies, which are well-adapted to the bushveld environment.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Warthog Taxonomy Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Warthog's range extends throughout sub-Saharan Africa, from Senegal in the west to Ethiopia in the east, and southward to South Africa. They favor open savannas, grasslands, and woodland edges where they can find both food and cover.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's bushveld provides ideal habitat, offering both grazing opportunities and access to waterholes and mud wallows. Warthogs are commonly seen near water sources, where they wallow to cool off and protect themselves from insects.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Warthog is one of Africa's most successful large mammals. Listed as "Least Concern" by the IUCN, populations are stable and abundant throughout much of their range.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their success is due to their adaptability, high reproductive rate, and ability to utilize a wide variety of food sources. Well-managed reserves like MIWESU ensure healthy populations that benefit both the ecosystem and sustainable utilization programs.
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
                The Warthog is a medium-sized pig with distinctive features that reflect its adaptation to life on the African savanna.
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
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Boar (Male)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Adult Sow (Female)</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Live Weight</td>
                      <td className="px-6 py-4 font-sans text-gray-600">50 – 150 kg (110 – 331 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">45 – 75 kg (99 – 165 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Boars are significantly larger with more prominent warts</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">60 – 85 cm (24 – 33 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">55 – 75 cm (22 – 30 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Compact, muscular build</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">90 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">85 – 130 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Robust, barrel-shaped body</td>
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
                  src="/images/home-species-warthog.jpg"
                  alt="Warthog coat coloration and markings"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Warthog's coat is sparse, with coarse bristles covering a mostly bare, grey to brown skin. The sparse hair provides minimal insulation, which is why Warthogs wallow in mud to regulate body temperature and protect themselves from the sun.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  A distinctive mane of longer, darker hair runs along the back from the head to the middle of the back. The tail is long and thin, ending in a tuft of hair. When running, Warthogs hold their tail straight up like a flag, which is thought to help family members follow each other through tall grass.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Facial Warts</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    The most distinctive feature is the facial warts—protective pads of thickened skin. Males have two pairs of warts (one below the eyes and one on the cheeks), while females typically have smaller, less prominent warts. These warts protect the face during fights and may also serve as visual signals.
                  </p>
                </div>
              </div>
            </div>

            {/* Tusk Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Tusk Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Both boars and sows carry tusks, though boars' tusks are typically larger and more impressive. The upper tusks are long and curve upward, while the lower tusks are shorter and sharper, used for sharpening the upper tusks.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The tusks are actually modified canine teeth that continue to grow throughout the animal's life. They are used for digging, defense, and fighting. In trophy hunting, the lower tusks are measured, as they are more consistent in shape.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A mature trophy boar will have lower tusks measuring 13 inches or more, with exceptional specimens exceeding 16 inches. The Rowland Ward minimum is 13 inches. Look for long, sharp tusks with good symmetry. The upper tusks should be well-developed and curved.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Warthog Tusk Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Savanna Living</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Kneeling to Feed</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Warthogs have adapted to feed on short grass by kneeling on their calloused, padded wrists. This allows them to access grass that is too short for other grazers, giving them a competitive advantage.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their flexible snout and strong neck muscles allow them to root in the ground for roots, bulbs, and tubers, supplementing their grass diet with underground food sources.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Burrowing Behavior</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Warthogs are unique among African pigs in that they use burrows for shelter. They typically use abandoned aardvark or porcupine burrows, though they may dig their own if necessary.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    They enter burrows backwards, using their tusks to defend the entrance. This behavior provides protection from predators and helps regulate body temperature in the cool underground environment.
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
                <h3 className="font-serif text-xl text-white mb-3">Sounders</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Warthogs live in family groups called "sounders," typically consisting of a sow and her offspring. Sounders may number 4-16 animals, with the sow being the dominant member. Young boars leave the sounder at around 2 years of age.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Solitary Boars</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Adult boars are typically solitary, though they may temporarily join sounders during the breeding season. They establish territories that they mark with scent glands and defend from other boars.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Bachelor Groups</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Young boars may form loose bachelor groups after leaving their natal sounder. These groups are temporary and dissolve as the boars mature and establish their own territories.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Warthog Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Warthogs are diurnal, with peak activity during early morning and late afternoon. During the heat of midday, they retreat to burrows or wallow in mud to cool off and protect themselves from insects.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Feeding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Warthogs are opportunistic feeders, consuming grasses, roots, bulbs, fruits, and occasionally carrion. They kneel to feed on short grass and use their snouts to root for underground food sources.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Warthogs are during early morning and late afternoon when they are actively feeding. Waterholes and mud wallows are prime locations, especially during the dry season.
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
                    The rut can occur year-round, but peaks during the rainy season when food is abundant. During this period, boars become more aggressive and may fight with rivals for access to estrous sows.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Boars will follow sounders, attempting to mate with receptive sows. Competition can be intense, with boars using their tusks in combat. The dominant boar typically secures mating rights.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Farrowing and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 5-6 months, sows give birth to 2-4 piglets (rarely up to 8). Farrowing typically occurs in a burrow, providing protection for the vulnerable newborns.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Piglets remain in the burrow for the first few weeks, with the sow returning to nurse them. After a few weeks, they begin to accompany the sow on feeding trips. The sow is highly protective of her young.
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
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Opportunistic Feeding</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Warthogs are true opportunists, consuming a wide variety of food sources. They primarily graze on short grasses, but also root for roots, bulbs, and tubers. They will eat fruits, berries, and occasionally carrion when available.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Feeding Adaptations</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Their ability to kneel and feed on short grass, combined with their strong snouts for rooting, allows Warthogs to utilize food sources that other animals cannot access. This adaptability is key to their success across diverse habitats.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-warthog.jpg"
                  alt="Warthog feeding"
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
                  Warthogs prefer open savannas, grasslands, and woodland edges. They require access to water for drinking and wallowing, and need areas with suitable soil for burrowing or access to existing burrows.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa district's bushveld provides ideal habitat, offering both grazing opportunities and access to waterholes and mud wallows. Warthogs are commonly seen near water sources, where they wallow to cool off and protect themselves from insects.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water and Wallowing</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Warthogs are water-dependent and must drink daily. They also require mud wallows, which serve multiple purposes: cooling, protection from insects, and removal of parasites. Waterholes and mud wallows are prime hunting locations.
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
                Hunting the Warthog is a classic African experience. While they may appear less challenging than some species, their toughness, wariness, and ability to disappear into burrows make them a worthy quarry.
              </p>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Waterhole/Mud Wallow)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      The most effective method is setting up a blind at a waterhole or mud wallow. Warthogs visit these locations regularly, especially during the dry season. This method allows for careful trophy evaluation.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">Timing:</strong> Early morning and late afternoon are best, when Warthogs are most active.</li>
                      <li><strong className="text-gold-400">Patience:</strong> Warthogs may take time to appear. Be patient and remain still.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Always position the blind with the wind in your face.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Spot and Stalk</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Glassing from a vehicle or high vantage point to locate feeding Warthogs, then stalking on foot. This method works well in open terrain but requires careful approach, as Warthogs have excellent eyesight and hearing.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Still Hunting</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Moving slowly through known Warthog habitat, stopping frequently to glass and listen. This method requires patience and knowledge of the area, but can be very rewarding.
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
                The Warthog is a tough animal despite its relatively small size. A poorly placed shot can result in a difficult tracking job, as wounded Warthogs can cover significant distance and may retreat to burrows. Adequate caliber and bullet construction are important.
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
                      <td className="px-6 py-4 font-sans text-gray-300">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Adequate with perfect shot placement, but lacks margin for error. Not recommended for quartering shots.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.270 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">130 – 150 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Flat trajectory and good terminal performance. A versatile choice that handles longer shots well.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.308 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">150 – 165 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The recommended choice for Warthog. Provides excellent penetration and reliable expansion. Handles all shot angles well.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-300">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Versatile</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">More than adequate power. Good choice if hunting larger game on the same safari. Slightly more recoil than smaller calibers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  For Warthog, standard soft-point bullets work well. Premium controlled-expansion bullets provide more consistent performance, especially on quartering shots. The Warthog's tough hide and dense muscle require adequate penetration.
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
                  Proper shot placement is critical. The Warthog's vitals are positioned similarly to other medium-sized game, but the animal's toughness means marginal shots may not anchor the animal.
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
                Judging a Warthog trophy in the field requires careful observation. Since both boars and sows carry tusks, identification is straightforward, but evaluating trophy quality requires understanding the key characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Distinguishing Boars vs. Sows</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Shooting a sow by mistake is a serious error in trophy hunting. Careful observation is required.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Sex Differentiation Guide</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Facial Warts</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Boar:</strong> Large, prominent warts below the eyes and on the cheeks. Very noticeable.<br/>
                        <strong>Sow:</strong> Smaller, less prominent warts. May be barely visible.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Tusk Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Boar:</strong> Large, impressive tusks. Lower tusks typically 10+ inches.<br/>
                        <strong>Sow:</strong> Smaller tusks, though they can still be substantial. Lower tusks typically under 10 inches.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Boar:</strong> Significantly larger, with a more robust build. Thicker neck and shoulders.<br/>
                        <strong>Sow:</strong> Smaller, more slender frame. Lighter build overall.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Behavior</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Boar:</strong> Typically solitary or with a sounder during rut. More aggressive.<br/>
                        <strong>Sow:</strong> Associated with piglets or other sows. Part of sounders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Boar vs Sow Comparison Image Placeholder</span>
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
                      <span><strong>Lower Tusk Length:</strong> A mature boar will have lower tusks measuring 13 inches or more. The Rowland Ward minimum is 13 inches. Exceptional trophies exceed 16 inches.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Upper Tusks:</strong> Look for long, well-curved upper tusks. They should be sharp and undamaged.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Symmetry:</strong> Both sets of tusks should be similar in length and shape. Asymmetrical tusks reduce trophy value.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the length of the longest lower tusk from base to tip.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 13 inches</p>
                    </div>
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        Measures the total score including length of both lower tusks and circumference of bases.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 20 points</p>
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
                Warthog meat is highly regarded and commercially significant. The meat is lean, flavorful, and nutritious, making it a valuable resource.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Warthog meat is dark red, fine-grained, and lean. It has a rich, gamey flavor that is often compared to wild boar. The meat is versatile and can be prepared in a variety of ways.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Warthog meat is lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Warthog Venison Image Placeholder</span>
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
                The Opportunist of the Bushveld
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Warthog is a true icon of the African bushveld. Its combination of distinctive appearance, adaptability, and toughness makes it a sought-after trophy and an important part of the African hunting experience.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, Warthogs thrive in the bushveld areas where they can take advantage of both grazing and browsing opportunities. Their adaptability and high reproductive rate make them an important species for sustainable utilization.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the challenge, the trophy, or the exceptional venison, the Warthog offers an unforgettable hunting experience. Success requires skill, patience, and respect for this tough and opportunistic animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 13 inches for Rowland Ward. Exceptional trophies exceed 16 inches.</p>
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
                Experience the Warthog at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Opportunist in the Makoppa district's prime Warthog habitat.
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
