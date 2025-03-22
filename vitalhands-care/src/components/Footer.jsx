// components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>VitalHands Care</h3>
          <p>Providing compassionate and professional care services for individuals and families.</p>
          <div className="contact-info">
            <p><FaEnvelope /> info@vitalhandscare.com</p>
            <p><FaPhone /> +123 456 7890</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://facebook.com/vitalhandscare" aria-label="Facebook"><FaFacebook /></a>
        <a href="https://twitter.com/vitalhandscare" aria-label="Twitter"><FaTwitter /></a>
        <a href="https://linkedin.com/company/vitalhandscare" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} VitalHands Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;