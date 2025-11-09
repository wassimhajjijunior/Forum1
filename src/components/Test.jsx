import React, { useEffect, useState } from 'react';
import BackgroundCanvas from './BackgroundCanvas';
import Sections from './Sections';
import TopCircularNavbar from './Navbar';


function Test() {
  // Create the state for tracking current section
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(null);

 useEffect(() => {
  console.log("Viewport details:");
  console.log("innerHeight:", window.innerHeight);
  console.log("innerWidth:", window.innerWidth);
  console.log("outerHeight:", window.outerHeight);
  console.log("outerWidth:", window.outerWidth);
  console.log("devicePixelRatio:", window.devicePixelRatio);
  console.log("clientWidth:", document.documentElement.clientWidth);
  console.log("clientHeight:", document.documentElement.clientHeight);
  console.log("User agent:", navigator.userAgent);
}, []);

  return (
    <div className="h-[100dvh]">
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