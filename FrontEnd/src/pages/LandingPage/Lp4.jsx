import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const content = [
  { img: "/New/wall.jpg" },
  { img: "/New/clean.jpeg" },
  { img: "/New/filter.jpeg" },
  { img: "/New/wash.jpeg" },
  //   { img: "/New/img9.png" },
  { img: "/New/lock.jpeg" },
];

export default function FourthPart() {
  return (
    <div className="space-y-8">
      {" "}
      {/* Added container with vertical spacing */}
      <h1
        className="text-center text-3xl md:text-4xl font-bold tracking-tight pb-2 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
          px-4"
      >
        New and Noteworthy
      </h1>
      <div className="flex justify-center py-6">
        <Carousel
          opts={{
            align: "center",
            loop: false,
            containScroll: "trimSnaps",
          }}
          className="w-full max-w-7xl"
        >
          <CarouselContent className="gap-4 px-4">
            {content.map((obj, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 flex justify-center"
              >
                <Card className="w-[20em] h-[16em] overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                  <CardContent className="p-0 h-full w-full relative">
                    <img
                      src={obj.img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optional "New" badge for the first 3 items */}
                    {index < 3 && (
                      <div className="absolute top-3 right-3 bg-white text-blue-600 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        NEW
                      </div>
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
