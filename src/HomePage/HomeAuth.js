import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Reuse your existing styles
import { FaSignOutAlt } from "react-icons/fa";

const HomeAuth = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <div className="logo">
          <span className="logo-text">Cartify - Authenticated</span>
        </div>

        <div className="user-nav">
          <span className="welcome-msg">Welcome back 👋</span>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-overlay">
          <h1>You are Logged In 🎉</h1>
          <p>Welcome to the authenticated version of Cartify</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Your Dashboard</h2>
        <p>Here you can view your orders, manage your profile, and more.</p>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Cartify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeAuth;
