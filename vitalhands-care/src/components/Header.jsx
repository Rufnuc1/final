// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleServicesDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="logo">VitalHands Care</div>
      <nav className={`nav-links ${isMobile ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li className="dropdown" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
            <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            
          </li>
          <li><Link to="/careers" className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;