import React, { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: "In Progress" | "Completed" | "Pending Review";
  lastUpdated: string;
  collaborators: number;
  technologies: string[];
}

const darkBg = "#141414";
const darkBgSecondary = "#292929";
const accentColorLight = "#38E078"; // Lighter green

const MyProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"current" | "completed" | "all">(
    "current"
  );
  const [projectSearchTerm, setProjectSearchTerm] = useState("");

  // Sample user projects data
  const userProjects: Project[] = [
    {
      id: "proj-001",
      title: "CollabNest",
      description:
        "A structured project-based learning platform connecting students with mentors & professionals for hands-on experience.",
      progress: 65,
      status: "In Progress",
      lastUpdated: "2 days ago",
      collaborators: 3,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "proj-002",
      title: "Weather Dashboard",
      description:
        "Interactive weather application showing real-time weather data with forecast visualization.",
      progress: 90,
      status: "Pending Review",
      lastUpdated: "1 week ago",
      collaborators: 0,
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    },
    {
      id: "proj-003",
      title: "Task Manager",
      description:
        "A personal productivity tool for tracking daily tasks and projects.",
      progress: 100,
      status: "Completed",
      lastUpdated: "2 weeks ago",
      collaborators: 1,
      technologies: ["React", "Firebase", "Typescript"],
    },
    {
      id: "proj-004",
      title: "Portfolio Website",
      description:
        "Personal portfolio website to showcase my skills and projects.",
      progress: 100,
      status: "Completed",
      lastUpdated: "1 month ago",
      collaborators: 0,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  // Filter projects based on activeTab and search term
  const filteredProjects = userProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(projectSearchTerm.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(projectSearchTerm.toLowerCase());

    if (activeTab === "current") {
      return matchesSearch && project.status !== "Completed";
    } else if (activeTab === "completed") {
      return matchesSearch && project.status === "Completed";
    }
    return matchesSearch;
  });

  // Function to get status badge style based on status
  const getStatusBadgeClass = (status: Project["status"]) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500/20 text-blue-300";
      case "Completed":
        return "bg-green-500/20 text-green-300";
      case "Pending Review":
        return "bg-yellow-500/20 text-yellow-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="py-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-400">Manage and track your learning projects</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("current")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "current"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700/50 text-gray-300"
            }`}
          >
            Current
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "completed"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700/50 text-gray-300"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === "all"
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-700/50 text-gray-300"
            }`}
          >
            All
          </button>
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full rounded-lg pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600"
            value={projectSearchTerm}
            onChange={(e) => setProjectSearchTerm(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden hover:border-gray-500 transition-colors border-[0.01px] border-gray-400/30" style={{ background: darkBg }}
          >
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full mb-2">
                <div
                  className="h-full rounded-full bg-green-600"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mb-4">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer info */}
              <div className="flex justify-between text-xs text-gray-400 border-t border-gray-700 pt-3">
                <span>Last updated: {project.lastUpdated}</span>
                <span>
                  {project.collaborators > 0
                    ? `${project.collaborators} collaborator${
                        project.collaborators > 1 ? "s" : ""
                      }`
                    : "Solo project"}
                </span>
              </div>
            </div>

            {/* Updated Buttons */}
            <div className="content-justify-end flex">
            <button 
                  className="flex-1 text-center text-sm font-medium text-white transition-colors "
                  style={{ 
                    background:darkBgSecondary, 
                    borderRadius: "999px",
                    margin: "6px",
                    height: "36px"
                  }}
                >
                  View Details
                </button>
              {project.status !== "Completed" && (
                <button 
                  className="flex-1 text-center text-sm font-medium text-black transition-colors"
                  style={{ 
                    background: "#38E078", 
                    borderRadius: "999px",
                    margin: "6px",
                    height: "36px"
                  }}
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty state when no projects match filters */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 mx-auto text-gray-500 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-300 mb-2">
            No projects found
          </h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default MyProject;