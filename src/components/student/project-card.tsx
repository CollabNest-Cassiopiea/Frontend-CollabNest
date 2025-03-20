"use client"
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  mentor: {
    name: string;
    avatar?: string;
  };
  progress: number;
  tags?: string[];
  projectId: number;
}

export function ProjectCard({
  title,
  description,
  mentor,
  progress,
  tags = [],
  projectId,
}: ProjectCardProps & { onClick?: () => void }) {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-full cursor-pointer transition-all hover:shadow-md flex flex-col"
      onClick={() => navigate(`/student/projects/${projectId}`)}
    >
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1 text-lg mb-2">{title}</CardTitle>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-2 flex-1">
        <p className="line-clamp-3 text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 w-full">
          <Avatar className="h-6 w-6">
            <AvatarImage src={mentor?.avatar || ""} alt={mentor?.name || "Unknown"} />
            <AvatarFallback>
              {mentor?.name?.[0]?.toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground line-clamp-1">
            Mentor: {mentor?.name || "No Mentor"}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}