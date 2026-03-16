/**
 * Rooibok Kraal / Hunter's House terms and conditions.
 * Shown on rates and booking; linked from footer if needed.
 */

export const BOOKING_TERMS = {
  minNights: 3,
  huntersHouseMinGuests: 4,
  huntersHouseMaxGuests: 16,
  children0to3: 'Free',
  children4to10: '50% of per person rate',
  children10Plus: 'Full price',
  vehicleFee: 'R750 per booking (vehicle / bakkie fee)',
  woundedAnimals: 'Wounded animals are charged at full price.',
  missedShots: 'Missed shots, dust shots, and warning shots: R250 each.',
  availability: 'All animals and dates are subject to availability and season.',
  dailyRate: 'Daily rate applies as per per person per night.',
}

export const TERMS_SECTIONS = [
  {
    title: 'Accommodation',
    items: [
      `Hunter's House: R850 per person per night. Minimum 4 people, maximum 16. Additional sleeping space for 4. Minimum 3 nights.`,
      `Children: 0–3 years free; 4–10 years 50% of rate; 10+ years full price.`,
      `Vehicle (bakkie) fee: R750 per booking.`,
    ],
  },
  {
    title: 'Conservation harvest',
    items: [
      'Wounded animals are charged at full price.',
      'Missed shots, dust shots, and warning shots: R250 each.',
      'All animals and dates are subject to availability and season.',
    ],
  },
  {
    title: 'General',
    items: [
      'Rooibok Kraal is 50 km from Thabazimbi on the Dwaalboom road.',
      'Rates and species are subject to change. Confirm with concierge at time of booking.',
    ],
  },
] as const
