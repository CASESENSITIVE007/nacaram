import { Card, CardContent, CardFooter } from "@/components/ui/card";
import image from "../public/onsale.png";
import Image from "next/image";

const images = [
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
  { src: image, alt: "image" },
];

export default function ProductsCollection() {
  return (
    <div className="flex flex-col mx-6">
      <div className="h-5 border-b-2 border-zinc-200 text-2xl text-center my-10">
        <span className="bg-white px-5 font-serif font-semibold">
          Collections
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 md:grid-cols-3 mx-6">
        {images.map((image) => (
          <Card className=" border-none">
            <CardContent className="p-0 h-500">
              <Image src={image.src} width={500} height={500} alt={image.alt} />
            </CardContent>
            <CardFooter className="p-0 py-2 justify-center font-bold text-xs ">
              Sale Bags
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
