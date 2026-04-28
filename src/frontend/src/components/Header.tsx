import { Button } from "@/components/ui/button";
import { Bus, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + School Name */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2.5 group"
            data-ocid="header.logo_link"
            aria-label="Saraswati Shishu Mandir — go to top"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-smooth">
              <Bus
                className="w-5 h-5 text-primary-foreground"
                strokeWidth={2.5}
              />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-secondary text-sm sm:text-base leading-none">
                Saraswati
              </p>
              <p className="font-display font-bold text-secondary text-sm sm:text-base leading-none">
                Shishu Mandir
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                data-ocid={`header.nav_${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="ml-3 button-primary font-semibold text-sm px-5"
              onClick={() => scrollTo("#admissions")}
              data-ocid="header.apply_button"
            >
              Apply Now
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="header.mobile_menu_toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border px-4 pb-4 pt-2 space-y-1"
          data-ocid="header.mobile_menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
              data-ocid={`header.mobile_nav_${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full button-primary font-semibold mt-2"
            onClick={() => {
              scrollTo("#admissions");
              setMenuOpen(false);
            }}
            data-ocid="header.mobile_apply_button"
          >
            Apply Now
          </Button>
        </div>
      )}
    </header>
  );
}
