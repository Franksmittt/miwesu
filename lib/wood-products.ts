/**
 * MIWESU thermal wood product catalogue.
 * Update images when client provides product photos.
 */
export interface WoodProduct {
  id: string
  name: string
  subtitle?: string
  weight: string
  price: number
  moq: number
  unitLabel: string
  description: string
  image: string
  imageAlt: string
}

export const WOOD_PRODUCTS: WoodProduct[] = [
  {
    id: 'geelhak-12kg',
    name: 'Geelhak',
    weight: '12kg',
    price: 25,
    moq: 50,
    unitLabel: 'bag',
    description: 'Dense, dark hardwood. Sustained heat for long braais.',
    image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg',
    imageAlt: 'Geelhak 12kg bags - MIWESU thermal wood',
  },
  {
    id: 'braai-mix-12kg',
    name: 'Braai Mix',
    subtitle: '12kg sakkies',
    weight: '12kg',
    price: 25,
    moq: 50,
    unitLabel: 'bag',
    description: 'Hardwood mix in 12kg bags. Versatile and consistent burn.',
    image: '/images/home-origins-soil.jpg',
    imageAlt: 'Braai mix 12kg bags - MIWESU thermal wood',
  },
  {
    id: 'sekelbos-30kg',
    name: 'Sekelbos',
    subtitle: '30kg sakke',
    weight: '30kg',
    price: 75,
    moq: 20,
    unitLabel: 'bag',
    description: 'Yellow bark, red heart. Aromatic density for the serious braai.',
    image: '/images/about-dust-road.jpg',
    imageAlt: 'Sekelbos 30kg bags - MIWESU thermal wood',
  },
  {
    id: 'braai-mix-30kg',
    name: 'Braai Mix',
    subtitle: '30kg',
    weight: '30kg',
    price: 75,
    moq: 20,
    unitLabel: 'bag',
    description: 'Engineering-grade hardwood mix. Long burn, Gauteng delivery.',
    image: '/images/residences-homestead-boma.jpg',
    imageAlt: 'Braai mix 30kg bags - MIWESU thermal wood',
  },
]
