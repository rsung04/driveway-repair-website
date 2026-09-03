import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { LocationData, locations } from "../data/locations";

interface FooterProps {
  location?: LocationData;
}

export function Footer({ location }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const brandName = location
    ? `${location.name} Driveway Repairs`
    : "Sydney Driveway Repair";
  const areaDescription = location
    ? `Your trusted local experts for emergency and scheduled driveway repairs across the ${location.name} LGA.`
    : "Your trusted local experts for emergency and scheduled driveway repairs across greater Sydney.";
  const serviceArea = location
    ? `Servicing ${location.name} LGA & Surrounding Areas`
    : "Servicing All Sydney Metropolitan Areas";

  return (
    <footer className="bg-surface-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p>{brandName}</p>
            </Link>
            <p className="text-sm text-surface-300 mb-4">
              {areaDescription}
            </p>
            <div className="flex gap-4 text-sm text-surface-300 justify-center md:justify-start">
              <span>ABN: 16 166 521 204</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-surface-300 hover:text-primary-300 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-surface-300 hover:text-primary-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-surface-300 hover:text-primary-300 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-300 hover:text-primary-300 transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <Link to="/" className="text-surface-300 hover:text-primary-300 transition-colors">
                  All Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-surface-300">
              <li>Crack Repair</li>
              <li>Pothole Repair</li>
              <li>Driveway Resurfacing</li>
              <li>Preventive Maintenance</li>
              <li>Emergency Repairs</li>
              <li>Sealcoating</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a href="tel:0480893502" className="text-surface-300 hover:text-primary-300 transition-colors">
                    0480 893 502
                  </a>
                  <p className="text-xs text-surface-400">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="mailto:info@sydneydrivewayrepair.com"
                  className="text-surface-300 hover:text-primary-300 transition-colors break-all"
                >
                  info@sydneydrivewayrepair.com
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-surface-300">
                  <p>Sydney, NSW, Australia</p>
                  <p className="text-xs text-surface-400">{serviceArea}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Clock className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-surface-300">
                  <p>Mon-Fri: 7AM - 6PM</p>
                  <p>Sat: 8AM - 4PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="py-8 border-t border-surface-700">
          <h3 className="text-center mb-6">Service Areas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className={`text-center px-2 py-1.5 rounded transition-colors ${
                  location?.slug === loc.slug
                    ? "bg-primary-500 text-white"
                    : "text-surface-300 hover:text-primary-300 hover:bg-surface-800"
                }`}
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-400">
            <p>
              &copy; {currentYear} Sydney Driveway Repair. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
