import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor01 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 01"
      logoSrc="/sponsor/sponsors/SAGEMCOM.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/sponsorGal/sagemcom/img1.jpg",
        "/sponsorGal/sagemcom/img2.jpg",
        "/sponsorGal/sagemcom/img3.jpg"
      ]}
    />
  );
};

export default Sponsor01;
