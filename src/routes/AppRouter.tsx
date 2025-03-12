import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../pages/Landing";
import SignUp from "../pages/login";
/*student*/
import StudentDashboard from "@/pages/student-dashboard/home";
import CertificatesPage from "@/pages/student-dashboard/certificates";
import StudentProjects from "@/pages/student-dashboard/projects";
import StudentProfile from "@/pages/student-dashboard/profile";
import StudentNotifications from "@/pages/student-dashboard/notifications";
import MentorDashboardPage from "@/pages/mentor-dashboard/home";
import MentorProjectsPage from "@/pages/mentor-dashboard/projects";
import MentorProfilePage from "@/pages/mentor-dashboard/profile";
import MentorNotificationsPage from "@/pages/mentor-dashboard/notifications";
import MentorApprovalsPage from "@/pages/mentor-dashboard/approvals";
import RoleSelectionPage from "@/pages/role";


const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MentorPlatform />} />
                <Route path="/login" element={<SignUp />} />
                <Route path="/role" element={<RoleSelectionPage />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/student/certificates" element={<CertificatesPage />} />
                <Route path="/student/projects" element={<StudentProjects />} />
                <Route path="/student/profile" element={<StudentProfile />} />
                <Route path="/student/notifications" element={<StudentNotifications />} />
                <Route path="/mentor" element={<MentorDashboardPage />} />
                <Route path="/mentor/projects" element={<MentorProjectsPage />} />
                <Route path="/mentor/profile" element={<MentorProfilePage />} />
                <Route path="/mentor/notifications" element={<MentorNotificationsPage />} />
                <Route path="/mentor/approvals" element={<MentorApprovalsPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;

