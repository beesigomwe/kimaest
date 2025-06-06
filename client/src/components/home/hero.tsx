import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner in <span className="text-yellow-300">IT Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {COMPANY_INFO.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-success hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
