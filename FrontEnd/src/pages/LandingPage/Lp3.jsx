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

export default function ThirdPart() {
  return (
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
              <Card className="w-[20em] h-[20em] overflow-hidden border-none shadow-none transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
                <CardContent className="p-0 h-full w-full">
                  <img
                    src={obj.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-fill min-h-0 min-w-0"
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
