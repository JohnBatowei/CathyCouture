import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle, Phone, Star, ChevronDown, Users, Award, Scissors, GraduationCap, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import GoldDivider from "@/components/GoldDivider";
import heroImage from "@/assets/hero-fashion.jpg";
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import trainingImg from "@/assets/training.jpg";

const WHATSAPP = "https://wa.me/2347068194183";

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="CathyCouture fashion" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-0">
        <div className="max-w-2xl">
          <span className="text-primary text-sm tracking-[0.4em] uppercase font-body block mb-4">Premium Fashion House</span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-gradient-gold">CathyCouture</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl font-normal italic">
              Crafting Elegance Through Fashion
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-2">Designed by <span className="text-primary font-medium">Uzoma Lorrita Chioma</span></p>
          <GoldDivider className="!mx-0 w-16 my-6" />
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="bg-gradient-gold text-primary-foreground px-7 py-3 font-semibold text-sm tracking-wide uppercase rounded-sm hover:scale-105 transition-transform">
              Book Appointment
            </Link>
            <Link to="/services#training" className="border border-primary text-primary px-7 py-3 font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              Enroll for Training
            </Link>
            <a href={`${WHATSAPP}?text=Hello%20CathyCouture%2C%20I%27d%20like%20to%20chat`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#25D366] text-[#25D366] px-7 py-3 font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-[#25D366] hover:text-[#fff] transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <a href="#why" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce z-10">
        <ChevronDown size={32} />
      </a>
    </section>

    {/* Trust Indicators */}
    <section className="bg-secondary py-8">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {[
          { icon: Users, label: "100+ Satisfied Clients" },
          { icon: GraduationCap, label: "Trained Students" },
          { icon: Award, label: "Premium Quality Guarantee" },
          { icon: Scissors, label: "Expert Craftsmanship" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-muted-foreground">
            <Icon size={24} className="text-primary" />
            <span className="text-sm font-medium tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section id="why" className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Why Us" title="Why Choose CathyCouture" description="We don't just sew clothes — we craft confidence." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Perfect Fitting", desc: "Every piece is tailored to your exact measurements for a flawless fit." },
            { title: "Premium Finishing", desc: "We use only high-quality fabrics and impeccable finishing techniques." },
            { title: "Personalized Designs", desc: "Your style, your vision — brought to life by our expert designers." },
            { title: "Professional Training", desc: "Learn the art of fashion from an industry-leading designer." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm text-center hover:border-primary transition-colors group">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <SectionHeader subtitle="Process" title="How It Works" description="Getting your dream outfit is simple." />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Contact Us", desc: "Reach out via WhatsApp or our booking form." },
            { step: "02", title: "Design & Measure", desc: "Discuss your design preferences and get measured." },
            { step: "03", title: "Production", desc: "Our expert team brings your vision to life." },
            { step: "04", title: "Delivery / Pickup", desc: "Receive your perfectly crafted outfit." },
          ].map((item, i) => (
            <div key={i} className="relative text-center">
              <span className="font-display text-6xl font-bold text-primary/20">{item.step}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
              {i < 3 && <ArrowRight className="hidden md:block absolute top-8 -right-4 text-primary/30" size={24} />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Preview */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Our Work" title="Featured Creations" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: fashion1, label: "Traditional Wear" },
            { img: fashion2, label: "Men's Tailoring" },
            { img: fashion3, label: "Bridal Collection" },
          ].map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-sm aspect-[3/4]">
              <img src={item.img} alt={item.label} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="font-display text-lg font-semibold text-foreground">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/portfolio" className="border border-primary text-primary px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-block">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>

    {/* Training Preview */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">Academy</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient-gold mt-2 mb-4">Fashion Training</h2>
            <GoldDivider className="!mx-0 w-16 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Learn from one of Nigeria's finest designers. Our comprehensive training covers everything from measurement techniques to advanced sewing mastery.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Measurement Techniques", "Pattern Drafting", "Sewing Mastery", "Premium Finishing"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={16} className="text-primary" /> {s}
                </div>
              ))}
            </div>
            <Link to="/services#training" className="bg-gradient-gold text-primary-foreground px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded-sm hover:scale-105 transition-transform inline-block">
              Learn More
            </Link>
          </div>
          <div className="rounded-sm overflow-hidden">
            <img src={trainingImg} alt="Fashion Training" loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Reviews" title="What Our Clients Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Adaeze N.", text: "CathyCouture transformed my wedding look completely. The attention to detail was incredible!", rating: 5, type: "Client" },
            { name: "Chinedu O.", text: "Best tailor in Nigeria! My suits fit perfectly every single time. Premium quality.", rating: 5, type: "Client" },
            { name: "Blessing A.", text: "The training program changed my life. I now run my own fashion business thanks to Uzoma!", rating: 5, type: "Student" },
          ].map((t, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-primary text-sm">{t.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-3xl">
        <SectionHeader subtitle="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-4">
          {[
            { q: "How long does sewing take?", a: "Depending on the complexity, most outfits take 3–14 days. Rush orders are available." },
            { q: "Do you deliver?", a: "Yes! We deliver nationwide across Nigeria. Pickup is also available at our studio." },
            { q: "How do I enroll for training?", a: "Simply contact us via WhatsApp or fill out our booking form. Classes start monthly." },
            { q: "What is the payment process?", a: "We require a 50% deposit to begin production. Balance is due before delivery." },
          ].map((faq, i) => (
            <details key={i} className="bg-card border border-border rounded-sm group">
              <summary className="flex items-center justify-between p-5 cursor-pointer text-foreground font-display font-medium">
                {faq.q}
                <ChevronDown size={20} className="text-primary group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-xl text-center">
        <SectionHeader subtitle="Stay Updated" title="Get Fashion Tips & Updates" description="Join our newsletter for exclusive fashion tips, updates, and offers." />
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-card border border-border rounded-sm px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          <button type="submit" className="bg-gradient-gold text-primary-foreground px-6 py-3 font-semibold text-sm tracking-wide uppercase rounded-sm hover:scale-105 transition-transform whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4">Ready to Stand Out?</h2>
        <GoldDivider />
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Let CathyCouture craft your next statement piece. Premium quality, perfect fit, unforgettable style.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-gradient-gold text-primary-foreground px-8 py-3.5 font-semibold text-sm tracking-wide uppercase rounded-sm hover:scale-105 transition-transform">
            Order Now
          </Link>
          <a href={`${WHATSAPP}?text=Hello%20CathyCouture%2C%20I%20want%20to%20place%20an%20order`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#25D366] text-[#25D366] px-8 py-3.5 font-semibold text-sm tracking-wide uppercase rounded-sm hover:bg-[#25D366] hover:text-[#fff] transition-colors">
             <svg viewBox="0 0 32 32" width="28" height="20" fill="white">
      <path d="M16.004 2.003c-7.732 0-14.001 6.269-14.001 14.001 0 2.468.655 4.876 1.898 6.991L2 30l7.208-1.883A13.94 13.94 0 0 0 16.004 30c7.732 0 14.001-6.269 14.001-14.001S23.736 2.003 16.004 2.003zm0 25.598a11.6 11.6 0 0 1-5.916-1.619l-.424-.252-4.399 1.152 1.174-4.29-.277-.44a11.57 11.57 0 0 1-1.778-6.149c0-6.408 5.215-11.622 11.622-11.622 6.408 0 11.622 5.215 11.622 11.622-.002 6.407-5.216 11.598-11.624 11.598zm6.372-8.698c-.349-.175-2.066-1.019-2.386-1.136-.32-.116-.553-.175-.786.175-.233.349-.903 1.136-1.107 1.369-.204.233-.407.262-.756.087-.349-.175-1.474-.543-2.807-1.732-1.038-.924-1.738-2.066-1.942-2.415-.204-.349-.022-.538.153-.711.157-.157.349-.407.524-.611.175-.204.233-.349.349-.582.116-.233.058-.437-.029-.611-.087-.175-.786-1.894-1.078-2.592-.284-.681-.572-.589-.786-.6-.204-.009-.437-.011-.67-.011s-.611.087-.932.437c-.32.349-1.223 1.194-1.223 2.913s1.252 3.38 1.427 3.613c.175.233 2.464 3.761 5.97 5.274.834.36 1.485.575 1.993.736.838.266 1.601.229 2.203.139.672-.1 2.066-.845 2.357-1.661.291-.816.291-1.516.204-1.661-.087-.146-.32-.233-.67-.408z" />
    </svg> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
