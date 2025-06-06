import Hero from "@/components/home/hero";
import QuickStats from "@/components/home/quick-stats";
import FeaturedServices from "@/components/home/featured-services";
import TestimonialsSection from "@/components/home/testimonials-section";
import BlogSection from "@/components/home/blog-section";
import NewsletterSection from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickStats />
      <FeaturedServices />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
