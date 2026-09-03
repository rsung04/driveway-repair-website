import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { Send } from "lucide-react";
import { LocationData } from "../data/locations";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  location?: LocationData;
}

export function ContactForm({ location }: ContactFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    suburb: "",
    phone: "",
    issue: "",
    urgency: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const suburbPlaceholder = location
    ? `e.g., ${location.keySuburbs[0]}, ${location.keySuburbs[1]}`
    : "e.g., Bondi, Parramatta, Cronulla";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formBody = new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        suburb: formData.suburb,
        phone: formData.phone,
        issue: formData.issue,
        urgency: formData.urgency
      }).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      });
      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          lead_type: "request_callback",
          method: "form",
          button_location: "contact_form",
          page_path: window.location.pathname,
          value: 1,
          currency: "AUD"
        });
      }

      toast.success("Request received! We'll contact you within 30 minutes.", {
        description: "Check your phone for our call."
      });
      navigate("/thank-you");
      setFormData({
        name: "",
        suburb: "",
        phone: "",
        issue: "",
        urgency: ""
      });
    } catch (error) {
      console.error("Netlify form submission error:", error);
      toast.error("Something went wrong. Please call us directly at 0480 893 502.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 px-4 bg-white" id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-surface-900 mb-4">
            Request Callback
          </h2>
          <p className="text-lg text-surface-700">
            Send the suburb and what’s wrong (crack, sink, collapse, trip lip). We call back with a make-safe plan and an upfront quote — no work until you agree.
          </p>
          <p className="text-base text-surface-700 mt-3">
            Pick which you need so we call back with the right slot, not a generic callback.
          </p>
        </div>

        <div className="bg-surface-50 rounded-lg p-6 sm:p-8 shadow-lg border border-surface-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-white border-surface-300"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="suburb">Suburb *</Label>
              <Input
                id="suburb"
                name="suburb"
                type="text"
                required
                value={formData.suburb}
                onChange={handleInputChange}
                className="bg-white border-surface-300"
                placeholder={suburbPlaceholder}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white border-surface-300"
                placeholder="0400 000 000"
              />
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium leading-none">What do you need? *</legend>
              <label className="flex items-start gap-3 text-surface-900">
                <input
                  type="radio"
                  name="urgency"
                  value="emergency"
                  required
                  checked={formData.urgency === "emergency"}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span>Emergency make-safe today (trip hazard / collapse / can’t use the drive)</span>
              </label>
              <label className="flex items-start gap-3 text-surface-900">
                <input
                  type="radio"
                  name="urgency"
                  value="scheduled"
                  required
                  checked={formData.urgency === "scheduled"}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <span>Scheduled quote (not urgent — plan a lasting repair)</span>
              </label>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="issue">Brief Issue Description</Label>
              <Textarea
                id="issue"
                name="issue"
                rows={4}
                value={formData.issue}
                onChange={handleInputChange}
                className="bg-white border-surface-300 resize-none"
                placeholder="e.g., Large crack across driveway, concrete slab has sunk..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent-500 hover:bg-accent-600 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" aria-hidden="true" />
                  Request Callback
                </>
              )}
            </Button>

            <p className="text-xs text-surface-700 text-center">
              By submitting, you agree to be contacted about your repair request. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
