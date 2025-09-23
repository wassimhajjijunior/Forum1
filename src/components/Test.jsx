import React, { useState } from 'react';
import BackgroundCanvas from './BackgroundCanvas';
import Sections from './Sections';


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

      {/* Overlay Sections */}
      <Sections currentSection={currentSection} /> 

      </div>
  );
}

export default Test;