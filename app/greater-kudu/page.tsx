'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { Target, MapPin, Trophy, Leaf, Clock, Users, ArrowRight, Info, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function GreaterKuduPage() {
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
              alt="Greater Kudu in natural habitat"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              The Grey Ghost
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              <span className="text-gradient-gold">Greater Kudu</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto italic font-serif">
              Tragelaphus strepsiceros
            </p>
          </div>
        </section>

        {/* Quick Facts Banner */}
        <section className="bg-onyx text-white py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">190-270 kg</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Adult Bull Weight</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">53+ inches</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">Trophy Benchmark</div>
              </div>
              <div className="reveal">
                <div className="text-gold-500 font-serif text-2xl md:text-3xl mb-2">.300 Win Mag</div>
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
                  The Grey Ghost of the Bushveld
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Greater Kudu stands as one of Africa's most iconic and sought-after antelope species. Known as the "Grey Ghost" for its elusive nature and ability to vanish into thick bushveld, this magnificent spiral-horned antelope represents the pinnacle of African trophy hunting.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa area is famous for its heavy-horned Kudu bulls which thrive in the thick Acacia thickets. These magnificent animals are intelligent, cautious, and a true test of the hunter's skill, patience, and fieldcraft.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose">
                  Our Sweetveld sustains Kudu in peak condition year-round, resulting in exceptional trophy quality. The thick mountain thickets provide perfect habitat, and our annual census ensures sustainable management of this iconic species.
                </p>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/wildlife-kudu-featured.jpg"
                  alt="Greater Kudu bull in thicket"
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
                  The Greater Kudu belongs to the family Bovidae, subfamily Bovinae, and the tribe Tragelaphini. This tribe includes other spiral-horned antelope such as the Nyala, Bushbuck, and Eland. The genus <em className="text-gold-400">Tragelaphus</em> is characterized by spiral horns (in males), a preference for dense cover, and browsing habits.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  The specific name <em className="text-gold-400">strepsiceros</em> derives from Greek, meaning "twisted horn," a reference to the magnificent spiral horns that are the hallmark of mature bulls.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Subspecies</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While some authorities recognize regional variations, the Greater Kudu is generally considered a single species with minor geographic variations. The southern African populations, including those in the Makoppa district, are among the largest-bodied and heaviest-horned in the species' range.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Kudu Taxonomy Comparison Image Placeholder</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-onyx-light to-onyx p-8 md:p-12 reveal">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Historical Distribution & Conservation Status</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Range and Habitat</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    The Greater Kudu's range extends from East Africa (Ethiopia, Kenya, Tanzania) southward through Central and Southern Africa. In South Africa, they are found in the northern and eastern regions, favoring areas with dense bushveld, riverine thickets, and mountain slopes.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The Makoppa district's combination of Sweetveld grasslands and dense Acacia thickets provides ideal habitat, allowing Kudu to feed in the open during early morning and late afternoon while retreating to thick cover during the heat of the day.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Conservation Success</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Unlike many African species, the Greater Kudu has fared relatively well. While habitat loss remains a concern, the species' adaptability to fenced reserves and its value to the game industry has ensured stable populations across much of its range.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    The IUCN lists the Greater Kudu as "Least Concern," with populations stable or increasing in well-managed reserves. The species' success is a testament to the value-based conservation model, where hunting revenue funds habitat protection and anti-poaching efforts.
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
                The Greater Kudu is one of the largest antelope species, with bulls standing up to 1.5 meters at the shoulder and weighing over 250 kilograms.
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
                      <td className="px-6 py-4 font-sans text-gray-600">190 – 270 kg (419 – 595 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">120 – 210 kg (265 – 463 lbs)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Bulls are significantly larger with massive necks and shoulders</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Shoulder Height</td>
                      <td className="px-6 py-4 font-sans text-gray-600">130 – 150 cm (51 – 59 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-600">100 – 130 cm (39 – 51 in)</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Tallest of the Tragelaphines</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Head-Body Length</td>
                      <td className="px-6 py-4 font-sans text-gray-600">185 – 245 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-600">165 – 215 cm</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Elongated body adapted for dense cover navigation</td>
                    </tr>
                    <tr className="bg-marble">
                      <td className="px-6 py-4 font-sans text-onyx font-medium">Lifespan</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-600">15 – 20 years</td>
                      <td className="px-6 py-4 font-sans text-gray-500 text-sm">Up to 23 years in protected reserves</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/home-species-kudu.jpg"
                  alt="Greater Kudu coat coloration"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Coat Coloration and Markings</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Greater Kudu's coat is a masterpiece of camouflage. The base color ranges from greyish-brown to reddish-brown, with older bulls often appearing darker, almost charcoal-grey. This coloration blends perfectly with the dappled shadows of thick bushveld.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Distinctive white vertical stripes (typically 6-10) run along the flanks, breaking up the animal's outline and providing excellent camouflage in dense vegetation. A white chevron marks the forehead, and a white throat patch is present.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Sexual Dimorphism</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Cows are lighter in color, often with a more reddish tint, and lack the dark, grizzled appearance of mature bulls. The most obvious difference, however, is the presence of horns—only bulls carry the magnificent spiral horns that are the species' defining feature.
                  </p>
                </div>
              </div>
            </div>

            {/* Horn Configuration */}
            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Horn Configuration</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The spiral horns of the Greater Kudu are among the most impressive in the animal kingdom. Only males carry horns, which begin growing at around 6-9 months of age and continue throughout the bull's life.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The horns form a tight spiral, typically making 2.5 to 3 full turns. They grow outward, upward, and then curve inward, with the tips often pointing forward. The horns are heavily ridged (annulated) along their length, with smooth, sharp tips.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Trophy Characteristics</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    A mature trophy bull will have horns measuring 50 inches or more, with exceptional specimens exceeding 60 inches. The Rowland Ward minimum is 53 7/8 inches. Look for wide spread, deep spirals, and heavy bases. The tips should be sharp and undamaged.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Kudu Horn Detail Image Placeholder</span>
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
                    The Kudu's narrow, elongated body allows it to slip through dense vegetation with remarkable ease. When alarmed, a Kudu can disappear into seemingly impenetrable thicket in seconds, earning its "Grey Ghost" moniker.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Large, cupped ears provide exceptional hearing, allowing Kudu to detect the slightest sound of approaching danger. The ears can rotate independently, scanning 360 degrees for threats.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Sensory Adaptations</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    Kudu possess an acute sense of smell, crucial for detecting predators and for communication. The preorbital glands (in front of the eyes) secrete a sticky substance used for marking territory.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Their large, dark eyes are adapted for low-light conditions, allowing them to be active during dawn and dusk when visibility is reduced but predators are most active.
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
                  Cows and their offspring form small groups of 3-10 animals. These herds are fluid, with individuals joining and leaving. Cows are highly protective of their calves, which remain hidden in thick cover for the first few weeks of life.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Shield className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Solitary Bulls</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mature bulls are typically solitary, especially outside the breeding season. They establish home ranges but are not highly territorial. Bulls will tolerate other males unless competing for estrous females during the rut.
                </p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6">
                <Users className="w-8 h-8 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-white mb-3">Bachelor Groups</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Young bulls, typically 2-4 years old, may form small bachelor groups. These associations are loose and temporary, as bulls become more solitary with age. Old bulls may also form loose associations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Kudu Behavior Image Placeholder</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Daily Activity Cycle</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Kudu are crepuscular, with peak activity during early morning (dawn) and late afternoon (dusk). During these periods, they emerge from thick cover to feed in more open areas, taking advantage of the cooler temperatures and reduced visibility to predators.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Feeding Behavior</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Kudu are primarily browsers, feeding on leaves, shoots, fruits, and flowers. They are selective feeders, choosing the most nutritious parts of plants. During the dry season, they may also graze on grass, but browsing remains their primary feeding strategy.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 font-medium">
                    <strong className="text-gold-400">Hunting Insight:</strong> The best times to hunt Kudu are during the early morning and late afternoon when they are most active and visible. During midday, they retreat to dense cover and are nearly impossible to locate.
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
                    The rut typically occurs from April to August in southern Africa, with peak activity in June-July. During this period, bulls become more active and vocal, emitting deep, guttural grunts that can carry for kilometers.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Bulls will seek out estrous females, often following cow herds for days. Competition between bulls is usually ritualized, involving parallel walks and horn displays, though physical combat can occur.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-gold-400 mb-4">Calving and Maternal Care</h4>
                  <p className="text-gray-300 leading-loose mb-4">
                    After a gestation period of approximately 9 months, calves are born from January to March. Newborn calves are hidden in dense cover, with the mother returning periodically to nurse. This "hider" strategy protects vulnerable young from predators.
                  </p>
                  <p className="text-gray-300 leading-loose">
                    Calves remain hidden for 2-4 weeks before joining the mother's herd. This period is critical for survival, and disturbance by humans or predators can cause the mother to abandon the calf.
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
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Browsing Preferences</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Kudu are selective browsers, feeding on over 100 different plant species. They prefer the leaves, shoots, and fruits of trees and shrubs, particularly Acacia species, Combretum, and various bushveld trees.
                </p>
                <div className="bg-gold-500/10 border-l-4 border-gold-500 p-6 mt-6">
                  <h4 className="font-serif text-xl text-onyx mb-2">Seasonal Adaptations</h4>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    During the wet season, Kudu feed heavily on new growth, flowers, and fruits. In the dry season, they shift to tougher browse, including twigs and bark. Their ability to digest fibrous plant material allows them to survive in areas where grazers would struggle.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/about-sweetveld-kudu.jpg"
                  alt="Kudu browsing in Sweetveld"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div className="relative h-[400px]">
                <Image
                  src="/images/conservation-harvest-kudu.jpg"
                  alt="Kudu in thicket habitat"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Habitat Requirements</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  Kudu require a combination of dense cover for security and more open areas for feeding. The ideal habitat includes riverine thickets, mountain slopes with bushveld, and areas where dense vegetation provides escape cover.
                </p>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-4">
                  The Makoppa district's Acacia thickets provide perfect daytime cover, while the adjacent Sweetveld grasslands offer excellent feeding opportunities during dawn and dusk.
                </p>
                <div className="bg-onyx text-white p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-2">Water Requirements</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    While Kudu can obtain moisture from browse, they prefer to drink daily when water is available. Waterholes in or near thick cover are heavily utilized, especially during the dry season. This dependency makes waterholes prime locations for hunting.
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
                Hunting the Greater Kudu is considered one of Africa's greatest challenges. The combination of the animal's intelligence, wariness, and preference for dense cover makes it a true test of hunting skill.
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
                      The most rewarding method involves glassing from high vantage points at dawn and dusk, when Kudu emerge to feed. Once a trophy bull is located, the careful stalk begins.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4 list-disc">
                      <li><strong className="text-gold-400">The Approach:</strong> Move slowly and quietly, using available cover. Kudu have exceptional hearing—one snapped twig can send them bolting.</li>
                      <li><strong className="text-gold-400">Wind:</strong> Critical. Kudu's sense of smell is acute. Always stalk with the wind in your face.</li>
                      <li><strong className="text-gold-400">Patience:</strong> Stalks may take hours. Wait for the animal to present a clear shot. Rushing leads to failure.</li>
                    </ul>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Ambush (Blind Hunting)</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Setting up a blind near a waterhole or feeding area can be highly effective, especially during the dry season. This method allows for careful trophy evaluation and reduces the need for long stalks through noisy vegetation.
                    </p>
                  </div>
                  <div className="bg-onyx-light border border-white/10 p-6">
                    <h4 className="font-serif text-xl text-gold-400 mb-3">Tracking</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Following fresh tracks in the early morning can lead to a bull. This method requires expert tracking skills and extreme patience, as Kudu will often circle back to watch their backtrail.
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
                The Greater Kudu is a large, tough animal. While not as dangerous as Cape Buffalo, a poorly placed shot can result in a long, difficult tracking job. Adequate caliber and bullet construction are essential.
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
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">The preferred choice for Kudu. Excellent trajectory, deep penetration, and reliable expansion. Handles all shot angles.</td>
                    </tr>
                    <tr className="bg-onyx/50">
                      <td className="px-6 py-4 font-sans text-white font-medium">.375 H&H Magnum</td>
                      <td className="px-6 py-4 font-sans text-gray-300">270 – 300 gr</td>
                      <td className="px-6 py-4 font-sans text-gold-400 font-medium">Versatile</td>
                      <td className="px-6 py-4 font-sans text-gray-400 text-sm">Excellent for Kudu and allows hunting larger game on the same safari. Higher recoil but maximum confidence.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 bg-onyx p-6 border border-white/10">
                <h4 className="font-serif text-xl text-gold-400 mb-3">Bullet Construction</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Premium controlled-expansion bullets are recommended. Kudu have heavy bone structure, and shots may need to penetrate shoulder blades or ribs. Bullets like Barnes TSX, Swift A-Frame, or Nosler Partition provide reliable performance. Avoid frangible varmint bullets.
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
                  Proper shot placement is critical. The Kudu's vitals are positioned slightly lower and more forward than in North American deer.
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
                      Only for experienced marksmen. Aim at the base of the neck where it meets the chest. This shot requires precision and adequate bullet construction to penetrate the heavy bone structure.
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
                Judging a Kudu trophy in the field is challenging. The animal's preference for thick cover and its wariness make close observation difficult. Understanding the key characteristics of a trophy bull is essential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-onyx mb-6">Trophy Characteristics</h3>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-6">
                  A trophy Kudu bull is defined by horn length, spiral quality, and overall mass.
                </p>
                <div className="bg-white border border-gray-200 shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <h4 className="font-serif text-xl text-onyx mb-4">Key Indicators</h4>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Horn Length</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Look for horns that extend well past the ears when viewed from the side. A mature bull's horns should appear long and sweeping. The Rowland Ward minimum is 53 7/8 inches, with exceptional trophies exceeding 60 inches.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Spiral Quality</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The horns should show a tight, deep spiral with 2.5 to 3 full turns. Look for symmetry between the two horns. Uneven spirals reduce trophy value.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Base Mass</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Thick, heavy bases indicate an older, more mature bull. The bases should appear substantial, not spindly. Heavy bases contribute significantly to SCI scoring.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-onyx mb-2">Body Size</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mature bulls are significantly larger than cows and young bulls. Look for a massive neck, heavy shoulders, and overall bulk. Older bulls often have a darker, grizzled appearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/images/about-trophy-kudu.jpg"
                  alt="Trophy Kudu bull"
                  fill
                  className="object-cover shadow-luxury"
                />
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
                  <p className="text-gold-600 font-bold">Minimum for entry: 53 7/8 inches</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 58+ inches</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-onyx mb-4">Safari Club International (SCI)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    The modern standard. Measures the total score including length of both horns, tip-to-tip spread, and base circumference.
                  </p>
                  <p className="text-gold-600 font-bold">Minimum for entry: 100 points</p>
                  <p className="text-gold-600 font-bold mt-2">Gold Medal: 110+ points</p>
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
                Kudu venison is considered among the finest game meat in Africa. The meat is lean, flavorful, and highly nutritious.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16 reveal">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">Meat Characteristics</h3>
                <p className="text-gray-300 text-lg leading-loose mb-4">
                  Kudu meat is deep red, fine-grained, and extremely lean. It has a rich, gamey flavor that is more pronounced than that of grazers like Impala or Blesbok, reflecting the animal's browsing diet.
                </p>
                <div className="bg-onyx-light border border-white/10 p-6 mt-6">
                  <h4 className="font-serif text-xl text-gold-400 mb-3">Fat Content</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Like all game meat, Kudu is very lean with minimal fat. The fat that is present is yellow and should be trimmed during processing. The lack of intramuscular fat means the meat must be cooked carefully to avoid drying out.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Kudu Venison Image Placeholder</span>
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
                The Ultimate African Trophy
              </h2>
            </div>
            <div className="max-w-4xl mx-auto reveal">
              <p className="text-gray-300 text-lg leading-loose mb-6">
                The Greater Kudu represents the pinnacle of African antelope hunting. Its combination of size, beauty, intelligence, and wariness makes it a true test of hunting skill. The magnificent spiral horns are among the most sought-after trophies on the continent.
              </p>
              <p className="text-gray-300 text-lg leading-loose mb-6">
                In the Makoppa district, our Sweetveld grasslands and dense Acacia thickets provide ideal habitat for Kudu. The result is exceptional trophy quality, with bulls reaching their full potential in peak physical condition.
              </p>
              <p className="text-gray-300 text-lg leading-loose">
                Whether pursued for the challenge, the trophy, or the exceptional venison, the Greater Kudu offers an unforgettable hunting experience. Success requires patience, skill, and respect for this magnificent animal and its habitat.
              </p>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8 reveal">
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Trophy Quality</h3>
                <p className="text-gray-300 text-sm">Minimum 53 7/8 inches for Rowland Ward. Exceptional trophies exceed 60 inches.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Leaf className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Conservation Status</h3>
                <p className="text-gray-300 text-sm">Least Concern - Populations stable and increasing in well-managed reserves.</p>
              </div>
              <div className="bg-onyx-light border border-white/10 p-6 text-center">
                <Target className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Hunting Challenge</h3>
                <p className="text-gray-300 text-sm">One of Africa's greatest challenges, requiring skill, patience, and fieldcraft.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="reveal">
              <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                Experience the Greater Kudu at MIWESU
              </h2>
              <p className="font-sans text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Plan your conservation harvest experience and pursue the Grey Ghost in the Makoppa district's prime Kudu habitat.
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
