import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import type { Product } from "@/types/productType";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card className="border-none">
      <CardHeader>
        <Image
          src={product.imageUrl[0]}
          alt={product.name}
          width={200}
          height={200}
          content="fit"
          className="h-fit w-full object-cover"
        />
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-center text-lg font-bold">{product.name}</p>
        <p className="mb-2 text-center text-gray-700">{product.description}</p>
        <p className="text-center font-bold text-gray-900">${product.price}</p>
      </CardContent>
      {/* <CardFooter>
        <Button className=" text-white px-4 py-2 rounded">Add to Cart</Button>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
