import React from 'react';

const sponsors = Array.from({ length: 6 }).map((_, i) => `https://via.placeholder.com/150x80?text=Sponsor+${i+1}`);

const Sponsors = () => {
  return (
    <div style={{
      color: 'white',
      padding: '2rem',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Our Sponsors</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {sponsors.map((url, i) => (
          <img key={i} src={url} alt={`Sponsor ${i+1}`} style={{ borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
