import PageHeader from "@/components/common/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Server, Printer, Dock, Code, Headset, Cog, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const iconMap = {
  server: Server,
  printer: Printer,
  desktop: Dock,
  code: Code,
  headset: Headset,
  cogs: Cog
};

const serviceDetails = {
  "IT Services": {
    features: [
      "Network Design & Setup",
      "Cybersecurity Solutions",
      "Cloud Computing Services",
      "Data Backup & Recovery",
      "IT Consulting",
      "System Integration"
    ],
    benefits: [
      "Improved Security",
      "Enhanced Performance",
      "Reduced Downtime",
      "Cost Optimization"
    ]
  },
  "Printer Supplies": {
    features: [
      "Original Cartridges",
      "Compatible Toners",
      "Printer Accessories",
      "Bulk Supply Options",
      "Fast Delivery",
      "Quality Guarantee"
    ],
    benefits: [
      "Cost Savings",
      "Reliable Quality",
      "Wide Compatibility",
      "Express Delivery"
    ]
  },
  "Hardware Solutions": {
    features: [
      "Dock Computers",
      "Laptops & Tablets",
      "Servers & Storage",
      "Networking Equipment",
      "Professional Installation",
      "Hardware Maintenance"
    ],
    benefits: [
      "Latest Technology",
      "Professional Setup",
      "Warranty Support",
      "Scalable Solutions"
    ]
  },
  "Software Development": {
    features: [
      "Custom Applications",
      "Web Development",
      "Mobile Apps",
      "Database Design",
      "API Integration",
      "Software Maintenance"
    ],
    benefits: [
      "Tailored Solutions",
      "Modern Technology",
      "Ongoing Support",
      "Business Automation"
    ]
  },
  "24/7 Support": {
    features: [
      "Remote Assistance",
      "On-site Support",
      "Emergency Response",
      "Preventive Maintenance",
      "Help Desk Services",
      "Technical Training"
    ],
    benefits: [
      "Minimal Downtime",
      "Expert Assistance",
      "Peace of Mind",
      "Proactive Monitoring"
    ]
  },
  "Integrated Solutions": {
    features: [
      "Healthcare IT",
      "Education Technology",
      "Financial Systems",
      "Retail Solutions",
      "Manufacturing Systems",
      "Government Solutions"
    ],
    benefits: [
      "Industry Expertise",
      "Compliance Ready",
      "Scalable Architecture",
      "End-to-end Support"
    ]
  }
};

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive IT solutions tailored to meet your business needs with professional expertise and reliable support"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      >
        <Link href="/contact">
          <Button size="lg" className="btn-primary">
            Get a Quote
          </Button>
        </Link>
      </PageHeader>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {COMPANY_INFO.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const details = serviceDetails[service.name as keyof typeof serviceDetails];
              
              return (
                <Card key={service.name} className="card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">{service.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Features</h4>
                        <ul className="space-y-2">
                          {details.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {details.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Kima Establishments?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine local expertise with global standards to deliver exceptional IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Proven Experience</h3>
                <p className="text-muted-foreground text-sm">Over 10 years of experience serving businesses in Kampala and Uganda</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Headset className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">Round-the-clock technical support to keep your business running</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">Commitment to quality and reliability in every solution we deliver</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Local Expertise</h3>
                <p className="text-muted-foreground text-sm">Deep understanding of the Ugandan business environment and needs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you leverage technology to achieve your business goals. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
