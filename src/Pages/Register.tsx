import React, { useState } from 'react';

const RegistrationForm = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <div className="text-3xl font-bold">CollabNest</div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center cursor-pointer hover:text-green-400 transition-colors duration-300">
            <div className="mr-2 bg-gray-700 rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <span>Assist</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-green-400 transition-colors duration-300">
            <div className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span>My</span>
          </div>
          <button className="bg-gray-700 text-white rounded px-4 py-2 hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out">
            Join Now
          </button>
          <button className="bg-gray-700 text-white rounded px-8 py-2 hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out">
            Login
          </button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-px bg-gray-700 -z-10"></div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 z-10">1</div>
          <div>Find</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 z-10">2</div>
          <div>Select role</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 z-10">3</div>
          <div>Input data</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center mb-2 z-10">4</div>
          <div>Personal info</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center mb-2 z-10">5</div>
          <div>Additional info</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center mb-2 z-10">6</div>
          <div>Payment</div>
        </div>
      </div>

      {/* Form Title */}
      <h1 className="text-3xl font-bold mb-12">Role Selection</h1>

      {/* Personal Information Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <p className="text-gray-400 mb-8">Enter your details</p>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-600 rounded px-4 py-3 mb-6 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-2">Roll Number</label>
            <input
              type="text"
              placeholder="Student ID"
              className="w-full bg-gray-600 rounded px-4 py-3 mb-6 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-2">Skills</label>
            <input
              type="text"
              placeholder="Your Skills"
              className="w-full bg-gray-600 rounded px-4 py-3 mb-6 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-2">Current Year</label>
            <input
              type="text"
              placeholder="Year of Study"
              className="w-full bg-gray-600 rounded px-4 py-3 mb-6 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block mb-2">Select Role</label>
            <div className="flex space-x-8 mt-2">
              <label className="flex items-center space-x-2 cursor-pointer hover:text-green-400 transition-colors duration-300">
                <input
                  type="radio"
                  name="role"
                  className="form-radio text-green-500 focus:ring-green-500"
                  onChange={() => handleRoleChange('Student')}
                  checked={selectedRole === 'Student'}
                />
                <span>Student</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-green-400 transition-colors duration-300">
                <input
                  type="radio"
                  name="role"
                  className="form-radio text-green-500 focus:ring-green-500"
                  onChange={() => handleRoleChange('Mentor')}
                  checked={selectedRole === 'Mentor'}
                />
                <span>Mentor</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer hover:text-green-400 transition-colors duration-300">
                <input
                  type="radio"
                  name="role"
                  className="form-radio text-green-500 focus:ring-green-500"
                  onChange={() => handleRoleChange('Professor')}
                  checked={selectedRole === 'Professor'}
                />
                <span>Professor</span>
              </label>
            </div>
          </div>
          
          {selectedRole === 'Professor' && (
            <div>
              <label className="block mb-2">Department</label>
              <select className="w-full bg-gray-600 rounded px-4 py-3 mb-6 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">
                <option value="">Select Department</option>
                <option value="cs">Computer Science</option>
                <option value="ee">Electrical Engineering</option>
                <option value="me">Mechanical Engineering</option>
                <option value="ce">Civil Engineering</option>
                <option value="mme">Metallurgical  Engineering</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Role Confirmation */}
      <div className="bg-gray-800 p-6 rounded mb-8 hover:bg-gray-700 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Role Confirmation</h3>
          <label className="flex items-center space-x-2 cursor-pointer hover:text-green-400 transition-colors duration-300">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={() => setConfirmed(!confirmed)}
              className="form-checkbox text-green-500 focus:ring-green-500"
            />
            <span>I confirm</span>
          </label>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white rounded px-8 py-3 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out active:bg-gray-900 active:scale-95">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;