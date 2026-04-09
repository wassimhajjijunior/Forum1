import React, { useState, useEffect, useRef } from "react";

const Teaser = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const containerRef = useRef(null);
  const loadStartTime = useRef(null);

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
      className="w-full max-w-5xl mx-auto aspect-video relative rounded-2xl overflow-hidden border-[3px] border-white/30 bg-[rgba(0,20,40,0.5)] shadow-[0_0_24px_rgba(0,255,255,0.12)]"
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
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
              position: "absolute",
              inset: 0,
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
