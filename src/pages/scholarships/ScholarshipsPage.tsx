
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { scholarships, getFeaturedScholarships, getScholarshipsByCategory, ScholarshipCategory } from "@/data/scholarshipData";
import FeaturedScholarships from "@/components/scholarship/FeaturedScholarships";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, BookOpen, Calculator, Users, Target, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredScholarships, setFilteredScholarships] = useState(scholarships);
  const [selectedCategory, setSelectedCategory] = useState<ScholarshipCategory | "all">("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let results = scholarships;
    
    // Apply category filter
    if (selectedCategory !== "all") {
      results = getScholarshipsByCategory(selectedCategory as ScholarshipCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        scholarship => 
          scholarship.name.toLowerCase().includes(term) || 
          scholarship.organization.toLowerCase().includes(term) || 
          scholarship.country.toLowerCase().includes(term) ||
          scholarship.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredScholarships(results);
  }, [searchTerm, selectedCategory]);

  const featuredScholarships = getFeaturedScholarships();
  
  const categories: {label: string; value: ScholarshipCategory | "all"; icon: JSX.Element}[] = [
    { label: "All Scholarships", value: "all", icon: <Award className="h-4 w-4" /> },
    { label: "Undergraduate", value: "undergraduate", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Postgraduate", value: "postgraduate", icon: <GraduationCap className="h-4 w-4" /> },
    { label: "Research", value: "research", icon: <Target className="h-4 w-4" /> },
    { label: "Need-based", value: "need-based", icon: <Calculator className="h-4 w-4" /> },
    { label: "International", value: "international", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <PageLayout title="Scholarships">
      <div className="container max-w-7xl mx-auto pb-10">
        {/* Hero section */}
        <div className="border border-border/50 bg-card p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-secondary p-4">
              <Award className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Find Scholarships for Your Education</h1>
              <p className="text-muted-foreground">
                Explore scholarships from around the world to fund your education journey.
                From undergraduate to postgraduate degrees, we've compiled opportunities
                for students of all backgrounds.
              </p>
            </div>
          </div>
        </div>

        {/* Featured scholarships section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Scholarships</h2>
          <FeaturedScholarships scholarships={featuredScholarships} />
        </div>

        {/* Search and filter */}
        <div className="bg-card border border-border/50 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <Input
                placeholder="Search scholarships by name, organization or country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select 
                value={selectedCategory} 
                onValueChange={(value) => setSelectedCategory(value as ScholarshipCategory | "all")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center">
                        {category.icon}
                        <span className="ml-2">{category.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* All scholarships with tabs */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Scholarships</h2>
          
          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredScholarships.length} of {scholarships.length} scholarships
            </p>
          </div>
          
          <Tabs defaultValue="list">
            <TabsList className="mb-6">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid" className="mt-0">
              {filteredScholarships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredScholarships.map((scholarship) => (
                    <div key={scholarship.id}>
                      <FeaturedScholarships scholarships={[scholarship]} maxDisplay={1} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No scholarships match your search criteria.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              {filteredScholarships.length > 0 ? (
                <div className="space-y-4">
                  {filteredScholarships.map((scholarship) => (
                    <div key={scholarship.id} className="bg-card border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge 
                              className={`bg-primary hover:bg-primary/90`}
                            >
                              {scholarship.category.charAt(0).toUpperCase() + scholarship.category.slice(1)}
                            </Badge>
                            <Badge variant="outline">{scholarship.country}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{scholarship.name}</h3>
                          <p className="text-sm text-muted-foreground">{scholarship.organization}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>Deadline: {scholarship.deadline}</span>
                            </div>
                            <div className="text-sm font-semibold">
                              Amount: <span className="font-normal">{scholarship.amount}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link to={`/scholarships/${scholarship.id}`}>
                            <Button variant="outline">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No scholarships match your search criteria.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
};

export default ScholarshipsPage;
