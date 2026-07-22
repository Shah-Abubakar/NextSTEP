
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCollegesByState, FilterOptions } from "@/data/collegeData";
import CollegeCard from "@/components/college/CollegeCard";
import SearchFilters from "@/components/college/SearchFilters";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CollegesByState = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const [colleges, setColleges] = useState(getCollegesByState(stateId || ""));
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    courseType: "",
    collegeType: "",
    ratingMin: 0,
    feeRange: ""
  });
  
  useEffect(() => {
    if (stateId) {
      const stateColleges = getCollegesByState(stateId);
      console.log(`State: ${stateId}, Colleges: ${stateColleges.length}`);
      setColleges(stateColleges);
      applyFilters(stateColleges, filters);
    }
  }, [stateId]);
  
  // Apply filters to the list of colleges
  const applyFilters = (collegeList = colleges, currentFilters = filters) => {
    let filtered = [...collegeList];
    
    // Apply search query filter
    if (currentFilters.searchQuery) {
      const query = currentFilters.searchQuery.toLowerCase();
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(query) ||
        college.description.toLowerCase().includes(query)
      );
    }
    
    // Apply course type filter
    if (currentFilters.courseType) {
      filtered = filtered.filter(college => 
        college.courses.some(course => 
          course.toLowerCase().includes(currentFilters.courseType.toLowerCase())
        )
      );
    }
    
    // Apply college type filter
    if (currentFilters.collegeType) {
      filtered = filtered.filter(college => 
        college.type === currentFilters.collegeType
      );
    }
    
    // Apply rating filter
    if (currentFilters.ratingMin > 0) {
      filtered = filtered.filter(college => 
        college.rating >= currentFilters.ratingMin
      );
    }
    
    // Apply fee range filter
    if (currentFilters.feeRange) {
      const [minStr, maxStr] = currentFilters.feeRange.split('-');
      const min = Number(minStr);
      const max = maxStr === "+" ? Infinity : Number(maxStr);
      
      filtered = filtered.filter(college => {
        const avgFee = (college.fees.tuition.min + college.fees.tuition.max) / 2;
        return avgFee >= min && avgFee <= max;
      });
    }
    
    setFilteredColleges(filtered);
  };
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    applyFilters(colleges, newFilters);
  };
  
  // Format state name from ID
  const stateName = stateId ? stateId.charAt(0).toUpperCase() + stateId.slice(1).replace(/-/g, " ") : "";
  
  return (
    <div className="py-12">
      <div className="section-container">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
          <Link to="/top-colleges" className="hover:text-primary transition-colors shrink-0">Top Colleges</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
          <span className="text-foreground font-medium truncate">{stateName}</span>
        </nav>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Colleges in {stateName}</h1>
          <p className="text-lg text-muted-foreground">
            Explore top colleges and educational institutions in {stateName}
          </p>
        </div>
        
        <SearchFilters onFilterChange={handleFilterChange} />
        
        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard 
                key={college.id} 
                college={college} 
                stateId={stateId || ""} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No colleges found matching your filters</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => handleFilterChange({
                searchQuery: "",
                courseType: "",
                collegeType: "",
                ratingMin: 0,
                feeRange: ""
              })}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesByState;
