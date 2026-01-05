'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { ChevronDown, ChevronUp, Shield, MapPin, Users, Calendar, ArrowRight } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the vetting process?',
      answer:
        'Miwesu is a private sanctuary that maintains strict conservation standards and privacy. All prospective guests are vetted to ensure they understand and respect our conservation philosophy, the Guardian\'s Pledge, and our commitment to ethical practices. This process helps us maintain the integrity of the reserve and ensure all guests have a meaningful experience.',
    },
    {
      question: 'What is included in the accommodation rate?',
      answer:
        'Accommodation rates include exclusive use of the residence, daily housekeeping, all utilities, fiber optic internet, and access to the reserve. Meals, activities, and conservation harvest fees are additional. Our concierge team can provide detailed breakdowns upon inquiry.',
    },
    {
      question: 'How does the conservation harvest work?',
      answer:
        'We manage an ecosystem, not a hunting operation. Species availability is determined by our annual ecological census to ensure sustainable population management. All harvests follow strict ethical guidelines, and 100% of the meat is donated to local communities. Trophy fees vary by species and are detailed in our Investment Guide.',
    },
    {
      question: 'What activities are available for non-hunters?',
      answer:
        'We offer photographic safaris, guided game drives, walking safaris, celestial safaris (astronomy), mobile wellness treatments, and vita-darting (non-lethal conservation activities). The reserve is perfect for observers, photographers, and those seeking a luxury wilderness experience.',
    },
    {
      question: 'Is Miwesu malaria-free?',
      answer:
        'Yes, the Waterberg region is malaria-free, making it safe for all visitors without the need for malaria prophylaxis.',
    },
    {
      question: 'What is the minimum stay?',
      answer:
        'Minimum stay requirements vary by season and residence. Generally, we recommend a minimum of 3 nights to fully experience the reserve. During peak seasons, longer minimum stays may apply. Contact our concierge for specific requirements.',
    },
    {
      question: 'How do I get to Miwesu?',
      answer:
        'MIWESU GAME FARM is located on D1432 Road, Makoppa District, Thabazimbi, Limpopo 0380, South Africa. Approximately 40 kilometers from Thabazimbi town. The nearest major airport is OR Tambo International Airport in Johannesburg (approximately 2.5 hours drive). GPS coordinates: -24.4523956, 27.0450853. High-clearance vehicles recommended for the D1432 district road, especially during the summer rainy season.',
    },
    {
      question: 'What is the Guardian\'s Pledge?',
      answer:
        'The Guardian\'s Pledge is our code of conduct that all guests must acknowledge. It states: "I acknowledge that Miwesu is a sanctuary of silence. I respect the ethics of the fair chase and the peace of the Iron Mountain." Disrespectful behavior or noise that disturbs wildlife will result in immediate eviction.',
    },
    {
      question: 'Can I bring children?',
      answer:
        'Yes, children are welcome at Miwesu. However, all guests, including children, must respect the Guardian\'s Pledge and the quiet, respectful atmosphere of the reserve. We recommend discussing your family\'s needs with our concierge when booking.',
    },
    {
      question: 'What should I pack?',
      answer:
        'We recommend neutral-colored clothing for game viewing, comfortable walking shoes, warm layers for early mornings and evenings, sun protection, and binoculars. For conservation harvest activities, appropriate gear will be discussed during booking. The residences are fully equipped, so you only need personal items.',
    },
  ]

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/faq-hero.jpg"
              alt="FAQ"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              Information
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-marble">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-serif text-xl text-onyx pr-8">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="font-sans text-gray-600 leading-loose">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Information Sections */}
            <div className="mt-20 space-y-16">
              {/* Location Information */}
              <div className="bg-white border border-gray-100 p-10 reveal">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-onyx mb-4">Location & Access</h3>
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

