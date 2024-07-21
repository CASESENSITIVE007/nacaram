import { cn } from "@/lib/utils";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image.js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface ProductImageGalleryProps {
  className?: string;
  images: string[];
}

const ProductImageGallery = ({
  images,
  className,
}: ProductImageGalleryProps) => {
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
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="flex justify-center p-1">
              <Image src={image} width={500} height={500} alt="logo" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductImageGallery;
