
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { studyAbroadColleges, countries } from "@/data/studyAbroadData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ChevronLeft, ExternalLink, Award, School, BookOpen } from "lucide-react";

const CollegeDetailPage = () => {
  const { countryId, collegeId } = useParams<{ countryId: string; collegeId: string }>();
  const college = studyAbroadColleges.find(c => c.id === collegeId);
  const country = countries.find(c => c.id === countryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collegeId]);

  if (!college || !country) {
    return (
      <PageLayout title="College Not Found">
        <div className="container max-w-7xl mx-auto py-8 px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">College not found</h1>
            <Link to="/study-abroad" className="text-primary mt-4 inline-block">
              Go back to Study Abroad
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={college.name}>
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="mb-6">
          <Link to={`/study-abroad/${countryId}`} className="flex items-center text-primary hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {country.name} Universities
          </Link>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3">
              <div 
                className="w-full h-64 rounded-lg bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${college.imageUrl})` }}
              />
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{college.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-4 w-4 text-primary" />
                <span>{country.name}</span>
                <Badge variant="outline">Rank #{college.ranking}</Badge>
              </div>
              <p className="text-lg mb-4">{college.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Tuition Fee</p>
                      <p className="text-lg font-semibold">{college.tuitionFee}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Acceptance Rate</p>
                      <p className="text-lg font-semibold">{college.acceptanceRate}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">World Ranking</p>
                      <p className="text-lg font-semibold">#{college.ranking}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Available Scholarships</h2>
                <div className="space-y-4">
                  {college.scholarships.map((scholarship, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Award className="h-5 w-5 text-primary" />
                              {scholarship.name}
                            </CardTitle>
                            <p className="text-primary font-medium mt-1">
                              Amount: {scholarship.amount}
                            </p>
                          </div>
                          <Badge variant="outline">Deadline: {scholarship.deadline}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-3">
                          <span className="font-medium">Eligibility: </span>
                          {scholarship.eligibility}
                        </p>
                        <a 
                          href={scholarship.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-primary hover:underline text-sm"
                        >
                          Learn more about this scholarship
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5 text-primary" />
                    University Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Official Website</h3>
                    <a 
                      href={college.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
className="flex items-center text-primary hover:underline"
                    >
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium">Country</h3>
                    <p>{country.name}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Tuition Fee</h3>
                    <p>{college.tuitionFee}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Acceptance Rate</h3>
                    <p>{college.acceptanceRate}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                      <p className="text-sm">Research programs and eligibility requirements</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                      <p className="text-sm">Prepare for standardized tests (like TOEFL, IELTS, GRE, GMAT)</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                      <p className="text-sm">Arrange financial documentation and apply for scholarships</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                      <p className="text-sm">Submit your application through the university portal</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary/10 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                      <p className="text-sm">Apply for student visa after receiving acceptance</p>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full bg-primary text-white rounded-md px-4 py-2 text-center font-medium hover:bg-primary/90 transition-colors">
                      Get Application Guidance
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CollegeDetailPage;
