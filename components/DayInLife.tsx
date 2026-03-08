'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const moments = [
  {
    time: '06:00',
    label: 'Dawn',
    title: 'Sunrise over the koppies',
    image: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
    description: 'First light on the Makoppa. Silence. Coffee on the patio.',
  },
  {
    time: '10:00',
    label: 'Morning',
    title: 'Safari or trampoline',
    image: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg',
    description: 'Game drive or family play by the pool.',
  },
  {
    time: '15:00',
    label: 'Afternoon',
    title: 'Pool and lawn',
    image: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg',
    description: 'Swim, slide, thatched shade. The Oasis.',
  },
  {
    time: '19:00',
    label: 'Golden hour',
    title: 'Boma braai',
    image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    description: 'Fire under the trees. Waterhole in the distance.',
  },
  {
    time: '22:00',
    label: 'Night',
    title: 'Starry skies',
    image: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_77108.jpg',
    description: 'Celestial safari or quiet on the patio. Iron Eden at rest.',
  },
]

export default function DayInLife() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-onyx text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold block mb-4">
            A Day in Eden
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white">
            From dawn to <span className="text-gradient-gold">starlight</span>
          </h2>
          <p className="font-sans text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            One day. Five moments. Hunters, families, couples — everyone finds their rhythm.
          </p>
        </motion.div>

        <div className="space-y-0">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.time}
              className="grid md:grid-cols-2 gap-0 min-h-[50vh] md:min-h-[60vh] border-b border-white/5 last:border-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`relative h-64 md:h-full min-h-[280px] ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
              >
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-transparent to-transparent md:bg-none md:from-transparent" />
              </div>
              <div
                className={`flex flex-col justify-center p-8 sm:p-10 lg:p-14 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}
              >
                <span className="text-gold-500 font-serif text-2xl sm:text-3xl mb-2">{moment.time}</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest mb-3">{moment.label}</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">{moment.title}</h3>
                <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">{moment.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/book"
            className="inline-block px-10 py-4 bg-gold-500 text-onyx font-sans text-xs uppercase tracking-widest font-bold hover:bg-gold-400 transition-colors"
          >
            Book your day
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
