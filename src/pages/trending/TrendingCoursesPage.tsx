
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { freeCourses } from "@/data/freeCourseData";
import { Star, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrendingCourseCard from "@/components/trending/TrendingCourseCard";

// Select top trending courses from the freeCourses data
// These would typically be determined by user engagement metrics, but we're manually selecting them
const trendingCourses = [
  freeCourses.find(course => course.id === "26"), // Prompt Engineering for ChatGPT
  freeCourses.find(course => course.id === "27"), // Generative AI with LLMs
  freeCourses.find(course => course.id === "11"), // Deep Learning Specialization
  freeCourses.find(course => course.id === "28"), // Cybersecurity for Beginners
  freeCourses.find(course => course.id === "31"), // Blockchain Fundamentals
  freeCourses.find(course => course.id === "15"), // React - The Complete Guide
  freeCourses.find(course => course.id === "32"), // Cloud Computing Fundamentals
  freeCourses.find(course => course.id === "33"), // DevOps Engineering
  freeCourses.find(course => course.id === "19"), // CS50's AI with Python
  freeCourses.find(course => course.id === "29"), // UI/UX Design Fundamentals
  freeCourses.find(course => course.id === "45"), // Ethical Hacking
  freeCourses.find(course => course.id === "14"), // Python for Everybody
  freeCourses.find(course => course.id === "43"), // AR/VR Development
  freeCourses.find(course => course.id === "50"), // Kubernetes
  freeCourses.find(course => course.id === "20"), // Flutter & Dart
].filter(Boolean) as typeof freeCourses;

// Popular categories based on the trending courses
const popularCategories = Array.from(
  new Set(trendingCourses.map(course => course.category))
);

type CategoryFilter = string | "all";

const TrendingCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredCourses = trendingCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <PageLayout title="Best Courses Now">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Trending</p>
            <h1 className="text-3xl font-semibold tracking-tight">Best Courses Right Now</h1>
          </div>

          <div className="border border-border/50 bg-card p-6 mb-8">
            <h2 className="text-lg font-semibold mb-2">Top Trending Courses in 2025</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These courses are currently in high demand due to industry trends and job market requirements. 
              They offer valuable skills that employers are actively seeking, with many providing certificates 
              that can boost your resume and career prospects.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search trending courses..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="mb-4 flex flex-wrap h-auto">
              <TabsTrigger 
                key="all" 
                value="all"
                onClick={() => setActiveCategory("all")}
                className="capitalize"
              >
                All Trending
              </TabsTrigger>
              {popularCategories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <TrendingCourseCard key={course.id} course={course} />
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

export default TrendingCoursesPage;
