import { Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  { name: "Adaeze N.", text: "CathyCouture transformed my wedding look completely. The attention to detail was incredible! I felt like royalty on my special day.", rating: 5, type: "Client" },
  { name: "Chinedu O.", text: "Best tailor in Nigeria! My suits fit perfectly every single time. Premium quality that you can feel.", rating: 5, type: "Client" },
  { name: "Blessing A.", text: "The training program changed my life. I now run my own fashion business thanks to Uzoma's expert guidance!", rating: 5, type: "Student" },
  { name: "Ngozi E.", text: "I've been a loyal customer for 3 years. CathyCouture never disappoints. Every piece is a masterpiece.", rating: 5, type: "Client" },
  { name: "Ifeanyi K.", text: "The agbada they made for my traditional wedding was the talk of the event. Absolutely stunning craftsmanship.", rating: 5, type: "Client" },
  { name: "Funke M.", text: "As a student, I learned so much in just 6 weeks. The hands-on approach and personalized attention made all the difference.", rating: 5, type: "Student" },
];

const Testimonials = () => (
  <main className="pt-20">
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Reviews" title="What People Say" description="Real reviews from our clients and students." />

        <h3 className="font-display text-xl font-semibold text-gradient-gold mb-6 text-center">Client Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.filter(t => t.type === "Client").map((t, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6">"{t.text}"</p>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-primary text-sm">{t.type}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold text-gradient-gold mb-6 text-center">Student Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.filter(t => t.type === "Student").map((t, i) => (
            <div key={i} className="bg-card border border-border p-8 rounded-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6">"{t.text}"</p>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-primary text-sm">{t.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Testimonials;
