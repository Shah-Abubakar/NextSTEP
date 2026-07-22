
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { Exam } from "@/data/examData";

interface ExamCardProps {
  exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:border-primary/40 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant={exam.category === "science" ? "default" : 
                          exam.category === "commerce" ? "secondary" : 
                          "outline"}>
            {exam.category}
          </Badge>
          {exam.isPopular && (
            <Badge variant="destructive" className="ml-2">Popular</Badge>
          )}
        </div>
        <CardTitle className="text-lg mt-2">{exam.name}</CardTitle>
        <CardDescription className="line-clamp-2">{exam.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Conducting Body:</span>
            <span className="font-medium">{exam.conductingBody}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Application Period:</span>
            <span className="font-medium">{exam.applicationPeriod}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Exam Date:</span>
            <span className="font-medium">{exam.examDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-end">
        <div className="flex items-center text-sm text-primary hover:underline cursor-pointer">
          <FileText className="h-4 w-4 mr-1" />
          View Details
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
