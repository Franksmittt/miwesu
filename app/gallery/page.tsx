import Image from 'next/image'
import Layout from '@/components/Layout'
import AuthenticGallery from '@/components/AuthenticGallery'
import { getFacebookFolderGalleryEntries } from '@/lib/server/facebook-folder'

const FALLBACK_HERO = '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg'

export default async function GalleryPage() {
  const items = await getFacebookFolderGalleryEntries()
  const heroSrc = items[0]?.src ?? FALLBACK_HERO

  return (
    <Layout>
      <main id="main-content" className="min-h-screen bg-onyx">
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh]">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroSrc}
              alt="MIWESU Game Farm — gallery hero from our Facebook archive, Makoppa district"
              fill
              sizes="100vw"
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
          </div>
          <div className="relative z-10 px-4 text-center sm:px-6">
            <span className="type-eyebrow-hero mb-4 block sm:mb-6">Visual journey</span>
            <h1 className="type-h1-hero mb-4 px-4 sm:mb-6">
              The <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="mx-auto max-w-xl font-sans text-sm text-gray-300/90 sm:text-base">
              Real moments from the farm: photos pulled from our{' '}
              <span className="text-gold-500/90">Facebook</span> archive in{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-white/80">images/Facebook</code>
            </p>
          </div>
        </section>

        <section className="border-b border-white/5 bg-onyx px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-base leading-relaxed text-gray-400 sm:text-lg">
              Golden-hour savanna, lodge life, and the species of the Makoppa — every frame here lives on the property. Click
              any image for a larger view.
            </p>
            {items.length > 0 ? (
              <p className="type-overline mt-6 text-gray-500">{items.length} photos</p>
            ) : null}
          </div>
        </section>

        <AuthenticGallery items={items} compact />
      </main>
    </Layout>
  )
}
