import React, { useState, useEffect } from "react";
import brand from "/LOGO_SUPCOM.png";

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { id: 0, label: "Home" },
    { id: 1, label: "Description" },
    { id: 2, label: "Gallery" },
    { id: 3, label: "Teaser" },
    { id: 4, label: "Speakers" },
    { id: 6, label: "Sponsors" },
    { id: 11, label: "Highlights" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    fontFamily:
      "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    lineHeight: "20px",
    boxShadow: active
      ? "0 2px 6px rgba(0,255,255,0.4), 0 8px 20px rgba(0,255,255,0.2)"
      : "0 2px 8px rgba(255,255,255,0.2), 0 2px 6px rgba(255,255,255,0.1)",
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
  };

  const logoStyle = {
    height: isMobile ? "22px" : "48px",
    width: "auto",
    cursor: "pointer",
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
            }}>
            {/* Brand logo */}
            <img
              src={brand}
              alt="Brand Logo"
              style={{ ...logoStyle, position: "absolute", left: 0 }}
              onClick={() => onNavigate(0)}
            />

            <div style={{ width: "40px" }} />

            {/* Hamburger */}
            <div
              style={hamburgerStyle}
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Logo */}
            <img
              src={brand}
              alt="Brand Logo"
              style={logoStyle}
              onClick={() => onNavigate(0)}
            />

            <div style={itemsContainerStyle}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={itemStyle(
                    item.label === "Speakers"
                      ? currentSection === 4 || currentSection === 5
                      : item.label === "Sponsors"
                      ? [6, 7, 8, 9, 10].includes(currentSection)
                      : item.label === "Highlights"
                      ? currentSection === 11
                      : currentSection === item.id
                  )}
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }>
                  {item.label}
                </div>
              ))}
            </div>

            <div style={{ width: "100px" }} />
          </>
        )}
      </nav>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div style={sidebarStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              style={itemStyle(
                item.label === "Speakers"
                  ? currentSection === 4 || currentSection === 5
                  : item.label === "Sponsors"
                  ? [6, 7, 8, 9, 10].includes(currentSection)
                  : item.label === "Highlights"
                  ? currentSection === 11
                  : currentSection === item.id
              )}
              onClick={() => {
                onNavigate(item.id);
                setSidebarOpen(false);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
