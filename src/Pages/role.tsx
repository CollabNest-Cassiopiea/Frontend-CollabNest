import React, { useState } from 'react';

const RoleSelectionPage = () => {
  const [selectedRole, setSelectedRole] = useState('student');

  const handleRoleChange = (role:any) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full text-white px-4 py-8 relative overflow-hidden">
      {/* Background image with horizontal fade effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/code.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)',
        }}
      ></div>
      
      {/* Horizontal gradient overlay for fading effect - stronger fade to right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-black/100 to-black bright" ></div>

      {/* Branding */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left lg:absolute lg:left-12 lg:top-2/4 lg:transform lg:-translate-y-1/2 z-10">
        <h1 className="text-xl sm:text-7xl font-bold">CollabNest</h1>
        <p className="text-green-400 text-lg sm:text-xl mt-2">Collaborate. Create. Elevate.</p>
      </div>

      {/* Modified Glass Container */}
      <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-12 mt-4 relative z-10">
        <div className="absolute inset-0 bg-green-400/10 blur-2xl rounded-lg animate-pulse"></div>
        <div className="relative bg-stone-950/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border border-gray-700/30">
          {/* All existing content remains unchanged below this line */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
            Select Your Role
          </h2>

          {/* Role selection navbar */}
          <div className="flex justify-center mb-6 border-b border-gray-700 overflow-x-auto pb-1">
            <button
              className={`px-3 sm:px-4 py-2 mx-1 whitespace-nowrap ${
                selectedRole === 'student'
                  ? 'text-green-400 border-b-2 border-green-400'
                  : 'text-gray-400'
              }`}
              onClick={() => handleRoleChange('student')}
            >
              Student
            </button>
            <button
              className={`px-3 sm:px-4 py-2 mx-1 whitespace-nowrap ${
                selectedRole === 'mentor'
                  ? 'text-green-400 border-b-2 border-green-400'
                  : 'text-gray-400'
              }`}
              onClick={() => handleRoleChange('mentor')}
            >
              Mentor
            </button>
            <button
              className={`px-3 sm:px-4 py-2 mx-1 whitespace-nowrap ${
                selectedRole === 'professor'
                  ? 'text-green-400 border-b-2 border-green-400'
                  : 'text-gray-400'
              }`}
              onClick={() => handleRoleChange('professor')}
            >
              Professor
            </button>
          </div>

          {/* Dynamic form based on selected role */}
          <form className="space-y-6 sm:space-y-8">
            {/* Student Form */}
            {selectedRole === 'student' && (
              <>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Skills (e.g. JavaScript, React)"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Projects Completed"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="tel"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Phone Number (+91 123 456 7890)"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Education Background"
                  />
                </div>
              </>
            )}

            {/* Mentor Form */}
            {selectedRole === 'mentor' && (
              <>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Technical Expertise"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Mentoring Experience"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Contact Information"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Industry Experience"
                  />
                </div>
              </>
            )}

            {/* Professor Form */}
            {selectedRole === 'professor' && (
              <>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Academic Qualifications"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Research Specialization"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="University Affiliation"
                  />
                </div>
                <div className="border-b border-gray-700 pb-1">
                  <input
                    type="text"
                    className="w-full bg-transparent placeholder-gray-500 focus:outline-none p-2 text-sm"
                    placeholder="Teaching Experience"
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-green-500/90 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors mt-8 text-sm shadow-lg shadow-black/20"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;