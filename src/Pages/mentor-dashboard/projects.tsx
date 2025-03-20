"use client"

import { useState } from "react"
import { MentorLayout } from "@/components/mentor/mentor-layout"
import { MentorProjectCard } from "@/components/mentor/mentor-project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data - in a real app, this would come from an API
const allProjects = [
  {
    id: 1,
    title: "Web Development Portfolio",
    description: "Create a professional portfolio website showcasing projects and skills using React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Next.js"],
    duration: "8 weeks",
    progress: 65,
    studentsEnrolled: 3,
    maxStudents: 5,
    status: "in-progress" as const,
  },
  {
    id: 2,
    title: "Machine Learning Image Classifier",
    description: "Build an image classification model using TensorFlow to identify objects in photographs.",
    techStack: ["Python", "TensorFlow", "Keras"],
    duration: "10 weeks",
    progress: 30,
    studentsEnrolled: 4,
    maxStudents: 4,
    status: "in-progress" as const,
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile application using React Native for task management.",
    techStack: ["React Native", "Firebase", "Redux"],
    duration: "12 weeks",
    progress: 0,
    studentsEnrolled: 0,
    maxStudents: 3,
    status: "open" as const,
  },
  {
    id: 4,
    title: "RESTful API Development",
    description: "Design and implement a RESTful API using Node.js and Express for a social media platform.",
    techStack: ["Node.js", "Express", "MongoDB"],
    duration: "6 weeks",
    progress: 100,
    studentsEnrolled: 5,
    maxStudents: 5,
    status: "completed" as const,
  },
  {
    id: 5,
    title: "Database Design Project",
    description: "Create a normalized database schema for an e-commerce application using PostgreSQL.",
    techStack: ["PostgreSQL", "SQL", "Database Design"],
    duration: "4 weeks",
    progress: 100,
    studentsEnrolled: 3,
    maxStudents: 3,
    status: "completed" as const,
  },
  {
    id: 6,
    title: "Blockchain Smart Contract",
    description: "Create and deploy a smart contract on Ethereum for a decentralized application.",
    techStack: ["Solidity", "Ethereum", "Web3.js"],
    duration: "8 weeks",
    progress: 0,
    studentsEnrolled: 0,
    maxStudents: 4,
    status: "open" as const,
  },
]

export default function MentorProjectsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const openProjects = allProjects.filter((p) => p.status === "open")
  const inProgressProjects = allProjects.filter((p) => p.status === "in-progress")
  const completedProjects = allProjects.filter((p) => p.status === "completed")

  return (
    <MentorLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="text-muted-foreground">Manage and create learning projects</p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <div className="relative flex-1 sm:w-64 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  Post a Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new project for students to join.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" placeholder="Enter project title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Project Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="ai">AI/Machine Learning</SelectItem>
                        <SelectItem value="data">Data Science</SelectItem>
                        <SelectItem value="blockchain">Blockchain</SelectItem>
                        <SelectItem value="cloud">Cloud Computing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tech-stack">Tech Stack</Label>
                    <Input id="tech-stack" placeholder="e.g. React, Node.js, MongoDB" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea id="description" placeholder="Describe the project in detail" className="min-h-[100px]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4">4 weeks</SelectItem>
                          <SelectItem value="6">6 weeks</SelectItem>
                          <SelectItem value="8">8 weeks</SelectItem>
                          <SelectItem value="10">10 weeks</SelectItem>
                          <SelectItem value="12">12 weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="max-students">Max Students</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 student</SelectItem>
                          <SelectItem value="2">2 students</SelectItem>
                          <SelectItem value="3">3 students</SelectItem>
                          <SelectItem value="4">4 students</SelectItem>
                          <SelectItem value="5">5 students</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="perks">Perks & Benefits</Label>
                    <Textarea
                      id="perks"
                      placeholder="What will students gain from this project?"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Create Project</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-full sm:w-auto">
              <TabsTrigger value="all">All Projects ({allProjects.length})</TabsTrigger>
              <TabsTrigger value="open">Open ({openProjects.length})</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress ({inProgressProjects.length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project) => (
                <MentorProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  duration={project.duration}
                  progress={project.progress}
                  studentsEnrolled={project.studentsEnrolled}
                  maxStudents={project.maxStudents}
                  status={project.status}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="open" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {openProjects.map((project) => (
                <MentorProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  duration={project.duration}
                  progress={project.progress}
                  studentsEnrolled={project.studentsEnrolled}
                  maxStudents={project.maxStudents}
                  status={project.status}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {inProgressProjects.map((project) => (
                <MentorProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  duration={project.duration}
                  progress={project.progress}
                  studentsEnrolled={project.studentsEnrolled}
                  maxStudents={project.maxStudents}
                  status={project.status}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {completedProjects.map((project) => (
                <MentorProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  duration={project.duration}
                  progress={project.progress}
                  studentsEnrolled={project.studentsEnrolled}
                  maxStudents={project.maxStudents}
                  status={project.status}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MentorLayout>
  )
}