import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const appliances = [
  {
    img: "/MBS/ac.jpeg",
    alt: "AC",
    title: "Lite AC service",
  },
  { img: "/MBS/pest.png", alt: "Tap Repair", title: "Apartment pest control" },
  {
    img: "/MBS/pest.jpeg",
    alt: "Tap Repair",
    title: "Pest control(including utensil removal)",
  },
  {
    img: "/MBS/paint.png",
    alt: "Lock Repair",
    title: "Rooms/walls painting consultation",
  },
  {
    img: "/MBS/hme.png",
    alt: "Electrician",
    title: "Apartment terminate control",
  },
  { img: "/MBS/filter.jpeg", alt: "filter Repair", title: "Filter Repair" },
  {
    img: "/MBS/apc.jpeg",
    alt: "pest control",
    title: "Apartment pest control",
  },
  { img: "/MBS/bed.png", alt: "Bed bugs", title: "Bed bugs control" },
];

export default function MBS() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Home Repair & Installation</h2>
        <button className="border-2 border-black rounded-lg px-4 py-2 font-medium hover:bg-gray-100 transition-colors">
          See all
        </button>
      </div>

      <Carousel opts={{ align: "center", loop: false }} className="w-full py-6">
        <CarouselContent className="gap-4 px-4">
          {appliances.map(({ img, alt, title }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="flex flex-col gap-2">
                <Card className="w-full aspect-square overflow-hidden border-none shadow-none transition-transform hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-0 h-full">
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
                <p className="text-center font-medium text-gray-800">{title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2" />
        <CarouselNext className="hidden md:flex right-2" />
      </Carousel>
    </div>
  );
}
