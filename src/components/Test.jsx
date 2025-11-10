import React, { useEffect, useState } from 'react';
import BackgroundCanvas from './BackgroundCanvas';
import Sections from './Sections';
import TopCircularNavbar from './Navbar';
import Loading from './loading';
function Test() {
  const [currentSection, setCurrentSection] = useState(0);
  const [targetSection, setTargetSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets (or wait for actual resources)
    const timer = setTimeout(() => setLoading(false), 3000); // 3s loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show full-page MP4 loader while loading
    return <Loading />;
  }

  return (
    <div className="h-[100dvh]">
      {/* 3D Background */}
      <BackgroundCanvas 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        targetSection={targetSection}
        clearGoToSection={() => setTargetSection(null)}
      />

      {/* Navbar */}
      <TopCircularNavbar 
        currentSection={currentSection} 
        onNavigate={setTargetSection}
      />

      {/* Overlay Sections */}
      <Sections currentSection={currentSection} /> 
    </div>
  );
}

export default Test;
