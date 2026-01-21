'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function BushbuckPage() {
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
              alt="Bushbuck in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Prince of the Thickets
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Bushbuck</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Tragelaphus sylvaticus
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">45-80 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Ram Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">14+ inches</div>
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
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-6 block">
                  Introduction
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  The Prince of the Thickets
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Bushbuck is one of Africa's most enigmatic and challenging antelope species. Known as "The Prince of the Thickets" for its preference for dense riverine cover and its elusive nature, this medium-sized antelope offers a hunting challenge disproportionate to its size.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Despite its relatively small stature compared to its spiral-horned cousins like the Greater Kudu, the Bushbuck compensates with remarkable tenacity, adaptability, and a reputation for aggression when cornered that rivals the continent's "Big Five."
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  In the Makoppa district, Bushbuck thrive in the dense riverine thickets and forest edges. Their preference for cover makes them challenging to hunt, but their exceptional venison quality and the thrill of the pursuit make them a highly sought-after trophy.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Bushbuck ram in thicket"
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
                  The Bushbuck belongs to the family Bovidae, subfamily Bovinae, and the tribe Tragelaphini. Recent genetic research has revealed that what was once considered a single species is actually two distinct species that diverged approximately 2.5 to 2.7 million years ago.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The Southern or Cape Bushbuck (<em className="text-gold-400">Tragelaphus sylvaticus</em>) is the species found in southern Africa, including the Makoppa district. This species is characterized by extreme polymorphism and sexual dimorphism, with males darkening significantly with age.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Scriptus vs. Sylvaticus Split</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Northern or Harnessed Bushbuck (Tragelaphus scriptus) has a striking "harness" pattern of white stripes. The Southern Bushbuck (T. sylvaticus) has reduced white markings—spots on the flanks, a chevron on the nose, and a throat patch. This distinction is crucial for trophy registration and genetic management.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bushbuck Taxonomy Comparison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Southern Bushbuck's range extends from the Cape Province northwards through East Africa to the Horn of Africa. They are found in a wide variety of habitats, from dense riverine forests to montane forests and coastal dune bush.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's riverine thickets and forest edges provide ideal habitat. Bushbuck are obligate thicket dwellers, relying on dense cover for security rather than distance to escape predators.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Bushbuck is listed as "Least Concern" by the IUCN, with populations stable throughout much of their range. Their adaptability to various habitats and ability to persist in fragmented landscapes has ensured their survival.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Well-managed reserves like MIWESU ensure healthy populations by maintaining dense thicket corridors and providing suitable habitat. The species' value to the hunting industry has contributed to habitat conservation.
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
                The Bushbuck is a medium-sized antelope with distinctive markings and adaptations for life in dense cover.
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
                      <td className="px-6 py-4 font-sans text-gray-600">45 – 80 kg (99 – 176 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">25 – 60 kg (55 – 132 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Weight varies significantly by habitat and nutrition</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">65 – 100 cm (26 – 39 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">60 – 85 cm (24 – 33 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Compact build adapted for thicket navigation</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">100 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">90 – 130 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Streamlined body for dense cover</td>
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

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Bushbuck coat coloration and markings"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Bushbuck's coat is a masterpiece of disruptive coloration, designed to break up the animal's outline against the dappled light of the forest floor. White spots and stripes are geometrically arranged on the ears, chin, tail, legs, and flanks.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The most striking feature is the extreme sexual dimorphism in color. Females retain a reddish hue throughout their lives, while males darken significantly with age, transitioning from chestnut to dark brown, sepia, or almost jet black in mature rams.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">The Dorsal Crest</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Males possess a mane of long hair running the length of the spine. This crest is erectile—when threatened, a ram raises this mane to increase his apparent size, a behavior known as lateral display. This is often accompanied by a slow, stiff-legged gait intended to intimidate.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Only rams carry horns, which are distinct from the wide spirals of the Kudu. Bushbuck horns are relatively straight but feature a strong spiral keel that twists around the core. They grow backward, roughly parallel to the neck, preventing snagging on vines and branches when running through thick bush.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Horn development: Horn buds appear at 6-10 months, straight spikes ("penkop") at 12 months, the spiral keel becomes evident at 2 years, and the first full twist is completed at 3+ years.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A horn length of 14 inches is the "Holy Grail" for bushbuck hunters. The Rowland Ward minimum is 15 inches. However, older rams often wear down (broom) their horn tips through fighting, leading to shorter but incredibly massive horns that are highly esteemed by connoisseurs.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bushbuck Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Physical Adaptations */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Physical Adaptations for Thicket Living</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Body Shape</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Bushbuck's "hunched" morphology, where the rump is often higher than the shoulders, is a specific adaptation to moving through dense vegetation. Unlike antelope built for sustained speed on open plains, this build allows for explosive acceleration and a "diving" motion.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    When alarmed, a Bushbuck lowers its head and plunges into the thicket; the high rump and powerful hindquarters propel it through resistance that would stop a flatter-backed animal.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">The "Flash" Signals</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The tail is bushy, dark on top but brilliant white underneath. When fleeing, the tail is raised, flashing this white underside. This serves as a "follow-me" signal to fawns in the dim light of the thicket or as a warning signal to predators.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The "freezing" response is the Bushbuck's primary anti-predator strategy. They will stand absolutely motionless in cover, allowing a threat to pass within meters. This behavior makes them notoriously difficult to census.
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
                <h3 className="font-serif text-xl text-white mb-3">Matrilineal Clans</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Females often remain in or near their natal home range, forming loose associations of related females (matrilineal clans). They may share a home range but forage separately to reduce competition.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Rams</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mature rams are territorial, defending prime thickets or water sources. They actively avoid one another. Young males, evicted from the maternal group at roughly 6 months, may form transient bachelor groups, but these dissolve as individuals reach sexual maturity.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Zap className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Aggression</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The Bushbuck has a legendary reputation for aggression, earning it the moniker "Poor Man's Buffalo." When wounded or cornered, a Bushbuck does not panic; it counter-attacks, using its sharp, dagger-like horns with devastating effect.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bushbuck Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Activity Cycles: The Ghost in the Darkness</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Bushbuck are fundamentally crepuscular (active at dawn and dusk) and nocturnal. While they have the physiological capacity to be active during the day, their activity budget is heavily dictated by anthropogenic disturbance and predation pressure.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">The Landscape of Fear</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    In areas where apex predators have been extirpated, Bushbuck become bolder, foraging in open areas during the day. When predator cues are reintroduced, they immediately retreat to deep thickets and shift to nocturnal activity.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> On game farms with high human activity, Bushbuck will be almost entirely nocturnal. Successful hunting requires capitalizing on the brief windows of twilight or managing the farm to reduce disturbance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Vocalizations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">The Bark</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The most famous sound is a loud, resonant bark, deep and hoarse, often compared to the sound of a baboon or a large dog. This is an alarm call. It is described as "ventriloquial," meaning it is difficult for a predator (or hunter) to locate the source of the sound.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    This evolutionary adaptation allows the Bushbuck to warn conspecifics without revealing the caller's exact position.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Other Vocalizations</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    During the rut, males trailing a female will emit low, guttural grunts. Fawns and mothers communicate with soft bleats, similar to domestic goats but quieter.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    A soft fawn bleat can bring in a concerned ewe, and sometimes the ram trailing her. A deep grunt call can sometimes pique the curiosity of a territorial ram during the rut.
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
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">The Edge Effect</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Bushbuck is an "ecotone" specialist. It thrives at the interface between two habitats: dense cover (for safety/rest) and open clearing (for high-quality forage). They are rarely found far from dense vegetation—riverine forest, montane forest, coastal dune bush, or dense Acacia thickets.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Thicket Dependency</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    The physical structure of the vegetation is more important than the species composition; it must provide visual obstruction from predators. Bushbuck are obligate thicket dwellers who rely on obstruction rather than distance to escape predation.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Bushbuck in riverine thicket"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bushbuck Feeding Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Selective Browsing</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Bushbuck are selective browsers (concentrate selectors). They feed primarily on high-quality browse: leaves, buds, flowers, and fruits of dicotyledonous plants. They are highly selective, choosing the most nutritious parts of the plant to maximize energy intake per bite.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Unlike pure browsers, Bushbuck will graze on fresh, green grass, but this rarely constitutes more than 10-20% of their diet. They are also known to dig for roots and tubers during the dry season and consume fungi and mushrooms.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water Requirements</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While they are water-dependent and drink daily if possible, they can survive on dew and moisture-rich tubers in arid environments, provided the riverine scrub is thick enough to retain humidity. Water points should be small and secluded, tucked into the bush edge.
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
                Hunting Bushbuck is often described as a game of patience and observation, akin to hunting whitetail deer, but with a dangerous twist. The dense cover and the animal's wariness make it one of Africa's most challenging pursuits.
              </p>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Hunting Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Spot and Stalk (The Classic Method)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Glassing riverine valleys and forest edges at first light and last light from a vantage point. Once a ram is spotted, the stalk begins. This is challenging because the riverine vegetation is often dry and noisy ("wait-a-bit" thorns), and the Bushbuck's hearing is acute.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Move slowly and quietly. One snapped twig can send a Bushbuck bolting into impenetrable cover.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Always stalk with the wind in your face. Bushbuck have a keen sense of smell.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Shots are typically taken at close range (under 100 meters) in very heavy cover.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Blind Hunting)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sitting in a blind or treestand over a waterhole or a cultivated food plot (lucerne) is highly effective. This method allows for careful evaluation of the trophy, which is critical given the difficulty of judging horn length in the shadows.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Tracking</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Tracking a solitary Bushbuck is considered a high-level skill. The track is small (4-5 cm), neat, and wedge-shaped. Be aware that a wounded Bushbuck may backtrack on its own spoor, waiting in ambush.
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
                Hunting Bushbuck usually occurs at close range (under 100 meters) but in very heavy cover. This dictates specific equipment choices. The "brush busting" debate: while heavy, slow-moving bullets are less likely to fragment completely compared to light, high-velocity spitzer bullets, all bullets deflect when hitting twigs.
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
                      <td className="px-6 py-4 font-sans text-gray-300">100 gr</td>
                      <td className="px-6 py-4 font-sans text-gray-300">Minimum</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Adequate for open shots with premium bullets (e.g., Nosler Partition), but marginal for raking shots in thick bush. Avoid fragile bullets.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">7x57 Mauser</td>
                      <td className="px-6 py-4 font-sans text-gray-300">140 – 160 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The classic African caliber. Manageable recoil and sufficient energy to anchor a ram. Perfect for thick bush hunting.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.308 Winchester</td>
                      <td className="px-6 py-4 font-sans text-gray-300">150 – 165 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent penetration and reliable expansion. Handles all shot angles well. The recommended choice.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.30-06 Springfield</td>
                      <td className="px-6 py-4 font-sans text-gray-300">165 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Versatile, reliable, and widely available. A 180gr bullet provides excellent penetration.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.375 H&H / 9.3x62</td>
                      <td className="px-6 py-4 font-sans text-gray-300">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Surprising Choice</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">For dedicated bush hunting, these calibers launch heavy bullets at moderate velocities, creating large wound channels that ensure a blood trail without excessive meat damage.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Opt for heavy-for-caliber, bonded, or monolithic bullets. Avoid light, fragile bullets (e.g., Ballistic Tips in .243) which may explode on a twig or the shoulder blade. Premium controlled-expansion bullets like Barnes TSX, Swift A-Frame, or Nosler Partition provide reliable performance.
                </p>
              </div>
              <div className="mt-6 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Optics and Camouflage</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  <strong>Scopes:</strong> Bushbuck are hunted in the "gray light" of dawn and dusk. Light transmission is critical. A scope with a 50mm or 56mm objective lens and high-quality glass allows the hunter to see the crosshairs against a dark animal in dark bush. Illuminated reticles are highly recommended.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong>Camouflage:</strong> The hunting environment is high-contrast (shadow and light). Modern "macro-pattern" camouflages that use complex organic shapes to break up the human outline are superior in this terrain.
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
                  Anatomy is key. A wounded Bushbuck is a liability—they are known to counter-attack when cornered. Proper shot placement is absolutely critical.
                </p>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Broadside</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white">The ideal shot.</strong> Aim one-third up the body, directly on the vertical line of the foreleg. This hits the top of the heart and the lungs. This placement ensures the bullet passes through both lungs and the top of the heart.
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
                      A favorite shot for Bushbuck peering out of cover. Aim for the "throat patch" where the neck meets the chest. This shot requires precision and adequate bullet construction.
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
                Field judging a Bushbuck is notoriously difficult. The horns are dark, the bush is dark, and the animal is rarely still. Understanding the key characteristics is essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">The "Ear Rule"</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  The most reliable field estimation method involves comparing the horn length to the ear length.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Field Judging Guide</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Benchmark</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A mature Bushbuck ram's ear is approximately 6 to 7 inches long. If the horns project straight up and appear to be twice the length of the ear, the ram is likely in the 13-14 inch class—a solid trophy.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">The 14-Inch Goal</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        If the horns appear to be twice the length of the ear, the ram is likely in the 13-14 inch class—a solid trophy.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">The 16-Inch Monster</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        If the horns extend significantly more than double the ear length, and have a deep outward spiral, you are looking at a potential 16-inch record class animal.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Other Indicators</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Mass:</strong> Look for bases that are thick and nearly touching on the forehead. Heavy bases indicate age.<br/>
                        <strong>Shape:</strong> Young rams have horns that grow straight back. Old rams have horns that spiral out and then tip back in or forward.<br/>
                        <strong>Coat:</strong> In Southern Africa, a jet-black coat is the surest sign of a fully mature ram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Trophy Bushbuck Ram Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-8">Scoring Systems</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Rowland Ward (RW)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Measures the length of the longest horn along the curve from base to tip.
                  </p>
                  <p className="text-gold-600 font-bold">Minimum for entry: 15 inches</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 16+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-600 font-bold">Bronze Medal: 31+ points</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 35+ points</p>
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
                Bushbuck venison is often cited by South African hunters as the finest of all antelope meat. It is fine-grained, darker than Impala, and lacks the stringy texture of Kudu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Because Bushbuck are browsers, the meat is aromatic and flavorful. It is fine-grained, darker than Impala, and lacks the stringy texture of larger antelope. The meat is often described as having a rich, gamey flavor that is more pronounced than grazers.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Like all game meat, Bushbuck is very lean with minimal fat. The fat that is present should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Bushbuck Venison Image Placeholder</span>
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
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Backstrap (Loin / "Rugstring")</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Excellent for steaks or whole roasts. Can be prepared as carpaccio when sliced paper-thin. Do not overcook—medium-rare is ideal.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Hindquarters ("Boud")</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The silverside and topside are particularly prized for making Biltong. The heavy muscles are also ideal for roasting if larded with bacon.
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

            <div className="grid md:grid-cols-2 gap-12 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Traditional Recipes</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Bushbuck Biltong</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Bushbuck makes exceptional biltong because the meat is lean. Use the silverside or topside. Cut into 2cm thick strips with the grain.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Cure with vinegar, coarse salt, brown sugar, toasted coriander seeds (roughly crushed), and black pepper. Layer meat and spice mix for 12 hours. Hang in a cool, dry place with airflow for 3-5 days. The result is a black, snap-dry biltong with intense flavor.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">"Rugstring" Carpaccio</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Use semi-frozen backstrap (easier to slice). Slice paper-thin. Arrange on a plate. Drizzle with high-quality olive oil, lemon juice, cracked black pepper, and shavings of Parmesan cheese. Top with capers and arugula. The raw meat's natural sweetness shines here.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Culinary Preparation Image Placeholder</span>
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
                The Prince of the Thickets
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Bushbuck is far more than just another entry on a price list. It is an ecological indicator of healthy thicket vegetation, a biological marvel of adaptation, and a hunting challenge that demands the highest level of skill and respect.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                For the game farm, it offers a sustainable resource that appeals to both the trophy hunter seeking a "Black Ram" and the meat hunter looking for the finest venison in Africa. The combination of challenging pursuit, exceptional venison quality, and the thrill of hunting in dense cover makes the Bushbuck a crown jewel of African hunting.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether encountered in the mist of a forest or the dust of the riverine valley, the Bushbuck remains a symbol of the wild, untamed corners of the African bush. Success requires patience, skill, proper equipment, and above all, respect for this tough and tenacious animal.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 15 inches for Rowland Ward. The "Holy Grail" is 14+ inches. Exceptional trophies exceed 16 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable throughout their range. Adaptable to various habitats.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">One of Africa's greatest challenges, requiring skill, patience, and respect. Known as "Poor Man's Buffalo" for its aggression.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Bushbuck at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue The Prince of the Thickets in the Makoppa district's prime Bushbuck habitat.
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
