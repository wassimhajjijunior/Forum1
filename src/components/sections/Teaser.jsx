import React, { useState, useEffect, useRef } from "react";

const Teaser = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);
  const loadStartTime = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          loadStartTime.current = Date.now();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: isMobile ? "90vw" : "80vw",
        maxWidth: isMobile ? "100%" : "855px",
        height: isMobile ? "22vh" : "65vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2.5rem auto",
        overflow: "hidden",
        borderRadius: "12px",
        backgroundColor: "rgba(0, 20, 40, 0.5)",
        border: "3px solid rgba(255, 255, 255, 0.3)",
        position: "relative",
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            fontSize: isMobile ? "1rem" : "1.2rem",
            fontFamily: "Hazmat Regular, sans-serif",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid rgba(0, 255, 255, 0.3)",
              borderTop: "3px solid gray",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginRight: "15px",
            }}
          />
          Loading...
        </div>
      )}
      
      {isVisible && (
        <iframe
          src="https://player.vimeo.com/video/1135507684?autoplay=1&muted=0&loop=1&background=1&title=0&byline=0&portrait=0&controls=0"
          width="700"
          height="500"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          title="TeaserDelta2025"
          loading="lazy"
          onLoad={() => {
            const elapsed = Date.now() - loadStartTime.current;
            const minLoadTime = 3000;
            const remaining = Math.max(0, minLoadTime - elapsed);
            
            setTimeout(() => {
              setIsLoaded(true);
              setTimeout(() => setShowContent(true), 100);
            }, remaining);
          }}
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            opacity: showContent ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      )}
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Teaser;
