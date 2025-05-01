import React from "react";
import "../../styles/PurifierSection.css";

export const Purifier = () => {
  return (
    <div className="purifier-section-container">
      <div className="purifier-content-wrapper">
        <div className="purifier-text-block">
          <h1 className="purifier-heading">2 Years of Worry-Free Water</h1>
          <p className="purifier-subheading">
            Enjoy clean, safe drinking water with zero maintenance for up to 2
            years. No filters, no fuss.
          </p>
          <button className="purifier-cta-btn">Buy Now</button>
        </div>
        <img
          src="./FullImages/waterpurifier.png"
          alt="Smart Water Purifier"
          className="purifier-image"
        />
      </div>
    </div>
  );
};
