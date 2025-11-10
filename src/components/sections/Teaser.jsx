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
        maxWidth: isMobile ? "100%" : "855px", // max width for large screens
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
        src="https://player.vimeo.com/video/1135507684?badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
        width="700"
        height="500"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        title="TeaserDelta2025"></iframe>
    </div>
  );
};

export default Teaser;
