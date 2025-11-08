import React, { useState, useEffect } from "react";
import brand from "/LOGO_SUPCOM.png"; // ✅ Move to /src/assets/

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Timer
  const [timeLeft, setTimeLeft] = useState({});
  const registrationDate = new Date("2025-11-12T08:00:00");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = registrationDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
    return () => clearInterval(interval);
  }, []);

  // ✅ Mobile detection (matchMedia-based)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e) => setIsMobile(e.matches);
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const items = [
    { id: 0, label: "Home" },
    { id: 1, label: "Description" },
    { id: 2, label: "Photos" },
    { id: 3, label: "Speakers" },
    { id: 6, label: "Sponsors" },
    { id: 11, label: "Teaser" },
    { id: 12, label: "Timeline" },
    { id: 13, label: "Venue" },
    { id: 14, label: "Registration" },
  ];

  // ✅ All your styles (unchanged, just minor cleanup)
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "45px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 12px",
    zIndex: 1000,
    color: "#00ffff",
    background: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  };

  const itemsContainerStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "12px",
  };

  const itemStyle = (active) => ({
    cursor: "pointer",
    color: active ? "#00ffff" : "#ffffffaa",
    fontSize: "9px",
    fontWeight: 500,
    padding: "3px 8px 6px",
    borderRadius: "5px",
    backdropFilter: "blur(6px)",
    background: active ? "rgba(0,255,255,0.15)" : "rgba(255,255,255,0.03)",
    transition: "all 0.3s ease",
    boxShadow: active
      ? "0 1px 4px rgba(0,255,255,0.4), 0 4px 16px rgba(0,255,255,0.2)"
      : "0 1px 6px rgba(255,255,255,0.2), 0 1px 3px rgba(255,255,255,0.1)",
  });

  const registerButtonStyle = {
    padding: "5px 14px 7px",
    borderRadius: "7px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "bold",
    fontSize: "9px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow:
      "0 0 5px rgba(0,255,255,0.5), 0 0 10px rgba(0,255,255,0.3), 0 2px 8px rgba(255,255,255,0.3)",
  };

  const logoStyle = {
    height: isMobile ? "22px" : "28px",
    width: "auto",
    cursor: "pointer",
  };

  const timerStyle = {
    fontSize: "7px",
    color: "#ffffffcc",
    marginTop: "4px",
    animation: "pulse 1s infinite",
    textAlign: "center",
  };

  const sidebarStyle = {
    position: "fixed",
    top: 55,
    left: sidebarOpen ? 0 : "-250px",
    width: "220px",
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

  // ✅ Return (unchanged design)
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
              height: "55px",
              position: "relative",
            }}
          >
            <img
              src={brand}
              alt="Brand Logo"
              style={{ ...logoStyle, position: "absolute", left: 0 }}
              onClick={() => onNavigate(0)}
            />

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button
                style={registerButtonStyle}
                onClick={() => {
                  onNavigate(14);
                  setSidebarOpen(false);
                }}
              >
                Registration
              </button>

              {currentSection !== 0 && (
                <div style={timerStyle}>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                  {timeLeft.seconds}s
                </div>
              )}
            </div>

            <div style={hamburgerStyle} onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </div>
          </div>
        ) : (
          <>
            <img src={brand} alt="Brand Logo" style={logoStyle} onClick={() => onNavigate(0)} />

            <div style={itemsContainerStyle}>
              {items
                .filter((item) => item.label !== "Registration")
                .map((item) => (
                  <div
                    key={item.id}
                    style={itemStyle(currentSection === item.id)}
                    onClick={() => onNavigate(item.id)}
                  >
                    {item.label}
                  </div>
                ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button style={registerButtonStyle} onClick={() => onNavigate(14)}>
                Registration
              </button>

              {currentSection !== 0 && (
                <div style={timerStyle}>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                  {timeLeft.seconds}s
                </div>
              )}
            </div>
          </>
        )}
      </nav>

      {isMobile && (
        <div style={sidebarStyle}>
          {items
            .filter((item) => item.label !== "Registration")
            .map((item) => (
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
