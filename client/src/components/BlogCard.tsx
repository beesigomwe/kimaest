import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  createdAt: Date;
}

export default function BlogCard({ id, title, excerpt, category, imageUrl, createdAt }: BlogCardProps) {
  const formatDate = (date: Date) => {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date';
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(dateObj);
  };

  return (
    <Card className="h-full card-hover overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <i className="fas fa-calendar mr-2"></i>
          <span>{formatDate(createdAt)}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary transition-colors">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <Link href={`/blog/${id}`}>
          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium">
            Read More <i className="fas fa-arrow-right ml-1"></i>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
