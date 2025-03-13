"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/student/dashboard-layout"
import { ProjectCard } from "@/components/student/project-card"
import { MeetingCard } from "@/components/student/meeting-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectDetailModal } from "@/components/student/project-detail-modal"
import type { Project } from "../../types/project"

// Sample data - in a real app, this would come from an API

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
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Web Development Portfolio",
      description: "Create a professional portfolio website showcasing your projects and skills using React and Tailwind CSS.",
      mentor: { name: "Dr. Sarah Johnson" },
      progress: 65,
      tags: ["Frontend"],
      techStack: [],
      status: "ongoing",
      leaderboard: [],
      discussion: [],
      tasks: []
    },
    {
      id: 2,
      title: "Machine Learning Image Classifier",
      description: "Build an image classification model using TensorFlow to identify objects in photographs.",
      mentor: { name: "Prof. Michael Chen" },
      progress: 30,
      tags: ["AI/ML"],
      techStack: [],
      status: "ongoing",
      leaderboard: [],
      discussion: [],
      tasks: []
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Develop a cross-platform mobile application using React Native for task management.",
      mentor: { name: "Alex Rodriguez" },
      progress: 45,
      tags: ["Mobile"],
      techStack: [],
      status: "ongoing",
      leaderboard: [],
      discussion: [],
      tasks: []
    },
  ])

  const [recommendedProjects, setRecommendedProjects] = useState<Project[]>([
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
      tasks: []
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
      tasks: []
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
      tasks: []
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleJoinProject = (project: Project) => {
    // Add mock status and required fields
    const mockJoinedProject: Project = {
      ...project,
      status: "ongoing",
      progress: 0,
      leaderboard: [],
      discussion: []
    };
  
    setOngoingProjects(prev => [...prev, mockJoinedProject]);
    setRecommendedProjects(prev => prev.filter(p => p.id !== project.id));
  };

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
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
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
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ongoingProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    mentor={project.mentor}
                    progress={project.progress}
                    tags={project.tags}
                  />
                ))}
              </div>
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
                  <ProjectCard
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
      </div>

      {selectedProject && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
          onJoin={handleJoinProject}
        />
      )}
    </DashboardLayout>
  )
}

