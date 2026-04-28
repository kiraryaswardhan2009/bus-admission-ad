import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  GraduationCap,
  Heart,
  Layers,
  MapPin,
  Phone,
  TreePine,
  User,
} from "lucide-react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Curriculum designed to nurture curiosity and build a strong foundation for lifelong learning.",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "Sports, arts, and cultural activities alongside academics to develop well-rounded students.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Faculty",
    desc: "Experienced, dedicated teachers who inspire and guide every student to their fullest potential.",
  },
];

const schoolDetails = [
  {
    icon: User,
    label: "Principal",
    value: "Govind Patel",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Clock,
    label: "School Hours",
    value: "6 Hours Daily",
    color: "bg-accent/15 text-accent-foreground",
  },
  {
    icon: Layers,
    label: "Classes Offered",
    value: "Nursery to 8th Standard",
    color: "bg-secondary/15 text-secondary",
  },
  {
    icon: TreePine,
    label: "Facilities",
    value: "Big Playground, Library & More",
    color: "bg-primary/15 text-primary",
  },
];

export default function SchoolInfo() {
  return (
    <>
      {/* About Section */}
      <section
        id="admissions"
        className="bg-background py-20"
        data-ocid="school.admissions_section"
        aria-labelledby="admissions-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: Mission & Admissions */}
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary border-secondary/30 font-semibold tracking-wide text-xs uppercase">
                About Our School
              </Badge>
              <h2
                id="admissions-heading"
                className="text-display-lg text-secondary leading-tight"
                data-ocid="school.heading"
              >
                Saraswati Shishu Mandir
              </h2>
              <div className="yellow-accent-bar">
                <p className="text-muted-foreground text-base leading-relaxed">
                  Rooted in the values of knowledge, discipline, and cultural
                  pride, Saraswati Shishu Mandir has been shaping young minds
                  for decades. We believe every child deserves an environment
                  where they can thrive academically, socially, and morally.
                </p>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                We are now accepting applications for the academic year
                2026-2027. Secure your child's seat today and pair it with our
                safe, fully-equipped school bus service — covering all major
                routes in the area.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className="button-primary font-bold px-8"
                  onClick={() => scrollTo("#contact")}
                  data-ocid="school.apply_cta_button"
                >
                  Apply for Admission
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 transition-smooth"
                  onClick={() => scrollTo("#contact")}
                  data-ocid="school.contact_cta_button"
                >
                  Contact School
                </Button>
              </div>
            </div>

            {/* Right: School values */}
            <div className="grid gap-4" data-ocid="school.values_list">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <Card
                  key={title}
                  className="card-elevated rounded-xl flex items-start gap-4 p-5 hover:border-primary/50 transition-smooth"
                  data-ocid={`school.value_item.${i + 1}`}
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-secondary text-base mb-1">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Details Section */}
      <section
        id="school-details"
        className="bg-muted/40 py-20"
        data-ocid="school.details_section"
        aria-labelledby="school-details-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <Badge className="bg-primary/15 text-secondary border-primary/30 font-semibold tracking-wide text-xs uppercase">
              School Information
            </Badge>
            <h2
              id="school-details-heading"
              className="text-display-lg text-secondary"
              data-ocid="school.details_heading"
            >
              At a Glance
            </h2>
            <p className="text-muted-foreground text-base max-w-lg mx-auto">
              Everything you need to know about our school — from leadership to
              facilities.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="school.details_list"
          >
            {schoolDetails.map(({ icon: Icon, label, value, color }, i) => (
              <Card
                key={label}
                className="card-elevated rounded-2xl text-center p-6 hover:shadow-lg hover:-translate-y-1 transition-smooth border border-border"
                data-ocid={`school.detail_item.${i + 1}`}
              >
                <CardContent className="p-0 space-y-4">
                  <span
                    className={`inline-flex w-14 h-14 rounded-2xl ${color} items-center justify-center mx-auto`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-muted-foreground text-xs font-semibold uppercase tracking-widest mb-1">
                      {label}
                    </p>
                    <p className="font-display font-bold text-secondary text-base leading-snug">
                      {value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-secondary py-20"
        data-ocid="school.contact_section"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <Badge className="bg-primary/20 text-primary border-primary/40 font-semibold tracking-wide text-xs uppercase">
              Get In Touch
            </Badge>
            <h2
              id="contact-heading"
              className="text-display-lg text-secondary-foreground"
              data-ocid="contact.heading"
            >
              Ready to Enroll?
            </h2>
            <p className="text-secondary-foreground/70 text-lg max-w-lg mx-auto">
              Reach out to us for admission queries, bus route details, or any
              other questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Phone */}
            <Card
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl text-center p-6 hover:bg-secondary-foreground/10 transition-smooth"
              data-ocid="contact.phone_card"
            >
              <CardContent className="p-0 space-y-3">
                <span className="inline-flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center mx-auto">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <h3 className="font-display font-bold text-secondary-foreground text-base">
                  Phone
                </h3>
                <a
                  href="tel:+916264462892"
                  className="text-primary font-semibold text-lg hover:underline block"
                  data-ocid="contact.phone_link"
                >
                  +91 62644 62892
                </a>
                <p className="text-secondary-foreground/60 text-xs">
                  Mon–Sat, 8 AM – 2 PM
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl text-center p-6 hover:bg-secondary-foreground/10 transition-smooth"
              data-ocid="contact.address_card"
            >
              <CardContent className="p-0 space-y-3">
                <span className="inline-flex w-12 h-12 rounded-full bg-primary/20 items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5 text-primary" />
                </span>
                <h3 className="font-display font-bold text-secondary-foreground text-base">
                  Address
                </h3>
                <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                  Saraswati Shishu Mandir,
                  <br />
                  Tendukheda,
                  <br />
                  Near Thane
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="button-primary font-bold text-base px-12 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-smooth"
              onClick={() =>
                alert(
                  "Admission form coming soon! Call us at +91 62644 62892 to register.",
                )
              }
              data-ocid="contact.final_enroll_button"
            >
              🎒 Register Your Child Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
