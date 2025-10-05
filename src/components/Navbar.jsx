import React, { useState, useEffect } from "react";

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const items = [
    { id: 0, label: "Home" },
    { id: 1, label: "Description" },
    { id: 2, label: "Photos" },
    { id: 3, label: "Speakers" },
    { id: 4, label: "Sponsors" },
    { id: 5, label: "Teaser" },
    { id: 6, label: "Timeline" },
    { id: 7, label: "Venue" },
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
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px 0 20px",
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00ffff",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(6px)",
  };

  const itemsContainerStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "12px",
  };

  const itemStyle = (active) => ({
    position: "relative",
    cursor: "pointer",
    color: active ? "#00ffff" : "#ffffffaa",
    fontSize: "14px",
    fontWeight: 500,
    padding: "4px 10px",
    borderRadius: "6px",
    backdropFilter: "blur(6px)",
    background: active ? "rgba(0,255,255,0.15)" : "rgba(255,255,255,0.03)",
    transition: "all 0.3s ease",
    textShadow: active ? "0 0 5px #00ffff" : "none",
  });

  const registerButtonStyle = {
    padding: "6px 16px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 0 5px rgba(0,255,255,0.5), 0 0 10px rgba(0,255,255,0.3)",
  };

  const sidebarStyle = {
    position: "fixed",
    top: 45,
    left: sidebarOpen ? 5 : "-225px",
    width: "220px",
    height: "auto",
    background: "transparent",
    backdropFilter: "blur(8px)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "15px",
    transition: "left 0.3s ease",
    zIndex: 1100,
    border: "1px solid rgba(0,255,255,0.5)",
  };

  const hamburgerStyle = {
    fontSize: "22px",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
    color: "#00ffff",
  };

  return (
    <>
      <nav style={navbarStyle}>
        {/* Mobile layout: logo, centered register button, hamburger */}
        {isMobile ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "50px",
              padding: "0 10px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {/* Logo */}
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                textShadow: "0 0 5px #00ffff",
              }}
            >
              SUPCOM
            </div>

            {/* Register Button */}
            <button style={registerButtonStyle}>Registeration</button>

            {/* Hamburger */}
            <div style={hamburgerStyle} onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </div>
          </div>
        ) : (
          <>
            {/* Left: Logo */}
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                textShadow: "0 0 5px #00ffff",
              }}
            >
              SUPCOM
            </div>

            {/* Center: Menu Items */}
            <div style={itemsContainerStyle}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={itemStyle(currentSection === item.id)}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Right: Register Button */}
            <button style={registerButtonStyle}>Registeration</button>
          </>
        )}
      </nav>

      {/* Sidebar for mobile */}
      {isMobile && (
        <div style={sidebarStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              style={itemStyle(currentSection === item.id)}
              onClick={() => {
                onNavigate(item.id);
                setSidebarOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
