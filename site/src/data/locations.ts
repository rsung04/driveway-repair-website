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
    slug: "woollahra",
    region: "Eastern Suburbs",
    suburbs: [
      "Bellevue Hill", "Darling Point", "Double Bay", "Edgecliff",
      "Paddington", "Point Piper", "Rose Bay", "Vaucluse",
      "Watsons Bay", "Woollahra", "Riverdale", "Hillside", "Trumper",
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
      intro: "Driveway repair in Woollahra is rarely a simple concrete patch. Many properties in Bellevue Hill, Double Bay, Woollahra and parts of Paddington sit inside Heritage Conservation Areas where visible changes can trigger stricter assessment, and Woollahra Council closely checks work that alters street-facing crossovers or kerb lines. On top of planning controls, the local driveway stock is older and premium: sandstone edging, slate inserts, hand-laid brick pavers, and steep concrete runs dropping toward garages in Point Piper and Vaucluse. We also see recurring structural failure from mature street trees, especially Moreton Bay figs, where roots lift edges and crack joints long before the center slab fails. Along Rose Bay and the harbour side, salt-laden air accelerates surface scaling, rust staining and joint breakdown. In narrow Paddington lanes, machinery access is restricted, so repair method and staging matter as much as materials. If your driveway is cracking, sinking or unsafe, we design repairs around council rules, access constraints and finish matching so the result looks right and performs under local conditions.",
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
          answer: "Like-for-like repairs inside your lot are often straightforward, but changing crossover width, kerb works or visible heritage elements can require council approval. We identify early whether your scope is maintenance only or likely to need a DA or separate crossover permission.",
        },
        {
          question: "Can you match old sandstone and brick finishes in Bellevue Hill or Woollahra?",
          answer: "Yes. We source and blend materials to match existing sandstone edging, brick pavers and older aggregate tones so repaired sections do not stand out from period homes or streetscape-sensitive frontages.",
        },
        {
          question: "Our Paddington lane is too narrow for big machines. Can repairs still be done properly?",
          answer: "Yes. We use compact equipment and staged removal plans for rear-lane access, then rebuild the failed sections to full depth where needed rather than doing superficial skim repairs.",
        },
        {
          question: "Why does cracking keep returning near large street trees?",
          answer: "Root pressure and moisture variation keep moving the driveway edge. Durable repairs need pressure-zone removal, stronger edge restraint and properly compacted base replacement, not only crack filling.",
        },
        {
          question: "What finish works best near the harbour in Rose Bay and Vaucluse?",
          answer: "Marine-exposed driveways hold up better with dense mixes, sound jointing and protective sealing suited to salt exposure. We choose systems that resist scaling and joint washout from coastal conditions.",
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
    slug: "waverley",
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
    slug: "randwick",
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
    slug: "bayside",
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
    slug: "sydney-city",
    region: "Inner Sydney",
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
      intro: "Driveway repair in the City of Sydney usually involves more stakeholders, tighter access and stricter controls than suburban jobs. In Surry Hills, Redfern, Pyrmont and Glebe, many properties rely on shared lanes or strata access where one failed section can block multiple garages and trigger disputes. Inner-city traffic loads are also harsher: delivery vans, waste trucks and service vehicles repeatedly turn on short aprons, crushing old concrete edges and paver beds. Council requirements are a major factor, because changing a vehicle crossover or doing works in the road reserve generally needs City of Sydney approval and coordinated traffic management. In heritage streets, finish and boundary detail matter, especially where terrace frontages and sandstone kerbs define the character. Green Square precinct suburbs such as Zetland, Waterloo and Alexandria add another challenge: higher groundwater and drainage sensitivity from former low-lying industrial land can undermine bases and keep cracks wet. We focus on fast, compliant repairs that restore safe access without prolonged closures, while matching existing finishes and meeting strata or owner-corporation requirements.",
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
          answer: "Internal like-for-like repairs are usually simpler, but crossover, kerb or footpath interface works often require council approval. We confirm scope boundaries before work starts so strata or owners do not face compliance issues.",
        },
        {
          question: "Can you work on a shared driveway without shutting the whole lane?",
          answer: "Yes. We stage sections, schedule around resident movements and keep controlled access whenever possible, which is essential in dense suburbs like Surry Hills, Redfern and Pyrmont.",
        },
        {
          question: "Why are Zetland and Waterloo driveways sinking so often?",
          answer: "Higher groundwater, low-lying ground conditions and drainage pressure can weaken base layers. Durable repair requires base reconstruction and water management, not just surface patching.",
        },
        {
          question: "Our property is heritage listed. Can the repaired driveway still look original?",
          answer: "Yes. We match visible materials and boundary details so repairs respect heritage presentation while still upgrading structural performance and safety.",
        },
        {
          question: "How do you handle heavy truck turning at rear-lane entries?",
          answer: "We identify load concentration zones, reinforce those sections and set joints and edges for repeated turning stress common in inner-city service access lanes.",
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
    slug: "inner-west",
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
    slug: "burwood",
    region: "Inner West",
    suburbs: [
      "Burwood", "Croydon", "Croydon Park", "Enfield", "Strathfield South",
    ],
    keySuburbs: ["Burwood", "Croydon", "Enfield"],
    testimonials: generateTestimonials(["Burwood", "Croydon", "Enfield"]),
  },
  {
    name: "Strathfield",
    slug: "strathfield",
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
    slug: "canada-bay",
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
    slug: "north-sydney",
    region: "Lower North Shore",
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
      intro: "North Sydney driveway repairs are shaped by steep terrain, heritage controls and dense property arrangements. From Kirribilli and McMahons Point up through Neutral Bay and Crows Nest, many driveways sit on grades where braking loads and runoff quickly expose weak sub-bases. Older housing stock in Cremorne, Waverton and Wollstonecraft commonly includes brick or early concrete driveways that now show corner failure, drainage backfall and settlement at garage thresholds. Council requirements matter because North Sydney has significant heritage streets and character areas where visible changes to driveway treatments, crossovers or boundary presentation can trigger stricter assessment. In apartment and mixed-use pockets, shared and strata driveways carry more traffic than they were originally designed for, especially service vehicles and moving trucks. That repeated turning stress breaks edges and dislodges pavers near lane entries. Effective repair here means more than resurfacing: we restore structural depth, correct falls, reinforce high-load points and align with local planning controls so owners avoid repeat failures and compliance issues.",
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
          question: "Do North Sydney heritage controls affect driveway repairs?",
          answer: "They can, especially where boundary appearance, crossover form or materials are being altered. We define whether your job is like-for-like repair or a change likely to need additional council assessment.",
        },
        {
          question: "Can you repair a strata driveway while residents still access parking?",
          answer: "Yes. We stage works in sections, coordinate vehicle windows and keep emergency access so apartment blocks can remain operational throughout the repair program.",
        },
        {
          question: "Why do steep North Sydney driveways crack again after patching?",
          answer: "Grade-driven load and runoff stress quickly reopen weak repairs. Lasting results need base reconstruction, proper falls and high-stress reinforcement, not only crack sealing.",
        },
        {
          question: "Can old brick driveways in Cremorne and Neutral Bay be matched?",
          answer: "Yes. We source compatible brick tones and bond patterns where possible, then blend replacement zones so the repair is structurally stronger without obvious visual mismatch.",
        },
        {
          question: "What if my driveway meets a busy road like Military Road?",
          answer: "Crossover and boundary details must be planned carefully for safety and compliance. We set levels and transitions so vehicles enter cleanly and water does not pond at the road interface.",
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
    slug: "mosman",
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
    slug: "lane-cove",
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
    slug: "willoughby",
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
    slug: "hunters-hill",
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
    slug: "ku-ring-gai",
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
    slug: "hornsby",
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
    slug: "ryde",
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
    slug: "northern-beaches",
    region: "Northern Beaches",
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
      intro: "Northern Beaches driveway failures are driven by a tough mix of coastal exposure, variable soils and steep terrain. From Manly, Freshwater and Dee Why through to Mona Vale, Newport and Palm Beach, salt spray accelerates concrete scaling, aggregate loss and corrosion in older slabs. Inland, sandy or variable subgrades in parts of Narrabeen and Warriewood can settle unevenly, causing wheel-track depression and cracking near garage entries. Hilly access roads from Balgowlah to Avalon add another stress: repeated braking on steep driveways polishes surfaces and opens joints if drainage and traction were not designed for grade. Low-lying pockets around Narrabeen Lagoon and Dee Why flood-prone areas also demand careful runoff control so repaired surfaces do not direct water back to homes. In bushfire-prone localities such as Terrey Hills and Ingleside, material choice and site access planning need to align with broader risk settings. We deliver structural repairs that account for Northern Beaches Council crossover and local planning requirements, then finish for durability in marine and high-rain conditions.",
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
          question: "Do coastal suburbs like Manly and Freshwater need different repair materials?",
          answer: "Yes. Salt exposure shortens life of standard mixes and sealers. We use systems suited to marine conditions to reduce scaling, raveling and early joint failure.",
        },
        {
          question: "Why does my Dee Why driveway keep sinking in only one strip?",
          answer: "That pattern usually indicates localized base settlement in variable sandy ground. The failed strip needs full-depth reconstruction and compaction, not just crack filling.",
        },
        {
          question: "Can you make steep Newport or Avalon driveways less slippery?",
          answer: "Yes. We combine surface profile upgrades with drainage correction and structural repair so grip improves without trapping water at the garage threshold.",
        },
        {
          question: "Are flood controls relevant for driveway work near Narrabeen?",
          answer: "They can be. In flood-affected pockets, levels and runoff direction matter, and some related works may need council review. We plan repairs to suit those local constraints.",
        },
        {
          question: "What about bushfire-prone areas like Terrey Hills and Ingleside?",
          answer: "Bushfire-prone settings can influence design and compliance expectations. We align driveway repair scope with those site conditions while maintaining durable vehicle access.",
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
    slug: "parramatta",
    region: "Western Sydney",
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
      intro: "Parramatta driveway repairs are dominated by soil movement, heat stress and construction-era traffic damage. Across Parramatta, North Rocks, Carlingford, Ermington and surrounding suburbs, reactive clay common in Western Sydney expands with moisture and shrinks in dry periods, opening cracks and lifting slab edges if the base and joints were not built correctly. Summers are hot, so thermal expansion and rapid drying can widen existing fractures, especially on long west-facing driveways. In growth corridors and rebuild-heavy streets, frequent concrete trucks, skip bins and delivery vehicles overload residential crossovers and apron edges, causing early failure even on relatively new surfaces. The LGA also has a mixed housing profile: older established homes in Epping and Eastwood often need careful tie-in to legacy concrete or brick, while newer projects in Carlingford need corrections where original falls or compaction were rushed. We plan repairs around City of Parramatta requirements for crossovers and road reserve interfaces, then deliver structural reconstruction that resists clay-driven movement and summer cracking.",
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
          question: "Why do Parramatta driveways crack again after being patched?",
          answer: "Reactive clay movement and thermal stress usually continue beneath the patch. Durable repair needs structural-depth rebuilding and proper jointing, not surface-only treatment.",
        },
        {
          question: "Can heavy construction traffic nearby ruin my crossover even if my driveway is new?",
          answer: "Yes. Repeated truck loading can break apron edges and compact base layers unevenly. Reinforcing the entry zone is often necessary in high-redevelopment streets.",
        },
        {
          question: "Do I need City of Parramatta approval for crossover work?",
          answer: "If work alters the vehicle crossing or road reserve interface, council requirements usually apply. We clarify this before construction so the scope is compliant from day one.",
        },
        {
          question: "Can you match older concrete at homes in Epping and Eastwood?",
          answer: "Yes. We blend finish and level to reduce visual mismatch while still upgrading the repaired section structurally.",
        },
        {
          question: "What is the best timing for driveway repairs in Western Sydney heat?",
          answer: "Repairs can be done year-round, but mix design, curing control and joint planning must be adjusted for high summer temperatures to avoid early cracking.",
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
    slug: "cumberland",
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
    slug: "blacktown",
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
    slug: "the-hills",
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
    slug: "penrith",
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
    slug: "fairfield",
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
    slug: "liverpool",
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
    slug: "campbelltown",
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
    slug: "camden",
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
    slug: "canterbury-bankstown",
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
    slug: "georges-river",
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
    slug: "sutherland",
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
    slug: "hawkesbury",
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
    slug: "blue-mountains",
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
    slug: "wollondilly",
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
