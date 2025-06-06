import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { Link } from "wouter";

export default function Services() {
  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start by understanding your business needs and current IT infrastructure.",
      icon: "fas fa-comments"
    },
    {
      step: "02",
      title: "Assessment",
      description: "Our experts conduct a thorough assessment and develop a customized solution plan.",
      icon: "fas fa-search"
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your daily operations.",
      icon: "fas fa-cogs"
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and maintenance to ensure optimal performance and security.",
      icon: "fas fa-headset"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "fas fa-hospital", description: "Secure patient data management and medical equipment integration" },
    { name: "Education", icon: "fas fa-graduation-cap", description: "Learning management systems and classroom technology solutions" },
    { name: "Finance", icon: "fas fa-university", description: "Banking software, security systems, and compliance solutions" },
    { name: "Retail", icon: "fas fa-shopping-cart", description: "Point-of-sale systems and inventory management solutions" },
    { name: "Manufacturing", icon: "fas fa-industry", description: "Production monitoring and quality control systems" },
    { name: "Government", icon: "fas fa-landmark", description: "Public sector IT infrastructure and citizen services" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Comprehensive IT solutions designed to empower your business with cutting-edge technology and reliable support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic IT support to complex enterprise solutions, we have the expertise to handle all your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-primary text-2xl mb-4">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Specialized solutions tailored to meet the unique requirements of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="text-primary text-3xl mb-4">
                    <i className={industry.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Kima Establishments?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-award text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Local Expertise</h4>
                    <p className="text-muted-foreground">Deep understanding of the Ugandan business environment and local requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-clock text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                    <p className="text-muted-foreground">Round-the-clock technical support to ensure your systems are always running smoothly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-shield-alt text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
                    <p className="text-muted-foreground">Over 500 satisfied clients and 1000+ successful projects across various industries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-lightbulb text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Innovation-Focused</h4>
                    <p className="text-muted-foreground">We stay ahead of technology trends to provide cutting-edge solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="IT professionals working together" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you transform your business with our comprehensive IT solutions. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-phone mr-2"></i>
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <i className="fas fa-eye mr-2"></i>
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
