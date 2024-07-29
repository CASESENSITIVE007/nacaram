"use client";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import QuantitySelector from "../QuantitySelector";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import ImageSlider from "../ImageSlider";
import { Product } from "@/lib/products";
import useColor from "@/hooks/useColor";
import { Input } from "../ui/input";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const {
    buyButton,
    addToButton,
    handleAddToButtonChange,
    handleBuyButtonChange,
  } = useColor();

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
          <div className="flex justify-between gap-4">
            <Button className="bg-buyButton mt-4 w-full rounded px-4 py-2">
              Buy Now
            </Button>
            <Input
              type="color"
              value={buyButton}
              onChange={handleBuyButtonChange}
              className="mt-4 w-10 rounded"
            />
          </div>
          <div className="flex justify-between gap-4">
            <Button className="bg-addToButton mt-4 w-full rounded px-4 py-2">
              Add to My Bag
            </Button>
            <Input
              type="color"
              value={addToButton}
              onChange={handleAddToButtonChange}
              className="mt-4 w-10 rounded"
            />
          </div>
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
          <span className="px-5 font-serif font-semibold">Details</span>
        </div>
        <p>{product.details}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
