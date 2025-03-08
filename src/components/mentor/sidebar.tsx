import React from "react";
import { Link } from "react-router-dom"; // Changed from lucide-react to react-router-dom

interface SidebarProps {
  activeView?: string; // Made optional since it's not being used (activePath is used instead)
  activePath: string;
  mentorName: string;
  onNavigate: (path: string) => void;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

const MentorSidebar: React.FC<SidebarProps> = ({ activePath, mentorName, onNavigate }) => {
  // Navigation items for cleaner rendering
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/projects", label: "My Projects" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-black min-h-screen p-4">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-white mb-2">
          {getInitials(mentorName)}
        </div>
        <h2 className="text-xl font-bold text-white">{mentorName}'s Dashboard</h2>
      </div>
      <nav className="flex flex-col gap-2 mt-6">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className={`text-left ${
              activePath.includes(item.path) ? "text-white bg-gray-800" : "text-gray-300"
            } py-3 px-4 rounded-lg hover:bg-gray-700 transition`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default MentorSidebar;