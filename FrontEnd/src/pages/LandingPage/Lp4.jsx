import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
// import "../../styles/New.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const content = [
  { img: "/New/wall.jpg", text: "Wall Panel" },
  { img: "/New/clean.jpeg", text: "Insta Help" },
  { img: "/New/filter.jpeg", text: "Native Water Purifier" },
  { img: "/New/wash.jpeg", text: "Bathroom & Kitchen cleaning" },
  { img: "/New/lock.png", text: "Native smart locks" },
  { img: "/New/AC.png", text: "AC" },
  { img: "/New/doctor.png", text: "Check Out Salon" },
];

export default function FourthPart() {
  return (
    <div
      className="space-y-8 relative"
      style={{
        margin: "2.5em",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif;",
        backgroundColor: "#fff",
      }}
    >
      <h1
        className="text-center text-3xl md:text-4xl font-bold tracking-tight pb-2 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
          px-4"
      >
        New and Noteworthy
      </h1>
      <div
        className="flex justify-center py-6"
        style={{ margin: "2em", backgroundColor: "rgb(255, 255, 255)" }}
      >
        <Carousel
          opts={{
            align: "center",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full max-w-7xl relative"
        >
          <CarouselContent className="gap-4 px-4">
            {content.map((obj, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-full md:basis-1/2 lg:basis-1/4 flex justify-center"
              >
                <Card className="w-[20em] h-auto overflow-hidden border-none shadow-lg hover:shadow-xl cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="relative w-full h-[16em]">
                      <img
                        src={obj.img}
                        alt={obj.text}
                        className="w-full h-full object-cover"
                      />
                      {index < 3 && (
                        <div className="absolute top-3 right-3 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="px-4 py-2">
                      <p className="text-center font-semibold text-gray-800">
                        {obj.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md hover:bg-gray-100"/>
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md hover:bg-gray-100" />
        </Carousel>
      </div>
    </div>
  );
}