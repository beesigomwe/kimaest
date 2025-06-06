import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  rating: number;
  initials: string;
}

export default function TestimonialCard({ name, title, content, rating, initials }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-gray-50 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fas fa-star text-yellow-400"></i>
          ))}
        </div>
        
        {/* Content */}
        <p className="text-muted-foreground mb-6 italic leading-relaxed">
          "{content}"
        </p>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
