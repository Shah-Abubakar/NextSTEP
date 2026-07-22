
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    courseType: "",
    collegeType: "",
    ratingMin: 0,
    feeRange: ""
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      searchQuery: "",
      courseType: "",
      collegeType: "",
      ratingMin: 0,
      feeRange: ""
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search colleges..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          {(filters.courseType || filters.collegeType || filters.ratingMin > 0 || filters.feeRange) && (
            <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-1">
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </div>

      {isFiltersVisible && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-card border border-border/50">
          <div className="space-y-2">
            <Label htmlFor="courseType">Course Type</Label>
            <Select
              value={filters.courseType}
              onValueChange={(value) => handleFilterChange("courseType", value)}
            >
              <SelectTrigger id="courseType">
                <SelectValue placeholder="Select course type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Courses</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Medicine">Medicine</SelectItem>
                <SelectItem value="Commerce">Commerce</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Law">Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="collegeType">College Type</Label>
            <Select
              value={filters.collegeType}
              onValueChange={(value) => handleFilterChange("collegeType", value)}
            >
              <SelectTrigger id="collegeType">
                <SelectValue placeholder="Select college type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="Government">Government</SelectItem>
                <SelectItem value="Private">Private</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ratingMin">Minimum Rating</Label>
            <Select
              value={filters.ratingMin.toString()}
              onValueChange={(value) => handleFilterChange("ratingMin", Number(value))}
            >
              <SelectTrigger id="ratingMin">
                <SelectValue placeholder="Select minimum rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Any Rating</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="3.5">3.5+ Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="4.5">4.5+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="feeRange">Fee Range</Label>
            <Select
              value={filters.feeRange}
              onValueChange={(value) => handleFilterChange("feeRange", value)}
            >
              <SelectTrigger id="feeRange">
                <SelectValue placeholder="Select fee range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Fee Range</SelectItem>
                <SelectItem value="0-100000">Under ₹1 Lakh</SelectItem>
                <SelectItem value="100000-200000">₹1-2 Lakhs</SelectItem>
                <SelectItem value="200000-300000">₹2-3 Lakhs</SelectItem>
                <SelectItem value="300000+">Above ₹3 Lakhs</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
