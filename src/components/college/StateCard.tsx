import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { State } from "@/data/collegeData";
import { GraduationCap } from "lucide-react";

interface StateCardProps {
  state: State;
}

const StateCard = ({ state }: StateCardProps) => {
  return (
    <Link to={`/top-colleges/${state.id}`} className="block group">
      <Card className="card-hover border border-border/50 bg-card">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                {state.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {state.collegeCount} Colleges
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StateCard;
