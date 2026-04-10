import React, { useEffect, useState } from "react";
import EventHighlights from "./sections/EventHighlights";
import Home from "./sections/Home";
import Photos from "./sections/Photos";
import Speakers from "./sections/Speakers";
import Workshops from "./sections/Workshops";
import Sponsor01 from "./sections/Sponsor01";
import Sponsor02 from "./sections/Sponsor02";
import Sponsor03 from "./sections/Sponsor03";
import Sponsor04 from "./sections/Sponsor04";
import Sponsor05 from "./sections/Sponsor05";
import Sponsor06 from "./sections/Sponsor06";
import Sponsor07 from "./sections/Sponsor07";
import Sponsor08 from "./sections/Sponsor08";
import Sponsor09 from "./sections/Sponsor09";
import Sponsor10 from "./sections/Sponsor10";
import Sponsor11 from "./sections/Sponsor11";
import Sponsor12 from "./sections/Sponsor12";
import Sponsor13 from "./sections/Sponsor13";
import Sponsor14 from "./sections/Sponsor14";
import Teaser from "./sections/Teaser";
import {
  GALLERY_SECTION_ID,
  HIGHLIGHTS_SECTION_ID,
  HOME_SECTION_ID,
  SPEAKERS_SECTION_ID,
  SPONSOR_SECTION_START,
  TEASER_SECTION_ID,
  WORKSHOPS_SECTION_ID,
} from "./sections/sectionConfig";

const sponsorComponents = [
  Sponsor01,
  Sponsor02,
  Sponsor03,
  Sponsor04,
  Sponsor05,
  Sponsor06,
  Sponsor07,
  Sponsor08,
  Sponsor09,
  Sponsor10,
  Sponsor11,
  Sponsor12,
  Sponsor13,
  Sponsor14
];

const Sections = ({ currentSection }) => {
  const sections = [
    { id: HOME_SECTION_ID, name: "Home", component: Home },
    { id: HIGHLIGHTS_SECTION_ID, name: "Highlights", component: EventHighlights },
    { id: GALLERY_SECTION_ID, name: "Photos", component: Photos },
    { id: TEASER_SECTION_ID, name: "Teaser", component: Teaser },
    { id: SPEAKERS_SECTION_ID, name: "Speakers", component: Speakers },
    { id: WORKSHOPS_SECTION_ID, name: "Workshops", component: Workshops },
    ...sponsorComponents.map((component, index) => ({
      id: SPONSOR_SECTION_START + index,
      name: `Sponsor${String(index + 1).padStart(2, "0")}`,
      component,
    })),
  ];

  const CurrentComponent = sections[currentSection]?.component || Home;

  const [animationStep, setAnimationStep] = useState(0);
  const [homeAnimationStep, setHomeAnimationStep] = useState(0);
  const [previousSection, setPreviousSection] = useState(currentSection);

  useEffect(() => {
    setPreviousSection(currentSection);

    if (currentSection === 0) {
      setHomeAnimationStep(0);
      const homeTimer1 = setTimeout(() => setHomeAnimationStep(1), 200);
      const homeTimer2 = setTimeout(() => setHomeAnimationStep(2), 1000);

      return () => {
        clearTimeout(homeTimer1);
        clearTimeout(homeTimer2);
      };
    }

    setAnimationStep(0);
    const timer1 = setTimeout(() => setAnimationStep(1), 150);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentSection]);

  const sectionStyle = (index) => {
    let clipPath;
    let transform;
    let zIndex = 100;

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
    } else {
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
      pointerEvents: index === currentSection && index !== 0 ? "auto" : "none",
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
        <div key={section.id} style={sectionStyle(index)}>
          {index === currentSection && <CurrentComponent />}
        </div>
      ))}
    </>
  );
};

export default Sections;
