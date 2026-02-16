import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/SEO";
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
import { ServiceAreas } from "./components/ServiceAreas";
import { useRef, useEffect } from "react";
import { ThankYou } from "./pages/ThankYou";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { LocationData, getLocationBySlug } from "./data/locations";

interface LandingPageProps {
  location?: LocationData;
}

function LandingPage({ location }: LandingPageProps) {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location?.slug]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const seoTitle = location
    ? `Emergency Driveway Repair - ${location.name} & Surrounds | 24/7 Rapid Response`
    : "Emergency Driveway Repair Sydney | 24/7 Rapid Response Across All Suburbs";

  const seoDescription = location
    ? `Emergency driveway repair in ${location.name}, ${location.keySuburbs[0]}, ${location.keySuburbs[1]} & surrounds. 24/7 rapid response. Call 1300 123 456 for immediate assistance.`
    : "Emergency driveway repair across all Sydney suburbs. 24/7 rapid response for dangerous cracks, collapses & trip hazards. Call 1300 123 456 for immediate assistance.";

  const canonicalUrl = location
    ? `https://sydneydrivewayrepair.com/${location.slug}`
    : "https://sydneydrivewayrepair.com/";

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />

      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalUrl={canonicalUrl}
      />

      <EmergencyBanner />
      <Header onContactClick={scrollToContact} location={location} />

      <main>
        <Hero onContactClick={scrollToContact} location={location} />
        <EmergencyOffer onContactClick={scrollToContact} />
        <WhatWeFix onContactClick={scrollToContact} />
        <HowItWorks onContactClick={scrollToContact} location={location} />
        <ProofSection location={location} />
        <WhyFixNow />
        <PricingTransparency location={location} />
        <FAQ location={location} />

        <div ref={contactRef}>
          <ContactForm location={location} />
        </div>

        {/* Service Areas section on homepage only */}
        {!location && <ServiceAreas />}

        <FinalCTA onContactClick={scrollToContact} location={location} />
      </main>

      <Footer location={location} />
    </div>
  );
}

function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return <LandingPage location={location} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYou conversionType="form" />} />
      <Route path="/thank-you-phone" element={<ThankYou conversionType="phone" />} />
      <Route path="/thank-you-whatsapp" element={<ThankYou conversionType="whatsapp" />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/:slug" element={<LocationPage />} />
    </Routes>
  );
}
