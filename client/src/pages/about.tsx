import PageHeader from "@/components/common/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Clock, Shield, Target, Eye, Users } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Kima Establishments"
        description="Founded by Immaculate Kisakye, we've been at the forefront of providing innovative IT solutions since our establishment"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business team meeting" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by <span className="font-semibold text-primary">{COMPANY_INFO.founder}</span>, 
                {COMPANY_INFO.name} has been at the forefront of providing innovative IT solutions since our establishment. 
                We are committed to empowering businesses across Kampala and Uganda with cutting-edge technology and exceptional service.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our journey began with a simple vision: to bridge the technology gap for businesses in Uganda. 
                Today, we've grown into a trusted partner for companies of all sizes, delivering comprehensive IT solutions 
                that drive growth and efficiency.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-light-gray px-4 py-2 rounded-lg">
                  <Award className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">Local Expertise</span>
                </div>
                <div className="flex items-center bg-light-gray px-4 py-2 rounded-lg">
                  <Clock className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center bg-light-gray px-4 py-2 rounded-lg">
                  <Shield className="text-primary mr-2 h-5 w-5" />
                  <span className="font-medium">Trusted Partner</span>
                </div>
              </div>

              <Link href="/contact">
                <Button className="btn-primary">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary text-primary-foreground p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated professionals bring years of experience and expertise to every project
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary text-primary-foreground p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{COMPANY_INFO.founder}</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  With a passion for technology and innovation, {COMPANY_INFO.founder} founded {COMPANY_INFO.shortName} 
                  with the vision of transforming how businesses in Uganda leverage technology. Her leadership and 
                  commitment to excellence have made the company a trusted partner for IT solutions across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every solution we deliver, ensuring the highest quality standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technologies and innovative approaches to solve complex challenges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Our clients trust us to deliver consistent, dependable solutions and support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
