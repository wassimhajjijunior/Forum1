import React from 'react';

const Photos = () => {
  const placeholder = 'https://via.placeholder.com/200x150';

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
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Event Photos</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <img key={i} src={placeholder} alt="Event" style={{ borderRadius: '8px' }} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
