import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      id: "services",
      title: "Services & Solutions",
      icon: "fas fa-cogs",
      questions: [
        {
          question: "What IT services do you provide?",
          answer: "We provide comprehensive IT services including network setup, cybersecurity, cloud computing, hardware installation, software development, printer supplies, and 24/7 technical support. Our solutions are tailored to meet the specific needs of businesses across Uganda."
        },
        {
          question: "Do you provide 24/7 technical support?",
          answer: "Yes, we offer round-the-clock technical support to ensure your systems run smoothly. Our support team is available via phone, email, and remote assistance for urgent issues that cannot wait until business hours."
        },
        {
          question: "Can you help with cloud migration?",
          answer: "Absolutely! We specialize in cloud migration services, helping businesses transition from on-premises infrastructure to cloud-based solutions. We work with major cloud providers and ensure a smooth, secure migration process with minimal downtime."
        },
        {
          question: "Do you offer custom software development?",
          answer: "Yes, we develop custom software solutions tailored to your business requirements. Our development team has experience in various technologies and can create web applications, mobile apps, and desktop software to meet your specific needs."
        }
      ]
    },
    {
      id: "products",
      title: "Products & Hardware",
      icon: "fas fa-desktop",
      questions: [
        {
          question: "What brands of computers and hardware do you sell?",
          answer: "We partner with leading manufacturers including Dell, HP, Lenovo, Cisco, and other reputable brands. We offer desktops, laptops, servers, networking equipment, and peripherals suitable for both small businesses and large enterprises."
        },
        {
          question: "Do you provide printer supplies for all printer brands?",
          answer: "Yes, we stock original and compatible printer supplies for all major brands including HP, Canon, Epson, Brother, and Samsung. We offer ink cartridges, toner cartridges, drums, and other printer accessories with guaranteed compatibility."
        },
        {
          question: "What warranty do you provide on hardware?",
          answer: "All our hardware products come with manufacturer warranties. We also provide additional support and warranty extensions. Our team handles warranty claims and provides replacement units to minimize downtime for your business."
        },
        {
          question: "Can you help with hardware procurement for large projects?",
          answer: "Yes, we have experience handling large-scale hardware procurement for enterprises, schools, hospitals, and government institutions. We can source equipment in bulk, negotiate competitive pricing, and manage the entire procurement process."
        }
      ]
    },
    {
      id: "pricing",
      title: "Pricing & Payment",
      icon: "fas fa-dollar-sign",
      questions: [
        {
          question: "How do you price your services?",
          answer: "Our pricing varies based on the scope and complexity of the project. We offer competitive rates for one-time projects, ongoing support contracts, and service packages. Contact us for a detailed quote tailored to your specific requirements."
        },
        {
          question: "Do you offer payment plans for large projects?",
          answer: "Yes, we understand that large IT projects require significant investment. We offer flexible payment terms and can structure payments based on project milestones or monthly installments for ongoing services."
        },
        {
          question: "Are there any hidden fees in your pricing?",
          answer: "No, we believe in transparent pricing. All costs are clearly outlined in our quotes, including hardware, software licenses, implementation fees, and ongoing support costs. There are no hidden charges or surprise fees."
        },
        {
          question: "Do you offer discounts for bulk purchases?",
          answer: "Yes, we provide attractive discounts for bulk hardware purchases, volume software licensing, and long-term service contracts. The discount percentage depends on the quantity and value of the order."
        }
      ]
    },
    {
      id: "support",
      title: "Support & Maintenance",
      icon: "fas fa-headset",
      questions: [
        {
          question: "How quickly do you respond to support requests?",
          answer: "For critical issues, we aim to respond within 2 hours. For general support requests, we respond within 24 hours during business days. Our 24/7 support ensures urgent issues are addressed immediately regardless of the time."
        },
        {
          question: "Do you provide on-site support?",
          answer: "Yes, we provide on-site support throughout Kampala and surrounding areas. For locations outside our immediate service area, we can arrange visits or provide detailed remote assistance to resolve issues."
        },
        {
          question: "What is included in your maintenance contracts?",
          answer: "Our maintenance contracts include regular system monitoring, preventive maintenance, security updates, backup verification, performance optimization, and priority support. We also provide detailed monthly reports on system health and recommendations."
        },
        {
          question: "Can you provide remote support?",
          answer: "Yes, we use secure remote access tools to provide support for many issues without needing an on-site visit. This allows us to resolve problems quickly and efficiently, often within minutes of your support request."
        }
      ]
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: "fas fa-shield-alt",
      questions: [
        {
          question: "How do you ensure data security during projects?",
          answer: "We follow strict security protocols including data encryption, secure access controls, confidentiality agreements, and compliance with international security standards. All our technicians are trained in data privacy and security best practices."
        },
        {
          question: "Do you help with cybersecurity implementation?",
          answer: "Yes, cybersecurity is one of our core specialties. We implement firewalls, antivirus solutions, intrusion detection systems, email security, and provide security awareness training for your staff."
        },
        {
          question: "Are you compliant with industry regulations?",
          answer: "Yes, we help businesses achieve compliance with various industry regulations including HIPAA for healthcare, PCI DSS for payment processing, and other relevant standards depending on your industry requirements."
        },
        {
          question: "What backup and disaster recovery solutions do you offer?",
          answer: "We provide comprehensive backup solutions including cloud backup, local backup systems, and disaster recovery planning. Our solutions ensure your data is protected and can be quickly restored in case of system failures or disasters."
        }
      ]
    }
  ];

  // Filter questions based on search term
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Find answers to common questions about our IT services, products, and support offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline">
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm && (
            <div className="text-center mb-12">
              <p className="text-muted-foreground">
                {filteredCategories.reduce((total, cat) => total + cat.questions.length, 0)} results found for "{searchTerm}"
              </p>
            </div>
          )}

          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Results Found</h2>
              <p className="text-muted-foreground mb-8">
                We couldn't find any questions matching "{searchTerm}". Try different keywords or browse our categories below.
              </p>
              <Button onClick={() => setSearchTerm("")} variant="outline">
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center mb-8">
                    <div className="text-primary text-2xl mr-4">
                      <i className={category.icon}></i>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-left font-semibold text-foreground">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </CardContent>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need More Help?</h2>
            <p className="text-xl text-muted-foreground">
              Explore these resources or get in touch with our team for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-phone"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Support</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our technical support team for immediate assistance.
                </p>
                <Link href="/contact">
                  <Button>
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-book"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Knowledge Base</h3>
                <p className="text-muted-foreground mb-6">
                  Browse our comprehensive documentation and guides for detailed information.
                </p>
                <Button variant="outline">
                  Browse Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Chat with our support team in real-time for quick answers to your questions.
                </p>
                <Button variant="outline">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance with your IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-envelope mr-2"></i>
                  Send us a Message
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <i className="fas fa-calendar mr-2"></i>
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
