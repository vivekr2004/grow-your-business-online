import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-hero-dark/95 backdrop-blur-sm">
      <div className="section-padding flex items-center justify-between py-5">
        <a href="#home" className="text-hero-dark-foreground font-heading text-xl font-bold italic">
          WebCraft.
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-hero-dark-foreground/70 hover:text-primary text-sm font-medium transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@webcraft.studio"
          className="hidden md:inline-flex items-center gap-2 border border-hero-dark-foreground/40 text-hero-dark-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
        >
          Let's Talk
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-hero-dark-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-hero-dark border-t border-hero-dark-foreground/10 section-padding pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-hero-dark-foreground/70 hover:text-primary text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@webcraft.studio"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
