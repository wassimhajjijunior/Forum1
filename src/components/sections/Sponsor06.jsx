import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor06 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 06"
      logoSrc="/sponsor/sponsors/FORVIA.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/forvia/img1.jpg",
        "/sponsorGal/forvia/img2.jpg",
        "/sponsorGal/forvia/img3.jpg",
      ]}
    />
  );
};

export default Sponsor06;
