
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { StudyAbroadCollege } from "@/data/studyAbroadData";
import { School, Award } from "lucide-react";

interface StudyAbroadCollegeCardProps {
  college: StudyAbroadCollege;
  countryId: string;
}

const StudyAbroadCollegeCard = ({ college, countryId }: StudyAbroadCollegeCardProps) => {
  return (
    <Link to={`/study-abroad/${countryId}/${college.id}`} className="block">
      <Card className="card-hover fade-in-element h-full">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-40 w-full bg-secondary/50 bg-cover bg-center rounded-t-lg"
              style={{ 
                backgroundImage: college.imageUrl 
                  ? `url(${college.imageUrl})` 
                  : "url('/placeholder.svg')"
              }}
            >
              <div className="absolute top-2 right-2 bg-card/90 rounded-full px-2 py-1 flex items-center shadow-sm">
                <span className="font-medium text-sm">Rank: #{college.ranking}</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold line-clamp-2">{college.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{college.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-primary">
                  <School className="h-4 w-4 mr-1" />
                  <span className="text-sm">{countryId}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {college.tuitionFee}
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm">{college.scholarships.length} scholarships</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StudyAbroadCollegeCard;
