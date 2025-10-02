import React, { useState, useEffect } from "react";

const Navbar = ({ currentSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: scrolled ? "55px" : "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    color: "#00ffff",
    background: scrolled 
      ? "rgba(0,0,0,0.85)" 
      : "rgba(0,0,0,0.6)",
    backdropFilter: "blur(12px)",
    boxShadow: scrolled 
      ? "0 4px 20px rgba(0,255,255,0.1)" 
      : "none",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    borderBottom: scrolled 
      ? "1px solid rgba(0,255,255,0.2)" 
      : "1px solid transparent",
  };

  const logoStyle = {
    fontSize: "18px",
    fontWeight: "800",
    cursor: "pointer",
    textShadow: "0 0 10px rgba(0,255,255,0.6), 0 0 20px rgba(0,255,255,0.3)",
    letterSpacing: "1px",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    transition: "all 0.3s ease",
  };

  const desktopItemsStyle = {
    display: isMobile ? "none" : "flex",
    gap: "8px",
    alignItems: "center",
  };

  const desktopItemStyle = (active) => ({
    cursor: "pointer",
    color: active ? "#00ffff" : "#ffffff",
    fontSize: "14px",
    fontWeight: active ? 600 : 500,
    padding: "8px 16px",
    borderRadius: "8px",
    background: active 
      ? "rgba(0,255,255,0.15)" 
      : "transparent",
    transition: "all 0.3s ease",
    textShadow: active ? "0 0 8px rgba(0,255,255,0.5)" : "none",
    border: active ? "1px solid rgba(0,255,255,0.3)" : "1px solid transparent",
  });

  const desktopRegisterStyle = {
    padding: "8px 20px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0,255,255,0.4)",
    marginLeft: "8px",
  };

  const hamburgerStyle = {
    cursor: "pointer",
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    gap: "4px",
    width: "24px",
    height: "20px",
    justifyContent: "center",
    zIndex: 1001,
  };

  const barStyle = (index) => ({
    width: "100%",
    height: "2.5px",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    borderRadius: "10px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 0 8px rgba(0,255,255,0.5)",
    transform: menuOpen
      ? index === 0
        ? "rotate(45deg) translateY(6.5px)"
        : index === 1
        ? "scaleX(0)"
        : "rotate(-45deg) translateY(-6.5px)"
      : "none",
    opacity: menuOpen && index === 1 ? 0 : 1,
  });

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "rgba(0,0,0,0.7)",
    opacity: menuOpen ? 1 : 0,
    pointerEvents: menuOpen ? "auto" : "none",
    transition: "opacity 0.3s ease",
    zIndex: 998,
  };

  const itemsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    top: 0,
    right: menuOpen ? 0 : "-100%",
    width: "75%",
    maxWidth: "320px",
    height: "100vh",
    background: "linear-gradient(180deg, rgba(0,20,40,0.98) 0%, rgba(0,10,20,0.98) 100%)",
    paddingTop: "80px",
    gap: "6px",
    justifyContent: "flex-start",
    transition: "right 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 999,
    overflowY: "auto",
    boxShadow: "-10px 0 40px rgba(0,255,255,0.15)",
    borderLeft: "1px solid rgba(0,255,255,0.2)",
  };

  const itemStyle = (active, index) => ({
    cursor: "pointer",
    color: active ? "#00ffff" : "#ffffff",
    fontSize: "15px",
    fontWeight: active ? 600 : 500,
    padding: "12px 20px",
    borderRadius: "10px",
    width: "85%",
    textAlign: "left",
    background: active 
      ? "linear-gradient(135deg, rgba(0,255,255,0.2), rgba(0,170,255,0.1))" 
      : "rgba(255,255,255,0.03)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textShadow: active ? "0 0 8px rgba(0,255,255,0.5)" : "none",
    border: active ? "1px solid rgba(0,255,255,0.3)" : "1px solid transparent",
    transform: menuOpen ? "translateX(0)" : "translateX(100px)",
    opacity: menuOpen ? 1 : 0,
    transitionDelay: menuOpen ? `${index * 0.05}s` : "0s",
  });

  const registerButtonStyle = {
    padding: "12px 28px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #00ffff, #00aaff)",
    color: "#000",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 15px rgba(0,255,255,0.4)",
    marginTop: "20px",
    width: "85%",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    transform: menuOpen ? "translateY(0)" : "translateY(50px)",
    opacity: menuOpen ? 1 : 0,
    transitionDelay: menuOpen ? "0.4s" : "0s",
  };

  return (
    <>
      <nav style={navbarStyle}>
        {/* Logo */}
        <div
          style={logoStyle}
          onClick={() => {
            onNavigate(0);
            setMenuOpen(false);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SUPCOM
        </div>

        {/* Desktop Navigation */}
        <div style={desktopItemsStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              style={desktopItemStyle(currentSection === item.id)}
              onClick={() => onNavigate(item.id)}
              onMouseEnter={(e) => {
                if (currentSection !== item.id) {
                  e.currentTarget.style.background = "rgba(0,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(0,255,255,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentSection !== item.id) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              {item.label}
            </div>
          ))}
          <button
            style={desktopRegisterStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,255,255,0.4)";
            }}
          >
            Register
          </button>
        </div>

        {/* Animated Hamburger */}
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={barStyle(0)} />
          <div style={barStyle(1)} />
          <div style={barStyle(2)} />
        </div>
      </nav>

      {/* Overlay */}
      {isMobile && (
        <div style={overlayStyle} onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div style={itemsContainerStyle}>
          {items.map((item, index) => (
            <div
              key={item.id}
              style={itemStyle(currentSection === item.id, index)}
              onClick={() => {
                onNavigate(item.id);
                setMenuOpen(false);
              }}
              onMouseEnter={(e) => {
                if (currentSection !== item.id) {
                  e.currentTarget.style.background = "rgba(0,255,255,0.1)";
                  e.currentTarget.style.transform = "translateX(-4px)";
                  e.currentTarget.style.borderColor = "rgba(0,255,255,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (currentSection !== item.id) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              {item.label}
            </div>
          ))}

          <button
            style={registerButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,255,255,0.4)";
            }}
          >
            Register Now
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;