/**
 * MIWESU Lodge  - Residences & facilities data
 * Single source of truth for rooms, amenities, and image paths.
 * Aligned with Card 1 image logs and MIWESU_LODGE_COMPLETE_OVERVIEW_AND_FLOOR_PLANS.txt
 * Use one image per slot to avoid duplicates; card1Source points to the folder for copying.
 */

export type ResidenceFacility = {
  id: string
  label: string
  description: string
  imagePath: string
  /** Fallback image if the primary is missing (e.g. use main exterior for a room) */
  fallbackImagePath?: string
  /** Card 1 folder name  - use one representative image from this folder */
  card1Source?: string
}

export type ResidenceGroup = {
  id: string
  title: string
  subtitle?: string
  /** Total sleepers in this house */
  sleepers: number
  facilities: ResidenceFacility[]
}

/** Hunter's House (main lodge)  - 16 sleepers, 4 bedrooms, shared spaces + outdoor */
export const mainLodgeHouse: ResidenceGroup = {
  id: 'main-lodge',
  title: 'Hunter\'s House',
  subtitle: 'Hunter\'s House',
  sleepers: 16,
  facilities: [
    {
      id: 'homestead-exterior',
      label: 'Main Lodge House',
      description: 'Thatched roof, multi-peaked; patio, braai, tall pillar. Heart of the property.',
      imagePath: '/images/residences-homestead-main.jpg',
      card1Source: 'main_house_outside',
    },
    {
      id: 'lower-room-1',
      label: 'Lower Room 1 (sleeps 3)',
      description: 'Three single beds, deer/impala artwork, aircon above bed. En-suite with shower, toilet, sink. Door to kitchen/living.',
      imagePath: '/images/residences-main-lodge-lower-room-1.jpg',
      fallbackImagePath: '/images/residences-homestead-main.jpg',
      card1Source: 'main_house_lower_room_1_sleeps_3',
    },
    {
      id: 'lower-room-2',
      label: 'Lower Room 2 (sleeps 3)',
      description: 'Three single beds, Sable antelope painting, aircon near bathroom. En-suite.',
      imagePath: '/images/residences-main-lodge-lower-room-2.jpg',
      fallbackImagePath: '/images/residences-homestead-main.jpg',
      card1Source: 'main_house_lower_room_2_sleeps_3',
    },
    {
      id: 'lower-room-en-suite',
      label: 'Lower Room En-suite (bathroom)',
      description: 'Corner bathtub with shower, toilet, pedestal sink. Light tiles, dark floor. Serves lower rooms (sleeps 3 each).',
      imagePath: '/images/_filename_Thabazimbi_W_7jpg_st_Nano_Banana_Pro_78784.jpg',
      fallbackImagePath: '/images/residences-main-lodge-lower-room-1.jpg',
      card1Source: '04_lower_room_sleeps_3_bathroom',
    },
    {
      id: 'kitchen',
      label: 'Kitchen',
      description: 'Open-plan kitchen, dining, living. Tree trunk, thatched roof, bar, large table, L-shaped sofa, TV. Glass doors to first patio.',
      imagePath: '/images/_filename_Thabazimbi_N_28jpeg__Nano_Banana_Pro_13022.jpg',
      fallbackImagePath: '/images/residences-homestead-kitchen.jpg',
      card1Source: 'main_house_kitchen_living_room',
    },
    {
      id: 'living',
      label: 'Living Area',
      description: 'Open-plan with kitchen. Dark wood, taxidermy, dark grey tiles. Patio visible left or right depending on angle.',
      imagePath: '/images/_filename_Thabazimbi_N_38jpg_s_Nano_Banana_Pro_03494.jpg',
      fallbackImagePath: '/images/residences-homestead-living.jpg',
      card1Source: 'main_house_kitchen_living_room',
    },
    {
      id: 'first-patio',
      label: 'First patio',
      description: 'First outside area as you step out. Thatched roof, wooden supports, octagonal table and benches, Adirondack chairs, welcome mat. Behind glass: kitchen, bar, living.',
      imagePath: '/images/residences-main-lodge-first-patio.jpg',
      fallbackImagePath: '/images/residences-main-lodge-boma-braai.jpg',
      card1Source: 'main_house_first_outside_area_before_boma_and_braai',
    },
    {
      id: 'boma-braai',
      label: 'Boma and Braai (BBQ)',
      description: 'Circular boma (fire pit), built-in braai, bar table and stools, Adirondack chairs. Light brown tiles.',
      imagePath: '/images/residences-main-lodge-boma-braai.jpg',
      card1Source: 'main_house_boma_and_braai',
    },
    {
      id: 'upper-room-1',
      label: 'Upper Room 1 (sleeps 5)',
      description: 'Five single beds. Three windows behind central bed, no animal portrait, rug tail towards middle bed. Thatched roof, wooden beams.',
      imagePath: '/images/_filename_Thabazimbi_N_72jpg_s_Nano_Banana_Pro_17678.jpg',
      fallbackImagePath: '/images/residences-main-lodge-upper-room-1.jpg',
      card1Source: 'main_house_upper_room_1_sleeps_5',
    },
    {
      id: 'upper-room-2',
      label: 'Upper Room 2 (sleeps 5)',
      description: 'Five single beds. One window and Kudu portrait behind central bed, rug tail away from middle. Cream/beige bedding.',
      imagePath: '/images/residences-main-lodge-upper-room-2.jpg',
      fallbackImagePath: '/images/residences-homestead-main.jpg',
      card1Source: 'main_house_upper_room_2_sleeps_5',
    },
    {
      id: 'lapa',
      label: 'Lapa (pool table & darts)',
      description: 'Open-sided thatched structure. Pool table, bar with stools, small kitchen/wet bar. Connects to main house and pool area.',
      imagePath: '/images/residences-main-lodge-lapa.jpeg',
      card1Source: '03_lapa_kitchen_pool_table',
    },
    {
      id: 'braai-trees',
      label: 'Braai under the trees',
      description: 'Boma/braai under trees; circular fire pit with grill, paved area, seating. Waterhole visible in some views.',
      imagePath: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
      fallbackImagePath: '/images/residences-main-lodge-braai-trees.jpg',
      card1Source: '06_boma_braai_under_trees',
    },
    {
      id: 'trampoline-jungle-gym',
      label: 'Trampoline & Jungle Gym',
      description: 'In-ground trampoline(s) and wooden jungle gym. Family play area; connects to pool area.',
      imagePath: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg',
      fallbackImagePath: '/images/residences-main-lodge-trampoline-jungle-gym.jpg',
      card1Source: '05_trampoline_jungle_gym',
    },
    {
      id: 'pool',
      label: 'Swimming pool with slide',
      description: 'Rectangular pool, water slide complex (thatched tower; red/blue stripe and yellow spiral slides). Lawn, thatched umbrella.',
      imagePath: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg',
      fallbackImagePath: '/images/residences-main-lodge-pool.jpg',
      card1Source: '01_swimming_pool_slide',
    },
  ],
}

/** Rooibok Kraal  - near the pool, 6 sleepers, 2 bedrooms */
export const secondHouse: ResidenceGroup = {
  id: 'second-house',
  title: 'Rooibok Kraal',
  subtitle: 'Near the pool · Sleeps 6',
  sleepers: 6,
  facilities: [
    {
      id: 'second-house-exterior',
      label: 'Rooibok Kraal',
      description: 'Thatched roof, tan stucco, sliding glass doors. Braai to the left of house. Lawn, bushveld.',
      imagePath: '/images/_filename_Thabazimbi_N_200jpeg_Nano_Banana_Pro_84885.jpg',
      fallbackImagePath: '/images/residences-second-house-main.jpg',
      card1Source: 'house2_outside',
    },
    {
      id: 'second-house-kitchen',
      label: 'Kitchen',
      description: 'Modern, light tones. Open-plan to living room.',
      imagePath: '/images/_filename_Thabazimbi_N_158jpeg_Nano_Banana_Pro_84550.jpg',
      fallbackImagePath: '/images/residences-second-house-kitchen.jpg',
      card1Source: 'house2_kitchen',
    },
    {
      id: 'second-house-living',
      label: 'Living Area',
      description: 'Sofa, recliners, TV, console, safari art. Connects to kitchen and both bedrooms.',
      imagePath: '/images/_filename_Thabazimbi_N_171jpeg_Nano_Banana_Pro_19305.jpg',
      fallbackImagePath: '/images/residences-second-house-living.jpg',
      card1Source: 'house2_living_room',
    },
    {
      id: 'second-house-master',
      label: 'Master Bedroom',
      description: 'One main bed (not bunk). Rustic headboard, nightstands. En-suite with shower (no bathtub).',
      imagePath: '/images/_filename_Thabazimbi_W_105jpg__Nano_Banana_Pro_96888.jpg',
      fallbackImagePath: '/images/residences-second-house-master-bedroom.jpg',
      card1Source: 'house2_main_bedroom',
    },
    {
      id: 'second-house-ensuite',
      label: 'Master En-suite (shower)',
      description: 'Walk-in glass shower, pedestal basin, toilet. Brown/terracotta wall tiles. No bathtub.',
      imagePath: '/images/residences-second-house-ensuite.jpg',
      card1Source: 'house2_main_bedroom_bathroom',
    },
    {
      id: 'second-house-bedroom-2',
      label: '2nd Bedroom (2 bunks, sleeps 4)',
      description: 'Two bunk beds (sleeps 4 total). Own en-suite with bathtub. Wardrobe, doors to living and bathroom.',
      imagePath: '/images/residences-second-house-bedroom-2.jpg',
      fallbackImagePath: '/images/residences-second-house-living.jpg',
      card1Source: 'house2_room2',
    },
    {
      id: 'second-house-room2-ensuite',
      label: '2nd Bedroom En-suite (bathtub)',
      description: 'Bathtub, pedestal sink, toilet. Light brown/terracotta tiles. Serves bunk room.',
      imagePath: '/images/residences-second-house-room2-ensuite.jpg',
      fallbackImagePath: '/images/residences-second-house-ensuite.jpg',
      card1Source: 'house2_room2_bathroom',
    },
    {
      id: 'second-house-braai',
      label: 'Outdoor Braai',
      description: 'Outdoor braai area to the left of the house (from main viewing angle).',
      imagePath: '/images/residences-second-house-braai.jpg',
      fallbackImagePath: '/images/residences-second-house-main.jpg',
      card1Source: 'house2_outside',
    },
  ],
}

/** All residence groups for iteration */
export const residenceGroups: ResidenceGroup[] = [mainLodgeHouse, secondHouse]

/** Summary counts for copy (e.g. homepage, residences hero) */
export const lodgeSummary = {
  mainHouse: {
    sleepers: 16,
    bedrooms: 4,
    lowerRooms: 2,
    upperRooms: 2,
    description:
      'Four bedrooms on two levels (two lower rooms sleeping 3 each, two upper rooms sleeping 5 each), open-plan kitchen and living area, first patio, boma and braai, lapa with pool table and darts, braai under the trees, trampoline, jungle gym and swimming pool with slide.',
  },
  secondHouse: {
    sleepers: 6,
    bedrooms: 2,
    description:
      'Open-plan kitchen and living area, master bedroom (one bed) with en-suite (shower), second bedroom with two bunk beds (sleeps 4) and en-suite (bathtub). Outdoor braai area.',
  },
  totalSleepers: 22,
}

/** Gallery: accommodation images with category and description (one image per slot to avoid doubles) */
export const galleryAccommodationImages: Array<{
  src: string
  category: 'Accommodation'
  title: string
  description: string
}> = [
  {
    src: '/images/residences-homestead-main.jpg',
    category: 'Accommodation',
    title: 'Main Lodge House',
    description: 'Hunter\'s House  - 16 sleepers, four bedrooms, kitchen, living, first patio, boma, lapa, pool and braai.',
  },
  {
    src: '/images/residences-second-house-main.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal',
    description: 'Near the pool  - 6 sleepers, kitchen, living, master and bunk room, two en-suites, outdoor braai.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_200jpeg_Nano_Banana_Pro_84885.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal (exterior)',
    description: 'Thatched roof, tan walls, sliding glass doors; lawn and brick pathway; bushveld setting.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_150jpeg_Nano_Banana_Pro_22262.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal at dusk',
    description: 'Exterior at twilight with warm interior and pathway lighting; thatched roof, lawn and fence.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_89562.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal – lawn & patio',
    description: 'Family-friendly exterior; thatched roof, sliding doors, brick patio and lawn; bushveld beyond.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_111jpg__Nano_Banana_Pro_22777.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal – morning patio',
    description: 'Brick patio in front of Rooibok Kraal; thatched roof, sliding door; outdoor living in the bushveld.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_110jpg__Nano_Banana_Pro_77108.jpg',
    category: 'Accommodation',
    title: 'Rooibok Kraal – evening',
    description: 'Night outside the villa: lantern-lit lawn, starry sky; warm interior visible through glass doors.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_38jpg_s_Nano_Banana_Pro_03494.jpg',
    category: 'Accommodation',
    title: 'Main House Living Area',
    description: 'Open-plan living with kitchen counter, L-shaped sofa, TV, thatched roof and glass doors to patio; wildebeest, kudu and oryx mounts.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_27jpeg__Nano_Banana_Pro_89236.jpg',
    category: 'Accommodation',
    title: 'Main House Dining',
    description: 'Large dining table and kitchen area; thatched roof, tree-trunk structure and taxidermy; communal main house space.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_28jpeg__Nano_Banana_Pro_13022.jpg',
    category: 'Accommodation',
    title: 'Main House Kitchen',
    description: 'Kitchen island and bar with thatched roof, mosaic wooden cabinets and tree-trunk pillar; open-plan to living.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_24jpeg__Nano_Banana_Pro_41406.jpg',
    category: 'Accommodation',
    title: 'Main House Dining & Lounge',
    description: 'Dining area and L-shaped sofa, TV with camera feeds, staircase to loft; taxidermy and thatched roof.',
  },
  {
    src: '/images/Gemini_Generated_Image_e8dazce8dazce8da.png',
    category: 'Accommodation',
    title: 'Main House Open-Plan',
    description: 'Kitchen, dining and lounge under thatched roof; glass doors to patio and bushveld.',
  },
  {
    src: '/images/residences-homestead-kitchen.jpg',
    category: 'Accommodation',
    title: 'Main Lodge Kitchen (alt)',
    description: 'Open-plan kitchen, dining and living with thatched roof and glass doors to first patio.',
  },
  {
    src: '/images/residences-homestead-living.jpg',
    category: 'Accommodation',
    title: 'Main Lodge Living (alt)',
    description: 'Living and dining in the main house; patio visible through glass.',
  },
  {
    src: '/images/residences-main-lodge-first-patio.jpg',
    category: 'Accommodation',
    title: 'First Patio',
    description: 'First outside area before boma and braai  - thatched roof, octagonal table, Adirondack chairs.',
  },
  {
    src: '/images/residences-main-lodge-boma-braai.jpg',
    category: 'Accommodation',
    title: 'Boma and Braai',
    description: 'Main lodge patio  - circular fire pit and built-in braai.',
  },
  {
    src: '/images/residences-main-lodge-lapa.jpeg',
    category: 'Accommodation',
    title: 'Lapa',
    description: 'Pool table and darts in open-sided thatched structure.',
  },
  {
    src: '/images/residences-main-lodge-pool.jpg',
    category: 'Accommodation',
    title: 'Swimming Pool',
    description: 'Pool with slide  - family facilities at the main lodge.',
  },
  {
    src: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_63120.jpg',
    category: 'Accommodation',
    title: 'Main lodge – pool, braai & slides',
    description: 'Sunny view: braai with fire, pool, water slides, thatched lapa; lawn and lodge buildings.',
  },
  {
    src: '/images/_filename_Gemini_Generated_Ima_Nano_Banana_Pro_94229.jpg',
    category: 'Accommodation',
    title: 'Main lodge – evening pool & braai',
    description: 'Twilight: braai with fire, blue-lit pool, slides, thatched gazebo; lodge buildings in background.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_62jpg_s_Nano_Banana_Pro_55401.jpg',
    category: 'Accommodation',
    title: 'Braai under the trees',
    description: 'Outdoor braai in use; lawn, trees and lodge buildings; main lodge recreation area.',
  },
  {
    src: '/images/residences-main-lodge-lower-room-1.jpg',
    category: 'Accommodation',
    title: 'Lower Room 1 (sleeps 3)',
    description: 'Main lodge lower room with deer/impala art and en-suite; door to kitchen.',
  },
  {
    src: '/images/residences-main-lodge-lower-room-2.jpg',
    category: 'Accommodation',
    title: 'Lower Room 2 (sleeps 3)',
    description: 'Second lower room with Sable antelope painting and en-suite.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_7jpg_st_Nano_Banana_Pro_78784.jpg',
    category: 'Accommodation',
    title: 'Lower Room En-suite',
    description: 'Main lodge lower room bathroom – corner bathtub, glass shower, pedestal sink, toilet; wooden beam ceiling.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_79jpeg__Nano_Banana_Pro_52109.jpg',
    category: 'Accommodation',
    title: 'Lower Room En-suite (bathtub)',
    description: 'Main lodge lower room bathroom – corner bathtub, toilet, pedestal sink; light tiles, relaxed setting.',
  },
  {
    src: '/images/residences-main-lodge-upper-room-1.jpg',
    category: 'Accommodation',
    title: 'Upper Room 1 (sleeps 5)',
    description: 'Main lodge upper room  - three windows behind bed, five single beds.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_72jpg_s_Nano_Banana_Pro_17678.jpg',
    category: 'Accommodation',
    title: 'Upper Room 1 (sleeps 5)',
    description: 'Main lodge upper room  - two beds, thatched roof, elephant and rhino art; view to garden.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_41jpeg__Nano_Banana_Pro_68873.jpg',
    category: 'Accommodation',
    title: 'Upper Room 1 (sleeps 5)',
    description: 'Main lodge upper room  - multiple single beds, animal hide rug, thatched roof.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_111jpg__Nano_Banana_Pro_24733.jpg',
    category: 'Accommodation',
    title: 'Upper Room 1 (sleeps 5)',
    description: 'Main lodge upper room  - dormitory-style, sliding barn door, wildlife art and towel rack.',
  },
  {
    src: '/images/residences-main-lodge-upper-room-2.jpg',
    category: 'Accommodation',
    title: 'Upper Room 2 (sleeps 5)',
    description: 'Second upper room  - Kudu portrait behind bed, five single beds.',
  },
  {
    src: '/images/residences-main-lodge-braai-trees.jpg',
    category: 'Accommodation',
    title: 'Braai under the trees',
    description: 'Boma/braai under trees; waterhole visible in distance in some views.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    category: 'Accommodation',
    title: 'Braai under the trees',
    description: 'Circular braai pit with grill under large tree; paved patio, wooden windbreak; savanna and water in distance.',
  },
  {
    src: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg',
    category: 'Accommodation',
    title: 'Braai under the trees (panoramic)',
    description: 'Wide view of braai area with circular pit, seating and shade tree; watering hole and bushveld beyond.',
  },
  {
    src: '/images/_filename_Panoramicjpg_style_A_Nano_Banana_Pro_56938.jpg',
    category: 'Accommodation',
    title: 'Braai under the trees (panoramic)',
    description: 'Panoramic braai area with pit, bench and tree; dam and savanna landscape in background.',
  },
  {
    src: '/images/residences-main-lodge-trampoline-jungle-gym.jpg',
    category: 'Accommodation',
    title: 'Trampoline & Jungle Gym',
    description: 'Family play area near the pool.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_140jpg__Nano_Banana_Pro_44533.jpg',
    category: 'Accommodation',
    title: 'Trampoline & Jungle Gym',
    description: 'In-ground trampoline with jungle gym in background; lawn, trees and bushveld; main lodge play area.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_146jpeg_Nano_Banana_Pro_23687.jpg',
    category: 'Accommodation',
    title: 'Jungle Gym & Swings',
    description: 'Wooden playground with playhouse, swings and tire swing, climbing; bushveld setting.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_146jpeg_Nano_Banana_Pro_98513.jpg',
    category: 'Accommodation',
    title: 'Jungle Gym – swings & climbing',
    description: 'Wooden jungle gym with playhouse, swing set and tire swing; main lodge family play area.',
  },
  {
    src: '/images/residences-second-house-kitchen.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Kitchen',
    description: 'Open-plan to living area.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_158jpeg_Nano_Banana_Pro_84550.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Kitchen',
    description: 'U-shaped kitchen, breakfast bar and stools; light wood cabinets, dark granite; buffalo art, rooster decor.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_162jpeg_Nano_Banana_Pro_88825.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Kitchen (peninsula)',
    description: 'Rooibok Kraal kitchen – peninsula, appliances, sink area; light wood and dark countertops.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_164jpeg_Nano_Banana_Pro_50956.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Kitchen & bedroom',
    description: 'Kitchenette/bar with buffalo art; glimpse into bedroom with dark headboard; open-plan layout.',
  },
  {
    src: '/images/residences-second-house-living.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Living',
    description: 'Living area with doors to master and second bedroom.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_171jpeg_Nano_Banana_Pro_19305.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Living',
    description: 'Open-plan living with leather recliners, kitchen area; Rooibok Kraal.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_166jpeg_Nano_Banana_Pro_08274.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Living',
    description: 'Living/suite area with bed, TV and leather recliner; warm earthy tones.',
  },
  {
    src: '/images/_filename_Thabazimbi_N_174jpeg_Nano_Banana_Pro_17489.jpg',
    category: 'Accommodation',
    title: 'The Rooibok Kraal Living',
    description: 'Entertainment area with smart TV, buffalo art and giraffe sculpture; Rooibok Kraal.',
  },
  {
    src: '/images/residences-second-house-master-bedroom.jpg',
    category: 'Accommodation',
    title: 'Master Bedroom',
    description: 'Second house  - one main bed, en-suite with shower.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_105jpg__Nano_Banana_Pro_96888.jpg',
    category: 'Accommodation',
    title: 'Master Bedroom',
    description: 'Rooibok Kraal master  - wooden bed, cow artwork, wardrobe; en-suite visible.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_103jpg__Nano_Banana_Pro_85162.jpg',
    category: 'Accommodation',
    title: 'Master Bedroom',
    description: 'Rooibok Kraal master  - queen bed, rustic headboard, nightstands and cow-at-sunset art.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_103jpg__Nano_Banana_Pro_87934.jpg',
    category: 'Accommodation',
    title: 'Master Bedroom',
    description: 'Rooibok Kraal master  - bed, headboard and artwork.',
  },
  {
    src: '/images/_filename_Thabazimbi_W_101jpg__Nano_Banana_Pro_04906.jpg',
    category: 'Accommodation',
    title: 'Master Bedroom',
    description: 'Rooibok Kraal master  - dresser with mirror, bed and African decor.',
  },
  {
    src: '/images/residences-second-house-ensuite.jpg',
    category: 'Accommodation',
    title: 'Master En-suite',
    description: 'Shower, basin, toilet; brown terracotta tiles.',
  },
  {
    src: '/images/residences-second-house-bedroom-2.jpg',
    category: 'Accommodation',
    title: '2nd Bedroom (sleeps 4)',
    description: 'Two bunk beds and en-suite with bathtub.',
  },
  {
    src: '/images/residences-second-house-braai.jpg',
    category: 'Accommodation',
    title: 'Outdoor Braai',
    description: 'Second house outdoor braai area.',
  },
]
