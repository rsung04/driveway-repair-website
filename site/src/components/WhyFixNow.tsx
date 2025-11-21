import { X, Check } from "lucide-react";

export function WhyFixNow() {
  const comparison = [
    {
      leave: "Cracks spread and repairs get more expensive",
      fix: "Lower repair cost vs. full replacement later"
    },
    {
      leave: "Higher risk of trips, falls and liability",
      fix: "Safe access for cars, kids and deliveries"
    },
    {
      leave: "Water damage to sub-base and garage",
      fix: "Better street appeal and property value"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Leave It, or Fix It Now?
          </h2>
        </div>
        
        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Column - If You Leave It */}
          <div className="bg-surface-100 rounded-lg p-6 border-2 border-surface-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-destructive p-2 rounded-lg">
                <X className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl text-surface-900">
                If You Leave It
              </h3>
            </div>
            <ul className="space-y-4">
              {comparison.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-surface-900">{item.leave}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column - If You Fix It Now */}
          <div className="bg-primary-50 rounded-lg p-6 border-2 border-primary-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Check className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl text-surface-900">
                If You Fix It Now
              </h3>
            </div>
            <ul className="space-y-4">
              {comparison.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-surface-900">{item.fix}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="text-center bg-surface-900 text-white p-6 rounded-lg">
          <p className="text-lg">
            You'll pay for the problem either way – now or later. Fixing it early usually costs less.
          </p>
        </div>
      </div>
    </section>
  );
}
