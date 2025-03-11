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

export default Sidebar;