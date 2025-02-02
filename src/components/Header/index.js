import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaLaptopCode,
    FaProjectDiagram,
    FaInfoCircle,
    FaEnvelope,
    FaCertificate,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="navbar-logo-link">
          <FaLaptopCode className="logo-icon" />
          <span className="logo-text">MyPortfolio</span>
        </Link>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/projects" className="navbar-link">
          <FaProjectDiagram className="icon" /> Projects
        </Link>
        <Link to="/about" className="navbar-link">
          <FaInfoCircle className="icon" /> About
        </Link>
        <Link to="/MyCertifications" className="navbar-link">
          <FaCertificate className="icon" /> Certifications
        </Link>
        <Link to="/contact" className="navbar-link">
          <FaEnvelope className="icon" /> Contact
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Header;