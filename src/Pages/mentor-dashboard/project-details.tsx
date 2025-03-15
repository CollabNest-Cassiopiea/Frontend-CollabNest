"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { MentorLayout } from "@/components/mentor/mentor-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import {
  CalendarIcon,
  Send,
  Trophy,
  CheckCircle2,
  Clock,
  Users,
  Plus,
  FileText,
  CalendarPlus2Icon as CalendarIcon2,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Extended project data with additional details for the project page
interface Student {
  id: number
  name: string
  avatar?: string
  department: string
  year: string
  progress: number
  points: number
  lastActive: string
}

interface Task {
  id: number
  title: string
  description: string
  dueDate: string
  status: "pending" | "in-progress" | "completed" | "overdue"
  assignedTo: number[]
}

interface Milestone {
  id: number
  title: string
  description: string
  dueDate: string
  progress: number
  tasks: number[]
}

interface Discussion {
  id: number
  user: {
    id: number
    name: string
    avatar?: string
    role: "mentor" | "student"
  }
  message: string
  timestamp: string
  attachments?: {
    name: string
    url: string
    type: string
  }[]
}

interface Meeting {
  id: number
  title: string
  date: string
  time: string
  attendees: number[]
  description: string
}

interface ProjectDetails {
  id: number
  title: string
  description: string
  techStack: string[]
  duration: string
  startDate: string
  endDate: string
  progress: number
  status: "open" | "in-progress" | "completed"
  students: Student[]
  tasks: Task[]
  milestones: Milestone[]
  discussions: Discussion[]
  meetings: Meeting[]
}

// Sample project data - in a real app, this would come from an API
const projectsData: Record<string, ProjectDetails> = {
  "1": {
    id: 1,
    title: "Web Development Portfolio",
    description:
      "Create a professional portfolio website showcasing projects and skills using React and Tailwind CSS. This project will help students build a strong online presence and demonstrate their abilities to potential employers.",
    techStack: ["React", "Tailwind CSS", "Next.js"],
    duration: "8 weeks",
    startDate: "2023-04-15",
    endDate: "2023-06-10",
    progress: 65,
    status: "in-progress",
    students: [
      {
        id: 1,
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Computer Science",
        year: "3rd Year",
        progress: 70,
        points: 720,
        lastActive: "Today",
      },
      {
        id: 2,
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Computer Engineering",
        year: "2nd Year",
        progress: 85,
        points: 850,
        lastActive: "Yesterday",
      },
      {
        id: 3,
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Information Technology",
        year: "4th Year",
        progress: 45,
        points: 680,
        lastActive: "3 days ago",
      },
    ],
    tasks: [
      {
        id: 1,
        title: "Setup project repository",
        description: "Create a GitHub repository and set up the initial project structure",
        dueDate: "2023-04-20",
        status: "completed",
        assignedTo: [1, 2, 3],
      },
      {
        id: 2,
        title: "Create homepage layout",
        description: "Design and implement the homepage layout with responsive design",
        dueDate: "2023-04-30",
        status: "completed",
        assignedTo: [1, 2],
      },
      {
        id: 3,
        title: "Implement responsive design",
        description: "Ensure the website is fully responsive across all device sizes",
        dueDate: "2023-05-10",
        status: "completed",
        assignedTo: [2, 3],
      },
      {
        id: 4,
        title: "Add projects section",
        description: "Create a projects section to showcase portfolio items",
        dueDate: "2023-05-20",
        status: "in-progress",
        assignedTo: [1, 3],
      },
      {
        id: 5,
        title: "Create contact form",
        description: "Implement a functional contact form with validation",
        dueDate: "2023-05-30",
        status: "pending",
        assignedTo: [2],
      },
      {
        id: 6,
        title: "Deploy to Vercel",
        description: "Deploy the completed website to Vercel",
        dueDate: "2023-06-05",
        status: "pending",
        assignedTo: [1, 2, 3],
      },
    ],
    milestones: [
      {
        id: 1,
        title: "Project Setup",
        description: "Initial project setup and repository creation",
        dueDate: "2023-04-20",
        progress: 100,
        tasks: [1],
      },
      {
        id: 2,
        title: "Core UI Implementation",
        description: "Implement the core UI components and layouts",
        dueDate: "2023-05-10",
        progress: 100,
        tasks: [2, 3],
      },
      {
        id: 3,
        title: "Feature Development",
        description: "Develop the main features of the portfolio",
        dueDate: "2023-05-30",
        progress: 50,
        tasks: [4, 5],
      },
      {
        id: 4,
        title: "Deployment",
        description: "Final testing and deployment",
        dueDate: "2023-06-10",
        progress: 0,
        tasks: [6],
      },
    ],
    discussions: [
      {
        id: 1,
        user: {
          id: 0,
          name: "Dr. Sarah Johnson",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "mentor",
        },
        message:
          "Welcome to the Web Development Portfolio project! Please introduce yourselves and share your goals for this project.",
        timestamp: "2023-04-15 10:00 AM",
      },
      {
        id: 2,
        user: {
          id: 1,
          name: "John Doe",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "student",
        },
        message:
          "Hi everyone! I'm excited to work on this project. My goal is to create a portfolio that showcases my React skills and helps me land a frontend developer role.",
        timestamp: "2023-04-15 10:15 AM",
      },
      {
        id: 3,
        user: {
          id: 2,
          name: "Emma Wilson",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "student",
        },
        message:
          "Hello! I'm looking forward to learning more about Tailwind CSS and responsive design through this project.",
        timestamp: "2023-04-15 10:30 AM",
      },
      {
        id: 4,
        user: {
          id: 3,
          name: "Michael Brown",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "student",
        },
        message:
          "Hi team! I'm interested in improving my Next.js skills and learning best practices for portfolio websites.",
        timestamp: "2023-04-15 11:00 AM",
      },
      {
        id: 5,
        user: {
          id: 0,
          name: "Dr. Sarah Johnson",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "mentor",
        },
        message:
          "Great to see everyone's enthusiasm! I've created the initial tasks and milestones. Let's have our first meeting tomorrow to discuss the project in more detail.",
        timestamp: "2023-04-15 11:30 AM",
        attachments: [
          {
            name: "project_requirements.pdf",
            url: "#",
            type: "pdf",
          },
        ],
      },
    ],
    meetings: [
      {
        id: 1,
        title: "Project Kickoff Meeting",
        date: "2023-04-16",
        time: "10:00 AM",
        attendees: [0, 1, 2, 3],
        description: "Initial meeting to discuss project goals, requirements, and timeline.",
      },
      {
        id: 2,
        title: "Weekly Progress Check",
        date: "2023-04-23",
        time: "10:00 AM",
        attendees: [0, 1, 2, 3],
        description: "Review progress on initial tasks and address any questions or concerns.",
      },
      {
        id: 3,
        title: "UI Design Review",
        date: "2023-04-30",
        time: "2:00 PM",
        attendees: [0, 1, 2],
        description: "Review and provide feedback on the homepage design and layout.",
      },
      {
        id: 4,
        title: "Milestone 2 Review",
        date: "2023-05-12",
        time: "11:00 AM",
        attendees: [0, 1, 2, 3],
        description: "Review completion of Milestone 2 and plan for Milestone 3.",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Machine Learning Image Classifier",
    description:
      "Build an image classification model using TensorFlow to identify objects in photographs. Students will learn about neural networks, data preprocessing, and model deployment.",
    techStack: ["Python", "TensorFlow", "Keras"],
    duration: "10 weeks",
    startDate: "2023-03-01",
    endDate: "2023-05-10",
    progress: 30,
    status: "in-progress",
    students: [
      {
        id: 4,
        name: "Sophia Garcia",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Computer Science",
        year: "3rd Year",
        progress: 35,
        points: 540,
        lastActive: "Today",
      },
      {
        id: 5,
        name: "David Kim",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Data Science",
        year: "2nd Year",
        progress: 25,
        points: 480,
        lastActive: "2 days ago",
      },
      {
        id: 6,
        name: "Jessica Martinez",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Software Engineering",
        year: "4th Year",
        progress: 40,
        points: 620,
        lastActive: "Yesterday",
      },
      {
        id: 7,
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
        department: "Computer Science",
        year: "3rd Year",
        progress: 20,
        points: 390,
        lastActive: "3 days ago",
      },
    ],
    tasks: [
      {
        id: 1,
        title: "Set up development environment",
        description: "Install Python, TensorFlow, and other required libraries",
        dueDate: "2023-03-05",
        status: "completed",
        assignedTo: [4, 5, 6, 7],
      },
      {
        id: 2,
        title: "Data collection and preprocessing",
        description: "Gather and preprocess image data for training",
        dueDate: "2023-03-15",
        status: "completed",
        assignedTo: [4, 5],
      },
      {
        id: 3,
        title: "Build basic CNN model",
        description: "Implement a basic Convolutional Neural Network",
        dueDate: "2023-03-30",
        status: "completed",
        assignedTo: [6, 7],
      },
      {
        id: 4,
        title: "Train and evaluate model",
        description: "Train the model on the dataset and evaluate performance",
        dueDate: "2023-04-15",
        status: "in-progress",
        assignedTo: [4, 6],
      },
      {
        id: 5,
        title: "Optimize model architecture",
        description: "Improve model performance through architecture optimization",
        dueDate: "2023-04-30",
        status: "pending",
        assignedTo: [5, 7],
      },
      {
        id: 6,
        title: "Deploy model as web service",
        description: "Create a web interface for the image classifier",
        dueDate: "2023-05-05",
        status: "pending",
        assignedTo: [4, 5, 6, 7],
      },
    ],
    milestones: [
      {
        id: 1,
        title: "Environment Setup",
        description: "Set up development environment and tools",
        dueDate: "2023-03-05",
        progress: 100,
        tasks: [1],
      },
      {
        id: 2,
        title: "Data Preparation",
        description: "Collect and preprocess data for model training",
        dueDate: "2023-03-15",
        progress: 100,
        tasks: [2],
      },
      {
        id: 3,
        title: "Model Development",
        description: "Build and train the initial model",
        dueDate: "2023-04-15",
        progress: 60,
        tasks: [3, 4],
      },
      {
        id: 4,
        title: "Model Optimization and Deployment",
        description: "Optimize and deploy the final model",
        dueDate: "2023-05-05",
        progress: 0,
        tasks: [5, 6],
      },
    ],
    discussions: [
      {
        id: 1,
        user: {
          id: 0,
          name: "Prof. Michael Chen",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "mentor",
        },
        message:
          "Welcome to the Machine Learning Image Classifier project! This project will give you hands-on experience with neural networks and image classification.",
        timestamp: "2023-03-01 09:00 AM",
      },
      {
        id: 2,
        user: {
          id: 4,
          name: "Sophia Garcia",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "student",
        },
        message:
          "Hi everyone! I've worked with Python before but I'm new to TensorFlow. Looking forward to learning more about neural networks.",
        timestamp: "2023-03-01 09:15 AM",
      },
      {
        id: 3,
        user: {
          id: 5,
          name: "David Kim",
          avatar: "/placeholder.svg?height=32&width=32",
          role: "student",
        },
        message:
          "Hello team! I have some experience with data preprocessing but I'm excited to learn about building and training models.",
        timestamp: "2023-03-01 09:30 AM",
      },
    ],
    meetings: [
      {
        id: 1,
        title: "Project Introduction",
        date: "2023-03-02",
        time: "10:00 AM",
        attendees: [0, 4, 5, 6, 7],
        description: "Introduction to the project, goals, and expectations.",
      },
      {
        id: 2,
        title: "Data Collection Workshop",
        date: "2023-03-10",
        time: "2:00 PM",
        attendees: [0, 4, 5],
        description: "Workshop on data collection and preprocessing techniques.",
      },
      {
        id: 3,
        title: "CNN Architecture Discussion",
        date: "2023-03-25",
        time: "11:00 AM",
        attendees: [0, 6, 7],
        description: "Discussion on CNN architecture design and implementation.",
      },
    ],
  },
}

// In a real app, you would fetch the project data based on the ID
const getProjectById = (id: string): ProjectDetails | undefined => {
  return projectsData[id]
}

export default function MentorProjectDetails() {
  const params = useParams()
  const projectId = params.id as string
  const project = getProjectById(projectId)

  const [activeTab, setActiveTab] = useState("overview")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [newMessage, setNewMessage] = useState("")
  const [meetingTitle, setMeetingTitle] = useState("")
  const [meetingDescription, setMeetingDescription] = useState("")
  const [meetingTime, setMeetingTime] = useState("")
  const [selectedAttendees, setSelectedAttendees] = useState<number[]>([])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, send message to API
      setNewMessage("")
    }
  }

  const handleScheduleMeeting = () => {
    if (date && meetingTitle.trim() && meetingTime.trim() && selectedAttendees.length > 0) {
      // In a real app, send meeting request to API
      alert("Meeting scheduled successfully!")
      setDate(undefined)
      setMeetingTitle("")
      setMeetingDescription("")
      setMeetingTime("")
      setSelectedAttendees([])
    } else {
      alert("Please fill in all required fields.")
    }
  }

  if (!project) {
    return (
      <MentorLayout>
        <div className="container mx-auto p-4 md:p-6">
          <h1 className="text-2xl font-bold">Project not found</h1>
        </div>
      </MentorLayout>
    )
  }

  const completedTasks = project.tasks.filter((task) => task.status === "completed").length
  const totalTasks = project.tasks.length
  const taskCompletionPercentage = Math.round((completedTasks / totalTasks) * 100)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-600"
      case "in-progress":
        return "bg-blue-500/10 text-blue-600"
      case "pending":
        return "bg-yellow-500/10 text-yellow-600"
      case "overdue":
        return "bg-red-500/10 text-red-600"
      default:
        return "bg-gray-500/10 text-gray-600"
    }
  }

  return (
    <MentorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    project.status === "open"
                      ? "bg-green-500/10 text-green-600"
                      : project.status === "in-progress"
                        ? "bg-blue-500/10 text-blue-600"
                        : "bg-gray-500/10 text-gray-600"
                  }`}
                >
                  {project.status === "open" ? "Open" : project.status === "in-progress" ? "In Progress" : "Completed"}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.duration} • {project.students.length} Students
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-full sm:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="tasks">Tasks & Milestones</TabsTrigger>
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium">Project Timeline</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <span className="ml-2">{project.startDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">End Date:</span>
                          <span className="ml-2">{project.endDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="ml-2">{project.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium">Overall Progress</h3>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{project.progress}% Complete</span>
                          <span className="text-sm">
                            {completedTasks}/{totalTasks} Tasks
                          </span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium">Milestones</h3>
                      <div className="mt-2 space-y-3">
                        {project.milestones.map((milestone) => (
                          <div key={milestone.id} className="rounded-lg border p-3">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{milestone.title}</h4>
                              <span className="text-xs text-muted-foreground">Due: {milestone.dueDate}</span>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">{milestone.description}</p>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>{milestone.progress}% Complete</span>
                              </div>
                              <Progress value={milestone.progress} className="h-1.5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Students</p>
                        <p className="text-xl font-bold">{project.students.length}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tasks Completed</p>
                        <p className="text-xl font-bold">
                          {completedTasks}/{totalTasks}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Days Remaining</p>
                        <p className="text-xl font-bold">
                          {Math.max(
                            0,
                            Math.ceil(
                              (new Date(project.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
                            ),
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {project.students
                        .sort((a, b) => b.points - a.points)
                        .slice(0, 3)
                        .map((student, index) => (
                          <div key={student.id} className="flex items-center gap-2 rounded-lg border p-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                              {index + 1}
                            </div>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={student.avatar} alt={student.name} />
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{student.name}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Trophy className="h-3.5 w-3.5 text-yellow-500" />
                              <span className="text-sm font-medium">{student.points}</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Enrolled Students</CardTitle>
                <Button size="sm" className="gap-1">
                  <Plus className="h-4 w-4" />
                  Add Student
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.students.map((student) => (
                    <div
                      key={student.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {student.department}, {student.year}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                        <div className="flex flex-1 flex-col gap-1 sm:max-w-[200px]">
                          <div className="flex items-center justify-between text-xs">
                            <span>Progress</span>
                            <span>{student.progress}%</span>
                          </div>
                          <Progress value={student.progress} className="h-1.5" />
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">{student.points} points</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Last active: {student.lastActive}</div>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Points Distribution</CardTitle>
                <CardDescription>Award points to students for their contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Points System</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Students earn points for completing tasks, participating in discussions, and attending meetings.
                    </p>
                    <div className="mt-3 grid gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Task completion</span>
                        <span className="font-medium">50-100 points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Active participation in discussions</span>
                        <span className="font-medium">10-30 points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Meeting attendance</span>
                        <span className="font-medium">20 points</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Milestone completion</span>
                        <span className="font-medium">100-200 points</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Award Custom Points</h3>
                    <div className="mt-3 grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Student</label>
                          <select className="w-full rounded-md border p-2 text-sm">
                            <option value="">Select a student</option>
                            {project.students.map((student) => (
                              <option key={student.id} value={student.id}>
                                {student.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Points</label>
                          <Input type="number" min="1" placeholder="Enter points" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Reason</label>
                        <Input placeholder="Reason for awarding points" />
                      </div>
                      <Button className="w-full sm:w-auto">Award Points</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tasks & Milestones Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Tasks</CardTitle>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Task
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.tasks.map((task) => (
                      <div key={task.id} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={task.status === "completed"}
                              className="h-4 w-4 rounded border-gray-300"
                              readOnly
                            />
                            <h3 className="font-medium">{task.title}</h3>
                          </div>
                          <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(task.status)}`}>
                            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{task.description}</p>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Due: {task.dueDate}</span>
                          </div>
                          <div className="flex -space-x-2">
                            {task.assignedTo.map((studentId) => {
                              const student = project.students.find((s) => s.id === studentId)
                              return student ? (
                                <Avatar key={studentId} className="h-6 w-6 border-2 border-background">
                                  <AvatarImage src={student.avatar} alt={student.name} />
                                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                              ) : null
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Milestones</CardTitle>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Add Milestone
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.milestones.map((milestone) => (
                      <div key={milestone.id} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <h3 className="font-medium">{milestone.title}</h3>
                          <span className="text-xs text-muted-foreground">Due: {milestone.dueDate}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Progress</span>
                            <span>{milestone.progress}%</span>
                          </div>
                          <Progress value={milestone.progress} className="h-1.5" />
                        </div>
                        <div className="mt-3">
                          <h4 className="text-xs font-medium">Associated Tasks:</h4>
                          <div className="mt-1 space-y-1">
                            {milestone.tasks.map((taskId) => {
                              const task = project.tasks.find((t) => t.id === taskId)
                              return task ? (
                                <div key={taskId} className="flex items-center gap-2 text-xs">
                                  <div
                                    className={`h-2 w-2 rounded-full ${
                                      task.status === "completed"
                                        ? "bg-green-500"
                                        : task.status === "in-progress"
                                          ? "bg-blue-500"
                                          : task.status === "overdue"
                                            ? "bg-red-500"
                                            : "bg-yellow-500"
                                    }`}
                                  />
                                  <span>{task.title}</span>
                                </div>
                              ) : null
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Thread</CardTitle>
                <CardDescription>Communicate with students and team members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 space-y-4 max-h-[500px] overflow-y-auto">
                  {project.discussions.map((discussion) => (
                    <div key={discussion.id} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={discussion.user.avatar} alt={discussion.user.name} />
                        <AvatarFallback>{discussion.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{discussion.user.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {discussion.user.role === "mentor" ? "Mentor" : "Student"}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{discussion.timestamp}</span>
                        </div>
                        <p className="mt-1 text-sm">{discussion.message}</p>
                        {discussion.attachments && discussion.attachments.length > 0 && (
                          <div className="mt-2">
                            {discussion.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center gap-2 rounded-md border p-2 text-xs">
                                <FileText className="h-4 w-4 text-blue-500" />
                                <span>{attachment.name}</span>
                                <a href={attachment.url} className="ml-auto text-blue-500 hover:underline">
                                  Download
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Type your message here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      Attach File
                    </Button>
                    <Button onClick={handleSendMessage}>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Meetings Tab */}
          <TabsContent value="meetings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Scheduled Meetings</CardTitle>
                  <CardDescription>Upcoming and past meetings with students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.meetings.map((meeting) => (
                      <div key={meeting.id} className="rounded-lg border p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-medium">{meeting.title}</h3>
                            <p className="text-sm text-muted-foreground">{meeting.description}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CalendarIcon2 className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {meeting.date} at {meeting.time}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">Attendees:</span>
                            <div className="flex -space-x-2">
                              {meeting.attendees.map((attendeeId) => {
                                const attendee =
                                  attendeeId === 0
                                    ? { name: "Dr. Sarah Johnson", avatar: "/placeholder.svg?height=32&width=32" }
                                    : project.students.find((s) => s.id === attendeeId)
                                return attendee ? (
                                  <Avatar key={attendeeId} className="h-6 w-6 border-2 border-background">
                                    <AvatarImage src={attendee.avatar} alt={attendee.name} />
                                    <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                ) : null
                              })}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Cancel
                            </Button>
                            <Button size="sm">Join Meeting</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule Meeting</CardTitle>
                  <CardDescription>Book a session with students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Meeting Title</label>
                      <Input
                        placeholder="e.g., Weekly Progress Review"
                        value={meetingTitle}
                        onChange={(e) => setMeetingTitle(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <Input
                        placeholder="e.g., 10:00 AM"
                        value={meetingTime}
                        onChange={(e) => setMeetingTime(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        placeholder="Meeting agenda and details"
                        className="min-h-[80px]"
                        value={meetingDescription}
                        onChange={(e) => setMeetingDescription(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Attendees</label>
                      <div className="space-y-2">
                        {project.students.map((student) => (
                          <div key={student.id} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`student-${student.id}`}
                              checked={selectedAttendees.includes(student.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedAttendees([...selectedAttendees, student.id])
                                } else {
                                  setSelectedAttendees(selectedAttendees.filter((id) => id !== student.id))
                                }
                              }}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <label htmlFor={`student-${student.id}`} className="text-sm">
                              {student.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" onClick={handleScheduleMeeting}>
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MentorLayout>
  )
}

