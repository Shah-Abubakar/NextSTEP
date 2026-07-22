
import { Link } from "react-router-dom";
import { states } from "@/data/collegeData";
import StateCard from "@/components/college/StateCard";
import { ChevronRight } from "lucide-react";

const TopCollegesPage = () => {
  return (
    <div className="py-12">
      <div className="section-container">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
          <span className="text-foreground font-medium">Top Colleges</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">States</p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Find Top Colleges by State</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore prestigious colleges across India. Select a state to view detailed college profiles,
            admission requirements, and scholarship opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {states.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCollegesPage;
