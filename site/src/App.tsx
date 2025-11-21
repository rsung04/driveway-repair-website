import { useRef } from "react";
import { Toaster } from "./components/ui/sonner";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { EmergencyOffer } from "./components/EmergencyOffer";
import { WhatWeFix } from "./components/WhatWeFix";
import { HowItWorks } from "./components/HowItWorks";
import { ProofSection } from "./components/ProofSection";
import { WhyFixNow } from "./components/WhyFixNow";
import { PricingTransparency } from "./components/PricingTransparency";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Toast notifications */}
      <Toaster position="top-right" />
      
      {/* Emergency Banner */}
      <EmergencyBanner />
      
      {/* Header/Navigation */}
      <Header onContactClick={scrollToContact} />
      
      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onContactClick={scrollToContact} />
        
        {/* 3. Emergency Offer Section */}
        <EmergencyOffer onContactClick={scrollToContact} />
        
        {/* 4. What We Fix Section */}
        <WhatWeFix onContactClick={scrollToContact} />
        
        {/* 5. How It Works Section */}
        <HowItWorks onContactClick={scrollToContact} />
        
        {/* 6. Proof Section */}
        <ProofSection />
        
        {/* 7. Why Fix Now Section */}
        <WhyFixNow />
        
        {/* 8. Pricing Transparency Section */}
        <PricingTransparency />
        
        {/* 9. FAQ Section */}
        <FAQ />
        
        {/* Contact Form */}
        <div ref={contactRef}>
          <ContactForm />
        </div>
        
        {/* 10. Final CTA Section */}
        <FinalCTA onContactClick={scrollToContact} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
