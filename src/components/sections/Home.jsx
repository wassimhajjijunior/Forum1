import React from 'react';

const Home = () => {
  return (
    <div style={{
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem' }}>Welcome to Job Fair 2025</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Connect with top companies & discover exciting opportunities.
      </p>
      <button style={{
        marginTop: '2rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#00BFFF',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Register Now
      </button>
    </div>
  );
};

export default Home;