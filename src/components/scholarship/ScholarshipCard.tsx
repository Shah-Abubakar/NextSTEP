
import { Scholarship } from "@/data/scholarshipData";
import { Award, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ScholarshipCardProps = {
  scholarship: Scholarship;
  compact?: boolean;
};

const ScholarshipCard = ({ scholarship, compact = false }: ScholarshipCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:border-primary transition-colors duration-200">
      <CardContent className={compact ? "pt-4" : "pt-6"}>
        <div className="flex items-start justify-between">
          <div>
            <Badge 
              className={`bg-primary hover:bg-primary/90`}
            >
              {scholarship.category.charAt(0).toUpperCase() + scholarship.category.slice(1)}
            </Badge>
            <Badge variant="outline" className="ml-2">
              {scholarship.country}
            </Badge>
          </div>
          <Award className={`h-6 w-6 text-primary flex-shrink-0`} />
        </div>

        <h3 className={`font-semibold ${compact ? 'text-lg mt-2' : 'text-xl mt-3'} line-clamp-2`}>
          {scholarship.name}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{scholarship.organization}</p>

        <div className="mt-3 flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground">Deadline: {scholarship.deadline}</span>
        </div>

        {!compact && (
          <>
            <div className="mt-3">
              <p className="font-semibold">Amount: <span className="font-normal">{scholarship.amount}</span></p>
            </div>
            <div className="mt-3">
              <p className="font-semibold mb-1">Eligibility:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {scholarship.eligibility.slice(0, 3).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
                {scholarship.eligibility.length > 3 && (
                  <li className="text-primary">+{scholarship.eligibility.length - 3} more criteria</li>
                )}
              </ul>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="mt-auto pt-0">
        <Link to={`/scholarships/${scholarship.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ScholarshipCard;
