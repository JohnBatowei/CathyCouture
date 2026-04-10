import { useState } from 'react';
import SectionHeader from "@/components/SectionHeader";
import { MoveRight, LoaderCircle } from 'lucide-react';

// Assuming imports are available. We'll simulate 12 items for the structure.
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import heroImage from "@/assets/hero-fashion.jpg";
import trainingImg from "@/assets/training.jpg";
import aboutImg from "@/assets/about-designer.jpg";
import img1 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.34 AM.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.34 AM.jpeg";
import img3 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.35 AM (1).jpeg";
import img4 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.35 AM (2).jpeg";
import img5 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.35 AM.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.38 AM (1).jpeg";
import img7 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.48 AM.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.47 AM.jpeg";
import img9 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.47 AM (1).jpeg";
import img10 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.46 AM (3).jpeg";
import img11 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.45 AM.jpeg";
import img12 from "@/assets/WhatsApp Image 2026-04-10 at 10.02.44 AM.jpeg";
// Defined categories for filtering
const portfolioCategories = [
  "All Designs",
  "Aso-Ebi & Traditional",
  "Men's Bespoke",
  "Bridal Gowns",
  "Haute Couture",
  "The Academy"
];

// Expanded data structure for high volume (Simulating 12 items)
const portfolioItems = [
  { img: fashion1, label: "Blue Aso-Ebi Gown", category: "Aso-Ebi & Traditional", size: 'tall' },
  { img: fashion2, label: "Midnight Navy Suit", category: "Men's Bespoke", size: 'wide' },
  { img: fashion3, label: "Ivory Bridal Gown", category: "Bridal Gowns", size: 'tall' },
  { img: heroImage, label: "Couture Runway Look", category: "Haute Couture", size: 'tall' },
  { img: aboutImg, label: "Studio Fitting", category: "The Academy", size: 'wide' },
  { img: trainingImg, label: "Masterclass Session", category: "The Academy", size: 'tall' },
  // ... adding more simulating high volume (20+) ...
  { img: fashion1, label: "Traditional Lace Ensemble", category: "Aso-Ebi & Traditional", size: 'wide' },
  { img: fashion2, label: "Charcoal Dinner Jacket", category: "Men's Bespoke", size: 'tall' },
  { img: fashion3, label: "Vera Wang Inspired Bridal", category: "Bridal Gowns", size: 'tall' },
  { img: heroImage, label: "Red Carpet Statement", category: "Haute Couture", size: 'wide' },
  { img: aboutImg, label: "Bespoke Fitting", category: "Men's Bespoke", size: 'tall' },
  { img: trainingImg, label: "Design Critique", category: "The Academy", size: 'wide' },
  { img: img1, label: "Custom Tailoring - Client Project", category: "The Academy", size: 'tall' },
  { img: img2, label: "Bridal Consultation", category: "Bridal Gowns", size: 'wide' },
  { img: img3, label: "Traditional Attire", category: "Aso-Ebi & Traditional", size: 'tall' },
  { img: img4, label: "Modern Silhouette", category: "Haute Couture", size: 'wide' },
  { img: img5, label: "Dinner Jacket", category: "Men's Bespoke", size: 'tall' },
  { img: img6, label: "Wedding Dress Fitting", category: "Bridal Gowns", size: 'wide' },
  { img: img7, label: "Traditional Headdress", category: "Aso-Ebi & Traditional", size: 'tall' },
  { img: img8, label: "Modern Tuxedo", category: "Men's Bespoke", size: 'wide' },
  { img: img9, label: "Bridal Veil", category: "Bridal Gowns", size: 'tall' },
  { img: img10, label: "Couture Blouse", category: "Haute Couture", size: 'wide' },
  { img: img11, label: "Tailored Pants", category: "Men's Bespoke", size: 'tall' },
  { img: img12, label: "Elegant Skirt", category: "Haute Couture", size: 'wide' }
];

const Portfolio = () => {
  // State for the active filter tab
  const [activeTab, setActiveTab] = useState("All Designs");
  // State to simulate loading more
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9); // Initially show 9

  // Filter items based on active tab
  const filteredItems = portfolioItems.filter(item => 
    activeTab === "All Designs" || item.category === activeTab
  );

  // Take only visible count for display
  const itemsToDisplay = filteredItems.slice(0, visibleCount);

  // Simulate loading more items
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6); // Add 6 more
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="pt-20">
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-8">
          
          <SectionHeader 
            subtitle="The Lookbook" 
            title="Our Portfolio" 
            description="Explore our curated collection of bespoke tailoring, traditional elegance, and modern couture." 
          />

          {/* Professional Category Filters (Tabs) */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-2 mb-16 border-b border-border/40 pb-6 max-w-5xl mx-auto">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => { setActiveTab(category); setVisibleCount(9); }} // Reset visible count on filter
                className={`px-5 py-2.5 rounded-sm font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-foreground hover:bg-gold/10 hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Dense, Editorial Grid (using grid-auto-flow: dense) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-auto-flow-dense gap-6 lg:gap-8">
            {itemsToDisplay.map((item, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-md border border-border/30 hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 ${
                  // Conditional sizing based on image size data
                  item.size === 'wide' ? 'col-span-2 aspect-[3/2]' : 'aspect-[3/4]'
                }`}
              >
                {/* Modern Image Display */}
                <img 
                  src={item.img} 
                  alt={item.label} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />

                {/* Subtle Hover Overlay with Gold Bar */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-bold text-gold uppercase tracking-[0.2em] mb-1">
                    {item.category}
                  </span>
                  <span className="font-display text-2xl font-bold text-white leading-tight">
                    {item.label}
                  </span>
                  {/* Decorative line that grows on hover */}
                  <span className="h-1 w-0 bg-gold mt-3 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination/Load More - Vital for 20+ items */}
          {visibleCount < filteredItems.length && (
            <div className="mt-20 text-center">
              <button 
                onClick={handleLoadMore}
                disabled={loading}
                className="btn-gold inline-flex items-center gap-3 !px-12 !py-4 text-sm font-semibold uppercase tracking-widest disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={20} className="animate-spin" />
                    Loading More
                  </>
                ) : (
                  <>
                    Discover More Designs
                    <MoveRight size={18} />
                  </>
                )}
              </button>
            </div>
          )}

          {/* No Items Found State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-secondary rounded-2xl border border-border/30 mt-16">
              <p className="font-display text-4xl text-muted-foreground/30 font-black mb-4">Empty Gallery</p>
              <p className="text-muted-foreground text-xl">We are currently curating more designs for the <span className='text-gold font-semibold'>{activeTab}</span> collection.</p>
              <button 
                onClick={() => setActiveTab("All Designs")}
                className="mt-8 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors text-sm rounded-sm"
              >
                View All Designs
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default Portfolio;