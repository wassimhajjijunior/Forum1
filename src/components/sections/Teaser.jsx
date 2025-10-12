import React, { useState, useEffect } from "react";
import videoFile from "../../assets/Video/Teaser1.mp4";

const TeaserVideo = () => {
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
        width: isMobile ? "75vw" : "60vw",
        height: isMobile ? "30vh" : "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2.5rem",
        overflow: "hidden",
        borderRadius:"8px",
        backgroundColor: "transparent",
      }}
    >
      <video
        src={videoFile}
        autoPlay
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default TeaserVideo;
