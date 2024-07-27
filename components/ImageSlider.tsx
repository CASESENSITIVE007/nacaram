"use client";

import * as React from "react";
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

interface ImageSliderProps {
  className?: string;
  images: string[];
}

export default function ImageSlider({ className, images }: ImageSliderProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[plugin.current]}
      className={cn(className, "group w-full overflow-clip")}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center p-1">
              <Image
                className="h-full w-full"
                src={image}
                width={500}
                height={500}
                alt="logo"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="transition-transform group-hover:translate-x-14" />
      <CarouselNext className="transition-transform group-hover:-translate-x-14" />
    </Carousel>
  );
}
