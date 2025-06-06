import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Laptop } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{COMPANY_INFO.shortName}</h1>
              <p className="text-xs text-muted-foreground">IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="btn-primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">{COMPANY_INFO.shortName}</h2>
                    <p className="text-sm text-muted-foreground">IT Solutions</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-3">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-md ${
                        isActive(item.href) 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="pt-4 border-t">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-primary">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
