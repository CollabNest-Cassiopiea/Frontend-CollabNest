import React from 'react';

interface ProfileStats {
  projects: number;
  certificates: number;
  skills: number;
  mentors: number;
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  years: string;
}

interface Skill {
  name: string;
  level: number; // 1-5
}

interface ProfileProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  email: string;
  location: string;
  website: string;
  stats: ProfileStats;
  education: Education[];
  skills: Skill[];
}

const Profile: React.FC = () => {
  // Mock profile data
  const profile: ProfileProps = {
    name: "Jayden Smith",
    title: "Computer Science Student",
    bio: "Passionate computer science student with interests in web development, AI, and UX design. Currently focused on building interactive web applications and expanding my skillset through hands-on projects.",
    profileImage: "/api/placeholder/400/400",
    email: "jayden.smith@example.com",
    location: "San Francisco, CA",
    website: "jaydensmith.dev",
    stats: {
      projects: 12,
      certificates: 8,
      skills: 24,
      mentors: 5
    },
    education: [
      {
        institution: "Stanford University",
        degree: "Bachelor of Science",
        field: "Computer Science",
        years: "2021 - Present"
      },
      {
        institution: "San Francisco Tech Academy",
        degree: "Certificate",
        field: "Web Development",
        years: "2020 - 2021"
      }
    ],
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 4 },
      { name: "Python", level: 4 },
      { name: "Node.js", level: 3 },
      { name: "TypeScript", level: 4 },
      { name: "HTML/CSS", level: 5 },
      { name: "UI/UX Design", level: 3 },
      { name: "SQL", level: 3 },
      { name: "Git", level: 4 }
    ]
  };

  // Function to render skill level
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i < level ? 'bg-green-500' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col">
        {/* Avatar and Title */}
        <div className="flex flex-col items-center pt-6 pb-8">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
          <h1 className="text-lg font-medium">Jayden's Projects</h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="px-4 flex-1">
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Home
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            My Projects
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Certificates
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg bg-gray-800 text-white mb-1">
            Profile
          </a>
          <a href="#" className="flex items-center py-3 px-4 rounded-lg text-white hover:bg-gray-800 mb-1">
            Settings
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h2 className="text-xl font-bold text-white">{profile.name}</h2>
                <p className="text-gray-400">{profile.title}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">📧</div>
                  <span className="ml-3 text-gray-300">{profile.email}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">📍</div>
                  <span className="ml-3 text-gray-300">{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">🌐</div>
                  <span className="ml-3 text-gray-300">{profile.website}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">{profile.stats.projects}</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">{profile.stats.certificates}</div>
                  <div className="text-gray-400 text-sm">Certificates</div>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">{profile.stats.skills}</div>
                  <div className="text-gray-400 text-sm">Skills</div>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">{profile.stats.mentors}</div>
                  <div className="text-gray-400 text-sm">Mentors</div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Edit Profile
              </button>
            </div>
          </div>
          
          {/* Main Content - Bio, Education, Skills */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">About</h2>
              <p className="text-gray-300">{profile.bio}</p>
            </div>
            
            {/* Education Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Education</h2>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-4">
                    <h3 className="text-white font-medium">{edu.institution}</h3>
                    <p className="text-gray-400">{edu.degree} in {edu.field}</p>
                    <p className="text-gray-500 text-sm">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;