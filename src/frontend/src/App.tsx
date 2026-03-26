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

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "ghuge-medicals",
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="relative bg-primary text-primary-foreground shadow-lg overflow-hidden animate-slide-in-right">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/hero-bg.dim_1200x600.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ghuge Medicals Pharmaceutical Distributors
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mt-1">
            Serving Madha Taluka
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-8 md:py-12">
        {/* Business Hours & Contact — side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Business Hours Card */}
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow animate-slide-in-right-delay-1">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Business Hours
              </h2>

              {/* Mon–Sat hours */}
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

              {/* Sunday note */}
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

              {/* Call Us CTA */}
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
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow animate-slide-in-right-delay-2">
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
        <Card className="mt-6 md:mt-8 shadow-lg border-2 animate-slide-in-right-delay-3">
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

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location Details
                  </h3>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      Coordinates
                    </p>
                    <p className="text-foreground font-mono text-sm">
                      17.8805°N, 75.4148°E
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

        {/* Our Pharmaceutical Partners Section */}
        <Card className="mt-6 md:mt-8 shadow-lg border-2 bg-white animate-slide-in-right-delay-4">
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
                  className="rounded-xl overflow-hidden border border-border/40 bg-white p-3 flex items-center justify-center"
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

        {/* About Section */}
        <Card className="mt-6 md:mt-8 shadow-lg border-2 animate-slide-in-right-delay-5">
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
              to our community. Our mission is to maintain the health of Madha
              Taluka. Visit us at our convenient location on Choriya Township
              Bypass Road, Kurduwadi, or contact us for any inquiries about our
              services.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto animate-slide-in-right-delay-6">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">
                Ghuge Medicals Pharmaceutical Distributors
              </p>
              <p className="text-sm text-primary-foreground/80">
                Maintaining the Health of Madha Taluka
              </p>
            </div>
            <div className="text-center md:text-right text-sm text-primary-foreground/80">
              <p>© {currentYear} Ghuge Medicals. All rights reserved.</p>
              <p className="mt-1">
                Built with ❤️ using{" "}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary-foreground transition-colors"
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
