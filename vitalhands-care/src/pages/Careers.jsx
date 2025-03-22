// pages/Careers.jsx
import React from 'react';
import './Careers.css';
import careersHero from './careers-hero.jpg'; // Import the hero image from the same folder
import { FaEnvelope } from 'react-icons/fa';

const Careers = () => {
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero" style={{ backgroundImage: `url(${careersHero})` }}>
        <div className="hero-overlay">
          <h1>Join Our Team</h1>
          <p>We are always looking for talented healthcare professionals to join our team.</p>
        </div>
      </section>

      {/* Application Instructions Section */}
      <section className="application-instructions">
        <h2>How to Apply</h2>
        <p>
          If you are interested in joining our team, please send an email to{' '}
          <a href="mailto:careers@vitalhandscare.life">careers@vitalhandscare.life</a> with the following documents:
        </p>
        <ul>
          <li>Your updated CV</li>
          <li>Supporting documents (certifications, degrees, etc.)</li>
          <li>A police character certificate indicating your criminal history or record</li>
        </ul>
        <p>
          <strong>Note:</strong> We are constantly recruiting, and all new hires will undergo training based on their qualifications and experience. Don't hesitate to reach out!
        </p>
        <div className="email-cta">
          <FaEnvelope className="email-icon" />
          <a href="mailto:careers@vitalhandscare.life" className="email-button">
            Email Us Your Application
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;