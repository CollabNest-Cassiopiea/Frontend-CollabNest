"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

interface MentorProjectCardProps {
  title: string
  description: string
  techStack: string[]
  duration: string
  progress: number
  studentsEnrolled: number
  maxStudents: number
  status: "open" | "in-progress" | "completed"
  onClick?: () => void
}

export function MentorProjectCard({
  title,
  description,
  techStack,
  duration,
  progress,
  studentsEnrolled,
  maxStudents,
  status,
  onClick,
}: MentorProjectCardProps) {
  const statusColors = {
    open: "bg-green-500/10 text-green-600",
    "in-progress": "bg-blue-500/10 text-blue-600",
    completed: "bg-gray-500/10 text-gray-600",
  }

  return (
    <Card className="h-full cursor-pointer transition-all hover:shadow-md" onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
          <div className={`rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
            {status === "open" ? "Open" : status === "in-progress" ? "In Progress" : "Completed"}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />

          <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>
                {studentsEnrolled}/{maxStudents} Students
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          {status === "open" ? "View Applications" : "Manage Project"}
        </Button>
      </CardFooter>
    </Card>
  )
}

