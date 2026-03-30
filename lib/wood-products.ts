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
    id: 'geelhak-12kg', name: 'Geelhak', weight: '12kg', price: 25, moq: 50, unitLabel: 'bag', description:
      'Dense hardwood thermal mass. Sustained output for closed-combustion fireplaces, pizza ovens, and high-duty braais.', image: '/images/_filename_Thabazimbi_N_198jpeg_Nano_Banana_Pro_00728.jpg', imageAlt: 'Geelhak 12kg bags - MIWESU thermal wood', }, {
    id: 'braai-mix-12kg', name: 'Braai Mix', subtitle: '12kg sakkies', weight: '12kg', price: 25, moq: 50, unitLabel: 'bag', description:
      'Engineered hardwood blend, predictable BTU curve for mixed firing: grills, ovens, and inserts.', image: '/images/_filename_wood-macro-grainjpg__Nano_Banana_Pro_31490.jpg', imageAlt: 'Braai mix 12kg bags - MIWESU thermal wood', }, {
    id: 'sekelbos-30kg', name: 'Sekelbos', subtitle: '30kg sakke', weight: '30kg', price: 75, moq: 20, unitLabel: 'bag', description: 'Yellow bark, red heart. Aromatic density for the serious braai.', image: '/images/_filename_Panoramicjpg_style_P_Nano_Banana_Pro_26379.jpg', imageAlt: 'Sekelbos 30kg bags - MIWESU thermal wood', }, {
    id: 'braai-mix-30kg', name: 'Braai Mix', subtitle: '30kg', weight: '30kg', price: 75, moq: 20, unitLabel: 'bag', description:
      '30kg line, maximum bulk efficiency per unit. Same engineered blend; logistics-optimised for volume buyers.', image: '/images/residences-main-lodge-boma-braai.jpg', imageAlt: 'Braai mix 30kg bags - MIWESU thermal wood', }, ]
