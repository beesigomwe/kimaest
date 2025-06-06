import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function TermsOfService() {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Please read these terms carefully before using our services. They govern your relationship with our company.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> {lastUpdated}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Effective Date:</strong> {lastUpdated}
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These Terms of Service ("Terms") govern your use of services provided by {COMPANY_INFO.name} 
                  ("Company," "we," "our," or "us"). By engaging our services or using our website, 
                  you agree to be bound by these Terms.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    By accessing our website, engaging our services, or entering into a service agreement with us, 
                    you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                    If you do not agree to these Terms, please do not use our services.
                  </p>
                  
                  <p className="text-muted-foreground">
                    These Terms apply to all users of our services, including clients, website visitors, 
                    and anyone who accesses or uses our services in any capacity.
                  </p>
                </CardContent>
              </Card>

              {/* Description of Services */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">2. Description of Services</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    {COMPANY_INFO.name} provides comprehensive IT solutions including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>IT consulting and implementation services</li>
                    <li>Network setup and infrastructure management</li>
                    <li>Cybersecurity solutions and monitoring</li>
                    <li>Hardware sales and installation</li>
                    <li>Software development and licensing</li>
                    <li>Printer supplies and accessories</li>
                    <li>Technical support and maintenance</li>
                    <li>Cloud computing solutions</li>
                  </ul>
                  
                  <p className="text-muted-foreground">
                    Specific service details, deliverables, timelines, and pricing will be outlined 
                    in individual service agreements or statements of work.
                  </p>
                </CardContent>
              </Card>

              {/* Client Responsibilities */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">3. Client Responsibilities</h2>
                  
                  <p className="text-muted-foreground mb-4">As a client, you agree to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Grant appropriate access to systems, facilities, and personnel as required</li>
                    <li>Maintain confidentiality of login credentials and access information</li>
                    <li>Make timely payments according to agreed terms</li>
                    <li>Communicate changes in requirements or scope promptly</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Backup critical data before any system modifications</li>
                    <li>Provide a safe working environment for our technicians</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">4. Payment Terms</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Payment Schedule</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Invoices are due within 30 days of issuance unless otherwise specified</li>
                        <li>Project-based work may require deposits or milestone payments</li>
                        <li>Recurring services are billed monthly or annually as agreed</li>
                        <li>Hardware purchases typically require payment upon delivery</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Late Payments</h3>
                      <p className="text-muted-foreground">
                        Late payments may incur service charges and may result in suspension of services. 
                        We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month 
                        or the maximum rate permitted by law, whichever is lower.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">5. Intellectual Property</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Our Intellectual Property</h3>
                      <p className="text-muted-foreground">
                        All methodologies, processes, techniques, and know-how developed by us remain our 
                        intellectual property. You receive a license to use our solutions but not ownership 
                        of underlying intellectual property.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Custom Development</h3>
                      <p className="text-muted-foreground">
                        For custom software development, intellectual property rights will be specified 
                        in the project agreement. Generally, you will own the custom application while 
                        we retain rights to underlying frameworks and methodologies.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Client Data</h3>
                      <p className="text-muted-foreground">
                        You retain ownership of all data, content, and information you provide to us. 
                        We will not use your confidential information for any purpose other than 
                        providing agreed services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Confidentiality */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">6. Confidentiality</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    We understand the sensitive nature of business information and commit to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Maintain strict confidentiality of all client information</li>
                    <li>Use client information only for providing agreed services</li>
                    <li>Implement appropriate security measures to protect data</li>
                    <li>Not disclose information to third parties without consent</li>
                    <li>Return or destroy confidential information upon request</li>
                  </ul>
                  
                  <p className="text-muted-foreground mt-4">
                    This confidentiality obligation survives termination of our service relationship.
                  </p>
                </CardContent>
              </Card>

              {/* Warranties and Disclaimers */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">7. Warranties and Disclaimers</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Service Warranties</h3>
                      <p className="text-muted-foreground">
                        We warrant that our services will be performed in a professional and workmanlike manner 
                        in accordance with industry standards. We will remedy any services that do not conform 
                        to this warranty at no additional cost.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Product Warranties</h3>
                      <p className="text-muted-foreground">
                        Hardware products are covered by manufacturer warranties. We will assist with warranty 
                        claims but are not responsible for manufacturer defects or limitations.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Disclaimers</h3>
                      <p className="text-muted-foreground">
                        EXCEPT AS EXPRESSLY STATED, ALL SERVICES AND PRODUCTS ARE PROVIDED "AS IS" WITHOUT 
                        ANY WARRANTIES, EXPRESS OR IMPLIED. WE DISCLAIM ALL IMPLIED WARRANTIES INCLUDING 
                        MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">8. Limitation of Liability</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY FOR ANY CLAIMS ARISING FROM 
                    OR RELATED TO OUR SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU FOR 
                    THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                    OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, DATA LOSS, 
                    OR BUSINESS INTERRUPTION.
                  </p>
                  
                  <p className="text-muted-foreground">
                    This limitation applies regardless of the theory of liability and even if 
                    we have been advised of the possibility of such damages.
                  </p>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">9. Termination</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Termination by Client</h3>
                      <p className="text-muted-foreground">
                        You may terminate services with 30 days written notice. You remain responsible 
                        for payment of all services performed and expenses incurred up to the termination date.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Termination by Company</h3>
                      <p className="text-muted-foreground">
                        We may terminate services immediately for material breach of these Terms, 
                        non-payment, or if continuation of services would be illegal or impractical.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Effect of Termination</h3>
                      <p className="text-muted-foreground">
                        Upon termination, we will provide reasonable assistance in transitioning services 
                        and will return client property as requested. Confidentiality obligations continue 
                        after termination.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Force Majeure */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">10. Force Majeure</h2>
                  
                  <p className="text-muted-foreground">
                    Neither party shall be liable for any failure or delay in performance due to circumstances 
                    beyond their reasonable control, including but not limited to acts of God, natural disasters, 
                    war, terrorism, pandemic, government actions, or infrastructure failures. 
                    Performance obligations will be suspended during such events.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">11. Governing Law and Dispute Resolution</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of Uganda. 
                    Any disputes arising from these Terms or our services shall be resolved through:
                  </p>
                  <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Good faith negotiations between the parties</li>
                    <li>Mediation if negotiations fail</li>
                    <li>Arbitration or litigation in Kampala, Uganda if mediation is unsuccessful</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">12. Changes to Terms</h2>
                  
                  <p className="text-muted-foreground">
                    We may update these Terms from time to time to reflect changes in our services, 
                    legal requirements, or business practices. Updated Terms will be posted on our website 
                    with a new effective date. Continued use of our services after such changes constitutes 
                    acceptance of the updated Terms.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">13. Contact Information</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>{COMPANY_INFO.name}</strong></p>
                    <p>{COMPANY_INFO.address}</p>
                    <p>Phone: {COMPANY_INFO.phone}</p>
                    <p>Email: {COMPANY_INFO.email}</p>
                  </div>
                  
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button>
                        <i className="fas fa-envelope mr-2"></i>
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Information</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy">
                <Button variant="outline">
                  <i className="fas fa-shield-alt mr-2"></i>
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline">
                  <i className="fas fa-question-circle mr-2"></i>
                  FAQ
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
