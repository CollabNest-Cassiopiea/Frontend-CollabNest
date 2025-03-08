import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import ProjectCard from '../../components/mentor/projectCard';
import MentorSidebar from '../../components/mentor/sidebar';

import MentorHome from './home';
import MentorProjects from './projects';
import MentorProfile from './profile';

// Types
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

interface Meeting {
  id: string;
  title: string;
  dateTime: string;
  project: string;
  attendees: string;
}

interface Activity {
  id: string;
  description: string;
  timestamp: string;
}

const MentorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current path for sidebar active state
  const currentPath = location.pathname;

  // Sample data
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "project1",
      title: "CollabNest",
      description: "A structured project-based learning platform connecting students with mentors & professionals for hands-on experience.",
      progress: 65,
      status: "In Progress",
      lastUpdated: "2 days ago",
      collaborators: 3,
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: "project2",
      title: "Weather Dashboard",
      description: "Interactive weather application showing real-time weather data with forecast visualization.",
      progress: 90,
      status: "Pending Review",
      lastUpdated: "1 week ago",
      collaborators: 0, // Solo project
      technologies: ["React", "OpenWeather API", "Tailwind CSS"]
    }
  ]);

  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: "meet1",
      title: "Progress Review",
      dateTime: "Mar 9, 2:30 PM",
      project: "CollabNest",
      attendees: "3 Students"
    },
    {
      id: "meet2",
      title: "Final Presentation",
      dateTime: "Mar 12, 1:00 PM",
      project: "Weather Dashboard",
      attendees: "1 Student"
    }
  ]);

  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "act1",
      description: "Student Alex submitted an application for CollabNest project",
      timestamp: "2 hours ago"
    },
    {
      id: "act2",
      description: "Meeting scheduled for Weather Dashboard on March 12",
      timestamp: "5 hours ago"
    },
    {
      id: "act3",
      description: "Task 'Frontend Component' assigned to Student Emma in CollabNest project",
      timestamp: "1 day ago"
    }
  ]);

  // Colors
  const darkBg = "#141414";
  const darkBgSecondary = "#292929";
  const accentColor = "#38E078";

  // Handlers
  const handleViewDetails = (projectId: string) => {
    console.log(`View details for project: ${projectId}`);
  };

  const handleContinue = (projectId: string) => {
    console.log(`Continue project: ${projectId}`);
  };

  const handleScheduleMeeting = () => {
    console.log("Schedule meeting");
  };

  const handleJoinMeet = (meetingId: string) => {
    console.log(`Join meeting: ${meetingId}`);
  };

  // Handle navigation from sidebar
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Custom component for the dashboard home content
  const DashboardHome = () => (
    <>
      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              darkBg={darkBg}
              darkBgSecondary={darkBgSecondary}
              onViewDetails={handleViewDetails}
              onContinue={handleContinue}
            />
          ))}
        </div>
      </section>

      {/* Scheduled Meets Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Scheduled Meets</h2>
        <div className="bg-[#1A1A1A] rounded-t-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-700">
            <div className="text-gray-400">Meeting Title</div>
            <div className="text-gray-400">Date & Time</div>
            <div className="text-gray-400">Project</div>
            <div className="text-gray-400">Attendees</div>
          </div>
          {meetings.map(meeting => (
            <div key={meeting.id} className="grid grid-cols-5 gap-4 p-4 bg-[#292929] border-b border-gray-700">
              <div>{meeting.title}</div>
              <div>{meeting.dateTime}</div>
              <div>{meeting.project}</div>
              <div>{meeting.attendees}</div>
              <div>
                <button
                  className="px-4 py-1 bg-[#38E078] rounded text-white text-sm"
                  onClick={() => handleJoinMeet(meeting.id)}
                >
                  Join Meet
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <div className="flex h-screen bg-[#141414] text-white">
      {/* Sidebar Component */}
      <MentorSidebar
        activePath={currentPath}
        mentorName="Michael"
        onNavigate={(path) => navigate(path)}
      />


      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome Back, Michael</h1>
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

        {/* Content - Routes will be rendered here */}
        <main className="p-6">
          <Routes>
            <Route path="/home" element={<MentorHome />} />
            <Route path="/projects" element={<MentorProjects />} />
            <Route path="/profile" element={<MentorProfile />} />
            <Route path="/" element={<DashboardHome />} />
            <Route path="*" element={<DashboardHome />} /> {/* Default route */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default MentorDashboard;