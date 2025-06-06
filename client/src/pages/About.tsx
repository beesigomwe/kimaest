import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring quality deliverables that exceed expectations.",
      icon: "fas fa-trophy"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and innovative solutions to solve complex business challenges.",
      icon: "fas fa-lightbulb"
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices in all our interactions.",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Customer Focus",
      description: "Our clients' success is our priority. We listen, understand, and deliver solutions that matter.",
      icon: "fas fa-heart"
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: `${COMPANY_INFO.name} was established by ${COMPANY_INFO.founder} with a vision to provide quality IT solutions in Uganda.`
    },
    {
      year: "2015",
      title: "Service Expansion",
      description: "Expanded our services to include comprehensive printer supplies and hardware solutions."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched cloud computing and cybersecurity services to meet evolving business needs."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Serving over 500 satisfied clients across Uganda with 24/7 support and integrated solutions."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About {COMPANY_INFO.shortName}</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Empowering businesses across Uganda with innovative IT solutions and exceptional service since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by <span className="font-semibold text-primary">{COMPANY_INFO.founder}</span>, 
                {COMPANY_INFO.name} began with a simple yet powerful vision: to bridge the technology gap 
                for businesses in Uganda and empower them with world-class IT solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small IT services company has grown into a comprehensive technology partner, 
                serving hundreds of businesses across Kampala and beyond. Our commitment to excellence, 
                innovation, and customer satisfaction has been the driving force behind our success.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we continue to evolve with the rapidly changing technology landscape, always staying 
                ahead of trends to provide our clients with the most effective and efficient solutions.
              </p>
              
              <Link href="/contact">
                <Button className="btn-primary">
                  <i className="fas fa-handshake mr-2"></i>
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team meeting" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                    <i className="fas fa-bullseye text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with cutting-edge technology and exceptional service, enabling them 
                  to achieve their goals through reliable IT solutions that drive growth, efficiency, and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                    <i className="fas fa-eye text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading IT solutions provider in Uganda, recognized for our innovation, reliability, 
                  and commitment to transforming businesses through technology that makes a real difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="text-primary text-3xl mb-4">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth and evolution as Uganda's trusted IT partner.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="flex flex-col items-center mr-8">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-16 bg-primary/30 mt-4"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-primary font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8">Meet Our Founder</h2>
            
            <Card className="bg-gray-50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6">
                    {COMPANY_INFO.founder.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{COMPANY_INFO.founder}</h3>
                  <p className="text-lg text-primary font-medium mb-6">Founder & CEO</p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    With a passion for technology and a vision to transform businesses through innovative IT solutions, 
                    {COMPANY_INFO.founder} founded {COMPANY_INFO.shortName} to bridge the technology gap in Uganda. 
                    Her leadership and commitment to excellence have made the company a trusted partner for businesses 
                    across the region.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their IT needs. Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-phone mr-2"></i>
                  Get Started Today
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
