import { Card, CardContent, CardFooter } from "@/components/ui/card";
import image from "../public/bag.png";
import Image from "next/image";

const images = [
  { id: 1, src: image, alt: "image" },
  { id: 1, src: image, alt: "image" },
  { id: 1, src: image, alt: "image" },
];

export default function ProductsShowcase() {
  return (
    <div className="flex flex-col mx-6">
      <div className="h-5 border-b-2 border-zinc-200 text-2xl text-center my-10">
        <span className="bg-white px-5 font-serif font-semibold">
          Featured Bags
        </span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 mx-6">
        {images.map((image) => (
          <Card
            className="border-none flex flex-col items-center"
            key={image.id}
          >
            <CardContent className="p-0 ">
              <Image src={image.src} width={500} height={500} alt={image.alt} />
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <span className="font-bold">New Bag!!!</span>
              <span className="text-xs">Blossom</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
