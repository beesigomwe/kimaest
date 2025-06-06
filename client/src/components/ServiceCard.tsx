import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  onLearnMore?: () => void;
}

export default function ServiceCard({ title, description, icon, features, onLearnMore }: ServiceCardProps) {
  return (
    <Card className="h-full card-hover bg-white shadow-lg border border-gray-100">
      <CardContent className="p-8">
        <div className="text-primary text-4xl mb-6">
          <i className={icon}></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        {features && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-check text-primary mr-2 text-xs"></i>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          variant="ghost" 
          className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-medium"
          onClick={onLearnMore}
        >
          Learn More <i className="fas fa-arrow-right ml-1"></i>
        </Button>
      </CardContent>
    </Card>
  );
}
