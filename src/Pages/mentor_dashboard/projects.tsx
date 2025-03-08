import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import MentorSidebar from '../../components/mentor/sidebar';
import ProjectCard from '../../components/mentor/projectCard';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeTab, setActiveTab] = useState<'Current' | 'Completed' | 'All'>('Current');

  // Handle navigation from sidebar
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Sample projects data matching the image
  const projects = [
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
    }
  ];

  // Handle view details action
  const handleViewDetails = (projectId: string) => {
    console.log(`View details for project ${projectId}`);
    // Navigate to project details page
    // navigate(`/projects/${projectId}`);
  };

  // Handle continue action
  const handleContinue = (projectId: string) => {
    console.log(`Continue project ${projectId}`);
    // Navigate to project workspace
    // navigate(`/projects/${projectId}/workspace`);
  };

  return (
    <div className="flex h-screen bg-[#141414] text-white">
      {/* Sidebar Component */}
      <MentorSidebar 
        activePath={currentPath}
        mentorName="Michael"
        onNavigate={handleNavigation} activeView={''} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="text-gray-400">Manage and track your learning projects</p>
          </div>
          <div className="relative">
            <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1 text-xs">3</div>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button 
            className={`px-4 py-2 rounded-md mr-2 ${activeTab === 'Current' ? 'bg-[#263340] text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setActiveTab('Current')}
          >
            Current
          </button>
          <button 
            className={`px-4 py-2 rounded-md mr-2 ${activeTab === 'Completed' ? 'bg-[#263340] text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setActiveTab('Completed')}
          >
            Completed
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'All' ? 'bg-[#263340] text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>
          <div className="flex-grow"></div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="px-4 py-2 pl-10 rounded-md bg-[#1A2533] text-white w-64"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              darkBg="#1A1A1A"
              darkBgSecondary="#263340"
              onViewDetails={handleViewDetails}
              onContinue={handleContinue}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;