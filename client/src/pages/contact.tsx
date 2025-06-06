import PageHeader from "@/components/common/page-header";
import ContactForm from "@/components/forms/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        description="Ready to transform your business with our IT solutions? Contact us today for a consultation."
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <div className="text-muted-foreground">
                        <p>{COMPANY_INFO.contact.businessHours.weekdays}</p>
                        <p>{COMPANY_INFO.contact.businessHours.saturday}</p>
                        <p>{COMPANY_INFO.contact.businessHours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-8">
                  <div className="bg-light-gray rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="font-medium">Google Maps Integration</p>
                      <p className="text-sm">{COMPANY_INFO.contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our team</p>
                <p className="text-primary font-medium">{COMPANY_INFO.contact.phone}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed message</p>
                <p className="text-primary font-medium">{COMPANY_INFO.contact.email}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">Come to our office</p>
                <p className="text-primary font-medium text-sm">{COMPANY_INFO.contact.address}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
