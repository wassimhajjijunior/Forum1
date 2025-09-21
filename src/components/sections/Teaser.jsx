import React from 'react';

const Teaser = () => {
  return (
    <div style={{
      color: 'white',
      padding: '2rem',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Teaser Video</h2>
      <div style={{
        width: '640px',
        height: '360px',
        backgroundColor: '#222',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <p>Video Placeholder</p>
      </div>
    </div>
  );
};

export default Teaser;
