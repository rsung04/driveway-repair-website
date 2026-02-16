import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { LocationData } from "../data/locations";

interface ProofSectionProps {
  location?: LocationData;
}

const defaultTestimonials = [
  {
    text: "Called at 7am, they had the driveway safe before school pickup. Clear, honest and tidy.",
    author: "Sarah",
    location: "Eastern Suburbs",
  },
  {
    text: "Professional team who knew exactly what to do. They stabilised our collapsed driveway edge within hours and came back to finish the permanent repair the next week.",
    author: "Michael",
    location: "North Shore",
  },
  {
    text: "Transparent pricing, no hidden costs. They walked us through every option and let us decide what worked for our budget.",
    author: "Jennifer",
    location: "Inner West",
  },
];

export function ProofSection({ location }: ProofSectionProps) {
  const testimonials = location ? location.testimonials : defaultTestimonials;
  const trustLine = location
    ? `Trusted by homeowners across ${location.keySuburbs[0]}, ${location.keySuburbs[1]}, ${location.keySuburbs[2]} & surrounding suburbs.`
    : "Trusted by homeowners across Sydney's Eastern Suburbs, North Shore, Inner West & beyond.";
  const metricLine = location
    ? `Driveways repaired across the ${location.name} area`
    : "Driveways repaired across greater Sydney";

  return (
    <section className="py-16 px-4 bg-primary-50" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            {location
              ? `Why Homeowners in ${location.name} Trust Us`
              : "Why Sydney Homeowners Trust Us"}
          </h2>
          <p className="text-lg text-surface-700">
            Local, reliable and built on repeat work and referrals.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-surface-200 bg-white">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary-300" aria-hidden="true" />
                <blockquote className="text-surface-700 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="pt-2 border-t border-surface-200">
                  <p className="text-surface-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-surface-700">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Line */}
        <div className="text-center mb-8">
          <p className="text-surface-900">
            {trustLine}
          </p>
        </div>

        {/* Proof Metric */}
        <div className="text-center bg-white p-8 rounded-lg shadow-sm">
          <p className="text-4xl sm:text-5xl text-primary-600 mb-2">500+</p>
          <p className="text-surface-900">
            {metricLine}
          </p>
        </div>
      </div>
    </section>
  );
}
