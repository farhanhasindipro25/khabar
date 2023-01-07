import React, { useState } from "react";
import "./Login.css";
import useTitle from "../../../hooks/useTitle";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  useTitle("Login");
  const [loginError, setLoginError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name, email, password);
    setLoginError("");

    try {
      const body = { name, email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
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
      setIsLoggedIn(true);
      navigate("/menu");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="login-text">
        <h2 className="login-heading">Welcome back to Khabar!</h2>
        <p className="login-sub-heading">
          Please login to order your next meal.
        </p>
      </div>
      <div>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
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
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="error" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="login-button">
            <button>LOGIN</button>
          </div>
          {loginError && <p className="login-error">{loginError}</p>}
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
