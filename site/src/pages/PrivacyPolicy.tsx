import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useEffect } from "react";

export function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Privacy Policy | Woollahra Driveway Repairs"
                description="Our privacy policy outlines how we collect, use, and protect your personal information when you use the Woollahra Driveway Repairs website."
                canonicalUrl="https://sydneydrivewayrepair.com/privacy"
            />
            <Header onContactClick={() => window.location.href = '/#contact'} />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-8 text-surface-900">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none text-surface-700 space-y-6">
                    <p className="text-sm text-surface-500">Last updated: December 10, 2025</p>

                    <p>At Woollahra Driveway Repairs, accessed from sydneydrivewayrepair.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Woollahra Driveway Repairs and how we use it.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information that you strictly provide to us for the purpose of getting a quote or service. The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Name and contact details (email, phone number)</li>
                        <li>Address information for service delivery</li>
                        <li>Details of the repair issue (photos, description)</li>
                    </ul>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Process your transactions and manage your orders</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">3. Log Files and Analytics</h2>
                    <p>Woollahra Driveway Repairs follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">4. Advertising Partners Privacy Policies</h2>
                    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Woollahra Driveway Repairs. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Woollahra Driveway Repairs, which are sent directly to users' browser.</p>

                    <h2 className="text-xl font-bold text-surface-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at repairs@woollahra-driveways.com.au.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
