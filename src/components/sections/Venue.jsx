import React, { useState, useRef } from "react";

const Venue = () => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const startXRef = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX - dragX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - startXRef.current;
    const clampedX = Math.max(0, Math.min(267, newX));
    setDragX(clampedX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // If dragged more than halfway, expand fully and lock
    if (dragX > 133) {
      setDragX(267);
      setIsExpanded(true);
    } else {
      // Otherwise return to starting position
      setDragX(0);
      setIsExpanded(false);
    }
  };

  // Left part stays fixed, center and right move to align perfectly
  const part1X = 0; // Left part stays fixed at 0
  const part2X = dragX * 0.498; // Center aligns at 133px
  const part3X = dragX * 1.0; // Right aligns at 267px

  return (
    <div
      className="w-screen h-screen flex justify-center items-center overflow-hidden"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="relative w-[400px] h-[250px]">
        {/* Left Part - stays fixed */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${part1X}px`,
            width: "133px",
            height: "250px",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            borderRadius: "2px",
            transition: isDragging ? "none" : "left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 30,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2stn!4v1234567890"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "400px",
              height: "250px",
              border: "none",
            }}
            title="Map Left"
          />
        </div>

        {/* Center Part - moves to middle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${part2X}px`,
            width: "134px",
            height: "250px",
            boxShadow: "0 0 15px rgba(0,0,0,0.15)",
            borderRadius: "2px",
            transition: isDragging ? "none" : "left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 20,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2stn!4v1234567890"
            style={{
              position: "absolute",
              top: 0,
              left: "-133px",
              width: "400px",
              height: "250px",
              border: "none",
            }}
            title="Map Center"
          />
        </div>

        {/* Right Part - moves full distance */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${part3X}px`,
            width: "133px",
            height: "250px",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)",
            borderRadius: "2px",
            transition: isDragging ? "none" : "left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 10,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2stn!4v1234567890"
            style={{
              position: "absolute",
              top: 0,
              left: "-267px",
              width: "400px",
              height: "250px",
              border: "none",
            }}
            title="Map Right"
          />
        </div>
      </div>
    </div>
  );
};

export default Venue;