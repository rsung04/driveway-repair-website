import { AlertCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function EmergencyBanner() {
  const handlePhoneClick = () => {
    // Track banner phone button click with Google Ads conversion tracking
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }

    // Also track with dataLayer for additional analytics
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "phone_click",
        event_category: "engagement",
        event_label: "banner_phone",
        value: 1,
        button_location: "emergency_banner"
      });
      (window as any).dataLayer.push({
        event: "generate_lead",
        lead_type: "call_now",
        method: "phone",
        button_location: "emergency_banner",
        page_path: window.location.pathname,
        value: 1,
        currency: "AUD"
      });
    }

    // Track with Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact", {
        content_name: "Phone Click - Emergency Banner",
        button_location: "emergency_banner"
      });
    }
  };

  return (
    <div className="bg-accent-500 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm sm:text-base">
            <strong>24/7 Emergency Driveway Repairs</strong> – We're here to help.
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white text-accent-600 hover:bg-surface-50 flex-shrink-0"
          asChild
          onClick={handlePhoneClick}
        >
          <a href="tel:0432149176">
            <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
            Call 0432 149 176
          </a>
        </Button>
      </div>
    </div>
  );
}
