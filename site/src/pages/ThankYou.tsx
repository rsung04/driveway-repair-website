import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Phone, MessageCircle, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

interface ThankYouProps {
  conversionType: "form" | "phone" | "whatsapp";
}

export function ThankYou({ conversionType }: ThankYouProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // 10 second auto-redirect
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    // Track conversion with Google Ads
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-979104683/q-sjCLrbxcobEKvn79ID",
        value: 1.0,
        currency: "AUD"
      });
    }

    // Also push to dataLayer for additional tracking
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "conversion",
        send_to: "AW-979104683/q-sjCLrbxcobEKvn79ID",
        value: 1.0,
        currency: "AUD",
        conversion_type: conversionType
      });
    }

    // Track conversion with Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: "Driveway Repair Inquiry",
        content_category: "Service Request",
        value: 1.0,
        currency: "AUD",
        conversion_type: conversionType
      });
    }

    // Track conversion with Google Analytics 4 via dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "generate_lead",
        event_category: "engagement",
        event_label: conversionType,
        value: 1,
        conversion_type: conversionType
      });
    }
  }, [conversionType]);

  const getMessage = () => {
    switch (conversionType) {
      case "phone":
        return {
          title: "Thank You for Calling!",
          description: "Your call has been received. We'll be in touch within 30 minutes.",
          icon: <Phone className="w-16 h-16 text-accent-500" />
        };
      case "whatsapp":
        return {
          title: "Thank You for Your Inquiry!",
          description: "Your message has been received via WhatsApp. We'll be in touch within 30 minutes.",
          icon: <MessageCircle className="w-16 h-16 text-accent-500" />
        };
      default:
        return {
          title: "Thank You for Your Inquiry!",
          description: "Your form submission has been received. We'll be in touch within 30 minutes.",
          icon: <CheckCircle className="w-16 h-16 text-accent-500" />
        };
    }
  };

  const message = getMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center px-4 py-8">
      <SEO
        title="Thank You | Sydney Driveway Repair"
        description="Thank you for your inquiry."
        noIndex={true}
      />
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12 text-center border border-surface-200">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            {message.icon}
          </div>

          {/* Thank You Message */}
          <h1 className="text-3xl sm:text-4xl text-surface-900 mb-4 font-bold">
            {message.title}
          </h1>

          <div className="space-y-4 text-lg text-surface-700 mb-8">
            <p>{message.description}</p>
            <p className="font-medium text-surface-900">
              We'll contact you within the next 30 minutes using your preferred contact method.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-surface-50 rounded-lg p-6 mb-8 border border-surface-200">
            <h2 className="text-xl font-semibold text-surface-900 mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                  1
                </div>
                <p className="text-surface-700">
                  <strong>Review:</strong> Our team reviews your request immediately
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                  2
                </div>
                <p className="text-surface-700">
                  <strong>Contact:</strong> We call you within 30 minutes (or your preferred time)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                  3
                </div>
                <p className="text-surface-700">
                  <strong>Quote:</strong> Receive upfront pricing with no hidden fees
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold">
                  4
                </div>
                <p className="text-surface-700">
                  <strong>Schedule:</strong> Book your repair at a convenient time
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Return Home Button */}
            <Button
              variant="outline"
              className="w-full border-primary-500 text-primary-700 hover:bg-primary-50"
              onClick={() => navigate("/")}
            >
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>

            {/* Emergency Contact */}
            <Button
              asChild
              className="bg-accent-500 hover:bg-accent-600 text-white w-full"
            >
              <a href="tel:0432149176">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 0432 149 176
              </a>
            </Button>
          </div>

          <p className="text-sm text-surface-500">
            Redirecting to home in 10 seconds...
          </p>

        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-surface-600">
          <p className="font-medium mb-1">Servicing:</p>
          <p>
            All Sydney metropolitan areas including Eastern Suburbs, North Shore,
            Inner West, Western Sydney, Northern Beaches & more
          </p>
        </div>
      </div>
    </div>
  );
}
