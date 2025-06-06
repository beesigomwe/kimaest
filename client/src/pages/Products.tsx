import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: "fas fa-th-large" },
    { id: "hardware", name: "Hardware", icon: "fas fa-desktop" },
    { id: "printers", name: "Printer Supplies", icon: "fas fa-print" },
    { id: "networking", name: "Networking", icon: "fas fa-network-wired" },
    { id: "software", name: "Software", icon: "fas fa-code" }
  ];

  const products = [
    // Hardware
    {
      id: 1,
      name: "Dell OptiPlex Desktop",
      category: "hardware",
      price: "From UGX 2,500,000",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "High-performance desktop computers for business environments",
      features: ["Intel Core i5/i7", "8GB+ RAM", "SSD Storage", "Windows 11 Pro"],
      availability: "In Stock"
    },
    {
      id: 2,
      name: "HP EliteBook Laptop",
      category: "hardware",
      price: "From UGX 3,200,000",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Professional laptops designed for mobile productivity",
      features: ["14-inch Display", "16GB RAM", "512GB SSD", "Business Grade"],
      availability: "In Stock"
    },
    {
      id: 3,
      name: "Server Systems",
      category: "hardware",
      price: "From UGX 8,000,000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Enterprise-grade servers for business applications",
      features: ["Rack Mount", "High Availability", "RAID Configuration", "24/7 Support"],
      availability: "Custom Order"
    },
    // Printer Supplies
    {
      id: 4,
      name: "HP Original Ink Cartridges",
      category: "printers",
      price: "From UGX 85,000",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Genuine HP ink cartridges for all HP printer models",
      features: ["Original Quality", "All HP Models", "Color & Black", "Guaranteed Compatibility"],
      availability: "In Stock"
    },
    {
      id: 5,
      name: "Canon Toner Cartridges",
      category: "printers",
      price: "From UGX 120,000",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "High-yield toner cartridges for Canon laser printers",
      features: ["High Yield", "Laser Quality", "Multiple Sizes", "Fast Delivery"],
      availability: "In Stock"
    },
    {
      id: 6,
      name: "Epson Printer Supplies",
      category: "printers",
      price: "From UGX 75,000",
      image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Complete range of Epson printer consumables and accessories",
      features: ["Ink & Toner", "Photo Paper", "Maintenance Kits", "All Epson Models"],
      availability: "In Stock"
    },
    // Networking
    {
      id: 7,
      name: "Cisco Network Switches",
      category: "networking",
      price: "From UGX 1,500,000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Enterprise-grade network switches for reliable connectivity",
      features: ["24/48 Port", "Gigabit Speed", "PoE Support", "Enterprise Grade"],
      availability: "In Stock"
    },
    {
      id: 8,
      name: "Wireless Access Points",
      category: "networking",
      price: "From UGX 450,000",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "High-performance wireless access points for business WiFi",
      features: ["Wi-Fi 6", "High Density", "Cloud Managed", "Indoor/Outdoor"],
      availability: "In Stock"
    },
    // Software
    {
      id: 9,
      name: "Microsoft Office 365",
      category: "software",
      price: "From UGX 280,000/year",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Complete office productivity suite with cloud integration",
      features: ["Word, Excel, PowerPoint", "Cloud Storage", "Teams Collaboration", "Business Premium"],
      availability: "Digital Delivery"
    },
    {
      id: 10,
      name: "Antivirus Solutions",
      category: "software",
      price: "From UGX 180,000/year",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      description: "Enterprise-grade cybersecurity and antivirus protection",
      features: ["Real-time Protection", "Firewall", "Email Security", "Endpoint Management"],
      availability: "Digital Delivery"
    }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Quality technology products and supplies from leading manufacturers to meet all your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center space-x-2"
                  >
                    <i className={`${category.icon} text-sm`}></i>
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <Card key={product.id} className="overflow-hidden card-hover">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          variant={product.availability === "In Stock" ? "default" : "secondary"}
                          className={product.availability === "In Stock" ? "bg-green-100 text-green-800" : ""}
                        >
                          {product.availability}
                        </Badge>
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      
                      <ul className="mb-6 space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <i className="fas fa-check text-primary mr-2 text-xs"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1 btn-primary" size="sm">
                          <i className="fas fa-shopping-cart mr-2"></i>
                          Inquire
                        </Button>
                        <Button variant="outline" size="sm">
                          <i className="fas fa-info-circle"></i>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-muted-foreground">
              We partner with leading manufacturers to bring you quality, reliability, and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Genuine Products</h3>
                <p className="text-muted-foreground">All our products are genuine and come with manufacturer warranties.</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick delivery across Kampala and Uganda with tracking support.</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">Technical support and installation assistance from our experts.</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-primary text-3xl mb-4">
                  <i className="fas fa-tags"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Pricing</h3>
                <p className="text-muted-foreground">Best prices in the market with bulk discounts available.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our product specialists are here to help you find the right solutions for your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <i className="fas fa-phone mr-2"></i>
                  Speak with Expert
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <i className="fas fa-download mr-2"></i>
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
