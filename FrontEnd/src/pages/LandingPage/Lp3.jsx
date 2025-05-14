import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MBS.css";

const appliances = [
  { img: "/Lp3/img5.png", title: "Microwave" },
  { img: "/Lp3/img6.png", title: "Chimney" },
  { img: "/Lp3/img7.png", title: "AC Repair" },
  { img: "/Lp3/img8.png", title: "TV Mounting" },
  { img: "/Lp3/img9.png", title: "Fan Repair" },
  { img: "/Lp3/img1.jpeg", title: "Washing Machine" },
  { img: "/Lp3/img2.jpeg", title: "Fridge" },
  { img: "/Lp3/img3.jpeg", title: "Geyser" },
  { img: "/Lp3/img4.png", title: "Water Purifier" },
];

export default function MBS() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mbs-container">
      <div className="mbs-header">
        <h2 className="text-xl font-semibold">Home Repair & Installation</h2>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="mbs-scroll-wrapper">
        <button onClick={() => scroll("left")} className="scroll-btn left">
          ◀
        </button>
        <div ref={scrollRef} className="scroll-container">
          {appliances.map(({ img, title }, index) => (
            <div key={index} className="scroll-item">
              <div className="card">
                <div className="card-content">
                  <img src={img} alt={title} className="img" />
                </div>
                <p className="title">{title}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="scroll-btn right">
          ▶
        </button>
      </div>
    </div>
  );
}
