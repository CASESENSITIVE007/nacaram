// src/components/ProductCard.tsx
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
    <Card>
      <CardHeader>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className="text-lg font-bold mb-2">{product.name}</p>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-900 font-bold">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-amber-500 text-white px-4 py-2 rounded">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
