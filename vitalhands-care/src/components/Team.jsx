// components/Team.jsx
import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Registered Nurse', image: 'john-doe.jpg' },
    { name: 'Jane Smith', role: 'Healthcare Assistant', image: 'jane-smith.jpg' },
    { name: 'Alice Johnson', role: 'Phlebotomist', image: 'alice-johnson.jpg' },
    { name: 'Michael Brown', role: 'Doctor', image: 'michael-brown.jpg' },
  ];

  return (
    <section className="team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={`/images/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;