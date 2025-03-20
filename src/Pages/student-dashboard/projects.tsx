import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/student/dashboard-layout";
import { ProjectCard } from "@/components/student/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface Project {
  id: number;
  title: string;
  description: string;
  mentor: { name: string };
  progress: number;
  tags: string[];
  status: "ongoing" | "completed" | "available";
}

interface ApiResponse {
  success: boolean;
  projects: {
    project_id: number;
    title: string;
    description: string;
    mentor: { name: string } | null;
    tech_stack: string[];
    status: string;
  }[];
}

export default function StudentProjects() {
  const [ongoingProjects, setOngoingProjects] = useState<Project[]>([]);
  const [completedProjects, setCompletedProjects] = useState<Project[]>([]);
  const [availableProjects, setAvailableProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [studentSkills, setStudentSkills] = useState<string[]>([]); // To store the student's skills

  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStudentId(user.uid);
        // Assuming the student's skills are stored in Firebase user metadata or a user profile API
        // Fetch student's skills from a user profile API or another source
        fetch(`/api/user/${user.uid}/skills`, {
          headers: {
            Authorization: `Bearer ${user.getIdToken()}`,
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setStudentSkills(data.skills || []))
          .catch((error) => {
            console.error("Failed to fetch student skills:", error);
            setStudentSkills([]);
          });
      } else {
        navigate("/login");
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

        // Fetch ongoing and completed projects from the previous endpoint
        const responseOngoingCompleted = await fetch(`/api/students/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!responseOngoingCompleted.ok) {
          const errorText = await responseOngoingCompleted.text();
          throw new Error(`Failed to fetch ongoing/completed projects: ${errorText}`);
        }

        const rawDataOngoingCompleted: ApiResponse = await responseOngoingCompleted.json();
        console.log("✅ Raw API Response (Ongoing/Completed):", rawDataOngoingCompleted);

        if (!rawDataOngoingCompleted || !rawDataOngoingCompleted.success || !Array.isArray(rawDataOngoingCompleted.projects)) {
          throw new Error("Invalid API response format for ongoing/completed projects");
        }

        // Fetch available projects based on student's skills
        const responseAvailable = await fetch(`/api/projects/?skills=${studentSkills.join(",")}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!responseAvailable.ok) {
          const errorText = await responseAvailable.text();
          throw new Error(`Failed to fetch available projects: ${errorText}`);
        }

        const rawDataAvailable: ApiResponse = await responseAvailable.json();
        console.log("✅ Raw API Response (Available):", rawDataAvailable);

        if (!rawDataAvailable || !rawDataAvailable.success || !Array.isArray(rawDataAvailable.projects)) {
          throw new Error("Invalid API response format for available projects");
        }

        // Transform the available projects to match the existing format
        const transformProjects = (projects: ApiResponse["projects"]) => {
          const ongoing: Project[] = [];
          const completed: Project[] = [];
          const available: Project[] = [];

          projects.forEach((project) => {
            const transformedProject: Project = {
              id: project.project_id,
              title: project.title,
              description: project.description,
              mentor: { name: project.mentor?.name || "Unknown Mentor" },
              progress: 0, // Default progress (you can calculate this if needed)
              tags: project.tech_stack || [],
              status: project.status === "IN_PROGRESS"
                ? "ongoing"
                : project.status === "CLOSED"
                ? "completed"
                : "available",
            };

            switch (transformedProject.status) {
              case "ongoing":
                ongoing.push(transformedProject);
                break;
              case "completed":
                completed.push(transformedProject);
                break;
              case "available":
                available.push(transformedProject);
                break;
              default:
                console.warn(`Unknown project status: ${project.status}`);
                break;
            }
          });

          return { ongoing, completed, available };
        };

        // Process ongoing/completed projects
        const { ongoing, completed } = transformProjects(rawDataOngoingCompleted.projects);
        console.log("Transformed Ongoing/Completed Projects:", { ongoing, completed });

        // Set ongoing and completed projects state
        setOngoingProjects(ongoing);
        setCompletedProjects(completed);

        // Process available projects
        const { available } = transformProjects(rawDataAvailable.projects);
        console.log("Transformed Available Projects:", available);

        // Set available projects state
        setAvailableProjects(available);

        setLoading(false);
      } catch (error) {
        console.error("❌ Error fetching projects:", error);
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    };

    fetchProjects();
  }, [studentId, studentSkills, auth]);

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
