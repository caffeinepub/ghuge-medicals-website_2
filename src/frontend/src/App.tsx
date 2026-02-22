import { MapPin, Phone, Mail, Clock, Building2, Package } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'ghuge-medicals'
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="relative bg-primary text-primary-foreground shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/hero-bg.dim_1200x600.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-8 md:py-12">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/assets/generated/logo.dim_200x200.png"
              alt="Ghuge Medicals Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-2 shadow-md"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Ghuge Medicals
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mt-1">
                Your Trusted Medical Provider for the Taluka Region
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-8 md:py-12">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Business Information Card */}
          <div className="space-y-6">
            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-accent" />
                  Business Hours
                </h2>
                <div className="bg-accent/10 rounded-lg p-6 border-l-4 border-accent">
                  <p className="text-3xl font-bold text-accent text-center">
                    10:00 AM - 7:00 PM
                  </p>
                  <p className="text-center text-muted-foreground mt-2">
                    Open Daily
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow">
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
                        href="tel:9960093523"
                        className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        9960093523
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
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
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
                    <a href="tel:9960093523">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 min-w-[140px]">
                    <a href="mailto:aghuge99@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Business Details Section */}
        <Card className="mt-6 md:mt-8 shadow-lg border-2">
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
                  Medical Supply Store
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
                    <p className="text-foreground font-medium">Ghuge Medicals</p>
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
                    <p className="text-sm text-muted-foreground mb-1">Coordinates</p>
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
                      Ghuge Medicals is a trusted medical supply store serving the Kurduwadi region 
                      and surrounding areas. We specialize in providing quality medical supplies, 
                      healthcare products, and pharmaceutical items to meet the healthcare needs 
                      of our community.
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
                <p className="text-sm text-muted-foreground">Need directions?</p>
                <p className="text-foreground font-semibold">Visit us on Google Maps</p>
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

        {/* About Section */}
        <Card className="mt-6 md:mt-8 shadow-lg border-2">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About Ghuge Medicals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ghuge Medicals is your trusted healthcare partner, proudly serving the entire taluka region. 
              We are committed to providing quality medical supplies and healthcare products to our community. 
              Visit us at our convenient location on Choriya Township Bypass Road, Kurduwadi, or contact us 
              for any inquiries about our services.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold">Ghuge Medicals</p>
              <p className="text-sm text-primary-foreground/80">
                Serving the Taluka Region with Quality Healthcare
              </p>
            </div>
            <div className="text-center md:text-right text-sm text-primary-foreground/80">
              <p>
                © {currentYear} Ghuge Medicals. All rights reserved.
              </p>
              <p className="mt-1">
                Built with ❤️ using{' '}
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
