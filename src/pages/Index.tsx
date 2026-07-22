import {
  GraduationCap,
  BookOpen,
  Award,
  FileText,
  Briefcase,
  Globe,
  BookUser,
  Star
} from "lucide-react";

import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    title: "Scholarships",
    description: "National & international scholarships with eligibility criteria & deadlines",
    icon: Award,
    link: "/scholarships",
    color: "nextstep-blue"
  },
  {
    title: "Free Courses",
    description: "Complete list of free academic and vocational courses in various fields",
    icon: BookOpen,
    link: "/free-courses",
    color: "nextstep-indigo"
  },
  {
    title: "Best Courses Now",
    description: "Updated list of trending and high-demand courses for today's job market",
    icon: Star,
    link: "/trending-courses",
    color: "nextstep-yellow"
  },
  {
    title: "Entrance Exams",
    description: "Detailed information about major exams with syllabus and preparation tips",
    icon: FileText,
    link: "/exams",
    color: "nextstep-red"
  },
  {
    title: "Career Paths",
    description: "Guidance on various career options after 10th, 12th, and graduation",
    icon: Briefcase,
    link: "/careers",
    color: "nextstep-green"
  },
  {
    title: "Top Colleges",
    description: "Lists of top colleges for specific fields with rankings and placement data",
    icon: GraduationCap,
    link: "/top-colleges",
    color: "nextstep-teal"
  },
  {
    title: "Study Abroad",
    description: "Resources for studying in USA, UK, Canada, Australia, and Europe",
    icon: Globe,
    link: "/study-abroad",
    color: "nextstep-purple"
  },
  {
    title: "Smart Study",
    description: "AI-powered study tools, techniques and personalized learning strategies",
    icon: BookUser,
    link: "/smart-study",
    color: "nextstep-orange"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        
        {/* Categories Section */}
        <section className="py-16 md:py-24 border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.6]" style={{ backgroundImage: 'url(/resources-bg.jpg)' }} />
          <div className="absolute inset-0 bg-background/10" />
          <div className="section-container relative z-10">
            {/* Section header */}
            <div className="text-center mb-12">
              <p className="editorial-serif text-sm text-[#111111] mb-3 opacity-60">Resources</p>
              <h2 className="display-heading text-[clamp(32px,5vw,56px)] leading-[0.92] text-[#111111] mb-4">
                <span className="italic-word">Explore</span>{" "}
                <span className="italic-word">Our</span>{" "}
                <span className="text-primary">Resources</span>
                <span className="inline-block w-[10px] h-[10px] rounded-full bg-[#FF7A6E] ml-2 align-middle" />
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From scholarships to career guidance — everything you need for your academic journey in one place.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
              {categories.map((category, i) => (
                <CategoryCard
                  key={i}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  link={category.link}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Index;
