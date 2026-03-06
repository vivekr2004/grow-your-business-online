import { Star } from "lucide-react";
import avatar from "@/assets/testimonial-avatar.jpg";

const TestimonialsSection = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-lg text-foreground">Feedback From Customers</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mt-4">
          The Digital Innovation Studio, a haven where innovation thrives and digital possibilities unfold endlessly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-3xl mx-auto">
        <img
          src={avatar}
          alt="Client testimonial portrait"
          className="w-40 h-40 rounded-full object-cover shrink-0"
          loading="lazy"
        />
        <div>
          <blockquote className="heading-md text-foreground mb-6">
            "Ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire."
          </blockquote>
          <p className="font-heading font-bold text-foreground uppercase text-sm">Alecai Jonathon</p>
          <p className="text-muted-foreground text-sm">Visual Designer at Xiyo.</p>
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
