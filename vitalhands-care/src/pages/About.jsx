// pages/About.jsx
import React from 'react';
import './About.css'; // Import the CSS file
import aboutHero from './about-hero.jpg'; // Import the hero image
import { FaUsers, FaHandHoldingHeart, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'John Akpan',
      role: 'CEO & Founder',
      photo: '/images/team1.jpg',
    },
    {
      name: 'Sarah Adeṣina',
      role: 'Head Nurse',
      photo: '/images/team2.jpg',
    },
    {
      name: 'Moyin Ọlátúnjí',
      role: 'Patient Care Specialist',
      photo: '/images/team3.jpg',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Compassionate care for every need.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <h2>Who We Are</h2>
        <p>
          For over <strong>17+ years</strong>, VitalHands Care has been a trusted name in healthcare, providing
          compassionate and professional services to individuals and families across the nation. With a team of
          <strong> 200+ dedicated staff members</strong>, we are committed to delivering exceptional care tailored to
          your unique needs.
        </p>
      </section>

      {/* Our Expertise Section */}
<section className="expertise-section">
  <h2>Our Expertise</h2>
  <p>
    At VitalHands Care, we pride ourselves on having a diverse team of healthcare professionals who bring a wealth of knowledge and experience to the table. 
    Our experts work together to provide comprehensive, compassionate, and personalized care for all our clients. Here’s a closer look at the roles and expertise within our team:
  </p>

  {/* Expertise Areas */}
  <div className="expertise-content">
    <div className="expertise-item">
      <h3>Doctors</h3>
      <p>
        Our team of experienced physicians provides medical consultations, diagnoses, and treatment plans tailored to each patient’s unique needs. 
        Whether it’s managing chronic conditions or addressing acute illnesses, our doctors are dedicated to delivering high-quality care.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Nurses</h3>
      <p>
        Skilled and compassionate, our nurses offer personalized care and support to patients in various settings, from hospitals to home care. 
        They assist with medication management, wound care, and daily health monitoring, ensuring patients feel supported and well-cared for.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Pharmacists</h3>
      <p>
        Our pharmacists are experts in medication management, ensuring patients receive the right medications at the right dosages. 
        They also provide valuable advice on drug interactions, side effects, and proper usage, promoting safe and effective treatment.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Physiotherapists & Occupational Therapists</h3>
      <p>
        Helping patients regain mobility and independence is the primary focus of our physiotherapists and occupational therapists. 
        Through tailored exercise programs and adaptive strategies, they assist patients in recovering from injuries, surgeries, or chronic conditions.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Psychiatrists & Therapists</h3>
      <p>
        Mental health is a critical component of overall well-being. Our psychiatrists and therapists provide counseling, therapy, and psychiatric care 
        to help patients manage conditions like anxiety, depression, and trauma, fostering emotional resilience and mental clarity.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Healthcare Assistants</h3>
      <p>
        Our healthcare assistants play a vital role in supporting patients with daily activities such as bathing, dressing, and meal preparation. 
        They provide companionship and ensure patients feel comfortable and cared for in their daily lives.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Phlebotomists</h3>
      <p>
        Specializing in blood drawing and testing, our phlebotomists ensure accurate and efficient sample collection for diagnostic purposes. 
        Their expertise is crucial for timely and precise medical evaluations.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Care Support Workers</h3>
      <p>
        Care support workers provide essential assistance to patients and their families, helping with tasks like transportation, household chores, 
        and emotional support. They are a bridge between patients and the healthcare system, ensuring seamless care delivery.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Residential Carers</h3>
      <p>
        Our residential carers ensure a safe and comfortable living environment for patients who require long-term care. 
        They provide round-the-clock support, helping patients maintain their independence while addressing their medical and personal needs.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Dietitians & Nutritionists</h3>
      <p>
        Proper nutrition is key to recovery and overall health. Our dietitians and nutritionists create personalized meal plans, 
        educate patients on healthy eating habits, and address dietary concerns to promote optimal well-being.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Speech Therapists</h3>
      <p>
        Speech therapists help patients with speech, language, and swallowing disorders. Through targeted exercises and therapies, 
        they improve communication skills and ensure safe swallowing, enhancing patients’ quality of life.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Social Workers</h3>
      <p>
        Our social workers provide invaluable support to patients and their families, helping them navigate healthcare systems, 
        access resources, and cope with emotional and financial challenges. They are advocates for patients’ rights and well-being.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Medical Laboratory Technicians</h3>
      <p>
        Behind the scenes, our medical laboratory technicians perform diagnostic tests and analyze samples with precision. 
        Their work is essential for accurate diagnoses and effective treatment plans.
      </p>
    </div>
    <div className="expertise-item">
      <h3>Radiologists & Imaging Technicians</h3>
      <p>
        Specializing in advanced imaging technologies like X-rays and MRIs, our radiologists and imaging technicians provide critical insights 
        into patients’ conditions, enabling accurate diagnoses and targeted treatments.
      </p>
    </div>
  </div>
</section>

      {/* Nationwide Availability Section */}
      <section className="availability-section">
        <h2>Nationwide Availability</h2>
        <p>
          We are proud to serve clients in <strong>all states across the country</strong>. No matter where you are,
          our team is ready to provide the care you need, when you need it.
        </p>
        <div className="availability-icon">
          <FaMapMarkerAlt className="icon" />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission">
          <FaHandHoldingHeart className="icon" />
          <h2>Our Mission</h2>
          <p>
            To provide exceptional healthcare services that improve the quality of life for our patients and their families.
          </p>
        </div>
        <div className="vision">
          <FaUsers className="icon" />
          <h2>Our Vision</h2>
          <p>
            To be the leading provider of compassionate and professional healthcare services in the region.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Directors</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
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

export default About;