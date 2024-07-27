import { Card, CardContent, CardFooter } from "@/components/ui/card";
import image from "@/public/onsale.png";
import Image from "next/image";

const images = [
  { id: 1, src: image, alt: "image" },
  { id: 2, src: image, alt: "image" },
  { id: 3, src: image, alt: "image" },
  { id: 4, src: image, alt: "image" },
  { id: 5, src: image, alt: "image" },
  { id: 6, src: image, alt: "image" },
  { id: 7, src: image, alt: "image" },
  { id: 8, src: image, alt: "image" },
];

export default function HomeCollection() {
  return (
    <section className="mx-6 flex flex-col">
      <div className="my-10 h-5 border-b-2 border-zinc-200 text-center text-2xl">
        <span className="bg-white px-5 font-serif font-semibold">
          Collections
        </span>
      </div>
      <div className="mx-6 flex flex-wrap justify-center gap-4">
        {/* grid-cols-2 justify-center gap-8 md:grid-cols-3 lg:grid-cols-3 */}
        {images.map((image) => (
          <Card
            className="w-full shrink-0 border-none md:basis-[30%] lg:basis-[22%]"
            key={image.id}
          >
            <CardContent className="h-500 p-0">
              <Image
                className="mx-auto"
                src={image.src}
                width={500}
                height={500}
                alt={image.alt}
              />
            </CardContent>
            <CardFooter className="justify-center p-0 py-2 text-xs font-bold">
              Sale Bags
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
