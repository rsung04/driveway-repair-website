export interface ProblemPageBlock {
  type: "paragraph" | "ordered-list" | "table";
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
}

export interface ProblemPageSection {
  heading: string;
  blocks: ProblemPageBlock[];
}

export interface ProblemPageData {
  slug: string;
  h1: string;
  metaTitle: string;
  description: string;
  helper: string;
  sections: ProblemPageSection[];
  leaveIt: string;
  fixIt: string;
  feeling: string;
  serviceAreas: { label: string; href: string; note: string }[];
  relatedLinks?: { label: string; href: string }[];
  steps: { title: string; description: string }[];
  contactDescription: string;
  issuePlaceholder: string;
  faqs: { question: string; answer: string }[];
  notUs: { label: string; reason: string }[];
}

export const problemPages: ProblemPageData[] = [
  {
    slug: "trip-hazard-driveway-repair",
    h1: "Trip Hazard Driveway Repair",
    metaTitle: "Trip Hazard Driveway Repair | Sydney Driveway Repair",
    description: "A driveway trip hazard is a raised lip, dropped panel, or uneven joint that catches a foot or bumper. Grind flush only if the slab has not moved; if the panel sank or the joint failed, cut-out and rebuild is the lasting fix. Make it safe today, then quote the repair. Call 0480 893 502 or Request Callback.",
    helper: "Send suburb + what’s wrong (lip at the garage threshold, raised joint, dropped apron, kids catching the edge). No work until you agree.",
    sections: [
      {
        heading: "What a driveway trip hazard actually is",
        blocks: [
          {
            type: "paragraph",
            text: "A trip lip on a driveway is usually a height change at a joint, a panel that has dropped relative to its neighbour, a heaved edge, or a failed apron where the car bottoms out or a foot catches. It is not “cosmetic roughness.” Liability for visitors, kids, couriers, and strata common property starts the moment someone can catch that edge.",
          },
          {
            type: "paragraph",
            text: "If the slab is still level and only a high ridge remains, a specialist concrete grinder may be enough. If the panel has moved, the base has washed out, or the joint keeps reopening, grinding alone leaves the same lip next season. That is the decision this page exists to clarify — before anyone books a machine or a full replace.",
          },
          {
            type: "paragraph",
            text: "Sydney Driveway Repair handles the make-safe and lasting panel rebuild when grinding is not enough. Call 0480 893 502 or Request Callback.",
          },
        ],
      },
      {
        heading: "Grind vs rebuild (the comparison grinders skip)",
        blocks: [
          {
            type: "table",
            headers: ["Option", "When it fits", "When it does not"],
            rows: [
              ["Dust-controlled grind flush", "Thin high ridge on a slab that has not moved", "Dropped panel, washed-out base, joint still opening"],
              ["Same-day make-safe", "Lip catching a foot / bumper; need the drive usable today", "Decorative “makeover” with no hazard"],
              ["Panel / joint rebuild", "Failed section; height change from movement", "Overlaying a slab that is still heaving"],
              ["Full replace of the failed run", "Base failed beyond a panel repair", "A sound drive that only needs a ridge taken down"],
            ],
          },
          {
            type: "paragraph",
            text: "We are not Mastercut. We are not a warehouse-floor grinding company. If a grind-only job is clearly enough, say so on the call and send that work to a grinder. If the slab has moved, we quote cut-out + rebuild.",
          },
        ],
      },
    ],
    leaveIt: "Someone catches the lip before the next school run, while the joint keeps opening and the bumper keeps scraping.",
    fixIt: "The walkway and car entry are usable the same day, with a written quote for the lasting repair instead of another skim that fails.",
    feeling: "watching kids walk to the car without scanning the slab.",
    serviceAreas: [
      { label: "Driveway Repair Woollahra", href: "/driveway-repair-woollahra", note: "heritage edges, fig heave, salt lips" },
      { label: "Driveway Repair City of Sydney", href: "/driveway-repair-sydney-city", note: "strata thresholds, shared lanes, van loads" },
      { label: "Driveway Repair North Sydney", href: "/driveway-repair-north-sydney", note: "steep grades, garage lips, brick joints" },
      { label: "Driveway Repair Northern Beaches", href: "/driveway-repair-northern-beaches", note: "coastal edge failure, washout lips (emergency repair, not resurfacing)" },
      { label: "Driveway Repair Parramatta", href: "/driveway-repair-parramatta", note: "clay heave lips, crushed crossovers" },
    ],
    steps: [
      { title: "Call Us or Request a Callback", description: "Suburb + where the lip is (photo if you can)." },
      { title: "On-site call", description: "Has the slab moved, or is it only a high ridge?" },
      { title: "Immediate safety actions", description: "Temporary make-safe if the drive must be used today." },
      { title: "Clear quote for lasting repair", description: "Written. No work until you agree. Grind-only jobs we do not take are named early." },
    ],
    contactDescription: "Send the suburb and what’s wrong (trip lip at garage, raised joint, dropped apron, bumper scrape). We call back with a make-safe plan and an upfront quote — no work until you agree.",
    issuePlaceholder: "e.g., Trip lip at garage threshold, dropped apron...",
    faqs: [
      {
        question: "Is grinding enough for a driveway trip hazard?",
        answer: "Only if the slab has not moved and the hazard is a thin high ridge. If a panel has dropped, the base has washed out, or the joint keeps reopening, grinding leaves the same lip next season. We call that on site — grind-only goes to a grinder; movement gets a cut-out and rebuild quote.",
      },
      {
        question: "Who is liable if someone trips on my driveway?",
        answer: "Property owners and strata managers can be liable when a known lip catches a visitor, courier, or resident. Make the walkway safe first, then fix the cause. We do not give legal advice — we make the edge safe to use and quote the lasting repair. Call 0480 893 502 if the lip is already catching feet.",
      },
      {
        question: "Can you make a trip lip safe the same day?",
        answer: "Yes, when the hazard is a raised edge, dropped apron, or bumper-catching threshold. Same-day make-safe gets the drive usable; the lasting panel rebuild is quoted in writing before that work starts. Request Callback with suburb + a photo of the lip.",
      },
      {
        question: "Do you grind concrete driveways?",
        answer: "No. We are a driveway repair / make-safe crew, not a concrete grinding contractor. If a flush grind is clearly enough, we say so and point you at a grinder. If the slab has moved, we quote rebuild. Do not book us expecting a warehouse-style grind-and-seal.",
      },
    ],
    notUs: [
      { label: "Concrete grinders (Mastercut-style)", reason: "They occupy this SERP. Wrong trade when the slab has moved." },
      { label: "Resin / slab-jack engineers", reason: "Not our offer. Do not sell lift as our method." },
      { label: "Stormwater plumbers", reason: "Wrong page. Drain jobs belong on the storm page send-away." },
      { label: "New decorative pour / spray-on crews", reason: "Stay on trip / make-safe / panel rebuild." },
      { label: "Structural engineers for underpinning design", reason: "We make-safe and rebuild failed driveway sections; we do not certify foundations." },
    ],
  },
  {
    slug: "storm-driveway-repair-sydney",
    h1: "Storm Driveway Repair Sydney",
    metaTitle: "Storm Driveway Repair Sydney | Sydney Driveway Repair",
    description: "After a storm, driveway repair means the edge washed out, the base undermined, or a hole under the apron — not a blocked stormwater pipe. Call a plumber if the drain backs up; call a driveway crew if the concrete failed. We make it safe the same day, then quote the lasting repair. Call 0480 893 502 or Request Callback.",
    helper: "Send suburb + what’s wrong (washed-out edge, hole under the apron, undermined base, car can’t enter). If the pipe is blocked, say so — we will send that job to a plumber.",
    sections: [
      {
        heading: "Storm washout vs blocked drain (send drain jobs away)",
        blocks: [
          {
            type: "paragraph",
            text: "After heavy rain or an east-coast low, two different failures get searched as “storm driveway”.",
          },
          {
            type: "ordered-list",
            items: [
              "Blocked stormwater / pit / pipe — water ponds on the drive because the drain cannot take it. That is a plumber job (CCTV, clearing, relining, dig-up to the pipe). We are not licensed plumbers. If your search is flooded driveway + gurgling pit + water coming from the drain, call a stormwater plumber, not us.",
              "Driveway washout / undermined base / collapsed edge — water scoured the base under the slab, the edge dropped, a hole opened, or the apron broke. The pipe may be fine. The concrete is not. That is cut-out, re-base, and pour — a driveway repair / make-safe job.",
            ],
          },
          {
            type: "paragraph",
            text: "Sydney Driveway Repair takes the second case: same-day make-safe so you can use the drive, then a written quote for the lasting rebuild. Call 0480 893 502 or Request Callback.",
          },
          {
            type: "paragraph",
            text: "Blocked drain, CCTV, or stormwater pipe work → plumber. Washed-out slab, collapsed edge, hole under the apron → us.",
          },
        ],
      },
      {
        heading: "What after-storm driveway damage looks like",
        blocks: [
          {
            type: "table",
            headers: ["Symptom", "Likely job", "Who"],
            rows: [
              ["Water ponds; pit gurgling; pipe smell", "Clear / CCTV / reline stormwater", "Plumber — not us"],
              ["Edge dropped after the low; gravel washed out", "Undermined base; panel rebuild", "Driveway repair"],
              ["Hole under the apron; car bottoms out", "Washout cavity; make-safe then rebuild", "Driveway repair"],
              ["Lip appeared overnight after runoff", "Scour at joint / crossover", "Driveway repair"],
              ["Driveway cut only to reach a pipe", "Dig-up for drain access", "Plumber (they reinstate or you call a concreter after)"],
            ],
          },
          {
            type: "paragraph",
            text: "We do not quote resin injection as the storm fix.",
          },
        ],
      },
    ],
    leaveIt: "The undermined edge keeps crumbling every wet week, and the hole under the apron gets bigger before the next school run.",
    fixIt: "Temporary make-safe so the car can enter, then a written quote to rebuild the washed-out section — not another skim over a hollow base.",
    feeling: "getting the car in without wondering if the apron will drop further in the next downpour.",
    serviceAreas: [
      { label: "Driveway Repair Northern Beaches", href: "/driveway-repair-northern-beaches", note: "easterly washout, coastal edge failure (emergency repair only; not spray-on)" },
      { label: "Driveway Repair Woollahra", href: "/driveway-repair-woollahra", note: "steep harbour runoff, Point Piper backfall, sandstone edges" },
      { label: "Driveway Repair North Sydney", href: "/driveway-repair-north-sydney", note: "steep wet entry, Kirribilli / Waverton grades" },
      { label: "Driveway Repair City of Sydney", href: "/driveway-repair-sydney-city", note: "Green Square wet base, shared-lane apron failure" },
      { label: "Driveway Repair Parramatta", href: "/driveway-repair-parramatta", note: "clay shrink-swell after wet/dry cycles, crushed crossovers" },
    ],
    steps: [
      { title: "Call Us or Request a Callback", description: "Suburb + storm damage (photo if you can). Say if the pit is blocked." },
      { title: "Triage on the call", description: "Drain job → send to plumber. Slab washout → on-site make-safe assessment." },
      { title: "Immediate safety actions", description: "Barricade / temporary support / make the entry usable if safe to do so." },
      { title: "Clear quote for lasting repair", description: "Re-base and rebuild the failed section. Written. No work until you agree." },
    ],
    contactDescription: "Send the suburb and what’s wrong (washed-out edge, hole under apron, undermined base — or “think it’s the drain”). We call back with a make-safe plan and an upfront quote — or we send you to a plumber if the pipe is the job. No work until you agree.",
    issuePlaceholder: "e.g., Washed-out edge, hole under apron, blocked pit...",
    faqs: [
      {
        question: "Is a flooded driveway after a storm a plumbing job or a concreting job?",
        answer: "If water is backing up from the pit or pipe, call a stormwater plumber. If the slab edge washed out, the base is hollow, or a hole opened under the apron, that is driveway repair. We take the concrete failure — we are not licensed plumbers and will send drain jobs away.",
      },
      {
        question: "Can you repair a driveway that washed out in a storm the same day?",
        answer: "We can often make the entry safe the same day so the car can get in, then quote the lasting re-base and rebuild in writing. Full pour of a large washout may need a short stage. Call 0480 893 502 with suburb + a photo.",
      },
      {
        question: "Do you fix blocked stormwater under the driveway?",
        answer: "No. CCTV, clearing, relining, and dig-up to the pipe are plumber work. Some plumbers cut the driveway to reach the drain and reinstate later. If your only problem is the blocked pipe, do not book us. If the slab itself collapsed from scour, Request Callback.",
      },
      {
        question: "Will insurance cover storm driveway damage?",
        answer: "That depends on your policy and whether the failure is stormwater, flood, or gradual base failure — we do not invent claim statistics or promise cover. We document what failed on site and quote the repair. Ask your insurer; we make the drive safe and rebuild the washed-out section if you proceed.",
      },
    ],
    notUs: [
      { label: "Stormwater / blocked-drain plumbers", reason: "They occupy this SERP. Send those leads away." },
      { label: "Resin / slab-jack engineers", reason: "Not our storm offer. Do not sell lift as washout repair." },
      { label: "Concrete grinders", reason: "Wrong trade for an undermined base." },
      { label: "Earthmoving / retaining-wall diggers as the product", reason: "We repair the driveway; we are not a 24/7 excavation brand page." },
      { label: "Licensed plumbers", reason: "State it plainly. No stormwater twin URL." },
    ],
  },
  {
    slug: "collapsed-driveway-sydney",
    h1: "Collapsed Driveway Sydney",
    metaTitle: "Collapsed Driveway Sydney | Sydney Driveway Repair",
    description: "A collapsed driveway in Sydney usually means an edge dropped, a hole opened, or the car bottoms out — not always a whole slab that needs engineering lift. Same-day make-safe gets the drive usable; lasting repair is cut-out and rebuild of the failed section. Resin slab-jacking is a different trade. Call 0480 893 502 or Request Callback.",
    helper: "Send suburb + what’s wrong (edge gone, hole under apron, car bottoms out, lip appeared, can’t use the drive). No work until you agree.",
    sections: [
      {
        heading: "Make-safe vs lift vs replace (answer before the brand)",
        blocks: [
          {
            type: "paragraph",
            text: "When people search “collapsed driveway Sydney” they usually mean one of three jobs:",
          },
          {
            type: "ordered-list",
            items: [
              "Make-safe today — The edge dropped, a hole opened, the apron failed, or a lip appeared and someone could catch a foot or bumper. Priority is usable entry and a safe walkway, then a written quote for lasting work.",
              "Lift / relevel (resin injection / slab jacking) — The slab as a whole has sunk and an engineering specialist injects material to raise it without a full replace. Mainmark, The Lifting Specialists, and similar firms own that method. We do not sell resin slab-jacking.",
              "Cut-out and rebuild / replace the failed run — The base washed out, the panel broke, or the edge is gone. Lasting repair is remove the failed concrete, compact a new base, and pour / rebuild — not filler over a hollow.",
            ],
          },
          {
            type: "paragraph",
            text: "Sydney Driveway Repair takes (1) and (3): same-day make-safe, then cut-out and rebuild of the failed section. If your slab needs engineering lift across a large sunken plate, we say so on the call and point you at a lifting specialist. Call 0480 893 502 or Request Callback.",
          },
        ],
      },
      {
        heading: "What “collapsed” looks like on a Sydney drive",
        blocks: [
          {
            type: "table",
            headers: ["What you see", "Likely path", "Not our offer"],
            rows: [
              ["Edge dropped / hole at the apron", "Make-safe → cut-out + rebuild", "Grind-only"],
              ["Car bottoms out at the garage", "Make-safe → panel rebuild", "Spray-on coat"],
              ["Lip between panels after movement", "Make-safe → joint / panel repair", "Warehouse grind as the product"],
              ["Whole slab sunken flat, still intact", "Refer to slab-jack / lift specialist", "Us pretending to inject resin"],
              ["Base washed out after rain", "See also storm driveway repair", "Plumber drain clear alone"],
            ],
          },
          {
            type: "paragraph",
            text: "We do not publish resin method pages or claim a 50-year warranty.",
          },
        ],
      },
    ],
    leaveIt: "The hole or dropped edge keeps catching a bumper or a foot, and the failed section spreads toward a full replace.",
    fixIt: "The drive is usable the same day, with a written quote to rebuild the collapsed section instead of another temporary patch.",
    feeling: "getting kids and the car out without testing whether the apron will drop further.",
    serviceAreas: [
      { label: "Driveway Repair Woollahra", href: "/driveway-repair-woollahra", note: "sandstone edge collapse, fig heave, heritage constraints" },
      { label: "Driveway Repair City of Sydney", href: "/driveway-repair-sydney-city", note: "strata shared lanes, Green Square wet base, van turning loads" },
      { label: "Driveway Repair North Sydney", href: "/driveway-repair-north-sydney", note: "steep-grade apron failure, brick joint collapse" },
      { label: "Driveway Repair Northern Beaches", href: "/driveway-repair-northern-beaches", note: "coastal edge washout / collapse (emergency repair, not resurfacing)" },
      { label: "Driveway Repair Parramatta", href: "/driveway-repair-parramatta", note: "clay heave collapse, crushed crossover" },
    ],
    relatedLinks: [
      { label: "Trip Hazard Driveway Repair", href: "/trip-hazard-driveway-repair" },
      { label: "Storm Driveway Repair Sydney", href: "/storm-driveway-repair-sydney" },
    ],
    steps: [
      { title: "Call Us or Request a Callback", description: "Suburb + what collapsed (photo if you can)." },
      { title: "On-site call", description: "Make-safe vs lift-vs-rebuild. If resin lift is the honest answer, we say so." },
      { title: "Immediate safety actions", description: "Barricade, temporary support, or make the entry usable if safe." },
      { title: "Clear quote for lasting repair", description: "Cut-out and rebuild of the failed section. Written. No work until you agree." },
    ],
    contactDescription: "Send the suburb and what’s wrong (collapsed edge, hole under apron, car bottoms out, can’t use the drive). We call back with a make-safe plan and an upfront quote — or we tell you when a lifting specialist is the better trade. No work until you agree.",
    issuePlaceholder: "e.g., Collapsed edge, hole under apron, car bottoms out...",
    faqs: [
      {
        question: "What should I do if my driveway collapses?",
        answer: "Keep people and cars off the failed section. Photograph the drop or hole. Call for same-day make-safe if the entry is unsafe, then get a written quote for lasting rebuild. If the whole intact slab has sunk evenly, ask whether resin lift (a different trade) fits better than cut-out. Call 0480 893 502.",
      },
      {
        question: "Is slab jacking the same as driveway repair?",
        answer: "No. Slab jacking / resin injection lifts a sunken slab without replacing it — engineering specialists do that. Driveway repair here means make-safe plus cut-out and rebuild of a failed edge, hole, or panel. We explain lift-vs-rebuild on the call; we do not sell resin injection as our method.",
      },
      {
        question: "Can you make a collapsed driveway safe the same day?",
        answer: "Often yes when the failure is a dropped edge, open hole, or failed apron that blocks the car. Make-safe gets the drive usable; lasting rebuild is quoted in writing before that work starts. Large structural collapse may need staging. Request Callback.",
      },
      {
        question: "Do you underpin or inject resin under driveways?",
        answer: "No. Underpinning and resin slab-jacking are specialist engineering offers. We make the driveway safe to use and rebuild failed concrete sections. If your slab needs lift across a large sunken plate, we say so and point you at that trade rather than pretend we are them.",
      },
    ],
    notUs: [
      { label: "Resin / slab-jack / lifting engineers (Mainmark-style)", reason: "They occupy the broad “collapsed / sinking” SERP. Mention lift-vs-rebuild; do not sell their method." },
      { label: "Concrete grinders", reason: "Wrong trade for a hole or dropped edge." },
      { label: "Stormwater plumbers", reason: "Drain jobs belong on the storm page send-away." },
      { label: "Structural engineers certifying foundations", reason: "We repair driveway slabs; we do not certify house underpinning." },
      { label: "New decorative pour / spray-on crews", reason: "Stay on collapse / make-safe / rebuild." },
    ],
  },
];

export function getProblemPageBySlug(slug: string): ProblemPageData | undefined {
  return problemPages.find((page) => page.slug === slug);
}
