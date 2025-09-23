// src/components/Sections/Sections.jsx
import React, { useEffect, useState } from "react";
import Home from "./sections/Home";
import Description from "./sections/Description";
import Photos from "./sections/Photos";
import Speakers from "./sections/Speakers";
import Sponsors from "./sections/Sponsors";
import Teaser from "./sections/Teaser";
import Timeline from "./sections/Timeline";
import Venue from "./sections/Venue";


const Sections = ({ currentSection }) => {
  const sections = [
    { id: 0, name: "Home", component: Home },
    { id: 1, name: "Description", component: Description },
    { id: 2, name: "Photos", component: Photos },
    { id: 3, name: "Speakers", component: Speakers },
    { id: 4, name: "Sponsors", component: Sponsors },
    { id: 5, name: "Teaser", component: Teaser },
    { id: 6, name: "Timeline", component: Timeline },
    { id: 7, name: "Venue", component: Venue },
  ];

  const CurrentComponent = sections[currentSection]?.component || Home;
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    setAnimationStep(0);
    
    // Timing synced with camera movement (exponential decay ~1.2-1.5s total)
    const timer1 = setTimeout(() => setAnimationStep(1), 150); // triangle appears as camera starts moving
    const timer2 = setTimeout(() => setAnimationStep(2), 800); // morph to full screen as camera settles
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentSection]);

  const sectionStyle = (index) => {
    let clipPath;
    let transform;

    if (index !== currentSection) {
      clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
      transform = "scale(0.8)";
    } else {
      switch (animationStep) {
        case 0:
          clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
          transform = "scale(0.8)";
          break;
        case 1:
          clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; // triangle visible
          transform = "scale(1.05)";
          break;
        case 2:
          clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"; // full screen
          transform = "scale(1)";
          break;
        default:
          clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
          transform = "scale(1)";
      }
    }

    return {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      boxSizing: "border-box",
      zIndex: 100,
      pointerEvents: index === currentSection ? "auto" : "none",
      clipPath,
      transform,
      opacity: index === currentSection ? 1 : 0,
      background: "transparent",
      // Easing curve that matches exponential decay feel of camera movement
      transition: "clip-path 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-in-out",
      willChange: "clip-path, transform, opacity",
      backfaceVisibility: "hidden",
    };
  };

  // Blur background style for non-active sections
  

  return (
    <>
      {/* Blur background overlay */}
     
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle(index)}>
          {index === currentSection && <CurrentComponent />}
        </div>
      ))}
    </>
  );
};

export default Sections;