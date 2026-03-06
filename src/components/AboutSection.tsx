import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/3">
            <span className="badge-label">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              Our Creative Agency
            </span>
            <div className="mt-8">
              <p className="text-5xl font-bold text-foreground">10+</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">Projects Delivered</p>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="heading-lg text-foreground mb-6">
              A young studio with big ambitions —{" "}
              <span className="text-muted-foreground">
                we craft modern websites that help startups and small businesses make a powerful first impression online.
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">WebCraft Studio</strong> is a Bangalore-based web development agency founded with one mission: to give startups and small businesses access to world-class website design without the enterprise price tag. We've already helped businesses across industries launch sleek, conversion-focused websites that drive real results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We're small by choice — every project gets our founders' direct attention. From strategy to launch, we work closely with you to build a site that truly represents your brand and converts visitors into customers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground transition-colors"
            >
              <Sparkles size={16} />
              About Our Agency
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
