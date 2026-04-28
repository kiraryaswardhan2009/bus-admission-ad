import { Bus, MapPin, Phone } from "lucide-react";

const year = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer
      className="bg-secondary text-secondary-foreground"
      data-ocid="footer.container"
    >
      {/* Yellow top accent */}
      <div className="h-1 w-full bg-primary" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Bus
                  className="w-4 h-4 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-secondary-foreground text-sm">
                  Saraswati
                </p>
                <p className="font-display font-bold text-secondary-foreground text-sm">
                  Shishu Mandir
                </p>
              </div>
            </div>
            <p className="text-secondary-foreground/65 text-sm leading-relaxed">
              Nurturing young minds with knowledge, discipline, and cultural
              values since our founding. Admissions open for 2026-2027.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground text-sm mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-secondary-foreground/65 hover:text-primary text-sm transition-smooth"
                    data-ocid={`footer.nav_${link.label.toLowerCase()}_link`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bus services */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground text-sm mb-4 uppercase tracking-wide">
              Bus Services
            </h4>
            <ul className="space-y-2 text-secondary-foreground/65 text-sm">
              <li>GPS-Tracked Yellow Bus</li>
              <li>Trained Conductor On Board</li>
              <li>Licensed Safe Driver</li>
              <li>First Aid & CCTV Equipped</li>
              <li>Door-to-Door Route Coverage</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-secondary-foreground text-sm mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-secondary-foreground/65">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Saraswati Shishu Mandir,
                  <br />
                  Tendukheda, Near Thane
                </span>
              </li>
              <li>
                <a
                  href="tel:+916264462892"
                  className="flex items-center gap-2.5 text-sm text-secondary-foreground/65 hover:text-primary transition-smooth"
                  data-ocid="footer.phone_link"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  +91 62644 62892
                </a>
              </li>
              <li className="text-secondary-foreground/65 text-sm pl-6">
                Principal: Govind Patel
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 pt-6 border-t border-secondary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-secondary-foreground/50 text-xs">
          <p>© {year} Saraswati Shishu Mandir. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-ocid="footer.caffeine_link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
