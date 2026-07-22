
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollegeRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const CollegeRating = ({ rating, size = "md", showValue = true }: CollegeRatingProps) => {
  // Calculate full and partial stars
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i}
          className={cn(
            sizeClasses[size],
            i < fullStars
              ? "text-primary fill-primary"
              : i === fullStars && hasPartialStar
              ? "text-primary" // Outline color for partial star
              : "text-muted-foreground/30"
          )}
        />
      ))}
      
      {showValue && (
        <span className={cn(
          "font-medium ml-1", 
          size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
        )}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default CollegeRating;
