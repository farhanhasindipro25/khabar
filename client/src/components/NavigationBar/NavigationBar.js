import React, { useState } from "react";
import "./NavigationBar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/login");
    // localStorage.setItem("token", "");
  };
  return (
    <div>
      <div className="nav-container">
        {isLoggedIn ? (
          <React.Fragment>
            <Link to="/menu">Menu</Link>
            <Link onClick={handleLogOut}>Logout</Link>
            <Navigate to="/login"></Navigate>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
