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
                           <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
      <path d="M16.004 2.003c-7.732 0-14.001 6.269-14.001 14.001 0 2.468.655 4.876 1.898 6.991L2 30l7.208-1.883A13.94 13.94 0 0 0 16.004 30c7.732 0 14.001-6.269 14.001-14.001S23.736 2.003 16.004 2.003zm0 25.598a11.6 11.6 0 0 1-5.916-1.619l-.424-.252-4.399 1.152 1.174-4.29-.277-.44a11.57 11.57 0 0 1-1.778-6.149c0-6.408 5.215-11.622 11.622-11.622 6.408 0 11.622 5.215 11.622 11.622-.002 6.407-5.216 11.598-11.624 11.598zm6.372-8.698c-.349-.175-2.066-1.019-2.386-1.136-.32-.116-.553-.175-.786.175-.233.349-.903 1.136-1.107 1.369-.204.233-.407.262-.756.087-.349-.175-1.474-.543-2.807-1.732-1.038-.924-1.738-2.066-1.942-2.415-.204-.349-.022-.538.153-.711.157-.157.349-.407.524-.611.175-.204.233-.349.349-.582.116-.233.058-.437-.029-.611-.087-.175-.786-1.894-1.078-2.592-.284-.681-.572-.589-.786-.6-.204-.009-.437-.011-.67-.011s-.611.087-.932.437c-.32.349-1.223 1.194-1.223 2.913s1.252 3.38 1.427 3.613c.175.233 2.464 3.761 5.97 5.274.834.36 1.485.575 1.993.736.838.266 1.601.229 2.203.139.672-.1 2.066-.845 2.357-1.661.291-.816.291-1.516.204-1.661-.087-.146-.32-.233-.67-.408z" />
    </svg> Or chat on WhatsApp instead
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
