import React from "react";
import "./Signup.css";
import useTitle from "../../../hooks/useTitle";
import { Link } from "react-router-dom";

const Signup = () => {
  useTitle("Sign Up");
  return (
    <div>
      <div className="signup-text">
        <h2 className="signup-heading">
          Hungry Already? We can't wait to deliver your khabar in your doorstep!
        </h2>
        <p className="signup-sub-heading">
          Please Sign Up for an account to get started.
        </p>
      </div>
      <div>
        <form className="signup-form">
          <div className="input-name">
            <label htmlFor="name">Your Full Name</label>
            <input type="text" placeholder="Enter Your Full Name" />
          </div>
          <div className="input-email">
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter Your Email ID" />
          </div>
          <div className="input-password">
            <label htmlFor="password">Your Password</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="signup-button">
            <button>SIGN UP</button>
          </div>
        </form>
        <p className="signup-toggler">
          Already have an account?{" "}
          <Link className="to-login" to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
