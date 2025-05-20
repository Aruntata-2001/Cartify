import React, { useEffect, useRef, useState } from "react"; // <-- useRef added
import './home.css';
import { Link, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
  FaBoxOpen,
  FaQuestionCircle,
} from "react-icons/fa";

import bannerImage from '../Images/banner2.jpg';
import electronicsImg from '../Images/electronics.jpg';
import fashionImg from '../Images/fashion.jpg';
import homeLivingImg from '../Images/homeliving.jpg';
import sportsImg from '../Images/sports.jpg';
import beautyImg from '../Images/beauty.jpg';
import toysImg from '../Images/toys.jpg';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const categoriesRef = useRef(null); // <-- Reference for "Shop by Categories" section

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <FaShoppingCart className="logo-icon" />
          <span className="logo-text">Cartify</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <FaSearch className="search-icon" />
        </div>

        <div className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <span className="nav-item" onClick={scrollToCategories}>
              Categories
            </span>
            {showCategories && (
              <div className="dropdown-menu">
                <Link to="/electronics">Electronics</Link>
                <Link to="/fashion">Fashion</Link>
                <Link to="/homeliving">Home & Living</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/beauty">Beauty</Link>
                <Link to="/toys">Toys</Link>
              </div>
            )}
          </div>
          <Link className="nav-item" to="/orders">
            <FaBoxOpen /> Orders
          </Link>
          <Link className="nav-item" to="/contact">
            <FaQuestionCircle /> Help
          </Link>
          <Link className="nav-item" to="/cart">
            <FaShoppingCart /> Cart
          </Link>
        </div>

        {!isLoggedIn ? (
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="register-btn">Register</button>
            </Link>
          </div>
        ) : (
          <div className="user-nav">
            <span className="welcome-msg">Welcome 👋</span>
            <Link to="/profile">
              <button className="user-btn">
                <FaUserCircle /> Profile
              </button>
            </Link>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>

      {/* Hero Banner */}
      <div className="hero-image">
        <img src={bannerImage} alt="Banner" />
        <div className="hero-overlay">
          <h1>Welcome to Cartify</h1>
          <p>Deals. Discounts. Delivered.</p>
          <button className="hero-btn" onClick={scrollToCategories}>
            Explore Now
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Cartify is your go-to online megastore. Explore the latest tech,
          trendy fashion, stylish home items, and more—all with fast delivery
          and secure checkout.
        </p>
      </div>

      {/* Flash Deals Section */}
      <div className="deals-section">
        <h2>Flash Deals</h2>
        <div className="deals-container">
          {[electronicsImg, fashionImg, homeLivingImg].map((img, i) => (
            <div className="deal-card" key={i}>
              <img src={img} alt="Deal" />
              <p>Up to 50% OFF</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Categories */}
      <div className="categories-section" ref={categoriesRef}>
        <h2>Shop by Categories</h2>
        <div className="categories-container">
          <Link to="/electronics" className="category-card">
            <img src={electronicsImg} alt="Electronics" />
            <h3>Electronics</h3>
          </Link>
          <Link to="/fashion" className="category-card">
            <img src={fashionImg} alt="Fashion" />
            <h3>Fashion</h3>
          </Link>
          <Link to="/homeliving" className="category-card">
            <img src={homeLivingImg} alt="Home & Living" />
            <h3>Home & Living</h3>
          </Link>
          <Link to="/sports" className="category-card">
            <img src={sportsImg} alt="Sports" />
            <h3>Sports</h3>
          </Link>
          <Link to="/beauty" className="category-card">
            <img src={beautyImg} alt="Beauty" />
            <h3>Beauty</h3>
          </Link>
          <Link to="/toys" className="category-card">
            <img src={toysImg} alt="Toys" />
            <h3>Toys</h3>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Cartify. All rights reserved.</p>
          <div className="social-icons">
            <a href="#">
              <FaShoppingCart />
            </a>
            <a href="#">
              <FaSearch />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
