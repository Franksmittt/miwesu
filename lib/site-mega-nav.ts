/**
 * Desktop mega menu + mobile sitemap, single source for MIWESU global navigation.
 */

export type MegaNavLink = {
  label: string
  href: string
  description?: string
}

export type MegaNavColumn = {
  heading: string
  links: MegaNavLink[]
}

export type MegaNavCategory = {
  id: string
  label: string
  href: string
  imageSrc: string
  imageAlt: string
  columns: MegaNavColumn[]
}

export const MEGA_NAV_CATEGORIES: MegaNavCategory[] = [
  {
    id: 'residences', label: 'The Residences', href: '/residences', imageSrc: '/images/residences-homestead-main.jpg', imageAlt: 'MIWESU Homestead, exclusive-use hunters house in Makoppa bushveld', columns: [
      {
        heading: 'Stay', links: [
          { label: 'Residences overview', href: '/residences' }, { label: 'The Homestead · 16 guests', href: '/residences/homestead' }, { label: 'Stone Villa · Rooibok Kraal', href: '/residences/stone-villa' }, ], }, {
        heading: 'Plan', links: [
          { label: 'Enquire & availability', href: '/book' }, { label: 'Availability calendar', href: '/availability' }, { label: 'Rates & investment', href: '/rates' }, ], }, ], }, {
    id: 'hunt', label: 'The Hunt', href: '/wildlife', imageSrc: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', imageAlt: 'Plains game and conservation harvest at MIWESU', columns: [
      {
        heading: 'Portfolio', links: [
          { label: '14+ Species hub', href: '/wildlife' }, { label: 'Compare species', href: '/compare' }, ], }, {
        heading: 'Ethics', links: [
          { label: 'Conservation & Guardian’s Pledge', href: '/conservation' }, { label: 'Trophy export & logistics', href: '/trophy-export' }, ], }, ], }, {
    id: 'experience', label: 'The Experience', href: '/activities', imageSrc: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg', imageAlt: 'Bushveld activities and lodge life at MIWESU', columns: [
      {
        heading: 'On the farm', links: [
          { label: 'Activities', href: '/activities' }, { label: 'Gallery', href: '/gallery' }, { label: 'Partners', href: '/partners' }, ], }, {
        heading: 'Concierge', links: [
          { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }, { label: 'About the land', href: '/about' }, ], }, ], }, {
    id: 'conservation', label: 'Conservation', href: '/conservation', imageSrc: '/images/_filename_Thabazimbi_N_166jpeg_Nano_Banana_Pro_08274.jpg', imageAlt: 'Conservation harvest and land stewardship at MIWESU', columns: [
      {
        heading: 'Stewardship', links: [
          { label: 'Conservation ethos', href: '/conservation' }, { label: 'Hunter’s Journal', href: '/blog' }, ], }, {
        heading: 'Transparency', links: [{ label: 'Engineered heat · firewood', href: '/wood' }], }, ], }, {
    id: 'firewood', label: 'Firewood', href: '/wood', imageSrc: '/images/_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg', imageAlt: 'Kiln-verified thermal hardwood, MIWESU engineered heat', columns: [
      {
        heading: 'Thermal hardware', links: [
          { label: 'Engineered heat · catalogue', href: '/wood' }, { label: 'Biltong yield tool', href: '/tools/biltong-calculator' }, ], }, {
        heading: 'Logistics', links: [{ label: 'SAPS 520 generator', href: '/tools/saps-520' }], }, ], },
]

/** Flat groups for mobile “More” sheet (full sitemap). */
export const MOBILE_SITEMAP_SECTIONS: { title: string; links: MegaNavLink[] }[] = [
  {
    title: 'The Residences', links: [
      { label: 'Overview', href: '/residences' }, { label: 'Homestead', href: '/residences/homestead' }, { label: 'Stone Villa', href: '/residences/stone-villa' }, { label: 'Book / enquire', href: '/book' }, { label: 'Availability', href: '/availability' }, { label: 'Rates', href: '/rates' }, ], }, {
    title: 'The Hunt', links: [
      { label: 'Species hub', href: '/wildlife' }, { label: 'Compare', href: '/compare' }, { label: 'Conservation', href: '/conservation' }, { label: 'Trophy export', href: '/trophy-export' }, ], }, {
    title: 'The Experience', links: [
      { label: 'Activities', href: '/activities' }, { label: 'Gallery', href: '/gallery' }, { label: 'FAQ', href: '/faq' }, { label: 'Contact', href: '/contact' }, { label: 'About', href: '/about' }, { label: 'Partners', href: '/partners' }, ], }, {
    title: 'Tools & trust', links: [
      { label: 'Tools hub', href: '/tools' }, { label: 'Biltong calculator', href: '/tools/biltong-calculator' }, { label: 'SAPS 520', href: '/tools/saps-520' }, ], }, {
    title: 'Firewood', links: [{ label: 'Thermal hardware', href: '/wood' }], },
]

export const WHATSAPP_HREF = 'https://wa.me/27730309679'
