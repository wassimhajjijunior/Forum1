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
    </div>
  );
};

export default Home;