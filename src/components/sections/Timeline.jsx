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
      const amount = 150;
      containerRef.current.scrollBy({
        top: direction === "down" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center overflow-hidden"
      style={{
        minHeight: "100vh",
        width: "100%",
      }}>
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
        className="relative z-10 w-[80%] md:w-[65%] h-[75vh] overflow-y-auto px-4 py-4 rounded-2xl bg-transparent no-scrollbar font-audiowide">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Title */}
        <h2 className="font-hazmat-regular text-center text-2xl md:text-2xl  text-white tracking-wider mb-8">
          PROGRAMME DU FORUM
        </h2>

        <div className=" space-y-1 relative">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center min-h-[80px]">
              {/* Alternate Time Position */}
              {i % 2 === 0 ? (
                // Time Left (triangleUp)
                <div className="absolute left-0 md:left-[23%] flex items-center ">
                  <div className="relative w-14 h-14">
                    <img
                      src={triangleUp}
                      alt="triangle"
                      className="w-full h-full object-contain opacity-90"
                    />
                    <span className="absolute top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-hazmat-regular text-[8px]">
                      {item.time}
                    </span>
                  </div>
                </div>
              ) : (
                // Time Right (triangleDown)
                <div className="absolute right-0 md:right-[23%] flex items-center ">
                  <div className="relative w-14 h-14">
                    <img
                      src={triangleDown}
                      alt="triangle"
                      className="w-full h-full object-contain opacity-90"
                    />
                    <span className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-hazmat-regular text-[8px]">
                      {item.time}
                    </span>
                  </div>
                </div>
              )}

              {/* Label */}
              <div className="text-center">
                <span className="text-white font-hazmat-regular text-[12px] tracking-widest">
                  {item.label === "ceremonie d'ouverture" ? (
                    // Each word on its own line
                    item.label.split(" ").map((word, index) => (
                      <span key={index}>
                        {word}
                        <br />
                      </span>
                    ))
                  ) : item.label === "pause café & pause musicale" ? (
                    // Break after "pause café & pause"
                    <>
                      <span>
                        pause café &<br />
                      </span>
                      <span> pause musicale </span>
                    </>
                  ) : (
                    // Normal label
                    <span>{item.label}</span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        <button
          onClick={() => scroll("up")}
          className="bg-[#b18460]/80 text-white rounded-full p-2.5 shadow-md hover:bg-[#b18460] transition text-base">
          ↑
        </button>
        <button
          onClick={() => scroll("down")}
          className="bg-[#b18460]/80 text-white rounded-full p-2.5 shadow-md hover:bg-[#b18460] transition text-base">
          ↓
        </button>
      </div>
    </div>
  );
};

export default Schedule;
