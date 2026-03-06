import { ArrowUpRight } from "lucide-react";
import portfolioImg from "@/assets/portfolio-project.jpg";

const projects = [
  { num: "001", name: "Deplo. Website Design", desc: "Here, we ignite imaginations, harnessing the power of technology" },
  { num: "002", name: "Wloo. Branding Design", desc: "Here, we ignite imaginations, harnessing the power of technology" },
  { num: "003", name: "Pilo. Product Design", desc: "Here, we ignite imaginations, harnessing the power of technology" },
  { num: "004", name: "Gulay. Development", desc: "Here, we ignite imaginations, harnessing the power of technology" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="bg-section-dark py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <span className="badge-label text-section-dark-foreground border-section-dark-foreground/30">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Our Creative Works
        </span>
        <h2 className="heading-lg text-section-dark-foreground mt-6">Noteworthy Works</h2>
        <p className="text-section-dark-foreground/50 max-w-lg mx-auto mt-4">
          Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.
        </p>
      </div>
      <div className="space-y-0">
        {projects.map((p, i) => (
          <div key={i}>
            <div className={`flex items-center justify-between py-6 border-t border-section-dark-foreground/10 ${i === 2 ? "" : ""}`}>
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-xs text-section-dark-foreground/40">· {p.num}</span>
                <h3 className="font-heading font-bold text-section-dark-foreground uppercase text-lg md:text-xl">{p.name}</h3>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <p className="text-section-dark-foreground/50 text-sm max-w-xs">{p.desc}</p>
                <ArrowUpRight className="text-primary" size={20} />
              </div>
              <ArrowUpRight className="md:hidden text-primary" size={20} />
            </div>
            {i === 2 && (
              <div className="my-4 rounded-xl overflow-hidden">
                <img src={portfolioImg} alt="Portfolio project showcase" className="w-full h-[250px] md:h-[350px] object-cover" loading="lazy" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:brightness-90 transition"
        >
          <span className="text-primary-foreground">✦</span>
          More Creative Works
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
