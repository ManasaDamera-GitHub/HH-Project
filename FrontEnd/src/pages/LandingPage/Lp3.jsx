import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/MBS.css";

const appliances = [
  { img: "/Lp3/img5.png", title: "Painting", path: "/painting" },
  { img: "/Lp3/img6.png", title: "Wedding", path: "/women-salon/all-services" },
  { img: "/Lp3/img7.png", title: "HairCut", path: "/m_salon/haircut" },
  { img: "/Lp3/img8.png", title: "Painting", path: "/painting" },
  { img: "/Lp3/img9.png", title: "Dryer repair", path: "/washingmachine" },
  { img: "/Lp3/img1.jpeg", title: "AC", path: "/ac" },
  { img: "/Lp3/img2.jpeg", title: "Water Purifier", path: "/waterpurifier" },
  { img: "/Lp3/img3.jpeg", title: "bathroom", path: "/bathroomservices" },
  { img: "/Lp3/img4.png", title: "" },
];

export default function MBS() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      checkScrollPosition();
    };

    const checkScrollPosition = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setIsAtStart(scrollLeft === 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 to account for rounding
      }
    };

    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScrollPosition);

    // Initial check
    checkScrollPosition();

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollRef.current?.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        windowWidth < 450
          ? current.firstChild?.clientWidth || 250
          : windowWidth < 700
          ? (current.firstChild?.clientWidth || 150) * 2
          : 300;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mbs-container">
      <div className="mbs-header">
        {/* <h2 className="text-xl font-semibold">Home Repair & Installation</h2>
        <button className="see-all-btn">See all</button> */}
      </div>

      <div className="mbs-scroll-wrapper">
        <button
          onClick={() => scroll("left")}
          className={`scroll-btn left ${isAtStart ? "disabled" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>
        <div ref={scrollRef} className="scroll-container">
          {appliances.map(({ img, title, path }, index) => {
            const content = (
              <div className="card">
                <div className="card-content">
                  <img
                    src={img}
                    alt={title}
                    className="img"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              </div>
            );

            return (
              <div
                key={index}
                className="scroll-item"
                style={{ cursor: path ? "pointer" : "default" }}
              >
                {path ? <Link to={path}>{content}</Link> : content}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => scroll("right")}
          className={`scroll-btn right ${isAtEnd ? "disabled" : ""}`}
          disabled={isAtEnd}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
