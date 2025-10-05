import React, { useState } from 'react';
import BackgroundCanvas from './BackgroundCanvas';
import Sections from './Sections';
import TopCircularNavbar from './Navbar';


function Test() {
  // Create the state for tracking current section
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(null);

  return (
    <div className="App">
      {/* Your 3D Scene */}
      <BackgroundCanvas 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        targetSection={targetSection}
        clearGoToSection={() => setTargetSection(null)}
      />
      <TopCircularNavbar currentSection={currentSection} onNavigate={setTargetSection}/>
      {/* Overlay Sections */}
      <Sections currentSection={currentSection} /> 
      
      </div>
  );
}

export default Test;