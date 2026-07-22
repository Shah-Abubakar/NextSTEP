
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Country } from "@/data/studyAbroadData";
import { Globe } from "lucide-react";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/study-abroad/${country.id}`} className="block">
      <Card className="card-hover h-full border border-border/50 bg-card">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-40 w-full bg-secondary bg-cover bg-center border-b border-border/30"
              style={{ 
                backgroundImage: country.flagUrl 
                  ? `url(${country.flagUrl})` 
                  : "url('/placeholder.svg')"
              }}
            />
            <div className="p-4 space-y-2.5">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <h3 className="text-base font-semibold">{country.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">{country.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;
