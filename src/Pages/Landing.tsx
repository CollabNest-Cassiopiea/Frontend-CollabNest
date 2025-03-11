import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const MentorPlatform: React.FC = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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
      description: "Professors can integrate real-world projects into their curriculum, monitor student participation, and collaborate with industry mentors. They gain access to analytics on student performance, and build connections between academic theory and practical applications.",
      image: "/images/professor.png"
    }
  ];

  const handleGetStarted = () => {
    navigate('/login');
  };

  // Custom colors - using Avocado's dark theme with green accents
  const darkBg = "#121212";
  const darkBgSecondary = "#1a1a1a";
  const darkBgTertiary = "#222222";
  const accentColor = "#38E078"; // Avocado green instead of teal
  const accentColorLight = "#38E078"; // Lighter green

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main style={{ backgroundColor: darkBg }} className="text-gray-200">
        {/* Hero Section*/}
        <section
          className="relative text-white min-h-screen flex items-center py-12 md:py-16"
          style={{
            backgroundImage: 'url("/images/hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: darkBg, opacity: 0.6 }}></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 text-white">Learn by Doing.</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8" style={{ color: accentColor }}>Grow with Mentors.</h2>
            <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6 md:mb-10 text-gray-300">
              A structured project-based learning platform connecting
              students with mentors & professors for hands-on
              experience.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-6 py-2 md:px-8 md:py-3 text-lg md:text-xl font-medium transition-colors duration-300 cursor-pointer rounded-md min-w-[160px] hover:opacity-90"
              style={{ backgroundColor: accentColor, color: "#121212" }}
            >
              GET STARTED
            </button>
          </div>
        </section>

        {/* How It Works Section*/}
        <section className="py-12 md:py-20" style={{ backgroundColor: darkBgSecondary }}>
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16"><span style={{ color: accentColor }}>How</span> It Works?</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  title: "Browse & Apply",
                  description: "Students find projects based on their tech stack & apply"
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  title: "Work with Mentors",
                  description: "Mentors guide students through real-world tasks."
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
                  title: "Track & Submit",
                  description: "Students track progress, complete tasks & get feedback."
                }
              ].map((card, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: darkBgTertiary }}
                  className="p-6 md:p-10 rounded-4xl text-center transition-transform hover:scale-105"
                >
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center rounded-full border"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      borderColor: `${accentColor}30`
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: accentColor }}
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h3
                    className="text-lg md:text-xl font-semibold mb-2 md:mb-4"
                    style={{ color: accentColorLight }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles Carousel Section */}
        <section className="relative py-12 md:py-t-8" style={{ backgroundColor: darkBg }}>
          <div className="container mx-auto sm:px-6 relative z-10">
            <h4 className="text-center text-white mb-8 md:mb-12 text-3xl md:text-4xl font-bold">
              Choose Your Role, <span style={{color: accentColor}}>Shape Your Learning </span>
            </h4>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {roles.map((role, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center px-4 md:px-30 ml-10">
                      {/* Text Content */}
                      <div className="space-y-6 text-white px-4 md:px-0">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                          {role.title}
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg">
                          {role.description}
                        </p>
                      </div>

                      {/* Image */}
                      <div className="hidden md:block">
                        <img
                          src={role.image}
                          alt={role.title}
                          className="w-auto h-[250px] object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {roles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (api) {
                        api.scrollTo(index);
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-500'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center mt-8 space-x-4">
                <CarouselPrevious className="text-white" />
                <CarouselNext className="text-white" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Why CollabNest Section */}
        <section
          className="py-12 md:py-16 overflow-hidden"
          style={{ backgroundColor: darkBgSecondary }}
        >
          <div className="container mx-auto px-6 sm:px-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
                <img
                  src="/images/hero_illustration.svg"
                  alt="illustration"
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto px-4 md:pl-0 md:pr-8 md:ml-25 opacity-80"
                />
              </div>
              <div
                style={{ backgroundColor: darkBgTertiary }}
                className="w-full md:w-1/2 p-6 md:p-8 rounded-l-lg md:rounded-l-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white">
                  Why CollabNest?
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {[
                    { num: 1, title: "Real-world Learning", desc: "Work on practical projects, not just theory." },
                    { num: 2, title: "Experienced Mentors", desc: "Get guidance from industry experts & professors." },
                    { num: 3, title: "Skill Growth", desc: "Improve problem-solving & collaboration skills." },
                    { num: 4, title: "Networking Opportunities", desc: "Connect with mentors & peers." },
                    { num: 5, title: "Structured Pathway", desc: "Learn in a goal-oriented environment." }
                  ].map((item, index) => (
                    <div key={index} className="text-black flex items-start">
                      <div
                        className="flex-shrink-0 mr-3 md:mr-4 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: accentColor }}
                      >
                        <span className="text-sm-black md:text-base font-bold">{item.num}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm md:text-base">{item.title}</p>
                        <p className="text-gray-400 text-sm md:text-base">— {item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20" style={{ backgroundColor: darkBg }}>
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white">
              Ready to build <span className="block sm:inline" style={{ color: accentColor }}>real world projects?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Join thousands of successful mentors and educators on CollabNest and
              transform your expertise into impact. We provide the tools and support you need
              to guide students through real-world projects across various domains, from
              technology to research and innovation.
            </p>
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 md:px-8 md:py-3 text-base md:text-lg font-medium transition-colors duration-300 cursor-pointer rounded-md min-w-[160px] hover:opacity-90"
              style={{ backgroundColor: accentColor, color: "#121212" }}
            >
              SIGN UP NOW
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MentorPlatform;