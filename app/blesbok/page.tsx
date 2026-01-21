'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function BlesbokPage() {
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
              alt="Blesbok in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Keystone Species
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Blesbok</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Damaliscus pygargus phillipsi
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">70-85 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Ram Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">15+ inches</div>
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
                  The Keystone of the South African Highveld
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  In the vast and varied tapestry of Southern African wildlife, few species occupy a position of such ecological and economic centrality as the Blesbok. Endemic to the interior plateau of South Africa, this medium-sized antelope is a quintessential symbol of the Highveld grasslands.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Historically, this species traversed the treeless plains in herds numbering in the hundreds of thousands, a "brown tide" that shaped the vegetation dynamics of the interior. Today, following a dramatic recovery from the brink of extinction in the late 19th century, the Blesbok stands as the bread-and-butter species of the South African game industry.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  The Blesbok represents a unique intersection of conservation success, commercial utility, and sporting challenge—a testament to the resilience of nature and the efficacy of value-based conservation.
                </p>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Habitat Image Placeholder</span>
                </div>
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
                  The Blesbok is a member of the family Bovidae, falling within the tribe Alcelaphini. This tribe, which also includes the Hartebeest and Wildebeest, is characterized by high shoulders, sloping backs, and elongated skulls—adaptations evolved for endurance running and grazing in open environments.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Specifically, the Blesbok is a subspecies of <em className="text-gold-400">Damaliscus pygargus</em>, sharing its specific epithet with the Bontebok (Damaliscus pygargus pygargus). While they are genetically distinct enough to be classified as separate subspecies, they are close enough to hybridize readily if barriers are removed.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Key Distinction</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The Bontebok displays a rich, purplish-gloss coat with a continuous white facial blaze, whereas the Blesbok has a duller, brown coat and a blaze typically divided by a brown band between the eyes. Understanding this distinction is critical for game farmers, as accidental mixing leads to hybrid offspring, threatening genetic integrity.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok vs Bontebok Comparison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Renaissance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">The Great Decline</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Early European explorers documented the interior of South Africa as teeming with game. The Blesbok was arguably the most numerous antelope, favoring the sweetveld grasslands of the Free State, southern Transvaal (now Gauteng and Mpumalanga), and parts of the Northern Cape.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    However, the late 19th century brought catastrophe. By 1893, the free-roaming populations had been annihilated, with numbers crashing to fewer than 2,000 individuals. The species was effectively functionally extinct in the wild.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">The Recovery</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The recovery that followed is widely cited as the first major triumph of the private game ranching model. Farmers, recognizing the resilience and value of the species, began fencing off remnants of herds. Unlike sensitive species, Blesbok proved robust, breeding rapidly and adapting well to fenced environments.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Today, the population is estimated to exceed 240,000 individuals, distributed not only within their historical range but introduced widely across South Africa, Namibia, and even Zimbabwe. This transition from "wild vermin" to "valued livestock" saved the species.
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
                The physical form of the Blesbok is a direct reflection of their adaptation to the open grassland niche.
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
                      <td className="px-6 py-4 font-sans text-gray-600">70 – 85 kg (154 – 187 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">55 – 70 kg (121 – 154 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Rams are significantly heavier and more muscular in the neck</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">95 – 105 cm (37 – 41 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">85 – 95 cm (33 – 37 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Distinct sloping back profile typical of Alcelaphines</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">140 – 160 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">135 – 150 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Compact, robust body structure</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">12 – 15 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 17 years in captivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Coat Coloration Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The coat of the Blesbok is a study in camouflage and signaling. The dorsal hair is a reddish-brown, which can appear quite dark, almost purple-black, in older rams, especially when viewed in low light.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  A characteristic "saddle" of lighter, fawn-colored hair sits across the shoulders and back, creating a two-tone effect that is visible from a distance. The rump is also a lighter yellowish-brown, but crucially, it lacks the prominent, bright white square rump patch that distinguishes the Bontebok.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">The Diagnostic Face</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    The name "Blesbok" is derived from the Afrikaans/Dutch word "bles," meaning a blaze. This white blaze runs from the horn bases to the nose. In the vast majority of pure Blesbok, this white line is interrupted by a horizontal brown band just above the eyes, effectively creating two separate white patches: a forehead patch and a nose patch.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Unlike Impala or Kudu where only males carry horns, both Blesbok rams and ewes are horned. This evolutionary trait suggests that females may need weapons to defend feeding territories or calves in the open plains where hiding is difficult.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The horns are "lyrate" (lyre-shaped), growing outwards and backwards before hooking slightly forwards and inwards at the tips. The horns are heavily annulated (ringed) for the bottom two-thirds of their length, with smooth, pointed tips.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Field Identification</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A key visual characteristic is the color of these rings. On Blesbok, the ridges of the rings are typically a light straw or yellowish-white color, contrasting with the dark brown or black grooves between them. This is a vital field sign; Bontebok horns are typically solid black.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Horn Detail Image Placeholder</span>
                </div>
              </div>
            </div>

            {/* Glandular Systems */}
            <div className="bg-onyx text-white p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Glandular Systems and Sensory Organs</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Preorbital Glands</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Blesbok possess well-developed preorbital glands located immediately in front of the eyes. These glands secrete a sticky, black, waxy substance that carries a unique olfactory signature.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Territorial rams actively use these secretions to mark their domain, rubbing their faces against tall grass stalks or shrubs, leaving a visible black smudge. This chemical communication is essential in the open veld where visual markers might be less permanent.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Sensory Adaptations</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Their sensory adaptations are geared towards predator detection in open environments. The eyes are placed high and on the sides of the skull, affording a wide field of view to detect movement on the horizon while grazing.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their hearing is acute, supported by white-lined ears that act as parabolic reflectors, and their sense of smell is highly developed, used to detect predators upwind and to facilitate social bonding within the herd.
                  </p>
                </div>
              </div>
            </div>

            {/* Color Variants */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Color Variants: The Product of Selective Breeding</h3>
              <p className="font-sans text-gray-600 text-lg leading-loose mb-8">
                In the modern game ranching era, the Blesbok has become a canvas for genetic selection. Recessive genes, which would occur naturally but rarely, have been isolated and amplified by breeders to create distinct color morphs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border border-gray-200">
                  <h4 className="font-serif text-xl text-onyx mb-3">White Blesbok</h4>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    This is not an albino. It is a leucistic form, meaning it lacks melanin in the hair but retains pigment in the skin, nose, and eyes. The coat is a creamy white or light blonde. They were first noted in the 1960s and have since been bred in large numbers.
                  </p>
                </div>
                <div className="bg-white p-6 border border-gray-200">
                  <h4 className="font-serif text-xl text-onyx mb-3">Yellow (Golden) Blesbok</h4>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    A variant with a golden-yellow coat, lacking the dark brown pigmentation of the common Blesbok but darker than the white variant.
                  </p>
                </div>
                <div className="bg-white p-6 border border-gray-200">
                  <h4 className="font-serif text-xl text-onyx mb-3">Copper Blesbok</h4>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    A deep, reddish-copper morph. This variant is distinct from the Golden Blesbok and often commands high prices at auctions due to its striking appearance and relative rarity compared to the White Blesbok.
                  </p>
                </div>
                <div className="bg-white p-6 border border-gray-200">
                  <h4 className="font-serif text-xl text-onyx mb-3">Saddleback Blesbok</h4>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                    A specialized morph where the standard markings are altered to accentuate the saddle pattern.
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
                  Female herds consist of adult ewes and their offspring. They can range from small family units of 5–10 animals to massive aggregations of nearly 100 individuals on large reserves. These herds are nomadic within the reserve, moving to follow the best grazing.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Territorial Rams</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Adult males, typically over 2.5 years old, establish static territories ranging from 2.5 to 6 acres. They mark territory with dung middens and preorbital gland secretions. They are often seen standing solitary in the center of their domain or "herding" females that have entered.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Bachelor Herds</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Males that are too young, too old, or too weak to hold a territory form bachelor herds. These groups wander the periphery of prime territories and serve as a reservoir for future territorial rams. Old "dagga boys" can often be found here.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Herd Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Blesbok are diurnal, with peak feeding times in the cool of the early morning and late afternoon. During the heat of the day (11:00 AM – 3:00 PM), they exhibit "shade seeking," often standing in the shade of Acacia trees or clustering with heads lowered, facing away from the sun.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Head Nodding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A peculiar and frequently observed behavior is vigorous head nodding or shaking. In summer months, this is almost invariably caused by the Nasal Bot Fly (Oestrus spp.). The female fly attempts to deposit live larvae into the nostrils, causing severe irritation. The Blesbok's frantic nodding, snorting, and foot-stamping is an attempt to dislodge these parasites.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> A Blesbok that is nodding is a difficult target. Patience is required to wait for a pause in the irritation.
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
                    The breeding season (rut) on the Highveld typically occurs between March and May. During this period, territorial rams become intensely active and aggressive. Rams engage in "parallel walks" with rivals, stiff-legged and posturing. If intimidation fails, they engage in horn-clashing fights.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    After a gestation of roughly 240 days (8 months), lambs are born in mid-summer (November–January), ensuring lactating mothers have access to lush green grass generated by summer rains.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Escape Response</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    When alarmed, Blesbok do not scatter chaotically. Instead, they exhibit a disciplined "follow-the-leader" escape response. They run upwind in a single-file line, often led by a dominant female, maintaining a steady canter.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    <strong className="text-gold-400">Hunting Insight:</strong> This predictable behavior allows a hunter to anticipate their movement. If a herd is spooked, they will often run for several hundred meters and then stop simultaneously to look back, offering a brief, static shot opportunity.
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
                  Blesbok are selective bulk grazers, with a strong preference for short, sweet grasses (Themeda triandra, Cynodon dactylon, Eragrostis species). They favor open grassland plains (Highveld) and are particularly attracted to areas that have been recently burned or mowed, where the new growth is fresh and high in protein.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sourveld vs. Sweetveld</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    While they prefer sweetveld (nutrient-rich year-round), they can survive in sourveld (nutrient-poor in winter) areas if supplementary feed or licks are provided. In sourveld regions, their condition drops significantly in winter, requiring protein licks to prevent mortality.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Grazing Habitat Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Waterhole Activity Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Water Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Unlike the Gemsbok or Springbok which can extract moisture from roots and tubers, the Blesbok must drink surface water regularly, typically once a day. This dependency means they rarely wander more than a few kilometers from a water source.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  On hunting farms, this makes waterholes a focal point for their daily movement, particularly in the late morning or early afternoon. During the dry season when water dependency peaks, waterholes become prime ambush locations.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Habitat Management</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Blesbok are excellent "lawnmowers," keeping grass short which facilitates grazing of other species. However, because they are selective, overstocking can lead to "patch grazing," where palatable grass species are hammered into the ground while unpalatable tufts are ignored, leading to veld degradation. Rotational grazing and strict population control via hunting harvests are essential management tools.
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
                Hunting the Blesbok is often the entry point for novice hunters in Africa, yet it remains a staple challenge for experienced sportsmen due to the animal's keen senses and open habitat.
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
                      The hunter and Professional Hunter (PH) will glass from a high vantage point or slowly moving vehicle to locate a herd. Once a target ram is identified, the stalk begins on foot.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Never walk directly at the herd. "Tack" like a sailboat, moving at angles that make it appear as though you are passing by.</li>
                      <li><strong className="text-gold-400">Wind:</strong> The wind must be right. Blesbok have a keen sense of smell. Stalking downwind is futile.</li>
                      <li><strong className="text-gold-400">Distance:</strong> Successful stalks usually result in shots taken from 150 to 250 meters. Getting closer than 150 meters is a test of true fieldcraft.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Voorsit)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      For bowhunters or older clients unable to walk long distances, blinds placed at waterholes or mineral licks are highly effective. This is best done during the dry season when water dependency peaks. Alternatively, ambushes can be set along fence lines or game paths.
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
                The Blesbok is deceptively tough. It is often described as "tenacious" or "hard to put down." A poor shot will result in an animal that can run for kilometers, often requiring a grueling follow-up.
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
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Adequate for culling or youth hunters, but requires surgical shot placement. Avoid on quartering shots.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">6.5mm (Creedmoor/Swede)</td>
                      <td className="px-6 py-4 font-sans text-gray-300">130 – 140 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Excellent</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">High sectional density ensures deep penetration. Low recoil allows for accurate shot placement. Currently a favorite among PHs.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">7mm (7x57, 7mm-08, 7mm Rem Mag)</td>
                      <td className="px-6 py-4 font-sans text-gray-300">140 – 160 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Ideal</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The 7x57 Mauser is legendary in Africa. Offers perfect balance of trajectory, penetration, and knockdown power.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.30 Cal (.308 Win, .30-06)</td>
                      <td className="px-6 py-4 font-sans text-gray-300">150 – 180 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Versatile</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The standard. A .308 with a 165gr bullet is arguably the perfect Blesbok medicine, handling bone impacts and quartering angles with ease.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-white font-medium">.300 Magnums</td>
                      <td className="px-6 py-4 font-sans text-gray-300">180 gr+</td>
                      <td className="px-6 py-4 font-sans text-gray-400">Overkill?</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Effective for long-range shots across open plains, but risks excessive meat damage if standard soft-point bullets are used.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Because Blesbok are often shot at intermediate ranges where velocity is still high, bullet integrity is crucial. Premium, controlled-expansion bullets (e.g., Barnes TSX, Swift A-Frame, Nosler Partition) are recommended over standard cup-and-core bullets. A frangible bullet may splash on the Blesbok's humerus or shoulder blade, failing to penetrate the vitals.
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
                  African antelope anatomy places the heart and lungs slightly lower and further forward than in North American deer.
                </p>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Broadside</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong className="text-white">The ideal shot.</strong> Trace the back line of the front leg upwards. Place the crosshairs one-third of the way up the body. This destroys the top of the heart and the lungs. If the animal is on high alert, aiming "high shoulder" will anchor the animal by breaking the skeletal structure, though this sacrifices some shoulder meat.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Quartering Away</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Aim for the off-side shoulder (the front leg on the far side). The bullet must enter behind the ribs and traverse the chest cavity.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Frontal</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Only recommended for experienced marksmen. Aim for the "soft spot" at the base of the neck, where it joins the chest. <strong className="text-white">Warning:</strong> Ensure the animal is not dipping its head to nod (bot fly irritation) when firing.
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
                For the trophy hunter, the primary challenge is not just hitting the Blesbok, but ensuring the target is a mature ram of trophy quality. Mistakes are common because ewes also carry horns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Distinguishing Rams vs. Ewes</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  Shooting a female by mistake is a cardinal sin in trophy hunting.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Sex Differentiation Guide</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Bases</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Ram:</strong> Thick and heavy. Bases are close together, often light yellow/white on the front surface.<br/>
                        <strong>Ewe:</strong> Thin and spindly. Bases are narrower, appearing like pencils rather than cigars.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Color</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Ram:</strong> Ridges (rings) are often noticeably lighter (yellow/white) against the dark grooves.<br/>
                        <strong>Ewe:</strong> Generally darker, lacking the bold contrast of the male's ridges.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Mass</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Ram:</strong> Thick, muscular neck. Heavier built shoulders.<br/>
                        <strong>Ewe:</strong> Slender neck, lighter frame.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Behavior</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong>Ram:</strong> Solitary or tending females. Aggressive posturing.<br/>
                        <strong>Ewe:</strong> Associated closely with lambs or other females in the herd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full min-h-[500px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Ram vs Ewe Comparison Image Placeholder</span>
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
                      <span><strong>Length:</strong> A mature ram will have horns measuring 15 inches (38 cm) or more. The world record exceeds 20 inches, but 16-17 inches is considered excellent.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Shape:</strong> Look for a wide spread and a distinct "recurved" shape where the tips hook back inward.</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="w-5 h-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong>Bases:</strong> The bases should be thick. If the white bases look like they are almost touching, it is likely a mature ram.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Scoring Systems</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Rowland Ward (RW)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        The historic standard. Measures the length of the longest horn along the front curve.
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 16 ½ inches</p>
                    </div>
                    <div className="bg-white p-4 border border-gray-200">
                      <h5 className="font-serif text-lg text-onyx mb-2">Safari Club International (SCI)</h5>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        The modern standard. Measures the total score (length of both horns + circumference of bases).
                      </p>
                      <p className="text-gold-600 font-bold">Minimum for entry: 40 points</p>
                      <p className="text-gold-600 font-bold">Gold Medal: ~43 points</p>
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
                In the African context, the hunt does not end with the shot. The utilization of the carcass is of paramount importance. Blesbok venison is highly regarded and commercially significant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Blesbok meat is deep red, fine-grained, and extremely lean. It has a distinctive gamey flavor—often described as "herby" or aromatic due to the essential oils in the Karoo bushes and sweet grasses they consume.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The fat is yellow. Unlike beef fat, game fat has a high melting point and can coat the palate unpleasantly. It is also prone to going rancid quickly. It is standard practice to trim all visible yellow fat from the carcass during processing.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Venison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-onyx-light border border-white/10 p-8 md:p-12 mb-16 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-8">Primary Cuts and Usage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fillet (Tenderloin)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Situated inside the ribcage along the spine. The most tender cut. Best eaten fresh, pan-seared quickly to rare/medium-rare.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Backstrap (Loin)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The long muscle along the outside of the spine. Excellent for steaks or whole roasts. <strong className="text-white">Chef's Tip:</strong> Do not overcook. Blesbok loin has zero intramuscular fat; cooking past medium turns it into liver-textured leather.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Hindquarters (Leg)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    The heavy lifting cuts—Silverside, Topside, Thick Flank. These are ideal for roasting (if larded with bacon to add moisture) or, most commonly, for making Biltong.
                  </p>
                </div>
                <div className="bg-onyx p-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Shanks and Neck</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    High in collagen and connective tissue. These cuts are tough but flavorful, making them the prize ingredients for Potjiekos (stews) where slow cooking breaks down the collagen into gelatin.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Traditional Recipes</h3>
                <div className="space-y-6">
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">The Potjiekos (Little Pot Food)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      This is a slow-cooked stew prepared outdoors in a cast-iron, three-legged pot over coals. It is a social event as much as a meal.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Heat oil and lard in the pot. Brown the Blesbok neck/shank pieces. Add onions, garlic, bacon, red wine, beef stock, and herbs. Simmer gently for 2–3 hours. Layer vegetables on top and let them steam. Serve with rice or "pap" (maize porridge).
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Traditional Biltong</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      Biltong is not jerky; it is cured and air-dried, retaining a softer texture.
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Use the silverside or topside. Cut into strips roughly 2-3cm thick. Mix coarse salt, brown sugar, black pepper, and toasted coriander seeds. Coat thoroughly, marinate for 4-12 hours, then hang in a cool, well-ventilated area for 3–5 days. The meat is ready when firm on the outside but still maroon and slightly moist in the center.
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

        {/* Tracking & Signs */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-gold-600 font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
                Tracking & Signs
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Reading the Veld
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto">
                For the hunter, interpreting the signs left by the Blesbok is part of the immersive experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Spoor (Footprints)</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Blesbok hooves are heart-shaped but elongated, typical of the Alcelaphine tribe.
                </p>
                <div className="bg-white border border-gray-200 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-3">Dimensions</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Front hooves:</strong> Approximately 70mm long x 45mm wide</li>
                    <li><strong>Hind hooves:</strong> Slightly smaller (65mm x 40mm)</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                    The toe tips are pointed and often slightly splayed, especially on soft ground. The impression is deeper at the toe than the heel. The track is generally narrower and sharper than that of an Impala.
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Blesbok Spoor (Footprint) Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16 reveal">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Dung Midden Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Dung (Scat) and Middens</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Blesbok dung appears as small, black pellets, often clustered together. When fresh, they are shiny and moist.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-3">Dung Middens</h4>
                  <p className="font-sans text-gray-600 leading-relaxed mb-4">
                    The most obvious sign of Blesbok presence is the dung midden. Territorial rams defecate repeatedly in the same spot to mark ownership. These middens appear as circular patches of accumulated pellets on bare ground.
                  </p>
                  <p className="font-sans text-gray-600 leading-relaxed font-medium">
                    <strong className="text-gold-600">Hunting Insight:</strong> Finding a fresh midden (with warm or moist dung on top) indicates a territorial ram is in the immediate vicinity.
                  </p>
                </div>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Differentiation from Impala</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Impala also use middens, but Impala dung pellets are slightly more elongated and "pointed" at one end compared to the rounder Blesbok pellets. Additionally, Impala middens are often located in bushier cover, whereas Blesbok middens are in open clearings.
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
                A Testament to Conservation Success
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Blesbok is a testament to the resilience of nature and the efficacy of value-based conservation. From the brink of extinction, it has rebounded to become a pillar of the South African wildlife economy. For the game farmer, it is a reliable, productive asset that manages the veld and generates revenue. For the hunter, it offers a challenging, fair-chase pursuit that demands skill in stalking, judging, and marksmanship.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                Whether admired for its stark white face against a Highveld thunderstorm, pursued across the frost-laden plains of the Free State, or enjoyed around a campfire as a steaming potjie, the Blesbok is an integral thread in the fabric of the African safari experience.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Understanding its biology, respecting its behavior, and utilizing its resources ethically is the responsibility of every hunter who steps onto the red earth of Africa.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 15 inches for a mature ram. World record exceeds 20 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Population increasing. Estimated 240,000+ individuals.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">Fair-chase pursuit requiring fieldcraft, patience, and ethical judgment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Blesbok at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and discover the beauty of the Highveld grasslands in the Makoppa district.
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