import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const lastUpdated = "December 15, 2024";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Your privacy and data protection are important to us. Learn how we collect, use, and protect your information.
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
                  This Privacy Policy describes how {COMPANY_INFO.name} ("we," "our," or "us") collects, uses, 
                  and protects your personal information when you visit our website, use our services, or 
                  interact with us in any way.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Information We Collect */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
                      <p className="text-muted-foreground mb-4">We may collect the following personal information:</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Name and contact information (email address, phone number, business address)</li>
                        <li>Company name and job title</li>
                        <li>Information provided in contact forms or during consultations</li>
                        <li>Payment information for services and products</li>
                        <li>Communication preferences and history</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Technical Information</h3>
                      <p className="text-muted-foreground mb-4">We automatically collect certain technical information:</p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Device information and operating system</li>
                        <li>Website usage patterns and analytics</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
                  
                  <p className="text-muted-foreground mb-4">We use your information for the following purposes:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Providing and improving our IT services and products</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Processing orders and managing client relationships</li>
                    <li>Sending you relevant updates, newsletters, and marketing communications</li>
                    <li>Analyzing website usage to improve user experience</li>
                    <li>Complying with legal obligations and protecting our rights</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">3. Information Sharing and Disclosure</h2>
                  
                  <p className="text-muted-foreground mb-4">We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">4. Data Security</h2>
                  
                  <p className="text-muted-foreground mb-4">We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection practices</li>
                    <li>Secure data centers and infrastructure</li>
                  </ul>
                  
                  <p className="text-muted-foreground mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    We cannot guarantee absolute security but strive to use commercially acceptable means to protect your data.
                  </p>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">5. Your Rights and Choices</h2>
                  
                  <p className="text-muted-foreground mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information under certain circumstances</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
                  </ul>
                  
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">6. Cookies and Tracking Technologies</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    We use cookies and similar technologies to enhance your experience on our website:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  
                  <p className="text-muted-foreground mt-4">
                    You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Third-Party Services */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">7. Third-Party Services</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    Our website may contain links to third-party websites or integrate with third-party services. 
                    We are not responsible for the privacy practices of these external sites. We recommend reviewing 
                    their privacy policies before providing any personal information.
                  </p>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">8. Data Retention</h2>
                  
                  <p className="text-muted-foreground">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined 
                    in this policy, comply with legal obligations, resolve disputes, and enforce agreements. 
                    When information is no longer needed, we securely delete or anonymize it.
                  </p>
                </CardContent>
              </Card>

              {/* Children's Privacy */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">9. Children's Privacy</h2>
                  
                  <p className="text-muted-foreground">
                    Our services are not directed to children under the age of 13. We do not knowingly collect 
                    personal information from children under 13. If we become aware that we have collected such 
                    information, we will take steps to delete it promptly.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Policy */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">10. Changes to This Privacy Policy</h2>
                  
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or 
                    legal requirements. We will notify you of significant changes by posting the updated policy 
                    on our website and updating the "Last Updated" date. Your continued use of our services 
                    after such changes constitutes acceptance of the updated policy.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">11. Contact Us</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              <Link href="/terms">
                <Button variant="outline">
                  <i className="fas fa-file-contract mr-2"></i>
                  Terms of Service
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
