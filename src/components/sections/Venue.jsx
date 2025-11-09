import React, { useState, useEffect, useRef } from "react";
import bg from "/supcombg.jpg";

const Venue = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const frameRef = useRef(null);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.936710397326!2d10.1877739!3d36.8918623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb6fc49b7883%3A0x84da64ea383c01d2!2s%C3%89cole%20Sup%C3%A9rieure%20des%20communications%20de%20Tunis!5e0!3m2!1sfr!2stn!4v1761565205564!5m2!1sfr!2stn";

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate progress
  useEffect(() => {
    if (isOpen) {
      const duration = 2500;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3.5);

      const animate = (time) => {
        const elapsed = time - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = ease(t);
        setProgress(eased);
        if (t < 1) frameRef.current = requestAnimationFrame(animate);
        else {
          setProgress(1);
          cancelAnimationFrame(frameRef.current);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameRef.current);
    }
  }, [isOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isOpen) setIsOpen(true);
  };

  // Adjust animation distances for mobile
  const middleX = isMobile ? progress * 100 : progress * 150;
  const rightX = isMobile ? progress * 190 : progress * 250;

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-transparent p-4">
      <div
        className={`flex flex-col md:flex-row items-center justify-between w-full max-w-[1000px] gap-6 md:gap-10`}
      >
        {/* Map Animation */}
        <div className="relative w-full md:w-[350px] h-[200px]">
          {/* Full Map */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "10px",
              overflow: "hidden",
              opacity: progress,
              transition: "opacity 0.8s ease",
              zIndex: 10,
            }}
          >
            <iframe
              src={mapSrc}
              style={{ width: "100%", height: "100%", border: "none" }}
              loading="lazy"
              title="Full Map"
            />
          </div>

          {/* Split parts */}
          {progress < 1 && (
            <>
              {/* Left Part */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100px",
                  height: "100%",
                  overflow: "hidden",
                  zIndex: 30,
                }}
              >
                <div
                  onClick={handleClick}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "12px",
                    cursor: "pointer",
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(3px)",
                    opacity: 1 - progress,
                    transition: "opacity 0.8s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(0,0,0,0.45)")
                  }
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 64 64"
                    fill="none"
                    style={{ marginBottom: "8px" }}
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="rgba(255,255,255,0.2)"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M32 16C26.48 16 22 20.48 22 26C22 33 32 46 32 46C32 46 42 33 42 26C42 20.48 37.52 16 32 16ZM32 30C29.79 30 28 28.21 28 26C28 23.79 29.79 22 32 22C34.21 22 36 23.79 36 26C36 28.21 34.21 30 32 30Z"
                      fill="white"
                    />
                  </svg>
                  Click to view venue
                </div>
              </div>

              {/* Middle Part */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transform: `translateX(${middleX}px)`,
                  width: "100px",
                  height: "100%",
                  overflow: "hidden",
                  zIndex: 20,
                }}
              >
                <iframe
                  src={mapSrc}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100px",
                    width: "300px",
                    height: "100%",
                    border: "none",
                  }}
                  loading="lazy"
                  title="Map Middle"
                />
              </div>

              {/* Right Part */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  transform: `translateX(${rightX}px)`,
                  width: "100px",
                  height: "100%",
                  borderRadius: "0 10px 10px 0",
                  overflow: "hidden",
                  zIndex: 15,
                }}
              >
                <iframe
                  src={mapSrc}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-200px",
                    width: "300px",
                    height: "100%",
                    border: "none",
                  }}
                  loading="lazy"
                  title="Map Right"
                />
              </div>
            </>
          )}
        </div>

        {/* Card Section */}
        <div
          className="relative w-full md:w-[350px] h-[200px] rounded-xl overflow-hidden text-white flex flex-col justify-center p-4"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 80%)",
            }}
          />
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-[8px] sm:text-[10px] md:text-[10px] text-sky-400 font-semibold mb-2">
              HIGHER SCHOOL OF COMMUNICATION OF TUNIS, Ariana
            </h3>
            <p className="text-[8px] sm:text-[10px] md:text-[9px] text-white/80 leading-relaxed">
              Sup'Com is a leading college for telecommunications engineers in Tunisia.
              Affiliated to the University of Carthage, the Higher School of Communications
              of Tunis (Sup'Com) is among the top-ranked schools in Tunisia in the national
              admission exam for engineering schools. Over and above its national and
              international reputation, Sup'Com is known for the excellence of its academic
              training and the high competence level of its graduates and researchers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
