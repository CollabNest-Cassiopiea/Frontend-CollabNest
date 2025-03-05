import React, { useState } from "react";

const SignupPage: React.FC = () => {
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

  return (
    <div className="flex h-screen w-full">
      {/* Left side with solid color background */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-green-300 to-green-600 text-white p-12 flex-col justify-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">CollabNest</h1>
          <p className="text-xl">Collaborate. Create. Elevate.</p>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Register</h2>
            <p className="text-gray-600">
              Already have an account ?
              <a href="#" className="text-blue-500 hover:underline ml-1">
                Sign In
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 uppercase text-xs font-semibold mb-2"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 uppercase text-xs font-semibold mb-2"
              >
                EMAIL ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-700 uppercase text-xs font-semibold mb-2"
              >
                PHONE NO
              </label>
              <div className="flex">
                <span className="text-gray-500 border-b border-gray-300 py-2 pr-2">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 uppercase text-xs font-semibold mb-2"
              >
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
                placeholder="••••••"
                required
              />
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="acceptTerms" className="text-gray-600 text-sm">
                I Accept terms and conditions & privacy policy
              </label>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
              >
                LOGIN
              </button>
            </div>

            <div className="text-center mb-6">
              <p className="text-gray-600 text-sm">Login with</p>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                  Facebook
                </span>
              </button>
              <button
                type="button"
                className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500 transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </span>
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition duration-300"
              >
                <span className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm6.9 8.1c-.1 2.1-.6 7.1-3.3 8.7-2.7 1.6-5.5-2.1-6.9-4.2-.9-1.4-1.8-2.9-2.3-4.4 1.8-1.3 4-2.1 6.5-2.1 2.1 0 4.1.7 5.7 1.9l.3.1z" />
                  </svg>
                  Google+
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
