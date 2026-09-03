import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Helmet } from "react-helmet-async";
import { LocationData, formatSuburbList } from "../data/locations";

interface FAQProps {
  location?: LocationData;
}

export function FAQ({ location }: FAQProps) {
  const areaName = location ? `the ${location.name} area` : "the Sydney metropolitan area";
  const suburbAnswer = location
    ? `Yes. We regularly attend call-outs in ${formatSuburbList(location.suburbs)}.`
    : "Yes. We service all Sydney metropolitan local government areas, from the Eastern Suburbs and Inner West to the North Shore, Northern Beaches, Western Sydney, and the Sutherland Shire.";

  const faqs = [
    {
      question: "Who is this for — and who is it not for?",
      answer: "For a Sydney homeowner whose drive has cracked, sunk, or collapsed: a trip lip, a dropped slab, a car scraping, an edge that gave way. Same-day make-safe, then a written quote for the lasting repair. Not for someone shopping a decorative new pour, and not for a cheapest-cash patch with no look at the base. If that is you, Call Now 0432 149 176 or Request Callback.",
    },
    {
      question: "What’s the catch on same-day?",
      answer: "Same-day means we attend before 5:00 pm the day you call, or the emergency call-out fee is waived. You still get the on-site assessment and the written plan. We do not publish the fee in dollars on this page. No work starts until you agree.",
    },
    {
      question: "Why not just get the cheapest cash pour?",
      answer: "A cheap pour that skips a failed base usually comes back as the same trip lip. We make the drive safe first and give a written quote before work — that is the difference, not a lower day-rate.",
    },
    {
      question: "How fast can you get here?",
      answer: `Most emergency call-outs in ${areaName} are attended the same day, often within a few hours, depending on demand.`,
    },
    {
      question: "Do you work after hours or weekends?",
      answer: "Yes – that's when a lot of driveway failures happen. We prioritise active safety risks.",
    },
    {
      question: "Can you just make it safe for now?",
      answer: "Yes. We can stabilise the area and give you options for full repair when it suits your schedule and budget.",
    },
    {
      question: "Is this covered by insurance?",
      answer: "Every policy is different. We can provide photos and documentation to support your claim if needed.",
    },
    {
      question: location ? "Do you service all of these suburbs?" : "What areas do you service?",
      answer: suburbAnswer,
    },
  ];
  const localFaqs = location?.richContent?.localFaqs ?? [];
  const allFaqs = [...faqs, ...localFaqs];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
              Emergency Driveway Repair – FAQs
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {allFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface-50 rounded-lg px-6 border border-surface-200"
              >
                <AccordionTrigger className="text-left text-surface-900 hover:text-primary-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-surface-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
