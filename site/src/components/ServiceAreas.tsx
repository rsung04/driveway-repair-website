import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { getLocationsByRegion } from "../data/locations";

export function ServiceAreas() {
  const locationsByRegion = getLocationsByRegion();

  const regionOrder = [
    "Eastern Suburbs",
    "Inner Sydney",
    "Inner West",
    "Lower North Shore",
    "Upper North Shore",
    "Northern Sydney",
    "Northern Beaches",
    "Hills District",
    "Western Sydney",
    "South Western Sydney",
    "Southern Sydney",
    "Blue Mountains",
  ];

  const sortedRegions = regionOrder.filter((r) => locationsByRegion[r]);

  return (
    <section className="py-16 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            We Service All of Sydney
          </h2>
          <p className="text-lg text-surface-700">
            Emergency driveway repair across every Sydney metropolitan local government area. Find your area below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedRegions.map((region) => (
            <div key={region} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg text-surface-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-500" aria-hidden="true" />
                {region}
              </h3>
              <ul className="space-y-2">
                {locationsByRegion[region].map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to={`/${loc.slug}`}
                      className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
                    >
                      {loc.name} Driveway Repair
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
