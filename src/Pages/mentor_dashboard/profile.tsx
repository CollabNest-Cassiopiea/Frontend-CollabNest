import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MentorSidebar from '../../components/mentor/sidebar';

interface Skill {
  name: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Profile data
  const [profile, setProfile] = useState({
    name: 'XYZ',
    email: 'xyz@gmail.com',
    bio: 'I am a data scientist with 5 years of experience. I have worked on numerous projects and am proficient in Python, Machine Learning, Deep Learning, and Natural Language Processing.',
    skills: [
      { name: 'Python' },
      { name: 'Data Science' },
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Natural Language Processing' }
    ]
  });

  // Handle navigation from sidebar
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Handle edit skills button
  const handleEditSkills = () => {
    console.log('Edit skills clicked');
    // Implement skills editing functionality
  };

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar Component */}
      <MentorSidebar 
        activePath={currentPath}
        mentorName="XYZ"
        onNavigate={handleNavigation}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>

        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            {/* Profile Avatar */}
            <div className="w-20 h-20 bg-white rounded-full overflow-hidden mr-4"></div>
            <div>
              <h2 className="text-xl font-bold">{profile.name}</h2>
              <p className="text-gray-400">{profile.email}</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-[#1A1A1A] rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
          <button 
            onClick={handleEditSkills} 
            className="px-4 py-2 bg-[#1A1A1A] rounded-md text-sm"
          >
            Edit Skills
          </button>
        </div>

        {/* Bio Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bio</h2>
          <p className="text-gray-300 leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;