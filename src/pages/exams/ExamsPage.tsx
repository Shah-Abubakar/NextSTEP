
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Globe, BookOpen } from "lucide-react";
import ExamCard from "@/components/exams/ExamCard";
import { indiaExams, worldwideExams } from "@/data/examData";

const ExamsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<"india" | "worldwide">("india");
  
  return (
    <PageLayout title="Entrance Exams">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Card 
              className={`cursor-pointer transition-all border ${
                selectedRegion === "india" 
                  ? "border-primary" 
                  : "border-border/50 hover:border-border"
              }`}
              onClick={() => setSelectedRegion("india")}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="bg-secondary p-3">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">India</h3>
                  <p className="text-sm text-muted-foreground">Indian entrance exams</p>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all border ${
                selectedRegion === "worldwide" 
                  ? "border-primary" 
                  : "border-border/50 hover:border-border"
              }`}
              onClick={() => setSelectedRegion("worldwide")}
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="bg-secondary p-3">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">Worldwide</h3>
                  <p className="text-sm text-muted-foreground">International entrance exams</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-card border border-border/50 p-6">
            <h2 className="text-xl font-semibold mb-6">
              {selectedRegion === "india" ? "Indian Entrance Exams" : "Worldwide Entrance Exams"}
            </h2>
            
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="undergraduate" className="text-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Undergraduate</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="postgraduate" className="text-sm">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Post Graduate</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              
              {selectedRegion === "india" ? (
                <>
                  <TabsContent value="undergraduate" className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Undergraduate Entrance Exams in India</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {indiaExams.undergraduate.map((exam) => (
                        <ExamCard key={exam.id} exam={exam} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="postgraduate" className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Post Graduate Entrance Exams in India</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {indiaExams.postgraduate.map((exam) => (
                        <ExamCard key={exam.id} exam={exam} />
                      ))}
                    </div>
                  </TabsContent>
                </>
              ) : (
                <>
                  <TabsContent value="undergraduate" className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Undergraduate Entrance Exams Worldwide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {worldwideExams.undergraduate.map((exam) => (
                        <ExamCard key={exam.id} exam={exam} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="postgraduate" className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Post Graduate Entrance Exams Worldwide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {worldwideExams.postgraduate.map((exam) => (
                        <ExamCard key={exam.id} exam={exam} />
                      ))}
                    </div>
                  </TabsContent>
                </>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExamsPage;
