import "../../styles/Lp2.css";
function DoorStep() {
  const Services = [
    { img: "Lp2/womenLp2.jpeg", text: "women's Salon", id: "1" },
    { img: "Lp2/mensLp2.jpeg", text: "men's Salon", id: "2" },
    { img: "Lp2/ac.jpeg", text: "AC", id: "3" },
    { img: "Lp2/locks.jpeg", text: "Smart locks", id: "4" },
    { img: "Lp2/filter.jpeg", text: "Water Purifier", id: "5" },
    { img: "Lp2/elect.png", text: "Electrician", id: "6" },
    { img: "Lp2/clean.jpeg", text: "Cleaning", id: "7" },
    { img: "Lp2/wall.jpeg", text: "Wall Panels", id: "8" },
    { img: "Lp2/paint.jpeg", text: "painting", id: "9" },
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
