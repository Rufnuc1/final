// components/Services.jsx
import React from 'react';
import './Services.css';
import { FaHome, FaUserNurse, FaSyringe, FaStethoscope, FaPills,FaBriefcaseMedical } from 'react-icons/fa';

const Services = () => {
  const services = [
    { 
      title: 'In-Home Caregiving', 
      description: 'Personalized care in the comfort of your home.', 
      icon: <FaHome />, 
      link: '/services' 
    },
    { 
      title: 'Nursing Services', 
      description: 'Skilled nursing care for medical needs.', 
      icon: <FaUserNurse />, 
      link: '/services' 
    },
    { 
      title: 'Phlebotomy Services', 
      description: 'Professional blood drawing and testing.', 
      icon: <FaSyringe />, 
      link: '/services' 
    },
    { 
      title: 'Doctor Consultations', 
      description: 'Access to qualified doctors for consultations.', 
      icon: <FaStethoscope />, 
      link: '/services' 
    },
    { 
      title: 'Pharmacy Services', 
      description: 'Medication management and delivery.', 
      icon: <FaPills />, 
      link: '/services' 
    },
    { 
        title: 'Healthcare Professionals', 
        description: 'We have every other healthcare professionals available for you. ', 
        icon: <FaBriefcaseMedical />, 
        link: '/services' 
      },
  ];

  return (
    <section className="services" aria-labelledby="services-heading">
      <h2 id="services-heading">Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="service-button">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;