import React, { useState } from "react";

const Loginpage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  // Using the hero.png image from the public/images directory
  const heroImagePath = "/images/hero.png";
  
  // Define a more vibrant green color for both the button and text
  const greenColor = "#00cc66"; // Brighter, more vibrant green

  return (
    <div className="flex flex-col h-screen w-full bg-black overflow-y-auto">
      {/* Top logo for mobile and tablets (md:hidden) */}
      <div className="md:hidden w-full text-center pt-6 pb-4">
        <h1 className="text-4xl font-bold text-white mb-1">CollabNest</h1>
        <p className="text-lg" style={{ color: greenColor }}>Collaborate. Create. Elevate.</p>
      </div>

      <div className="flex flex-grow w-full">
        {/* Left side with hero image - hidden on mobile, shown on md screens and up */}
        <div 
          className="hidden md:flex md:w-1/2 bg-cover bg-center text-white p-8 lg:p-12 flex-col justify-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImagePath})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Fade effect on the right edge of the image */}
          <div 
            className="absolute top-0 right-0 h-full w-16"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))'
            }}
          ></div>
          
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-2">CollabNest</h1>
            <p className="text-xl lg:text-2xl xl:text-3xl" style={{ color: greenColor }}>Collaborate. Create. Elevate.</p>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 bg-black px-4 py-8 sm:px-8 md:px-8 lg:px-12 flex items-center justify-center">
          <div className="w-full max-w-md backdrop-blur-md bg-black/30 p-5 sm:p-6 rounded-lg border border-gray-800 shadow-xl" style={{
            background: 'rgba(20, 20, 20, 0.6)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <div className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Register</h2>
              <p className="text-gray-400 text-sm">
                Already have an account?
                <a href="#" className="hover:underline ml-1 cursor-pointer" style={{ color: greenColor }}>
                  Sign In
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-300 uppercase text-xs font-semibold mb-1 sm:mb-2"
                >
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-b border-gray-600 focus:border-gray-400 focus:outline-none text-white"
                  required
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 uppercase text-xs font-semibold mb-1 sm:mb-2"
                >
                  EMAIL ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-b border-gray-600 focus:border-gray-400 focus:outline-none text-white"
                  required
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-300 uppercase text-xs font-semibold mb-1 sm:mb-2"
                >
                  PHONE NO
                </label>
                <div className="flex">
                  <span className="text-gray-400 border-b border-gray-600 py-2 pr-2">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-transparent border-b border-gray-600 focus:border-gray-400 focus:outline-none text-white"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-300 uppercase text-xs font-semibold mb-1 sm:mb-2"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border-b border-gray-600 focus:border-gray-400 focus:outline-none text-white"
                  placeholder="••••••"
                  required
                />
              </div>

              <div className="mb-3 sm:mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mr-2 cursor-pointer"
                  required
                />
                <label htmlFor="acceptTerms" className="text-gray-400 text-xs sm:text-sm cursor-pointer">
                  I Accept terms and conditions & 
                  <span style={{ color: greenColor }}> privacy policy</span>
                </label>
              </div>

              <div className="mb-3 sm:mb-4">
                <button
                  type="submit"
                  className="w-full text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
                  style={{ 
                    backgroundColor: greenColor,
                    boxShadow: `0 4px 10px rgba(0, 204, 102, 0.25)` // Reduced glow effect
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#00b359"; // Darker green on hover
                    e.currentTarget.style.boxShadow = `0 6px 15px rgba(0, 204, 102, 0.4)`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = greenColor;
                    e.currentTarget.style.boxShadow = `0 4px 10px rgba(0, 204, 102, 0.25)`;
                  }}
                >
                  LOGIN
                </button>
              </div>

              <div className="text-center mb-3 sm:mb-4">
                <p className="text-gray-400 text-xs sm:text-sm">or</p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-green-950 text-white py-2 sm:py-3 rounded-full text-xs sm:text-sm hover:bg-green-900 transition duration-300 w-full max-w-xs flex items-center justify-center cursor-pointer transform hover:scale-105 active:scale-95"
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 50, 20, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 50, 20, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 50, 20, 0.3)';
                  }}
                >
                  <svg
                    className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2"
                    fill="currentColor"
                    viewBox="0 0 23 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h11v11H0z" fill="#f25022" />
                    <path d="M12 0h11v11H12z" fill="#7fba00" />
                    <path d="M0 12h11v11H0z" fill="#00a4ef" />
                    <path d="M12 12h11v11H12z" fill="#ffb900" />
                  </svg>
                  Sign in with Microsoft
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;