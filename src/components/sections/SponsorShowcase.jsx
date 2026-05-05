import React from "react";
import { motion as Motion } from "framer-motion";

const SponsorShowcase = ({
  sponsorName,
  logoSrc,
  sponsorUrl,
  middleImages,
}) => {
  const imageCount = middleImages?.length ?? 0;
  const isSparseLayout = imageCount > 0 && imageCount < 3;
  const gridClasses = isSparseLayout
    ? "grid grid-cols-1 md:flex md:flex-wrap md:justify-center"
    : "grid grid-cols-1 md:grid-cols-3";
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-6xl rounded-3xl border border-cyan-300/30 bg-slate-950/35 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.18)] p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <Motion.a
            href={sponsorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[320px] sm:max-w-[380px] rounded-2xl border border-white/20 bg-slate-900/60 p-3 sm:p-4 shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logoSrc}
              alt={`${sponsorName} logo`}
              className="w-full h-20 sm:h-24 object-contain"
              loading="lazy"
            />
          </Motion.a>

          <div className={`w-full ${gridClasses} gap-4 md:gap-6`}>
            {middleImages.map((imageSrc, index) => (
              <Motion.div
                key={`${sponsorName}-${imageSrc}`}
                className={`flex items-center justify-center rounded-2xl border border-cyan-200/30 bg-slate-900/60 p-4 ${
                  isSparseLayout ? "md:w-[360px]" : ""
                } ${index >= 2 ? "hidden md:flex" : ""}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={imageSrc}
                  alt={`${sponsorName} highlight`}
                  className="w-full h-48 object-contain rounded-2xl"
                  loading="lazy"
                />
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;
