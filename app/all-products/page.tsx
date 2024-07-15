
"use client";
import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Filter from "@/components/Filter";
import products from "@/lib/products";
import type { Product } from "@/lib/products";

const ProductsPage = () => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))

  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProducts = selectedCategory

    ? selectedCategory !== "all"
      ? products.filter((product) => product.category === selectedCategory)
      : products
    : products;

  return (
    <div className="container mx-auto md:px-20 px-4 py-8">
      <h1 className="text-3xl text-center font-semibold mb-6">All Products</h1>

      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-center gap-6 mt-16">

        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
