import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <Newsletter />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <i className="fas fa-microchip text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.shortName}</h3>
                <p className="text-sm text-gray-300">IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in IT solutions, providing comprehensive services to businesses across Kampala and Uganda. 
              Founded by <span className="text-primary font-medium">{COMPANY_INFO.founder}</span>, we deliver excellence in every project.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-primary">
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-primary">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-primary">
                <i className="fab fa-linkedin-in"></i>
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-primary">
                <i className="fab fa-instagram"></i>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {FOOTER_LINKS.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
