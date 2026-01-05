'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import {
  ChefHat,
  Wifi,
  Flame,
  Shield,
  Sun,
  Wind,
  Star,
  Coffee,
  Bed,
  Users,
  ArrowRight,
  Home,
  Droplets,
  Car,
  UtensilsCrossed,
  Snowflake,
  Eye,
  MapPin,
} from 'lucide-react'

export default function ResidencesPage() {
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
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/residences-hero.jpg"
              alt="Residences"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              The Collection
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Private <span className="text-gradient-gold">Residences</span>
            </h1>
          </div>
        </section>

        {/* Residences Grid */}
        <section className="py-32 bg-onyx text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20 reveal">
              <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold">
                Exclusive Use
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-white mt-6">
                Your Private Sanctuary
              </h2>
              <div className="h-1 w-20 bg-gold-gradient mx-auto mt-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Residence 1: The Homestead */}
              <div className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal">
                <div className="h-96 overflow-hidden relative">
                  <Image
                    src="/images/residences-homestead-main.jpg"
                    alt="The Homestead"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-gold-500 text-onyx w-16 h-16 flex items-center justify-center font-serif text-2xl font-bold shadow-gold-glow">
                    I
                  </div>
                </div>
                <div className="p-10 relative">
                  <h3 className="font-serif text-3xl text-white mb-4">The Homestead</h3>
                  <p className="text-gray-400 text-base font-sans leading-relaxed mb-6">
                    The pinnacle of exclusive use. A 10-sleeper manor offering absolute autonomy in the heart of the reserve.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm uppercase tracking-widest text-gold-400">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-2" /> 10 Guests
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" /> 5 Bedrooms
                    </span>
                    <span className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-2" /> Chef's Kitchen
                    </span>
                    <span className="flex items-center">
                      <Wifi className="w-4 h-4 mr-2" /> Fiber Optic
                    </span>
                    <span className="flex items-center">
                      <Flame className="w-4 h-4 mr-2" /> Private Boma
                    </span>
                    <span className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" /> Secure
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Inquire <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              {/* Residence 2: The Stone Villa */}
              <div className="group relative bg-onyx-light border border-white/5 hover:border-gold-500/50 transition-all duration-500 overflow-hidden reveal delay-100">
                <div className="h-96 overflow-hidden relative">
                  <Image
                    src="/images/residences-stone-villa-main.jpg"
                    alt="The Stone Villa"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent"></div>
                  <div className="absolute top-6 right-6 bg-white text-onyx w-16 h-16 flex items-center justify-center font-serif text-2xl font-bold">
                    II
                  </div>
                </div>
                <div className="p-10 relative">
                  <h3 className="font-serif text-3xl text-white mb-4">The Stone Villa</h3>
                  <p className="text-gray-400 text-base font-sans leading-relaxed mb-6">
                    Carved into the ridge. An intimate 4-sleeper sanctuary with panoramic views of the Makoppa district.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm uppercase tracking-widest text-gold-400">
                    <span className="flex items-center">
                      <Bed className="w-4 h-4 mr-2" /> 4 Guests
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" /> 2 Bedrooms
                    </span>
                    <span className="flex items-center">
                      <Sun className="w-4 h-4 mr-2" /> Plunge Pool
                    </span>
                    <span className="flex items-center">
                      <Wind className="w-4 h-4 mr-2" /> Deck
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-2" /> Telescope
                    </span>
                    <span className="flex items-center">
                      <Coffee className="w-4 h-4 mr-2" /> Nespresso
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-onyx transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Inquire <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Detailed Residence Sections */}
            <div className="space-y-20 mb-20">
              {/* The Homestead - Detailed */}
              <div className="reveal">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div>
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      The Homestead
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      The Pinnacle of Exclusive Use
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      A 10-sleeper manor offering absolute autonomy in the heart of the reserve. The Homestead is designed for those who demand uncompromising luxury and complete privacy. Every detail has been considered, from the industrial-grade kitchen to the private boma where stories are shared under the African stars.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      With five spacious bedrooms, each with en-suite facilities, The Homestead accommodates large families or groups seeking the ultimate bushveld experience. The property features its own secure perimeter, ensuring children can play safely while adults enjoy the tranquility of the reserve.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">10</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Sleepers</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">5</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Bedrooms</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[500px]">
                    <Image
                      src="/images/residences-homestead-main.jpg"
                      alt="The Homestead - luxury accommodation"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
                
                {/* Homestead Gallery */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-homestead-kitchen.jpg"
                      alt="The Homestead kitchen with industrial appliances"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-homestead-living.jpg"
                      alt="The Homestead living area"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-homestead-boma.jpg"
                      alt="The Homestead private boma and fire pit"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>

              {/* The Stone Villa - Detailed */}
              <div className="reveal delay-100">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="relative h-[500px] order-2 md:order-1">
                    <Image
                      src="/images/residences-stone-villa-main.jpg"
                      alt="The Stone Villa carved into the ridge"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                      The Stone Villa
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                      Carved Into the Ridge
                    </h3>
                    <p className="text-gray-300 text-lg leading-loose mb-6">
                      An intimate 4-sleeper sanctuary with panoramic views of the Makoppa district. The Stone Villa is carved into the granite ridge, offering a unique architectural experience that blends seamlessly with the ancient landscape.
                    </p>
                    <p className="text-gray-300 text-lg leading-loose mb-8">
                      Perfect for couples or small families, this intimate residence features two en-suite bedrooms, a plunge pool with views over the bushveld, and a private deck ideal for stargazing. The telescope provided allows you to explore the famously dark skies of the Thabazimbi region.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">4</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Sleepers</span>
                      </div>
                      <div className="border-l-2 border-gold-500 pl-4">
                        <span className="block font-serif text-2xl text-gold-400 mb-1">2</span>
                        <span className="text-xs uppercase tracking-widest text-gray-400">Bedrooms</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stone Villa Gallery */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-stone-villa-pool.jpg"
                      alt="The Stone Villa plunge pool with bushveld views"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-stone-villa-bedroom.jpg"
                      alt="The Stone Villa bedroom with panoramic views"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <Image
                      src="/images/residences-stone-villa-deck.jpg"
                      alt="The Stone Villa deck for stargazing"
                      fill
                      className="object-cover shadow-luxury"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities & Facilities */}
            <div className="mb-20 reveal delay-200">
              <div className="text-center mb-12">
                <span className="text-gold-500 text-xs tracking-[0.4em] uppercase font-bold mb-4 block">
                  Bespoke Living
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Every Detail Curated
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-loose">
                  We have reimagined the self-catering model. Expect industrial Smeg appliances, Le Creuset cookware, and daily housekeeping that operates invisibly.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <ChefHat className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">Chef's Kitchen</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Industrial Smeg appliances, Le Creuset cookware, and everything needed for gourmet self-catering.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <Droplets className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">Swimming Pool</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Essential in the 40°C Thabazimbi summer. Perfect for cooling off after a day in the bush.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <Flame className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">Private Boma</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fire pit and outdoor dining area. The heart of the African bushveld experience.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <Snowflake className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">Cold Room</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Professional meat storage facility for your harvest. Essential for summer preservation.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <UtensilsCrossed className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">Slaughter Room</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fully equipped facility for processing your harvest. Professional standards maintained.
                  </p>
                </div>
                <div className="bg-onyx-light border border-white/5 p-8 text-center">
                  <Wifi className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                  <h4 className="font-serif text-xl text-white mb-3">WiFi (Lodge Only)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Solar-powered internet connectivity. Available at The Homestead for essential communications.
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Housekeeping */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal delay-300">
              <div className="relative h-[500px]">
                <Image
                  src="/images/residences-housekeeping.jpg"
                  alt="Daily housekeeping service at Miwesu"
                  fill
                  className="object-cover shadow-luxury"
                />
              </div>
              <div>
                <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
                  Invisible Service
                </span>
                <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                  Daily Housekeeping
                </h3>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Our housekeeping operates invisibly, ensuring your residence remains pristine without intrusion. Beds are made, dishes cleaned, and spaces refreshed while you're out exploring the reserve or tracking game.
                </p>
                <p className="text-gray-300 text-lg leading-loose">
                  We understand that privacy is paramount. Our team respects your space and operates on a schedule that works around your activities, ensuring you can focus on what matters: the experience.
                </p>
              </div>
            </div>

            {/* Location & Access */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 mb-20 reveal delay-400">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <MapPin className="w-8 h-8 text-gold-500" />
                  <h3 className="font-serif text-3xl md:text-4xl text-white">
                    Location & Access
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-loose mb-6">
                  Both residences are located within the secure boundaries of MIWESU GAME FARM, approximately 40 kilometers from Thabazimbi town on the D1432 district road. The journey itself is part of the experience—a transition from the modern world into the heart of the Makoppa district.
                </p>
                <p className="text-gray-300 text-lg leading-loose mb-8">
                  <span className="text-gold-400 font-medium">Vehicle Requirements:</span> High-clearance vehicles are recommended, especially during the summer rainy season (October–March). The D1432 is a gravel road that can become challenging after heavy rains.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-white mb-2">4x4 Tracks</h4>
                      <p className="text-gray-400 text-sm">
                        Extensive network of farm tracks for game viewing and exploration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-serif text-white mb-2">Secure Perimeter</h4>
                      <p className="text-gray-400 text-sm">
                        Electric fencing and secure boundaries ensure safety for families.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gold-500 p-12 md:p-20 reveal delay-500">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-6">
                  Experience Absolute Privacy
                </h2>
                <p className="text-onyx/90 font-sans text-lg leading-loose mb-8">
                  Both residences offer exclusive use, ensuring complete privacy and autonomy during your stay. Whether you're planning a family hunting safari or a corporate retreat, we provide the perfect base for your Makoppa adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-onyx text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-onyx transition-all"
                  >
                    Request Availability
                  </Link>
                  <Link
                    href="/rates"
                    className="inline-block border-2 border-onyx text-onyx px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all"
                  >
                    View Rates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

