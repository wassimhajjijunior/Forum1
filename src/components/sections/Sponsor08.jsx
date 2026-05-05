import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor08 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 08"
      logoSrc="/sponsor/sponsors/Pearlss.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/pearls/img1.jpg",
        "/sponsorGal/pearls/img2.jpg",
        "/sponsorGal/pearls/img3.jpg"
      ]}
    />
  );
};

export default Sponsor08;
