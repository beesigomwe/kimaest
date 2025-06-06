import PageHeader from "@/components/common/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const products = {
  "Computer Hardware": [
    {
      name: "Dell OptiPlex 3080",
      description: "Compact desktop computer perfect for office environments",
      features: ["Intel Core i5", "8GB RAM", "256GB SSD", "Windows 11 Pro"],
      category: "Desktop Computers"
    },
    {
      name: "HP ProBook 450 G8",
      description: "Professional laptop for business users",
      features: ["Intel Core i7", "16GB RAM", "512GB SSD", "15.6\" Display"],
      category: "Laptops"
    },
    {
      name: "Cisco Catalyst 2960-X",
      description: "Managed Ethernet switch for small to medium businesses",
      features: ["24 Ports", "Layer 2 Switching", "PoE Support", "Rack Mountable"],
      category: "Networking"
    },
    {
      name: "HPE ProLiant DL380",
      description: "Enterprise-grade rack server",
      features: ["Dual Intel Xeon", "64GB RAM", "RAID Storage", "Redundant PSU"],
      category: "Servers"
    }
  ],
  "Printer Supplies": [
    {
      name: "HP 305A Toner Cartridge",
      description: "Original toner cartridge for HP LaserJet printers",
      features: ["2,200 page yield", "High quality output", "Easy installation", "Genuine HP"],
      category: "Toner Cartridges"
    },
    {
      name: "Canon PG-245XL Ink",
      description: "High capacity black ink cartridge",
      features: ["300 page yield", "Pigment-based ink", "Smudge resistant", "Original Canon"],
      category: "Ink Cartridges"
    },
    {
      name: "Brother TN-2320 Toner",
      description: "Compatible toner cartridge for Brother printers",
      features: ["2,600 page yield", "Cost-effective", "Premium quality", "Compatible"],
      category: "Compatible Cartridges"
    },
    {
      name: "Epson T664 EcoTank Ink",
      description: "Refill ink bottles for EcoTank printers",
      features: ["High capacity", "Ultra-low cost", "Mess-free refilling", "Genuine Epson"],
      category: "Ink Bottles"
    }
  ],
  "Networking Equipment": [
    {
      name: "TP-Link Archer AX6000",
      description: "High-performance WiFi 6 router",
      features: ["WiFi 6 Standard", "8 Antennas", "Multi-Gigabit Ports", "Advanced Security"],
      category: "Wireless Routers"
    },
    {
      name: "Ubiquiti UniFi Access Points",
      description: "Enterprise-grade wireless access points",
      features: ["Centrally Managed", "High Density", "PoE Powered", "Scalable"],
      category: "Access Points"
    },
    {
      name: "Panduit Cat6A Cables",
      description: "Professional networking cables",
      features: ["10Gbps Support", "Snagless Design", "Various Lengths", "Certified"],
      category: "Network Cables"
    },
    {
      name: "APC Smart-UPS 1500VA",
      description: "Uninterruptible power supply for network equipment",
      features: ["1500VA Capacity", "LCD Display", "Network Management", "Surge Protection"],
      category: "Power Protection"
    }
  ]
};

export default function Products() {
  return (
    <>
      <PageHeader
        title="Our Products"
        description="High-quality IT products and supplies from leading manufacturers, ensuring optimal performance for your business needs"
        backgroundImage="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
      >
        <Link href="/contact">
          <Button size="lg" className="btn-primary">
            Request Quote
          </Button>
        </Link>
      </PageHeader>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our comprehensive range of IT products and supplies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRODUCT_CATEGORIES.map((category) => (
              <Card key={category.name} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    View Products <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {Object.entries(products).map(([categoryName, categoryProducts]) => (
        <section key={categoryName} className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{categoryName}</h2>
              <p className="text-lg text-muted-foreground">
                Professional-grade {categoryName.toLowerCase()} for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <Card key={product.name} className="card-hover">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-muted-foreground text-xs flex items-center">
                            <Star className="h-3 w-3 text-warning mr-1 fill-current" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We partner with leading manufacturers to bring you the best technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Genuine Products</h3>
                <p className="text-muted-foreground text-sm">100% authentic products from authorized distributors</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Competitive Pricing</h3>
                <p className="text-muted-foreground text-sm">Best prices in the market with flexible payment options</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground text-sm">Quick delivery across Kampala and surrounding areas</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Technical Support</h3>
                <p className="text-muted-foreground text-sm">Expert technical support and installation services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts are ready to help you find the perfect IT solutions for your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Get Expert Advice
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
