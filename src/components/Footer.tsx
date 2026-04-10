import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">CathyCouture</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafting elegance through fashion. Premium tailoring, design & training by Uzoma Lorrita Chioma.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Portfolio", "Testimonials", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Custom Tailoring</span>
            <span>Wedding Outfits</span>
            <span>Native/Traditional</span>
            <span>Fashion Training</span>
            <span>Men & Women's Wear</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="tel:+2347068194183" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} /> +234 706 819 4183
            </a>
            <a href="mailto:info@cathycouture.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} /> info@cathycouture.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Nigeria
            </span>
          </div>
        </div>
      </div>

      <div className="gold-divider mt-12 mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground gap-2">
        <span>© {new Date().getFullYear()} CathyCouture. All rights reserved.</span>
        <span>
          Powered by{" "}
          <a href="https://aritron.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold-light transition-colors">
            AriTron LTD
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
