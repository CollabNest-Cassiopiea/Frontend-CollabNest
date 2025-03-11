import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage: React.FC = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-black overflow-y-auto relative">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-90"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90"></div>

      {/* Main content */}
      <div className="flex flex-col h-full w-full relative z-10">
        {/* Logo section */}
        <div className="w-full text-center pt-16 md:pt-24 lg:pt-32 mt-25">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-1 drop-shadow-lg">
            CollabNest
          </h1>
          <p className="text-xl md:text-2xl text-green-400 drop-shadow-md">
            Collaborate. Create. Elevate.
          </p>
        </div>

        {/* Login form */}
        <div className="flex-grow flex items-center justify-center mt-8">
          <div className="w-full max-w-md px-4">
            <div className="w-full backdrop-blur-md bg-black/30 p-6 rounded-lg border border-gray-800">
              <form onSubmit={handleSubmit}>
                <p className="text-3xl md:text-2xl font-bold text-green-400 mb-4 text-center">
                  Sign In
                </p>

                {/* Microsoft Sign-in Button */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="bg-green-950 text-white py-3 rounded-full text-sm hover:bg-green-900 transition duration-300 w-full max-w-xs flex items-center justify-center cursor-pointer transform hover:scale-105 active:scale-95" onClick={()=>navigate("/register")}
                  >
                    <svg
                      className="h-4 w-4 mr-2"
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

                {/* Instruction Text */}
                <div className="flex justify-center mt-5 mb-4">
                  <p className="text-gray-400 text-sm">
                    Use your IIT Patna Microsoft account
                  </p>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-4 flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                    required
                  />
                  <label htmlFor="acceptTerms" className="text-gray-400 text-sm cursor-pointer">
                    I Accept terms and conditions &
                    <span className="text-green-400"> privacy policy</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
