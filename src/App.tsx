import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopCollegesPage from "./pages/colleges/CollegesPage";
import CollegesByState from "./pages/colleges/CollegesByState";
import CollegeDetail from "./pages/colleges/CollegeDetail";
import CareersPage from "./pages/careers/CareersPage";
import StudyAbroadPage from "./pages/studyabroad/StudyAbroadPage";
import CountryCollegesPage from "./pages/studyabroad/CountryCollegesPage";
import CollegeDetailPage from "./pages/studyabroad/CollegeDetailPage";
import ExamsPage from "./pages/exams/ExamsPage";
import FreeCoursesPage from "./pages/freecourses/FreeCoursesPage";
import TrendingCoursesPage from "./pages/trending/TrendingCoursesPage";
import ScholarshipsPage from "./pages/scholarships/ScholarshipsPage";
import ScholarshipDetail from "./pages/scholarships/ScholarshipDetail";
import SmartStudyPage from "./pages/smartstudy/SmartStudyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* Warm ivory editorial background */}
      <div className="fixed inset-0 -z-10" style={{ background: '#F5F1E6' }}>
        <div className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] bg-[#F7F3E9] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-8%] left-[-4%] w-[350px] h-[350px] bg-[#ECE3CC]/40 rounded-full blur-[80px]" />
        <div className="absolute top-[50%] left-[30%] w-[200px] h-[200px] bg-[#F7F3E9]/50 rounded-full blur-[60px]" />
      </div>
      
      <BrowserRouter>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="/colleges" element={<Navigate to="/top-colleges" replace />} />
            <Route path="/top-colleges" element={<TopCollegesPage />} />
            
            <Route path="/colleges/:stateId" element={<Navigate to="/top-colleges/:stateId" replace />} />
            <Route path="/top-colleges/:stateId" element={<CollegesByState />} />
            <Route path="/colleges/:stateId/:collegeId" element={<Navigate to="/top-colleges/:stateId/:collegeId" replace />} />
            <Route path="/top-colleges/:stateId/:collegeId" element={<CollegeDetail />} />
            
            <Route path="/careers" element={<CareersPage />} />
            
            <Route path="/study-abroad" element={<StudyAbroadPage />} />
            <Route path="/study-abroad/:countryId" element={<CountryCollegesPage />} />
            <Route path="/study-abroad/:countryId/:collegeId" element={<CollegeDetailPage />} />
            
            <Route path="/exams" element={<ExamsPage />} />

            <Route path="/free-courses" element={<FreeCoursesPage />} />
            <Route path="/courses" element={<Navigate to="/free-courses" replace />} />
            
            <Route path="/trending-courses" element={<TrendingCoursesPage />} />
            <Route path="/best-courses" element={<Navigate to="/trending-courses" replace />} />
            
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
            
            <Route path="/smart-study" element={<SmartStudyPage />} />
            
            <Route path="/news" element={<NotFound />} />
            <Route path="/success-stories" element={<NotFound />} />
            <Route path="/resources" element={<NotFound />} />
            <Route path="/about" element={<NotFound />} />
            <Route path="/contact" element={<NotFound />} />
            <Route path="/privacy" element={<NotFound />} />
            <Route path="/terms" element={<NotFound />} />
            <Route path="/explore" element={<NotFound />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
