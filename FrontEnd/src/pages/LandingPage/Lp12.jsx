// import * as React from "react";
// import { Card, CardContent } from "../../components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const appliances = [
//   { img: "/HomeRepair/tap.png", alt: "Tap Repair", title: "Tap Repair" },
//   { img: "/HomeRepair/pullOut.png", alt: "Pull Out Installation", title: "Pull Out Installation" },
//   { img: "/HomeRepair/lock.png", alt: "Lock Repair", title: "Lock Repair" },
//   { img: "/HomeRepair/electrician.png", alt: "Electrician", title: "Electrician Services" },
//   { img: "/HomeRepair/door.png", alt: "Door Repair", title: "Door Repair" },
//   { img: "/HomeRepair/fan.png", alt: "Fan Installation", title: "Fan Installation" },
//   { img: "/HomeRepair/bed.png", alt: "Bed Assembly", title: "Bed Assembly" },
//   { img: "/HomeRepair/tapInst.png", alt: "Tap Installation", title: "Tap Installation" },
// ];

// export default function HomeRepair() {
//   return (
//     <div className="max-w-[1200px] mx-auto">
//       <div className="flex justify-between items-center p-4">
//         <h2 className="text-xl font-semibold">
//           Home Repair & Installation
//         </h2>
//         <button className="border-2 border-black rounded-lg px-4 py-2 font-medium hover:bg-gray-100 transition-colors">
//           See all
//         </button>
//       </div>

//       <Carousel opts={{ align: "center", loop: false }} className="w-full py-6">
//         <CarouselContent className="gap-4 px-4">
//           {appliances.map(({ img, alt, title }, index) => (
//             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
//               <div className="flex flex-col gap-2">
//                 <Card className="w-full aspect-square overflow-hidden border-none shadow-none transition-transform hover:scale-[1.02] cursor-pointer">
//                   <CardContent className="p-0 h-full">
//                     <img
//                       src={img}
//                       alt={alt}
//                       className="w-full h-full object-cover"
//                     />
//                   </CardContent>
//                 </Card>
//                 <p className="text-center font-medium text-gray-800">{title}</p>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="hidden md:flex left-2" />
//         <CarouselNext className="hidden md:flex right-2" />
//       </Carousel>
//     </div>
//   );
// }


import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import "../../styles/MBS.css"; // You can keep styles same as MBS or adjust

const appliances = [
  { img: "/HomeRepair/tap.png", title: "Tap Repair", path: "/tap-repair" },
  { img: "/HomeRepair/pullOut.png", title: "Pull Out Installation", path: "/pullout-installation" },
  { img: "/HomeRepair/lock.png", title: "Lock Repair", path: "/lock-repair" },
  { img: "/HomeRepair/electrician.png", title: "Electrician Services", path: "/electrician" },
  { img: "/HomeRepair/door.png", title: "Door Repair", path: "/door-repair" },
  { img: "/HomeRepair/fan.png", title: "Fan Installation", path: "/fan-installation" },
  { img: "/HomeRepair/bed.png", title: "Bed Assembly", path: "/bed-assembly" },
  { img: "/HomeRepair/tapInst.png", title: "Tap Installation", path: "/tap-installation" },
];

export default function HomeRepair() {
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
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScrollPosition);
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
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Home Repair & Installation</h2>
        <button
          onClick={() => navigate("/home-repair/all-services")}
          className="border-2 border-black rounded-lg px-4 py-2 font-medium hover:bg-gray-100 transition-colors"
        >
          See all
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className={`scroll-btn left ${isAtStart ? "disabled" : ""}`}
          disabled={isAtStart}
        >
          ◀
        </button>

        <div ref={scrollRef} className="scroll-container flex gap-4 overflow-x-auto scroll-smooth px-1 pb-4">
          {appliances.map(({ img, title, path }, index) => (
            <div
              key={index}
              className="scroll-item min-w-[180px] md:min-w-[220px] cursor-pointer flex flex-col items-center"
              onClick={() => navigate(path)}
            >
              <Card className="w-full aspect-square overflow-hidden border-none shadow-none transition-transform hover:scale-[1.03]">
                <CardContent className="p-0 h-full">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </CardContent>
              </Card>
              <p className="text-center font-medium text-gray-800 mt-2">{title}</p>
            </div>
          ))}
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
