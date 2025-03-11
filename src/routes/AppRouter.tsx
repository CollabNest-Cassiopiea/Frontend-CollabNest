import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../pages/landing";
import SignUp from "../pages/login";
/*student*/
import StudentDashboard from "@/pages/student-dashboard/home";
import CertificatesPage from "@/pages/student-dashboard/certificates";
import StudentProjects from "@/pages/student-dashboard/projects";
import StudentProfile from "@/pages/student-dashboard/profile";
import StudentNotifications from "@/pages/student-dashboard/notifications";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MentorPlatform />} />
                <Route path="/login" element={<SignUp />} />
                <Route path="/student/home" element={<StudentDashboard />} />
                <Route path="/student/certificates" element={<CertificatesPage />} />
                <Route path="/student/projects" element={<StudentProjects />} />
                <Route path="/student/profile" element={<StudentProfile />} />
                <Route path="/student/notifications" element={<StudentNotifications />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

