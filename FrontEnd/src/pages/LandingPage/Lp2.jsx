import "../../styles/Lp2.css";
function DoorStep() {
  const Services = [
    { img: "./womenLp2.jpeg", text: "women's Salon" },
    { img: "./mensLp2.jpeg", text: "men's Salon" },
    { img: "./ac.jpeg", text: "AC" },
    { img: "./locks.jpeg", text: "Smart locks" },
    { img: "./filter.jpeg", text: "Water Purifier" },
    { img: "./elect.png", text: "Electrician" },
    { img: "./clean.jpeg", text: "Cleaning" },
    { img: "./wall.jpeg", text: "Wall Panels" },
    { img: "./paint.jpeg", text: "painting" },
  ];
  return (
    <>
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
            <div key={index} className="card">
              <img src={service.img} alt={service.text} />
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoorStep;
