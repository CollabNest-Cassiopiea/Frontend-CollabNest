// ProjectCard.tsx
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
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <Card className="h-full cursor-pointer transition-all hover:shadow-md" onClick={() => navigate(`/projects/${projectId}`)}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
          <div className="flex gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
          <AvatarImage src={mentor?.avatar || ""} alt={mentor?.name || "Unknown"} />
<AvatarFallback>
  {mentor?.name?.[0]?.toUpperCase() || "?"}
</AvatarFallback>
<span className="text-xs text-muted-foreground">
  Mentor: {mentor?.name || "No Mentor"}
</span>
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Mentor: {mentor.name}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}