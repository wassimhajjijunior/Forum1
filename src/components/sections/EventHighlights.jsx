import React, { useState, useEffect, useRef } from "react";

const EventHighlights = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);
  const loadStartTime = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          loadStartTime.current = Date.now();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "#00ffff",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontFamily: "Hazmat Regular, sans-serif",
          marginBottom: "2rem",
          textAlign: "center",
          textShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
        }}
      >
        Event Highlights
      </h2>

      {/* Video Wrapper */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          maxWidth: "800px",
          aspectRatio: "16 / 9",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          border: "3px solid rgba(0, 255, 255, 0.4)",
          boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
        }}
      >
        {/* Loading Overlay */}
        {!isLoaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0, 20, 40, 0.7)",
              color: "#00ffff",
              fontFamily: "Hazmat Regular, sans-serif",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                border: "4px solid rgba(0, 255, 255, 0.2)",
                borderTop: "4px solid #00ffff",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginBottom: "15px",
              }}
            />
            Loading Video...
          </div>
        )}

        {/* Vimeo Video */}
        {isVisible && (
          <iframe
            src="https://player.vimeo.com/video/1165826323?badge=0&autopause=0&autoplay=1&title=0&byline=0&portrait=0&controls=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Forum Delta VI Highlights"
            onLoad={() => {
              const elapsed = Date.now() - loadStartTime.current;
              const minLoadTime = 1500;
              const remaining = Math.max(0, minLoadTime - elapsed);

              setTimeout(() => {
                setIsLoaded(true);
                setTimeout(() => setShowContent(true), 100);
              }, remaining);
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              opacity: showContent ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
            }}
          />
        )}

        {/* Spinner Animation */}
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>

      {/* Description */}
      <p
        style={{
          color: "#a0b0c0",
          fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
          fontFamily: "Hazmat Regular, sans-serif",
          marginTop: "2rem",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: "1.6",
        }}
      >
        Relive the best moments from Forum Delta VI — featuring inspiring
        talks, workshops, and networking sessions.
      </p>
    </div>
  );
};

export default EventHighlights;
