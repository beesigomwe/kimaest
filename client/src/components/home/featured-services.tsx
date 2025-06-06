import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Printer, Dock, Code, Headset, Cog, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const iconMap = {
  server: Server,
  printer: Printer,
  desktop: Dock,
  code: Code,
  headset: Headset,
  cogs: Cog
};

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs with professional expertise and reliable support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.name} className="card-hover border border-border">
                <CardContent className="p-8">
                  <div className="text-primary text-4xl mb-6">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Link href="/services">
                    <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
