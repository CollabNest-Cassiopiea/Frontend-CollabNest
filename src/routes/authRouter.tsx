import { useEffect, ReactNode } from "react";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from 'react-router-dom';

export const RedirectAuthenticatedUser = ({ children, href}: {children: ReactNode, href?: string }) => {
    let navigate = useNavigate();
    const {isAuthenticated, user} = useAuthStore();
    
    useEffect(() => {
        if (isAuthenticated) {
            if (!href && user && user.role === "STUDENT") navigate("/student");
            else if (!href && user && user.role === "MENTOR") navigate("/mentor");
            else if (!href) navigate("/");
            else navigate(href);
        }
    }, [isAuthenticated, user, navigate, href])
    
    return children;
};

export const ProtectedRoutes = ({ children, href, student, mentor, professor, admin }: {children: ReactNode, href?: string, student?: boolean, mentor?: boolean, professor?: boolean, admin?: boolean }) => {
    // selectd roles can only view this page
    let navigate = useNavigate();
    const {isAuthenticated, user} = useAuthStore();
    console.log(user);
    if (user) {
        console.log((mentor && user.role === "MENTOR")||
        (student && user.role === "STUDENT")||
        (professor && user.role === "PROFESSOR")||
        (admin && user.role === "ADMIN"));  
    }
    console.log(user);
    useEffect(() => {
        if (!isAuthenticated || !user) {
            navigate('/login');
        } else if (
            !((mentor && user.role === "MENTOR")||
            (student && user.role === "STUDENT")||
            (professor && user.role === "PROFESSOR")||
            (admin && user.role === "ADMIN"))
        ) {
            navigate('/');
        } 
    }, [isAuthenticated, user, navigate, mentor, student, href, professor, admin])
    
    return children;
};