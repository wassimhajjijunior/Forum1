// src/components/Sections/Sections.jsx
import React from 'react';
import Home from './sections/Home';
import Description from './sections/Description';
import Photos from './sections/Photos';
import Speakers from './sections/Speakers';
import Sponsors from './sections/Sponsors';
import Teaser from './sections/Teaser';
import Timeline from './sections/Timeline';
import Venue from './sections/Venue';

const Sections = ({ currentSection }) => {
  const sections = [
    { id: 0, name: 'Home', component: Home },
    { id: 1, name: 'Description', component: Description },
    { id: 2, name: 'Photos', component: Photos },
    { id: 3, name: 'Speakers', component: Speakers },
    { id: 4, name: 'Sponsors', component: Sponsors },
    { id: 5, name: 'Teaser', component: Teaser },
    { id: 6, name: 'Timeline', component: Timeline },
    { id: 7, name: 'Venue', component: Venue }
  ];

  const CurrentComponent = sections[currentSection]?.component || Home;

  const sectionStyle = (index) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    boxSizing: 'border-box',
    zIndex: 100,
    pointerEvents: 'auto',
    backdropFilter: 'blur(0.5px)', // subtle blur
    opacity: index === currentSection ? 1 : 0,
    transform: `translateY(${index === currentSection ? 0 : 20}px)`, // small move for transition
    transition: 'opacity 0.6s ease, transform 0.6s ease' // smooth fade + move
  });

  const indicatorStyle = {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    zIndex: 101
  };

  const dotStyle = (index) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: index === currentSection ? 'white' : 'rgba(255, 255, 255, 0.3)',
    boxShadow: index === currentSection ? `0 0 10px white` : 'none',
    transition: 'all 0.3s ease'
  });

  const navigationStyle = {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white',
    textAlign: 'center',
    fontSize: '1rem',
    opacity: 0.8,
    zIndex: 101
  };

  return (
    <>
      {sections.map((_, index) => (
        <div key={index} style={sectionStyle(index)}>
          {index === currentSection && <CurrentComponent />}
        </div>
      ))}

      {/* Section indicators */}
      <div style={indicatorStyle}>
        {sections.map((_, index) => (
          <div key={index} style={dotStyle(index)} />
        ))}
      </div>

      {/* Navigation hint */}
      <div style={navigationStyle}>
        <div>Scroll or use arrow keys to navigate</div>
        <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.6 }}>
          Section {currentSection + 1} of {sections.length}
        </div>
      </div>
    </>
  );
};

export default Sections;
