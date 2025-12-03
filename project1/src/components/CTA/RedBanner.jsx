import React from "react";
import { BannerWrapper } from "./RedBanner.styles";
const RedBanner = () => {
  return (
    <BannerWrapper>
      <div className="red-pill">
        <h2>Learners today, Leaders tomorrow</h2>
        <p>"With continuous learning and dedication, you can transform yourself..."</p>
      </div>
    </BannerWrapper>
  );
};

export default RedBanner;