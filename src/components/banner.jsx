import React from "react";
import backgroundStore from "../static/images/background-store.png";
import "../css/banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={backgroundStore} />
    </div>
  );
};

Banner.displayName = "zmp-banner";

export default Banner;
