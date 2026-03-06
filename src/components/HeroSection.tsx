import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-workspace.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-hero-dark pt-28 pb-0 overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-12">
          <div className="lg:max-w-[60%]">
            <h1 className="heading-xl text-hero-dark-foreground">
              We Build Sleek Websites{" "}
              <span className="text-muted-foreground/60">That Grow Your Business</span>
            </h1>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="bg-primary rounded-2xl p-6 w-full lg:w-72">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-1">
                Agency Total Goals
              </p>
              <p className="text-sm text-primary-foreground/60 mb-4">
                A future-focused digital studio
              </p>
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4 mb-4">
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">94+</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">Projects Completed</p>
                </div>
                <ArrowUpRight className="text-primary-foreground" size={20} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold text-primary-foreground">85%</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">Happy Clients</p>
                </div>
                <ArrowUpRight className="text-primary-foreground" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding pb-0">
        <img
          src={heroImg}
          alt="Web development team working in a modern creative studio"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-t-2xl"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
