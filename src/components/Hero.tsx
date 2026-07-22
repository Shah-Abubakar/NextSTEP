import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />

        {/* Full-height image on the far right — not cropped */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
          <div className="w-full h-full flex items-center justify-end">
            <img
              src="/hero-image.png"
              alt=""
              className="h-full w-auto max-w-none object-contain object-right"
            />
          </div>
        </div>

        <div className="section-container relative w-full">
          <div className="flex flex-col items-start max-w-[700px] relative z-10">
            <h1 className="display-heading text-[clamp(48px,8vw,100px)] leading-[0.92] text-[#111111]">
              <span className="inline-block animate-fade-in italic-word">Explore</span>
              {" "}
              <span className="inline-block animate-fade-in italic-word" style={{ animationDelay: '0.12s' }}>Colleges</span>
              {" "}<span className="inline-block animate-fade-in text-primary font-bold" style={{ animationDelay: '0.24s' }}>and</span>{" "}
              <span className="inline-block animate-fade-in italic-word" style={{ animationDelay: '0.36s' }}>Learn</span>
              {" "}<span className="inline-block animate-fade-in italic-word" style={{ animationDelay: '0.48s' }}>New</span>{" "}
              <span className="inline-block animate-fade-in italic-word" style={{ animationDelay: '0.6s' }}>Skills</span>
              <span className="inline-block animate-fade-in w-[12px] h-[12px] rounded-full bg-[#FF7A6E] ml-3 align-middle" style={{ animationDelay: '0.72s' }} />
            </h1>

            <div className="flex flex-wrap gap-4 mt-12">
              <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-base font-medium px-8 shadow-sm">
                  <Link to="/top-colleges">
                    Explore Colleges
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.65s' }}>
                <Button asChild size="lg" variant="outline" className="text-[#111111] hover:text-[#111111] border-black/15 hover:bg-black/[0.04] text-base font-medium px-8 bg-transparent">
                  <Link to="/free-courses">
                    Browse Free Courses
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
