import React, { useEffect, useState } from "react";
import brand from "/LOGO_SUPCOM.png";
import {
  GALLERY_SECTION_ID,
  HIGHLIGHTS_SECTION_ID,
  HOME_SECTION_ID,
  SPEAKERS_SECTION_ID,
  SPONSOR_SECTION_IDS,
  TEASER_SECTION_ID,
  WORKSHOPS_SECTION_ID,
} from "./sections/sectionConfig";

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { id: HOME_SECTION_ID, label: "Home" },
    { id: HIGHLIGHTS_SECTION_ID, label: "Highlights" },
    { id: GALLERY_SECTION_ID, label: "Gallery" },
    { id: TEASER_SECTION_ID, label: "Teaser" },
    { id: SPEAKERS_SECTION_ID, label: "Speakers" },
    { id: WORKSHOPS_SECTION_ID, label: "Workshops" },
    { id: SPONSOR_SECTION_IDS[0], label: "Sponsors" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isItemActive = (item) => {
    if (item.label === "Speakers") return currentSection === SPEAKERS_SECTION_ID;
    if (item.label === "Workshops") return currentSection === WORKSHOPS_SECTION_ID;
    if (item.label === "Sponsors") return SPONSOR_SECTION_IDS.includes(currentSection);
    if (item.label === "Highlights") return currentSection === HIGHLIGHTS_SECTION_ID;
    return currentSection === item.id;
  };

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
    fontFamily:
      "font-hazmat-regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00ffff",
    background: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 3px 15px rgba(0,0,0,0.3)",
  };

  const itemsContainerStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "20px",
  };

  const itemStyle = (active) => ({
    position: "relative",
    cursor: "pointer",
    color: active ? "#00ffff" : "#ffffffaa",
    fontSize: "15px",
    fontWeight: 500,
    padding: "6px 16px 12px",
    borderRadius: "8px",
    backdropFilter: "blur(6px)",
    background: active ? "rgba(0,255,255,0.15)" : "rgba(255,255,255,0.03)",
    transition: "all 0.3s ease",
    transform: "none",
    fontFamily: "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "20px",
    boxShadow: active
      ? "0 2px 6px rgba(0,255,255,0.4), 0 8px 20px rgba(0,255,255,0.2)"
      : "0 2px 8px rgba(255,255,255,0.2), 0 2px 6px rgba(255,255,255,0.1)",
    border: "none",
  });

  const sidebarStyle = {
    position: "fixed",
    top: 55,
    left: sidebarOpen ? 0 : "-250px",
    width: "220px",
    height: "auto",
    background: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "15px",
    transition: "left 0.3s ease",
    zIndex: 1100,
    borderRight: "1px solid rgba(0,255,255,0.3)",
  };

  const hamburgerStyle = {
    fontSize: "24px",
    cursor: "pointer",
    position: "absolute",
    right: 15,
    color: "#00ffff",
    transform: sidebarOpen ? "rotate(90deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
    border: "none",
    background: "transparent",
  };

  const logoStyle = {
    height: isMobile ? "22px" : "48px",
    width: "auto",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    padding: 0,
  };

  return (
    <>
      <nav style={navbarStyle}>
        {isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "75px",
              position: "relative",
            }}
          >
            <button
              type="button"
              aria-label="Go to Home"
              style={{ ...logoStyle, position: "absolute", left: 0 }}
              onClick={() => onNavigate(0)}
            >
              <img src={brand} alt="Brand Logo" style={{ ...logoStyle, height: logoStyle.height }} />
            </button>

            <div style={{ width: "40px" }} />

            <button
              type="button"
              aria-label="Toggle navigation"
              style={hamburgerStyle}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              aria-label="Go to Home"
              style={logoStyle}
              onClick={() => onNavigate(0)}
            >
              <img src={brand} alt="Brand Logo" style={{ height: logoStyle.height, width: "auto" }} />
            </button>

            <div style={itemsContainerStyle}>
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  style={itemStyle(isItemActive(item))}
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div style={{ width: "100px" }} />
          </>
        )}
      </nav>

      {isMobile && (
        <div style={sidebarStyle}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              style={itemStyle(isItemActive(item))}
              onClick={() => {
                onNavigate(item.id);
                setSidebarOpen(false);
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
