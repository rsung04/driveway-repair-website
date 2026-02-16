import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { LocationData, formatSuburbList } from "../data/locations";

interface FinalCTAProps {
  onContactClick: () => void;
  location?: LocationData;
}

export function FinalCTA({ onContactClick, location }: FinalCTAProps) {
  const areaText = location
    ? `the ${location.name} area`
    : "Sydney";
  const suburbLine = location
    ? `Emergency driveway repairs in ${formatSuburbList(location.suburbs)}.`
    : "Emergency driveway repairs across all Sydney metropolitan areas – Eastern Suburbs, North Shore, Inner West, Western Sydney, Northern Beaches & more.";

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-3xl sm:text-4xl mb-4">
          Driveway Unsafe? Don't Wait Until Someone Gets Hurt.
        </h2>

        <p className="text-lg text-primary-50 max-w-3xl mx-auto">
          If your driveway has collapsed, cracked badly or become dangerous to walk or drive on, treat it as an emergency.
          We handle urgent driveway repairs across {areaText} every week – and we're ready to help you next.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white"
            asChild
            onClick={() => {
              // Track phone click with Google Ads conversion tracking
              if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                (window as any).gtag_report_conversion();
              }

              // Also track with dataLayer for additional analytics
              if (typeof window !== "undefined" && (window as any).dataLayer) {
                (window as any).dataLayer.push({
                  event: "phone_click",
                  event_category: "engagement",
                  event_label: "final_cta_phone",
                  value: 1,
                  button_location: "final_cta"
                });
              }

              // Track with Facebook Pixel
              if (typeof window !== "undefined" && (window as any).fbq) {
                (window as any).fbq("track", "Contact", {
                  content_name: "Phone Click - Final CTA",
                  button_location: "final_cta"
                });
              }
            }}
          >
            <a href="tel:0432149176">
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call Now for Emergency Repair
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
            onClick={onContactClick}
          >
            <MessageSquare className="w-5 h-5 mr-2" aria-hidden="true" />
            Request a Fast Quote
          </Button>
        </div>

        <div className="pt-8 border-t border-primary-400">
          <p className="text-sm text-primary-100">
            {suburbLine}
          </p>
        </div>
      </div>
    </section>
  );
}
