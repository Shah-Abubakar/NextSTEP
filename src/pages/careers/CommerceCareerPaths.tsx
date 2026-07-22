
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Briefcase } from "lucide-react";
import CareerCard, { CareerInfo } from "@/components/CareerCard";

const commerceCareers: CareerInfo[] = [
  {
    title: "Chartered Accountant (CA)",
    subjects: ["Accountancy", "Mathematics", "Economics", "Business Studies"],
    courses: ["CA from ICAI", "Integrated programs with commerce degrees"],
    salaryRange: "₹6 lakhs - ₹30+ lakhs per annum",
    skills: ["Financial analysis", "Auditing", "Taxation knowledge", "Accounting standards"],
    topColleges: ["ICAI (The Institute of Chartered Accountants of India)"],
    futureScope: "Excellent with consistent demand in corporate and financial sectors",
    sectors: ["Both"]
  },
  {
    title: "Company Secretary (CS)",
    subjects: ["Business Studies", "Economics", "Law"],
    courses: ["CS from ICSI", "Integrated programs with commerce degrees"],
    salaryRange: "₹5 lakhs - ₹20+ lakhs per annum",
    skills: ["Legal knowledge", "Corporate governance", "Compliance", "Documentation"],
    topColleges: ["ICSI (The Institute of Company Secretaries of India)"],
    futureScope: "Growing with increased corporate compliance requirements",
    sectors: ["Both"]
  },
  {
    title: "Investment Banker",
    subjects: ["Economics", "Mathematics", "Business Studies"],
    courses: ["BBA/BBM", "MBA Finance", "CFA"],
    salaryRange: "₹8 lakhs - ₹50+ lakhs per annum",
    skills: ["Financial analysis", "Market understanding", "Negotiation", "Client relationship management"],
    topColleges: ["IIMs", "FMS Delhi", "XLRI", "SP Jain", "ISB Hyderabad"],
    futureScope: "Lucrative with opportunities in growing financial markets",
    sectors: ["Private"]
  },
  {
    title: "Stock Market Analyst / Trader",
    subjects: ["Economics", "Mathematics", "Statistics", "Business Studies"],
    courses: ["BBA/BBM Finance", "MBA Finance", "CFA", "Specialized trading certifications"],
    salaryRange: "₹4 lakhs - ₹40+ lakhs per annum (highly variable)",
    skills: ["Market analysis", "Risk assessment", "Pattern recognition", "Decision-making skills"],
    topColleges: ["IIMs", "NISM Mumbai", "NIBM Pune", "IIFT Delhi", "BSE Institute"],
    futureScope: "Growing with expanding financial markets and retail participation",
    sectors: ["Private"]
  },
  {
    title: "Business Analyst",
    subjects: ["Economics", "Mathematics", "Statistics", "Business Studies"],
    courses: ["BBA", "MBA", "Specialized data analytics courses"],
    salaryRange: "₹5 lakhs - ₹25+ lakhs per annum",
    skills: ["Data analysis", "Problem-solving", "Communication", "Industry knowledge"],
    topColleges: ["IIMs", "FMS Delhi", "XLRI", "ISB Hyderabad", "MDI Gurgaon"],
    futureScope: "High demand across industries for data-driven decision making",
    sectors: ["Both"]
  },
  {
    title: "Financial Planner",
    subjects: ["Economics", "Mathematics", "Business Studies"],
    courses: ["BBA/BCom Finance", "MBA Finance", "CFP certification"],
    salaryRange: "₹4 lakhs - ₹25+ lakhs per annum",
    skills: ["Financial analysis", "Client relationship management", "Investment knowledge", "Risk assessment"],
    topColleges: ["IIMs", "NISM Mumbai", "NIBM Pune", "IIFT Delhi", "FMS Delhi"],
    futureScope: "Growing with increasing financial literacy and investment culture",
    sectors: ["Both"]
  },
  {
    title: "Economist",
    subjects: ["Economics", "Statistics", "Mathematics"],
    courses: ["BA Economics", "MA Economics", "PhD Economics"],
    salaryRange: "₹5 lakhs - ₹30+ lakhs per annum",
    skills: ["Economic analysis", "Research methodology", "Statistical tools", "Policy understanding"],
    topColleges: ["Delhi School of Economics", "JNU", "ISI Kolkata", "Gokhale Institute", "IGIDR Mumbai"],
    futureScope: "Stable demand in government, research, and corporate sectors",
    sectors: ["Both"]
  },
  {
    title: "Digital Marketer",
    subjects: ["Business Studies", "Economics", "Computer Applications"],
    courses: ["BBA/BBM Marketing", "MBA Marketing", "Specialized digital marketing courses"],
    salaryRange: "₹4 lakhs - ₹25+ lakhs per annum",
    skills: ["SEO/SEM", "Social media management", "Content creation", "Analytics"],
    topColleges: ["IIMs", "MICA Ahmedabad", "SIMC Pune", "IMT Ghaziabad", "NMIMS Mumbai"],
    futureScope: "Rapidly growing with digital transformation across businesses",
    sectors: ["Both"]
  },
  {
    title: "HR Manager",
    subjects: ["Business Studies", "Psychology", "Sociology"],
    courses: ["BBA HR", "MBA HR", "Specialized HR certifications"],
    salaryRange: "₹4 lakhs - ₹25+ lakhs per annum",
    skills: ["People management", "Conflict resolution", "Organizational development", "Policy formulation"],
    topColleges: ["XLRI Jamshedpur", "IIMs", "TISS Mumbai", "MDI Gurgaon", "XISS Ranchi"],
    futureScope: "Essential role with growing focus on human capital management",
    sectors: ["Both"]
  },
  {
    title: "Entrepreneur",
    subjects: ["Business Studies", "Economics", "Any specialized subjects based on business type"],
    courses: ["BBA/BBM", "MBA", "Entrepreneurship certifications", "Domain-specific education"],
    salaryRange: "Highly variable - from losses to unlimited gains",
    skills: ["Leadership", "Risk-taking", "Innovation", "Financial management", "Market understanding"],
    topColleges: ["IIMs", "ISB Hyderabad", "SPJIMR", "EDII Ahmedabad", "NIESBUD"],
    futureScope: "Growing with startup ecosystem and government initiatives for entrepreneurs",
    sectors: ["Private"]
  },
  {
    title: "Banking Sector Officer",
    subjects: ["Economics", "Mathematics", "Business Studies"],
    courses: ["BCom/BBA", "MBA Finance", "JAIIB/CAIIB certifications"],
    salaryRange: "₹4 lakhs - ₹20+ lakhs per annum",
    skills: ["Banking operations knowledge", "Financial analysis", "Customer service", "Risk assessment"],
    topColleges: ["NIBM Pune", "IIMs", "FMS Delhi", "IIBF Mumbai", "NISM Mumbai"],
    futureScope: "Stable with the essential nature of banking services",
    sectors: ["Both"]
  },
  {
    title: "Actuary",
    subjects: ["Mathematics", "Statistics", "Economics"],
    courses: ["Actuarial Science courses", "IAI certifications"],
    salaryRange: "₹6 lakhs - ₹40+ lakhs per annum",
    skills: ["Statistical analysis", "Risk assessment", "Financial modeling", "Analytical thinking"],
    topColleges: ["Institute of Actuaries of India programs", "Amity University", "BIM Trichy", "Christ University"],
    futureScope: "Growing with complex financial products and insurance markets",
    sectors: ["Both"]
  }
];

const CommerceCareerPaths = () => {
  return (
    <div>
      <Alert className="mb-8 bg-secondary border-border">
        <Briefcase className="h-5 w-5 text-primary" />
        <AlertDescription className="text-foreground">
          Commerce is the gateway to the business world — finance, startups, markets, and digital money are today's goldmines.
        </AlertDescription>
      </Alert>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commerceCareers.map((career) => (
          <CareerCard key={career.title} career={career} />
        ))}
      </div>
    </div>
  );
};

export default CommerceCareerPaths;
