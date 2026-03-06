import { Zap, Search, Smartphone, Palette, TrendingUp } from "lucide-react";
import { AnimatedText } from "@/components/AnimatedText";

const reasons = [
  { icon: <Palette size={24} />, title: "Modern Design", desc: "Visually stunning websites that leave lasting impressions and reflect your brand identity." },
  { icon: <Zap size={24} />, title: "Fast Performance", desc: "Lightning-fast load times that keep visitors engaged and reduce bounce rates." },
  { icon: <Search size={24} />, title: "SEO-Friendly", desc: "Built with SEO best practices so search engines love your site from day one." },
  { icon: <Smartphone size={24} />, title: "Mobile Optimized", desc: "Pixel-perfect on every device—phones, tablets, and desktops." },
  { icon: <TrendingUp size={24} />, title: "Growth Focused", desc: "Tailored solutions for small and growing businesses ready to scale online." },
];

const WhyChooseUsSection = () => (
  <section className="bg-section-dark py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <span className="badge-label text-section-dark-foreground border-section-dark-foreground/30">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Why Choose Us
        </span>
        <AnimatedText as="h2" className="heading-lg mt-6" colorFrom="text-section-dark-foreground/30" colorTo="text-section-dark-foreground">
          Why Businesses Trust Us
        </AnimatedText>
        <p className="text-section-dark-foreground/60 max-w-xl mx-auto mt-4">
          As a lean, founder-led studio, we give every project the attention it deserves — no outsourcing, no shortcuts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="text-center p-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              {r.icon}
            </div>
            <h3 className="font-heading font-bold uppercase text-section-dark-foreground text-sm mb-2">{r.title}</h3>
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
