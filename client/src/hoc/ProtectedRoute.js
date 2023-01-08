import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return (
    <div>
      <AppBar></AppBar>
      {children}
    </div>
  );
};

export default ProtectedRoute;
