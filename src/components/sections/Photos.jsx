import React, { useState, useEffect } from "react";
import InfiniteBanner from "../Photos/InfiniteBanner";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/lastPhotos/img1_.jpg";
import img2 from "../../assets/lastPhotos/img2_.jpg";
import img3 from "../../assets/lastPhotos/img3_.jpg";
import img4 from "../../assets/lastPhotos/img4_.jpg";
import img5 from "../../assets/lastPhotos/img5_.jpg";
import img6 from "../../assets/lastPhotos/img6_.jpg";
import img7 from "../../assets/lastPhotos/img7_.jpg";
import img8 from "../../assets/lastPhotos/img8_.jpg";
import img9 from "../../assets/lastPhotos/img9_.jpg";
import img10 from "../../assets/lastPhotos/img10_.jpg";
import img11 from "../../assets/lastPhotos/img11_.jpg";
import img12 from "../../assets/lastPhotos/img12_.jpg";

const bannerOneImages = [img1, img2, img3, img4, img5, img6];
const bannerTwoImages = [img7, img8, img9, img10, img11, img12];

const Photos = () => {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-transparent ">
      {/* 🟪 Transparent Trapezoid Container */}
      <div
        className=" relative flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          width: "100%",
          height: "100%",
          clipPath: isMobile ? "":"polygon(32% 0%, 68% 0%, 100% 100%, 0% 100%)", // balanced trapezoid
          background: "transparent", // fully transparent
        }}
      >
        {/* Top Banner */}
        <div className="w-full">
          <InfiniteBanner
            images={bannerOneImages}
            direction="left"
            speed={40}
            onClick={setSelected}
            layoutIdPrefix="bannerOne"
          />
        </div>

        {/* Spacing */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-24" />

        {/* Bottom Banner */}
        <div className="w-full">
          <InfiniteBanner
            images={bannerTwoImages}
            direction="right"
            speed={40}
            onClick={setSelected}
            layoutIdPrefix="bannerTwo"
          />
        </div>
      </div>

      {/* 🖼 Lightbox */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-transparent/70 z-40"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected.src}
                alt=""
                layoutId={selected.layoutId}
                className={`rounded-xl shadow-2xl object-contain 
                  ${isMobile ? "w-[90%]" : "w-[35%]"} 
                  sm:w-[70%] md:w-[55%] lg:w-[35%] 
                  max-h-[90vh]`}
                transition={{
                  layout: { duration: isMobile ? 0.6 : 0.5, ease: [0.25, 0.8, 0.25, 1] },
                  duration: isMobile ? 0.5 : 0.4,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;
