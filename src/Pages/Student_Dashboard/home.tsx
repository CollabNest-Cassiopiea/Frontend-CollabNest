import React, { useState } from "react";
import StudentProjects from "./myproject";
import MyCertificates from "./certificates";
import MyProfile from "./profile";
import Sidebar from "../../components/student/sidebar";
import ContinueProjectSection from "../../components/student/continueProject";
import RecommendedProjectsSection from "../../components/student/recommendedProject";
import ScheduledMeetsSection from "../../components/student/scheduledMeet";

const StudentHome: React.FC = () => {
  const [activeView, setActiveView] = useState("home");

  const handleNavigation = (view: string) => {
    setActiveView(view);
  };

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

  const renderContent = () => {
    switch (activeView) {
      case "home":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            <ContinueProjectSection
              title={currentProject.title}
              description={currentProject.description}
            />
            <RecommendedProjectsSection projects={recommendedProjects} />
            <ScheduledMeetsSection />
          </div>
        );
      case "myProjects":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            <StudentProjects />
          </div>
        );
      case "certificates":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
            <MyCertificates />
          </div>
        );
      case "profile":
        return (
          <div className="w-full max-w-6xl mx-auto bg-[#141414] p-6 rounded-xl">
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