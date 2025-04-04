import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorPlatform from "../pages/Landing";
import SignUp from "../pages/login";
import RoleSelectionPage from "../pages/role";
/*student*/
import StudentDashboard from "@/pages/student-dashboard/home";
import CertificatesPage from "@/pages/student-dashboard/certificates";
import StudentProjects from "@/pages/student-dashboard/projects";
import StudentProfile from "@/pages/student-dashboard/profile";
import StudentNotifications from "@/pages/student-dashboard/notifications";
import { ProjectDetailsPage } from "@/pages/student-dashboard/project-details";
// Mentor
import MentorDashboardPage from "@/pages/mentor-dashboard/home";
import MentorProjectsPage from "@/pages/mentor-dashboard/projects";
import MentorProfilePage from "@/pages/mentor-dashboard/profile";
import MentorNotificationsPage from "@/pages/mentor-dashboard/notifications";
import MentorApprovalsPage from "@/pages/mentor-dashboard/approvals";
//professor
import ProfessorDashboardPage from "@/pages/professor-dashboard/home";
import ProfessorProjectsPage from "@/pages/professor-dashboard/projects";
import ProfessorProfilePage from "@/pages/professor-dashboard/profile";
import ProfessorNotificationsPage from "@/pages/professor-dashboard/notifications";
import ProfessorApprovalsPage from "@/pages/professor-dashboard/approvals";

//auth
import { useAuthStore } from "@/store/authStore";
import { ProtectedRoutes, RedirectAuthenticatedUser } from "./authRouter";
import Logoutpage from "@/pages/logout";


const AppRouter: React.FC = () => {
    const {isCheckingAuth, checkAuth} = useAuthStore();
    useEffect(() => {
        if (isCheckingAuth) checkAuth();
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MentorPlatform />} />
                <Route path="/login" element={
                    <RedirectAuthenticatedUser>
                        <SignUp />
                    </RedirectAuthenticatedUser>
                } />
                <Route path="/role" element={<RoleSelectionPage />} />
                <Route path="/logout" element={<Logoutpage /> } />
                <Route path="/student" element={
                    <ProtectedRoutes student mentor admin>
                        <StudentDashboard />
                    </ProtectedRoutes>
                } />
                <Route path="/student/certificates" element={
                    <ProtectedRoutes student mentor admin>
                        <CertificatesPage />
                    </ProtectedRoutes>
                } />
                <Route path="/student/projects" element={
                    <ProtectedRoutes student mentor admin>
                        <StudentProjects />
                    </ProtectedRoutes>
                } />
                <Route path="/student/projects/:projectId" element={
                    <ProtectedRoutes student mentor admin>
                        <ProjectDetailsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/student/profile" element={
                    <ProtectedRoutes student mentor admin>
                        <StudentProfile />
                    </ProtectedRoutes>
                } />
                <Route path="/student/notifications" element={
                    <ProtectedRoutes student mentor admin>
                        <StudentNotifications />
                    </ProtectedRoutes>
                } />
                <Route path="/mentor" element={
                    <ProtectedRoutes professor mentor admin>
                        <MentorDashboardPage />
                    </ProtectedRoutes>
                } />
                <Route path="/mentor/projects" element={
                    <ProtectedRoutes professor mentor admin>
                        <MentorProjectsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/mentor/profile" element={
                    <ProtectedRoutes professor mentor admin>
                        <MentorProfilePage />
                    </ProtectedRoutes>
                } />
                <Route path="/mentor/notifications" element={
                    <ProtectedRoutes professor mentor admin>
                        <MentorNotificationsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/mentor/approvals" element={
                    <ProtectedRoutes professor mentor admin>
                        <MentorApprovalsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/professor" element={
                    <ProtectedRoutes professor mentor admin>
                        <ProfessorDashboardPage />
                    </ProtectedRoutes>
                } />
                <Route path="/professor/projects" element={
                    <ProtectedRoutes professor mentor admin>
                        <ProfessorProjectsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/professor/profile" element={
                    <ProtectedRoutes professor mentor admin>
                        <ProfessorProfilePage />
                    </ProtectedRoutes>
                } />
                <Route path="/professor/notifications" element={
                    <ProtectedRoutes professor mentor admin>
                        <ProfessorNotificationsPage />
                    </ProtectedRoutes>
                } />
                <Route path="/professor/approvals" element={
                    <ProtectedRoutes professor mentor admin>
                        <ProfessorApprovalsPage/>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    );
};

export default AppRouter;

