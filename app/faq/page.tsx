'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { ChevronDown, ChevronUp, Shield, MapPin, Users, Calendar, ArrowRight } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/faq-data'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = FAQ_ITEMS

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/faq-hero.jpg"
              alt="Frequently asked questions about MIWESU Game Farm - Makoppa district, Thabazimbi, Limpopo"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4 sm:px-6">
            <span className="text-gold-400 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-bold mb-4 sm:mb-6 block">
              Information
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 leading-none px-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-32 bg-marble">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 overflow-hidden"
                >
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset"
                  >
                    <h3 className="font-serif text-lg sm:text-xl text-onyx pr-4 sm:pr-8">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-gold-500 flex-shrink-0" aria-hidden />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gold-500 flex-shrink-0" aria-hidden />
                    )}
                  </button>
                  {openIndex === index && (
                    <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} className="px-4 sm:px-8 pb-4 sm:pb-6">
                      <p className="font-sans text-gray-600 leading-loose text-sm sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Information Sections */}
            <div className="mt-12 sm:mt-20 space-y-8 sm:space-y-16">
              {/* Location Information */}
              <div className="bg-white border border-gray-100 p-6 sm:p-10 reveal">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-onyx mb-3 sm:mb-4">Location & Access</h3>
                    <p className="font-sans text-gray-600 leading-loose mb-4">
                      MIWESU GAME FARM is located on D1432 Road, Makoppa District, Thabazimbi, Limpopo 0380, South Africa. Approximately 40 kilometers from Thabazimbi town on a district gravel road.
                    </p>
                    <p className="font-sans text-gray-600 leading-loose mb-4">
                      <strong>GPS Coordinates:</strong> -24.4523956, 27.0450853
                    </p>
                    <p className="font-sans text-gray-600 leading-loose">
                      <strong>Vehicle Requirements:</strong> High-clearance vehicles are recommended, especially during the summer rainy season (October–March). The D1432 can become challenging after heavy rains. Stock up on supplies in Thabazimbi before departure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vetting Process */}
              <div className="bg-white border border-gray-100 p-10 reveal delay-100">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-onyx mb-4">The Vetting Process</h3>
                    <p className="font-sans text-gray-600 leading-loose mb-4">
                      MIWESU GAME FARM is a private sanctuary that maintains strict conservation standards and privacy. All prospective guests are vetted to ensure they understand and respect our conservation philosophy, the Guardian's Pledge, and our commitment to ethical practices.
                    </p>
                    <p className="font-sans text-gray-600 leading-loose">
                      This process helps us maintain the integrity of the reserve and ensure all guests have a meaningful experience. We take the time to understand your expectations and ensure Miwesu is the right fit for your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white border border-gray-100 p-10 reveal delay-200">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="w-8 h-8 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-onyx mb-4">What's Included</h3>
                    <p className="font-sans text-gray-600 leading-loose mb-4">
                      Accommodation rates include exclusive use of the residence, daily housekeeping, all utilities, fiber optic internet (at The Homestead), and full access to the reserve for game viewing and exploration.
                    </p>
                    <p className="font-sans text-gray-600 leading-loose mb-4">
                      <strong>Not Included:</strong> Meals (self-catering), activities, conservation harvest fees, alcoholic beverages, and transportation to/from the reserve.
                    </p>
                    <p className="font-sans text-gray-600 leading-loose">
                      Our concierge team can arrange meal preparation services, guided activities, and transportation upon request. All additional services are quoted separately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="bg-white border border-gray-100 p-10 reveal delay-300">
                <div className="flex items-start gap-4 mb-6">
                  <Calendar className="w-8 h-8 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-onyx mb-4">Best Time to Visit</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-serif text-lg text-onyx mb-2">Hunting Season (April–August)</h4>
                        <p className="font-sans text-gray-600 leading-relaxed">
                          Mild days (20°C–25°C), cold nights (5°C), dry vegetation. Prime hunting conditions with excellent game visibility. Perfect for conservation harvest activities.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-onyx mb-2">Green Season (November–March)</h4>
                        <p className="font-sans text-gray-600 leading-relaxed">
                          Hot (30°C–40°C), summer rainfall, lush vegetation. Birder's paradise, baby season (lambing), and excellent for photographic safaris. Swimming pool essential.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-onyx mb-2">Dry Heat (September–October)</h4>
                        <p className="font-sans text-gray-600 leading-relaxed">
                          Very hot, dry, dusty. Waterhole action as animals congregate. Excellent predator sightings and game viewing at water sources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-20 bg-onyx text-white p-12 md:p-16 text-center reveal delay-400">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Still Have Questions?</h2>
              <p className="font-sans text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Our concierge team is here to help. Contact us for any additional information, detailed quotes, or to discuss your specific needs and preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-10 py-4 bg-gold-500 text-onyx uppercase tracking-widest text-xs font-bold hover:bg-white transition-all"
                >
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/rates"
                  className="inline-flex items-center px-10 py-4 border-2 border-gold-500 text-gold-500 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 hover:text-onyx transition-all"
                >
                  View Rates <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

