/**
 * Home page FAQ, factual copy only; paired with FAQPage JSON-LD @graph on `/`.
 */
export type HomeFaqItem = { question: string; answer: string }

export const HOME_PAGE_FAQ_ITEMS: HomeFaqItem[] = [
  {
    question: 'What is the ethical caliber for Cape Buffalo in Thabazimbi?',
    answer:
      'South African law sets a minimum calibre for dangerous game such as Cape Buffalo, typically .375 H&H Magnum or equivalent, with appropriate premium solids. Final suitability depends on your professional hunter, conditions, and current regulations. Contact the MIWESU concierge for planning; we do not replace professional hunting or legal advice.',
  },
  {
    question: 'Do you handle SAPS 520 firearm permits?',
    answer:
      'We host a free SAPS 520 PDF preparation tool on miwesu.co.za so you can organise your temporary firearm import paperwork. Submission, approval, and any police interviews are between you and the South African Police Service; MIWESU does not issue permits.',
  },
  {
    question: 'Is MIWESU malaria-free?',
    answer:
      'The Waterberg area around Thabazimbi is widely regarded as malaria-free or very low risk compared to many lowveld reserves. Always confirm current health guidance with your travel clinic before travel.',
  },
  {
    question: 'How do I book an exclusive-use stay?',
    answer:
      'Lodge stays are enquiry-first: there is no public checkout. Use the book or contact flow to request dates; the team will respond with availability and next steps.',
  },
  {
    question: 'What plains game species are available?',
    answer:
      'MIWESU manages fourteen plains-game species for ethical rifle and bow hunting under quota and the Guardian’s Pledge. See the wildlife hub and individual species pages for profiles, or use the compare tool.',
  },
  {
    question: 'How do I get to the farm from Johannesburg?',
    answer:
      'MIWESU lies on D1432 in the Makoppa district near Thabazimbi, Limpopo. Most guests drive or arrange road transfer from Johannesburg or Pretoria; your concierge can suggest timing and drop-off details once dates are in play.',
  },
  {
    question: 'Do you offer bow hunting?',
    answer:
      'Yes, ethical bow hunting is part of the conservation harvest where quotas and conditions allow, always under professional hunter guidance and fair-chase standards. Spell out bow preferences in your enquiry so the team can confirm fit for your dates.',
  },
  {
    question: 'Are observers and non-hunters welcome?',
    answer:
      'Yes. Wildlife viewing, photography, and shared time at the residences are part of how MIWESU is run. Observers book with the group; activities and expectations are aligned in advance with the concierge.',
  },
  {
    question: 'What should I expect on rates and packages?',
    answer:
      'Published rates are a guide; confirmed pricing depends on season, party size, species interest, and length of stay. Serious enquiries receive a clear breakdown in writing after a short scoping conversation.',
  },
  {
    question: 'How does trophy export and paperwork work?',
    answer:
      'Trophy handling, dip and pack, and CITES or export steps vary by species and destination. Your PH and the concierge outline the correct sequence for your hunt; allow lead time and use accredited agents where required.',
  },
  {
    question: 'What is included in a typical lodge stay?',
    answer:
      'Exclusive-use residences, core hospitality, and access described in your booking confirmation. Exact inclusions are matched to your itinerary (hunting vs leisure emphasis); ask the concierge for a itemised summary before you commit.',
  },
  {
    question: 'When is the best time to visit for hunting?',
    answer:
      'Many guests favour the dry bush months for visibility (roughly May–September), but the right window depends on species, veld conditions, and personal goals. The team will advise honestly for your shortlist once they know your dates and priorities.',
  },
]
