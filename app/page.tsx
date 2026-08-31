import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'This website is no longer available',
  description: 'This website is no longer available.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: 'This website is no longer available',
    description: 'This website is no longer available.',
  },
  twitter: {
    title: 'This website is no longer available',
    description: 'This website is no longer available.',
  },
}

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="flex min-h-svh items-center justify-center bg-onyx px-8 py-16"
    >
      <section className="mx-auto max-w-xl text-center">
        <h1 className="font-serif font-normal tracking-[0.06em] text-white text-[clamp(1.75rem,1.25rem+2vw,2.5rem)] leading-tight">
          This website is no longer available
        </h1>
        <p className="mt-8 font-sans text-base leading-8 text-white/70">
          Thank you for visiting.
        </p>
      </section>
    </main>
  )
}
