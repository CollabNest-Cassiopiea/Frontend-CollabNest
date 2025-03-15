"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { DashboardLayout } from "@/components/student/dashboard-layout"
import { ProjectCard } from "@/components/student/project-card"
import { RecommendedProjectCard } from "@/components/student/recommended-project-card"
import { MeetingCard } from "@/components/student/meeting-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectDetailModal } from "@/components/student/project-detail-modal"
import type { Project } from "../../types/project"

const scheduledMeetings = [
  {
    id: 1,
    title: "Project Review Session",
    mentor: { name: "Dr. Sarah Johnson" },
    date: "May 15, 2023",
    time: "2:00 PM",
  },
  {
    id: 2,
    title: "Weekly Check-in",
    mentor: { name: "Prof. Michael Chen" },
    date: "May 17, 2023",
    time: "10:30 AM",
  },
]

export default function StudentDashboard() {
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([])
  const [recommendedProjects] = useState<Project[]>([
    {
      id: 4,
      title: "Blockchain Smart Contract",
      description: "Create and deploy a smart contract on Ethereum for a decentralized application.",
      mentor: { name: "Dr. James Wilson" },
      progress: 0,
      tags: ["Blockchain", "Advanced"],
      techStack: ["Solidity", "Ethereum", "Web3.js"],
      status: "available",
      leaderboard: [],
      discussion: [],
      tasks: [],
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Build an interactive dashboard to visualize complex datasets using D3.js and React.",
      mentor: { name: "Lisa Thompson" },
      progress: 0,
      tags: ["Data", "Beginner"],
      techStack: ["D3.js", "React", "JavaScript"],
      status: "available",
      leaderboard: [],
      discussion: [],
      tasks: [],
    },
    {
      id: 6,
      title: "Cloud-based Microservices",
      description: "Design and implement a microservices architecture using Docker and Kubernetes.",
      mentor: { name: "Robert Garcia" },
      progress: 0,
      tags: ["Backend", "Advanced"],
      techStack: ["Docker", "Kubernetes", "Node.js"],
      status: "available",
      leaderboard: [],
      discussion: [],
      tasks: [],
    },
  ])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [studentId, setStudentId] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const navigate = useNavigate()
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStudentId(user.uid)
      } else {
        navigate("/login")
      }
    })
    return () => unsubscribe()
  }, [auth, navigate])

  useEffect(() => {
    if (!studentId) return

    const fetchProjects = async () => {
      try {
        const user = auth.currentUser
        if (!user) throw new Error("User not authenticated")
        
        const token = await user.getIdToken()
        const response = await fetch(`/api/students/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })

        if (!response.ok) throw new Error("Failed to fetch projects")
        
        const data = await response.json()
        
        if (!data.success || !Array.isArray(data.projects)) {
          throw new Error("Invalid data format")
        }

        const ongoing = data.projects
          .filter(project => project.status === "IN_PROGRESS")
          .map(project => ({
            id: project.project_id,
            title: project.title,
            description: project.description,
            mentor: { name: project.mentor?.name || "Unknown Mentor" },
            progress: 0,
            tags: project.tech_stack || [],
            status: "ongoing",
            techStack: project.tech_stack || [],
            leaderboard: [],
            discussion: [],
            tasks: []
          }))

        setOngoingProjects(ongoing)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError(error instanceof Error ? error.message : "Unknown error")
        setLoading(false)
      }
    }

    fetchProjects()
  }, [studentId, auth])

  const handleJoinProject = (project: Project) => {
    const mockJoinedProject: Project = {
      ...project,
      status: "ongoing",
      progress: 0,
      leaderboard: [],
      discussion: [],
    }

    setOngoingProjects((prev) => [...prev, mockJoinedProject])
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Welcome back, Diptanshu!</h1>
          <p className="text-muted-foreground">Here's an overview of your learning journey</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Continue Projects</CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <CardDescription>Pick up where you left off</CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div>Loading projects...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : ongoingProjects.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-lg font-semibold mb-2">No active projects!</p>
                  <Button onClick={() => navigate("/projects")}>
                    Find Projects
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {ongoingProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      mentor={project.mentor}
                      progress={project.progress}
                      tags={project.tags}
                      projectId={project.id}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduled Meetings</CardTitle>
              <CardDescription>Upcoming mentor sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledMeetings.map((meeting) => (
                  <MeetingCard
                    key={meeting.id}
                    title={meeting.title}
                    mentor={meeting.mentor}
                    date={meeting.date}
                    time={meeting.time}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recommended Projects</CardTitle>
                <Button variant="outline" size="sm">
                  Browse All
                </Button>
              </div>
              <CardDescription>Projects that match your skills and interests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recommendedProjects.map((project) => (
                  <RecommendedProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    mentor={project.mentor}
                    progress={project.progress}
                    tags={project.tags}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {selectedProject && (
          <ProjectDetailModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            project={selectedProject}
            onJoin={handleJoinProject}
          />
        )}
      </div>
    </DashboardLayout>
  )
}