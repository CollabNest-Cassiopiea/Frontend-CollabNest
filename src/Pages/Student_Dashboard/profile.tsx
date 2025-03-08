import React, { useState } from "react";
import { Edit2 } from "lucide-react";

interface Skill {
  id: string;
  name: string;
}

const MyProfile: React.FC = () => {
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  
  // Sample user data
  const user = {
    name: "xyz",
    email: "xyz@gmail.com",
    bio: "I am a data scientist with 5 years of experience. I have worked on numerous projects and am proficient in Python, Machine Learning, Deep Learning, and Natural Language Processing."
  };
  
  // Sample skills data
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "Python" },
    { id: "2", name: "Data Science" },
    { id: "3", name: "Machine Learning" },
    { id: "4", name: "Deep Learning" },
    { id: "5", name: "Natural Language Processing" }
  ]);
  
  const [newSkill, setNewSkill] = useState("");
  
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { id: Date.now().toString(), name: newSkill.trim() }]);
      setNewSkill("");
    }
  };
  
  const handleRemoveSkill = (skillId: string) => {
    setSkills(skills.filter(skill => skill.id !== skillId));
  };
  
  const handleEditSkills = () => {
    setIsEditingSkills(!isEditingSkills);
  };
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>
      
      <div className="flex items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4"></div>
        <div>
          <h2 className="text-lg font-semibold text-white">{user.name}</h2>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Skills</h3>
          <button 
            onClick={handleEditSkills} 
            className="text-sm text-gray-400 hover:text-white flex items-center"
          >
            <Edit2 size={14} className="mr-1" />
            Edit Skills
          </button>
        </div>
        
        {isEditingSkills ? (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map(skill => (
                <div 
                  key={skill.id} 
                  className="bg-gray-800 rounded-md px-3 py-1 text-sm flex items-center"
                >
                  <span>{skill.name}</span>
                  <button 
                    onClick={() => handleRemoveSkill(skill.id)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex">
              <input
                type="text"
                value={newSkill}
                onChange={e => setNewSkill(e.target.value)}
                placeholder="Add a new skill"
                className="flex-1 bg-[#1a1a1a] text-white border border-gray-700 px-3 py-2 rounded-l-md text-sm focus:outline-none focus:border-gray-600"
              />
              <button
                onClick={handleAddSkill}
                className="bg-gray-700 text-white px-4 py-2 rounded-r-md text-sm hover:bg-gray-600 transition"
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span 
                key={skill.id} 
                className="bg-gray-800 rounded-md px-3 py-1 text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Bio</h3>
        <p className="text-gray-300 leading-relaxed">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;