import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../Pages/Landing"; // Landing Page
import LoginPage from "../Pages/signup"; // Login Page
import StudentDashboard from "../Pages/student_dashboard"; // Student Dashboard Page

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorPlatform />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student_dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

