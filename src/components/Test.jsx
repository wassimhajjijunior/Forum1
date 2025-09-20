import React, { useState } from 'react';
import BackgroundCanvas from './BackgroundCanvas';

function Test() {
  // Create the state for tracking current section
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="App">
      {/* Your 3D Scene */}
      <BackgroundCanvas 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      
      {/* HTML content that changes based on current section */}
      <div style={{ 
        position: 'fixed', 
        top: 20, 
        left: 20, 
        color: 'white', 
        zIndex: 1000 
      }}>
        <h2>Current Section: {currentSection}</h2>
        <p>Triangle {currentSection + 1} of 6</p>
      </div>

      {/* You can add different content for each section */}
      {currentSection === 0 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
          <h3>Home</h3>
          <p>This is the first triangle</p>
        </div>
      )}
      
      {currentSection === 1 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
          <h3>Description</h3>
          <p>Second triangle content</p>
        </div>
      )}
        {currentSection === 2 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
          <h3>Teaser</h3>
          <p>Third triangle content</p>
        </div>
        )}
        {currentSection === 3 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
            <h3>Images</h3>
            <p>Fourth triangle content</p>
        </div>
        )}
        {currentSection === 4 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
            <h3>Speaker</h3>
            <p>Fourth triangle content</p>
        </div>
        )}
        {currentSection === 5 && (
        <div style={{ position: 'fixed', bottom: 50, left: 50, color: 'white' }}>
            <h3>KeyNotes</h3>
            <p>Fourth triangle content</p>
        </div>
        )}
      
      {/* Add more sections as needed */}
    </div>
  );
}

export default Test;