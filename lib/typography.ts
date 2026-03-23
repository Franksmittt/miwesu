/**
 * MIWESU global typography utilities — classes defined in `app/globals.css` @layer components.
 * Prefer `className="type-h2-section mb-6"` over ad-hoc font-size stacks for consistency with home/about.
 */
export const typo = {
  eyebrow: 'type-eyebrow',
  eyebrowDark: 'type-eyebrow-dark',
  eyebrowHero: 'type-eyebrow-hero',
  overline: 'type-overline',
  h1Hero: 'type-h1-hero',
  h2Section: 'type-h2-section',
  h2SectionDark: 'type-h2-section-dark',
  h2Home: 'type-h2-home',
  h2HomeSub: 'type-h2-home-sub',
  h2HeroSection: 'type-h2-hero-section',
  h2MarbleLg: 'type-h2-marble-lg',
  h3: 'type-h3',
  h3Dark: 'type-h3-dark',
  lead: 'type-lead',
  leadDark: 'type-lead-dark',
  leadOnyx: 'type-lead-onyx',
  body: 'type-body',
  bodyDark: 'type-body-dark',
  bodySm: 'type-body-sm',
  caption: 'type-caption',
  speciesLatin: 'type-species-latin',
} as const

export type TypoKey = keyof typeof typo
