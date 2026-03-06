import { MessageSquare, Code2, Palette, Smartphone, Search, ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/AnimatedText";

const services = [
  {
    icon: <Code2 size={28} />,
    title: "Business Website Development",
    description: "Custom-built websites designed to showcase your brand, engage visitors, and convert them into loyal customers.",
    accent: true,
  },
  {
    icon: <Palette size={28} />,
    title: "Landing Page Design",
    description: "High-converting landing pages optimized for lead generation, product launches, and marketing campaigns.",
    accent: false,
  },
  {
    icon: <MessageSquare size={28} />,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, fast, and conversion-focused digital experience.",
    accent: false,
  },
  {
    icon: <Search size={28} />,
    title: "SEO-Optimized Websites",
    description: "Websites built with search engine optimization at their core so you rank higher and get found online.",
    accent: false,
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile-Responsive Websites",
    description: "Every website we build is fully responsive, ensuring a seamless experience on every device and screen size.",
    accent: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <AnimatedText as="h2" className="heading-lg lg:max-w-md" colorFrom="text-foreground/30" colorTo="text-foreground">
            Comprehensive High-Grade Solutions For Your Brand
          </AnimatedText>
          <div className="lg:max-w-sm">
            <span className="badge-label mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              Services We Provide
            </span>
            <p className="text-muted-foreground leading-relaxed mt-4">
              From brand-new business websites to full redesigns, we deliver solutions tailored for startups and growing businesses.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-8">
          <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Previous">
            <ArrowLeft size={18} />
          </button>
          <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                i === 0 ? "bg-primary-foreground/10" : "border border-secondary-foreground/20"
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 font-heading">
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? "text-primary-foreground/70" : "text-secondary-foreground/70"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
