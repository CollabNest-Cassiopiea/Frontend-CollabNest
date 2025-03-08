import React, { useState } from "react";
import { Search } from "lucide-react";
import StudentProjects from "./myproject"; // Import the MyProjects component
import MyCertificates from "./certificates"; // Import the MyCertificates component
import MyProfile from "./profile"; // Import the MyProfile component
import NotificationIcon from "../../components/student/notification"; // Import the new NotificationIcon component

// ProjectCard Component
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition cursor-pointer bg-[#141414]">
      <img src={imageUrl || "/api/placeholder/240/120"} alt={title} className="w-full h-24 object-cover" />
      <div className="p-3">
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

// Sidebar Component
interface SidebarProps {
  activeView: string;
  handleNavigation: (view: string) => void;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const Sidebar: React.FC<SidebarProps> = ({ activeView, handleNavigation }) => {
  return (
    <aside className="hidden lg:flex flex-col w-64 bg-black min-h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-white mb-2">
          {getInitials("Jayden")}
        </div>
        <h2 className="text-xl font-bold text-white">Jayden's Dashboard</h2>
      </div>
      <nav className="flex flex-col gap-2 mt-6">
        <button
          onClick={() => handleNavigation("home")}
          className={`text-left ${activeView === "home" ? "text-white bg-gray-800" : "text-gray-300"} py-3 px-4 rounded-lg hover:bg-gray-800 transition`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("myProjects")}
          className={`text-left ${activeView === "myProjects" ? "text-white bg-gray-800" : "text-gray-300"} py-3 px-4 hover:bg-gray-800 rounded-lg transition`}
        >
          My Projects
        </button>
        <button
          onClick={() => handleNavigation("certificates")}
          className={`text-left ${activeView === "certificates" ? "text-white bg-gray-800" : "text-gray-300"} py-3 px-4 hover:bg-gray-800 rounded-lg transition`}
        >
          Certificates
        </button>
        <button
          onClick={() => handleNavigation("profile")}
          className={`text-left ${activeView === "profile" ? "text-white bg-gray-800" : "text-gray-300"} py-3 px-4 hover:bg-gray-800 rounded-lg transition`}
        >
          Profile
        </button>
      </nav>
    </aside>
  );
};

// Main Home Component 
const StudentHome: React.FC = () => {
  const [activeView, setActiveView] = useState("home");

  const handleNavigation = (view: string) => {
    setActiveView(view);
  };
  
  // Sample data for projects
  const currentProject = {
    title: "CollabNest",
    description: "A structured project-based learning platform connecting students with mentors & professors for hands-on experience.",
  };

  const recommendedProjects = [
    {
      title: "Music Visualizer",
      description: "Create a music visualizer that syncs with your Spotify playlist",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "AI Dungeon",
      description: "Write an AI-generated story in this text-based adventure game",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Personal Website",
      description: "Build a personal website with HTML, CSS, and JavaScript",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Chat App",
      description: "Develop a real-time chat app using Firebase and React",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Todo List",
      description: "Make a todo list with React and local storage",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Weather App",
      description: "Display the current weather and forecast for your location",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Meme Generator",
      description: "Generate memes with a library like imgflip",
      imageUrl: "/api/placeholder/240/120"
    },
    {
      title: "Book Recommender",
      description: "Recommend books based on user input",
      imageUrl: "/api/placeholder/240/120"
    }
  ];

  // Render the content based on activeView
  const renderContent = () => {
    switch (activeView) {
      case "home":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            {/* Welcome header with notification icon */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Welcome back, Jayden!</h1>
              <NotificationIcon />
            </div>

            {/* Continue Project Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-3">Continue your project</h2>
              <div className="border border-gray-700 rounded-xl p-5 flex justify-between items-center bg-[#141414]">
                <div>
                  <h3 className="font-medium text-white">{currentProject.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 max-w-xl">{currentProject.description}</p>
                </div>
                <button 
                  className="text-white px-4 py-2 rounded-md text-sm font-medium transition"
                  style={{ backgroundColor: "#38E078" }}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Recommended Projects Section */}
            <div className="mb-10">
              <h2 className="text-lg font-medium mb-4">Recommended projects</h2>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search for projects"
                    className="w-full bg-[#141414] text-gray-300 border border-gray-700 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-gray-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {recommendedProjects.slice(0, 4).map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
                {recommendedProjects.slice(4, 8).map((project, index) => (
                  <ProjectCard
                    key={index + 4}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                  />
                ))}
              </div>
            </div>

            {/* Scheduled Meets Section */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Scheduled Meets</h2>
              <div className="border border-gray-700 rounded-xl p-10 flex justify-center items-center min-h-48 bg-[#141414]">
                <p className="text-gray-500">No meetings scheduled for today</p>
              </div>
            </div>
          </div>
        );
      case "myProjects":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            {/* Header with notification icon */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">My Projects</h1>
              <NotificationIcon />
            </div>
            <StudentProjects />
          </div>
        );
      case "certificates":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            {/* Header with notification icon */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Certificates</h1>
              <NotificationIcon />
            </div>
            <MyCertificates />
          </div>
        );
      case "profile":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            {/* Header with notification icon */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Profile</h1>
              <NotificationIcon />
            </div>
            <MyProfile />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeView={activeView} handleNavigation={handleNavigation} />
      <main className="flex-1 bg-[#141414] min-h-screen text-white p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default StudentHome;