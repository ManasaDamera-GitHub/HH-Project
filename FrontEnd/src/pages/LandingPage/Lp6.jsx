import * as React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "../../styles/WomenSalon.css";

const content = [
  { img: "/Lp6/Waxing.png", text: "Waxing", path: "/w_salon/waxing" },
  { img: "/Lp6/manicure.png", text: "Manicure", path: "/w_salon/manicure" },
  { img: "/Lp6/hairCare.png", text: "HairCare", path: "/w_salon/haircare" },
  { img: "/Lp6/cleanUp.png", text: "Clean Up", path: "/w_salon/cleanup" },
  {
    img: "/Lp6/threading.png",
    text: "Threading & Face Waxing",
    path: "/salon/threading",
  },
];

export const W_Salon = () => {
  const navigate = useNavigate();

  const handleSeeAll = (path = "/women-salon/all-services") => {
    navigate(path);
  };

  return (
    <div className="women-salon-container">
      <div className="women-salon-header">
        <h1 className="women-salon-title">Salon for Women</h1>
        <button className="women-salon-button" onClick={() => handleSeeAll()}>
          See all
        </button>
      </div>
      <div className="women-salon-grid">
        {content.map((service, index) => (
          <div
            key={index}
            className="women-salon-card"
            style={{ cursor: "pointer" }}
            onClick={() => handleSeeAll(service.path)}
          >
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
