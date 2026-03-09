/**
 * Elite 30 – Curated real-world images from MIWESU Facebook.
 * Cinematic Verité + Clean Kill: no blood/gore; landscapes, lodge, live wildlife only.
 * Paths served from public/images/Facebook/
 */

export type AuthenticGalleryCategory = 'Landscape' | 'Lodge' | 'Wildlife'

export interface AuthenticGalleryItem {
  src: string
  category: AuthenticGalleryCategory
  /** Optional caption for accessibility / lightbox */
  title?: string
}

const BASE = '/images/Facebook'

export const authenticGalleryItems: AuthenticGalleryItem[] = [
  // 1. Cinematic Landscapes & "The Anticipation" (1–9)
  { src: `${BASE}/515897873_10163657011604529_3013100922306598813_n.jpg`, category: 'Landscape', title: 'Two rifles from vehicle; sunset over savanna' },
  { src: `${BASE}/470233517_122143086188347210_5519937489259998324_n.jpg`, category: 'Landscape', title: 'Sunset from vehicle; rifles in foreground; orange horizon' },
  { src: `${BASE}/469596637_122145814640331002_3373304811628708345_n.jpg`, category: 'Landscape', title: 'Rifle in wooden hunting blind; diagonal sunlight' },
  { src: `${BASE}/484079097_122160764474331002_4368997146950012698_n.jpg`, category: 'Landscape', title: '4x4 bull bar; MIWESU GP license plate' },
  { src: `${BASE}/469407140_122145814454331002_6316558962875209734_n.jpg`, category: 'Landscape', title: 'Sunrise/sunset landscape; golden-brown grass' },
  { src: `${BASE}/469463473_122145814766331002_6875660384412212554_n.jpg`, category: 'Landscape', title: 'Waterhole at sunset; reflections' },
  { src: `${BASE}/475763558_122154364634331002_4949863100320151913_n.jpg`, category: 'Landscape', title: 'Dramatic cloudy sky at sunset; vehicle tracks' },
  { src: `${BASE}/469594294_122145814646331002_1327138597259678528_n.jpg`, category: 'Landscape', title: 'Sunset at waterhole; silhouetted person' },
  { src: `${BASE}/558423669_122183668376347210_8611791526221429398_n.jpg`, category: 'Landscape', title: 'Sun through silhouetted tree; golden hour' },
  // 2. Boma & Luxury Lodge (10–18)
  { src: `${BASE}/469512882_122145814166331002_9118324371808560871_n.jpg`, category: 'Lodge', title: 'Bonfire in circular fire pit at twilight' },
  { src: `${BASE}/499488235_122166020030347210_8319107604728564675_n.jpg`, category: 'Lodge', title: 'Lodge pool and water slide at golden hour' },
  { src: `${BASE}/469533014_122145814544331002_8459832458244607167_n.jpg`, category: 'Lodge', title: 'Aerial lodge courtyard; thatched roofs; fire pit' },
  { src: `${BASE}/470220106_122143086734347210_1249837495105770082_n.jpg`, category: 'Lodge', title: 'Modern bathroom; glass shower; tan tiles' },
  { src: `${BASE}/470222889_122143086758347210_9003776941533006308_n.jpg`, category: 'Lodge', title: 'Lodge loft bedroom; thatched roof; wooden beams' },
  { src: `${BASE}/470226547_122143086818347210_7234893372372112740_n.jpg`, category: 'Lodge', title: 'Lodge kitchen/bar; thatched roof visible outside' },
  { src: `${BASE}/470232310_122143086212347210_4304746111846107219_n.jpg`, category: 'Lodge', title: 'Outdoor kitchen and braai; pool; thatched bomas' },
  { src: `${BASE}/470241375_122143086752347210_5184197355552834177_n.jpg`, category: 'Lodge', title: 'Lodge exterior; thatched roof; safari vehicles' },
  { src: `${BASE}/470211555_122143103336347210_5460938098123234397_n.jpg`, category: 'Lodge', title: 'MIWESU GAME FARM sign; thatched lodge background' },
  // 3. Untamed Wildlife & Trail Cam (19–30)
  { src: `${BASE}/469680087_122145814082331002_8757379879919305611_n.jpg`, category: 'Wildlife', title: 'Herd of African buffalo; safari vehicle observing' },
  { src: `${BASE}/469491536_122145815870331002_4652356662516606489_n.jpg`, category: 'Wildlife', title: 'Waterbuck in bushveld; eye contact' },
  { src: `${BASE}/469647598_122145814430331002_4012458471998157908_n.jpg`, category: 'Wildlife', title: 'Zebras drinking at waterhole' },
  { src: `${BASE}/469457478_122145814040331002_2489191046502491077_n.jpg`, category: 'Wildlife', title: 'Livingstone eland in bushveld' },
  { src: `${BASE}/475678135_122154364496331002_4974639651636501707_n.jpg`, category: 'Wildlife', title: 'Male kudu in bushveld; spiralled horns' },
  { src: `${BASE}/469669050_122145814616331002_1206589178112452535_n.jpg`, category: 'Wildlife', title: 'Sable antelope in dry golden grass' },
  { src: `${BASE}/469381409_122145814070331002_8712320735235530857_n.jpg`, category: 'Wildlife', title: 'Three giraffes in savanna' },
  { src: `${BASE}/472132556_122145546932347210_3640614808142766224_n.jpg`, category: 'Wildlife', title: 'Male kudu grazing in dry bushveld' },
  { src: `${BASE}/475848991_122154364454331002_8930013370636488452_n.jpg`, category: 'Wildlife', title: 'Three Cape buffalo; rough-bark tree' },
  { src: `${BASE}/472280935_122145546524347210_4393666419911566418_n.jpg`, category: 'Wildlife', title: 'Full-body giraffe in dry savanna' },
  { src: `${BASE}/472239700_122145523454347210_5298227541206384290_n.jpg`, category: 'Wildlife', title: 'Trail cam; warthogs foraging at night' },
  { src: `${BASE}/472295295_122145522788347210_473922214345027533_n.jpg`, category: 'Wildlife', title: 'Trail cam; honey badgers foraging at night' },
  // Extra two from Facebook folder
  { src: `${BASE}/469445759_122145814202331002_8412168224364807253_n.jpg`, category: 'Wildlife', title: 'Three giraffes; thatched lodge in background' },
  { src: `${BASE}/469490837_122145814052331002_8566440733817305386_n.jpg`, category: 'Landscape', title: 'Eland and kudu on dirt road; dawn pastel sky' },
]
