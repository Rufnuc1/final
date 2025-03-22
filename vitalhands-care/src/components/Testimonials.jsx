import React from 'react';
import './Testimonials.css';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    { 
      text: 'VitalHands Care provided excellent care for my elderly mother. Highly recommended!', 
      author: 'Sarah T.', 
      avatar: '/images/avatar1.png', 
      rating: 5 
    },
    { 
      text: 'The nurses were professional and compassionate. Thank you for your support!', 
      author: 'Daniel L.', 
      avatar: '/images/avatar2.jpg', 
      rating: 4 
    },
    { 
      text: 'Great service and reliable staff. I will definitely use them again.', 
      author: 'Precious R.', 
      avatar: '/images/avatar3.png', 
      rating: 5 
    },
  ];

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="avatar">
              <img src={testimonial.avatar} alt={testimonial.author} />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < testimonial.rating ? 'star filled' : 'star'} />
              ))}
            </div>
            <p className="text">"{testimonial.text}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;