import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";

interface FinalCTAProps {
  onContactClick: () => void;
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-3xl sm:text-4xl mb-4">
          Driveway Unsafe? Don't Wait Until Someone Gets Hurt.
        </h2>
        
        <p className="text-lg text-primary-50 max-w-3xl mx-auto">
          If your driveway has collapsed, cracked badly or become dangerous to walk or drive on, treat it as an emergency. 
          We handle urgent driveway repairs across the Woollahra area every week – and we're ready to help you next.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white"
            asChild
          >
            <a href="tel:1300123456">
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
            Emergency driveway repairs in Bellevue Hill, Darling Point, Double Bay, Edgecliff, Paddington, Point Piper, Rose Bay, Vaucluse, Watsons Bay, Woollahra, Riverdale, Hillside & Trumper.
          </p>
        </div>
      </div>
    </section>
  );
}