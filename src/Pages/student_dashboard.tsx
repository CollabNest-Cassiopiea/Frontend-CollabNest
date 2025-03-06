import React, { useState } from "react";

interface Project {
    image: string | undefined;
    title: string;
    description: string;
}

const darkBg = "#141414";
const darkBgSecondary = "#292929";
const accentColorLight = "#38E078"; // Lighter green

const recommendedProjects: Project[] = [
    {
        title: "Music Visualizer",
        description: "Create musical visuals for your songs with your Spotify playlist",
        image: undefined
    },
    {
        title: "AI Dungeon",
        description: "Create an AI generated story with infinite possibilities",
        image: undefined
    },
    {
        title: "Personal Website",
        description: "Build your personal website with HTML, CSS, and JavaScript",
        image: undefined
    },
    {
        title: "Chat App",
        description: "Real-time chat app with React, Node, and Firebase",
        image: undefined
    },
    {
        title: "Todo List",
        description: "Track daily tasks with React and local storage",
        image: undefined
    },
    {
        title: "Weather App",
        description: "Display real-time weather for multiple locations",
        image: undefined
    },
    {
        title: "Meme Generator",
        description: "Create your own memes library like Imgur",
        image: undefined
    },
    {
        title: "Book Recommender",
        description: "Recommend books based on user input",
        image: undefined
    },
    {
        title: "Pomodoro Timer",
        description: "Implement a Pomodoro timer to boost focus & productivity",
        image: undefined
    },
];

const getInitials = (name: string) => {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase();
};

// Custom Time Picker Component using shadcn select components
const StudentDashboard: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [scheduledMeets] = useState<
        { time: string; date: string }[]
    >([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [notifications] = useState(3); // Number of notifications
    const [showNotifications, setShowNotifications] = useState(false);

    const filteredProjects = recommendedProjects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className="flex min-h-screen text-stone-200"
            style={{ backgroundColor: darkBg }}
        >

            {/* Mobile Sidebar */}
            {/* Mobile Sidebar */}
            <div
                className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-black p-4 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-white mb-2">
                        {getInitials("Jayden")}
                    </div>
                    <h2 className="text-xl font-bold text-white">Jayden's Dashboard</h2>
                </div>

                <nav className="flex flex-col gap-4">
                    <a
                        href="#"
                        className="text-white bg-gray-800 py-3 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        My Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Certificates
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Profile
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Settings
                    </a>
                </nav>

                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="mt-6 text-gray-300 hover:text-white"
                >
                    Close Menu
                </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-gray-800 text-white"
                onClick={() => setIsSidebarOpen(true)}
            >
                Menu
            </button>

            {/* Desktop Sidebar */}
            {/* Mobile Sidebar */}
            <div
                className={`lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-black p-4 transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-white mb-2">
                        {getInitials("Jayden")}
                    </div>
                    <h2 className="text-xl font-bold text-white">Jayden's Dashboard</h2>
                </div>

                <nav className="flex flex-col gap-4">
                    <a
                        href="#"
                        className="text-white bg-gray-800 py-3 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        My Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Certificates
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Profile
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Settings
                    </a>
                </nav>

                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="mt-6 text-gray-300 hover:text-white"
                >
                    Close Menu
                </button>
            </div>

            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-gray-800 text-white"
                onClick={() => setIsSidebarOpen(true)}
            >
                Menu
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 bg-black min-h-screen p-4">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-white mb-2">
                        {getInitials("Jayden")}
                    </div>
                    <h2 className="text-xl font-bold text-white">Jayden's Dashboard</h2>
                </div>

                <nav className="flex flex-col gap-2 mt-6">
                    <a
                        href="#"
                        className="text-white bg-gray-800 py-3 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        My Projects
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Certificates
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Profile
                    </a>
                    <a
                        href="#"
                        className="text-gray-300 py-3 px-4 hover:bg-gray-800 rounded-lg transition"
                    >
                        Settings
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6 relative">
                {/* Notification Icon */}
                <div className="absolute top-6 right-6 z-10">
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="text-stone-200 focus:outline-none p-2 rounded-full hover:bg-gray-700/30 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            {notifications > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {notifications}
                                </span>
                            )}
                        </button>

                        {/* Notification dropdown */}
                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-md shadow-lg p-2 z-50">
                                <h3 className="text-stone-200 font-medium p-2 border-b border-gray-700">Notifications</h3>
                                <div className="py-2">
                                    <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                                        <p className="text-stone-200 text-sm">Your project "CollabNest" has been reviewed</p>
                                        <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                                    </div>
                                    <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                                        <p className="text-stone-200 text-sm">New meeting scheduled for tomorrow</p>
                                        <p className="text-gray-400 text-xs mt-1">Yesterday</p>
                                    </div>
                                    <div className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                                        <p className="text-stone-200 text-sm">Certificate available for "React Basics"</p>
                                        <p className="text-gray-400 text-xs mt-1">2 days ago</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-700 p-2">
                                    <a href="#" className="text-sm text-stone-200 hover:text-stone-400 flex justify-center">
                                        View all notifications
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="lg:hidden flex items-center mb-4">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-stone-200 focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Welcome Section */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Welcome back, Jayden!</h1>
                </div>

                {/* Project Section */}
                <div className="border-[0.1px] border-gray-400/30 p-4 rounded-xl mb-6 flex items-center justify-between" style={{ backgroundColor: darkBg }}>
                    <div>
                        <p className="text-white-300 mb-6 font-semibold">
                            Continue your project
                        </p>
                        <h2 className="text-xl font-semibold mb-1">CollabNest</h2>
                        <p className="text-sm text-gray-400 max-w-2xl mb-4">
                            A structured project-based learning platform connecting students
                            with mentors &amp; professionals for hands-on experience.
                        </p>
                    </div>
                    <button
                        className="px-6 py-2 rounded-xl transition-colors text-black font-medium"
                        style={{ backgroundColor: accentColorLight }}
                    >
                        Continue
                    </button>
                </div>

                {/* Recommended Projects*/}
                <section className="mb-8 rounded-md">
                    <h2 className="text-xl font-semibold mb-4">Recommended Projects</h2>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search for projects"
                            className="w-full rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 ring-opacity-50"
                            style={{ backgroundColor: darkBgSecondary }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            className="w-5 h-5 text-grey-300 absolute left-3 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 21l-4.35-4.35" />
                            <path d="M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer rounded-md p-4 hover:bg-grey-700 transition-colors"
                            >
                                <div className="w-full h-30 rounded mb-3 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            (e.target as HTMLImageElement).src = "/api/placeholder/400/320";
                                            (e.target as HTMLImageElement).alt = "Project thumbnail";
                                        }}
                                    />
                                </div>
                                <h3 className="font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-300">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Meetings Section */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Scheduled Meets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-gray-300/30 rounded-xl p-4">
                            {scheduledMeets.length === 0 ? (
                                <p className="text-gray-400 text-sm">No meets scheduled yet.</p>
                            ) : (
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-stone-600 text-left">
                                            <th className="pb-2">Time</th>
                                            <th className="pb-2">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {scheduledMeets.map((meet, idx) => (
                                            <tr key={idx} className="border-b border-stone-600">
                                                <td className="py-2">{meet.time}</td>
                                                <td className="py-2">{meet.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-black border border-gray-300 p-8 rounded-md shadow-lg relative w-full max-w-5xl">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-2 right-2 text-gray-300 hover:text-gray-400 text-2xl"
                        >
                            &times;
                        </button>
                        <div className="w-full h-64 bg-gray-300 mb-6 rounded flex items-center justify-center">
                            <span className="text-stone-400">Project Image</span>
                        </div>
                        <h2 className="text-3xl font-semibold mb-4">
                            {selectedProject.title}
                        </h2>
                        <p className="text-stone-200">{selectedProject.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDashboard;