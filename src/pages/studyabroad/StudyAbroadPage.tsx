
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import CountryCard from "@/components/studyabroad/CountryCard";
import { countries } from "@/data/studyAbroadData";
import { Globe } from "lucide-react";

const StudyAbroadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="Study Abroad Opportunities">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">International</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Study Abroad Opportunities</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore top universities from around the world and their scholarship opportunities for Indian students
            </p>
          </div>

          <div className="border border-border/50 bg-card p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="bg-secondary p-3 flex-shrink-0">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Why Study Abroad?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Studying abroad provides invaluable international exposure, access to world-class education, 
                  diverse cultural experiences, and enhanced career opportunities. Many countries offer 
                  generous scholarships to make quality education more accessible for Indian students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Destinations</p>
            <h2 className="text-xl font-semibold mb-5">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {countries.map((country) => (
                <CountryCard key={country.id} country={country} />
              ))}
            </div>
          </div>

          <div className="mt-10 border border-primary/20 bg-primary/[0.03] p-8">
            <div className="text-center space-y-4 max-w-lg mx-auto">
              <h2 className="text-xl font-semibold">Need Help With Your Study Abroad Journey?</h2>
              <p className="text-muted-foreground text-sm">
                Our counselors can guide you through university selection, application process, 
                visa requirements, and scholarship opportunities.
              </p>
              <button className="bg-primary text-white hover:bg-primary/90 px-6 py-2.5 text-sm font-medium inline-block">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudyAbroadPage;
