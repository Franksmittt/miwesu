'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { activityImages } from '@/lib/activity-images'
import {
  Target, Binoculars, Mountain, ArrowRight, Car, Bird, Footprints, Users, Flame,
} from 'lucide-react'

export default function ActivitiesPage() {
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

  const activities = [
    {
      icon: Target,
      title: 'Conservation Harvest',
      description:
        'Ethical hunting experiences guided by our professional trackers. All harvests follow strict conservation quotas and ethical practices.',
      image: activityImages.conservationHarvestCard,
    },
    {
      icon: Car,
      title: 'Guided game drives',
      description:
        'Wildlife viewing from safari vehicles on farm roads and sweetveld, led by your professional team—waterholes, koppies, and quiet approaches at MIWESU’s pace.',
      image: activityImages.gameDriveCard,
      sectionId: 'game-drives-section',
    },
    {
      icon: Footprints,
      title: 'Walking safaris',
      description:
        'On-foot time in the bushveld with guides: tracks, trees, and the details you miss from the vehicle. Family-friendly when arranged with your hosts.',
      image: activityImages.walkingSafariCard,
      sectionId: 'walking-safaris-section',
    },
    {
      icon: Users,
      title: 'Friends & family',
      description:
        'Exclusive-use stays where generations meet: first hunts beside seasoned hands, kids on the trampoline, long tables at the boma, and evenings that belong to everyone.',
      image: activityImages.gatheringsFamilyCard,
    },
    {
      icon: Binoculars,
      title: 'Wildlife viewing',
      description:
        'Binoculars, patience, and real habitat—sweetveld and bushveld mosaic across the farm, without packaged “safari theatre.”',
      image: activityImages.wildlifeViewingCard,
    },
    {
      icon: Bird,
      title: 'Birding',
      description:
        'A transition zone between moist Bushveld and arid Kalahari, raptors, bee-eaters, hornbills, and regional specials. Neighboring farms record 140–200+ species.',
      image: activityImages.birdingCard,
      sectionId: 'birding-section',
    },
  ]

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute w-[120%] h-[120%] -left-[10%] -top-[10%] motion-safe:animate-ken-burns motion-reduce:animate-none">
              <Image
                src={activityImages.hero}
                alt="Activities at MIWESU Game Farm — conservation harvest, guided game drives, walking safaris, birding, Makoppa Thabazimbi"
                fill
                sizes="100vw"
                className="object-cover opacity-50"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="type-eyebrow-hero mb-4 sm:mb-6 block">
              The Experience
            </span>
            <h1 className="type-h1-hero mb-4 sm:mb-6 px-4">
              Our <span className="text-gradient-gold">Pursuits</span>
            </h1>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-16 sm:py-24 lg:py-32 bg-onyx text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-20">
              {activities.map((activity, index) => {
                const Icon = activity.icon
                const cardClass =
                  'group relative rounded-2xl bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal shadow-luxury'
                const delayStyle = { animationDelay: `${index * 100}ms` }
                const inner = (
                  <>
                    <div className="h-56 sm:h-64 overflow-hidden relative">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent" aria-hidden />
                      <div className="absolute top-6 right-6">
                        <Icon className="w-10 h-10 text-gold-500" aria-hidden />
                      </div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="type-h3-dark mb-3 sm:mb-4">{activity.title}</h3>
                      <p className="text-sm text-gray-400 font-sans font-light leading-relaxed">{activity.description}</p>
                      {'sectionId' in activity && activity.sectionId ? (
                        <span className="mt-4 inline-flex items-center text-gold-400 text-xs font-sans uppercase tracking-widest">
                          Read more <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden />
                        </span>
                      ) : null}
                    </div>
                  </>
                )
                if ('sectionId' in activity && activity.sectionId) {
                  return (
                    <Link
                      key={activity.title}
                      href={`#${activity.sectionId}`}
                      className={`${cardClass} block no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500/70`}
                      style={delayStyle}
                    >
                      {inner}
                    </Link>
                  )
                }
                return (
                  <div key={activity.title} className={cardClass} style={delayStyle}>
                    {inner}
                  </div>
                )
              })}
            </div>

            <p className="type-lead-onyx text-center max-w-3xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base border border-white/10 rounded-2xl px-4 py-3 bg-onyx-light/50">
              Most pursuits are part of your stay or arranged with our team; some activities need advance notice or carry
              additional fees. Your concierge confirms details when you book.
            </p>

            {/* Detailed Activity Sections */}
            <div className="space-y-20 mt-20">
              {/* Conservation Harvest - Detailed */}
              <div className="reveal">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 sm:mb-12">
                  <div className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.conservationHarvestMain}
                      alt="Conservation harvest - ethical hunting"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="type-eyebrow-dark mb-3 sm:mb-4 block">Conservation Harvest</span>
                    <h3 className="type-h2-section-dark mb-4 sm:mb-6">Ethical Hunting in the Sweetveld</h3>
                    <p className="type-lead-onyx mb-4 sm:mb-6">
                      Our conservation harvest program is guided by professional trackers who understand the Makoppa ecosystem intimately. Every hunt follows strict conservation quotas and ethical practices, ensuring sustainable utilization of the resource.
                    </p>
                    <p className="type-lead-onyx mb-6 sm:mb-8">
                      The Sweetveld advantage means animals are in peak condition year-round, resulting in superior trophy quality and exceptional meat. All harvests are processed in our professional slaughter facility in line with food-safety and regulatory requirements.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">100%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Ethical harvest</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">Ethical</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Fair Chase</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conservation Harvest Gallery */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                  <div className="relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.conservationHarvestTracker}
                      alt="Professional tracker in the bushveld"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.conservationHarvestKudu}
                      alt="Kudu bull in peak condition"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.conservationHarvestProcessing}
                      alt="Meat processing facility"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Guided game drives — detailed */}
              <div id="game-drives-section" className="scroll-mt-28 reveal delay-100">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <span className="type-eyebrow-dark mb-4 block">Guided game drives</span>
                    <h3 className="type-h2-section-dark mb-6">From the vehicle, at MIWESU’s pace</h3>
                    <p className="type-lead-onyx mb-6">
                      Game viewing runs on farm roads and open sweetveld with your professional hunter and team—not a separate ticketed “safari product.” You read the veld as they do: where animals drink, how the wind lies, and when to stay quiet.
                    </p>
                    <p className="type-lead-onyx mb-8">
                      Expect waterholes, granite koppies, and Leadwood shade the same way hunters and observers share the day. Cameras welcome; the emphasis is on authentic bushveld time rather than a packaged photo itinerary.
                    </p>
                    <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                      <Car className="w-5 h-5 shrink-0" aria-hidden />
                      <span>With your PH &amp; team</span>
                    </div>
                  </div>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.gameDriveCard}
                      alt="Safari vehicles at MIWESU for guided game viewing"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.photographicSafariMain}
                      alt="Plains game and sweetveld seen from game drives at MIWESU"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.photographicSafariWaterhole}
                      alt="Waterhole game viewing on the farm"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.photographicSafariKoppies}
                      alt="Granite koppies and bushveld from the farm road network"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Birding Section */}
              <div id="birding-section" className="scroll-mt-28 reveal delay-300">
                <div className="text-center mb-12">
                  <span className="type-eyebrow-dark mb-4 block tracking-[0.35em]">Birding</span>
                  <h3 className="type-h2-section-dark mb-6">
                    A Birder's Paradise
                  </h3>
                  <p className="type-lead-onyx max-w-2xl mx-auto">
                    The Makoppa district is a transition zone between the moist Bushveld and the arid Kalahari, resulting in a unique overlap of bird species. Neighboring farms record over 140 to 200 species.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-6">Key Species</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" aria-hidden />
                        <div>
                          <h5 className="font-serif text-white mb-1">Raptors</h5>
                          <p className="text-gray-400 text-sm">Fish Eagles, Martial Eagles, and Snake Eagles along river tributaries.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" aria-hidden />
                        <div>
                          <h5 className="font-serif text-white mb-1">Kalahari Specials</h5>
                          <p className="text-gray-400 text-sm">Crimson-breasted Shrike and Swallow-tailed Bee-eater.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" aria-hidden />
                        <div>
                          <h5 className="font-serif text-white mb-1">Bushveld Icons</h5>
                          <p className="text-gray-400 text-sm">Hornbills (Yellow-billed and Red-billed), Kingfishers, and Rollers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                    <Image
                      src={activityImages.birdingMain}
                      alt="Birding in the Makoppa district"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Walking Safaris & Nature Walks */}
              <div id="walking-safaris-section" className="scroll-mt-28 grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-400">
                <div>
                  <span className="type-eyebrow-dark mb-4 block">Walking Safaris</span>
                  <h3 className="type-h2-section-dark mb-6">
                    On Foot Through the Bushveld
                  </h3>
                  <p className="type-lead-onyx mb-6">
                    Guided walking safaris offer an intimate connection with the Makoppa ecosystem. Track animals on foot, learn about the flora and fauna from expert guides, and experience the bushveld at ground level.
                  </p>
                  <p className="type-lead-onyx mb-8">
                    Perfect for families with children, these nature walks are designed to be educational and safe. Learn about the ancient Leadwood trees, identify animal tracks, and discover the smaller creatures that call the Makoppa home.
                  </p>
                  <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                    <Footprints className="w-5 h-5 shrink-0" aria-hidden />
                    <span>Family-Friendly Guided Walks</span>
                  </div>
                </div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                  <Image
                    src={activityImages.walkingSafariMain}
                    alt="Walking safari in the Makoppa district"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Boma, lapa & braai evenings */}
              <div className="reveal delay-500 mb-20">
                <div className="rounded-2xl bg-gradient-to-br from-onyx to-onyx/90 py-10 md:py-14">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-luxury">
                      <Image
                        src={activityImages.bomaLapaEveningCard}
                        alt="Outdoor braai, pool and lapa at MIWESU Homestead"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="type-eyebrow-dark mb-4 block">Boma, lapa &amp; braai</span>
                      <h3 className="type-h2-section-dark mb-6">Evenings at the Homestead</h3>
                      <p className="type-lead-onyx mb-6">
                        The Homestead is built for shared meals: outdoor braai, boma fire, and lapa space where syndicates and families decompress after the day. This is the rhythm MIWESU sells—honest bushveld hospitality, not a scripted entertainment lineup.
                      </p>
                      <p className="type-lead-onyx mb-8">
                        Harvest meat from our professional facility often ends here too: field-to-table context your group actually lives, with room for kids at the pool and adults at the fire.
                      </p>
                      <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                        <Flame className="w-5 h-5 shrink-0" aria-hidden />
                        <span>Fire, food &amp; family</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Friends & family, shared experience */}
              <div className="grid md:grid-cols-1 gap-12 mb-20">
                <div className="bg-onyx-light border border-white/5 rounded-2xl p-10 reveal delay-600">
                  <Users className="w-12 h-12 text-gold-500 mb-6" aria-hidden />
                  <h3 className="type-h2-section-dark mb-4">Friends &amp; family</h3>
                  <p className="type-lead-onyx mb-6">
                    MIWESU is built for groups: syndicates, extended families, and couples who want the bushveld together, not on separate schedules. Share the smell of rain on dust, the crackle of the boma, and stories that outlast the fire.
                  </p>
                  <p className="type-lead-onyx">
                    Observers and camera-carrying guests are as welcome as hunters. Everyone finds a place in the rhythm of the day, from dawn coffee to the last coals in the boma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 bg-marble-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <Mountain className="w-16 h-16 text-gold-500 mx-auto mb-8" aria-hidden />
            <h2 className="type-h2-section mb-8">Custom Experiences</h2>
            <p className="type-lead mb-10 max-w-2xl mx-auto">
              Every stay at Miwesu can be tailored to your preferences. Our concierge team will work with you to create a bespoke itinerary that matches your interests, whether you&apos;re a hunter, observer, birder, or simply seeking tranquility in the Makoppa.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold-500 text-onyx uppercase tracking-widest text-xs font-bold hover:bg-gold-400 transition-all rounded-xl"
              >
                Check dates <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-onyx text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all rounded-xl"
              >
                Plan Your Visit <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
              </Link>
              <Link
                href="/rates"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-onyx text-onyx uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all rounded-xl"
              >
                View Rates <ArrowRight className="w-4 h-4 ml-2" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

