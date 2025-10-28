import React, { useState, useRef } from "react";

const Venue = () => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullyOpen, setIsFullyOpen] = useState(false);
  const startXRef = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX - dragX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isFullyOpen) return; // prevent moving if fully open
    const newX = e.clientX - startXRef.current;
    const clampedX = Math.max(0, Math.min(267, newX));
    setDragX(clampedX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!isFullyOpen && dragX > 133) {
      setDragX(267);
      setTimeout(() => {
        setIsFullyOpen(true);
      }, 550);
    }
  };

  const part1X = 0;
  const part2X = dragX * 0.498;
  const part3X = dragX * 1.0;

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.936710397326!2d10.1877739!3d36.8918623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb6fc49b7883%3A0x84da64ea383c01d2!2s%C3%89cole%20Sup%C3%A9rieure%20des%20communications%20de%20Tunis!5e0!3m2!1sfr!2stn!4v1761565205564!5m2!1sfr!2stn";

  const transitionStyle = isDragging
    ? "none"
    : "left 0.5s cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      className="w-screen h-screen flex justify-center items-center overflow-hidden"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="relative w-[390px] h-[230px]">
        {/* Single unified map - preloaded and hidden */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "400px",
            height: "250px",
            borderRadius: "6px",
            overflow: "hidden",
            zIndex: 40,
            opacity: isFullyOpen ? 1 : 0,
            pointerEvents: isFullyOpen ? "auto" : "none",
          }}
        >
          <iframe
            src={mapSrc}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "400px",
              height: "250px",
              border: "none",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Full"
          />
        </div>

        {/* Three-part split view when animating or not fully open */}
        {!isFullyOpen && (
          <>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${part1X}px`,
                width: "135px",
                height: "250px",
                borderRadius: "6px 0 0 6px",
                transition: transitionStyle,
                overflow: "hidden",
                zIndex: 30,
              }}
            >
              {/* Cover that hides when dragging starts */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "135px",
                  height: "250px",
                  backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=600&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "6px 0 0 6px",
                  zIndex: 50,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  opacity: dragX === 0 ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  overflow: "hidden",
                }}
              >
                {/* Subtle dark overlay for text visibility */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.3)",
                  zIndex: 1,
                }}></div>

                {/* Venue location icon */}
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ marginBottom: "16px", zIndex: 2, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}>
                  <circle cx="32" cy="32" r="28" fill="rgba(255, 255, 255, 0.2)" stroke="white" strokeWidth="2"/>
                  <path d="M32 16C26.48 16 22 20.48 22 26C22 33 32 46 32 46C32 46 42 33 42 26C42 20.48 37.52 16 32 16ZM32 30C29.79 30 28 28.21 28 26C28 23.79 29.79 22 32 22C34.21 22 36 23.79 36 26C36 28.21 34.21 30 32 30Z" fill="white"/>
                </svg>

                {/* Pull tab design */}
                <div style={{
                  width: "60px",
                  height: "80px",
                  background: "rgba(255, 255, 255, 0.25)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  zIndex: 2,
                }}>
                  {/* Three horizontal lines (grip indicator) */}
                  <div style={{ width: "30px", height: "3px", background: "white", borderRadius: "2px" }}></div>
                  <div style={{ width: "30px", height: "3px", background: "white", borderRadius: "2px" }}></div>
                  <div style={{ width: "30px", height: "3px", background: "white", borderRadius: "2px" }}></div>
                  
                  {/* Arrow pointing right */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginTop: "4px" }}>
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <span style={{ fontSize: "13px", fontWeight: "600", marginTop: "12px", opacity: 0.9, zIndex: 2, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>Pull to view venue</span>
              </div>
              <iframe
                src={mapSrc}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "400px",
                  height: "250px",
                  border: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Left"
              />
            </div>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${part2X - 1}px`,
                width: "134px",
                height: "250px",
                transition: transitionStyle,
                overflow: "hidden",
                zIndex: 20,
              }}
            >
              <iframe
                src={mapSrc}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-133px",
                  width: "400px",
                  height: "250px",
                  border: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Center"
              />
            </div>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: `${part3X - 2}px`,
                width: "135px",
                height: "250px",
                borderRadius: "0 6px 6px 0",
                transition: transitionStyle,
                overflow: "hidden",
                zIndex: 10,
              }}
            >
              <iframe
                src={mapSrc}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-267px",
                  width: "400px",
                  height: "250px",
                  border: "none",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Right"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Venue;