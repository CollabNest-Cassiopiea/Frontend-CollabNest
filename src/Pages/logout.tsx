import { useAuthStore } from "@/store/authStore";
import React, { useEffect } from "react";

const Loginpage: React.FC = () => {
  const { logout } = useAuthStore()
    
  useEffect(() => {
    logout();
  }, [])

  return (
    <>Logout...</>
  );
};

export default Loginpage;
