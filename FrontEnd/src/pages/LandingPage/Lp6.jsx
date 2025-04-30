import * as React from "react";
import "../../styles/WomenSalon.css";
const content = [
  { img: "/Lp6/Waxing.png", text: "Waxing" },
  { img: "/Lp6/manicure.png", text: "Manicure" },
  { img: "/Lp6/hairCare.png", text: "HairCare" },
  { img: "/Lp6/cleanUp.png", text: "cleanUp" },
  { img: "/Lp6/threading.png", text: "Threading & face waxing" },
];

export const W_Salon = () => {
  return (
    <div className="women-salon-container">
      <div className="women-salon-header">
        <h1 className="women-salon-title">Salon for Women</h1>
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
