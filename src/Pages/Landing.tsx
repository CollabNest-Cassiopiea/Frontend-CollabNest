import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MentorPlatform: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  const roles = [
    {
      title: "Student",
      description: "Students have access to a personalized dashboard where they can browse and apply for projects based on their selected tech stack. Once accepted, they can track their project progress, view assigned tasks, submit work, and receive mentor guidance. The dashboard provides clear deadlines, milestones, and submission history, ensuring structured learning.",
      image: "/images/student.png"
    },  
    {
      title: "Mentor",
      description: "Mentors can create and manage projects, review student applications, and provide guidance throughout the project lifecycle. They can set tasks, review submissions, provide feedback, and track student progress. The platform offers tools for communication, code review, and milestone management, making mentorship efficient and impactful.",
      image: "/images/mentor.jpg"
    },
    {
      title: "Professor",
      description: "Professors can integrate real-world projects into their curriculum, monitor student participation, and collaborate with industry mentors. They gain access to analytics on student performance, can create custom learning paths aligned with course objectives, and build connections between academic theory and practical applications.",
      image: "/images/professor.png"
    }
  ];

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-emerald-900/50 z-10"></div>
        <div className="absolute inset-0 bg-black z-0">
          {/* Background image would be here in production */}
          <div className="w-full h-full bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-6 flex flex-col justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Learn by Doing.</h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Grow with Mentors.</h2>
          <p className="text-xl md:text-2xl max-w-2xl mb-10">
            A structured project-based learning platform connecting
            students with mentors & professors for hands-on
            experience.
          </p>
          <div>
            <button 
              onClick={handleGetStarted} 
              className="border-2 border-white px-6 py-2 text-lg font-medium hover:bg-white hover:text-black transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-purple-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse & Apply</h3>
              <p className="text-gray-600">
                Students find projects based on their tech stack & apply
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-pink-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Work with Mentors</h3>
              <p className="text-gray-600">
                Mentors guide students through real-world tasks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Track & Submit</h3>
              <p className="text-gray-600">
                Students track progress, complete tasks & get feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Role Section with Carousel */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-white font-bold text-center mb-16">Choose Your Role, Shape Your Learning</h2>
          
          {/* Carousel */}
          <div className="relative">
            {/* Slide Content */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-3/5 pl-8 md:pl-16">
                <h3 className="text-3xl text-white font-bold mb-6">{roles[activeSlide].title}</h3>
                <p className="text-white mb-6">
                  {roles[activeSlide].description}
                </p>
              </div>
              <div className="md:w-1/2">
              <div className="max-w-md mx-auto">
                <img 
                  src={roles[activeSlide].image}
                  alt={`${roles[activeSlide].title} role illustration`}
                  className="rounded-lg shadow-md w-full h-auto"
                />
                </div>
              </div>
            </div>

            {/* Slide Navigation Arrows */}
            <button 
              onClick={() => goToSlide((activeSlide - 1 + roles.length) % roles.length)} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none md:-left-5"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => goToSlide((activeSlide + 1) % roles.length)} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none md:-right-5"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {roles.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-gray-800' : 'bg-gray-300'} transition-colors duration-200`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Ready to build real world projects?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Join thousands of successful mentors and educators on CollabNest and 
            transform your expertise into impact. We provide the tools and support you need 
            to guide students through real-world projects across various domains, from 
            technology to research and innovation.
          </p>
          <button 
            onClick={handleGetStarted} 
            className="bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition duration-300"
          >
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MentorPlatform;