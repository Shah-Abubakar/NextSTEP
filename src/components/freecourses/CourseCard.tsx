
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FreeCourse } from "@/data/freeCourseData";

interface CourseCardProps {
  course: FreeCourse;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:border-primary/40 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{course.category}</Badge>
          {course.certificate && (
            <Badge variant="secondary" className="ml-2">Certification</Badge>
          )}
        </div>
        <CardTitle className="text-lg">{course.title}</CardTitle>
        <CardDescription className="text-sm font-medium">By {course.provider}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{course.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">{course.duration}</span>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-1">Skills you'll gain:</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {course.skills.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-muted/50">
                  {skill}
                </Badge>
              ))}
              {course.skills.length > 3 && (
                <Badge variant="outline" className="text-xs bg-muted/50">
                  +{course.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-end">
        <Button variant="outline" size="sm" asChild>
          <a href={course.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <span>Enroll Now</span>
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
