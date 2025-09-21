import React from 'react';

const speakers = [
  { name: 'Alice Johnson', title: 'CTO at TechCorp' },
  { name: 'Bob Smith', title: 'HR Director at InnovateX' },
  { name: 'Carla Gomez', title: 'Lead Engineer at FutureWorks' },
];

const Speakers = () => {
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
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Speakers</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {speakers.map((s, i) => (
          <div key={i} style={{
            backgroundColor: '#333',
            padding: '1rem',
            borderRadius: '8px',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            <h3>{s.name}</h3>
            <p>{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
