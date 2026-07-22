
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { GraduationCap } from "lucide-react";
import CareerCard, { CareerInfo } from "@/components/CareerCard";

const scienceCareers: CareerInfo[] = [
  {
    title: "Doctor (MBBS, BAMS, BHMS, BDS)",
    subjects: ["Biology", "Chemistry", "Physics"],
    courses: ["MBBS", "BAMS", "BHMS", "BDS", "MD/MS"],
    salaryRange: "₹6 lakhs - ₹40+ lakhs per annum",
    skills: ["Clinical knowledge", "Patient care", "Attention to detail", "Communication", "Empathy"],
    topColleges: ["AIIMS (All India Institutes of Medical Sciences)", "CMC Vellore", "JIPMER", "KGMU", "Grant Medical College"],
    futureScope: "Excellent growth with increasing healthcare demand and specializations",
    sectors: ["Both"]
  },
  {
    title: "Engineer (Mechanical, Computer, Civil, etc.)",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    courses: ["B.Tech/B.E", "M.Tech/M.E", "Diploma in Engineering"],
    salaryRange: "₹4 lakhs - ₹30+ lakhs per annum",
    skills: ["Analytical thinking", "Problem solving", "Technical aptitude", "Design skills"],
    topColleges: ["IITs", "NITs", "BITS Pilani", "IIIT Hyderabad", "College of Engineering, Pune"],
    futureScope: "Strong demand especially in emerging technologies and infrastructure",
    sectors: ["Both"]
  },
  {
    title: "Data Scientist / AI Engineer / ML Engineer",
    subjects: ["Mathematics", "Computer Science", "Statistics"],
    courses: ["B.Tech in CS/AI", "MSc in Data Science", "PG Diploma in Machine Learning"],
    salaryRange: "₹5 lakhs - ₹40+ lakhs per annum",
    skills: ["Programming", "Statistical analysis", "Algorithm development", "Problem solving", "Domain knowledge"],
    topColleges: ["IITs", "IISc Bangalore", "IIIT Hyderabad", "ISI Kolkata", "BITS Pilani"],
    futureScope: "Extremely high demand with AI integration across industries",
    sectors: ["Both"]
  },
  {
    title: "Scientist / Researcher",
    subjects: ["Chemistry", "Physics", "Biology", "Mathematics"],
    courses: ["BSc + MSc", "PhD in respective field", "Integrated MSc-PhD"],
    salaryRange: "₹5 lakhs - ₹20+ lakhs per annum",
    skills: ["Research methodology", "Critical thinking", "Technical writing", "Lab techniques"],
    topColleges: ["IISc Bangalore", "TIFR", "CSIR Labs", "IISER", "NISER"],
    futureScope: "Growing opportunities in R&D with increased research funding",
    sectors: ["Both"]
  },
  {
    title: "Biotechnologist",
    subjects: ["Biology", "Chemistry", "Mathematics"],
    courses: ["B.Tech in Biotechnology", "MSc Biotechnology", "PhD in Biotechnology"],
    salaryRange: "₹4 lakhs - ₹20+ lakhs per annum",
    skills: ["Lab techniques", "Research skills", "Analytical thinking", "Understanding of bioinformatics"],
    topColleges: ["IIT Kanpur", "JNU", "University of Delhi", "Anna University", "Manipal University"],
    futureScope: "Expanding field with applications in healthcare, agriculture, and environment",
    sectors: ["Both"]
  },
  {
    title: "Pharmacist",
    subjects: ["Biology", "Chemistry", "Physics"],
    courses: ["B.Pharm", "M.Pharm", "Pharm.D"],
    salaryRange: "₹3 lakhs - ₹15+ lakhs per annum",
    skills: ["Medical knowledge", "Attention to detail", "Communication", "Ethics"],
    topColleges: ["NIPER Mohali", "Jamia Hamdard", "ICT Mumbai", "Manipal College of Pharmaceutical Sciences", "BHU"],
    futureScope: "Stable career with increasing healthcare needs",
    sectors: ["Both"]
  },
  {
    title: "Forensic Scientist",
    subjects: ["Biology", "Chemistry", "Physics"],
    courses: ["BSc Forensic Science", "MSc Forensic Science", "Specialized certifications"],
    salaryRange: "₹4 lakhs - ₹15+ lakhs per annum",
    skills: ["Analytical thinking", "Attention to detail", "Lab techniques", "Report writing"],
    topColleges: ["University of Delhi", "LPU", "GFSU Gujarat", "Amity University", "SGTB Khalsa College"],
    futureScope: "Growing field with applications in criminal justice and security",
    sectors: ["Both"]
  },
  {
    title: "Environmental Scientist",
    subjects: ["Biology", "Chemistry", "Geography"],
    courses: ["BSc Environmental Science", "MSc Environmental Science", "PhD in Environmental Studies"],
    salaryRange: "₹4 lakhs - ₹15+ lakhs per annum",
    skills: ["Research", "Field work", "Data analysis", "Environmental impact assessment"],
    topColleges: ["TERI University", "JNU", "University of Delhi", "IIT Bombay", "Bharati Vidyapeeth"],
    futureScope: "High demand with increasing focus on sustainability and climate change",
    sectors: ["Both"]
  },
  {
    title: "Space Scientist / ISRO roles",
    subjects: ["Physics", "Mathematics", "Astronomy"],
    courses: ["B.Tech Aerospace Engineering", "MSc Physics/Astronomy", "Specialized ISRO programs"],
    salaryRange: "₹6 lakhs - ₹20+ lakhs per annum",
    skills: ["Mathematical modeling", "Research", "Technical aptitude", "Physics applications"],
    topColleges: ["IISc Bangalore", "IITs", "IIST Thiruvananthapuram", "University of Pune", "Anna University"],
    futureScope: "Growing with increased space missions and satellite deployments",
    sectors: ["Government"]
  },
  {
    title: "Architect",
    subjects: ["Mathematics", "Physics", "Art"],
    courses: ["B.Arch", "M.Arch"],
    salaryRange: "₹4 lakhs - ₹25+ lakhs per annum",
    skills: ["Design skills", "Spatial awareness", "Software knowledge", "Project management"],
    topColleges: ["SPA Delhi", "IIT Kharagpur", "CEPT Ahmedabad", "JJ College of Architecture", "Chandigarh College of Architecture"],
    futureScope: "Stable with increasing urbanization and infrastructure development",
    sectors: ["Both"]
  },
  {
    title: "Ethical Hacker / Cybersecurity Analyst",
    subjects: ["Computer Science", "Mathematics"],
    courses: ["B.Tech in CS/IT", "Specialized cybersecurity courses", "Industry certifications (CEH, CISSP)"],
    salaryRange: "₹5 lakhs - ₹30+ lakhs per annum",
    skills: ["Programming", "Network knowledge", "Security systems", "Analytical thinking"],
    topColleges: ["IITs", "NITs", "DIAT Pune", "Amrita University", "IIIT Allahabad"],
    futureScope: "Very high demand with increasing digital threats and security concerns",
    sectors: ["Both"]
  },
  {
    title: "Software Developer / App Developer",
    subjects: ["Computer Science", "Mathematics"],
    courses: ["B.Tech in CS/IT", "BCA", "MCA", "Specialized coding bootcamps"],
    salaryRange: "₹4 lakhs - ₹40+ lakhs per annum",
    skills: ["Programming", "Problem solving", "Algorithm design", "Software development lifecycle knowledge"],
    topColleges: ["IITs", "NITs", "BITS Pilani", "IIIT Hyderabad", "VIT Vellore"],
    futureScope: "Consistently high demand across all industries",
    sectors: ["Both"]
  }
];

const ScienceCareerPaths = () => {
  return (
    <div>
      <Alert className="mb-8 bg-secondary border-border">
        <GraduationCap className="h-5 w-5 text-primary" />
        <AlertDescription className="text-foreground">
          Science is not just about becoming a doctor or engineer — new-age careers like AI, Space Research, 
          Biotechnology, and Environmental Science are booming today.
        </AlertDescription>
      </Alert>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scienceCareers.map((career) => (
          <CareerCard key={career.title} career={career} />
        ))}
      </div>
    </div>
  );
};

export default ScienceCareerPaths;
