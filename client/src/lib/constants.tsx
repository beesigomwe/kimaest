export const COMPANY_INFO = {
  name: "Kima Establishments Limited",
  shortName: "Kima Establishments",
  tagline: "Your Trusted Partner in IT Solutions",
  founder: "Immaculate Kisakye",
  description: "Providing top-notch IT services, printer supplies, hardware, software, and comprehensive support solutions in Kampala, Uganda.",
  
  contact: {
    phone: "+256 779 205147",
    email: "info@kimaestablishments.com",
    address: "Nasser Road, Kampala, Uganda",
    businessHours: {
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 4:00 PM",
      sunday: "Sunday: Closed"
    }
  },
  
  mission: "To empower businesses with cutting-edge technology and exceptional service, enabling them to achieve their goals through reliable IT solutions.",
  vision: "To be the leading IT solutions provider in Uganda, recognized for our innovation, reliability, and commitment to client success.",
  
  services: [
    {
      name: "IT Services",
      description: "Comprehensive IT solutions tailored to your business needs, including network setup, cybersecurity, and cloud computing services.",
      icon: "server"
    },
    {
      name: "Printer Supplies",
      description: "High-quality printer cartridges, toners, and accessories for all major brands, ensuring optimal printing performance.",
      icon: "printer"
    },
    {
      name: "Hardware Solutions",
      description: "Sales and installation of computers, servers, and networking equipment with professional setup and configuration.",
      icon: "desktop"
    },
    {
      name: "Software Development",
      description: "Custom software development and licensing for business applications, tailored to your specific requirements.",
      icon: "code"
    },
    {
      name: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly with minimal downtime.",
      icon: "headset"
    },
    {
      name: "Integrated Solutions",
      description: "Complete integrated solutions for industries such as healthcare, education, and finance with specialized expertise.",
      icon: "cogs"
    }
  ],
  
  stats: {
    yearsExperience: "10+",
    clientsSatisfied: "500+",
    projectsCompleted: "1000+",
    supportAvailable: "24/7"
  },
  
  socialMedia: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
] as const;

export const PRODUCT_CATEGORIES = [
  {
    name: "Computer Hardware",
    description: "Latest computers, laptops, servers, and networking equipment from top manufacturers.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    name: "Printer Supplies",
    description: "Original and compatible ink cartridges, toners, and printer accessories.",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    name: "Networking Equipment",
    description: "Routers, switches, cables, and networking accessories for reliable connectivity.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: "What IT services do you provide?",
    answer: "We provide comprehensive IT services including network setup, cybersecurity, cloud computing, hardware installation, software development, and 24/7 technical support."
  },
  {
    question: "Do you offer on-site support?",
    answer: "Yes, we provide both remote and on-site technical support. Our team can visit your location in Kampala and surrounding areas for hardware installation, network setup, and troubleshooting."
  },
  {
    question: "What brands of printer supplies do you carry?",
    answer: "We carry original and compatible cartridges and toners for all major printer brands including HP, Canon, Epson, Brother, Samsung, and Xerox."
  },
  {
    question: "Do you provide custom software development?",
    answer: "Yes, we develop custom software solutions tailored to your business needs. Our team has experience in various technologies and can create applications for different industries."
  },
  {
    question: "What are your support hours?",
    answer: "We offer 24/7 technical support for critical issues. Our regular business hours are Monday to Friday 8:00 AM - 6:00 PM, and Saturday 9:00 AM - 4:00 PM."
  },
  {
    question: "Do you offer financing options for large purchases?",
    answer: "Yes, we offer flexible payment options and financing plans for large IT purchases. Contact us to discuss terms that work for your business."
  }
] as const;
