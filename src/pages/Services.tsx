import { CheckCircle, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GoldDivider from "@/components/GoldDivider";
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import trainingImg from "@/assets/training.jpg";

const WHATSAPP = "https://wa.me/2347068194183";

const Services = () => (
  <main className="pt-20">
    {/* Tailoring */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="What We Offer" title="Custom Tailoring" description="Bespoke fashion for every occasion crafted to perfection." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: fashion1, title: "Women's Wear", desc: "Elegant dresses, gowns, skirts, and blouses tailored to your style." },
            { img: fashion2, title: "Men's Wear", desc: "Sharp suits, agbada, senator wear, and more — impeccably fitted." },
            { img: fashion3, title: "Wedding Outfits", desc: "Stunning bridal and groom attire for your special day." },
            { img: fashion1, title: "Native/Traditional", desc: "Aso-ebi, ankara, lace, and traditional outfits with a modern touch." },
          ].map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-sm overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionHeader subtitle="Pricing" title="Pricing Guide" description="Quality fashion at competitive prices. Prices start from:" />
        <div className="max-w-md mx-auto bg-card border border-border rounded-sm p-8 text-center">
          <p className="text-muted-foreground text-sm mb-6">Contact us for a detailed quote based on your specific design. Prices vary by complexity, fabric, and design.</p>
          <a
            href={`${WHATSAPP}?text=Hello%20CathyCouture%2C%20I%20want%20to%20know%20the%20pricing%20for%20my%20outfit`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded-sm hover:scale-105 transition-transform"
          >
            <MessageCircle size={16} /> Get a Quote
          </a>
        </div>
      </div>
    </section>

    {/* Training */}
    <section id="training" className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Academy" title="Fashion Training" description="Master the art of fashion design with our comprehensive training program." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src={trainingImg} alt="Fashion Training" loading="lazy" width={1200} height={800} className="w-full rounded-sm mb-8" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">What You'll Learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Measurement Techniques", "Pattern Drafting", "Sewing Mastery", "Premium Finishing", "Fabric Selection", "Business Skills"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={16} className="text-primary shrink-0" /> {s}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-6">
              <strong className="text-foreground">Duration:</strong> 4–8 weeks (depending on program)
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              { title: "Ladies Training", price: "₦200,000", desc: "Complete fashion training for women" },
              { title: "Men's Training", price: "₦200,000", desc: "Complete fashion training for men" },
              { title: "Both (Combined)", price: "₦300,000", desc: "Master both men's and women's fashion" },
            ].map((plan, i) => (
              <div key={i} className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-lg font-semibold text-foreground">{plan.title}</h4>
                  <span className="text-gradient-gold font-display text-2xl font-bold">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                <a
                  href={`${WHATSAPP}?text=Hello%20CathyCouture%2C%20I%20want%20to%20enroll%20for%20${encodeURIComponent(plan.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 text-sm font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle size={14} /> Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
