
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import StudyAbroadCollegeCard from "@/components/studyabroad/StudyAbroadCollegeCard";
import { getCollegesByCountry, countries } from "@/data/studyAbroadData";
import { ChevronLeft } from "lucide-react";

const CountryCollegesPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const colleges = countryId ? getCollegesByCountry(countryId) : [];
  const country = countries.find(c => c.id === countryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryId]);

  if (!country) {
    return (
      <PageLayout title="Country Not Found">
        <div className="container max-w-7xl mx-auto py-8 px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">Country not found</h1>
            <Link to="/study-abroad" className="text-primary mt-4 inline-block">
              Go back to Study Abroad
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`Study in ${country.name}`}>
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
          <Link to="/study-abroad" className="flex items-center text-primary hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Study Abroad
          </Link>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div 
              className="w-full md:w-48 h-32 rounded-lg bg-cover bg-center shrink-0"
              style={{ backgroundImage: `url(${country.flagUrl})` }}
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Study in {country.name}</h1>
              <p className="text-lg text-muted-foreground">{country.description}</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Universities in {country.name}</h2>
            {colleges.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {colleges.map((college) => (
                  <StudyAbroadCollegeCard 
                    key={college.id} 
                    college={college} 
                    countryId={countryId || ""} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-secondary rounded-lg">
                <p className="text-muted-foreground">No colleges found for this country.</p>
              </div>
            )}
          </div>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Why Study in {country.name}?
            </h3>
            <ul className="space-y-2">
              {country.id === "usa" && (
                <>
                  <li>• Home to 8 of the world's top 10 universities</li>
                  <li>• Flexible education system with diverse course options</li>
                  <li>• Extensive research opportunities and industry connections</li>
                  <li>• Over 800,000 international students enrolled annually</li>
                </>
              )}
              {country.id === "uk" && (
                <>
                  <li>• Prestigious universities with centuries of academic excellence</li>
                  <li>• Shorter degree programs (3 years for Bachelor's)</li>
                  <li>• Strong emphasis on critical thinking and independent research</li>
                  <li>• Post-study work visa for 2 years after graduation</li>
                </>
              )}
              {country.id === "canada" && (
                <>
                  <li>• Safe and welcoming environment for international students</li>
                  <li>• More affordable tuition than US universities</li>
                  <li>• Post-graduation work permit for up to 3 years</li>
                  <li>• Pathway to permanent residency for graduates</li>
                </>
              )}
              {country.id === "australia" && (
                <>
                  <li>• Strong support system for international students</li>
                  <li>• High quality of life and beautiful natural surroundings</li>
                  <li>• Post-study work visa for 2-4 years</li>
                  <li>• Strong focus on practical skills and industry experience</li>
                </>
              )}
              {country.id === "germany" && (
                <>
                  <li>• No or minimal tuition fees at public universities</li>
                  <li>• Strong focus on engineering and technical education</li>
                  <li>• Work permit for 18 months after graduation</li>
                  <li>• Growing number of English-taught programs</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CountryCollegesPage;
