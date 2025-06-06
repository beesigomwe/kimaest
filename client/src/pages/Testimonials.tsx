import TestimonialCard from "@/components/TestimonialCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";
import { Link } from "wouter";

export default function Testimonials() {
  const additionalTestimonials = [
    {
      id: 4,
      name: "Mary Namusisi",
      title: "IT Director, Makerere University",
      content: "The team at Kima Establishments transformed our entire IT infrastructure. Their expertise in education technology solutions is unmatched. Our network performance has improved significantly.",
      rating: 5,
      initials: "MN"
    },
    {
      id: 5,
      name: "Peter Okello",
      title: "Operations Manager, Crane Bank",
      content: "Excellent cybersecurity implementation. They understood our banking requirements and delivered a robust security solution that meets all regulatory standards. Highly professional team.",
      rating: 5,
      initials: "PO"
    },
    {
      id: 6,
      name: "Grace Nambi",
      title: "Administrator, Mulago Hospital",
      content: "Their healthcare IT solutions have streamlined our patient management system. The implementation was smooth with minimal disruption to our daily operations. Outstanding support.",
      rating: 5,
      initials: "GN"
    },
    {
      id: 7,
      name: "Robert Ssebunya",
      title: "CEO, Kampala Steel Works",
      content: "The manufacturing ERP system they implemented has revolutionized our production processes. Real-time monitoring and quality control features have significantly improved our efficiency.",
      rating: 5,
      initials: "RS"
    },
    {
      id: 8,
      name: "Susan Nabwire",
      title: "Principal, Kampala International School",
      content: "Amazing work on our school's digital transformation. The learning management system and Wi-Fi infrastructure have enhanced our students' learning experience tremendously.",
      rating: 5,
      initials: "SN"
    },
    {
      id: 9,
      name: "Michael Ddungu",
      title: "Store Manager, Garden City Mall",
      content: "The POS and inventory management systems work flawlessly. Customer analytics dashboard provides valuable insights. The team's retail technology expertise is impressive.",
      rating: 5,
      initials: "MD"
    }
  ];

  const allTestimonials = [...TESTIMONIALS, ...additionalTestimonials];

  const stats = [
    { value: "500+", label: "Happy Clients", icon: "fas fa-users" },
    { value: "98%", label: "Satisfaction Rate", icon: "fas fa-thumbs-up" },
    { value: "24/7", label: "Support Available", icon: "fas fa-headset" },
    { value: "10+", label: "Years Experience", icon: "fas fa-calendar-alt" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Discover why businesses across Uganda trust us with their IT solutions and digital transformation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-primary text-3xl mb-3">
                  <i className={stat.icon}></i>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real clients who have experienced our exceptional service.
            </p>
          </div>

          {/* Featured testimonial - larger format */}
          <Card className="max-w-4xl mx-auto shadow-lg mb-16">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
                ))}
              </div>
              <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
                "{TESTIMONIALS[0].content}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mr-6">
                  {TESTIMONIALS[0].initials}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-foreground">{TESTIMONIALS[0].name}</h4>
                  <p className="text-muted-foreground">{TESTIMONIALS[0].title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">More Client Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how we've helped businesses across different industries achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  initials={testimonial.initials}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted Across Industries</h2>
            <p className="text-xl text-muted-foreground">
              Our clients represent diverse sectors across Uganda's economy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: "fas fa-hospital", count: "50+" },
              { name: "Education", icon: "fas fa-graduation-cap", count: "75+" },
              { name: "Finance", icon: "fas fa-university", count: "25+" },
              { name: "Retail", icon: "fas fa-shopping-cart", count: "100+" },
              { name: "Manufacturing", icon: "fas fa-industry", count: "30+" },
              { name: "Government", icon: "fas fa-landmark", count: "15+" }
            ].map((industry, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="text-primary text-3xl mb-3">
                    <i className={industry.icon}></i>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.count} clients</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              Hear directly from our clients about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((video, index) => (
              <Card key={video} className="overflow-hidden card-hover">
                <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <i className="fas fa-play-circle text-6xl text-primary mb-4"></i>
                    <p className="text-muted-foreground">Video Testimonial {video}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {video === 1 ? "Healthcare IT Transformation" : "Education System Upgrade"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video === 1 
                      ? "Learn how we helped modernize a major hospital's IT infrastructure."
                      : "Discover our comprehensive solution for a leading educational institution."
                    }
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve the same level of success and satisfaction that our clients experience every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-phone mr-2"></i>
                  Get Started Today
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
