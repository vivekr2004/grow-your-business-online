import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a business website cost?",
    a: "Our website development packages vary based on complexity and features. We offer tailored solutions for small businesses and growing companies, ensuring you get the best value for your investment."
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites take 4-8 weeks from consultation to launch. Simple landing pages can be delivered in as little as 2 weeks."
  },
  {
    q: "Will my website be SEO-optimized?",
    a: "Absolutely. Every website we build is SEO-friendly from the ground up, with proper heading structure, meta tags, fast performance, and mobile-first design."
  },
  {
    q: "Do you offer website maintenance and support?",
    a: "Yes, we offer ongoing maintenance packages that include updates, security patches, performance monitoring, and content updates."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Definitely. We specialize in website redesigns that transform outdated sites into modern, fast, and conversion-focused experiences."
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Every website we build is mobile-responsive and tested across all major devices and browsers to ensure a seamless experience."
  },
];

const FAQSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-12">
        <span className="badge-label">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          FAQ
        </span>
        <h2 className="heading-lg text-foreground mt-6">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-muted rounded-xl px-6 border-none">
              <AccordionTrigger className="font-heading font-bold text-foreground text-left text-sm uppercase hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
