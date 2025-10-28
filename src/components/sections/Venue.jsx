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
