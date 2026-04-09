import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor01 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 01"
      logoSrc="/sponsor/sponsors/SAGEMCOM.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/lastPhotos/img1_.jpg",
        "/lastPhotos/img6_.jpg",
        "/lastPhotos/img11_.jpg",
      ]}
    />
  );
};

export default Sponsor01;
