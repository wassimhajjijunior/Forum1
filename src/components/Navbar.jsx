import React, { useState, useEffect } from "react";
import brand from "/LOGO_SUPCOM.png";

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Timer state
  const [timeLeft, setTimeLeft] = useState({});
  const registrationDate = new Date("2025-11-12T07:30:00");

  useEffect(() => {
    const interval = setInterval(() => {
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
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { id: 0, label: "Home" },
    { id: 1, label: "Description" },
    { id: 2, label: "Photos" },
    { id: 3, label: "Teaser" },
    { id: 4, label: "Speakers" }, // Covers section 4 & 6
    { id: 7, label: "Sponsors" }, // Covers section 7 to 11
    { id: 12, label: "Timeline" },
    { id: 13, label: "Venue" },
    { id: 14, label: "Registration" },
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

  const registerButtonStyle = {
    padding: "7px 20px 10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow:
      "0 0 8px rgba(0,255,255,0.5), 0 0 15px rgba(0,255,255,0.3), 0 2px 8px rgba(255,255,255,0.3)",
    fontFamily:
      "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const timerStyle = {
    fontSize: "12px",
    color: "#ffffffcc",
    marginTop: "6px",
    animation: "pulse 1s infinite",
    textAlign: "center",
    fontFamily:
      "Hazmat Regular, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

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

            {/* Register button + timer container */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <button
                style={registerButtonStyle}
                onClick={() => {
                  onNavigate(14);
                  setSidebarOpen(false);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }>
                Registration
              </button>

              {currentSection !== 0 && (
                <div style={timerStyle}>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                  {timeLeft.seconds}s
                </div>
              )}
            </div>

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
              {items
                .filter((item) => item.label !== "Registration")
                .map((item) => (
                  <div
                    key={item.id}
                    style={itemStyle(
                      item.label === "Speakers"
                        ? currentSection === 4 ||
                            currentSection === 5 ||
                            currentSection === 6
                        : item.label === "Sponsors"
                        ? [7, 8, 9, 10,11].includes(currentSection)
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

            {/* Register button + timer */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <button
                style={registerButtonStyle}
                onClick={() => onNavigate(14)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }>
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

      {/* Mobile Sidebar */}
      {isMobile && (
        <div style={sidebarStyle}>
          {items
            .filter((item) => item.label !== "Registration")
            .map((item) => (
              <div
                key={item.id}
                style={itemStyle(
                  item.label === "Speakers"
                    ? currentSection === 4 || currentSection === 5 || currentSection === 6
                    : item.label === "Sponsors"
                    ? [7, 8, 9, 10,11].includes(currentSection)
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
