import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import keynoteImage1 from "/speakers/keynote/Sami.jpg";
import keynoteImage2 from "/speakers/keynote/M.Aymen.jpg";
import keynoteImage3 from "/speakers/keynote/ghaithSouissi.jpg";

const speakers = [
  {
    id: 1,
    name: "M.Sami Haboubi",
    role: "Senior Manager at Deloitte | Risk Advisory & Consulting | Cyber Risk",
    image: keynoteImage1,
  },
  {
    id: 2,
    name: "M.Aymen Ghadghadi",
    role: "CEO Navinspire IA",
    image: keynoteImage2,
  },
  {
    id: 3,
    name: "Ghaith Souissi",
    role: "Cybersecurity Engineer | ANCS - tunCERT",
    image: keynoteImage3,
  },
];

const SpeakerCard = ({ speaker }) => {
  const [hovered, setHovered] = useState(false);

  return (
      <Motion.article
        className="group relative w-full max-w-[210px] sm:max-w-[270px] rounded-3xl border border-cyan-300/25 bg-slate-950/45 backdrop-blur-md p-2 sm:p-4 md:p-5 shadow-[0_0_22px_rgba(34,211,238,0.12)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden border border-cyan-200/30 bg-black/25">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-3 sm:mt-4 text-center">
        <h3 className="font-hazmat-regular text-white text-sm sm:text-lg md:text-xl">
          {speaker.name}
        </h3>
        <p className="mt-1 font-mistrully text-slate-300 text-[11px] sm:text-sm leading-relaxed">
          {speaker.role}
        </p>

        
      </div>
    </Motion.article>
  );
};

const Speakers = () => {
  return (
    <section className="w-full min-h-[64dvh] md:min-h-[72dvh] md:h-[72dvh] px-4 sm:px-6 py-12 md:py-0 flex items-center justify-center scroll-mt-[90px]">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-hazmat-regular text-cyan-100 text-2xl sm:text-3xl md:text-4xl tracking-wide text-center mb-5 sm:mb-6 md:mb-8">
          Keynote Speakers
        </h2>

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 items-stretch justify-items-center">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
