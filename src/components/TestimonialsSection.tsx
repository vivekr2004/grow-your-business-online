import { Star } from "lucide-react";
import avatar from "@/assets/testimonial-avatar.jpg";
import { AnimatedText } from "@/components/AnimatedText";

const TestimonialsSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <AnimatedText as="h2" className="heading-lg" colorFrom="text-foreground/30" colorTo="text-foreground">
          What Our Clients Say
        </AnimatedText>
        <p className="text-muted-foreground max-w-lg mx-auto mt-4">
          Don't just take our word for it — hear from the businesses we've helped launch online.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-3xl mx-auto">
        <img
          src={avatar}
          alt="Portrait of Rahul Mehta, founder of FreshBite"
          className="w-40 h-40 rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div>
          <AnimatedText as="blockquote" className="heading-md mb-6" colorFrom="text-foreground/30" colorTo="text-foreground">
            "WebCraft turned our rough idea into a stunning website in just three weeks. Our online orders doubled within the first month of launch."
          </AnimatedText>
          <p className="font-heading font-bold text-foreground uppercase text-sm">Rahul Mehta</p>
          <p className="text-muted-foreground text-sm">Founder, FreshBite Café · Bangalore</p>
          <div className="flex gap-1 mt-3">
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} size={18} className="fill-yellow-500 text-yellow-500" />
            ))}
            <Star size={18} className="text-muted-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
