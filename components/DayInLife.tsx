'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ONE_UI_EASE = [0.22, 0.25, 0, 1] as const

const moments = [
  {
    time: '06:00',
    label: 'Dawn',
    title: 'Sunrise over the koppies',
    image: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
    description: 'First light on the Makoppa. Silence. Coffee on the patio.',
    imageClassName: 'object-cover object-center',
  },
  {
    time: '10:00',
    label: 'Morning',
    title: 'Safari or trampoline',
    image: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg',
    description: 'Game drive or family play by the pool.',
    imageClassName: 'object-cover object-center',
  },
  {
    time: '15:00',
    label: 'Afternoon',
    title: 'Pool and lawn',
    image: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg',
    description: 'Swim, slide, thatched shade. The Oasis.',
    imageClassName: 'object-cover object-center',
  },
  {
    time: '19:00',
    label: 'Golden hour',
    title: 'Boma braai',
    image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    description: 'Fire under the trees. Waterhole in the distance.',
    /** Wider shots: anchor on lower third so boma, fire & waterhole stay in frame */
    imageClassName:
      'object-cover object-[center_58%] sm:object-[center_55%] md:object-[center_52%]',
  },
  {
    time: '22:00',
    label: 'Night',
    title: 'Starry skies',
    image: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_77108.jpg',
    description: 'Quiet on the deck or patio under the Milky Way. Iron Eden at rest.',
    /** Night / dusk: bias upward so sky & horizon read; avoids chopping the glow */
    imageClassName:
      'object-cover object-[center_35%] sm:object-[center_38%] md:object-[center_40%]',
  },
]

export default function DayInLife() {
  return (
    <section className="relative bg-onyx text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: ONE_UI_EASE }}
        >
          <span className="text-gold-500 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-bold block mb-4 font-sans">
            A Day in Eden
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            From dawn to <span className="text-gradient-gold">starlight</span>
          </h2>
          <p className="font-sans text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base tracking-wide">
            One day. Five moments.
            <br />
            Hunters, families, couples: everyone finds their rhythm.
          </p>
        </motion.div>

        {/* Alternating rows: image | text, then text | image */}
        <div className="space-y-8 sm:space-y-12">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.time}
              className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: ONE_UI_EASE, delay: index * 0.05 }}
            >
              {/* Image column */}
              <div
                className={`relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[5/3] md:min-h-0 md:w-[calc(50%-1rem)] overflow-hidden squircle ${
                  index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={moment.imageClassName}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent md:from-transparent" />
              </div>

              {/* Text column */}
              <div
                className={`flex flex-col justify-center md:w-[calc(50%-1rem)] ${
                  index % 2 === 1 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <div className="squircle p-6 sm:p-8 bg-onyx-light/90 backdrop-blur-sm border border-white/5">
                  <span className="text-gold-500 font-serif text-xl sm:text-2xl tracking-tight block mb-1">
                    {moment.time}
                  </span>
                  <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans block mb-2">
                    {moment.label}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-tight mb-3">
                    {moment.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed tracking-wide">
                    {moment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: ONE_UI_EASE }}
        >
          <Link
            href="/book"
            className="squircle inline-block px-8 py-3.5 bg-gold-500 text-onyx font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold-400 transition-colors duration-300 ease-one-ui"
          >
            Book Your Stay
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
