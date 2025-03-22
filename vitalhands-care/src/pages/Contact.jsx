// pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import contactHero from './contact-hero.jpg'; // Import the image from the same folder
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ backgroundImage: `url(${contactHero})` }}>
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us anytime!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>contact@vitalhandscare.life</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>All calls are scheduled</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;