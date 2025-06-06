import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES, TESTIMONIALS, COMPANY_INFO } from "@/lib/constants";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";

export default function Home() {
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Take only the first 3 blog posts for the home page
  const latestPosts = blogPosts.slice(0, 3);

  const stats = [
    { label: "Years Experience", value: "10+", icon: "fas fa-calendar-alt" },
    { label: "Clients Satisfied", value: "500+", icon: "fas fa-users" },
    { label: "Projects Completed", value: "1000+", icon: "fas fa-project-diagram" },
    { label: "Support Available", value: "24/7", icon: "fas fa-clock" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-primary mb-2">
                  <i className={`${stat.icon} text-3xl`}></i>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs with professional expertise and reliable support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features.slice(0, 3)}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="btn-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional business meeting with technology" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-foreground mb-6">About {COMPANY_INFO.shortName}</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by <span className="font-semibold text-primary">{COMPANY_INFO.founder}</span>, 
                {COMPANY_INFO.name} has been at the forefront of providing innovative IT solutions since our establishment. 
                We are committed to empowering businesses across Kampala and Uganda with cutting-edge technology and exceptional service.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-bullseye text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm">Empower businesses with cutting-edge technology and exceptional service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <i className="fas fa-eye text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Our Vision</h4>
                    <p className="text-muted-foreground text-sm">To be the leading IT solutions provider in Uganda</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button className="btn-primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-quality IT products and supplies from leading manufacturers, ensuring optimal performance for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Computer hardware equipment" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Computer Hardware</h3>
                <p className="text-muted-foreground mb-4">Latest computers, laptops, servers, and networking equipment from top manufacturers.</p>
                <Link href="/products">
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
                    View Products <i className="fas fa-arrow-right ml-1"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Printer supplies and cartridges" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Printer Supplies</h3>
                <p className="text-muted-foreground mb-4">Original and compatible ink cartridges, toners, and printer accessories.</p>
                <Link href="/products">
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
                    View Products <i className="fas fa-arrow-right ml-1"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                  alt="Networking equipment and cables" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Networking Equipment</h3>
                <p className="text-muted-foreground mb-4">Routers, switches, cables, and networking accessories for reliable connectivity.</p>
                <Link href="/products">
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
                    View Products <i className="fas fa-arrow-right ml-1"></i>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses across Kampala for reliable IT solutions and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
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

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button className="btn-primary">
                View All Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest IT trends, news, and insights from our experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    imageUrl={post.imageUrl}
                    createdAt={post.createdAt}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button className="btn-primary">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
