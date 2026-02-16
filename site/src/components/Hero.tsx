import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { LocationData, formatSuburbList } from "../data/locations";

interface HeroProps {
  onContactClick: () => void;
  location?: LocationData;
}

export function Hero({ onContactClick, location }: HeroProps) {
  const headline = location
    ? `Emergency Driveway Repair – 24/7 Rapid Response in ${location.name} & Surrounds`
    : "Emergency Driveway Repair – 24/7 Rapid Response Across Sydney";

  const subtext = location
    ? `Serving ${formatSuburbList(location.suburbs)} – We're on-site fast.`
    : "Serving all Sydney metropolitan areas – from the Eastern Suburbs to the Hills, North Shore to the South West. We're on-site fast.";

  const urgencyText = location
    ? `Priority emergency bookings available today in ${location.keySuburbs[0]}, ${location.keySuburbs[1]} & ${location.keySuburbs[2]} – limited slots.`
    : "Priority emergency bookings available today across Sydney – limited slots.";

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-12 px-4 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-surface-900">
              {headline}
            </h1>

            <p className="text-lg text-surface-700">
              {subtext}
            </p>

            <ul className="space-y-3" aria-label="Key benefits">
              <li className="flex items-start gap-3 text-surface-900">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>On-site fast for dangerous cracks, collapses & trip hazards</span>
              </li>

              <li className="flex items-start gap-3 text-surface-900">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Safe temporary stabilisation + long-term repair options</span>
              </li>

              <li className="flex items-start gap-3 text-surface-900">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Local, licensed driveway specialists – no random subcontractors</span>
              </li>

              <li className="flex items-start gap-3 text-surface-900">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Upfront pricing before we start – no surprise add-ons</span>
              </li>

              <li className="flex items-start gap-3 text-surface-900">
                <svg
                  className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Emergency call-outs 7 days a week</span>
              </li>
            </ul>

            <div className="space-y-3 pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white"
                asChild
              >
                <a href="tel:0432149176">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Call Now for Emergency Repair
                </a>
              </Button>

              <div className="sm:ml-4 sm:inline-block">
                <button
                  onClick={onContactClick}
                  className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-2"
                >
                  Or request a fast quote
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/hero-image.webp"
                alt="Professional driveway technician - White glove emergency service"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width="1584"
                height="672"
                decoding="async"
              />
            </div>

            {/* 24/7 Badge */}
            <div className="absolute top-4 right-4 bg-accent-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="text-sm">24/7</p>
              <p>Emergency Response</p>
            </div>
          </div>
        </div>

        {/* Urgency Strip */}
        <div className="mt-8 bg-accent-500 text-white px-6 py-4 rounded-lg text-center">
          <p className="text-sm sm:text-base">
            {urgencyText}
          </p>
        </div>
      </div>
    </section>
  );
}
