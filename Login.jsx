import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("id", data.id);
        navigate("/Product");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try later.");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) navigate("/Product");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="login-container">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/login-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* 2 Column Layout */}
        <div className="login-content">
          {/* Left Side: Café Content (Only Text) */}
          <div className="cafe-box">
            <h2 className="cafe-title">Brew Café</h2>
            <p className="cafe-text">
              Freshly brewed coffee, cozy vibes and  
              the perfect place to start your day ☕
            </p>
          </div>

          {/* Right Side: Login Form */}
          <div className="login-box">
            <h2 className="text-center mb-4 text-warning fw-bold">Login</h2>

            {error && (
              <div className="alert alert-danger text-center py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-bold">
                Sign In
              </button>
            </form>

            <p className="text-center mt-3 mb-0">
              Don’t have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
