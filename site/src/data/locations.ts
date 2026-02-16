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
    testimonials: generateTestimonials(["Rose Bay", "Bellevue Hill", "Double Bay"]),
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
    testimonials: generateTestimonials(["Surry Hills", "Redfern", "Zetland"]),
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
    testimonials: generateTestimonials(["Cremorne", "Neutral Bay", "Crows Nest"]),
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
    testimonials: generateTestimonials(["Manly", "Dee Why", "Mona Vale"]),
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
    testimonials: generateTestimonials(["Parramatta", "Epping", "Carlingford"]),
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
