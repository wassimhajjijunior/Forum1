import React from 'react';

const events = [
  { time: '09:00', name: 'Opening & Registration' },
  { time: '10:00', name: 'Keynote Speeches' },
  { time: '12:00', name: 'Networking Lunch' },
  { time: '14:00', name: 'Workshops' },
  { time: '17:00', name: 'Closing Ceremony' },
];

const Timeline = () => {
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
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Event Schedule</h2>
      <ul style={{ listStyle: 'none', textAlign: 'center' }}>
        {events.map((e, i) => (
          <li key={i} style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            <strong>{e.time}</strong> – {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
