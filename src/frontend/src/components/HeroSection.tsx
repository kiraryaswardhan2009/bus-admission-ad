import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Shield } from "lucide-react";

const highlights = [
  { icon: CheckCircle, label: "GPS Tracked Every Route" },
  { icon: Shield, label: "Certified Safety Standards" },
  { icon: MapPin, label: "Door-to-Door Service" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-background overflow-hidden"
      data-ocid="hero.section"
      aria-labelledby="hero-headline"
    >
      {/* Decorative yellow top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-primary"
        aria-hidden="true"
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <Badge
              className="bg-primary/15 text-primary border-primary/30 font-semibold tracking-wide text-xs uppercase px-3 py-1"
              data-ocid="hero.admissions_badge"
            >
              🎒 Admissions Open 2026-2027
            </Badge>

            <h1
              id="hero-headline"
              className="text-display-xl text-secondary"
              data-ocid="hero.headline"
            >
              Admissions Open for{" "}
              <span className="text-primary">Saraswati Shishu Mandir</span>{" "}
              School
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Safe and comfortable school bus service available for all enrolled
              students. Experience premium transport with trained staff, GPS
              tracking, and first-aid equipped vehicles — every single day.
            </p>

            {/* Trust highlights */}
            <ul className="flex flex-col sm:flex-row gap-3 flex-wrap">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="button-primary text-base font-bold px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-smooth"
                onClick={() => scrollTo("#admissions")}
                data-ocid="hero.enroll_button"
              >
                Enroll Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-base font-semibold px-8 py-3 transition-smooth"
                onClick={() => scrollTo("#about")}
                data-ocid="hero.learn_more_button"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Bus illustration */}
          <div
            className="relative flex items-center justify-center"
            data-ocid="hero.bus_illustration"
          >
            {/* Yellow glow behind image */}
            <div
              className="absolute inset-8 rounded-3xl blur-3xl opacity-30 bg-primary"
              aria-hidden="true"
            />
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl w-full max-w-[520px]">
              <img
                src="/assets/generated/school-bus-hero.dim_900x500.png"
                alt="Saraswati Shishu Mandir school bus — bright yellow with smiling children aboard"
                className="w-full h-auto object-cover"
                width={900}
                height={500}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
                  School Bus
                </p>
                <p className="font-display font-bold text-primary text-sm leading-tight">
                  2026-2027 Fleet Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="w-full h-10 fill-muted/40"
          role="presentation"
        >
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
