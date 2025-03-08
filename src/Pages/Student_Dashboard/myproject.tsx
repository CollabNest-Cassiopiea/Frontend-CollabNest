import React, { useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "../../components/mentor/projectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: string;
  lastUpdated: string;
  collaborators: number;
  technologies: string[];
}

const StudentProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Current");
  
  // Sample project data
  const projects: Project[] = [
    {
      id: "1",
      title: "CollabNest",
      description: "A structured project-based learning platform connecting students with mentors & professionals for hands-on experience.",
      progress: 65,
      status: "In Progress",
      lastUpdated: "2 days ago",
      collaborators: 3,
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "2",
      title: "Weather Dashboard",
      description: "Interactive weather application showing real-time weather data with forecast visualization.",
      progress: 90,
      status: "Pending Review",
      lastUpdated: "1 week ago",
      collaborators: 0,
      technologies: ["React", "OpenWeather API", "Tailwind CSS"]
    },
    {
      id: "3",
      title: "Music Visualizer",
      description: "Create a music visualizer that syncs with your Spotify playlist.",
      progress: 40,
      status: "In Progress",
      lastUpdated: "3 days ago",
      collaborators: 2,
      technologies: ["React", "Web Audio API", "Spotify API"]
    },
    {
      id: "4",
      title: "Personal Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      progress: 100,
      status: "Completed",
      lastUpdated: "1 month ago",
      collaborators: 0,
      technologies: ["React", "Tailwind CSS", "Framer Motion"]
    }
  ];

  const handleViewDetails = (projectId: string) => {
    console.log(`View details for project ${projectId}`);
  };

  const handleContinue = (projectId: string) => {
    console.log(`Continue project ${projectId}`);
  };

  // Filter projects based on the active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === "Current") return project.status !== "Completed";
    if (activeTab === "Completed") return project.status === "Completed";
    return true; // "All" tab
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Projects</h1>
        <p className="text-gray-400">Manage and track your learning projects</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("Current")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "Current" 
                ? "bg-gray-800 text-white" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setActiveTab("Completed")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "Completed" 
                ? "bg-gray-800 text-white" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "All" 
                ? "bg-gray-800 text-white" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            All
          </button>
        </div>

        <div className="relative w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-[#1a1a1a] text-gray-300 border border-gray-700 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            darkBg="#1a1a1a"
            darkBgSecondary="#2a2a3a"
            onViewDetails={handleViewDetails}
            onContinue={handleContinue}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex justify-center items-center h-64 border border-gray-700 rounded-xl">
          <p className="text-gray-500">No projects found</p>
        </div>
      )}
    </div>
  );
};

export default StudentProjects;