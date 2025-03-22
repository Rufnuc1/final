// pages/Services.jsx
import React from 'react';
import './Services.css';
import servicesHero from './services-hero.jpg'; // Import the image from the same folder
import { FaStethoscope, FaUserNurse, FaPills, FaWheelchair, FaBrain, FaHandsHelping, FaSyringe, FaHome, FaUtensils, FaCommentMedical, FaUsers, FaFlask, FaXRay,FaPhone } from 'react-icons/fa';

const Services = () => {
  const services = [
    { 
      title: 'Doctors', 
      description: 'Experienced physicians providing medical consultations and treatments.', 
      icon: <FaStethoscope className="service-icon" />, 
      link: '/services/doctors' 
    },
    { 
      title: 'Nurses', 
      description: 'Skilled nurses offering personalized care and support.', 
      icon: <FaUserNurse className="service-icon" />, 
      link: '/services/nurses' 
    },
    { 
      title: 'Pharmacists', 
      description: 'Experts in medication management and delivery.', 
      icon: <FaPills className="service-icon" />, 
      link: '/services/pharmacists' 
    },
    { 
      title: 'Physiotherapists & Occupational Therapists', 
      description: 'Helping patients regain mobility and independence.', 
      icon: <FaWheelchair className="service-icon" />, 
      link: '/services/physiotherapists' 
    },
    { 
      title: 'Psychiatrists & Therapists', 
      description: 'Providing mental health support and counseling.', 
      icon: <FaBrain className="service-icon" />, 
      link: '/services/psychiatrists' 
    },
    { 
      title: 'Healthcare Assistants', 
      description: 'Assisting with daily activities and personal care.', 
      icon: <FaHandsHelping className="service-icon" />, 
      link: '/services/healthcare-assistants' 
    },
    { 
      title: 'Phlebotomists', 
      description: 'Specializing in blood drawing and testing.', 
      icon: <FaSyringe className="service-icon" />, 
      link: '/services/phlebotomists' 
    },
    { 
      title: 'Care Support Workers', 
      description: 'Providing essential support to patients and families.', 
      icon: <FaHome className="service-icon" />, 
      link: '/services/care-support-workers' 
    },
    { 
      title: 'Residential Carers', 
      description: 'Ensuring a safe and comfortable living environment.', 
      icon: <FaHome className="service-icon" />, 
      link: '/services/residential-carers' 
    },
    { 
      title: 'Dietitians & Nutritionists', 
      description: 'Providing dietary advice and meal planning for better health.', 
      icon: <FaUtensils className="service-icon" />, 
      link: '/services/dietitians' 
    },
    { 
      title: 'Speech Therapists', 
      description: 'Helping patients with speech and swallowing disorders.', 
      icon: <FaCommentMedical className="service-icon" />, 
      link: '/services/speech-therapists' 
    },
    { 
      title: 'Social Workers', 
      description: 'Supporting patients and families with resources and guidance.', 
      icon: <FaUsers className="service-icon" />, 
      link: '/services/social-workers' 
    },
    { 
      title: 'Medical Laboratory Scientists', 
      description: 'Performing diagnostic tests and analyzing samples.', 
      icon: <FaFlask className="service-icon" />, 
      link: '/services/lab-technicians' 
    },
    { 
      title: 'Radiologists & Imaging Technicians', 
      description: 'Specializing in imaging tests like X-rays and MRIs.', 
      icon: <FaXRay className="service-icon" />, 
      link: '/services/radiologists' 
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" style={{ backgroundImage: `url(${servicesHero})` }}>
        <div className="hero-overlay">
          <h1>Our Services</h1>
          <p>Compassionate care for every need.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>What We Offer</h2>
        <div className="service-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to learn more about our services and how we can help you.</p>
        <a href="/contact" className="cta-button">
          <FaPhone /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default Services;