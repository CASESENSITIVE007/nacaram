"use client";

import * as React from "react";
import carimage from "../public/slide.png";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function defaultProductCarousel(props: any) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[plugin.current]}
      className={cn(props.className, "w-full")}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 flex justify-center">
              <Image src={carimage} alt="logo" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
