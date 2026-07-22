
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { getScholarshipById } from "@/data/scholarshipData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, ArrowLeft, Globe, Globe2 } from "lucide-react";
import NotFound from "../NotFound";

const ScholarshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && !getScholarshipById(id)) {
      setNotFound(true);
    }
  }, [id]);
  
  if (notFound || !id) {
    return <NotFound />;
  }
  
  const scholarship = getScholarshipById(id);
  
  if (!scholarship) {
    return <NotFound />;
  }
  
  return (
    <PageLayout title="Scholarship Details">
      <div className="container max-w-4xl mx-auto pb-10">
        <Link to="/scholarships">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Scholarships
          </Button>
        </Link>
        
        <div className="bg-card border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/60 p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="bg-card text-primary hover:bg-card/80">
                  {scholarship.category.charAt(0).toUpperCase() + scholarship.category.slice(1)}
                </Badge>
                <Badge className="ml-2 bg-card text-primary hover:bg-card/80">
                  {scholarship.country}
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold mt-3">{scholarship.name}</h1>
                <p className="text-white/80 mt-1">{scholarship.organization}</p>
              </div>
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column */}
              <div className="col-span-2 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold mb-3">Description</h2>
                    <p>{scholarship.description}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold mb-3">Eligibility</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {scholarship.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right column */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-lg font-semibold mb-3">Scholarship Details</h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm text-muted-foreground">Award Amount</h3>
                        <p className="font-medium">{scholarship.amount}</p>
                      </div>
                      <div>
                        <h3 className="text-sm text-muted-foreground">Application Deadline</h3>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-primary" />
                          <p>{scholarship.deadline}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm text-muted-foreground">Country</h3>
                        <div className="flex items-center">
                          <Globe2 className="h-4 w-4 mr-2 text-primary" />
                          <p>{scholarship.country}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href={scholarship.applicationUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => window.print()}>
                    Print Details
                  </Button>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="rounded-lg bg-muted p-4">
                      <h3 className="font-medium mb-2">Need help?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Have questions about this scholarship? Our team can help you with the application process.
                      </p>
                      <Button variant="secondary" className="w-full">Contact Us</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ScholarshipDetail;
