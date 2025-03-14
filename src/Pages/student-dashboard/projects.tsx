import { DashboardLayout } from "@/components/student/dashboard-layout"
import { ProjectCard } from "@/components/student/project-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample data - in a real app, this would come from an API
const allProjects = [
  {
    id: 1,
    title: "Web Development Portfolio",
    description:
      "Create a professional portfolio website showcasing your projects and skills using React and Tailwind CSS.",
    mentor: { name: "Dr. Sarah Johnson" },
    progress: 65,
    tags: ["Frontend"],
    status: "ongoing",
  },
  {
    id: 2,
    title: "Machine Learning Image Classifier",
    description: "Build an image classification model using TensorFlow to identify objects in photographs.",
    mentor: { name: "Prof. Michael Chen" },
    progress: 30,
    tags: ["AI/ML"],
    status: "ongoing",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Develop a cross-platform mobile application using React Native for task management.",
    mentor: { name: "Alex Rodriguez" },
    progress: 45,
    tags: ["Mobile"],
    status: "ongoing",
  },
  {
    id: 4,
    title: "RESTful API Development",
    description: "Design and implement a RESTful API using Node.js and Express for a social media platform.",
    mentor: { name: "Emily Parker" },
    progress: 100,
    tags: ["Backend"],
    status: "completed",
  },
  {
    id: 5,
    title: "Database Design Project",
    description: "Create a normalized database schema for an e-commerce application using PostgreSQL.",
    mentor: { name: "Dr. David Kim" },
    progress: 100,
    tags: ["Database"],
    status: "completed",
  },
  {
    id: 6,
    title: "Blockchain Smart Contract",
    description: "Create and deploy a smart contract on Ethereum for a decentralized application.",
    mentor: { name: "Dr. James Wilson" },
    progress: 0,
    tags: ["Blockchain", "Advanced"],
    status: "available",
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description: "Build an interactive dashboard to visualize complex datasets using D3.js and React.",
    mentor: { name: "Lisa Thompson" },
    progress: 0,
    tags: ["Data", "Beginner"],
    status: "available",
  },
  {
    id: 8,
    title: "Cloud-based Microservices",
    description: "Design and implement a microservices architecture using Docker and Kubernetes.",
    mentor: { name: "Robert Garcia" },
    progress: 0,
    tags: ["Backend", "Advanced"],
    status: "available",
  },
]

export default function StudentProjects() {
  const ongoingProjects = allProjects.filter((p) => p.status === "ongoing")
  const completedProjects = allProjects.filter((p) => p.status === "completed")
  const availableProjects = allProjects.filter((p) => p.status === "available")

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="text-muted-foreground">Manage and explore your learning projects</p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <div className="relative flex-1 sm:w-64 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
            </div>
            <Button>New Project</Button>
          </div>
        </div>

        <Tabs defaultValue="ongoing" className="space-y-4">
          <TabsList>
            <TabsTrigger value="ongoing">Ongoing ({ongoingProjects.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedProjects.length})</TabsTrigger>
            <TabsTrigger value="available">Available ({availableProjects.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ongoingProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  mentor={project.mentor}
                  progress={project.progress}
                  tags={project.tags} projectId={0}                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {completedProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  mentor={project.mentor}
                  progress={project.progress}
                  tags={project.tags} projectId={0}                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="available" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {availableProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  mentor={project.mentor}
                  progress={project.progress}
                  tags={project.tags} projectId={0}                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

