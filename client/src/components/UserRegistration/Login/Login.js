import React from "react";
import "./Login.css";
import useTitle from "../../../hooks/useTitle";
import { Link } from "react-router-dom";

const Login = () => {
  useTitle("Login");
  return (
    <div>
      <div className="login-text">
        <h2 className="login-heading">Welcome back to Khabar!</h2>
        <p className="login-sub-heading">
          Please login to order your next meal.
        </p>
      </div>
      <div>
        <form className="login-form">
          <div className="input-email">
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter Your Email ID" />
          </div>
          <div className="input-password">
            <label htmlFor="password">Your Password</label>
            <input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="login-button">
            <button>LOGIN</button>
          </div>
        </form>
        <p className="login-toggler">
          Don't have an account?{" "}
          <Link className="to-signup" to="/signup">
            Sign Up Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
