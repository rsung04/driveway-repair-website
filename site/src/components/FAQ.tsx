import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How fast can you get here?",
      answer: "Most emergency call-outs in the Woollahra area are attended the same day, often within a few hours, depending on demand."
    },
    {
      question: "Do you work after hours or weekends?",
      answer: "Yes – that's when a lot of driveway failures happen. We prioritise active safety risks."
    },
    {
      question: "Can you just make it safe for now?",
      answer: "Yes. We can stabilise the area and give you options for full repair when it suits your schedule and budget."
    },
    {
      question: "Is this covered by insurance?",
      answer: "Every policy is different. We can provide photos and documentation to support your claim if needed."
    },
    {
      question: "Do you service all of these suburbs?",
      answer: "Yes. We regularly attend call-outs in Bellevue Hill, Darling Point, Double Bay, Edgecliff, Paddington, Point Piper, Rose Bay, Vaucluse, Watsons Bay, Woollahra, Riverdale, Hillside and Trumper."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Emergency Driveway Repair – FAQs
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
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
  );
}
