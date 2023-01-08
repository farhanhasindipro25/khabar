import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>
        Welcome to Khabar. <Link to="/signup">Sign Up</Link> for an account now!
      </h2>
    </div>
  );
};

export default Home;
