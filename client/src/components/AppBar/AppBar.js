import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppBar.css";
import { toast } from "react-hot-toast";

const AppBar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.success("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <div className="appbar-container">
      <Link className="nav-item" to="/menu">
        KHABAR
      </Link>
      <div className="nav-options">
        <Link className="nav-item" to="/menu">
          Menu
        </Link>
        <Link className="nav-item" onClick={handleLogOut}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
