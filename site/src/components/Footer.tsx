import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
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
              <p>Woollahra Driveway Repairs</p>
            </div>
            <p className="text-sm text-surface-300 mb-4">
              Your trusted local experts for emergency and scheduled driveway repairs across the Woollahra LGA.
            </p>
            <div className="flex gap-4 text-sm text-surface-300 justify-center md:justify-start">
              <span>ABN: 12 345 678 901</span>
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
                <a href="#why-choose-us" className="text-surface-300 hover:text-primary-300 transition-colors">
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
                  <a href="tel:1300123456" className="text-surface-300 hover:text-primary-300 transition-colors">
                    1300 123 456
                  </a>
                  <p className="text-xs text-surface-400">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a 
                  href="mailto:repairs@woollahra-driveways.com.au" 
                  className="text-surface-300 hover:text-primary-300 transition-colors break-all"
                >
                  repairs@woollahra-driveways.com.au
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-surface-300">
                  Servicing Woollahra LGA & Surrounding Areas
                </span>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-400">
            <p>
              © {currentYear} Woollahra Driveway Repairs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}