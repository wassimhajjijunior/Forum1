// src/components/Sections/Sections.jsx
import React, { useEffect, useState } from "react";
import Home from "./sections/Home";
import Description from "./sections/Description";
import Photos from "./sections/Photos";
import Speakers from "./sections/Speakers";
import Workshops from "./sections/Workshops";
import Sponsors from "./sections/Sponsors";
import Teaser from "./sections/Teaser";
import Timeline from "./sections/Timeline";
import Venue from "./sections/Venue";
import Registration from "./sections/Registration";
import TableRond from "./sections/TableRond";

import Sponsors1 from "./sections/Sponsor1";
import Sponsors2 from "./sections/Sponsor2";
import Sponsors3 from "./sections/Sponsor3";
import Sponsors4 from "./sections/Sponsor4";

const Sections = ({ currentSection }) => {
  const sections = [
    { id: 0, name: "Home", component: Home },
    { id: 1, name: "Description", component: Description },
    { id: 2, name: "Photos", component: Photos },
    { id: 3, name: "Teaser", component: Teaser },

    { id: 4, name: "Speakers", component: Speakers },
    { id: 5, name: "Workshops", component: Workshops },
    // { id: 6, name: "TableRond", component: TableRond },

    { id: 6, name: "Sponsors", component: Sponsors },
    { id: 7, name: "Sponsors1", component: Sponsors1 },
    { id: 8, name: "Sponsors2", component: Sponsors2 },
    { id: 9, name: "Sponsors3", component: Sponsors3 },
    { id: 10, name: "Sponsors4", component: Sponsors4 },


    { id: 11, name: "Timeline", component: Timeline },
    { id: 12, name: "Venue", component: Venue },
    { id: 13, name: "Registration", component: Registration },
  ];

  const CurrentComponent = sections[currentSection]?.component || Home;

  const [animationStep, setAnimationStep] = useState(0); // for all sections except Home
  const [homeAnimationStep, setHomeAnimationStep] = useState(0); // special animation for Home
  const [previousSection, setPreviousSection] = useState(currentSection);

  useEffect(() => {
    setPreviousSection(currentSection);

    if (currentSection === 0) {
      // Special Home animation
      setHomeAnimationStep(0);
      const homeTimer1 = setTimeout(() => setHomeAnimationStep(1), 200);
      const homeTimer2 = setTimeout(() => setHomeAnimationStep(2), 1000);

      return () => {
        clearTimeout(homeTimer1);
        clearTimeout(homeTimer2);
      };
    } else {
      // Other sections animation
      setAnimationStep(0);
      const timer1 = setTimeout(() => setAnimationStep(1), 150);
      const timer2 = setTimeout(() => setAnimationStep(2), 800);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [currentSection]);

  const sectionStyle = (index) => {
    let clipPath;
    let transform;
    let zIndex = 100;

    // Home section
    if (index === 0) {
      if (index !== currentSection) {
        clipPath = "circle(0% at 50% 50%)";
        transform = "scale(0.5) translateZ(-500px)";
        zIndex = 98;
      } else {
        zIndex = 101;
        switch (homeAnimationStep) {
          case 0:
            clipPath = "circle(0% at 50% 50%)";
            transform = "scale(0.8) translateZ(-200px)";
            break;
          case 1:
            clipPath = "circle(60% at 50% 50%)";
            transform = "scale(1.1) translateZ(50px)";
            break;
          case 2:
            clipPath = "circle(150% at 50% 50%)";
            transform = "scale(1) translateZ(0px)";
            break;
          default:
            clipPath = "circle(150% at 50% 50%)";
            transform = "scale(1) translateZ(0px)";
        }
      }
    }
    // Other sections
    else {
      if (index !== currentSection) {
        clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
        if (index === previousSection) {
          transform = "scale(0.6) translateZ(-800px)";
          zIndex = 99;
        } else {
          transform = "scale(0.7) translateZ(-400px)";
          zIndex = 98;
        }
      } else {
        zIndex = 101;
        switch (animationStep) {
          case 0:
            clipPath = "polygon(50% 50%, 50% 50%, 50% 50%)";
            transform = "scale(0.8) translateZ(-200px)";
            break;
          case 1:
            clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
            transform = "scale(1.05) translateZ(100px)";
            break;
          case 2:
            clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
            transform = "scale(1) translateZ(0px)";
            break;
          default:
            clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
            transform = "scale(1) translateZ(0px)";
        }
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
      transition:
        "clip-path 1s ease-in-out, transform 2.5s cubic-bezier(0.15, 0.25, 0.25, 0.95), opacity 0.8s ease-in-out",
      willChange: "clip-path, transform, opacity",
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      perspective: "800px",
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
