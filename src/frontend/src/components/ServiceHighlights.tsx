import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bus, Heart, MapPin, Wifi, Zap } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: { icon: React.ElementType; text: string }[];
  accent: "yellow" | "navy" | "orange";
  index: number;
}

const accentStyles = {
  yellow: {
    header: "bg-primary text-primary-foreground",
    badge: "bg-primary/15 text-primary border-primary/30",
    iconBg: "bg-primary/20 text-primary",
    bullet: "bg-primary",
  },
  navy: {
    header: "bg-secondary text-secondary-foreground",
    badge: "bg-secondary/10 text-secondary border-secondary/30",
    iconBg: "bg-secondary/15 text-secondary",
    bullet: "bg-secondary",
  },
  orange: {
    header: "bg-accent text-accent-foreground",
    badge: "bg-accent/15 text-accent border-accent/30",
    iconBg: "bg-accent/20 text-accent",
    bullet: "bg-accent",
  },
};

function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  accent,
  index,
}: ServiceCardProps) {
  const styles = accentStyles[accent];
  return (
    <Card
      className="card-elevated rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-smooth group"
      data-ocid={`services.card.${index}`}
    >
      {/* Card header bar */}
      <div className={`${styles.header} px-6 py-5 relative overflow-hidden`}>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
          <Icon className="w-16 h-16" strokeWidth={1.5} />
        </div>
        <Badge className={`${styles.badge} font-semibold text-xs mb-2`}>
          {subtitle}
        </Badge>
        <h3 className="font-display font-bold text-xl leading-tight">
          {title}
        </h3>
      </div>

      {/* Card body */}
      <CardContent className="p-6 flex flex-col gap-4 flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2.5 mt-1">
          {features.map(({ icon: FIcon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 text-sm font-medium text-foreground"
            >
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full ${styles.iconBg} flex items-center justify-center`}
              >
                <FIcon className="w-3.5 h-3.5" />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

const services: Omit<ServiceCardProps, "index">[] = [
  {
    icon: Bus,
    title: "Full Facility Yellow Bus",
    subtitle: "Premium Fleet",
    description:
      "Our well-maintained yellow school buses are equipped with every amenity to ensure a safe, clean, and comfortable journey for your child every single day.",
    features: [
      { icon: MapPin, text: "Real-time GPS tracking on all routes" },
      { icon: Heart, text: "First aid kit stocked & ready" },
      { icon: Wifi, text: "CCTV surveillance on board" },
      { icon: Zap, text: "Comfortable cushioned seating" },
    ],
    accent: "yellow",
  },
];

export default function ServiceHighlights() {
  return (
    <section
      id="about"
      className="bg-muted/40 py-20 section-gradient-top"
      data-ocid="services.section"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 space-y-3">
          <Badge className="bg-primary/15 text-primary border-primary/30 font-semibold tracking-wider text-xs uppercase">
            Why Choose Us
          </Badge>
          <h2
            id="services-heading"
            className="text-display-lg text-secondary"
            data-ocid="services.heading"
          >
            Everything Your Child Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            From GPS-tracked routes to certified personnel — we leave nothing to
            chance when it comes to your child's safety.
          </p>
        </div>

        {/* Single centered card */}
        <div className="max-w-md mx-auto" data-ocid="services.cards_list">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
