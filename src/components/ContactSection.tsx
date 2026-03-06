import { useState } from "react";
import { toast } from "sonner";
import { AnimatedText } from "@/components/AnimatedText";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-label">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
              Get In Touch
            </span>
            <AnimatedText as="h2" className="heading-lg mt-6" colorFrom="text-foreground/30" colorTo="text-foreground">
              Let's Start Your Project
            </AnimatedText>
            <p className="text-muted-foreground mt-4">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Tell us about your project…"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-3 rounded-xl bg-muted border-none text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:brightness-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
