import { AlertCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function EmergencyBanner() {
  return (
    <div className="bg-accent-500 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm sm:text-base">
            <strong>Emergency Driveway Repair?</strong> We're available 24/7 for urgent repairs.
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white text-accent-600 hover:bg-surface-50 flex-shrink-0"
          asChild
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
