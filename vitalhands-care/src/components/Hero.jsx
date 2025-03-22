// components/Hero.jsx
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import heroBg from './hero-bg.jpg'; 

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Compassionate Care for Every Need</h1>
        <p className="hero-subtitle">
          Providing qualified carers, nurses and healthcare professionals to support you and your loved ones.
        </p>
        <Link to="/Contact" className="hero-button">
          Book a Carer
        </Link>
      </div>
    </section>
  );
};

export default Hero;