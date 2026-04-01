/**
 * Blog pillar posts for Hunter's Journal. Used by blog index, sitemap, and metadata.
 * Categories: Conservation | Ballistics | Luxury Living | Logistics
 */
export type BlogCategory = 'Conservation' | 'Ballistics' | 'Luxury Living' | 'Logistics'

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  date: string
  /** Optional hero image path (relative to /public) */
  heroImage?: string
}

export const BLOG_CATEGORIES: BlogCategory[] = ['Conservation', 'Ballistics', 'Luxury Living', 'Logistics']

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'saps-520-firearm-permit-us-hunters', title: 'Navigating the SAPS 520 Firearm Permit for US Hunters', excerpt: 'Legal complexities of South African firearm importation, CBP Form 4457, and a step-by-step guide to processing your paperwork efficiently. Thabazimbi, Limpopo.', category: 'Logistics', date: '2026-03-01', heroImage: '/images/residences-homestead-main.jpg', }, {
    slug: '300-win-mag-blue-wildebeest-terminal-performance', title: 'Terminal Performance of the .300 Win Mag on Blue Wildebeest', excerpt: 'Biological overview of Connochaetes taurinus, kinetic energy in the Waterberg brush, and premium bonded bullet comparison. Best caliber for Blue Wildebeest hunting.', category: 'Ballistics', date: '2026-03-02', heroImage: '/images/blue-wildebeest_card.png', }, {
    slug: 'exclusive-16-sleeper-luxury-lodge-thabazimbi', title: 'Exclusive 16-Sleeper Luxury Lodge Escapes in Thabazimbi', excerpt: "Hunter's House: chef's kitchen, Lapa with wet bar, private boma, multi-slide pool. Malaria-free Makoppa Dome. Weekend hunting trips from Alberton to Limpopo.", category: 'Luxury Living', date: '2026-03-03', heroImage: '/images/residences-homestead-main.jpg', }, {
    slug: 'art-of-authentic-south-african-biltong-making', title: 'The Art of Authentic South African Biltong Making', excerpt: 'Cultural heritage, step-by-step processing with brown grape vinegar and roasted coriander, and the 38% conversion rate from wet carcass to dry biltong. Arid Sweet Bushveld.', category: 'Conservation', date: '2026-03-04', heroImage: '/images/residences-main-lodge-boma-braai.jpg', }, {
    slug: 'rowland-ward-trophy-standards-greater-kudu', title: 'Rowland Ward Trophy Standards for the Greater Kudu', excerpt: 'The Grey Ghost, measurement methodology, and why the Ancient Penge Formation contributes to 53 7/8" minimums. Trophy Kudu hunting South Africa 2026.', category: 'Ballistics', date: '2026-03-05', heroImage: '/images/greater-kudu_card.png', }, {
    slug: 'ethical-shot-placement-cape-buffalo-fused-boss', title: 'Ethical Shot Placement for Cape Buffalo with a Fused Boss', excerpt: 'Anatomical breakdown of Syncerus caffer, .375 H&H minimum, 300-grain monolithic solids. Broadside vs quartering-away. Guardian\'s Pledge and clean kill.', category: 'Ballistics', date: '2026-03-06', heroImage: '/images/cape-buffalo_card.png', }, {
    slug: 'malaria-free-celestial-safaris-waterberg', title: 'Malaria-Free Bushveld Stays in the Waterberg', excerpt: 'Travel without malaria prophylactics in the Makoppa Dome. Game drives, boma evenings, and quiet time at Rooibok Kraal—safe, multi-generational bushveld.', category: 'Luxury Living', date: '2026-03-07', heroImage: '/images/residences-second-house-main.jpg', }, {
    slug: 'conservation-harvest-esg-environmental-stewardship', title: 'The Conservation Harvest: science-led stewardship on private land', excerpt:
      'How census and carrying capacities inform harvest decisions. Ethical hunting vs conservation harvesting, without invented metrics or dashboards.', category: 'Conservation', date: '2026-03-08', heroImage: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg', }, {
    slug: 'bespoke-bushveld-living-fiber-optic-internet', title: 'Bespoke Bushveld Living: Remote Work with Fiber Optic Internet', excerpt: "State-of-the-art connectivity at Hunter's House and Rooibok Kraal. Work-from-anywhere in the 2.5-billion-year-old Makoppa Dome, then step out into starlight and the boma.", category: 'Luxury Living', date: '2026-03-09', heroImage: '/images/residences-homestead-main.jpg', }, {
    slug: 'golden-vs-blue-wildebeest-african-plains-game', title: 'African Plains Game: A Comparison of Golden and Blue Wildebeest', excerpt: 'Genetic origins of the Golden variant in the Limpopo river basin. Behavioral overlap, ballistics (.300 Win Mag / .375 H&H), and 28 1/2" Rowland Ward minimum.', category: 'Ballistics', date: '2026-03-10', heroImage: '/images/golden-wildebeest_card.png', }, {
    slug: 'limpopo-hunting-season-2026-weather-tactics', title: 'Preparing for the Limpopo Hunting Season 2026: Weather and Tactics', excerpt: 'Summer rainfall to dry winter (May–August). Visibility and stalking. Temperature and packing for the Makoppa Dome. Best time to hunt in Thabazimbi.', category: 'Logistics', date: '2026-03-11', heroImage: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', }, {
    slug: 'livingstone-eland-harvesting-africas-largest-antelope', title: "The Livingstone Eland: Harvesting Africa's Largest Antelope", excerpt: 'Taurotragus oryx livingstonii: dewlap, spiraled horns. .338 Win Mag and 9.3x62mm. Tracking challenges. Rowland Ward 35" minimum. Makoppa district.', category: 'Ballistics', date: '2026-03-12', heroImage: '/images/livingstone-eland_card.png', }, {
    slug: 'stone-villa-experience-intimate-luxury-makoppa', title: 'Rooibok Kraal Experience: Intimate Luxury in the Makoppa Dome', excerpt: '2-bedroom, 6-sleeper boutique lodge. Master en-suite, Nespresso, outdoor braai with Miwesu Premium Firewood. Exclusive romantic safari getaway. Thabazimbi.', category: 'Luxury Living', date: '2026-03-13', heroImage: '/images/residences-second-house-main.jpg', }, {
    slug: 'south-africa-vs-usa-hunting-regulations', title: 'Navigating South African vs. USA Hunting Regulations', excerpt: 'NEMBA vs federal-state systems. PHASA ethical standards. CITES permits for international exports. Compliance for smooth trophy exportation.', category: 'Logistics', date: '2026-03-14', heroImage: '/images/greater-kudu_card.png', }, {
    slug: 'transparency-conservation-live-telemetry-dashboard', title: 'Transparency in conservation: how MIWESU reports stewardship', excerpt:
      'Stewardship and product rigour, what we publish, what we share on request, and how the Iron Eden earns trust without gimmicks or vanity dashboards.', category: 'Conservation', date: '2026-03-15', heroImage: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', }, {
    slug: 'sweetveld-vs-sourveld', title: 'Sweetveld vs. Sourveld: Why Our Nutrient Density Produces Bigger Horns', excerpt: 'How Sweetveld grasses in the Makoppa district sustain game in peak condition. Nutrient density, trophy quality, and the Arid Sweet Bushveld.', category: 'Conservation', date: '2025-11-01', heroImage: '/images/greater-kudu_card.png', }, {
    slug: 'limpopo-vs-eastern-cape', title: 'Limpopo vs. Eastern Cape Hunting: Where to Hunt Plains Game in South Africa', excerpt: 'Compare bushveld vs open plains, species mix, climate, malaria-free status. Why the Waterberg and Makoppa rank among the best.', category: 'Logistics', date: '2025-11-15', heroImage: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', },
]

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug)
}
