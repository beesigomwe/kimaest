import { Link } from "wouter";
import { Laptop, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Laptop className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.shortName}</h3>
                <p className="text-gray-400 text-sm">IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner in IT solutions, providing comprehensive services to businesses across Kampala and Uganda. 
              Founded by {COMPANY_INFO.founder}, we deliver excellence in every project.
            </p>
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.twitter} 
                className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.linkedin} 
                className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.instagram} 
                className="bg-primary hover:bg-primary/80 p-3 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.contact.email}</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>{COMPANY_INFO.contact.businessHours.weekdays}</div>
                  <div>{COMPANY_INFO.contact.businessHours.saturday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/legal" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
