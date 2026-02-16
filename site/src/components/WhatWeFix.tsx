import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface WhatWeFixProps {
  onContactClick: () => void;
}

export function WhatWeFix({ onContactClick }: WhatWeFixProps) {
  const issues = [
    "Sudden driveway collapses or sinkholes",
    "Dangerous cracks & lifted slabs creating trip hazards",
    "Broken sections from tree roots or vehicle impact",
    "Pooling water & drainage-related surface damage",
    "Loose pavers, crumbling edges & exposed rebar",
    "Access issues for cars, prams or wheelchairs"
  ];

  return (
    <section className="py-16 px-4 bg-primary-50" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            What We Can Fix – Today
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <svg
                className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-surface-900">{issue}</span>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg text-surface-900">
            If it's stopping you from safely using your driveway, we treat it as an emergency.
          </p>

          <button
            onClick={onContactClick}
            className="text-primary-600 hover:text-primary-700 underline inline-flex items-center gap-2"
          >
            Tell us what happened
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
