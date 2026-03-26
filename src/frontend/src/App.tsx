import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Building2,
  Clock,
  Mail,
  MapPin,
  Package,
  Phone,
  PhoneCall,
  Stethoscope,
} from "lucide-react";

const PHONE_NUMBER = "9960093523";

const partnerLogoImages = [
  {
    src: "/assets/uploads/Gemini_Generated_Image_6dq8o86dq8o86dq8-1.png",
    alt: "Cipla and AquaLab pharmaceutical logos",
  },
  {
    src: "/assets/uploads/Gemini_Generated_Image_wpwc27wpwc27wpwc-2.png",
    alt: "Torque, Troikaa, Ind-Swift, Abbott, Emcure, Alkem, Lupin, Smartway, Smart Laboratories, Laborate logos",
  },
  {
    src: "/assets/uploads/Gemini_Generated_Image_ub44mdub44mdub44-3.png",
    alt: "Himalaya, Intas, Mankind, Eris, Universal, Aristo, Torrent Pharma, Wings Novitas, Cadila, JB logos",
  },
  {
    src: "/assets/uploads/Gemini_Generated_Image_o15n4no15n4no15n-5.png",
    alt: "HMD, Saiee, AllOES, Flo-Rite, Hetero Healthcare, Sapat Elder, Leeford, Alembic, Glenmark logos",
  },
];

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "ghuge-medicals",
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header
        className="relative overflow-hidden shadow-md animate-slide-in-right"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.88 0.07 240) 0%, oklch(0.90 0.07 200) 40%, oklch(0.92 0.06 155) 100%)",
        }}
      >
        {/* Decorative pharmacy pattern overlay */}
        <div className="absolute inset-0 opacity-8" aria-hidden="true">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pharma-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="26"
                  y="18"
                  width="8"
                  height="24"
                  rx="2"
                  fill="oklch(0.50 0.12 220)"
                />
                <rect
                  x="18"
                  y="26"
                  width="24"
                  height="8"
                  rx="2"
                  fill="oklch(0.50 0.12 220)"
                />
              </pattern>
              <pattern
                id="dot-pattern"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="15" cy="15" r="2" fill="oklch(0.55 0.10 200)" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#dot-pattern)"
              opacity="0.4"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#pharma-pattern)"
              opacity="0.25"
            />
          </svg>
        </div>
        {/* Decorative circles */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-15"
          style={{ background: "oklch(0.75 0.12 155)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-15"
          style={{ background: "oklch(0.70 0.12 220)" }}
          aria-hidden="true"
        />
        <div className="container relative z-10 py-10 md:py-14">
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-sm"
            style={{ color: "oklch(0.20 0.10 240)" }}
          >
            Ghuge Medicals Pharmaceutical Distributors
          </h1>
          <p
            className="text-lg md:text-xl mt-2"
            style={{ color: "oklch(0.35 0.10 220)" }}
          >
            Serving Madha Taluka
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-8 md:py-12">
        {/* About Section */}
        <Card className="shadow-lg border-2 animate-slide-in-right-delay-1">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About Ghuge Medicals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ghuge Medicals is your trusted pharmaceutical distributor, proudly
              serving the entire Madha Taluka region.{" "}
              <span className="font-bold text-primary bg-yellow-100 px-1 rounded">
                We have nearly 20 years of experience
              </span>{" "}
              in providing quality medical supplies and pharmaceutical products
              to our community. Visit us at our convenient location on Choriya
              Township Bypass Road, Kurduwadi, or contact us for any inquiries
              about our services.
            </p>
          </CardContent>
        </Card>

        <SectionDivider label="Get In Touch" />

        {/* Business Hours & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Business Hours Card */}
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow animate-slide-in-right-delay-2">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Business Hours
              </h2>

              <div className="bg-accent/10 rounded-lg p-5 border-l-4 border-accent mb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Monday – Saturday
                    </p>
                    <p className="text-3xl font-bold text-accent">
                      10:00 AM – 8:00 PM
                    </p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                    Open
                  </Badge>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-warning/10 border border-warning/30 rounded-lg p-4 mb-5">
                <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">
                    Sunday — Hours Not Fixed
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Sunday availability may vary. Please call ahead to confirm
                    we are open before visiting.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-semibold text-foreground text-base">
                    Not sure if we're open?
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Give us a call — especially for Sunday availability.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-bold shadow-md"
                >
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <PhoneCall className="w-5 h-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow animate-slide-in-right-delay-3">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:aghuge99@gmail.com"
                      className="text-lg font-semibold text-foreground hover:text-accent transition-colors break-all"
                    >
                      aghuge99@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Choriya Township Bypass Road
                      <br />
                      Kurduvadi - 413208
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex flex-wrap gap-3">
                <Button asChild className="flex-1 min-w-[140px]">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 min-w-[140px]"
                >
                  <a href="mailto:aghuge99@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Details Section */}
        <Card className="mt-6 md:mt-8 shadow-lg border-2 animate-slide-in-right-delay-4">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Business Information
                </h2>
                <Badge variant="secondary" className="text-sm">
                  <Package className="w-3 h-3 mr-1" />
                  Pharmaceutical Distributor
                </Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Complete Address
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-foreground font-medium">
                      Ghuge Medicals
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Choriya Township Bypass Road
                    </p>
                    <p className="text-muted-foreground">
                      Kurduwadi, Maharashtra
                    </p>
                    <p className="text-muted-foreground font-semibold">
                      PIN: 413208
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    About Our Store
                  </h3>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Ghuge Medicals is a trusted pharmaceutical distributor
                      serving the Kurduwadi region and surrounding areas. We
                      specialize in providing quality medical supplies,
                      healthcare products, and pharmaceutical items to meet the
                      healthcare needs of our community.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Services Offered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Medical Supplies</Badge>
                    <Badge variant="outline">Healthcare Products</Badge>
                    <Badge variant="outline">Pharmaceutical Items</Badge>
                    <Badge variant="outline">Medical Equipment</Badge>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-primary/5 rounded-lg p-4">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">
                  Need directions?
                </p>
                <p className="text-foreground font-semibold">
                  Visit us on Google Maps
                </p>
              </div>
              <Button asChild>
                <a
                  href="https://maps.app.goo.gl/Py3ZHuvGRmuYgHkw5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <SectionDivider label="Our Partners" />

        {/* Our Pharmaceutical Partners Section */}
        <Card className="shadow-lg border-2 bg-primary/5 animate-slide-in-right-delay-5">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Stethoscope className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Pharmaceutical Partners
              </h2>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              We proudly distribute products from these trusted pharmaceutical
              companies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {partnerLogoImages.map((img) => (
                <div
                  key={img.src}
                  className="rounded-xl overflow-hidden border border-border/40 bg-white/80 p-3 flex items-center justify-center"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain max-h-56"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer
        className="mt-auto animate-slide-in-right-delay-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.88 0.07 240) 0%, oklch(0.90 0.07 200) 40%, oklch(0.92 0.06 155) 100%)",
          borderTop: "1px solid oklch(0.80 0.08 200)",
        }}
      >
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p
                className="font-semibold"
                style={{ color: "oklch(0.22 0.10 240)" }}
              >
                Ghuge Medicals Pharmaceutical Distributors
              </p>
              <p className="text-sm" style={{ color: "oklch(0.38 0.10 220)" }}>
                Maintaining the Health of Madha Taluka
              </p>
            </div>
            <div
              className="text-center md:text-right text-sm"
              style={{ color: "oklch(0.38 0.10 220)" }}
            >
              <p>© {currentYear} Ghuge Medicals. All rights reserved.</p>
              <p className="mt-1">
                Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "oklch(0.30 0.12 240)" }}
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
