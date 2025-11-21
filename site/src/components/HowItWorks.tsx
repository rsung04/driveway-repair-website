import { Button } from "./ui/button";
import { Phone, Search, Shield, FileText } from "lucide-react";

interface HowItWorksProps {
  onContactClick: () => void;
}

export function HowItWorks({ onContactClick }: HowItWorksProps) {
  const steps = [
    {
      icon: Phone,
      number: "1",
      title: "Call Us or Request a Callback",
      description: "You tell us what happened, send a quick photo if you can, and confirm your suburb."
    },
    {
      icon: Search,
      number: "2",
      title: "Rapid On-Site Assessment",
      description: "We attend your property, assess structural & safety risk, and walk you through options."
    },
    {
      icon: Shield,
      number: "3",
      title: "Immediate Safety Actions",
      description: "We stabilise the area (temporary or permanent fix, depending on the situation)."
    },
    {
      icon: FileText,
      number: "4",
      title: "Clear Quote for Long-Term Repair",
      description: "You receive a written quote for permanent repair or replacement – no pressure, no surprises."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            How Our Emergency Driveway Repair Works
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line - hidden on mobile */}
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-12 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-primary-200"
                    aria-hidden="true"
                  />
                )}
                
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-500 text-white rounded-full mb-4 relative z-10">
                    <Icon className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <div className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-8 mb-4 relative z-20">
                    <span>{step.number}</span>
                  </div>
                  <h3 className="text-surface-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-surface-700">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white text-sm sm:text-base whitespace-normal h-auto py-3 px-6"
            asChild
          >
            <a href="tel:1300123456">
              Call for Emergency Help in Bellevue Hill, Double Bay, Rose Bay & Nearby
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}