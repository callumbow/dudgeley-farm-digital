import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Let's Create Your Perfect Day
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Get in touch to arrange a visit or discuss your event details
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-slide-up">
            <h3 className="mb-6 font-display text-2xl font-semibold text-foreground">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">Dudgeley Farm, Shropshire Hills<br />United Kingdom</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+44 1234 567890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">hello@dudgeleyfarm.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg bg-background p-6 shadow-soft border border-border">
              <h4 className="mb-3 font-display text-lg font-semibold text-foreground">Opening Hours</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-6 rounded-lg bg-background p-8 shadow-soft border border-border">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input id="name" placeholder="John & Jane Smith" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="+44 1234 567890" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Tell Us About Your Event
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Share your vision, expected date, and number of guests..." 
                  className="min-h-32 w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
