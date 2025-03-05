import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../Pages/Landing"; 
import SignupPage from "../Pages/signup";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorPlatform />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
