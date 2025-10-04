// Photos.jsx
import React, { useState } from "react";
import InfiniteBanner from "../Photos/InfiniteBanner";
import me from "../../assets/lastPhotos/me.jpg";
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



const bannerOneImages = [img1, img2, img3, img4, img5,img6];
const bannerTwoImages = [img7, img8, img9, img10, img11, img12];

const Photos = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-transparent text-white gap-12">
      <InfiniteBanner
        images={bannerOneImages}
        direction="left"
        speed={40}
        onClick={setSelected}
        layoutIdPrefix="bannerOne"
      />
      <InfiniteBanner
        images={bannerTwoImages}
        direction="right"
        speed={40}
        onClick={setSelected}
        layoutIdPrefix="bannerTwo"
        
      />

      {/* Lightbox with fly-to-center & back animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-transparent bg-opacity-80 flex justify-center items-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={selected.src}
              alt=""
              layoutId={selected.layoutId} // key for smooth transition
              className="w-[35%]  rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photos;
