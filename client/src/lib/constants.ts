export const COMPANY_INFO = {
  name: "Kima Establishments Limited",
  shortName: "Kima Establishments",
  tagline: "Your Trusted Partner in IT Solutions",
  founder: "Immaculate Kisakye",
  address: "Nasser Road, Kampala, Uganda",
  phone: "+256 779 205147",
  email: "info@kimaestablishments.com",
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    weekend: "Saturday: 9:00 AM - 4:00 PM"
  },
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#"
  }
};

export const SERVICES = [
  {
    id: 1,
    title: "IT Services",
    icon: "fas fa-server",
    description: "Comprehensive IT solutions tailored to your business needs, including network setup, cybersecurity, and cloud computing services.",
    features: ["Network Setup", "Cybersecurity", "Cloud Computing", "System Integration"]
  },
  {
    id: 2,
    title: "Printer Supplies",
    icon: "fas fa-print",
    description: "High-quality printer cartridges, toners, and accessories for all major brands, ensuring optimal printing performance.",
    features: ["Original Cartridges", "Compatible Toners", "Printer Accessories", "Fast Delivery"]
  },
  {
    id: 3,
    title: "Hardware Solutions",
    icon: "fas fa-desktop",
    description: "Sales and installation of computers, servers, and networking equipment with professional setup and configuration.",
    features: ["Computer Sales", "Server Installation", "Network Equipment", "Hardware Support"]
  },
  {
    id: 4,
    title: "Software Development",
    icon: "fas fa-code",
    description: "Custom software development and licensing for business applications, tailored to your specific requirements.",
    features: ["Custom Development", "Software Licensing", "Application Support", "System Updates"]
  },
  {
    id: 5,
    title: "24/7 Support",
    icon: "fas fa-headset",
    description: "Round-the-clock technical support to ensure your systems run smoothly with minimal downtime.",
    features: ["Remote Support", "On-site Service", "Emergency Response", "Preventive Maintenance"]
  },
  {
    id: 6,
    title: "Integrated Solutions",
    icon: "fas fa-cogs",
    description: "Complete integrated solutions for industries such as healthcare, education, and finance with specialized expertise.",
    features: ["Healthcare IT", "Education Systems", "Financial Solutions", "Industry Expertise"]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Mukisa",
    title: "CEO, Kampala Tech Solutions",
    content: "Kima Establishments provided excellent IT support for our office setup. Their team was professional, knowledgeable, and delivered on time. Highly recommended!",
    rating: 5,
    initials: "JM"
  },
  {
    id: 2,
    name: "Sarah Kanyike",
    title: "Operations Manager, Nile Enterprises",
    content: "Outstanding service! They helped us upgrade our entire network infrastructure. The quality of work and ongoing support has been exceptional.",
    rating: 5,
    initials: "SK"
  },
  {
    id: 3,
    name: "David Namugga",
    title: "Office Administrator, Pearl Medical Center",
    content: "Reliable printer supplies and great customer service. We've been working with Kima Establishments for over two years and they never disappoint.",
    rating: 5,
    initials: "DN"
  }
];

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    { name: "IT Services", href: "/services#it-services" },
    { name: "Printer Supplies", href: "/services#printer-supplies" },
    { name: "Hardware", href: "/services#hardware" },
    { name: "Software", href: "/services#software" },
    { name: "24/7 Support", href: "/services#support" },
    { name: "Integrated Solutions", href: "/services#solutions" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonials", href: "/testimonials" }
  ]
};
