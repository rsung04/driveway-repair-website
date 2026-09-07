import { Routes, Route, useParams } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/SEO";
import { EmergencyBanner } from "./components/EmergencyBanner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { EmergencyOffer } from "./components/EmergencyOffer";
import { WhatWeFix } from "./components/WhatWeFix";
import { LocalContent } from "./components/LocalContent";
import { HowItWorks } from "./components/HowItWorks";
import { ProofSection } from "./components/ProofSection";
import { WhyFixNow } from "./components/WhyFixNow";
import { PricingTransparency } from "./components/PricingTransparency";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ServiceAreas } from "./components/ServiceAreas";
import { useRef, useEffect, lazy, Suspense } from "react";
import { LocationData, getLocationBySlug } from "./data/locations";
import { getProblemPageBySlug } from "./data/problemPages";
import { ProblemPage } from "./pages/ProblemPage";

const ThankYou = lazy(() => import("./pages/ThankYou").then(m => ({ default: m.ThankYou })));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsOfService = lazy(() => import("./pages/TermsOfService").then(m => ({ default: m.TermsOfService })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

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
    ? location.metaTitle ?? `Emergency Driveway Repair - ${location.name} & Surrounds | 24/7 Rapid Response`
    : "Emergency Driveway Repair Sydney | 24/7 Rapid Response";

  const seoDescription = location
    ? location.metaDescription ?? `Emergency driveway repair in ${location.name}, ${location.keySuburbs[0]}, ${location.keySuburbs[1]} & surrounds. 24/7 rapid response. Call 0480 893 502 for immediate assistance.`
    : "Emergency driveway repair across all Sydney suburbs. 24/7 rapid response for dangerous cracks, collapses & trip hazards. Call 0480 893 502 for immediate assistance.";

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
        location={location}
        noIndex={!!location && !location.richContent}
      />

      <EmergencyBanner />
      <Header onContactClick={scrollToContact} location={location} />

      <main>
        <Hero onContactClick={scrollToContact} location={location} />
        <EmergencyOffer onContactClick={scrollToContact} />
        <WhatWeFix onContactClick={scrollToContact} />
        <LocalContent location={location} />
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
  const problemPage = slug ? getProblemPageBySlug(slug) : undefined;
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (problemPage) {
    return <ProblemPage page={problemPage} />;
  }

  if (!location) {
    return <Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>;
  }

  return <LandingPage location={location} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<Suspense fallback={<div className="min-h-screen" />}><ThankYou conversionType="form" /></Suspense>} />
      <Route path="/thank-you-phone" element={<Suspense fallback={<div className="min-h-screen" />}><ThankYou conversionType="phone" /></Suspense>} />
      <Route path="/thank-you-whatsapp" element={<Suspense fallback={<div className="min-h-screen" />}><ThankYou conversionType="whatsapp" /></Suspense>} />
      <Route path="/privacy" element={<Suspense fallback={<div className="min-h-screen" />}><PrivacyPolicy /></Suspense>} />
      <Route path="/terms" element={<Suspense fallback={<div className="min-h-screen" />}><TermsOfService /></Suspense>} />
      <Route path="/:slug" element={<LocationPage />} />
      <Route path="*" element={<Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense>} />
    </Routes>
  );
}
