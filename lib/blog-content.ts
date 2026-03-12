/**
 * Full article content for blog pillars (used by dynamic [slug] route).
 * Key = slug. Value = array of sections { h2, paragraphs }.
 */
export type BlogSection = { h2: string; paragraphs: string[] }

const content: Record<string, BlogSection[]> = {
  'saps-520-firearm-permit-us-hunters': [
    {
      h2: 'The legal landscape of South African firearm importation',
      paragraphs: [
        'Importing firearms for a conservation harvest in South Africa involves clear legal requirements. The SAPS 520 form is the South African Police Service document that authorises the temporary import of firearms and ammunition. For US hunters, coordination with CBP Form 4457 (Certificate of Registration for Personal Effects Taken Abroad) is also critical. At MIWESU, we advise all international guests to begin the process well in advance and to use our free SAPS 520 PDF generator to pre-fill the paperwork.',
      ],
    },
    {
      h2: 'SAPS 520 requirements and common pitfalls at O.R. Tambo',
      paragraphs: [
        'The SAPS 520 must be completed in full and submitted before you travel. Common pitfalls include expired CBP Form 4457 dates (US Customs and Border Protection), serial number mismatches, and missing endorsements. Our generator ensures all fields are correctly formatted so that on arrival at O.R. Tambo International Airport, your declaration matches your documentation. Thabazimbi and the Makoppa district are a short transfer from Johannesburg.',
      ],
    },
    {
      h2: 'Step-by-step: processing your paperwork efficiently',
      paragraphs: [
        'Gather your passport, flight details, and firearm specifications. Complete the Miwesu SAPS 520 generator with applicant details and up to four firearms. Download the PDF and submit it as required by SAPS. Renew your CBP Form 4457 if it is near expiry. On arrival, present both documents. Our concierge can assist with transfer logistics to the reserve. Fair Chase and PHASA-compliant practices start with compliant paperwork.',
      ],
    },
  ],
  '300-win-mag-blue-wildebeest-terminal-performance': [
    {
      h2: 'Blue Wildebeest: the Poor Man\'s Buffalo',
      paragraphs: [
        'Connochaetes taurinus, the Blue Wildebeest, is often called the "Poor Man\'s Buffalo" for good reason. Its dense chest, heavy bone, and tenacity make it one of the toughest plains game species. In the Waterberg and Makoppa district, where MIWESU operates, these animals thrive in the Arid Sweet Bushveld. Terminal performance matters: a well-placed shot with adequate energy ensures a quick, ethical harvest consistent with our Guardian\'s Pledge.',
      ],
    },
    {
      h2: 'Kinetic energy and bullet selection in the brush',
      paragraphs: [
        'The .300 Win Mag delivers sufficient kinetic energy for Blue Wildebeest at typical bushveld ranges. Premium bonded bullets (e.g. Hornady ELD-X, Berger VLD) retain weight and penetrate through muscle and bone. In thick vegetation, shot placement trumps raw power. Our professional trackers at MIWESU assist with positioning for broadside or quartering-away shots. Rowland Ward minimum for the species is 28 1/2"; we manage for trophy quality year-round.',
      ],
    },
    {
      h2: 'Shot placement and wound channel reality',
      paragraphs: [
        'Heart-lung placement behind the shoulder is the gold standard. Quartering-away angles allow deep penetration through the vitals. Avoid marginal angles and ensure a clear exit path. The conservation harvest at MIWESU is science-led: harvest quotas follow our annual ecological census. When you book a stay, you are engaging with an operation that prioritises Fair Chase and PHASA standards.',
      ],
    },
  ],
  'exclusive-16-sleeper-luxury-lodge-thabazimbi': [
    {
      h2: 'From Alberton and Gauteng to the Makoppa Dome',
      paragraphs: [
        'Thabazimbi is roughly two to three hours from Johannesburg, making it an ideal weekend or corporate retreat destination. The malaria-free Makoppa Dome offers safety and exclusivity. MIWESU\'s Homestead is a 16-sleeper, exclusive-use lodge on D1432 in the Makoppa district. No shared facilities, no day visitors: your group has the run of the property. Conservation harvest, wildlife viewing, or pure relaxation; the choice is yours.',
      ],
    },
    {
      h2: 'The Homestead: architecture and amenities',
      paragraphs: [
        'The main lodge features four bedrooms, a chef\'s kitchen, and open living areas. The Lapa with wet bar is the social hub; the private boma is where evenings turn into stories. The bespoke swimming pool with multi-slide complex caters to families and groups. Fiber optic internet is available for those who need to stay connected. This is bespoke bushveld living at scale: 16 sleepers, one group, absolute privacy.',
      ],
    },
    {
      h2: 'Booking and availability',
      paragraphs: [
        'Exclusive use means the calendar is yours once confirmed. Check availability for your dates and submit an enquiry. Our concierge will confirm rates and logistics. The Homestead is the choice for corporate safari retreats, large families, and hunting syndicates from Gauteng and beyond. Guardian\'s Pledge and Conservation Harvest principles apply to every stay.',
      ],
    },
  ],
  'art-of-authentic-south-african-biltong-making': [
    {
      h2: 'The cultural heritage of the South African biltong hunt',
      paragraphs: [
        'Biltong is inseparable from South African hunting culture. At MIWESU, the conservation harvest yields venison that can be processed into biltong using traditional methods. The Arid Sweet Bushveld climate of the Makoppa district, Thabazimbi, is well suited to air-drying. We support sustainable use and the Guardian\'s Pledge: every animal is respected, and 100% of harvested meat is utilised, including donation to local communities.',
      ],
    },
    {
      h2: 'Processing: cuts, vinegar, and coriander',
      paragraphs: [
        'Silverside and topside are the preferred cuts. Brown grape vinegar is used in the cure; roasted coriander and salt form the classic spice profile. The meat is hung in a well-ventilated, dry environment. In the Limpopo bushveld, conditions often align with ideal drying parameters. The result is a flavourful, protein-rich product that honours the animal and the tradition.',
      ],
    },
    {
      h2: 'Yield economics: the 38% conversion rate',
      paragraphs: [
        'From wet carcass to dry biltong, a standard conversion rate in South African processing is around 38%. Species, fat content, and cut selection affect the final yield. Use the Miwesu Biltong Yield Calculator to estimate dry biltong from wet carcass weight for any of our 14 managed species. It is a practical tool for planning and for understanding the economics of your harvest.',
      ],
    },
  ],
  'rowland-ward-trophy-standards-greater-kudu': [
    {
      h2: 'The Grey Ghost and the mountain thickets',
      paragraphs: [
        'Greater Kudu (Tragelaphus strepsiceros) is the "Grey Ghost" of the bushveld: elusive, intelligent, and spectacularly horned. At MIWESU, in the Makoppa district, they inhabit the dense Acacia thickets and koppies. The 2.5-billion-year-old geology of the Ancient Penge Formation underpins the nutrient base that supports horn growth. Our annual ecological census informs sustainable harvest quotas so trophy quality remains high.',
      ],
    },
    {
      h2: 'Rowland Ward measurement methodology',
      paragraphs: [
        'Rowland Ward measures the longer horn along the spiral from tip to base. The minimum for Greater Kudu is 53 7/8 inches. This standard reflects decades of record-keeping and genetic selection. At MIWESU we manage for animals that can meet and exceed this benchmark. Fair Chase and PHASA-compliant hunting are non-negotiable; the Conservation Harvest narrative is one of stewardship, not exploitation.',
      ],
    },
    {
      h2: 'Seasonal intelligence and the rut',
      paragraphs: [
        'The Kudu rut influences behaviour and visibility. Winter months (May–August) often improve sight lines as deciduous foliage thins. Early morning and late afternoon are prime. Our professional hunters and trackers know the ground and the animals. For specific trophy expectations and conservation quotas, contact the MIWESU concierge. We are here to match your goals with what the reserve can sustainably offer.',
      ],
    },
  ],
  'ethical-shot-placement-cape-buffalo-fused-boss': [
    {
      h2: 'The apex dangerous game: density and anatomy',
      paragraphs: [
        'Cape Buffalo (Syncerus caffer) is one of Africa\'s most formidable species. The fused boss—the hardened bone plate on the skull—makes frontal brain shots a specialist’s domain. For most hunters, broadside or quartering-away shots into the heart-lung area are the ethical choice. South African law mandates a minimum .375 H&H Magnum for buffalo; 300-grain monolithic solids are the norm for reliable penetration.',
      ],
    },
    {
      h2: 'Legal minimum and bullet selection',
      paragraphs: [
        'The .375 H&H is the legal minimum in South Africa for dangerous game. At MIWESU we do not compromise on caliber or bullet construction. Monolithic solids ensure deep penetration through heavy muscle and bone. The Guardian\'s Pledge commits us to a clean kill and to the expertise of our tracking teams. Ethical shot placement is the cornerstone of the Conservation Harvest.',
      ],
    },
    {
      h2: 'Broadside vs quartering-away',
      paragraphs: [
        'Broadside: aim one-third up the body, just behind the shoulder. Quartering-away: aim for the off-side shoulder so the bullet crosses the vitals. Avoid marginal angles and ensure a clear path to the heart or lungs. Our PHASA-aligned team is on hand to advise and to follow up if required. Fair Chase and respect for the animal define the MIWESU experience.',
      ],
    },
  ],
  'malaria-free-celestial-safaris-waterberg': [
    {
      h2: 'Why malaria-free matters',
      paragraphs: [
        'The Makoppa Dome and Waterberg region are malaria-free. That is a significant advantage for international families and for travellers who prefer to avoid prophylactics. Unlike parts of the Greater Kruger, Thabazimbi and the Limpopo bushveld around MIWESU offer dark skies and safe, multi-generational travel. Celestial safaris and stargazing have become a signature non-hunting experience.',
      ],
    },
    {
      h2: 'Dark-sky tourism and wellness in 2026',
      paragraphs: [
        'Dark-sky tourism is growing. At MIWESU, private astronomy sessions are available at the sanctuary. The Stone Villa has a bespoke stargazing deck and telescope. After a day of wildlife viewing or conservation activities, guests can spend the evening under the African sky. It is luxury observation in a malaria-free, low-light-pollution environment.',
      ],
    },
    {
      h2: 'From afternoon wildlife to evening astronomy',
      paragraphs: [
        'A typical day can move from morning game drive or walk to lunch at the lodge, then an afternoon at the pool or in the boma. As light fades, the telescope and deck become the focus. The "A Day in Eden" timeline on our site captures this rhythm. For the luxury observer and the non-hunting partner, celestial safaris are a compelling reason to choose the Waterberg and MIWESU.',
      ],
    },
  ],
  'conservation-harvest-esg-environmental-stewardship': [
    {
      h2: 'Defining the Conservation Harvest',
      paragraphs: [
        'The Conservation Harvest is MIWESU\'s proprietary framework. It is not commercial trophy hunting in the abstract; it is harvest dictated by scientific wildlife census data and ecological carrying capacities. Which species, and how many, are determined by the reserve’s biology. This narrative separates us from operations driven solely by market demand and aligns with ESG (Environmental, Social, Governance) expectations.',
      ],
    },
    {
      h2: 'Census, quotas, and science',
      paragraphs: [
        'Annual ecological census informs what we can sustainably harvest. Quotas are set to maintain population health and genetic diversity. The 14 species we manage—from Greater Kudu to Cape Buffalo, Impala to Livingstone Eland—are part of a single ecological picture. The Guardian\'s Pledge binds us to silence, Fair Chase, and respect for the ecosystem. PHASA and industry standards underpin our practice.',
      ],
    },
    {
      h2: 'ESG impact: meat donation and anti-poaching',
      paragraphs: [
        '100% of harvested meat is processed and utilised. A significant portion is donated to feed hundreds of local families monthly, addressing protein security in the region. Guest revenue funds 24/7 anti-poaching and habitat work. Our Live Telemetry Dashboard exposes real-time metrics: hectares protected, community investment, and operational transparency. This is how the Iron Eden demonstrates trust and stewardship.',
      ],
    },
  ],
  'bespoke-bushveld-living-fiber-optic-internet': [
    {
      h2: 'Ancient geology, modern connectivity',
      paragraphs: [
        'The Makoppa Dome sits on 2.5-billion-year-old Swazian granite and gneiss. Yet The Homestead and The Stone Villa offer fiber optic internet. For corporate retreats and extended stays, seamless connectivity is non-negotiable. At MIWESU you can work from the bushveld without sacrificing bandwidth. It is bespoke bushveld living with state-of-the-art infrastructure.',
      ],
    },
    {
      h2: 'Work-from-anywhere at both residences',
      paragraphs: [
        'Both the 16-sleeper Homestead and the 6-sleeper Stone Villa are equipped for remote work. Video calls, large file transfers, and streaming are supported. After screen time, Mobile Wellness sessions using indigenous Marula oils offer balance. The contrast between deep-time geology and sub-second latency is deliberate: we cater to those who refuse to choose between wilderness and productivity.',
      ],
    },
    {
      h2: 'Corporate retreats and custom itineraries',
      paragraphs: [
        'For custom itineraries and corporate retreat brochures, contact the MIWESU concierge. We can outline availability, activities, and how a stay supports the Conservation Harvest and community impact. High-speed internet game lodge Limpopo is not an oxymoron here; it is the standard.',
      ],
    },
  ],
  'golden-vs-blue-wildebeest-african-plains-game': [
    {
      h2: 'Genetic origins of the Golden variant',
      paragraphs: [
        'The Golden Wildebeest is a colour variant of the Blue Wildebeest (Connochaetes taurinus), with origins linked to the Limpopo river basin. The golden or copper coat is highly sought after. At MIWESU we manage both Blue and Golden Wildebeest in the Arid Sweet Bushveld. Behavioural and habitat overlap mean similar tactics and caliber choices apply.',
      ],
    },
    {
      h2: 'Behaviour, habitat, and ballistics',
      paragraphs: [
        'Both are tough grazers. The .300 Win Mag or .375 H&H with premium bonded bullets is appropriate for either. Shot placement and bullet construction matter more than caliber wars. Rowland Ward minimum for both is 28 1/2 inches. Our ecological census determines availability; our trackers and professional hunters support a clean, ethical harvest in line with the Guardian\'s Pledge.',
      ],
    },
    {
      h2: 'Compare all species at MIWESU',
      paragraphs: [
        'Use our Compare Species tool to view side-by-side data for the 14 managed species. Ballistics, habitat, and trophy minimums are summarised in one place. It is a practical resource for the technical hunter planning a conservation harvest in the Makoppa district, Thabazimbi.',
      ],
    },
  ],
  'limpopo-hunting-season-2026-weather-tactics': [
    {
      h2: 'From summer rainfall to dry winter',
      paragraphs: [
        'Limpopo experiences summer rainfall. By May through August, the bushveld dries and deciduous foliage thins. Visibility improves and stalking becomes more feasible. At MIWESU, in the Makoppa district near Thabazimbi, the winter months are peak for many hunters. Cool mornings and warm days are the norm; packing should include layers and sun protection.',
      ],
    },
    {
      h2: 'Visibility and stalking opportunities',
      paragraphs: [
        'The shedding of leaves in the Lowveld and Bushveld opens sight lines. Species such as Kudu, Wildebeest, and Eland are more visible in the winter months. Early-season (April–May) vs late-season (July–August) each have advantages; our team can advise based on the 14 species you are targeting. Booking early secures your preferred dates.',
      ],
    },
    {
      h2: 'Packing and booking',
      paragraphs: [
        'Pack for cool dawn and dusk and warm midday. Neutral, breathable clothing and quality boots are essential. A hat, sunscreen, and binoculars round out the kit. Check our live availability calendar for real-time dates. The Conservation Harvest at MIWESU is seasonal in rhythm but year-round in commitment to Fair Chase and PHASA standards.',
      ],
    },
  ],
  'livingstone-eland-harvesting-africas-largest-antelope': [
    {
      h2: 'Biology of the Livingstone Eland',
      paragraphs: [
        'The Livingstone Eland (Taurotragus oryx livingstonii) is Africa\'s largest antelope. Distinctive dewlap and spiraled horns define the bull. At MIWESU they occur in the open bushveld and thicker country. Their size and stamina make them a demanding quarry; heavy plains game calibers are the norm.',
      ],
    },
    {
      h2: 'Caliber: .338 Win Mag and 9.3x62mm',
      paragraphs: [
        'The .338 Win Mag and the classic 9.3x62mm are both appropriate for Livingstone Eland. Bullet weight and construction matter: use premium expanding or bonded projectiles that penetrate deeply. Rowland Ward minimum is 35 inches. Our professional hunters and trackers assist with positioning and follow-up. The Conservation Harvest includes Eland when census and quotas allow.',
      ],
    },
    {
      h2: 'Tracking and trophy expectations',
      paragraphs: [
        'Eland herds can cover ground quickly. Tracking in the Makoppa district demands fitness and patience. For large plains game packages and specific trophy expectations, contact the MIWESU concierge. We tailor enquiries to what the reserve can sustainably offer and to your experience level.',
      ],
    },
  ],
  'stone-villa-experience-intimate-luxury-makoppa': [
    {
      h2: 'The 6-sleeper boutique lodge',
      paragraphs: [
        'The Stone Villa is MIWESU\'s intimate option: two bedrooms, six sleepers, full exclusivity. Master en-suite, second bedroom with bunks, open-plan kitchen and living, and a Nespresso machine for morning coffee. It is luxury boutique game lodge living in the Limpopo bushveld, Thabazimbi.',
      ],
    },
    {
      h2: 'Outdoor braai and Miwesu Premium Firewood',
      paragraphs: [
        'The outdoor braai overlooks the dam. We supply Miwesu Premium Firewood (Sekelbos, Geelhak, Braai Mix) for an authentic bushveld braai. The sensory experience—smoke, stars, silence—is central to the Stone Villa. Full access to the reserve\'s 4x4 tracks and activities is included; privacy at the villa is absolute.',
      ],
    },
    {
      h2: 'Exclusive romantic and small-family getaways',
      paragraphs: [
        'Ideal for couples, small families, or a small group seeking a 6-sleeper private safari villa. The stargazing deck and telescope add a celestial dimension. For availability and direct booking, use our enquiry form. The Stone Villa experience is intimate luxury in the Makoppa Dome.',
      ],
    },
  ],
  'south-africa-vs-usa-hunting-regulations': [
    {
      h2: 'Federal-state vs national-provincial systems',
      paragraphs: [
        'The United States operates a federal-state system (e.g. Migratory Bird Treaty Act, state game laws). South Africa uses national and provincial frameworks; NEMBA (National Environmental Management: Biodiversity Act) and provincial regulations govern hunting and wildlife. Understanding both helps international hunters comply and plan.',
      ],
    },
    {
      h2: 'PHASA and ethical standards',
      paragraphs: [
        'The Professional Hunters\' Association of South Africa (PHASA) enforces ethical and operational standards. At MIWESU we align with PHASA and the Guardian\'s Pledge. Fair Chase, correct documentation, and respect for the animal and the environment are non-negotiable. Our concierge can outline how we support compliance.',
      ],
    },
    {
      h2: 'CITES and trophy export',
      paragraphs: [
        'CITES permits may be required for certain species when exporting trophies. Timing and paperwork must be exact to avoid delays. We offer administrative support for legal and taxidermy logistics. Contact the MIWESU concierge for full assistance with South African and international requirements.',
      ],
    },
  ],
  'transparency-conservation-live-telemetry-dashboard': [
    {
      h2: 'From opaque to transparent management',
      paragraphs: [
        'The Live Telemetry Dashboard is MIWESU\'s commitment to transparency. Real-time operational data is pulled via server-side rendering into a Liquid Glass-style interface. Hectares protected, anti-poaching hours logged, community investment, and commercial kiln telemetry (moisture and temperature for firewood) are visible. This validates E-E-A-T and the premium nature of the Iron Eden experience.',
      ],
    },
    {
      h2: 'Metrics that matter',
      paragraphs: [
        'Conservation impact (hectares, anti-poaching, community ZAR) and firewood kiln data are updated regularly. The dashboard is available on our site and can be embedded in blog posts and reports. For eco-tourism advocates and luxury observers, it is proof that the Conservation Harvest and Guardian\'s Pledge are operational reality, not marketing.',
      ],
    },
    {
      h2: 'View the dashboard',
      paragraphs: [
        'Use our Tools page to open the Live Telemetry Dashboard. See for yourself how wildlife conservation technology and algorithmic trust are applied at a luxury safari operation in the Makoppa district, Thabazimbi. The Iron Eden is built on radical trust.',
      ],
    },
  ],
}

export function getBlogContent(slug: string): BlogSection[] | undefined {
  return content[slug]
}
