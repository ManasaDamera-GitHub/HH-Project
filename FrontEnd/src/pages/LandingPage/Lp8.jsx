import React from "react";
import "../../styles/FifthPart.css"; // Import the CSS file

export const SmartLock = () => {
  return (
    <div className="fifth-part-container">
      <div className="content-wrapper lock-wrapper">
        <img src="./New/locks.png" alt="lock image" className="lock-image" />
        <div className="text-content">
          <h1 style={{ color: "white" }}>The all-in-one smart lock</h1>
          <p style={{ color: "white" }}>Lock.Camera.Doorbell Connect.</p>
          <button
            className="know-more-btn"
            style={{ backgroundColor: "#DBDBDB", color: "black" }}
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};
