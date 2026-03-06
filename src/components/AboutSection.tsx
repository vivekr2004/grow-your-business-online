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
              <p className="text-5xl font-bold text-foreground">4M+</p>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mt-1">Customers</p>
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2 className="heading-lg text-foreground mb-6">
              We're equipped to cater to all facets of{" "}
              <span className="text-muted-foreground">
                your creative journey. Solutions that bring your vision with precision and finesse
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to <strong className="text-foreground">WebCraft Studio</strong>, a website development agency where creativity meets technology to redefine possibilities. Our studio is a dynamic space where digital expertise converges with inventive thinking to pioneer new frontiers in modern website development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in business website design for small businesses and growing companies. Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.
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
