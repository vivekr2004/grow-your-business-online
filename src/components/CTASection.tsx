import { AnimatedText } from "@/components/AnimatedText";

const CTASection = () => (
  <section className="bg-section-dark py-20 md:py-28">
    <div className="section-padding text-center">
      <AnimatedText as="h2" className="heading-lg max-w-2xl mx-auto" colorFrom="text-section-dark-foreground/30" colorTo="text-primary">
        Ready to Grow Your Business Online?
      </AnimatedText>
      <p className="text-section-dark-foreground/60 max-w-lg mx-auto mt-4 mb-8">
        Whether you're launching your first website or redesigning an existing one, we'll help you stand out online. Drop us an email to get started.
      </p>
      <a
        href="mailto:hello@webcraft.studio"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:brightness-90 transition"
      >
        Start Your Project
      </a>
    </div>
  </section>
);

export default CTASection;
