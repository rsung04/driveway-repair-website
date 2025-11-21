import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    suburb: "",
    phone: "",
    issue: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Request received! We'll contact you within 30 minutes.", {
      description: "Check your phone for our call."
    });
    
    // Reset form
    setFormData({
      name: "",
      suburb: "",
      phone: "",
      issue: ""
    });
    
    setIsSubmitting(false);
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
            Request a Fast Quote
          </h2>
          <p className="text-lg text-surface-700">
            Can't call right now? Fill out this form and we'll get back to you within 30 minutes during business hours.
          </p>
        </div>
        
        <div className="bg-surface-50 rounded-lg p-6 sm:p-8 shadow-lg border border-surface-200">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="e.g., Double Bay, Bellevue Hill"
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
