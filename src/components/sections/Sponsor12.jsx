import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor12 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 12"
      logoSrc="/sponsor/sponsors/3S.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/3s/img1.jpg",
        "/sponsorGal/3s/img2.jpg",
      ]}
    />
  );
};

export default Sponsor12;
