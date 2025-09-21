import React from 'react';

const Description = () => {
  return (
    <div style={{
      color: 'white',
      padding: '4rem',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem' }}>About Job Fair 2025</h2>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Job Fair 2025 brings together top companies and talented job seekers from around the world.
        Attend workshops, meet recruiters, and discover career opportunities in one exciting day.
      </p>
      <ul style={{ marginTop: '1.5rem', textAlign: 'left' }}>
        <li>• Network with industry leaders</li>
        <li>• Attend interactive workshops</li>
        <li>• Explore internships and job openings</li>
      </ul>
    </div>
  );
};

export default Description;