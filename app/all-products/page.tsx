"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Filter from "@/components/Filter";
import products from "@/lib/products";
import type { Product } from "@/lib/products";
import Link from "next/link";

const ProductsPage = () => {
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProducts = selectedCategory
    ? selectedCategory !== "all"
      ? products.filter((product) => product.category === selectedCategory)
      : products
    : products;

  return (
    <div className="container mx-auto px-4 py-8 md:px-20">
      <h1 className="mb-6 text-center text-3xl font-semibold">All Products</h1>

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="mt-16 grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <Link href="/products/[id]" as={`/products/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
