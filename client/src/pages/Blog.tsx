import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: blogPosts = [], isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Get unique categories from blog posts
  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0]; // First post as featured
  const regularPosts = filteredPosts.slice(1);

  if (isLoading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-primary mb-4"></i>
          <p className="text-muted-foreground">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
          <p className="text-muted-foreground">Failed to load blog posts. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Stay updated with the latest IT trends, insights, and company news from our experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button variant="outline">
                <i className="fas fa-search mr-2"></i>
                Search
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedCategory === category ? "bg-primary text-primary-foreground" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Categories" : category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            
            <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <i className="fas fa-calendar mr-2"></i>
                    <span>{new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }).format(featuredPost.createdAt)}</span>
                  </div>
                  <Button className="w-fit">
                    Read Full Article
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {regularPosts.length > 0 ? (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
              <p className="text-xl text-muted-foreground">
                {searchTerm || selectedCategory !== "all" 
                  ? `Found ${regularPosts.length} article${regularPosts.length !== 1 ? 's' : ''}`
                  : "Explore our latest insights and updates"
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    imageUrl={post.imageUrl}
                    createdAt={post.createdAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <i className="fas fa-search text-4xl text-muted-foreground mb-4"></i>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Articles Found</h2>
              <p className="text-muted-foreground mb-8">
                {searchTerm 
                  ? `No articles match your search for "${searchTerm}"`
                  : `No articles found in the "${selectedCategory}" category`
                }
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center shadow-lg">
            <CardContent className="p-8">
              <i className="fas fa-envelope text-4xl text-primary mb-4"></i>
              <h2 className="text-2xl font-bold text-foreground mb-4">Never Miss an Update</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter and get the latest IT insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Topics</h2>
            <p className="text-xl text-muted-foreground">
              Explore our most popular IT topics and categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Cybersecurity", icon: "fas fa-shield-alt", count: "12 articles" },
              { name: "Cloud Computing", icon: "fas fa-cloud", count: "8 articles" },
              { name: "Network Infrastructure", icon: "fas fa-network-wired", count: "6 articles" },
              { name: "Digital Transformation", icon: "fas fa-digital-tachograph", count: "10 articles" }
            ].map((topic, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="text-primary text-3xl mb-3">
                    <i className={topic.icon}></i>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{topic.name}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
