import React, { useState } from "react";
import "./Signup.css";
import useTitle from "../../../hooks/useTitle";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Signup = () => {
  useTitle("Sign Up");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
    setSignUpError("");

    try {
      const body = { name, email, password };
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      // Parsing the response back to JSON
      const result = await response.json();
      localStorage.setItem("token", result.token);
      console.log(result);
      toast.success(`Welcome to Khabar, ${name}!`);
      navigate("/menu");
    } catch (error) {
      console.error(error.message);
    }
  };

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
        <form className="signup-form" onSubmit={handleSubmit(handleSignup)}>
          <div className="input-name">
            <label htmlFor="name">Your Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter Your Full Name"
            />
            {errors.name && (
              <p className="error" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="input-email">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter Your Email ID"
            />
            {errors.email && (
              <p className="error" role="alert">
                {errors.email?.message}
              </p>
            )}
            {signUpError && <p className="signup-error">{signUpError}</p>}
          </div>
          <div className="input-password">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be alteast 6 characters longer!",
                },
                pattern: {
                  value:
                    /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/,
                  message:
                    "Your password must have at least 2 capital letters, 2 small letters, 2 digits, and 1 special character!",
                },
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="error" role="alert">
                {errors.password?.message}
              </p>
            )}
            {signUpError && <p className="signup-error">{signUpError}</p>}
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
