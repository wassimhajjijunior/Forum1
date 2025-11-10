import React, { useRef } from "react";
import triangleUp from "/TimeLine/TrianglesProgramUp.png";
import triangleDown from "/TimeLine/TrianglesProgramdown.png";
import logoF from "/LogoForum.png";
import "../../index.css";

const Schedule = () => {
  const schedule = [
    { time: "07:30", label: "check-in" },
    { time: "08:30", label: "ceremonie d'ouverture" },
    { time: "09:15", label: "keynotes" },
    { time: "10:30", label: "pause café & pause musicale" },
    { time: "11:30", label: "usecase" },
    { time: "11:45", label: "table ronde" },
    { time: "13:00", label: "workshops" },
    { time: "15:00", label: "clôture du Forum" },
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const amount = 200;

      if (direction === "up") {
        // Check if already at the top
        if (container.scrollTop === 0) {
          return; // Don't scroll if at the top
        }
        // Scroll up, but don't go below 0
        const newScrollTop = Math.max(0, container.scrollTop - amount);
        container.scrollTo({
          top: newScrollTop,
          behavior: "smooth",
        });
      } else {
        // Check if already at the bottom
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (container.scrollTop >= maxScroll) {
          return; // Don't scroll if at the bottom
        }
        // Scroll down, but don't exceed max
        const newScrollTop = Math.min(maxScroll, container.scrollTop + amount);
        container.scrollTo({
          top: newScrollTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center overflow-hidden"
      style={{ minHeight: "100vh", width: "100%" }}>
      {/* Fixed Background Logo */}
      <img
        src={logoF}
        alt="background logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[55%] max-w-[400px] pointer-events-none select-none z-0"
        style={{ objectFit: "contain", position: "fixed" }}
      />

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-[80%] md:w-[60%] h-[75vh] md:h-[85vh] overflow-y-auto px-4 py-6 md:px-6 md:py-8 rounded-2xl bg-transparent no-scrollbar font-audiowide">
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {/* Title */}
        <h2 className="font-hazmat-regular text-center text-2xl md:text-3xl text-white tracking-wider  mb-12">
          PROGRAMME DU FORUM
        </h2>

        {/* Timeline Items */}
        <div className="space-y-2 md:space-y-4 relative">
          {schedule.map((item, i) => {
            const isEven = i % 2 === 0;
            const triangle = isEven ? triangleUp : triangleDown;
            const topPosition = isEven ? "62%" : "40%";
            const sideClass = isEven
              ? "left-0 md:left-[20%]"
              : "right-0 md:right-[20%]";

            return (
              <div
                key={i}
                className="relative flex items-center justify-center min-h-[80px] md:min-h-[100px]">
                {/* Time Triangle */}
                <div className={`absolute ${sideClass} flex items-center`}>
                  <div className="relative w-14 h-14 md:w-20 md:h-20">
                    <img
                      src={triangle}
                      alt="triangle"
                      className="w-full h-full object-contain opacity-90"
                    />
                    <span
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 text-white font-hazmat-regular text-[8px] md:text-[12px]"
                      style={{ top: topPosition, left: "50%" }}>
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-center">
                  <span className="text-white font-hazmat-regular text-[12px] md:text-[15px] tracking-widest">
                    {item.label === "ceremonie d'ouverture" ? (
                      item.label.split(" ").map((word, idx) => (
                        <span key={idx}>
                          {word}
                          <br />
                        </span>
                      ))
                    ) : item.label === "pause café & pause musicale" ? (
                      <>
                        <span>
                          pause café &<br />
                        </span>
                        <span>pause musicale</span>
                      </>
                    ) : (
                      item.label
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button
          onClick={() => scroll("up")}
          className="bg-[#b18460]/80 text-white rounded-full p-3 md:p-4 shadow-md hover:bg-[#b18460] transition text-base md:text-lg">
          ↑
        </button>
        <button
          onClick={() => scroll("down")}
          className="bg-[#b18460]/80 text-white rounded-full p-3 md:p-4 shadow-md hover:bg-[#b18460] transition text-base md:text-lg">
          ↓
        </button>
      </div>
    </div>
  );
};

export default Schedule;
