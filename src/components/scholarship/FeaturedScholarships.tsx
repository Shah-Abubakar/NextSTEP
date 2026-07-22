
import { useState, useEffect } from 'react';
import { Scholarship } from "@/data/scholarshipData";
import ScholarshipCard from './ScholarshipCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeaturedScholarshipsProps {
  scholarships: Scholarship[];
  maxDisplay?: number;
}

const FeaturedScholarships = ({ scholarships, maxDisplay = 6 }: FeaturedScholarshipsProps) => {
  const [displayedScholarships, setDisplayedScholarships] = useState<Scholarship[]>([]);

  useEffect(() => {
    if (scholarships && scholarships.length > 0) {
      setDisplayedScholarships(scholarships.slice(0, maxDisplay));
    }
  }, [scholarships, maxDisplay]);

  // Filter scholarships by region
  const internationalScholarships = displayedScholarships.filter(s => 
    s.country === "International" || s.country === "Global"
  );
  
  const regionalScholarships = {
    usa: displayedScholarships.filter(s => s.country === "USA"),
    uk: displayedScholarships.filter(s => s.country === "UK"),
    europe: displayedScholarships.filter(s => 
      ["Europe", "Germany", "France", "Netherlands", "Sweden", "Switzerland"].includes(s.country)
    ),
    asia: displayedScholarships.filter(s => 
      ["China", "Japan", "Singapore", "India"].includes(s.country)
    ),
    other: displayedScholarships.filter(s => 
      !["USA", "UK", "Europe", "Germany", "France", "Netherlands", "Sweden", "Switzerland", 
        "China", "Japan", "Singapore", "India", "International", "Global"].includes(s.country)
    )
  };

  if (!displayedScholarships.length) {
    return (
      <div className="text-center py-8">
        <p>No scholarships to display at this time.</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="international">International</TabsTrigger>
          <TabsTrigger value="usa">USA</TabsTrigger>
          <TabsTrigger value="uk">UK</TabsTrigger>
          <TabsTrigger value="europe">Europe</TabsTrigger>
          <TabsTrigger value="asia">Asia</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {displayedScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="international" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {internationalScholarships.length > 0 ? (
              internationalScholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <p className="col-span-full text-center py-8 text-muted-foreground">No international scholarships currently available.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="usa" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {regionalScholarships.usa.length > 0 ? (
              regionalScholarships.usa.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <p className="col-span-full text-center py-8 text-muted-foreground">No USA scholarships currently available.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="uk" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {regionalScholarships.uk.length > 0 ? (
              regionalScholarships.uk.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <p className="col-span-full text-center py-8 text-muted-foreground">No UK scholarships currently available.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="europe" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {regionalScholarships.europe.length > 0 ? (
              regionalScholarships.europe.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <p className="col-span-full text-center py-8 text-muted-foreground">No European scholarships currently available.</p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="asia" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {regionalScholarships.asia.length > 0 ? (
              regionalScholarships.asia.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
              ))
            ) : (
              <p className="col-span-full text-center py-8 text-muted-foreground">No Asian scholarships currently available.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedScholarships;
