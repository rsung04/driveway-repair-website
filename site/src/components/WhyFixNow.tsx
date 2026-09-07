import { X, Check } from "lucide-react";

export function WhyFixNow() {
  const comparison = [
    {
      leave: "The lip keeps catching a foot or bumper before the next school run while the crack spreads toward a full replace",
      fix: "The drive is usable the same day — kids, cars and deliveries — with a written quote instead of a surprise invoice"
    },
    {
      leave: "You keep scanning the slab every time the kids walk to the car",
      fix: "You can watch the kids walk to the car without scanning the slab"
    },
    {
      leave: "A dropped edge or failed base keeps taking water and load",
      fix: "A make-safe plan first, then a lasting repair quote before work starts"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="why-choose-us">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Leave It, or Fix It Now?
          </h2>
          <p className="text-lg text-surface-700 max-w-3xl mx-auto">
            Leave the lip and someone can catch a foot or a bumper before the next school run, while the crack keeps spreading toward a full replace. Fix it now and the drive is usable the same day — kids, cars, deliveries — with a written quote instead of a surprise invoice.
          </p>
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
            Make the walkway safe today; get the lasting repair quote before any work starts.
          </p>
        </div>
      </div>
    </section>
  );
}
