import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Ready to transform your business with our IT solutions? Contact us today for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-foreground font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="form-input"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-foreground font-medium mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="form-input"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-foreground font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="form-input"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="form-input"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                        Subject *
                      </label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => handleInputChange("subject", value)}
                        disabled={mutation.isPending}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it-services">IT Services</SelectItem>
                          <SelectItem value="printer-supplies">Printer Supplies</SelectItem>
                          <SelectItem value="hardware">Hardware</SelectItem>
                          <SelectItem value="software">Software</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-foreground font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your requirements..."
                        className="form-input resize-none"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-primary" 
                      size="lg"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">{COMPANY_INFO.businessHours.weekdays}</p>
                      <p className="text-muted-foreground">{COMPANY_INFO.businessHours.weekend}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="bg-gray-100 h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <i className="fas fa-map text-4xl mb-4"></i>
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">{COMPANY_INFO.address}</p>
                  <Button variant="outline" className="mt-4" size="sm">
                    <i className="fas fa-directions mr-2"></i>
                    Get Directions
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Other Ways to Reach Us</h2>
            <p className="text-xl text-muted-foreground">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Chat with our support team in real-time for immediate assistance.</p>
                <Button variant="outline">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Send us a message on WhatsApp for quick support and updates.</p>
                <Button variant="outline">
                  Message Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Schedule Meeting</h3>
                <p className="text-muted-foreground mb-4">Book a consultation meeting with our IT specialists.</p>
                <Button variant="outline">
                  Book Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
