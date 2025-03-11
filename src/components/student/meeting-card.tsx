"use client"

import { CalendarClock, Video } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "@/components/ui/button"

interface MeetingCardProps {
  title: string
  mentor: {
    name: string
    avatar?: string
  }
  date: string
  time: string
  onJoin?: () => void
}

export function MeetingCard({ title, mentor, date, time, onJoin }: MeetingCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={mentor.avatar || "/placeholder.svg?height=24&width=24"} alt={mentor.name} />
            <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">Mentor: {mentor.name}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarClock className="h-3.5 w-3.5" />
          <span>
            {date} • {time}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" className="w-full gap-1.5" onClick={onJoin}>
          <Video className="h-3.5 w-3.5" />
          Join Meeting
        </Button>
      </CardFooter>
    </Card>
  )
}

