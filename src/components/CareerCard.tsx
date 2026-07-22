
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface CareerInfo {
  title: string;
  subjects: string[];
  courses: string[];
  salaryRange: string;
  skills: string[];
  topColleges: string[];
  futureScope: string;
  sectors: ("Government" | "Private" | "Both")[];
}

const CareerCard = ({ career }: { career: CareerInfo }) => {
  return (
    <Card className="mb-6 border-2 border-muted transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{career.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {career.sectors.map((sector) => (
            <Badge key={sector} variant={sector === "Both" ? "default" : sector === "Government" ? "secondary" : "outline"}>
              {sector} Sector
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="subjects">
            <AccordionTrigger>Required Subjects</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {career.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="courses">
            <AccordionTrigger>Recommended Courses</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {career.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="skills">
            <AccordionTrigger>Required Skills</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {career.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="colleges">
            <AccordionTrigger>Top Colleges in India</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                {career.topColleges.map((college, index) => (
                  <li key={index}>{college}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-2">
        <div className="mb-2">
          <span className="font-semibold">Salary Range:</span> {career.salaryRange}
        </div>
        <div>
          <span className="font-semibold">Future Scope:</span> {career.futureScope}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
