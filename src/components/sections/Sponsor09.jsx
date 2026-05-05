import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor09 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 09"
      logoSrc="/sponsor/sponsors/Pwc.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/pwc/img1.jpg",
        "/sponsorGal/pwc/img2.jpg",
      ]}
    />
  );
};

export default Sponsor09;
