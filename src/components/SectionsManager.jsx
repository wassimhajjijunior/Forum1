import { useState, useEffect } from "react";
import Home from "./sections/Home";
import Teaser from "./sections/Teaser";
import Photos from "./sections/Photos";
import Speakers from "./sections/Speakers";
import Workshops from "./sections/Workshops";
import Venue from "./sections/Venue";


const sections = [Home, Teaser , Photos, Speakers , Workshops , Venue];

export default function SectionsManager() {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;
    const sectionIndex = Math.floor(scrollY / sectionHeight);
    setActiveSection(Math.min(sectionIndex, sections.length - 1));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {sections.map((SectionComponent, i) => (
        <SectionComponent key={i} isActive={i === activeSection} />
      ))}
    </>
  );
}
