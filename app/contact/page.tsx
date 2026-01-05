'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { MapPin, Phone, Mail, Send, Clock, Car, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intent: '',
    message: '',
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will contact you shortly.')
  }

  return (
    <Layout>
      <main className="min-h-screen bg-marble">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-onyx">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent"></div>
          </div>
          <div className="relative z-20 text-center px-4">
            <span className="text-gold-400 text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6 block">
              Get In Touch
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-marble">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="reveal">
                <h2 className="font-serif text-4xl md:text-5xl text-onyx mb-8">
                  Concierge Services
                </h2>
                <p className="font-sans text-gray-600 text-lg leading-loose mb-12">
                  Our concierge team is available to assist with all inquiries, bookings, and special requests. We vet all prospective guests to maintain our conservation standards and privacy. Located on the D1432 district road in the Makoppa district, approximately 40 kilometers from Thabazimbi. High-clearance vehicles recommended, especially during the summer rainy season (October–March).
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-onyx mb-2">Location</h3>
                      <p className="font-sans text-gray-600">
                        D1432 Road, Makoppa District<br />
                        Thabazimbi, Limpopo 0380<br />
                        South Africa
                      </p>
                      <p className="font-sans text-gray-500 text-sm mt-2">
                        Approximately 40km from Thabazimbi town<br />
                        GPS: -24.4523956, 27.0450853
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-onyx mb-2">Email</h3>
                      <a
                        href="mailto:guardians@miwesu.com"
                        className="font-sans text-gray-600 hover:text-gold-500 transition-colors"
                      >
                        guardians@miwesu.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-xl text-onyx mb-2">Phone</h3>
                      <a
                        href="tel:+27730309679"
                        className="font-sans text-gray-600 hover:text-gold-500 transition-colors"
                      >
                        +27 73 030 9679
                      </a>
                      <p className="font-sans text-gray-500 text-sm mt-1">
                        24/7 Access
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="reveal delay-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                      Primary Intent
                    </label>
                    <select
                      value={formData.intent}
                      onChange={(e) =>
                        setFormData({ ...formData, intent: e.target.value })
                      }
                      className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 focus:ring-0 outline-none font-serif"
                      required
                    >
                      <option value="">Select an option</option>
                      <option>Ethical Hunting (Meat/Trophy)</option>
                      <option>Conservation Experience (Green Hunt)</option>
                      <option>Observer / Photographic Retreat</option>
                      <option>Corporate / Syndicate Inquiry</option>
                      <option>Accommodation Only</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase text-gold-600 tracking-widest font-bold mb-3">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full bg-gray-50 border-0 border-b border-gray-200 text-onyx p-4 focus:border-gold-500 outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      className="mt-1 border-gray-300 rounded text-gold-500 focus:ring-gold-500 h-5 w-5"
                      required
                    />
                    <p className="text-xs text-gray-400 leading-normal font-sans">
                      I agree to the "Guardian's Pledge" and understand that noisy
                      behavior or disrespect for wildlife will result in immediate
                      eviction.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-onyx text-white py-5 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors shadow-luxury flex items-center justify-center"
                  >
                    Submit Inquiry <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-20 grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 border border-gray-100 reveal delay-200">
                <Clock className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-3">Response Time</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  Our concierge team typically responds within 24-48 hours. For urgent inquiries, please call directly.
                </p>
              </div>
              <div className="bg-white p-8 border border-gray-100 reveal delay-300">
                <Car className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-3">Transportation</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  We can arrange airport transfers from OR Tambo International Airport (approximately 2.5 hours). High-clearance vehicles recommended for the D1432.
                </p>
              </div>
              <div className="bg-white p-8 border border-gray-100 reveal delay-400">
                <MapPin className="w-10 h-10 text-gold-500 mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-3">Location</h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  D1432 Road, Makoppa District. Approximately 40km from Thabazimbi town. GPS: -24.4523956, 27.0450853
                </p>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-20 reveal delay-500">
              <h2 className="font-serif text-3xl md:text-4xl text-onyx mb-8 text-center">
                Find Us
              </h2>
              <div className="bg-gray-100 h-96 rounded-lg overflow-hidden mb-8">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.0450853!3d-24.4523956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzA4LjYiUyAyN8KwMDInNDIuMyJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Miwesu Game Farm Location"
                ></iframe>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 border border-gray-100">
                  <h3 className="font-serif text-xl text-onyx mb-4">Directions from Thabazimbi</h3>
                  <ol className="font-sans text-gray-600 text-sm space-y-2 list-decimal list-inside leading-relaxed">
                    <li>From Thabazimbi town center, head northwest on the D1432 district road</li>
                    <li>Continue for approximately 40 kilometers</li>
                    <li>The farm gate will be clearly marked with MIWESU signage</li>
                    <li>GPS coordinates: -24.4523956, 27.0450853</li>
                  </ol>
                </div>
                <div className="bg-white p-8 border border-gray-100">
                  <h3 className="font-serif text-xl text-onyx mb-4">Important Notes</h3>
                  <ul className="font-sans text-gray-600 text-sm space-y-2 list-disc list-inside leading-relaxed">
                    <li>The D1432 is a district gravel road—high-clearance vehicles recommended</li>
                    <li>Road conditions can be challenging during summer rainy season (October–March)</li>
                    <li>Stock up on supplies in Thabazimbi before departure</li>
                    <li>Allow approximately 45 minutes travel time from Thabazimbi</li>
                    <li>Nearest major airport: OR Tambo International (2.5 hours drive)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-12 md:p-16 text-center reveal delay-600">
              <h2 className="font-serif text-3xl md:text-4xl text-onyx mb-6">
                Ready to Experience Miwesu?
              </h2>
              <p className="font-sans text-gray-600 text-lg leading-loose mb-8 max-w-2xl mx-auto">
                Submit your inquiry and our concierge team will guide you through the vetting process and help plan your perfect Makoppa experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rates"
                  className="inline-flex items-center px-10 py-4 bg-onyx text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all"
                >
                  View Rates <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-10 py-4 border-2 border-onyx text-onyx uppercase tracking-widest text-xs font-bold hover:bg-onyx hover:text-white transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

