import React from "react";

const Navbar = ({ currentSection, onNavigate }) => {
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

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    zIndex: 1000,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#00ffff",
  };

  const itemsContainerStyle = {
    display: "flex",
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

  // Modern, interactive Register button style
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

  return (
    <nav style={navbarStyle}>
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(0,255,255,0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                currentSection === item.id
                  ? "rgba(0,255,255,0.15)"
                  : "rgba(255,255,255,0.03)")
            }
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Right: Register Button */}
      <button
        style={registerButtonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow =
            "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 0 5px rgba(0,255,255,0.5), 0 0 10px rgba(0,255,255,0.3)";
        }}
      >
        Register
      </button>
    </nav>
  );
};

export default Navbar;
