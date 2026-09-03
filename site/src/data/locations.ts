export interface RichContent {
  intro: string;
  localChallenges: {
    title: string;
    description: string;
  }[];
  landmarks: string[];
  caseStudies: {
    title: string;
    problem: string;
    solution: string;
  }[];
  localFaqs: {
    question: string;
    answer: string;
  }[];
  councilInfo?: string;
  suburbHighlights?: {
    name: string;
    note: string;
  }[];
}

export interface LocationData {
  name: string;
  slug: string;
  region: string;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  postalCode?: string;
  suburbs: string[];
  keySuburbs: [string, string, string];
  testimonials: {
    text: string;
    author: string;
    location: string;
  }[];
  richContent?: RichContent;
}

function generateTestimonials(keySuburbs: [string, string, string]): LocationData["testimonials"] {
  return [
    {
      text: `Called at 7am from ${keySuburbs[0]}, they had the driveway safe before school pickup. Clear, honest and tidy.`,
      author: "Sarah",
      location: keySuburbs[0],
    },
    {
      text: "Professional team who knew exactly what to do. They stabilised our collapsed driveway edge within hours and came back to finish the permanent repair the next week.",
      author: "Michael",
      location: keySuburbs[1],
    },
    {
      text: "Transparent pricing, no hidden costs. They walked us through every option and let us decide what worked for our budget.",
      author: "Jennifer",
      location: keySuburbs[2],
    },
  ];
}

export const locations: LocationData[] = [
  {
    name: "Woollahra",
    slug: "driveway-repair-woollahra",
    region: "Eastern Suburbs",
    h1: "Driveway Repair Woollahra",
    metaTitle: "Driveway Repair Woollahra | Sydney Driveway Repair",
    metaDescription: "Driveway repair in Woollahra means we make a cracked, sunken, or collapsed drive safe the same day, then quote the lasting repair — Heritage Conservation Areas, Moreton Bay fig root heave at Bellevue Hill, salt scaling on Rose Bay and Vaucluse, and tight Paddington lanes. Call 0480 893 502 or Request Callback.",
    postalCode: "2025",
    suburbs: [
      "Bellevue Hill", "Darling Point", "Double Bay", "Edgecliff",
      "Paddington", "Point Piper", "Rose Bay", "Vaucluse",
      "Watsons Bay", "Woollahra",
    ],
    keySuburbs: ["Rose Bay", "Bellevue Hill", "Double Bay"],
    testimonials: [
      {
        text: "Our sandstone driveway off Victoria Road in Bellevue Hill kept lifting where a council Moreton Bay fig had pushed under the boundary. The team staged the repair around school traffic, documented the stone match for our heritage streetscape, and rebuilt the edge so it no longer catches low cars.",
        author: "Emma T.",
        location: "Bellevue Hill",
      },
      {
        text: "After years of salt exposure near New South Head Road, our Double Bay pavers were crumbling and the joints were washing out. They replaced only the failed sections, re-set drainage to the street channel, and left the entry clean enough for inspections the next morning.",
        author: "Daniel R.",
        location: "Double Bay",
      },
      {
        text: "Access in our Paddington rear lane was tight and every contractor said it was too hard. These guys used compact gear, fixed the cracking at the garage threshold, and kept us compliant with council crossover requirements without dragging the job out for weeks.",
        author: "Nina L.",
        location: "Paddington",
      },
    ],
    richContent: {
      intro: "Driveway repair in Woollahra means we make a cracked, sunken, or collapsed drive safe the same day, then quote the lasting repair — Heritage Conservation Areas, Moreton Bay fig root heave at Bellevue Hill, salt scaling on Rose Bay and Vaucluse, and tight Paddington lanes. Call 0480 893 502 or Request Callback.",
      localChallenges: [
        {
          title: "Heritage streetscape controls across Woollahra and Paddington",
          description: "In heritage precincts, driveway work is not just structural; appearance and street presentation are scrutinized. Altering crossover width, replacing traditional pavers with plain concrete, or changing levels at the boundary can require council assessment. We scope the repair so owners can restore safety without triggering avoidable redesign costs, and where approvals are needed we document finish, levels and edge details up front.",
        },
        {
          title: "Root heave from mature figs and established canopy streets",
          description: "Around Bellevue Hill, Woollahra and Rose Bay, mature figs and large avenue trees commonly displace driveway edges. The failure usually starts at side joints and near kerb returns, then spreads into wheel paths. We cut out pressure zones, rebuild base support, and reset edge restraints so the repaired section tolerates ongoing root movement better than a basic cosmetic patch.",
        },
        {
          title: "Steep grades in Point Piper and Vaucluse",
          description: "Steeper harbour-side driveways fail differently: braking and turning loads polish or delaminate surfaces, and poorly set falls send water toward garages instead of the street. Repairs must restore traction, correct drainage and protect thresholds from runoff. We rebuild failed sections with grade-appropriate finishes and transitions so high-value vehicles can enter without scraping or slipping in wet weather.",
        },
        {
          title: "Salt exposure near Rose Bay and harbour foreshore streets",
          description: "Salt spray and humid marine air speed up concrete surface breakdown, joint erosion and corrosion around reinforcement in older slabs. Properties closer to New South Head Road, Rose Bay waterfront pockets and Vaucluse cliffs show faster wear even when traffic is light. We specify repair materials and seal systems suited to marine exposure so the fix does not deteriorate after one coastal summer.",
        },
      ],
      landmarks: [
        "New South Head Road",
        "Queen Street Woollahra village",
        "Rose Bay Ferry Wharf",
        "Double Bay village",
        "Paddington Town Hall precinct",
        "Point Piper foreshore streets",
        "Vaucluse House precinct",
      ],
      caseStudies: [
        {
          title: "Bellevue Hill sandstone edge failure beside street fig roots",
          problem: "A driveway apron near Victoria Road had recurring cracks and trip edges where root pressure lifted sandstone borders. Previous patching failed within a year and the owner was concerned about preserving the front elevation character.",
          solution: "We removed root-affected sections, rebuilt sub-base support, re-laid matching sandstone edging and tied repaired concrete into existing levels. The new layout maintained the heritage look while eliminating the hazardous lip at the street entry.",
        },
        {
          title: "Point Piper steep driveway with drainage backfall",
          problem: "On a steep Point Piper block, stormwater was running toward the garage and polished concrete had become slippery. The threshold was cracking from repeated braking loads and the owner needed a fast fix before water entered basement storage.",
          solution: "We regraded the lower run, installed controlled drainage points, replaced failed concrete panels and applied a high-grip finish suited to steep access. Water now discharges correctly and vehicle entry is stable in wet conditions.",
        },
      ],
      localFaqs: [
        {
          question: "Do I need Woollahra Council approval to repair my driveway?",
          answer: "Like-for-like repair inside your lot is often maintenance. Work on the public road reserve — kerb, layback, verge, a wider crossover — is a vehicle crossing under section 138 of the Roads Act 1993, separate from a DA. Heritage Conservation Areas also scrutinise street-facing finishes. We flag which side of the boundary you are on before work starts.",
        },
        {
          question: "Should I repair or replace a Woollahra driveway?",
          answer: "A hairline on a flat, unmoving slab can be repaired. A lip from Moreton Bay fig roots, a sandstone edge that has lifted, or a steep Point Piper run sending water to the garage is usually cut-out and rebuild — not filler. We will not overlay a slab that is still moving. Call 0480 893 502 if you need that called on site.",
        },
        {
          question: "Can you work a Paddington rear lane without blocking the street for days?",
          answer: "Yes. Those lanes will not take a full-size machine. We use compact gear, stage removal, and rebuild the failed depth — not a skim that fails at the garage threshold. Neighbours still need to get cars out; that is the access plan, not a slogan. Request Callback with the suburb and a photo of the lane.",
        },
        {
          question: "Why does the crack keep coming back next to the street fig?",
          answer: "Root pressure and moisture under the edge keep moving the joint. Filling the crack leaves the fig doing the same work next season. Durable repair here is pressure-zone cut-out, compacted base, and an edge that can take some ongoing movement — plus a make-safe so nobody catches the lip in the meantime.",
        },
      ],
      councilInfo: "Woollahra Municipal Council applies strict controls in heritage areas, and changes to vehicle crossings or streetscape-visible driveway elements may require council approval before works start.",
      suburbHighlights: [
        {
          name: "Rose Bay",
          note: "Harbour exposure means faster salt-related wear, so concrete and joint systems need coastal-grade protection.",
        },
        {
          name: "Bellevue Hill",
          note: "Large established trees and long drive lengths often cause edge lift and segmented cracking that require structural rebuilds.",
        },
        {
          name: "Double Bay",
          note: "High-end paver and stone driveways need repair methods focused on visual matching as well as load performance.",
        },
        {
          name: "Paddington",
          note: "Rear-lane access constraints make equipment size and staged scheduling critical for safe, clean repairs.",
        },
        {
          name: "Vaucluse",
          note: "Steep gradients and coastal weather increase slip risk, runoff issues and surface breakdown.",
        },
        {
          name: "Point Piper",
          note: "Very steep entries and premium finishes require precise drainage correction and traction-focused resurfacing.",
        },
      ],
    },
  },
  {
    name: "Waverley",
    slug: "driveway-repair-waverley",
    region: "Eastern Suburbs",
    suburbs: [
      "Bondi", "Bondi Beach", "Bondi Junction", "Bronte",
      "Tamarama", "Dover Heights", "Queens Park", "Waverley",
      "North Bondi", "South Bondi",
    ],
    keySuburbs: ["Bondi", "Bondi Junction", "Bronte"],
    testimonials: generateTestimonials(["Bondi", "Bondi Junction", "Bronte"]),
  },
  {
    name: "Randwick",
    slug: "driveway-repair-randwick",
    region: "Eastern Suburbs",
    suburbs: [
      "Randwick", "Coogee", "Maroubra", "Clovelly", "Kensington",
      "Kingsford", "La Perouse", "Little Bay", "Malabar",
      "Matraville", "Chifley", "South Coogee",
    ],
    keySuburbs: ["Coogee", "Maroubra", "Randwick"],
    testimonials: generateTestimonials(["Coogee", "Maroubra", "Randwick"]),
  },
  {
    name: "Bayside",
    slug: "driveway-repair-bayside",
    region: "Southern Sydney",
    suburbs: [
      "Arncliffe", "Banksia", "Bardwell Park", "Bardwell Valley",
      "Bexley", "Bexley North", "Botany", "Brighton-Le-Sands",
      "Carlton", "Dolls Point", "Eastgardens", "Eastlakes",
      "Hillsdale", "Kogarah", "Kyeemagh", "Mascot", "Monterey",
      "Pagewood", "Ramsgate", "Ramsgate Beach", "Rockdale",
      "Sans Souci", "Sandringham", "Turrella",
    ],
    keySuburbs: ["Rockdale", "Brighton-Le-Sands", "Kogarah"],
    testimonials: generateTestimonials(["Rockdale", "Brighton-Le-Sands", "Kogarah"]),
  },
  {
    name: "City of Sydney",
    slug: "driveway-repair-sydney-city",
    region: "Inner Sydney",
    h1: "Driveway Repair City of Sydney",
    metaTitle: "Driveway Repair City of Sydney | Sydney Driveway Repair",
    metaDescription: "Driveway repair in the City of Sydney is same-day make-safe for a trip lip, dropped slab, or collapsed edge on a shared terrace lane or strata apron — then a written quote. Green Square groundwater in Zetland, Waterloo and Alexandria keeps bases wet; courier vans crush short crossovers. Call 0480 893 502 or Request Callback.",
    postalCode: "2000",
    suburbs: [
      "Sydney CBD", "Surry Hills", "Darlinghurst", "Potts Point",
      "Redfern", "Waterloo", "Zetland", "Glebe", "Ultimo",
      "Pyrmont", "Chippendale", "Woolloomooloo", "Elizabeth Bay",
      "Rushcutters Bay", "Centennial Park", "Alexandria",
      "Beaconsfield", "Rosebery", "Haymarket", "The Rocks",
      "Barangaroo", "Newtown",
    ],
    keySuburbs: ["Surry Hills", "Redfern", "Zetland"],
    testimonials: [
      {
        text: "Our terrace off Crown Street in Surry Hills had a narrow shared driveway with broken edges from delivery vans. They coordinated access with neighbours, repaired the crossover to council standards, and reopened it the same evening so no one lost parking access.",
        author: "Lachlan P.",
        location: "Surry Hills",
      },
      {
        text: "In Zetland near Joynton Avenue, groundwater kept pumping through hairline cracks and the slab was sinking at the garage lip. The crew rebuilt the base, corrected drainage falls, and the puddling we had after every storm has finally stopped.",
        author: "Maya N.",
        location: "Zetland",
      },
      {
        text: "Our Redfern strata driveway behind Cleveland Street was failing where waste trucks turned in. They staged works around bin collection windows, reinforced the turning zone, and gave us clear documentation for the strata committee and insurer.",
        author: "Anthony C.",
        location: "Redfern",
      },
    ],
    richContent: {
      intro: "Driveway repair in the City of Sydney is same-day make-safe for a trip lip, dropped slab, or collapsed edge on a shared terrace lane or strata apron — then a written quote. Green Square groundwater in Zetland, Waterloo and Alexandria keeps bases wet; courier vans crush short crossovers. Call 0480 893 502 or Request Callback.",
      localChallenges: [
        {
          title: "Strata and shared-access constraints in dense inner-city blocks",
          description: "Many driveways in Redfern, Pyrmont, Glebe and Surry Hills are common property or shared rights-of-way. Repair timing must align with resident access, loading docks, bin movements and strata approvals. We plan short shutdown windows, maintain emergency access paths and deliver documentation suitable for strata records so urgent repairs can proceed without prolonged committee delays.",
        },
        {
          title: "Council permit requirements for crossovers and road reserve works",
          description: "In the City of Sydney area, altering a driveway crossover, kerb section or adjoining footpath generally requires council process compliance before construction. Jobs that ignore this can be stopped or redone. We define whether the scope is internal repair only or includes road reserve elements, then sequence works so owners avoid compliance risk and rework.",
        },
        {
          title: "Groundwater and drainage pressure in Zetland-Waterloo-Alexandria pockets",
          description: "Former low-lying and reclaimed precincts around Green Square frequently show persistent damp subgrade, ponding and slab settlement near garage thresholds. Standard patching often fails because the base remains saturated. We rebuild with drainage-aware detailing, compacted base replacement and movement treatment so repaired sections stay stable under recurring wet conditions.",
        },
        {
          title: "Heavy turning loads from service and delivery vehicles",
          description: "Inner-city streets experience high-frequency van, waste and trade traffic. Tight turning radii at lane entries and rear garages generate torsional stress that breaks slab corners and dislodges pavers. We reinforce high-load turning points and tie repairs into adjoining panels so the entry survives commercial-style traffic, not just private car use.",
        },
      ],
      landmarks: [
        "Crown Street, Surry Hills",
        "Cleveland Street, Redfern",
        "Joynton Avenue, Zetland",
        "The Goods Line and Ultimo edge streets",
        "Pyrmont Bridge Road corridor",
        "Glebe Point Road",
        "The Rocks sandstone streetscape",
      ],
      caseStudies: [
        {
          title: "Surry Hills shared terrace lane with recurring edge collapse",
          problem: "A narrow lane servicing four terraces near Crown Street had broken concrete edges and potholes from frequent courier vans. Residents needed constant access and could not tolerate a multi-day closure.",
          solution: "We staged night and early-morning works, rebuilt the failed lane edge with reinforced concrete, reset drainage falls and reopened each section daily. The shared access now handles regular delivery traffic without crumbling at the turning points.",
        },
        {
          title: "Zetland garage apron sinking in high-moisture ground",
          problem: "A townhouse row near Green Square showed slab settlement and standing water at three garages after storms. Previous crack sealing washed out within months because moisture pressure remained under the slab.",
          solution: "We removed saturated base material, re-established compaction and drainage, rebuilt aprons with movement control joints and finished levels to clear water from door thresholds. Flooding complaints stopped after the repair cycle.",
        },
      ],
      localFaqs: [
        {
          question: "Does City of Sydney approval apply if we only repair part of a driveway?",
          answer: "Like-for-like repair wholly inside the lot is usually simpler. Crossover, kerb, or footpath-interface work is typically a council process — City of Sydney publishes a permit to construct, repair or abolish a driveway, separate from a DA. We draw the boundary of the job before anyone cuts, so strata is not left with a stopped site.",
        },
        {
          question: "Can you repair a shared Surry Hills lane without shutting four garages for a week?",
          answer: "That is the point of staging. Courier vans already broke the edge because the lane is short and busy; a multi-day closure is what residents cannot wear. We cut and rebuild in sections, night or early morning where it is needed, and reopen each piece. Request Callback with the suburb and a photo of the lane.",
        },
        {
          question: "Repair or replace — the slab in Zetland keeps going soft after rain?",
          answer: "Crack-seal on Green Square ground fails because the base stays wet. If the garage lip ponds and the slab has dropped, that is base reconstruction and falls, not another tube of filler. A flat, unmoving inner-city slab can still be a panel repair. We will say which after we see the water path.",
        },
        {
          question: "Who signs off if this is strata / common property?",
          answer: "If the failed section is common property, the committee (or the strata manager) usually has to authorise the lasting repair. Make-safe for a trip lip should not wait on a general meeting. We can document the hazard and the quote for the records. Call 0480 893 502 if someone could fall today.",
        },
      ],
      councilInfo: "City of Sydney has strict controls for vehicle crossovers, road reserve interfaces and heritage streetscapes, so scope definition and permit sequencing are critical before construction.",
      suburbHighlights: [
        {
          name: "Surry Hills",
          note: "Narrow terrace frontages and lane access demand staged repairs with careful traffic and resident coordination.",
        },
        {
          name: "Redfern",
          note: "Shared and strata driveways often carry commercial vehicle loads that require reinforced turning zones.",
        },
        {
          name: "Zetland",
          note: "Higher groundwater around Green Square means drainage-focused base reconstruction is often necessary.",
        },
        {
          name: "Alexandria",
          note: "Industrial-to-residential streets still see heavy van traffic that accelerates apron edge failures.",
        },
        {
          name: "Glebe",
          note: "Older street layouts and tight boundaries make crossover geometry and runoff control key repair factors.",
        },
        {
          name: "Pyrmont",
          note: "Dense mixed-use blocks need short, tightly managed work windows to keep access operational.",
        },
      ],
    },
  },
  {
    name: "Inner West",
    slug: "driveway-repair-inner-west",
    region: "Inner West",
    suburbs: [
      "Marrickville", "Newtown", "Balmain", "Leichhardt",
      "Petersham", "Stanmore", "Ashfield", "Haberfield",
      "Dulwich Hill", "Enmore", "Erskineville", "Summer Hill",
      "Tempe", "Sydenham", "Annandale", "Birchgrove", "Rozelle",
      "Lilyfield", "Lewisham", "Ashbury", "Hurlstone Park",
    ],
    keySuburbs: ["Marrickville", "Balmain", "Leichhardt"],
    testimonials: generateTestimonials(["Marrickville", "Balmain", "Leichhardt"]),
  },
  {
    name: "Burwood",
    slug: "driveway-repair-burwood",
    region: "Inner West",
    suburbs: [
      "Burwood", "Croydon", "Croydon Park", "Enfield", "Strathfield South",
    ],
    keySuburbs: ["Burwood", "Croydon", "Enfield"],
    testimonials: generateTestimonials(["Burwood", "Croydon", "Enfield"]),
  },
  {
    name: "Strathfield",
    slug: "driveway-repair-strathfield",
    region: "Inner West",
    suburbs: [
      "Strathfield", "Strathfield South", "Homebush",
      "Homebush West", "Belfield", "Greenacre",
    ],
    keySuburbs: ["Strathfield", "Homebush", "Belfield"],
    testimonials: generateTestimonials(["Strathfield", "Homebush", "Belfield"]),
  },
  {
    name: "Canada Bay",
    slug: "driveway-repair-canada-bay",
    region: "Inner West",
    suburbs: [
      "Concord", "Rhodes", "Five Dock", "Drummoyne",
      "Abbotsford", "Breakfast Point", "Cabarita", "Canada Bay",
      "Chiswick", "Concord West", "Liberty Grove", "Mortlake",
      "North Strathfield", "Rodd Point", "Russell Lea", "Wareemba",
    ],
    keySuburbs: ["Concord", "Five Dock", "Drummoyne"],
    testimonials: generateTestimonials(["Concord", "Five Dock", "Drummoyne"]),
  },
  {
    name: "North Sydney",
    slug: "driveway-repair-north-sydney",
    region: "Lower North Shore",
    h1: "Driveway Repair North Sydney",
    metaTitle: "Driveway Repair North Sydney | Sydney Driveway Repair",
    metaDescription: "Driveway repair in North Sydney is make-safe for a collapsed edge, trip lip, or steep wet entry — not a new coloured pour. Kirribilli and Waverton grades polish and send water to the garage; Neutral Bay brick and Military Road crossovers fail under mixed traffic. Call 0480 893 502 or Request Callback.",
    postalCode: "2060",
    suburbs: [
      "North Sydney", "Cremorne", "Cremorne Point", "Crows Nest",
      "Kirribilli", "Lavender Bay", "McMahons Point", "Milsons Point",
      "Neutral Bay", "Waverton", "Wollstonecraft", "Cammeray",
    ],
    keySuburbs: ["Cremorne", "Neutral Bay", "Crows Nest"],
    testimonials: [
      {
        text: "Our Neutral Bay driveway near Military Road had old brick sections lifting and a dangerous lip at the garage entry. They rebuilt the base and blended the new pavers so the repair looks original, not patched.",
        author: "Greg H.",
        location: "Neutral Bay",
      },
      {
        text: "In Waverton we needed heritage-sensitive repairs on a steep shared driveway used by three units. The team handled access sequencing, fixed drainage rushing toward the lower garage, and kept the façade presentation consistent with the streetscape.",
        author: "Olivia M.",
        location: "Waverton",
      },
      {
        text: "Our Cremorne crossover was crumbling from constant braking on the hill. They rebuilt the apron and threshold in one program, and we passed council inspection without having to redo any section.",
        author: "Peter S.",
        location: "Cremorne",
      },
    ],
    richContent: {
      intro: "Driveway repair in North Sydney is make-safe for a collapsed edge, trip lip, or steep wet entry — not a new coloured pour. Kirribilli and Waverton grades polish and send water to the garage; Neutral Bay brick and Military Road crossovers fail under mixed traffic. Call 0480 893 502 or Request Callback.",
      localChallenges: [
        {
          title: "Steep topography from harbour foreshore to ridge suburbs",
          description: "North Sydney grades are unforgiving. On steep entries in Kirribilli, Waverton and parts of Cremorne, downhill braking and uphill acceleration concentrate stress at slab joints and garage transitions. Water also moves fast across short drive lengths, exposing any drainage errors. Repairs must restore traction, drainage direction and structural support simultaneously to prevent rapid recurrence.",
        },
        {
          title: "Heritage and character-area presentation requirements",
          description: "Many streets include heritage buildings and intact period streetscapes. Replacing brick or stone-edged driveways with mismatched modern finishes can create planning risk and neighbour objections. We scope repairs around visible boundary elements, crossover interfaces and finish continuity so owners can achieve a safe driveway without undermining streetscape expectations or triggering avoidable rework.",
        },
        {
          title: "Shared and strata driveway loading in dense precincts",
          description: "In Neutral Bay, Crows Nest and North Sydney proper, common driveways serve multiple units and receive frequent service traffic. Turning points near bins, loading bays and basement ramps fail first, often with edge breakout and rutting. We target these concentration zones with reinforced rebuilds and staged access plans so residents retain movement during works.",
        },
        {
          title: "Aging brick and early concrete assets in older suburbs",
          description: "Cremorne and Wollstonecraft properties often have decades-old brick or plain concrete driveways over variable base preparation. Cracks and settlement are usually symptoms of sub-base fatigue, not just surface wear. We remove failed depth, recompact support layers and tie repairs into stable sections, producing longer service life than simple topcoat patch jobs.",
        },
      ],
      landmarks: [
        "Military Road, Neutral Bay",
        "Crows Nest village core",
        "Kirribilli foreshore streets",
        "Waverton Peninsula approaches",
        "Lavender Bay and McMahons Point lanes",
        "Cremorne junction precinct",
        "Cammeray ridge streets",
      ],
      caseStudies: [
        {
          title: "Neutral Bay brick driveway failure under mixed traffic",
          problem: "A 1960s block near Military Road had a shared brick driveway with sunken wheel tracks and loose headers, causing trip hazards and poor drainage to basement entry points.",
          solution: "We lifted failed brick zones, rebuilt base layers, reset matching brickwork with reinforced edge restraint and corrected falls away from the basement threshold. The driveway now carries daily service traffic without further edge collapse.",
        },
        {
          title: "Waverton steep access with runoff into lower garage",
          problem: "A heritage-adjacent property in Waverton had a steep concrete run where stormwater tracked to the garage door and polished surface created slip risk in wet weather.",
          solution: "We regraded the lower section, rebuilt cracked panels, added controlled drainage points and applied a higher-grip finish compatible with the existing streetscape. Runoff is now directed correctly and vehicle entry is safer.",
        },
      ],
      localFaqs: [
        {
          question: "Do North Sydney heritage or crossover rules stop a repair?",
          answer: "Like-for-like repair inside the lot is usually straightforward. Changing the street-facing material, the crossover shape, or the kerb on the public road is a different job and can need council assessment (including section 138 for works on the road reserve). We call that split before anyone cuts. We do not invent a fee.",
        },
        {
          question: "Repair or replace — the steep drive keeps cracking after every patch?",
          answer: "On Kirribilli / Waverton grades, a weak patch reopens because braking load and water are still on the same line. If the lip is a trip and the garage is taking water, that is rebuild of the failed run and the falls — not filler. A flat, unmoving panel can still be a repair. We say which on site.",
        },
        {
          question: "Can you fix a Neutral Bay brick drive without replacing the whole thing in coloured concrete?",
          answer: "Yes, if the failure is local: sunken wheel tracks, loose headers, a trip edge at the basement. We lift the failed brick, rebuild the base, and reset a matching bond. A full coloured replacement is a different trade and a different page — that is not this offer. Call 0480 893 502 for make-safe if it is catching feet now.",
        },
        {
          question: "Can residents still get in if this is a Crows Nest strata driveway?",
          answer: "We stage sections and keep an access path where the site allows it. A collapsed edge or trip lip should be made safe first; the lasting repair can sit in a booked window so parking is not lost for a week. Request Callback with the suburb, the block, and a photo of the lip.",
        },
      ],
      councilInfo: "North Sydney Council places strong emphasis on heritage and streetscape outcomes, and driveway works involving crossovers or visible boundary changes may require formal approval pathways.",
      suburbHighlights: [
        {
          name: "Cremorne",
          note: "Older brick and concrete driveways often need structural-depth rebuilds rather than surface-only repairs.",
        },
        {
          name: "Neutral Bay",
          note: "High traffic and busy road interfaces make crossover durability and level transitions critical.",
        },
        {
          name: "Crows Nest",
          note: "Dense mixed-use blocks create heavy shared-driveway loading and tight staging constraints.",
        },
        {
          name: "Kirribilli",
          note: "Steep harbour-side grades demand traction-focused finishes and precise drainage control.",
        },
        {
          name: "Cammeray",
          note: "Ridge-to-valley slope changes can produce runoff concentration at garage thresholds.",
        },
        {
          name: "Wollstonecraft",
          note: "Older homes and strata sites commonly need careful matching of legacy driveway materials.",
        },
      ],
    },
  },
  {
    name: "Mosman",
    slug: "driveway-repair-mosman",
    region: "Lower North Shore",
    suburbs: [
      "Mosman", "Balmoral", "Beauty Point", "Clifton Gardens",
      "Georges Heights", "Middle Head", "The Spit",
    ],
    keySuburbs: ["Mosman", "Balmoral", "Clifton Gardens"],
    testimonials: generateTestimonials(["Mosman", "Balmoral", "Clifton Gardens"]),
  },
  {
    name: "Lane Cove",
    slug: "driveway-repair-lane-cove",
    region: "Lower North Shore",
    suburbs: [
      "Lane Cove", "Lane Cove North", "Lane Cove West",
      "Longueville", "Riverview", "Greenwich", "Linley Point",
      "Northwood", "St Leonards",
    ],
    keySuburbs: ["Lane Cove", "Greenwich", "Riverview"],
    testimonials: generateTestimonials(["Lane Cove", "Greenwich", "Riverview"]),
  },
  {
    name: "Willoughby",
    slug: "driveway-repair-willoughby",
    region: "Lower North Shore",
    suburbs: [
      "Willoughby", "Chatswood", "Artarmon", "Castlecrag",
      "Middle Cove", "Northbridge", "Naremburn",
      "North Willoughby", "Castle Cove",
    ],
    keySuburbs: ["Chatswood", "Willoughby", "Northbridge"],
    testimonials: generateTestimonials(["Chatswood", "Willoughby", "Northbridge"]),
  },
  {
    name: "Hunters Hill",
    slug: "driveway-repair-hunters-hill",
    region: "Lower North Shore",
    suburbs: [
      "Hunters Hill", "Woolwich", "Henley", "Huntleys Cove",
      "Huntleys Point", "Gladesville",
    ],
    keySuburbs: ["Hunters Hill", "Woolwich", "Gladesville"],
    testimonials: generateTestimonials(["Hunters Hill", "Woolwich", "Gladesville"]),
  },
  {
    name: "Ku-ring-gai",
    slug: "driveway-repair-ku-ring-gai",
    region: "Upper North Shore",
    suburbs: [
      "Gordon", "Killara", "Lindfield", "Roseville", "Pymble",
      "St Ives", "Turramurra", "Wahroonga", "Warrawee",
      "West Pymble", "North Turramurra", "South Turramurra",
      "East Killara", "East Lindfield", "Fox Valley",
    ],
    keySuburbs: ["Gordon", "Pymble", "St Ives"],
    testimonials: generateTestimonials(["Gordon", "Pymble", "St Ives"]),
  },
  {
    name: "Hornsby",
    slug: "driveway-repair-hornsby",
    region: "Upper North Shore",
    suburbs: [
      "Hornsby", "Wahroonga", "Turramurra", "Asquith", "Berowra",
      "Brooklyn", "Normanhurst", "Thornleigh", "Waitara",
      "Pennant Hills", "Cherrybrook", "Westleigh",
      "Mount Colah", "Mount Kuring-gai",
    ],
    keySuburbs: ["Hornsby", "Pennant Hills", "Cherrybrook"],
    testimonials: generateTestimonials(["Hornsby", "Pennant Hills", "Cherrybrook"]),
  },
  {
    name: "Ryde",
    slug: "driveway-repair-ryde",
    region: "Northern Sydney",
    suburbs: [
      "Ryde", "Gladesville", "Meadowbank", "West Ryde",
      "East Ryde", "North Ryde", "Macquarie Park", "Putney",
      "Denistone", "Denistone East", "Denistone West",
      "Eastwood", "Melrose Park", "Tennyson Point", "Top Ryde",
    ],
    keySuburbs: ["Ryde", "Gladesville", "Macquarie Park"],
    testimonials: generateTestimonials(["Ryde", "Gladesville", "Macquarie Park"]),
  },
  {
    name: "Northern Beaches",
    slug: "driveway-repair-northern-beaches",
    region: "Northern Beaches",
    h1: "Driveway Repair Northern Beaches",
    metaTitle: "Driveway Repair Northern Beaches | Sydney Driveway Repair",
    metaDescription: "Driveway repair on the Northern Beaches is emergency make-safe after an easterly: a washed-out edge, trip lip, or driveway you cannot get the car into — not a spray-pave makeover. Salt and ponding at Dee Why and Manly scale the slab; sandy bases in Narrabeen settle. Call 0480 893 502 or Request Callback.",
    postalCode: "2095",
    suburbs: [
      "Manly", "Dee Why", "Mona Vale", "Avalon", "Freshwater",
      "Brookvale", "Narrabeen", "Collaroy", "Curl Curl",
      "Balgowlah", "Beacon Hill", "Belrose", "Clontarf",
      "Cromer", "Elanora Heights", "Fairlight", "Forestville",
      "Frenchs Forest", "Ingleside", "Killarney Heights",
      "Manly Vale", "Newport", "North Curl Curl", "North Manly",
      "Queenscliff", "Palm Beach", "Seaforth", "Terrey Hills",
      "Warriewood", "Wheeler Heights",
    ],
    keySuburbs: ["Manly", "Dee Why", "Mona Vale"],
    testimonials: [
      {
        text: "Our Dee Why driveway off Pittwater Road was flaking badly from sea spray and pooling after storms. They replaced the damaged exposed aggregate, fixed the falls, and the surface has held through two heavy rain events without new scaling.",
        author: "Claire B.",
        location: "Dee Why",
      },
      {
        text: "In Newport our steep driveway had become dangerously slippery and cracked where cars braked near the garage. The crew rebuilt the lower section with a higher-grip finish and sorted drainage so water no longer runs back to the door.",
        author: "Sam K.",
        location: "Newport",
      },
      {
        text: "We’re in Terrey Hills on bushfire-prone land and needed a durable, compliant repair before summer. They upgraded the failing concrete panels, managed access for our long battle-axe block, and explained what council and RFS checks applied.",
        author: "Renee J.",
        location: "Terrey Hills",
      },
    ],
    richContent: {
      intro: "Driveway repair on the Northern Beaches is emergency make-safe after an easterly: a washed-out edge, trip lip, or driveway you cannot get the car into — not a spray-pave makeover. Salt and ponding at Dee Why and Manly scale the slab; sandy bases in Narrabeen settle. Call 0480 893 502 or Request Callback.",
      localChallenges: [
        {
          title: "Marine salt exposure from Manly to Palm Beach",
          description: "Coastal air carries salt deep inland on this corridor, and driveways near beach fronts deteriorate faster than inland equivalents. Exposed aggregate can ravel, concrete paste can scale and reinforcement staining appears earlier where moisture and chlorides combine. Repairs need marine-appropriate materials, sound cover depth and protective sealing rather than standard suburban specifications.",
        },
        {
          title: "Settlement in sandy or variable beachside subgrades",
          description: "Parts of the peninsula contain loose or variable sands and fill that compact inconsistently under vehicle loading. The visible symptom is often isolated cracking or rutting at wheel paths while adjacent sections seem intact. We remove failed depth, rebuild and compact base layers correctly, then tie new panels into stable sections to avoid differential movement.",
        },
        {
          title: "Steep driveway stress in Newport, Avalon and hill suburbs",
          description: "Steep grades amplify braking and torsion at thresholds and turning points, leading to polished, slippery surfaces and broken joints. In wet coastal weather this quickly becomes a safety issue. Repairs must combine structural strength, grip finish and correctly directed falls so water exits safely and vehicles retain traction year-round.",
        },
        {
          title: "Flood-prone and bushfire-prone planning overlays",
          description: "Low-lying Narrabeen and Dee Why areas can face flood planning constraints, while Terrey Hills and Ingleside are widely bushfire-prone. These settings affect design details, drainage paths and sometimes approvals for related works. We scope repairs with those local constraints in mind so owners avoid non-compliant fixes that fail at inspection or next weather event.",
        },
      ],
      landmarks: [
        "Manly Corso and beach approaches",
        "Dee Why beachfront and Pittwater Road corridor",
        "Narrabeen Lagoon catchment edges",
        "Mona Vale Road corridor",
        "Avalon village access streets",
        "Newport coastal ridgelines",
        "Palm Beach escarpment entries",
      ],
      caseStudies: [
        {
          title: "Dee Why exposed aggregate failure in marine conditions",
          problem: "A coastal property near Dee Why beachfront had severe aggregate loss and cracking at the street approach after years of salt exposure and stormwater ponding.",
          solution: "We removed degraded sections, rebuilt sub-base and drainage falls, poured a marine-suitable exposed aggregate replacement and sealed the surface. The repaired area now sheds water correctly and resists further surface breakdown.",
        },
        {
          title: "Terrey Hills long driveway with bushland edge movement",
          problem: "On a bushland lot, edge sections had dropped and cracked where runoff from adjacent ground washed base material away. Access length made logistics difficult.",
          solution: "We staged works in segments, stabilized shoulder edges, rebuilt washed-out base zones and reinstated reinforced concrete panels. The driveway now supports regular vehicle traffic without recurring shoulder collapse.",
        },
      ],
      localFaqs: [
        {
          question: "Do I need Northern Beaches Council approval for the crossover?",
          answer: "Like-for-like repair on your private slab is usually inside the lot. If the failure is the kerb, layback, or verge — the vehicle crossing on the public road — that is typically a section 138 approval, separate from a DA. We split private slab vs council land before we cut. We do not invent a fee.",
        },
        {
          question: "Repair or replace — the edge gave way after the last easterly?",
          answer: "If the base has washed out, filling the hole leaves the next storm to do it again. Make-safe first so you can get the car in; the lasting job is rebuild of the failed strip and the falls. A scaled but still-sound slab is a different call. We will not coat over a hollow edge.",
        },
        {
          question: "Why does only one wheel-track strip keep sinking in Dee Why or Narrabeen?",
          answer: "That pattern is usually localised settlement in sandy or variable ground, not a surface scratch. The failed strip needs full-depth rebuild and compaction. A coastal coating on a still-moving sand base repeats the dip after the next wet week. Request Callback with a photo of the strip.",
        },
        {
          question: "Can you get us using the drive today if we cannot get the car in?",
          answer: "That is the emergency path. Same-day means we attend before 5:00 pm the day you call, or the emergency call-out fee is waived; you still get the assessment and the written plan. We do not publish the fee in dollars. Call 0480 893 502 if the edge is gone now.",
        },
      ],
      councilInfo: "Northern Beaches Council requirements can apply to new or modified vehicle crossings and to works affected by local flood or bushfire planning constraints.",
      suburbHighlights: [
        {
          name: "Manly",
          note: "Strong marine exposure accelerates surface wear, so durability and sealing strategy are essential.",
        },
        {
          name: "Dee Why",
          note: "Coastal weather plus low-lying pockets make drainage correction a priority in most repairs.",
        },
        {
          name: "Mona Vale",
          note: "Mixed coastal and inland conditions mean variable base behavior across short distances.",
        },
        {
          name: "Avalon",
          note: "Steeper approaches require higher-grip finishes and robust threshold detailing.",
        },
        {
          name: "Newport",
          note: "Hilly coastal blocks often combine braking stress with salt-related material degradation.",
        },
        {
          name: "Palm Beach",
          note: "Exposed ridge and escarpment sites demand repairs designed for wind, rain and slope loading.",
        },
      ],
    },
  },
  {
    name: "Parramatta",
    slug: "driveway-repair-parramatta",
    region: "Western Sydney",
    h1: "Driveway Repair Parramatta",
    metaTitle: "Driveway Repair Parramatta | Sydney Driveway Repair",
    metaDescription: "Driveway repair in Parramatta is make-safe when Wianamatta clay heaves the slab, summer heat opens the same crack, or rebuild traffic crushes the crossover in Epping or Carlingford — not a coloured-concrete cost guide. We rebuild the failed section, then quote the lasting repair. Call 0480 893 502 or Request Callback.",
    postalCode: "2150",
    suburbs: [
      "Parramatta", "Epping", "Eastwood", "Dundas", "Carlingford",
      "Ermington", "Rydalmere", "Oatlands", "North Rocks",
      "Telopea", "Constitution Hill", "Beecroft", "Cheltenham",
      "North Parramatta", "Harris Park", "Rosehill",
      "Winston Hills",
    ],
    keySuburbs: ["Parramatta", "Epping", "Carlingford"],
    testimonials: [
      {
        text: "Our North Parramatta driveway near Church Street had deep expansion cracks that opened every summer. They explained the clay movement issue, rebuilt the worst panels, and installed proper joints so we finally stopped chasing the same crack each year.",
        author: "Harpreet S.",
        location: "Parramatta",
      },
      {
        text: "In Epping, heavy trucks from nearby knockdown-rebuilds damaged our crossover and edge beam. The team repaired it to council specs, coordinated the crossing permit details, and gave us a finish that matches the older concrete out front.",
        author: "Jenny W.",
        location: "Epping",
      },
      {
        text: "Our Carlingford driveway had subsided near the garage and water kept running into the slab-on-ground room. They re-levelled the approach, fixed drainage falls, and the next storm passed with no water ingress.",
        author: "Ravi M.",
        location: "Carlingford",
      },
    ],
    richContent: {
      intro: "Driveway repair in Parramatta is make-safe when Wianamatta clay heaves the slab, summer heat opens the same crack, or rebuild traffic crushes the crossover in Epping or Carlingford — not a coloured-concrete cost guide. We rebuild the failed section, then quote the lasting repair. Call 0480 893 502 or Request Callback.",
      localChallenges: [
        {
          title: "Reactive clay shrink-swell movement across the LGA",
          description: "Many Parramatta sites sit on clay-rich subsoils that move seasonally with moisture changes. Driveways show heave near edges in wetter periods and cracking or slight settlement in dry spells. Cosmetic sealing alone fails quickly because the support layer is moving. We rebuild failed sections with proper base preparation, jointing and transitions to tolerate ongoing clay behavior.",
        },
        {
          title: "Heat-driven cracking during Western Sydney summers",
          description: "High summer temperatures around Parramatta accelerate thermal expansion and contraction, especially on broad unshaded concrete runs. Existing microcracks open, control joints spall and surface defects become structural faults. Repairs need correctly spaced movement treatment and robust finishing so slabs can move without random cracking that returns after the next hot season.",
        },
        {
          title: "Construction traffic damage in redevelopment streets",
          description: "Knockdown-rebuild activity in Epping, Eastwood and Carlingford means heavy vehicles repeatedly mount residential crossovers and driveway entries. These loading events crush weak apron edges and rut base layers, even where driveways are relatively young. We strengthen high-load zones and restore profile at the street interface so damage does not keep recurring during nearby building cycles.",
        },
        {
          title: "Old-to-new interface failures on mixed housing stock",
          description: "Parramatta combines older homes with modern infill, and driveway repairs often connect new sections to aged slabs or brick edging. Without careful tie-in, differential movement opens seams and traps water at the join. We detail transition zones and levels so repaired sections work with the existing structure rather than separating under daily traffic.",
        },
      ],
      landmarks: [
        "Parramatta CBD approach streets",
        "Church Street corridor",
        "Parramatta Park perimeter roads",
        "Epping Road and Beecroft Road links",
        "Carlingford Road corridor",
        "Victoria Road Ermington stretch",
        "North Rocks Road approaches",
      ],
      caseStudies: [
        {
          title: "Epping crossover crushed by nearby rebuild traffic",
          problem: "A residential driveway near Epping Road developed edge collapse and wheel-path cracking after months of heavy construction vehicle movements on the street.",
          solution: "We reconstructed the crossover and entry panel to a stronger section, corrected sub-base compaction and reset levels for clean road transition. The upgraded entry has handled ongoing street traffic without renewed edge failure.",
        },
        {
          title: "Carlingford clay heave and summer crack propagation",
          problem: "A long west-facing driveway in Carlingford showed seasonal lifting near one boundary and widening cracks each summer, with water tracking toward the garage slab.",
          solution: "We removed movement-affected panels, rebuilt the base and joint layout, regraded drainage and replaced the concrete with better movement control detailing. Cracking and water ingress were both resolved.",
        },
      ],
      localFaqs: [
        {
          question: "Do I need City of Parramatta approval for crossover work?",
          answer: "If the job stays on your private slab, it is usually a property repair. If it alters the vehicle crossing or the road-reserve interface — kerb, layback, verge — City of Parramatta requirements typically apply (section 138 of the Roads Act 1993, separate from a DA). We flag that split before construction. Check council for current fees; we do not publish one here.",
        },
        {
          question: "Why does a Parramatta driveway crack again after being patched?",
          answer: "Wianamatta clay is still moving under the patch, and Western Sydney heat opens the same line. Durable repair is structural-depth rebuild and jointing that can take shrink-swell — not surface-only treatment. If the garage is taking water after a heave, that is the tell. Call 0480 893 502 for make-safe if the lip is catching now.",
        },
        {
          question: "Repair or replace — should I just pour a new coloured driveway?",
          answer: "Not if the problem is heave or a crushed crossover. A new coloured slab on the same reactive clay, without base and joints, repeats the failure in a nicer colour. Other firms already write that cost-guide page. Ours is: make the drive safe, rebuild the failed section, quote the lasting repair in writing.",
        },
        {
          question: "Can nearby rebuild traffic ruin a crossover that is still new?",
          answer: "Yes. Repeated truck and skip loading on Epping / Carlingford / Eastwood streets crushes apron edges and ruts the base even on a young drive. Age is not the story; construction traffic is. Strengthening the entry zone is often the repair, not a decorative overlay. Request Callback with the suburb and a photo of the crushed edge.",
        },
      ],
      councilInfo: "City of Parramatta governs vehicle crossing and road reserve interface works, so driveway scopes that alter crossovers should be checked for council approval requirements before construction.",
      suburbHighlights: [
        {
          name: "Parramatta",
          note: "High traffic and heat exposure mean driveway entries need strong structural detailing and joint control.",
        },
        {
          name: "Epping",
          note: "Frequent rebuild activity increases heavy vehicle stress on residential crossovers and aprons.",
        },
        {
          name: "Eastwood",
          note: "Older driveway assets often require careful tie-ins to avoid differential movement at repair joins.",
        },
        {
          name: "Carlingford",
          note: "Clay-driven movement and long sloped driveways make base stability and drainage critical.",
        },
        {
          name: "Ermington",
          note: "Busy corridor traffic near Victoria Road increases wear at street-entry transition zones.",
        },
        {
          name: "North Rocks",
          note: "Mixed grade and clay conditions commonly produce recurring edge cracking without full-depth repair.",
        },
      ],
    },
  },
  {
    name: "Cumberland",
    slug: "driveway-repair-cumberland",
    region: "Western Sydney",
    suburbs: [
      "Auburn", "Granville", "Merrylands", "Guildford",
      "Lidcombe", "South Granville", "Greystanes", "Pemulwuy",
      "Wentworthville", "Westmead", "Berala", "Regents Park",
      "Silverwater",
    ],
    keySuburbs: ["Auburn", "Merrylands", "Granville"],
    testimonials: generateTestimonials(["Auburn", "Merrylands", "Granville"]),
  },
  {
    name: "Blacktown",
    slug: "driveway-repair-blacktown",
    region: "Western Sydney",
    suburbs: [
      "Blacktown", "Seven Hills", "Mount Druitt", "Rooty Hill",
      "Doonside", "Quakers Hill", "Lalor Park", "Kings Langley",
      "Prospect", "Stanhope Gardens", "Kellyville Ridge",
      "The Ponds", "Marsden Park", "Schofields", "Riverstone",
    ],
    keySuburbs: ["Blacktown", "Seven Hills", "Quakers Hill"],
    testimonials: generateTestimonials(["Blacktown", "Seven Hills", "Quakers Hill"]),
  },
  {
    name: "The Hills",
    slug: "driveway-repair-the-hills",
    region: "Hills District",
    suburbs: [
      "Castle Hill", "Baulkham Hills", "Bella Vista", "Kellyville",
      "Rouse Hill", "Norwest", "Dural", "Glenhaven", "Kenthurst",
      "Annangrove", "Box Hill", "Glenorie", "Galston",
      "Middle Dural", "Round Corner",
    ],
    keySuburbs: ["Castle Hill", "Bella Vista", "Kellyville"],
    testimonials: generateTestimonials(["Castle Hill", "Bella Vista", "Kellyville"]),
  },
  {
    name: "Penrith",
    slug: "driveway-repair-penrith",
    region: "Western Sydney",
    suburbs: [
      "Penrith", "Kingswood", "Emu Plains", "Glenmore Park",
      "South Penrith", "St Marys", "Cambridge Park", "Cranebrook",
      "Leonay", "Jamisontown", "Werrington", "Orchard Hills",
      "Mulgoa", "Castlereagh", "Regentville",
    ],
    keySuburbs: ["Penrith", "Glenmore Park", "Emu Plains"],
    testimonials: generateTestimonials(["Penrith", "Glenmore Park", "Emu Plains"]),
  },
  {
    name: "Fairfield",
    slug: "driveway-repair-fairfield",
    region: "South Western Sydney",
    suburbs: [
      "Fairfield", "Cabramatta", "Canley Vale", "Fairfield Heights",
      "Smithfield", "Wetherill Park", "Bonnyrigg", "Prairiewood",
      "Bossley Park", "Wakeley", "Edensor Park", "Cecil Hills",
      "Green Valley",
    ],
    keySuburbs: ["Fairfield", "Cabramatta", "Smithfield"],
    testimonials: generateTestimonials(["Fairfield", "Cabramatta", "Smithfield"]),
  },
  {
    name: "Liverpool",
    slug: "driveway-repair-liverpool",
    region: "South Western Sydney",
    suburbs: [
      "Liverpool", "Casula", "Moorebank", "Prestons",
      "Chipping Norton", "Holsworthy", "Warwick Farm",
      "Hammondville", "Lurnea", "Hinchinbrook", "Hoxton Park",
      "West Hoxton", "Middleton Grange", "Edmondson Park",
    ],
    keySuburbs: ["Liverpool", "Casula", "Moorebank"],
    testimonials: generateTestimonials(["Liverpool", "Casula", "Moorebank"]),
  },
  {
    name: "Campbelltown",
    slug: "driveway-repair-campbelltown",
    region: "South Western Sydney",
    suburbs: [
      "Campbelltown", "Ingleburn", "Macquarie Fields", "Minto",
      "Leumeah", "Airds", "Rosemeadow", "Glen Alpine", "Ruse",
      "Blair Athol",
    ],
    keySuburbs: ["Campbelltown", "Ingleburn", "Leumeah"],
    testimonials: generateTestimonials(["Campbelltown", "Ingleburn", "Leumeah"]),
  },
  {
    name: "Camden",
    slug: "driveway-repair-camden",
    region: "South Western Sydney",
    suburbs: [
      "Camden", "Narellan", "Oran Park", "Leppington",
      "Gregory Hills", "Elderslie", "Mount Annan", "Currans Hill",
      "Harrington Park", "Spring Farm",
    ],
    keySuburbs: ["Camden", "Narellan", "Oran Park"],
    testimonials: generateTestimonials(["Camden", "Narellan", "Oran Park"]),
  },
  {
    name: "Canterbury-Bankstown",
    slug: "driveway-repair-canterbury-bankstown",
    region: "South Western Sydney",
    suburbs: [
      "Canterbury", "Bankstown", "Lakemba", "Punchbowl",
      "Revesby", "Padstow", "Campsie", "Belmore", "Roselands",
      "Bass Hill", "Earlwood", "Panania", "East Hills", "Yagoona",
    ],
    keySuburbs: ["Bankstown", "Canterbury", "Campsie"],
    testimonials: generateTestimonials(["Bankstown", "Canterbury", "Campsie"]),
  },
  {
    name: "Georges River",
    slug: "driveway-repair-georges-river",
    region: "Southern Sydney",
    suburbs: [
      "Hurstville", "Beverly Hills", "Blakehurst",
      "Connells Point", "Hurstville Grove", "Kyle Bay", "Lugarno",
      "Mortdale", "Narwee", "Oatley", "Peakhurst", "Penshurst",
      "Riverwood", "South Hurstville",
    ],
    keySuburbs: ["Hurstville", "Penshurst", "Oatley"],
    testimonials: generateTestimonials(["Hurstville", "Penshurst", "Oatley"]),
  },
  {
    name: "Sutherland",
    slug: "driveway-repair-sutherland",
    region: "Southern Sydney",
    suburbs: [
      "Sutherland", "Cronulla", "Miranda", "Caringbah", "Engadine",
      "Menai", "Kirrawee", "Gymea", "Jannali", "Sylvania",
      "Bangor", "Barden Ridge", "Como", "Grays Point", "Heathcote",
      "Illawong", "Kareela", "Loftus", "Oyster Bay",
      "Sylvania Waters", "Taren Point", "Woronora", "Woolooware",
      "Yowie Bay",
    ],
    keySuburbs: ["Cronulla", "Miranda", "Sutherland"],
    testimonials: generateTestimonials(["Cronulla", "Miranda", "Sutherland"]),
  },
  {
    name: "Hawkesbury",
    slug: "driveway-repair-hawkesbury",
    region: "Western Sydney",
    suburbs: [
      "Windsor", "Richmond", "North Richmond", "Kurrajong",
      "Glossodia", "Wilberforce", "Freemans Reach", "Kurmond",
      "Pitt Town", "McGraths Hill", "South Windsor",
    ],
    keySuburbs: ["Windsor", "Richmond", "Kurrajong"],
    testimonials: generateTestimonials(["Windsor", "Richmond", "Kurrajong"]),
  },
  {
    name: "Blue Mountains",
    slug: "driveway-repair-blue-mountains",
    region: "Blue Mountains",
    suburbs: [
      "Katoomba", "Leura", "Wentworth Falls", "Springwood",
      "Blaxland", "Glenbrook", "Lawson", "Hazelbrook",
      "Faulconbridge", "Winmalee",
    ],
    keySuburbs: ["Katoomba", "Springwood", "Glenbrook"],
    testimonials: generateTestimonials(["Katoomba", "Springwood", "Glenbrook"]),
  },
  {
    name: "Wollondilly",
    slug: "driveway-repair-wollondilly",
    region: "South Western Sydney",
    suburbs: [
      "Picton", "Tahmoor", "Thirlmere", "Bargo", "The Oaks",
      "Buxton", "Warragamba", "Silverdale", "Wallacia",
      "Douglas Park", "Appin",
    ],
    keySuburbs: ["Picton", "Tahmoor", "Thirlmere"],
    testimonials: generateTestimonials(["Picton", "Tahmoor", "Thirlmere"]),
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function formatSuburbList(suburbs: string[]): string {
  if (suburbs.length <= 2) return suburbs.join(" & ");
  return suburbs.slice(0, -1).join(", ") + " & " + suburbs[suburbs.length - 1];
}

export function formatKeySuburbsShort(keySuburbs: [string, string, string]): string {
  return `${keySuburbs[0]}, ${keySuburbs[1]} & ${keySuburbs[2]}`;
}

// Group locations by region for the service areas page
export function getLocationsByRegion(): Record<string, LocationData[]> {
  const grouped: Record<string, LocationData[]> = {};
  for (const location of locations) {
    if (!grouped[location.region]) {
      grouped[location.region] = [];
    }
    grouped[location.region].push(location);
  }
  return grouped;
}
