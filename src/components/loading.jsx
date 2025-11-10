import React from "react";
import loadervideo from "/LoadingPage.mp4";

const Loading = ({ style }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh", // full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at center, #6398ad, #060b3b)",
        zIndex: 1999,
        overflow: "hidden",
        ...style,
      }}
    >
      <video
        src={loadervideo}
        autoPlay
        loop
        muted
        style={{
          maxHeight: "40vh", // responsive height
          maxWidth: "40vw",  // responsive width
          objectFit: "contain", // keeps aspect ratio
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default Loading;
