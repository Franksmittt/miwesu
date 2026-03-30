import type { SpeciesSlug } from '@/lib/species-power-types'

export type SpeciesGalleryImage = { src: string; alt: string }

/**
 * Editorial gallery assets per species (paths under /public).
 * Curated from existing MIWESU image set, excludes wrong-species or decorative-only files.
 */
export const SPECIES_POWER_GALLERY: Record<SpeciesSlug, SpeciesGalleryImage[]> = {
  'greater-kudu': [
    { src: '/images/kudu-bull-standing-01.png', alt: 'Greater kudu bull in Waterberg bushveld, Makoppa district' }, { src: '/images/kudu-bull-portrait-02.png', alt: 'Greater kudu bull portrait showing spiral horns' }, { src: '/images/kudu-bull-shade-01.png', alt: 'Greater kudu bull in thicket shade, sweetveld edge' }, { src: '/images/kudu-cow-bushveld-01.png', alt: 'Greater kudu cow, hornless, vigilant in bushveld' }, { src: '/images/kudu-bull-standing-02.png', alt: 'Greater kudu bull standing, Grey Ghost silhouette' }, { src: '/images/greater-kudu-hunting-strategies.png', alt: 'Ethical spot-and-stalk context, kudu habitat' }, { src: '/images/greater-kudu-shot-placement.png', alt: 'Vital triangle reference, greater kudu anatomy' }, ], wildebeest: [
    { src: '/images/2wildebeest-bull-standing-01.png', alt: 'Blue wildebeest bull, Limpopo plains game' }, { src: '/images/3wildebeest-cow-bushveld-01.png', alt: 'Blue wildebeest cow, slate coat and forehead marking' }, { src: '/images/1wildebeest-bull-portrait-01.png', alt: 'Blue wildebeest bull portrait, boss and horns' }, { src: '/images/4wildebeest-bull-portrait-02.png', alt: 'Blue wildebeest bull, brindled stripes in bushveld' }, { src: '/images/6wildebeest-bull-standing-02.png', alt: 'Blue wildebeest bull in open veld' }, { src: '/images/wildebeest-bull-vs-cow.png', alt: 'Field comparison, blue wildebeest bull versus cow' }, { src: '/images/wildebeest-hunting-stalk.png', alt: 'Fair-chase stalking, wildebeest on open veld' }, { src: '/images/wildebeest-shot-placement.png', alt: 'Shot placement, blue wildebeest vital area' }, { src: '/images/wildebeest-venison.png', alt: 'Field-to-table, blue wildebeest venison' }, ], 'golden-wildebeest': [
    { src: '/images/_filename_golden-wildebeest-bu_Nano_Banana_Pro_61762.jpg', alt: 'Golden wildebeest bull, Limpopo colour morph' }, { src: '/images/golden-wildebeest-color-pattern.png', alt: 'Golden wildebeest, recessive colour phase of blue wildebeest' }, { src: '/images/golden-wildebeest-behavior.png', alt: 'Golden wildebeest herd behaviour on the farm' }, { src: '/images/golden-wildebeest-hunting-stalk.png', alt: 'Ethical approach, golden wildebeest in Limpopo bushveld' }, { src: '/images/golden-wildebeest-shot-placement.png', alt: 'Vital triangle, golden wildebeest' }, { src: '/images/golden-wildebeest-trophy-bull.png', alt: 'Mature golden wildebeest bull, trophy evaluation' }, ], impala: [
    { src: '/images/impala-ram-portrait-01.png', alt: 'Impala ram, lyrate horns and facial marking' }, { src: '/images/impala-ram-standing-01.png', alt: 'Impala ram standing, sweetveld edge' }, { src: '/images/impala-ewe-bushveld-01.png', alt: 'Impala ewe, bushveld mosaic' }, { src: '/images/impala-herd-bushveld-01.png', alt: 'Impala herd, alarm and movement' }, { src: '/images/impala-hunting-stalk.png', alt: 'Spot-and-stalk, impala in Arid Sweet Bushveld' }, { src: '/images/impala-shot-placement.png', alt: 'Heart-lung placement, impala' }, { src: '/images/impala-trophy-ram.png', alt: 'Trophy impala ram, horn mass and length' }, ], 'dapple-impala': [
    { src: '/images/dapple-impala-color-pattern.png', alt: 'Dapple impala, coat variant of Aepyceros melampus' }, { src: '/images/dapple-impala-hunting-stalk.png', alt: 'Fair chase, dapple impala stalk' }, { src: '/images/dapple-impala-shot-placement.png', alt: 'Shot placement, dapple impala' }, { src: '/images/dapple-impala-trophy-ram.png', alt: 'Trophy dapple impala ram' }, ], gemsbok: [
    { src: '/images/gemsbok-portrait-01.png', alt: 'Gemsbok, facial mask and straight horns' }, { src: '/images/gemsbok-standing-01.png', alt: 'Gemsbok bull on scrub, Waterberg transition' }, { src: '/images/gemsbok-standing-02.png', alt: 'Gemsbok in bushveld, oryx gazella' }, { src: '/images/gemsbok-group-bushveld-01.png', alt: 'Gemsbok group, gregarious herds' }, { src: '/images/gemsbok-shade-bushveld-01.png', alt: 'Gemsbok resting in shade' }, { src: '/images/gemsbok-hunting-stalk.png', alt: 'Stalk, gemsbok in open scrub' }, { src: '/images/gemsbok-shot-placement.png', alt: 'Low shoulder shot, gemsbok vital triangle' }, { src: '/images/gemsbok-bull-vs-cow.png', alt: 'Bull versus cow, horn bases and length cues' }, ], warthog: [
    { src: '/images/1warthog-boar-portrait-01.png', alt: 'Warthog boar, warts and upper tusks' }, { src: '/images/3warthog-sow-bushveld-01.png', alt: 'Warthog sow, sounder behaviour' }, { src: '/images/6warthog-boar-standing-02.png', alt: 'Warthog boar standing, opportunity species' }, { src: '/images/warthog-hunting-stalk.png', alt: 'Opportunity hunt, warthog approach' }, { src: '/images/warthog-boar-vs-sow.png', alt: 'Boar versus sow, tusk and stature' }, ], blesbok: [
    { src: '/images/2blesbok-ram-standing-01.png', alt: 'Blesbok ram, blaze and lyre horns' }, { src: '/images/1blesbok-ram-portrait-01.png', alt: 'Blesbok ram portrait' }, { src: '/images/3blesbok-ewe-bushveld-01.png', alt: 'Blesbok ewe, open grassland edge' }, { src: '/images/4blesbok-ram-portrait-02.png', alt: 'Blesbok ram, horn rings' }, { src: '/images/blesbok-spoor.png', alt: 'Blesbok spoor, cloven track' }, { src: '/images/blesbok-dung-midden.png', alt: 'Blesbok dung midden, territorial marking' }, { src: '/images/blesbok-shot-placement.png', alt: 'Shot placement, blesbok' }, ], bushbuck: [
    { src: '/images/bushbuck-behavior.png', alt: 'Bushbuck ram, riverine thickets' }, { src: '/images/bushbuck-feeding.png', alt: 'Bushbuck feeding, edge habitat' }, { src: '/images/bushbuck-horn-detail.png', alt: 'Bushbuck horn, spiral keel' }, { src: '/images/bushbuck-hunting-stalk.png', alt: 'Stalk, bushbuck in cover' }, { src: '/images/bushbuck-shot-placement.png', alt: 'Shot placement, bushbuck' }, { src: '/images/bushbuck-trophy-ram.png', alt: 'Trophy bushbuck ram' }, ], 'cape-buffalo': [
    { src: '/images/1cape-buffalo-bull-portrait-01.png', alt: 'Cape buffalo bull portrait, fused boss' }, { src: '/images/2cape-buffalo-bull-standing-01.png', alt: 'Cape buffalo bull standing, dangerous game' }, { src: '/images/3cape-buffalo-cow-bushveld-01.png', alt: 'Cape buffalo cow, herd structure' }, { src: '/images/4cape-buffalo-bull-portrait-02.png', alt: 'Mature dagga boy, scarred hide' }, { src: '/images/5cape-buffalo-herd-bushveld-01.png', alt: 'Cape buffalo herd, Limpopo bushveld' }, { src: '/images/cape-buffalo-shot-placement.png', alt: 'Dangerous-game shot placement, Cape buffalo' }, ], lechwe: [
    { src: '/images/_filename_lechwe-ram-portrait-_Nano_Banana_Pro_14464.jpg', alt: 'Red lechwe ram, wetland-adapted horns' }, { src: '/images/lechwe-taxonomy.png', alt: 'Red lechwe, Kobus leche in habitat context' }, { src: '/images/lechwe-horn-detail.png', alt: 'Red lechwe horn, lyrate curve and rings' }, { src: '/images/lechwe-trophy-ram.png', alt: 'Trophy red lechwe ram' }, { src: '/images/lechwe-shot-placement.png', alt: 'Shot placement, lechwe' }, { src: '/images/lechwe-venison.png', alt: 'Lechwe venison, field care' }, ], 'livingstone-eland': [
    { src: '/images/_filename_livingstone-eland-bu_Nano_Banana_Pro_88557.jpg', alt: 'Livingstone eland bull, spiral horns and dewlap' }, { src: '/images/livingstone-eland-taxonomy.png', alt: 'Livingstone eland, largest antelope on the farm' }, { src: '/images/livingstone-eland-horn-detail.png', alt: 'Eland horn, tight spiral and keel' }, { src: '/images/livingstone-eland-hunting-stalk.png', alt: 'Stalk, Livingstone eland' }, { src: '/images/livingstone-eland-trophy-bull.png', alt: 'Trophy Livingstone eland bull' }, ], 'red-hartebeest': [
    { src: '/images/2red-hartebeest-bull-standing-01.png', alt: 'Red hartebeest bull, elongated skull and horns' }, { src: '/images/1red-hartebeest-bull-portrait-01.png', alt: 'Red hartebeest bull portrait' }, { src: '/images/3red-hartebeest-cow-bushveld-01.png', alt: 'Red hartebeest cow, heart-shaped horn silhouette' }, { src: '/images/redhardt_Shotplacement.png', alt: 'Shot placement, red hartebeest' }, ], springbok: [
    { src: '/images/1springbok-ram-portrait-01.png', alt: 'Springbok ram, lyre horns and facial marking' }, { src: '/images/3springbok-ewe-bushveld-01.png', alt: 'Springbok ewe, plains and sweetveld' }, { src: '/images/4springbok-ram-portrait-02.png', alt: 'Springbok ram portrait, trophy evaluation' }, { src: '/images/springbok-shot-placement.png', alt: 'Small vital zone, springbok' }, { src: '/images/springbok-venison.png', alt: 'Springbok venison, lean Karoo meat' }, ], }

/** One editorial image per deep-dive H2, ecology, tracking, ethical shot (alternating layout on page). */
export type SpeciesDeepDiveSectionImages = {
  ecology: SpeciesGalleryImage
  tracking: SpeciesGalleryImage
  shot: SpeciesGalleryImage
}

export const SPECIES_DEEP_DIVE_SECTION_IMAGES: Record<SpeciesSlug, SpeciesDeepDiveSectionImages> = {
  'greater-kudu': {
    ecology: {
      src: '/images/kudu-bull-standing-01.png', alt: 'Greater kudu bull in thicket-edge habitat, ecology and behaviour context', }, tracking: {
      src: '/images/greater-kudu-hunting-strategies.png', alt: 'Spot-and-stalk and glassing, tracking kudu in bushveld', }, shot: {
      src: '/images/greater-kudu-shot-placement.png', alt: 'Vital triangle and African low heart–lung reference, greater kudu', }, }, wildebeest: {
    ecology: {
      src: '/images/2wildebeest-bull-standing-01.png', alt: 'Blue wildebeest bull, grazing ecology and herd structure', }, tracking: {
      src: '/images/wildebeest-hunting-stalk.png', alt: 'Stalking blue wildebeest, wind, sign, and approach', }, shot: {
      src: '/images/wildebeest-shot-placement.png', alt: 'Ethical shot placement, blue wildebeest vitals and hump illusion', }, }, 'golden-wildebeest': {
    ecology: {
      src: '/images/golden-wildebeest-behavior.png', alt: 'Golden wildebeest, colour morph behaviour and herd dynamics', }, tracking: {
      src: '/images/golden-wildebeest-hunting-stalk.png', alt: 'Fair-chase stalk, golden wildebeest', }, shot: {
      src: '/images/golden-wildebeest-shot-placement.png', alt: 'Shot placement diagram, golden wildebeest', }, }, impala: {
    ecology: {
      src: '/images/impala-herd-bushveld-01.png', alt: 'Impala herd in bushveld, mixed feeding and alarm behaviour', }, tracking: {
      src: '/images/impala-hunting-stalk.png', alt: 'Tracking and stalk, impala in sweetveld', }, shot: {
      src: '/images/impala-shot-placement.png', alt: 'Heart–lung placement, impala vital zone', }, }, 'dapple-impala': {
    ecology: {
      src: '/images/dapple-impala-color-pattern.png', alt: 'Dapple impala, coat genetics with identical ecology to impala', }, tracking: {
      src: '/images/dapple-impala-hunting-stalk.png', alt: 'Stalk and fieldcraft, dapple impala', }, shot: {
      src: '/images/dapple-impala-shot-placement.png', alt: 'Shot placement, dapple impala', }, }, gemsbok: {
    ecology: {
      src: '/images/gemsbok-group-bushveld-01.png', alt: 'Gemsbok herd, arid scrub ecology and thermoregulation', }, tracking: {
      src: '/images/gemsbok-hunting-stalk.png', alt: 'Open scrub stalk, gemsbok sign and approach', }, shot: {
      src: '/images/gemsbok-shot-placement.png', alt: 'Low shoulder vital triangle, gemsbok and dermal shield', }, }, warthog: {
    ecology: {
      src: '/images/1warthog-boar-portrait-01.png', alt: 'Warthog boar, rooting, sounders, and veld ecology', }, tracking: {
      src: '/images/warthog-hunting-stalk.png', alt: 'Opportunity stalk, warthog near cover', }, shot: {
      src: '/images/warthog-boar-vs-sow.png', alt: 'Boar versus sow body depth, shot placement context with PH', }, }, blesbok: {
    ecology: {
      src: '/images/2blesbok-ram-standing-01.png', alt: 'Blesbok ram, sweetveld plains and territorial behaviour', }, tracking: {
      src: '/images/blesbok-spoor.png', alt: 'Blesbok spoor and tracking, cloven hoof sign', }, shot: {
      src: '/images/blesbok-shot-placement.png', alt: 'Shot placement, blesbok chest and shoulder line', }, }, bushbuck: {
    ecology: {
      src: '/images/bushbuck-feeding.png', alt: 'Bushbuck feeding, riverine thicket ecology', }, tracking: {
      src: '/images/bushbuck-hunting-stalk.png', alt: 'Close-cover stalk, bushbuck sign', }, shot: {
      src: '/images/bushbuck-shot-placement.png', alt: 'Tight-cover shot placement, bushbuck', }, }, 'cape-buffalo': {
    ecology: {
      src: '/images/5cape-buffalo-herd-bushveld-01.png', alt: 'Cape buffalo herd, grazing and dangerous-game context', }, tracking: {
      src: '/images/2cape-buffalo-bull-standing-01.png', alt: 'Buffalo sign, mud, and approach, professional hunt discipline', }, shot: {
      src: '/images/cape-buffalo-shot-placement.png', alt: 'Dangerous-game anatomy, Cape buffalo shot placement with PH', }, }, lechwe: {
    ecology: {
      src: '/images/lechwe-taxonomy.png', alt: 'Red lechwe, wetland margin ecology and herd behaviour', }, tracking: {
      src: '/images/lechwe-horn-detail.png', alt: 'Horn and track context, lechwe field identification', }, shot: {
      src: '/images/lechwe-shot-placement.png', alt: 'Shot placement, red lechwe', }, }, 'livingstone-eland': {
    ecology: {
      src: '/images/_filename_livingstone-eland-bu_Nano_Banana_Pro_88557.jpg', alt: 'Livingstone eland bull, browse, mass, and herd ecology', }, tracking: {
      src: '/images/livingstone-eland-hunting-stalk.png', alt: 'Stalk, Livingstone eland and heavy-body recovery planning', }, shot: {
      src: '/images/livingstone-eland-horn-detail.png', alt: 'Spiral horn mass and entry angles, eland shot discipline', }, }, 'red-hartebeest': {
    ecology: {
      src: '/images/2red-hartebeest-bull-standing-01.png', alt: 'Red hartebeest bull, open veld grazing and shoulder hump', }, tracking: {
      src: '/images/3red-hartebeest-cow-bushveld-01.png', alt: 'Hartebeest sign, herd movement and glassing', }, shot: {
      src: '/images/redhardt_Shotplacement.png', alt: 'Vital triangle, red hartebeest shot placement', }, }, springbok: {
    ecology: {
      src: '/images/3springbok-ewe-bushveld-01.png', alt: 'Springbok on plains, pronking, herds, and mixed feeding', }, tracking: {
      src: '/images/4springbok-ram-portrait-02.png', alt: 'Springbok ram, long-range observation and approach', }, shot: {
      src: '/images/springbok-shot-placement.png', alt: 'Tight vital zone, springbok ethical shot placement', }, }, }

/** Supplemental metadata keywords, Limpopo, SCI, Rowland Ward, behaviour terms. */
export const SPECIES_SEO_KEYWORDS: Record<SpeciesSlug, string[]> = {
  'greater-kudu': [
    'Grey Ghost', 'Tragelaphus strepsiceros hunting', 'kudu rut Limpopo', 'spiral horn', 'sweetveld thicket', 'bonded bullet kudu', 'trophy kudu Thabazimbi', ], wildebeest: [
    'blue wildebeest', 'Connochaetes taurinus', 'wildebeest rut', 'horn boss', 'concentrate grazer', 'Limpopo plains game', ], 'golden-wildebeest': [
    'golden wildebeest Limpopo', 'colour morph hunting', 'Connochaetes taurinus golden', 'exclusive use safari trophies', ], impala: [
    'Aepyceros melampus', 'impala rut', 'lyrate horn', 'mixed feeder', 'plains game rifle', ], 'dapple-impala': [
    'dapple impala SCI', 'Aepyceros melampus colour variant', 'Limpopo impala hunting', ], gemsbok: [
    'Oryx gazella', 'gemsbok dermal shield', 'Kalahari oryx', 'monolithic bullet', 'desert adaptation', 'SCI gemsbok', ], warthog: [
    'Phacochoerus africanus', 'warthog tusk trophy', 'rooting behaviour', 'aardvark burrow', 'opportunity plains game', ], blesbok: [
    'Damaliscus pygargus phillipsi', 'blesbok blaze', 'highveld grassland', 'ringed horns', ], bushbuck: [
    'Tragelaphus sylvaticus', 'riverine bushbuck', 'Prince of the Thickets', 'dagger horns', ], 'cape-buffalo': [
    'Syncerus caffer', 'dangerous game Limpopo', 'buffalo boss', '.375 H&H', 'dagga boy', ], lechwe: [
    'Kobus leche', 'red lechwe', 'wetland antelope', 'SCI Method 7 lechwe', ], 'livingstone-eland': [
    'Taurotragus oryx livingstonii', 'eland spiral horn', 'heavy calibre plains game', 'browser grazer', ], 'red-hartebeest': [
    'Alcelaphus buselaphus caama', 'hartebeest horn heart shape', 'selective grazer', 'open veld hunting', ], springbok: [
    'Antidorcas marsupialis', 'pronking', 'dorsal fan', 'Karoo springbok', 'national emblem', ], }
