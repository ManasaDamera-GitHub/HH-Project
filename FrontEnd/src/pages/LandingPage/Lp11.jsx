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
  { img: "/repair/cooler.png", alt: "Air Cooler" },
  { img: "/repair/AC.png", alt: "Air Conditioner" },
  { img: "/repair/purifier.png", alt: "Air Purifier" },
  { img: "/repair/Washing.png", alt: "Washing Machine" },
  { img: "/repair/tv.png", alt: "Television" },
];

export default function Repair() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-semibold">Appliances repair & service</h2>
        <button className="border-2 border-black rounded-lg px-4 py-2 font-medium">
          See all
        </button>
      </div>

      <Carousel opts={{ align: "center", loop: false }} className="w-full py-6">
        <CarouselContent className="gap-4 px-4">
          {appliances.map(({ img, alt }, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <Card className="w-full aspect-square overflow-hidden border-none shadow-none transition-transform hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-0 h-full">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
