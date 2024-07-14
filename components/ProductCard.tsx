"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="border-none">
      <CardHeader>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          content="fit"
          className="w-full h-fit object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className="text-lg text-center font-bold mb-2">{product.name}</p>
        <p className="text-gray-700 text-center mb-2">{product.description}</p>
        <p className="text-gray-900 text-center font-bold">${product.price}</p>
      </CardContent>
      {/* <CardFooter>
        <Button className=" text-white px-4 py-2 rounded">Add to Cart</Button>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
