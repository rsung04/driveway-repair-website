import { HardHat, MapPin, Wrench } from "lucide-react";
import { LocationData } from "../data/locations";

interface LocalContentProps {
  location?: LocationData;
}

export function LocalContent({ location }: LocalContentProps) {
  if (!location?.richContent) return null;

  const { richContent } = location;

  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Driveway Repair in {location.name} — Local Expertise You Can Trust
          </h2>
          <p className="text-lg text-surface-700">{richContent.intro}</p>

          {richContent.councilInfo && (
            <div className="mt-8 bg-surface-50 border border-surface-200 rounded-lg p-6">
              <h3 className="text-lg text-primary-600 mb-2">Council Considerations</h3>
              <p className="text-surface-700">{richContent.councilInfo}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-surface-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-10">
            Common Driveway Issues in {location.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {richContent.localChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-surface-50 rounded-lg p-6 border border-surface-200"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl text-surface-900 font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-surface-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-10">
            Areas We Service in {location.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-50 rounded-lg p-6 border border-surface-200">
              <h3 className="text-xl text-surface-900 mb-4">Key Landmarks and Local Areas</h3>
              <ul className="space-y-3">
                {richContent.landmarks.map((landmark) => (
                  <li key={landmark} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-surface-700">{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>

            {richContent.suburbHighlights && richContent.suburbHighlights.length > 0 && (
              <div className="bg-surface-50 rounded-lg p-6 border border-surface-200">
                <h3 className="text-xl text-surface-900 mb-4">Suburb Highlights</h3>
                <ul className="space-y-4">
                  {richContent.suburbHighlights.map((suburb) => (
                    <li key={suburb.name}>
                      <p className="text-accent-600 font-semibold">{suburb.name}</p>
                      <p className="text-surface-700">{suburb.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-surface-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-10">
            Recent Projects in {location.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {richContent.caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.title}
                className="bg-surface-50 rounded-lg p-6 border border-surface-200"
              >
                <div className="flex items-start gap-3 mb-4">
                  <HardHat className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl text-surface-900">{caseStudy.title}</h3>
                </div>

                <p className="text-surface-700 mb-3">
                  <span className="text-surface-900 font-semibold">The Problem:</span>{" "}
                  {caseStudy.problem}
                </p>
                <p className="text-surface-700">
                  <span className="text-surface-900 font-semibold">Our Solution:</span>{" "}
                  {caseStudy.solution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
