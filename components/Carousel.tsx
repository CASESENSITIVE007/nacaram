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

export default function defaultProductCarousel({
  className,
}: {
  className?: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[plugin.current]}
      className={cn(className, "w-full")}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center p-1">
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
