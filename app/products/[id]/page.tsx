"use client";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/services/api";
import ProductDetail from "../../../components/ProductDetail";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState(null);
  const { id } = params;
  useEffect(() => {
    if (id) {
      fetchProductById(id as string).then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return <ProductDetail product={product} />;
};

export default ProductPage;
