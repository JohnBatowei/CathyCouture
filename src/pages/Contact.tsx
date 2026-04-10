import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GoldDivider from "@/components/GoldDivider";

const WHATSAPP = "https://wa.me/2347068194183";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello CathyCouture,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0APreferred Date: ${form.date}%0AMessage: ${form.message}`;
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeader subtitle="Get in Touch" title="Book an Appointment" description="Fill out the form below or chat with us directly on WhatsApp." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <input
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none"
              >
                <option value="">Select Service</option>
                <option>Custom Tailoring - Women</option>
                <option>Custom Tailoring - Men</option>
                <option>Wedding Outfit</option>
                <option>Traditional/Native Wear</option>
                <option>Fashion Training</option>
                <option>Other</option>
              </select>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none"
              />
              <textarea
                placeholder="Additional Message (optional)"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
              />
              <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3.5 font-semibold text-sm tracking-wide uppercase rounded-sm hover:scale-[1.02] transition-transform">
                Submit Booking
              </button>
              <div className="text-center">
                <GoldDivider className="my-4" />
                <a
                  href={`${WHATSAPP}?text=Hello%20CathyCouture%2C%20I%20want%20to%20book%20an%20appointment`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:underline text-sm font-medium"
                >
                  <MessageCircle size={16} /> Or chat on WhatsApp instead
                </a>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+2347068194183" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={20} className="text-primary" /> +234 706 819 4183
                  </a>
                  <a href={`${WHATSAPP}?text=Hello%20CathyCouture`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle size={20} className="text-primary" /> WhatsApp (Primary)
                  </a>
                  <a href="mailto:info@cathycouture.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} className="text-primary" /> info@cathycouture.com
                  </a>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={20} className="text-primary" /> Nigeria
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
