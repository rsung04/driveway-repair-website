import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Helmet } from "react-helmet-async";
import { LocationData } from "../data/locations";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  location?: LocationData;
  items?: FAQItem[];
  title?: string;
}

export function FAQ({ location, items, title }: FAQProps) {
  const faqs: FAQItem[] = [
    {
      question: "Can you make my Sydney driveway safe today if someone already tripped on the lip?",
      answer: "Yes — same-day make-safe for a trip lip, dropped slab, or collapsed edge across Greater Sydney. We stabilise first so the walk to the car is usable, then give a written quote for the lasting repair. No work until you agree. Call Now 0480 893 502 or Request Callback with suburb + a photo.",
    },
    {
      question: "How fast for an emergency driveway repair before school pickup in Sydney?",
      answer: "Most metro call-outs are same-day, often within a few hours depending on demand. Tell us suburb + hazard (trip / collapse / storm / clay). We prioritise active safety risks over decorative quotes. Call Now 0480 893 502.",
    },
    {
      question: "Do you work after hours when the edge gave way in the rain?",
      answer: "Yes — that’s when a lot of driveway failures show up. After-hours is for make-safe (cover, temporary support, usable access), not a midnight decorative pour. Call Now 0480 893 502 or Request Callback.",
    },
    {
      question: "Is this covered by home insurance in NSW?",
      answer: "Every policy differs. We can provide photos and documentation for a claim if needed. We do not invent cover outcomes. Make-safe first; paperwork second. Request Callback with suburb + issue.",
    },
    {
      question: "Who is this for — and who is it not for?",
      answer: "For a Sydney homeowner whose drive has cracked, sunk, or collapsed (trip lip, scraping car, edge failure). Same-day make-safe, then written quote. Not for shopping a decorative new pour, not for “got 15 minutes?” browsers, not for a cash patch that ignores the base. Call Now 0480 893 502 or Request Callback.",
    },
    {
      question: "What’s the catch on same-day?",
      answer: "Same-day means we attend before 5:00 pm the day you call, or the emergency call-out fee is waived. You still get on-site assessment and a written plan. We do not publish the fee in dollars here. No work starts until you agree.",
    },
  ];
  const localFaqs = location?.richContent?.localFaqs ?? [];
  const allFaqs = items ?? [...faqs, ...localFaqs];

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
              {title ?? "Emergency Driveway Repair – FAQs"}
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
