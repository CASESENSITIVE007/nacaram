import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import image from "../public/onsale.png";
import Image from "next/image";
import { Button } from "./ui/button";

const images = [
  { id: 1, src: image, alt: "image" },
  { id: 2, src: image, alt: "image" },
  { id: 3, src: image, alt: "image" },
];

export default function MustHaves() {
  return (
    <div className="flex shrink-1 justify-between m-8 ">
      <Card className="min-w-max p-4 flex flex-col gap-4 justify-center border-none">
        <span className="text-xl font-bold">Must Haves</span>
        <span className="text-sm text-muted-foreground">
          Bestsellers among our collection
        </span>
        <Button className="w-3/4 bg-lime-500">Shop Now</Button>
      </Card>
      <div className="grid justify-items-center grid-cols-2 gap-8 md:grid-cols-3 mx-6 ">
        {images.map((image) => (
          <Card className=" " key={image.id}>
            <CardContent className="p-0 h-500">
              <Image src={image.src} width={500} height={500} alt={image.alt} />
            </CardContent>
            <CardFooter className="p-4  flex-col items-start gap-4">
              <span className="text-xl font-bold">Collection {image.id}</span>
              <span className="text-sm text-muted-foreground">
                Bestsellers among our collection
              </span>
              <Button className="w-1/2 bg-lime-500">Shop Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
