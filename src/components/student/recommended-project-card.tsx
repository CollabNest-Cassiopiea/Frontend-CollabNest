"use client";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Progress } from "@/components/ui/progress";

interface RecommendedProjectCardProps {
  title: string;
  description: string;
  mentor: {
    name: string;
    avatar?: string;
  };
  progress: number;
  tags?: string[];
  onClick: () => void;
}

export function RecommendedProjectCard({
  title,
  description,
  mentor,
  progress,
  tags = [],
  onClick,
}: RecommendedProjectCardProps) {
  return (
    <Card
      className="h-full cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
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
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
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
            <AvatarImage
              src={mentor?.avatar || "/placeholder.svg?height=24&width=24"}
              alt={mentor?.name}
            />
            <AvatarFallback>{mentor?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Mentor: {mentor?.name}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}