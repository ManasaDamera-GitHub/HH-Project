import { useNavigate } from "react-router-dom";
import "../../styles/Lp2.css";

function DoorStep() {
  const navigate = useNavigate();

  const Services = [
    {
      img: "Lp2/womenLp2.jpeg",
      text: "women's Salon",
      path: "/women-salon/all-services",
    },
    {
      img: "Lp2/mensLp2.jpeg",
      text: "men's Salon",
      path: "/men-salon/all-services",
    },
    { img: "Lp2/ac.jpeg", text: "AC", path: "/ac" },
    { img: "Lp2/locks.jpeg", text: "Smart locks", path: "/locks" },
    { img: "Lp2/filter.jpeg", text: "Water Purifier", path: "/filter" },
    { img: "Lp2/elect.png", text: "Electrician", path: "/electrician" },
    { img: "Lp2/clean.jpeg", text: "Cleaning", path: "/cleaning" },
    { img: "Lp2/wall.jpeg", text: "Wall Panels", path: "/wall-panels" },
    { img: "Lp2/paint.jpeg", text: "painting", path: "/painting" },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="doorstep-container">
      <h1 className="main-heading">
        "Your home deserves the best—we bring it to you."
      </h1>
      <div className="card-container">
        <h2 className="sub-heading">
          <i>What are you looking for?</i>
        </h2>
      </div>
      <div className="grid">
        {Services.map((service, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleClick(service.path)}
            style={{ cursor: "pointer" }}
          >
            <img src={service.img} alt={service.text} />
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoorStep;
