import React from "react";

const Loading = ({ style }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at center, #6398ad, #060b3b)",
        zIndex: 1999,
        overflow: "hidden",
        ...style,
      }}
    >
      <img 
        src="/LogoForum.png" 
        alt="Loading..." 
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      />
      
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(0.6);
              opacity: 1;
            }
            50% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;