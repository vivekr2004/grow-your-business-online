import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-section-dark pt-16 pb-8">
    <div className="section-padding">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
        <div className="lg:w-1/3">
          <p className="font-heading text-xl font-bold italic text-section-dark-foreground">WebCraft.</p>
          <div className="flex gap-4 mt-6">
            {["f", "⊕", "◎"].map((s, i) => (
              <span key={i} className="w-10 h-10 rounded-full border border-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground/60 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="heading-lg text-section-dark-foreground mb-0">Let's Work Together</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="md:w-1/3" />
        <div className="md:w-1/3">
          <h4 className="font-heading font-bold text-section-dark-foreground uppercase text-sm mb-4">Links</h4>
          {["Home", "About Us", "Our Works", "Our Blog"].map((l) => (
            <a key={l} href="#" className="block text-section-dark-foreground/60 text-sm mb-2 hover:text-primary transition-colors">{l}</a>
          ))}
        </div>
        <div className="md:w-1/3">
          <h4 className="font-heading font-bold text-section-dark-foreground uppercase text-sm mb-4">Location</h4>
          <p className="text-section-dark-foreground/60 text-sm mb-4">767 5th Street,<br />21st Floor, New York, USA</p>
          <h4 className="font-heading font-bold text-section-dark-foreground uppercase text-sm mb-2">Call Us On</h4>
          <p className="text-section-dark-foreground/60 text-sm">+0223 4836 3028</p>
          <p className="text-section-dark-foreground/60 text-sm">+0991 8394 9030</p>
        </div>
      </div>
      <a
        href="mailto:hello@webcraftstudio.com"
        className="block bg-primary rounded-2xl py-6 text-center hover:brightness-90 transition"
      >
        <div className="flex items-center justify-center gap-4">
          <Mail className="text-primary-foreground" size={28} />
          <span className="heading-lg text-primary-foreground">Let's Talk</span>
        </div>
      </a>
      <p className="text-section-dark-foreground/40 text-xs text-center mt-8 uppercase tracking-widest">
        ©WebCraft 2025. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
