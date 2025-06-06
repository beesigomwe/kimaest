import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPosts = blogPosts?.slice(0, 3) || [];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest IT trends, news, and insights from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="card-hover overflow-hidden">
              {post.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <Tag className="mr-2 h-4 w-4" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary transition-colors duration-200">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto font-medium">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="btn-primary">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
