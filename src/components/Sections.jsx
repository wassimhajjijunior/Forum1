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
  const [previousSection, setPreviousSection] = useState(currentSection);

  useEffect(() => {
    // Update previous section when current section changes
    setPreviousSection(currentSection);
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
    let zIndex = 100;

    if (index !== currentSection) {
      // Section is not active
      clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
      
      // If this was the previous section, translate it away on Z-axis with more dramatic effect
      if (index === previousSection && index !== currentSection) {
        transform = "scale(0.6) translateZ(-800px)"; // Much further back and smaller
        zIndex = 99; // Put it behind the incoming section
      } else {
        transform = "scale(0.7) translateZ(-400px)"; // Other sections also further back
        zIndex = 98;
      }
    } else {
      // Current active section
      zIndex = 101; // Ensure it's on top
      
      switch (animationStep) {
        case 0:
          clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
          transform = "scale(0.8) translateZ(-200px)"; // Start from behind
          break;
        case 1:
          clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; // triangle visible
          transform = "scale(1.05) translateZ(100px)"; // Come forward prominently during animation
          break;
        case 2:
          clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"; // full screen
          transform = "scale(1) translateZ(0px)"; // Settle to normal position
          break;
        default:
          clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
          transform = "scale(1) translateZ(0px)";
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
      zIndex,
      pointerEvents: index === currentSection ? "auto" : "none",
      clipPath,
      transform,
      opacity: index === currentSection ? 1 : 0,
      background: "transparent",
      // Much slower transition for more visible Z-axis movement
      transition: "clip-path 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 2.5s cubic-bezier(0.15, 0.25, 0.25, 0.95), opacity 0.8s ease-in-out, z-index 0s linear",
      willChange: "clip-path, transform, opacity",
      backfaceVisibility: "hidden",
      // Enhanced 3D transformations with more pronounced perspective
      transformStyle: "preserve-3d",
      perspective: "800px", // Closer perspective for more dramatic effect
    };
  };

  return (
    <>
      {sections.map((section, index) => (
        <div key={index} style={sectionStyle(index)}>
          {index === currentSection && <CurrentComponent />}
        </div>
      ))}
    </>
  );
};

export default Sections;