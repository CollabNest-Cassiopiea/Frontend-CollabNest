import React from 'react';

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

interface ProjectCardProps {
  project: Project;
  darkBg?: string;
  darkBgSecondary?: string;
  onViewDetails?: (projectId: string) => void;
  onContinue?: (projectId: string) => void;
}

const getStatusBadgeClass = (status: string): string => {
  switch (status) {
    case "In Progress":
      return "bg-blue-900/50 text-blue-300";
    case "Pending Review":
      return "bg-yellow-900/50 text-yellow-300";
    case "Completed":
      return "bg-green-900/50 text-green-300";
    default:
      return "bg-gray-900/50 text-gray-300";
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  darkBg = "#1e1e2e",
  darkBgSecondary = "#2a2a3a",
  onViewDetails = () => {},
  onContinue = () => {}
}) => {
  return (
    <div
      key={project.id}
      className="rounded-xl overflow-hidden hover:border-gray-500 transition-colors border-[0.01px] border-gray-400/30"
      style={{ background: darkBg }}
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

      {/* Action Buttons */}
      <div className="content-justify-end flex">
        <button 
          className="flex-1 text-center text-sm font-medium text-white transition-colors"
          style={{ 
            background: darkBgSecondary, 
            borderRadius: "999px",
            margin: "6px",
            height: "36px"
          }}
          onClick={() => onViewDetails(project.id)}
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
            onClick={() => onContinue(project.id)}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;