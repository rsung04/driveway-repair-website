import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useEffect } from "react";

export function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Terms of Service | Sydney Driveway Repair"
                description="Our specific terms, conditions, and service agreement details for all driveway repair works across Sydney and surrounding suburbs."
                canonicalUrl="https://sydneydrivewayrepair.com/terms"
            />
            <Header onContactClick={() => window.location.href = '/#contact'} />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-surface-900">Terms of Service</h1>
                <div className="prose prose-slate max-w-none text-surface-700 space-y-6">
                    <p className="text-sm text-surface-500">Last updated: December 10, 2025</p>

                    <p>These terms and conditions outline the rules and regulations for the use of Sydney Driveway Repair's Website, located at sydneydrivewayrepair.com.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Sydney Driveway Repair if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">2. Services</h2>
                    <p>We provide driveway repair, maintenance, and resurfacing services across all Sydney metropolitan areas. All quotes provided are estimates and subject to site inspection. Emergency call-out fees may apply for after-hours services.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">3. Booking and Cancellation</h2>
                    <p>Bookings are subject to availability. Cancellations made less than 24 hours before the scheduled service time may incur a cancellation fee.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">4. Payment Terms</h2>
                    <p>Payment is due upon completion of the work unless otherwise agreed in writing. We accept cash, credit cards, and bank transfers.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">5. Warranties and Liability</h2>
                    <p>We guarantee our workmanship for a standard period as per Australian Consumer Law. However, we are not liable for damage caused by pre-existing structural issues, tree roots, or extreme weather events occurring after the repair.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">6. Contact Information</h2>
                    <p>If you require any more information or have any questions about our Terms of Service, please feel free to contact us by email at info@sydneydrivewayrepair.com.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
