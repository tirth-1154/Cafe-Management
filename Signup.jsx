import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Signup = () => {
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeImg = (e) => {
    setFormData({ ...formData, profile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("profile", formData.profile);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("User registered successfully 🎉");
        navigate("/login");
      } else {
        setError("Failed to register user. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        profile: null,
      });
      document.getElementById("profile").value = "";
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="bg-video">
          <source src="/login-bg.mp4" type="video/mp4" />
        </video>

        <div className="signup-content">
          {/* Left side text */}
          <div className="signup-info">
            <h1 className="text-warning fw-bold">Welcome to Our Cafe ☕</h1>
            <p className="text-light fs-5 mt-3">
              Discover the best coffee experience with us. <br />
              By creating an account, you’ll get access to <br />
              exclusive offers, new product launches, and <br />
              a personalized experience. <br /><br />
              Join our community today and taste the difference!
            </p>
          </div>

          {/* Signup Form */}
          <div className="signup-box">
            <h2 className="text-center mb-4 text-warning fw-bold">Create Account</h2>

            {error && <div className="alert alert-danger text-center py-2">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  className="form-control"
                  id="password"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Gender</label>
                <div className="d-flex gap-4 mt-1">
                  <div className="form-check">
                    <input
                      type="radio"
                      id="male"
                      className="form-check-input"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male" className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="female"
                      className="form-check-input"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female" className="form-check-label">Female</label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label fw-semibold">City</label>
                <select
                  name="city"
                  value={formData.city || ""}
                  className="form-select"
                  id="city"
                  required
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  <optgroup label="Gujarat">
                    <option value="Surat">Surat</option>
                    <option value="Vapi">Vapi</option>
                    <option value="Baroda">Baroda</option>
                    <option value="Bharuch">Bharuch</option>
                  </optgroup>
                  <optgroup label="Maharashtra">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                  </optgroup>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="profile" className="form-label fw-semibold">Profile Picture</label>
                <input
                  type="file"
                  name="profile"
                  onChange={handleChangeImg}
                  className="form-control"
                  id="profile"
                  accept="image/*"
                />
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-bold">Sign Up</button>

              <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <Link to="/login" className="signup-link">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
