"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import type { Project } from "@/types/project"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DashboardLayout } from "@/components/student/dashboard-layout"
import { Checkbox } from "@/components/ui/checkbox"

// Mock data for development
const getMockProject = (id: string): Project => ({
    id: Number.parseInt(id),
    title: `Project ${id}`,
    description: "This is a sample project description. In a real application, this would be fetched from an API.",
    progress: 65,
    leaderboard: [
        { name: "Emma Wilson", points: 850 },
        { name: "John Doe", points: 720 },
        { name: "Michael Brown", points: 680 },
    ],
    discussion: [
        { user: { name: "Dr. Sarah Johnson" }, text: "Welcome to the Web Development Portfolio project! Please introduce yourselves and share your goals for this project.", date: "2 days ago" },
        { user: { name: "John Doe" }, text: "I'm excited to work on this project. My goal is to create a portfolio that showcases my React skills and helps me land a frontend developer role.", date: "1 day ago" },
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    mentor: { name: "Dr. Sarah Johnson" },
    tags: ["Frontend"],
    status: "ongoing",
    tasks: [
        { id: 1, text: "Setup project repository", completed: true },
        { id: 2, text: "Create homepage layout", completed: true },
        { id: 3, text: "Implement responsive design", completed: true },
        { id: 4, text: "Add projects section", completed: false },
        { id: 5, text: "Create contact form", completed: false },
        { id: 6, text: "Deploy to Vercel", completed: false },
    ]
})

export function ProjectDetailsPage() {
    const { projectId } = useParams()
    const [project, setProject] = useState<Project | null>(null)
    const [scheduleDate, setScheduleDate] = useState<Date | undefined>(new Date())
    const [meetingTopic, setMeetingTopic] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchProject = async () => {
            try {
                setProject(getMockProject(projectId as string));
                setLoading(false);
            } catch (err) {
                console.error("Error loading project:", err);
                setLoading(false);
            }
        };
        fetchProject();
    }, [projectId]);

    if (loading) return <div className="p-6 text-center">Loading...</div>
    if (error) return <div className="p-6 text-center text-destructive">{error}</div>
    if (!project) return <div className="p-6 text-center">Project not found</div>

    return (
        <DashboardLayout>
            <div className="container mx-auto p-4 md:p-6 space-y-6">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">{project.title}</h1>
                        <p className="text-muted-foreground">Mentor: {project.mentor.name}</p>
                    </div>
                    <Link to="/student/projects" className="text-sm font-medium hover:underline">
                        ← Back to Projects
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 md:col-span-2">
                        {/* Project Progress */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Progress</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold">{project.progress}% Complete</span>
                                        <Badge variant="outline">Ongoing</Badge>
                                    </div>
                                    <Progress value={project.progress} className="h-2" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tasks */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tasks</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    {project.tasks?.map((task) => (
                                        <div key={task.id} className="flex items-center space-x-2">
                                            <Checkbox checked={task.completed} />
                                            <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                                                {task.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Discussion */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Discussion Thread</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    {project.discussion.map((msg, index) => (
                                        <div key={index} className="flex gap-3">
                                            <Avatar className="h-8 w-8">
                                                <AvatarFallback>{msg.user.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium">{msg.user.name}</p>
                                                    <span className="text-sm text-muted-foreground">{msg.date}</span>
                                                </div>
                                                <p className="text-muted-foreground mt-1">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Type your message here..."
                                    />
                                    <Button>Post</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* My Points */}
                        <Card>
                            <CardHeader>
                                <CardTitle>My Points</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center space-y-2">
                                    <div className="text-3xl font-bold">720</div>
                                    <p className="text-muted-foreground">Total Points</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Leaderboard */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Leaderboard</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {project.leaderboard.map((student, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Avatar className="h-6 w-6">
                                                <AvatarFallback>{student.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <span>{student.name}</span>
                                        </div>
                                        <Badge variant="secondary">{student.points} pts</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Schedule Meeting */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Schedule Meeting</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-md border p-3">
                                    <Calendar
                                        mode="single"
                                        selected={scheduleDate}
                                        onSelect={setScheduleDate}
                                        className="w-full"
                                        classNames={{
                                            head_row: "grid grid-cols-7 gap-1",
                                            row: "grid grid-cols-7 gap-1",
                                            cell: "text-center",
                                            nav: "flex justify-between mb-4",
                                            month: "w-full"
                                        }}
                                    />
                                </div>
                                <Input
                                    value={meetingTopic}
                                    onChange={(e) => setMeetingTopic(e.target.value)}
                                    placeholder="Meeting topic"
                                />
                                <Button className="w-full">Schedule Meeting</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}