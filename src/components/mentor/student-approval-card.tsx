"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, XCircle } from "lucide-react"

interface StudentApprovalCardProps {
  student: {
    name: string
    avatar?: string
    department: string
    year: string
  }
  project: string
  skills: string[]
  appliedDate: string
  onApprove: () => void
  onReject: () => void
  onScheduleInterview: () => void
  onViewProfile: () => void
}

export function StudentApprovalCard({
  student,
  project,
  skills,
  appliedDate,
  onApprove,
  onReject,
  onScheduleInterview,
  onViewProfile,
}: StudentApprovalCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={student.avatar || "/placeholder.svg?height=40&width=40"} alt={student.name} />
              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{student.name}</CardTitle>
              <p className="text-xs text-muted-foreground">
                {student.department}, {student.year}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Applied: {appliedDate}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">Project</p>
            <p className="text-sm text-muted-foreground">{project}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Skills</p>
            <div className="mt-1 flex flex-wrap gap-1">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex w-full gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1 border-green-500 text-green-600 hover:bg-green-500/10 hover:text-green-700"
            onClick={onApprove}
          >
            <CheckCircle className="h-4 w-4" />
            Approve
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1 border-red-500 text-red-600 hover:bg-red-500/10 hover:text-red-700"
            onClick={onReject}
          >
            <XCircle className="h-4 w-4" />
            Reject
          </Button>
        </div>
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1" onClick={onScheduleInterview}>
            Schedule Interview
          </Button>
          <Button variant="outline" size="sm" className="flex-1" onClick={onViewProfile}>
            View Profile
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

