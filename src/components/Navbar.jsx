    // src/components/Navbar.jsx
    import React from "react";

    const sections = ["Home", "About", "Projects", "Contact"];

    const Navbar = ({ currentSection, onNavigate }) => {
    const navbarStyle = {
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "rgba(0,0,0,0.5)",
        padding: "10px 20px",
        borderRadius: 10,
    };

    const ulStyle = {
        listStyle: "none",
        display: "flex",
        gap: 20,
        margin: 0,
        padding: 0,
    };

    const liStyle = (isActive) => ({
        cursor: "pointer",
        color: isActive ? "#00ffff" : "white",
        fontWeight: isActive ? "bold" : 500,
        transition: "color 0.2s",
    });

    return (
        <nav style={navbarStyle}>
        <ul style={ulStyle}>
            {sections.map((sec, index) => (
            <li
                key={sec}
                style={liStyle(currentSection === index)}
                onClick={() => onNavigate(index)}
            >
                {sec}
            </li>
            ))}
        </ul>
        </nav>
    );
    };

    export default Navbar;
