
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { freeCourses } from "@/data/freeCourseData";
import CourseCard from "@/components/freecourses/CourseCard";
import { BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CategoryFilter = string | "all";

const categories = [
  "all",
  ...Array.from(new Set(freeCourses.map(course => course.category)))
];

const FreeCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredCourses = freeCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout title="Free Courses">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Learning</p>
            <h1 className="text-3xl font-semibold tracking-tight">Free Courses for Skill Development</h1>
          </div>

          <div className="border border-border/50 bg-card p-6 mb-8">
            <h2 className="text-lg font-semibold mb-2">Enhance Your Skills with Free Courses</h2>
            <p className="text-muted-foreground text-sm">
              Access high-quality courses from top universities and providers without any cost. 
              These courses cover a wide range of subjects from computer science to arts and design. 
              Many offer certificates upon completion that can enhance your resume.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="mb-4 flex flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Courses" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-lg font-medium">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default FreeCoursesPage;
