'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import {
  Target,
  Star,
  Heart,
  Activity,
  Camera,
  Binoculars,
  Mountain,
  ArrowRight,
  Car,
  Bird,
  Footprints,
  Sunrise,
  Moon,
  Sparkles,
  Users,
  Shield,
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
      description: 'Ethical hunting experiences guided by our professional trackers. All harvests follow strict conservation quotas and ethical practices.',
      image: '/images/activity-conservation-harvest-card.jpg',
    },
    {
      icon: Camera,
      title: 'Photographic Safaris',
      description: 'Capture the beauty of the Makoppa district with guided photographic safaris. Perfect for wildlife enthusiasts and photographers.',
      image: '/images/activity-photographic-safari-card.jpg',
    },
    {
      icon: Star,
      title: 'Celestial Safaris',
      description: 'Thabazimbi offers some of the darkest skies in the southern hemisphere. Private astronomy sessions available.',
      image: '/images/activity-celestial-safari-card.jpg',
    },
    {
      icon: Heart,
      title: 'Mobile Wellness',
      description: 'In-villa spa treatments using indigenous Marula oils. Relaxation without leaving your sanctuary.',
      image: '/images/activity-mobile-wellness-card.jpg',
    },
    {
      icon: Activity,
      title: 'Vita-Darting',
      description: 'Participate in a non-lethal "Green Hunt." Assist vets with DNA collection and micro-chipping.',
      image: '/images/activity-vita-darting-card.jpg',
    },
    {
      icon: Binoculars,
      title: 'Wildlife Viewing',
      description: 'Guided game drives and walking safaris to observe the diverse wildlife of the Iron Mountain.',
      image: '/images/activity-wildlife-viewing-card.jpg',
    },
  ]

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/activities-hero.jpg"
              alt="Activities"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              The Experience
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Our <span className="text-gradient-gold">Pursuits</span>
            </h1>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-32 bg-onyx text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {activities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-64 overflow-hidden relative">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent"></div>
                      <div className="absolute top-6 right-6">
                        <Icon className="w-10 h-10 text-gold-500" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl text-white mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-sans leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Detailed Activity Sections */}
            <div className="space-y-20 mt-20">
              {/* Conservation Harvest - Detailed */}
              <div className="reveal">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/conservation-harvest-main.jpg"
                      alt="Conservation harvest - ethical hunting"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      Conservation Harvest
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Ethical Hunting in the Sweetveld
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      Our conservation harvest program is guided by professional trackers who understand the Makoppa ecosystem intimately. Every hunt follows strict conservation quotas and ethical practices, ensuring sustainable utilization of the resource.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      The Sweetveld advantage means animals are in peak condition year-round, resulting in superior trophy quality and exceptional meat. All harvests are processed in our professional slaughter facility, and 100% of the meat is donated to local families—feeding 300 families monthly.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">100%</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Meat Donated</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">Ethical</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Fair Chase</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Conservation Harvest Gallery */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/conservation-harvest-tracker.jpg"
                      alt="Professional tracker in the bushveld"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/conservation-harvest-kudu.jpg"
                      alt="Kudu bull in peak condition"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/conservation-harvest-processing.jpg"
                      alt="Meat processing facility"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>

              {/* Photographic Safaris - Detailed */}
              <div className="reveal delay-100">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      Photographic Safaris
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Capture the Makoppa
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      Guided photographic safaris through the Makoppa district offer unparalleled opportunities to capture the beauty of the Arid Sweet Bushveld. From the granite koppies at sunrise to the Leadwood forests at golden hour, every moment is a photograph waiting to happen.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      Our guides know the best locations for wildlife photography, from waterholes where animals congregate to the thick Acacia thickets where the Grey Ghost (Kudu) moves silently. Perfect for wildlife enthusiasts, photographers, and those who prefer non-consumptive experiences.
                    </p>
                    <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                      <Camera className="w-5 h-5" />
                      <span>Professional Photography Tours</span>
                    </div>
                  </div>
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/photographic-safari-main.jpg"
                      alt="Photographic safari in the Makoppa district"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>

                {/* Photography Gallery */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/photographic-safari-waterhole.jpg"
                      alt="Wildlife photography at waterhole"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/photographic-safari-koppies.jpg"
                      alt="Landscape photography of granite koppies"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/photographic-safari-sunset.jpg"
                      alt="Sunset photography in the bushveld"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>

              {/* Celestial Safaris - Detailed */}
              <div className="bg-gradient-to-br from-onyx to-onyx/90 p-12 md:p-16 mb-20 reveal delay-200">
                <div className="max-w-7xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[500px]">
                      <Image
                        src="/images/celestial-safari-main.jpg"
                        alt="Stargazing in Thabazimbi dark skies"
                        fill
                        className="object-cover shadow-luxury"
                      />
                    </div>
                    <div>
                      <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                        Celestial Safaris
                      </span>
                      <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        The Darkest Skies
                      </h3>
                      <p className="text-gray-300 text-lg leading-loose mb-6">
                        Thabazimbi offers some of the darkest skies in the southern hemisphere. Far from light pollution, the Makoppa district provides an unparalleled stargazing experience. The Stone Villa includes a telescope for private astronomy sessions.
                      </p>
                      <p className="text-gray-300 text-lg leading-loose mb-8">
                        From the Milky Way arching overhead to the Southern Cross guiding the way, the night sky at Miwesu is a spectacle that rivals any daytime safari. Private astronomy sessions can be arranged, perfect for couples or families seeking a unique experience.
                      </p>
                      <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                        <Star className="w-5 h-5" />
                        <span>Private Astronomy Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Birding Section */}
              <div className="reveal delay-300">
                <div className="text-center mb-12">
                  <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                    Birding
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    A Birder's Paradise
                  </h3>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-loose">
                    The Makoppa district is a transition zone between the moist Bushveld and the arid Kalahari, resulting in a unique overlap of bird species. Neighboring farms record over 140 to 200 species.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-6">Key Species</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-serif text-white mb-1">Raptors</h5>
                          <p className="text-gray-400 text-sm">Fish Eagles, Martial Eagles, and Snake Eagles along river tributaries.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-serif text-white mb-1">Kalahari Specials</h5>
                          <p className="text-gray-400 text-sm">Crimson-breasted Shrike and Swallow-tailed Bee-eater.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Bird className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-serif text-white mb-1">Bushveld Icons</h5>
                          <p className="text-gray-400 text-sm">Hornbills (Yellow-billed and Red-billed), Kingfishers, and Rollers.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/birding-main.jpg"
                      alt="Birding in the Makoppa district"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>

              {/* 4x4 Trails Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-400">
                <div className="relative h-[500px]">
                  <Image
                    src="/images/4x4-trails-main.jpg"
                    alt="4x4 tracks through the Makoppa district"
                    fill
                    className="object-cover shadow-luxury"
                  />
                </div>
                <div>
                  <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    4x4 Trails
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    Explore the Terrain
                  </h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    The granite terrain and bush of the Makoppa district create an extensive network of 4x4 tracks perfect for exploration. Navigate through the Leadwood forests, across the Sweetveld plains, and up to the granite koppies for panoramic views.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose mb-8">
                    These tracks are ideal for self-guided game viewing, allowing you to explore at your own pace. High-clearance vehicles are recommended, especially during the summer rainy season when the tracks can become challenging.
                  </p>
                  <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                    <Car className="w-5 h-5" />
                    <span>Self-Guided Exploration</span>
                  </div>
                </div>
              </div>

              {/* Walking Safaris & Nature Walks */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-500">
                <div>
                  <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                    Walking Safaris
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    On Foot Through the Bushveld
                  </h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    Guided walking safaris offer an intimate connection with the Makoppa ecosystem. Track animals on foot, learn about the flora and fauna from expert guides, and experience the bushveld at ground level.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose mb-8">
                    Perfect for families with children, these nature walks are designed to be educational and safe. Learn about the ancient Leadwood trees, identify animal tracks, and discover the smaller creatures that call the Makoppa home.
                  </p>
                  <div className="flex items-center gap-4 text-gold-400 font-sans text-sm uppercase tracking-widest">
                    <Footprints className="w-5 h-5" />
                    <span>Family-Friendly Guided Walks</span>
                  </div>
                </div>
                <div className="relative h-[500px]">
                  <Image
                    src="/images/walking-safari-main.jpg"
                    alt="Walking safari in the Makoppa district"
                    fill
                      className="object-cover shadow-luxury"
                  />
                </div>
              </div>

              {/* Vita-Darting & Mobile Wellness */}
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="bg-onyx-light border border-white/5 p-10 reveal delay-600">
                  <Activity className="w-12 h-12 text-gold-500 mb-6" />
                  <h3 className="font-serif text-3xl text-white mb-4">Vita-Darting</h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    Participate in a non-lethal "Green Hunt." Assist our veterinary team with DNA collection, micro-chipping, and health monitoring of the reserve's wildlife. This hands-on conservation experience is perfect for those who want to contribute directly to wildlife management.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose">
                    Work alongside professionals to ensure the health and genetic diversity of the herd. This is conservation in action, and you're part of it.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-10 reveal delay-700">
                  <Heart className="w-12 h-12 text-gold-500 mb-6" />
                  <h3 className="font-serif text-3xl text-white mb-4">Mobile Wellness</h3>
                  <p className="text-gray-300 text-lg leading-loose mb-6">
                    In-villa spa treatments using indigenous Marula oils. Relaxation without leaving your sanctuary. After a day in the bush, unwind with a massage or spa treatment in the comfort of your residence.
                  </p>
                  <p className="text-gray-300 text-lg leading-loose">
                    Our mobile wellness service brings the spa to you, using locally sourced ingredients and traditional techniques to help you fully relax and rejuvenate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-marble-dark">
          <div className="max-w-7xl mx-auto px-6 text-center reveal">
            <Mountain className="w-16 h-16 text-gold-500 mx-auto mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
              Custom Experiences
            </h2>
            <p className="font-sans text-gray-600 text-lg leading-loose mb-10">
              Every stay at Miwesu can be tailored to your preferences. Our concierge team will work with you to create a bespoke itinerary that matches your interests—whether you're a hunter, photographer, birder, or simply seeking tranquility in the Makoppa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-4 bg-onyx text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all"
              >
                Plan Your Visit <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/rates"
                className="inline-flex items-center px-10 py-4 border-2 border-onyx text-onyx uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all"
              >
                View Rates <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

