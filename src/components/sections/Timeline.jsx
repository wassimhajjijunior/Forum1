import React, { useRef } from "react";
import triangleUp from "../../assets/TimeLine/TimeUp.jpg";
import triangleDown from "../../assets/TimeLine/TimeDown.jpg";

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
      const amount = 200;
      containerRef.current.scrollBy({
        top: direction === "down" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/your-background-image.jpg')", // 🔁 Change path here
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Timeline Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-[90%] md:w-[70%] h-[80vh] overflow-y-auto px-4 py-4 rounded-2xl backdrop-blur-md bg-black/40 no-scrollbar"
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white tracking-wider mb-14">
          PROGRAMME DU FORUM
        </h2>

        <div className="space-y-10 relative">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center justify-center min-h-[100px]"
            >
              {/* Alternate Time Position */}
              {i % 2 === 0 ? (
                <>
                  {/* Time Left */}
                  <div className="absolute left-0 md:left-[20%] flex items-center group">
                    <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={triangleUp}
                        alt="triangle"
                        className="w-full h-full object-contain opacity-90"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Time Right */}
                  <div className="absolute right-0 md:right-[20%] flex items-center group">
                    <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={triangleDown}
                        alt="triangle"
                        className="w-full h-full object-contain opacity-90"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Label */}
              <div className="text-center mt-8">
                <span className="text-white font-bold text-lg md:text-xl tracking-widest whitespace-nowrap">
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
          className="bg-[#b18460]/80 text-white rounded-full p-2 shadow-md hover:bg-[#b18460] transition"
        >
          ↑
        </button>
        <button
          onClick={() => scroll("down")}
          className="bg-[#b18460]/80 text-white rounded-full p-2 shadow-md hover:bg-[#b18460] transition"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default Schedule;
