import { CheckCircle } from "lucide-react";
import { LocationData } from "../data/locations";

interface PricingTransparencyProps {
  location?: LocationData;
}

export function PricingTransparency({ location }: PricingTransparencyProps) {
  const areaText = location
    ? `${location.name} LGA & nearby suburbs`
    : "all Sydney suburbs";

  const pricingPoints = [
    `Emergency call-out with on-site assessment in ${areaText}`,
    "Upfront quote before any work",
    "Temporary safety fix options for tight budgets",
    "Written quote for full repair or replacement (valid for 30 days)"
  ];

  return (
    <section className="py-16 px-4 bg-primary-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Straightforward Pricing, No Surprise Add-Ons
          </h2>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
          <ul className="space-y-4">
            {pricingPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-surface-900 text-lg">{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-surface-200">
            <p className="text-surface-900 text-center text-lg">
              Our job is to make your driveway safe today and prevent a much more expensive problem later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
