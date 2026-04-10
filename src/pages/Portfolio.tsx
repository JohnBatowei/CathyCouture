import SectionHeader from "@/components/SectionHeader";
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import heroImage from "@/assets/hero-fashion.jpg";
import trainingImg from "@/assets/training.jpg";
import aboutImg from "@/assets/about-designer.jpg";

const galleryItems = [
  { img: fashion1, label: "Traditional Aso-Ebi" },
  { img: fashion2, label: "Men's Suit" },
  { img: fashion3, label: "Bridal Gown" },
  { img: heroImage, label: "Haute Couture" },
  { img: aboutImg, label: "Behind the Scenes" },
  { img: trainingImg, label: "Training Academy" },
];

const Portfolio = () => (
  <main className="pt-20">
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeader subtitle="Gallery" title="Our Portfolio" description="A showcase of premium craftsmanship and elegant designs." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-sm aspect-[3/4]">
              <img src={item.img} alt={item.label} loading="lazy" width={800} height={1000} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="font-display text-lg font-semibold text-foreground">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Portfolio;
