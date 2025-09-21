import React from 'react';

const Venue = () => {
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
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Venue</h2>
      <p style={{ fontSize: '1.1rem' }}>
        Grand Conference Hall, Downtown City Center
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>
        Address: 123 Main Street, City, Country
      </p>
      <div style={{
        width: '640px',
        height: '360px',
        backgroundColor: '#222',
        borderRadius: '8px',
        marginTop: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <p>Map Placeholder</p>
      </div>
    </div>
  );
};

export default Venue;
