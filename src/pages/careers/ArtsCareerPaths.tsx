
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpen } from "lucide-react";
import CareerCard, { CareerInfo } from "@/components/CareerCard";

const artsCareers: CareerInfo[] = [
  {
    title: "Lawyer",
    subjects: ["Political Science", "History", "Sociology", "English"],
    courses: ["BA LLB", "BBA LLB", "BSc LLB", "LLM"],
    salaryRange: "₹5 lakhs - ₹50+ lakhs per annum",
    skills: ["Legal analysis", "Research", "Communication", "Argumentation", "Critical thinking"],
    topColleges: ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "ILS Pune", "Faculty of Law, Delhi University"],
    futureScope: "Excellent with constant demand in corporate, litigation, and public sectors",
    sectors: ["Both"]
  },
  {
    title: "Civil Services (IAS/IPS/IFS)",
    subjects: ["Political Science", "History", "Geography", "Economics", "Sociology"],
    courses: ["Bachelor's degree (any discipline) + UPSC preparation"],
    salaryRange: "₹6 lakhs - ₹25+ lakhs per annum",
    skills: ["Administrative skills", "Public policy knowledge", "Leadership", "Decision-making"],
    topColleges: ["Any recognized university + coaching from institutes like Vajiram & Ravi, Vision IAS, etc."],
    futureScope: "Prestigious and stable career with significant public impact",
    sectors: ["Government"]
  },
  {
    title: "Psychologist / Therapist",
    subjects: ["Psychology", "Sociology", "Biology"],
    courses: ["BA/BSc Psychology", "MA/MSc Psychology", "M.Phil Clinical Psychology", "PhD"],
    salaryRange: "₹4 lakhs - ₹20+ lakhs per annum",
    skills: ["Empathy", "Communication", "Analytical thinking", "Ethical practice"],
    topColleges: ["TISS Mumbai", "Delhi University", "NIMHANS Bangalore", "Jamia Millia Islamia", "Christ University"],
    futureScope: "Growing with increased awareness about mental health",
    sectors: ["Both"]
  },
  {
    title: "Journalist / News Anchor",
    subjects: ["Mass Communication", "English", "Political Science", "History"],
    courses: ["BA/MA Journalism", "BA/MA Mass Communication", "PG Diploma in Journalism"],
    salaryRange: "₹3 lakhs - ₹30+ lakhs per annum",
    skills: ["Writing", "Communication", "Research", "Critical thinking", "Media ethics"],
    topColleges: ["IIMC Delhi", "ACJ Chennai", "Jamia MCRC", "SIMC Pune", "Xavier's Mumbai"],
    futureScope: "Evolving with digital media and specialized content",
    sectors: ["Both"]
  },
  {
    title: "Graphic Designer / Animator",
    subjects: ["Fine Arts", "Computer Applications"],
    courses: ["BFA/MFA", "Bachelor/Master of Design", "Animation diplomas"],
    salaryRange: "₹3 lakhs - ₹25+ lakhs per annum",
    skills: ["Design software", "Creativity", "Visual thinking", "Technical skills"],
    topColleges: ["NID Ahmedabad", "IDC IIT Bombay", "NIFT", "Srishti Institute", "MIT Institute of Design"],
    futureScope: "Excellent with digital transformation and content creation boom",
    sectors: ["Both"]
  },
  {
    title: "Filmmaker / Scriptwriter",
    subjects: ["Literature", "Film Studies", "Mass Communication"],
    courses: ["BA/MA Film Studies", "Specialized film school programs"],
    salaryRange: "₹2.5 lakhs - ₹30+ lakhs per annum (highly variable)",
    skills: ["Storytelling", "Visual composition", "Technical knowledge", "Project management"],
    topColleges: ["FTII Pune", "Satyajit Ray Film Institute", "Whistling Woods", "LV Prasad Film Academy", "WWI Mumbai"],
    futureScope: "Growing with OTT platforms and diverse content requirements",
    sectors: ["Private"]
  },
  {
    title: "Professor / Researcher",
    subjects: ["Any humanities subject with specialization"],
    courses: ["Bachelor's + Master's + PhD in relevant subject"],
    salaryRange: "₹5 lakhs - ₹20+ lakhs per annum",
    skills: ["Research methodology", "Teaching", "Academic writing", "Critical analysis"],
    topColleges: ["JNU", "Delhi University", "Jadavpur University", "BHU", "Hyderabad Central University"],
    futureScope: "Stable with growing higher education sector",
    sectors: ["Both"]
  },
  {
    title: "Social Worker",
    subjects: ["Sociology", "Social Work", "Political Science", "Psychology"],
    courses: ["BSW", "MSW", "MA Social Work"],
    salaryRange: "₹3 lakhs - ₹15+ lakhs per annum",
    skills: ["Empathy", "Community organization", "Policy knowledge", "Counseling"],
    topColleges: ["TISS Mumbai", "Delhi School of Social Work", "Loyola College", "Christ University", "Nirmala Niketan"],
    futureScope: "Important role with focus on social development and community welfare",
    sectors: ["Both"]
  },
  {
    title: "Content Creator",
    subjects: ["Mass Communication", "English", "Relevant domain knowledge"],
    courses: ["BA/MA in Communication", "Specialized writing courses", "Digital media courses"],
    salaryRange: "₹3 lakhs - ₹25+ lakhs per annum (highly variable)",
    skills: ["Writing", "Research", "Digital tools knowledge", "SEO understanding"],
    topColleges: ["IIMC", "SIMC Pune", "Xavier's Mumbai", "ACJ Chennai", "Jamia MCRC"],
    futureScope: "High demand with content marketing boom across industries",
    sectors: ["Both"]
  },
  {
    title: "Foreign Language Expert",
    subjects: ["Languages", "Literature", "International Relations"],
    courses: ["BA/MA in specific languages", "Specialized language certifications"],
    salaryRange: "₹4 lakhs - ₹20+ lakhs per annum",
    skills: ["Language proficiency", "Cultural understanding", "Translation", "Communication"],
    topColleges: ["JNU", "Delhi University", "EFL University Hyderabad", "BHU", "Jamia Millia Islamia"],
    futureScope: "Growing with increased international business and tourism",
    sectors: ["Both"]
  },
  {
    title: "Archaeologist",
    subjects: ["History", "Anthropology", "Geography"],
    courses: ["BA/MA in Archaeology", "MA Ancient History", "PhD"],
    salaryRange: "₹4 lakhs - ₹15+ lakhs per annum",
    skills: ["Research methodology", "Field techniques", "Analysis", "Documentation"],
    topColleges: ["Deccan College Pune", "University of Calcutta", "BHU", "University of Delhi", "MSU Baroda"],
    futureScope: "Specialized field with academic and heritage management opportunities",
    sectors: ["Both"]
  },
  {
    title: "Fashion Designer",
    subjects: ["Fine Arts", "Textiles"],
    courses: ["B.Des Fashion Design", "Diploma in Fashion Design"],
    salaryRange: "₹3 lakhs - ₹30+ lakhs per annum",
    skills: ["Design skills", "Trend analysis", "Technical knowledge", "Creativity"],
    topColleges: ["NIFT", "NID", "Pearl Academy", "Symbiosis Pune", "INIFD"],
    futureScope: "Growing with fashion industry expansion and online retail",
    sectors: ["Both"]
  }
];

const ArtsCareerPaths = () => {
  return (
    <div>
      <Alert className="mb-8 bg-secondary border-border">
        <BookOpen className="h-5 w-5 text-primary" />
        <AlertDescription className="text-foreground">
          Arts isn't just theory — it creates leaders, creators, and thinkers who shape society.
        </AlertDescription>
      </Alert>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artsCareers.map((career) => (
          <CareerCard key={career.title} career={career} />
        ))}
      </div>
    </div>
  );
};

export default ArtsCareerPaths;
