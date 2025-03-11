import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../Pages/Landing"; // Landing Page
import LoginPage from "../Pages/signup"; // Login Page
import StudentHome from "../Pages/Student_Dashboard/home"; // Student Dashboard Page
import Home from "../Pages/mentor_dashboard/home"; // Home Page
import Project from "../Pages/mentor_dashboard/projects"; // Projects Page
import Profile from "../Pages/mentor_dashboard/profile"; // Profile Page
import StudentProfile from "../Pages/Student_Dashboard/profile"; // Student Profile Page
import Certificates from "../Pages/Student_Dashboard/certificates"; // Certificates Page
import StudentProjects from "../Pages/Student_Dashboard/myproject"; // Student Projects Page


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorPlatform />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/student_profile" element={<StudentProfile/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/student/projects" element={<StudentProjects/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

