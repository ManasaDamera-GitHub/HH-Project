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
  { img: "/Lp3/img5.png" },
  { img: "/Lp3/img6.png" },
  { img: "/Lp3/img7.png" },
  { img: "/Lp3/img8.png" },
  { img: "/Lp3/img9.png" },
  { img: "/Lp3/img1.jpeg" },
  { img: "/Lp3/img2.jpeg" },
  { img: "/Lp3/img3.jpeg" },
  { img: "/Lp3/img4.png" },
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
                      className="w-full h-full object-fit"
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
