import { MessageSquare, ClipboardList, Palette, Code2, Rocket, Headphones } from "lucide-react";
import { AnimatedText } from "@/components/AnimatedText";

const steps = [
  { icon: <MessageSquare size={24} />, title: "Consultation", desc: "We discuss your goals, audience, and vision." },
  { icon: <ClipboardList size={24} />, title: "Planning", desc: "Strategy, sitemap, and content architecture." },
  { icon: <Palette size={24} />, title: "Design", desc: "Beautiful mockups tailored to your brand." },
  { icon: <Code2 size={24} />, title: "Development", desc: "Clean, fast, SEO-optimized code." },
  { icon: <Rocket size={24} />, title: "Launch", desc: "Testing, optimization, and go-live." },
  { icon: <Headphones size={24} />, title: "Support", desc: "Ongoing maintenance and growth." },
];

const ProcessSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <span className="badge-label">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          Our Process
        </span>
        <AnimatedText as="h2" className="heading-lg mt-6" colorFrom="text-foreground/30" colorTo="text-foreground">
          How We Work
        </AnimatedText>
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">
          A straightforward six-step process — from first call to live website — designed to keep things simple and transparent.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
              {step.icon}
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-heading font-bold text-foreground uppercase mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
