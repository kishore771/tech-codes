import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaLaptopCode,
    FaProjectDiagram,
    FaInfoCircle,
    FaEnvelope,
    FaCertificate,
  } from 'react-icons/fa';
import './index.css';

const Header = () => {
    return (
        <div className="header-container">
             <div className="logo-container">
            <Link to="/" className="navbar-logo-link">
            <FaLaptopCode className="logo-icon" /> {/* Icon representing your portfolio */}
            <span className="logo-text">MyPortfolio</span> {/* Optional text beside icon */}
            </Link>
            </div>
            <div className="navbar-links">
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
        </div>
    );
}

export default Header;