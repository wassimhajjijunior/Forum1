import React from "react";
import SponsorShowcase from "./SponsorShowcase";

const Sponsor02 = () => {
  return (
    <SponsorShowcase
      sponsorName="Sponsor 02"
      logoSrc="/sponsor/sponsors/Ooredooo.png"
      sponsorUrl="https://example.com"
      middleImages={[
        "/lastPhotos/img3_.webp",
        "/lastPhotos/img7_.webp",
        "/lastPhotos/img12_.webp",
      ]}
    />
  );
};

export default Sponsor02;
