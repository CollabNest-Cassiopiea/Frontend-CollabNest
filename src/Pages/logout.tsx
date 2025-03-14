import { useAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logoutpage: React.FC = () => {
  const { logout } = useAuthStore()
  let navigate = useNavigate();
  
  const logoutHandler = async() => {
    await logout();
    navigate('/');
  }

  useEffect(() => {
    logoutHandler()
  }, [])

  return (
    <>Logout...</>
  );
};

export default Logoutpage;
