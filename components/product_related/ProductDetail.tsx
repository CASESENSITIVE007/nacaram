"use client";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import ProductImageGallery from "./ProductImageGallery";
import QuantitySelector from "../QuantitySelector";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import ImageSlider from "../ImageSlider";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string[];
  details: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Carousel  */}
        <div className="w-full md:w-1/2">
          <ImageSlider images={product.imageUrl} />
        </div>

        <div className="w-full text-center md:w-1/2 md:pl-8 md:text-left">
          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
          <div className="mb-4 text-lg font-semibold">
            ${product.price.toFixed(2)}
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </div>
          <Button className="mt-4 w-full rounded bg-blue-500 px-4 py-2 text-white">
            Add to My Bag
          </Button>
          <Button className="mt-4 w-full rounded bg-purple-950 px-4 py-2 text-white">
            Buy Now
          </Button>
          <div className="mx-5 my-10 h-5 border-b-2 border-zinc-200"></div>
          <section className="flex justify-center gap-4">
            <Link
              href={`https://www.facebook.com/sharer.php?u=https://nacaram.com/products/${product.id}`}
            >
              <FacebookIcon size={30} />
            </Link>
            <Link
              href={`https://www.facebook.com/sharer.php?u=https://nacaram.com/products/${product.id}`}
            >
              <TwitterIcon size={30} />
            </Link>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-8 w-3/4 text-center">
        <div className="my-10 h-5 border-b-2 border-zinc-200 text-center text-2xl">
          <span className="bg-white px-5 font-serif font-semibold">
            Details
          </span>
        </div>
        <p>{product.details}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
