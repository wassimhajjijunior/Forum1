import React, { useState, useEffect } from "react";

const Teaser = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: isMobile ? "90vw" : "80vw", // bigger width
        maxWidth: isMobile? "100%" : "855px", // max width for large screens
        height: isMobile ? "22vh" : "65vh", // bigger height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2.5rem auto", // centered
        overflow: "hidden",
        borderRadius: "12px",
        backgroundColor: "transparent",
      }}>
      <iframe
        src="https://www.youtube.com/embed/ZQvU5OGcAh0?autoplay=1&mute=0&loop=1&playlist=ZQvU5OGcAh0&controls=0&modestbranding=1&playsinline=1"
        title="Teaser Video"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Teaser;
