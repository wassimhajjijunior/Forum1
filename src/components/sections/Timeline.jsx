import React, { useRef } from "react";
import triangleUp from "../../assets/TimeLine/TimeUp.jpg";
import triangleDown from "../../assets/TimeLine/TimeDown.jpg";
import logoF from "../../assets/Logof.png";

const Schedule = () => {
  const schedule = [
    { time: "7:30", label: "INSCRIPTION" },
    { time: "8:30", label: "MOT D'OUVERTURE" },
    { time: "9:15", label: "CONFÉRENCE" },
    { time: "9:45", label: "KEYNOTES" },
    { time: "10:30", label: "PAUSE CAFÉ" },
    { time: "11:30", label: "CONFÉRENCE" },
    { time: "12:00", label: "TABLE RONDE" },
    { time: "12:45", label: "DÉJEUNER" },
    { time: "14:00", label: "WORKSHOPS" },
    { time: "16:00", label: "CLÔTURE DU FORUM" },
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
      {/* ✅ Fixed Background Logo */}
      <img
        src={logoF}
        alt="background logo"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-[55%] max-w-[400px] pointer-events-none select-none z-0"
        style={{
          objectFit: "contain",
          position: "fixed", 
        }}
      />

      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-[90%] md:w-[65%] h-[75vh] overflow-y-auto px-4 py-4 rounded-2xl bg-transparent no-scrollbar font-audiowide">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-2xl font-extrabold text-white tracking-wider mb-8">
          PROGRAMME DU FORUM
        </h2>

        <div className="space-y-1 relative">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center min-h-[80px]">
              {/* Alternate Time Position */}
              {i % 2 === 0 ? (
                <>
                  {/* Time Left */}
                  <div className="absolute left-0 md:left-[23%] flex items-center group">
                    <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={triangleUp}
                        alt="triangle"
                        className="w-full h-full object-contain opacity-90"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Time Right */}
                  <div className="absolute right-0 md:right-[23%] flex items-center group">
                    <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={triangleDown}
                        alt="triangle"
                        className="w-full h-full object-contain opacity-90"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Label */}
              <div className="text-center mt-5">
                <span className="text-white font-semibold text-sm md:text-base tracking-widest whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
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
