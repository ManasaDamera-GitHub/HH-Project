import * as React from "react";
import "../../styles/WomenSalon.css";
const content = [
  { img: "/menImages/cutting.png", text: "HairCut" },
  { img: "/menImages/beard.png", text: "Beard Styling" },
  { img: "/menImages/stress.png", text: "Stress relief" },
  { img: "/menImages/pedicure.png", text: "Pedicure & Manicure" },
  { img: "/menImages/hairColor.png", text: "Hair color" },
  { img: "/menImages/facial.png", text: "Facial" },
];

export const M_Salon = () => {
  return (
    <div className="women-salon-container">
      <div className="women-salon-header">
        <h1 className="women-salon-title">Salon for Men</h1>
        <button className="women-salon-button">See all</button>
      </div>
      <div className="women-salon-grid">
        {content.map((service, index) => (
          <div key={index} className="women-salon-card">
            <img
              src={service.img}
              alt={service.text}
              className="women-salon-image"
            />
            <p className="women-salon-service-name">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
