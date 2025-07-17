import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons
import "./index.css"
const Footer = () => {
  return (
    <footer className="footer-container fixed-bottom">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://github.com/kishore771/new.git" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="http://www.linkedin.com/in/g-kishore-g-78579432b" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/im_kishore_117/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://x.com/gundelli25405" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
        </div>
        <p className="footer-text">© {new Date().getFullYear()} Kishore Gundelli. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;