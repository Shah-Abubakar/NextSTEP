
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { College } from "@/data/collegeData";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface CollegeCardProps {
  college: College;
  stateId: string;
}

const CollegeCard = ({ college, stateId }: CollegeCardProps) => {
  // Move console.log outside of JSX
  useEffect(() => {
    console.log(`College: ${college.name}, Image URL: ${college.imageUrl}`);
  }, [college]);

  return (
    <Link to={`/top-colleges/${stateId}/${college.id}`} className="block">
      <Card className="card-hover h-full border border-border/50 bg-card">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-40 w-full bg-secondary bg-cover bg-center border-b border-border/30"
              style={{ 
                backgroundImage: college.imageUrl 
                  ? `url(${college.imageUrl})` 
                  : "url('/placeholder.svg')"
              }}
            >
              <div className="absolute top-2 right-2 bg-card/90 px-2 py-0.5 flex items-center">
                <Star className="h-3.5 w-3.5 text-primary fill-primary mr-1" />
                <span className="font-medium text-xs">{college.rating}</span>
              </div>
            </div>
            <div className="p-4 space-y-2.5">
              <h3 className="text-base font-semibold line-clamp-2">{college.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{college.description}</p>
              <div className="flex items-center justify-between">
                <span className={cn(
                  "inline-flex items-center px-2 py-0.5 text-xs font-medium bg-secondary text-muted-foreground",
                )}>
                  {college.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  Placement: {college.placement.percentage}%
                </span>
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {college.courses.slice(0, 3).map((course, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary text-xs px-2 py-0.5 text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
                {college.courses.length > 3 && (
                  <span className="bg-secondary text-xs px-2 py-0.5 text-muted-foreground">
                    +{college.courses.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CollegeCard;
