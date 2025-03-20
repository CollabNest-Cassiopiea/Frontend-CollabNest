"use client"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import type { Project } from "@/types/project"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/student/dashboard-layout"
import { Checkbox } from "@/components/ui/checkbox"
import { formatDistanceToNow } from "date-fns"
import { Separator } from "@/components/ui/separator"

// Mock current user
const currentUser = { name: "Diptanshu" }

const getMockProject = (id: string): Project => ({
    id: Number.parseInt(id),
    title: `Project ${id}`,
    description: "This is a sample project description.",
    progress: 65,
    leaderboard: [
        { name: "Emma Wilson", points: 100 },
        { name: "John Doe", points: 720 },
        { name: currentUser.name, points: 0 },
    ],
    discussion: [
        {
            user: { name: "Mentor" },
            text: "Welcome to the project! Let's get started.",
            date: new Date(Date.now() - 3600000).toISOString()
        }
    ],
    techStack: ["React", "TypeScript"],
    mentor: { name: "Dr. Sarah Johnson" },
    tags: ["Frontend"],
    status: "ongoing",
    tasks: [
        { id: 1, text: "Setup project repository", completed: false },
        { id: 2, text: "Create homepage layout", completed: false },
        { id: 3, text: "Implement responsive design", completed: false },
    ]
})

export function ProjectDetailsPage() {
    const { projectId } = useParams()
    const [project, setProject] = useState<Project | null>(null)
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [meetingLink, setMeetingLink] = useState("")

    useEffect(() => {
        setProject(getMockProject(projectId as string))
        setLoading(false)
    }, [projectId])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!message.trim() || !project) return

        const newMessage = {
            user: currentUser,
            text: message,
            date: new Date().toISOString()
        }

        setProject({
            ...project,
            discussion: [...project.discussion, newMessage]
        })

        setMessage("")
    }

    const handleTaskToggle = (taskId: number, completed: boolean) => {
        if (!project) return

        const updatedTasks = project.tasks.map(task =>
            task.id === taskId ? { ...task, completed } : task
        )

        const pointsChange = completed ? 50 : -50
        const updatedLeaderboard = project.leaderboard.map(student => {
            if (student.name === currentUser.name) {
                return { ...student, points: Math.max(0, student.points + pointsChange) }
            }
            return student
        })

        setProject({
            ...project,
            tasks: updatedTasks,
            leaderboard: updatedLeaderboard
        })
    }

    if (loading) return <div className="p-6 text-center">Loading...</div>
    if (!project) return <div className="p-6 text-center">Project not found</div>

    const currentUserPoints = project.leaderboard.find(
        student => student.name === currentUser.name
    )?.points || 0

    return (
        <DashboardLayout>
            <div className="container mx-auto p-3 md:p-4 space-y-4">
                {/* Project Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{project.title}</h1>
                        <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    </div>
                    <Badge variant="outline" className="capitalize">{project.status}</Badge>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4 md:col-span-2">

                        {/* Tasks with visible checkboxes */}
                        <Card>
                            <CardHeader className="px-4 py-3">
                                <CardTitle className="text-lg">Tasks</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 py-3 space-y-2">
                                {project.tasks?.map((task) => (
                                    <div key={task.id} className="flex items-center space-x-2 text-sm">
                                        <Checkbox
                                            checked={task.completed}
                                            onCheckedChange={(checked) =>
                                                handleTaskToggle(task.id, checked as boolean)
                                            }
                                            className="h-5 w-5 border-2 border-primary data-[state=checked]:bg-primary"
                                        />
                                        <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                                            {task.text}
                                        </span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Discussion */}
                        <Card>
                            <CardHeader className="px-4 py-3">
                                <CardTitle className="text-lg">Discussion</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 py-3 space-y-3">
                                <div className="space-y-3 max-h-96 overflow-y-auto">
                                    {project.discussion.map((msg, index) => (
                                        <div key={index} className="flex gap-2 items-start">
                                            <Avatar className="h-6 w-6 mt-1">
                                                <AvatarFallback className="text-xs">{msg.user.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm font-medium">{msg.user.name}</p>
                                                    <span className="text-xs text-muted-foreground">
                                                        {formatDistanceToNow(msg.date)} ago
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground mt-0.5">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <form onSubmit={handleSendMessage} className="flex gap-2">
                                    <Input
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type message..."
                                        className="h-8 text-sm"
                                    />
                                    <Button type="submit" size="sm" disabled={!message.trim()}>
                                        Send
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {/* Points & Leaderboard */}
                        <Card>
                            <CardHeader className="px-4 py-3">
                                <CardTitle className="text-lg">My Progress</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 py-3 space-y-3">
                                <div className="text-center space-y-1">
                                    <div className="text-2xl font-bold">{currentUserPoints}</div>
                                    <p className="text-xs text-muted-foreground">Total Points</p>
                                </div>
                                <Separator className="my-2" />
                                <div className="space-y-2">
                                    <h3 className="text-sm font-medium">Leaderboard</h3>
                                    {project.leaderboard
                                        .slice()
                                        .sort((a, b) => b.points - a.points)
                                        .map((student, index) => (
                                            <div key={index} className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-1.5">
                                                    <Avatar className="h-5 w-5">
                                                        <AvatarFallback className="text-xs">{student.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <span>{student.name}</span>
                                                </div>
                                                <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                                                    {student.points} pts
                                                </Badge>
                                            </div>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Simplified Meeting Section */}
                        <Card>
                            <CardHeader className="px-4 py-3">
                                <CardTitle className="text-lg">Schedule Meets</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 py-3 space-y-3">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-medium text-white">Google Meet</h3>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 px-3 text-sm font-medium text-white"
                                        onClick={() => setMeetingLink(prev => prev ? "" : "https://meet.google.com/landing")}
                                    >
                                        Update
                                    </Button>
                                </div>

                                {meetingLink ? (
                                    <p className="text-sm text-muted-foreground break-all">
                                        {meetingLink}
                                    </p>
                                ) : (
                                    <Input
                                        placeholder="Enter meeting link"
                                        value={meetingLink}
                                        onChange={(e) => setMeetingLink(e.target.value)}
                                        className="h-8 text-sm"
                                        autoFocus
                                    />
                                )}

                                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                                    <a
                                        href={meetingLink || "https://meet.google.com"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Meet
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}