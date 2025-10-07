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
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00ffff",
    background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
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
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(1.05)",
      background: "rgba(0,255,255,0.1)",
    },
  });

  const registerButtonStyle = {
    padding: "6px 16px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "bold",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 0 5px rgba(0,255,255,0.5), 0 0 10px rgba(0,255,255,0.3)",
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
    boxShadow: "2px 0 15px rgba(0,255,255,0.2)",
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
            {/* Logo */}
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                textShadow: "0 0 5px #00ffff",
                position: "absolute",
                left: 15,
              }}
            >
              SUPCOM
            </div>

            {/* Register button */}
            <button
              style={{
                ...registerButtonStyle,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Registeration
            </button>

            {/* Hamburger */}
            <div
              style={hamburgerStyle}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </div>
          </div>
        ) : (
          <>
            {/* Desktop */}
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

            <div style={itemsContainerStyle}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={itemStyle(currentSection === item.id)}
                  onClick={() => onNavigate(item.id)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  {item.label}
                </div>
              ))}
            </div>

            <button
              style={registerButtonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Registeration
            </button>
          </>
        )}
      </nav>

      {/* Mobile Sidebar */}
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
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
