/**
 * Activity page images: matched to section content where possible.
 * Uses Facebook gallery (real MIWESU) and existing public/images assets.
 * See docs/ACTIVITIES_PAGE_IMAGE_AUDIT.md for mapping rationale.
 */
const FB = '/images/Facebook'

export const activityImages = {
  /** Hero: activities overview, Makoppa landscape */
  hero: `${FB}/469490837_122145814052331002_8566440733817305386_n.jpg`,

  /** Top cards */
  conservationHarvestCard: `${FB}/469596637_122145814640331002_3373304811628708345_n.jpg`,
  photographicSafariCard: `${FB}/469463473_122145814766331002_6875660384412212554_n.jpg`,
  celestialSafariCard: '/images/_filename_Thabazimbi_N_150jpeg_Nano_Banana_Pro_22262.jpg',
  /** Boma, braai, shared evenings — friends & family (replaces former mobile wellness slot) */
  gatheringsFamilyCard: '/images/residences-main-lodge-boma-braai.jpg',
  wildlifeViewingCard: `${FB}/469680087_122145814082331002_8757379879919305611_n.jpg`,

  /** Conservation Harvest section */
  conservationHarvestMain: `${FB}/470233517_122143086188347210_5519937489259998324_n.jpg`,
  conservationHarvestTracker: '/images/_filename_Thabazimbi_N_166jpeg_Nano_Banana_Pro_08274.jpg',
  conservationHarvestKudu: `${FB}/475678135_122154364496331002_4974639651636501707_n.jpg`,
  conservationHarvestProcessing: `${FB}/470232310_122143086212347210_4304746111846107219_n.jpg`,

  /** Photographic Safari section */
  photographicSafariMain: `${FB}/469647598_122145814430331002_4012458471998157908_n.jpg`,
  photographicSafariWaterhole: `${FB}/469463473_122145814766331002_6875660384412212554_n.jpg`,
  photographicSafariKoppies: `${FB}/469407140_122145814454331002_6316558962875209734_n.jpg`,
  photographicSafariSunset: `${FB}/558423669_122183668376347210_8611791526221429398_n.jpg`,

  /** Celestial Safaris (night sky – keep existing if correct; no FB night-sky) */
  celestialSafariMain: '/images/_filename_Thabazimbi_N_158jpeg_Nano_Banana_Pro_84550.jpg',

  /** Birding (habitat / bushveld) */
  birdingMain: `${FB}/558423669_122183668376347210_8611791526221429398_n.jpg`,

  /** 4x4 Trails (vehicle / terrain) */
  fourByFourMain: `${FB}/484079097_122160764474331002_4368997146950012698_n.jpg`,

  /** Walking Safari (on foot, bushveld) */
  walkingSafariMain: `${FB}/469490837_122145814052331002_8566440733817305386_n.jpg`,
} as const
