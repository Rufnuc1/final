// components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = 'Either email or phone is required';
    } else {
      if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using EmailJS
      emailjs
        .send(
            'service_y9kb9wg', 
            'template_n322f1r',
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            time: new Date().toLocaleString(), // Add current time
          },
          't_TCXZMioCGztC2Ou'
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again later.');
          }
        );
    }
  };

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="success-message">
          <p>Thank you for contacting us! We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;