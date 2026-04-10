import SectionHeader from "@/components/SectionHeader";
import GoldDivider from "@/components/GoldDivider";
import aboutImg from "@/assets/lorrita.jpeg";
import { Heart, Target, Eye } from "lucide-react";

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-sm overflow-hidden aspect-[4/5]">
            <img src={aboutImg} alt="Uzoma Lorrita Chioma" width={800} height={1000} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">About</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mt-2 mb-4">Uzoma Lorrita Chioma</h1>
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">Lead Designer & Founder</p>
            <GoldDivider className="!mx-0 w-16 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a passion that began from a young age, Uzoma Lorrita Chioma has dedicated her life to the art of fashion. What started as a childhood fascination with fabrics and design has evolved into CathyCouture a premium fashion house known for impeccable craftsmanship and personalized elegance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Her journey in fashion is driven by a deep belief that clothing is more than just fabric, it's a form of self-expression, confidence, and art. Every stitch, every cut, and every design at CathyCouture tells a story of passion and dedication.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond designing, Uzoma is committed to empowering the next generation of fashion designers through her comprehensive training programs, ensuring that the art of fashion continues to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Connection */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To deliver premium, personalized fashion that empowers individuals to express their unique style with confidence and elegance." },
            { icon: Eye, title: "Our Vision", text: "To become Africa's most trusted fashion house setting the standard for quality, creativity, and fashion education." },
            { icon: Heart, title: "Personal Touch", text: "Every piece we create is a collaboration between designer and client. We listen, we understand, and we deliver beyond expectations." },
          ].map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm text-center">
              <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
