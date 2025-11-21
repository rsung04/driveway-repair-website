import { Button } from "./ui/button";
import { Shield, Clock, FileText } from "lucide-react";

interface EmergencyOfferProps {
  onContactClick: () => void;
}

export function EmergencyOffer({ onContactClick }: EmergencyOfferProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Our Emergency Driveway Rescue Offer
          </h2>
          <p className="text-lg text-surface-700">
            Fast, safe, local – with a clear, upfront guarantee.
          </p>
        </div>
        
        {/* Main Offer Box */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-8 sm:p-12 shadow-2xl mb-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl">
              Same-Day Safety Fix – Or Your Call-Out Fee Is Free
            </h3>
            
            <p className="text-lg text-primary-50">
              If we can't get to your property the same day you call (before 5:00 pm), we'll waive the emergency call-out fee. You still get a full assessment and a written repair plan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-white/20 p-4 rounded-lg">
                  <Clock className="w-8 h-8" aria-hidden="true" />
                </div>
                <p className="text-sm">
                  Priority same-day scheduling for active safety risks
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-white/20 p-4 rounded-lg">
                  <Shield className="w-8 h-8" aria-hidden="true" />
                </div>
                <p className="text-sm">
                  Temporary stabilisation so you're not stressing all night
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="bg-white/20 p-4 rounded-lg">
                  <FileText className="w-8 h-8" aria-hidden="true" />
                </div>
                <p className="text-sm">
                  Clear options: temporary fix vs. full repair vs. replacement
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-white text-primary-600 hover:bg-surface-50"
                onClick={onContactClick}
              >
                Get My Driveway Made Safe Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
