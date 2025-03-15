import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct for React
import { DashboardLayout } from "@/components/student/dashboard-layout";
import { ProjectCard } from "@/components/student/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase auth

interface Project {
  id: number;
  title: string;
  description: string;
  mentor: { name: string };
  progress: number;
  tags: string[];
  status: "ongoing" | "completed" | "available";
}

interface StudentProjectsResponse {
  ongoing: Project[];
  completed: Project[];
  available: Project[];
}

export default function StudentProjects() {
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);
  const [completedProjects, setCompletedProjects] = useState<Project[]>([]);
  const [availableProjects, setAvailableProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null); // Dynamic student ID

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    // Fetch the logged-in user's ID dynamically
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStudentId(user.uid);
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  useEffect(() => {
    if (!studentId) return;
  
    const fetchProjects = async () => {
      try {
        const user = auth.currentUser;
        if (!user) throw new Error("User not authenticated");
  
        const token = await user.getIdToken();
  
        console.log("🔥 Sending Token to Backend:", token);
  
        const response = await fetch(`/api/students/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch projects: ${errorText}`);
        }
  
        const rawData: StudentProjectsResponse = await response.json();
        console.log("✅ Fetched Projects:", rawData);
  
        // Ensure rawData has expected structure
        if (!rawData || typeof rawData !== "object") {
          throw new Error("Invalid API response format");
        }
  
        // ✅ Map project statuses correctly
        const mapStatus = (status: string): "ongoing" | "completed" | "available" => {
          switch (status) {
            case "IN_PROGRESS":
              return "ongoing";
            case "CLOSED":
              return "completed";
            case "OPEN":
              return "available";
            default:
              throw new Error(`Unexpected project status: ${status}`);
          }
        };
  
        // ✅ Transform projects within each category
        const transformProjects = (projects: any[]) =>
          projects.map((project) => ({
            id: project.id,
            title: project.title,
            description: project.description,
            mentor: { name: project.mentor.name },
            progress: project.progress,
            tags: project.tags,
            status: mapStatus(project.status),
          }));
  
        // ✅ Set state with transformed data
        setOngoingProjects(transformProjects(rawData.ongoing || []));
        setCompletedProjects(transformProjects(rawData.completed || []));
        setAvailableProjects(transformProjects(rawData.available || []));
        setLoading(false);
      } catch (error: any) {
        console.error("❌ Error fetching projects:", error);
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    };
  
    fetchProjects();
  }, [studentId, auth]);
  
  


  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="text-muted-foreground">
              Manage and explore your learning projects
            </p>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <div className="relative flex-1 sm:w-64 sm:flex-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-full pl-8"
              />
            </div>
            <Button>New Project</Button>
          </div>
        </div>

        {loading && <div>Loading projects...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}

        {!loading && !error && (
          <Tabs defaultValue="ongoing" className="space-y-4">
            <TabsList>
              <TabsTrigger value="ongoing">
                Ongoing ({ongoingProjects.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedProjects.length})
              </TabsTrigger>
              <TabsTrigger value="available">
                Available ({availableProjects.length})
              </TabsTrigger>
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
                    tags={project.tags}
                    projectId={project.id}
                  />
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
                    tags={project.tags}
                    projectId={project.id}
                  />
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
                    tags={project.tags}
                    projectId={project.id}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
}
