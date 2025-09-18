import React from "react";
import logo from "../assets/logo-top.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <header className="navbar-container">
      <nav className="navbar-content">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
        </div>

        {/* Links */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Product">Products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>

        {/* Buttons */}
        <div className="navbar-actions">
          {id !== null ? (
            <button className="nav-btn" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <Link to="/signup">
              <button className="nav-btn">Sign Up</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
