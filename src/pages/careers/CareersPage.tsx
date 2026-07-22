
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ScienceCareerPaths from "./ScienceCareerPaths";
import CommerceCareerPaths from "./CommerceCareerPaths";
import ArtsCareerPaths from "./ArtsCareerPaths";
import { toast } from "sonner";
import PageLayout from "@/components/PageLayout";

const CareersPage = () => {
  const [selectedStream, setSelectedStream] = useState<string | null>(null);

  const handleStreamSelect = (stream: string) => {
    setSelectedStream(stream);
    toast.success(`Exploring ${stream} career paths`);
  };

  const handleBack = () => {
    setSelectedStream(null);
  };

  return (
    <PageLayout title="Career Paths">
      <div className="section-container py-8">
        {selectedStream ? (
          <>
            <Button 
              variant="outline" 
              className="mb-6 flex items-center gap-2"
              onClick={handleBack}
            >
              <ArrowLeft size={16} />
              Back to streams
            </Button>
            
            {selectedStream === "Science" && <ScienceCareerPaths />}
            {selectedStream === "Commerce" && <CommerceCareerPaths />}
            {selectedStream === "Arts" && <ArtsCareerPaths />}
          </>
        ) : (
          <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Which stream are you studying or interested in?
              </h2>
              <RadioGroup 
                defaultValue="" 
                className="gap-4"
                onValueChange={handleStreamSelect}
              >
                {["Science", "Commerce", "Arts"].map((stream) => (
                  <div key={stream} className="flex items-start space-x-3 space-y-0">
                    <RadioGroupItem value={stream} id={stream} />
                    <div className="grid gap-1.5 leading-none w-full">
                      <label
                        htmlFor={stream}
                        className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {stream}
                      </label>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CareersPage;
