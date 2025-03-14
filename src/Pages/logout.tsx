import { useAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";

const Logoutpage: React.FC = () => {
  const { logout } = useAuthStore()
    
  useEffect(() => {
    logout();
  }, [])

  return (
    <>Logout...</>
  );
};

export default Logoutpage;
