import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Kampala Medical Center IT Infrastructure",
      category: "Healthcare",
      client: "Kampala Medical Center",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Complete IT infrastructure overhaul including network setup, server installation, and cybersecurity implementation for a leading medical facility.",
      technologies: ["Network Infrastructure", "Server Systems", "Cybersecurity", "HIPAA Compliance"],
      results: [
        "99.9% network uptime achieved",
        "50% improvement in data processing speed",
        "Full HIPAA compliance certification",
        "24/7 monitoring system implemented"
      ],
      duration: "6 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Uganda Education Board Digital Transformation",
      category: "Education",
      client: "Uganda Education Board",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Comprehensive digital transformation project including learning management system implementation and network infrastructure for 50+ schools.",
      technologies: ["Learning Management System", "Cloud Infrastructure", "Network Setup", "Training Programs"],
      results: [
        "50+ schools connected",
        "10,000+ students enrolled online",
        "75% reduction in administrative workload",
        "Real-time progress tracking implemented"
      ],
      duration: "12 months",
      status: "Completed"
    },
    {
      id: 3,
      title: "East Africa Bank Security Enhancement",
      category: "Finance",
      client: "East Africa Bank",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Advanced cybersecurity implementation and network security enhancement for a major banking institution.",
      technologies: ["Cybersecurity", "Firewall Systems", "Intrusion Detection", "Compliance Monitoring"],
      results: [
        "Zero security breaches since implementation",
        "100% regulatory compliance achieved",
        "Advanced threat detection deployed",
        "Staff security training completed"
      ],
      duration: "8 months",
      status: "Completed"
    },
    {
      id: 4,
      title: "Pearl Shopping Mall Smart Systems",
      category: "Retail",
      client: "Pearl Shopping Mall",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Smart building systems integration including POS systems, inventory management, and customer analytics platform.",
      technologies: ["POS Systems", "Inventory Management", "Wi-Fi Infrastructure", "Analytics Platform"],
      results: [
        "30% increase in operational efficiency",
        "Real-time inventory tracking",
        "Customer analytics dashboard",
        "Seamless Wi-Fi coverage throughout mall"
      ],
      duration: "4 months",
      status: "Completed"
    },
    {
      id: 5,
      title: "Nile Manufacturing ERP Implementation",
      category: "Manufacturing",
      client: "Nile Manufacturing Ltd",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Enterprise Resource Planning system implementation with production monitoring and quality control integration.",
      technologies: ["ERP System", "Production Monitoring", "Quality Control", "Data Analytics"],
      results: [
        "40% improvement in production efficiency",
        "Real-time quality monitoring",
        "Automated reporting system",
        "Reduced waste by 25%"
      ],
      duration: "10 months",
      status: "Completed"
    },
    {
      id: 6,
      title: "Ministry of Health Digital Health Records",
      category: "Government",
      client: "Ministry of Health, Uganda",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "National digital health records system with secure data management and inter-facility connectivity.",
      technologies: ["Electronic Health Records", "Cloud Infrastructure", "Data Security", "System Integration"],
      results: [
        "500+ health facilities connected",
        "Secure patient data management",
        "Inter-facility data sharing enabled",
        "Government compliance achieved"
      ],
      duration: "18 months",
      status: "Ongoing"
    }
  ];

  const categories = ["All", "Healthcare", "Education", "Finance", "Retail", "Manufacturing", "Government"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Showcasing successful IT implementations across various industries in Uganda and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our most impactful projects and see how we've helped businesses transform through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden card-hover">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "outline"}
                      className={project.status === "Completed" ? "bg-green-100 text-green-800" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{project.client}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <i className="fas fa-check text-primary mr-2"></i>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      <i className="fas fa-clock mr-2"></i>
                      Duration: {project.duration}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Specialized expertise across multiple sectors with tailored IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: "fas fa-hospital", color: "text-red-600" },
              { name: "Education", icon: "fas fa-graduation-cap", color: "text-blue-600" },
              { name: "Finance", icon: "fas fa-university", color: "text-green-600" },
              { name: "Retail", icon: "fas fa-shopping-cart", color: "text-purple-600" },
              { name: "Manufacturing", icon: "fas fa-industry", color: "text-orange-600" },
              { name: "Government", icon: "fas fa-landmark", color: "text-gray-600" }
            ].map((industry, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className={`${industry.color} text-3xl mb-3`}>
                    <i className={industry.icon}></i>
                  </div>
                  <h3 className="font-semibold text-foreground">{industry.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Project Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business needs, challenges, and objectives through detailed consultation.",
                icon: "fas fa-search"
              },
              {
                step: "02",
                title: "Planning",
                description: "Developing a comprehensive project plan with timelines, resources, and deliverables.",
                icon: "fas fa-clipboard-list"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Executing the solution with regular updates and minimal disruption to operations.",
                icon: "fas fa-cogs"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance, monitoring, and support to ensure optimal performance.",
                icon: "fas fa-headset"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-primary text-2xl mb-4">
                  <i className={step.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with a customized IT solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-phone mr-2"></i>
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
