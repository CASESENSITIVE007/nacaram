// src/app/products/page.tsx
"use client";
import React, { useState } from "react";
import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";
import Filter from "../../components/Filter";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductsPage = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Classic Handbag",
      description: "A classic handbag for everyday use.",
      price: 59.99,
      imageUrl: "/images/classic-handbag.jpg",
      category: "Handbags",
    },
    {
      id: 2,
      name: "Modern Tote",
      description: "A stylish tote for modern women.",
      price: 79.99,
      imageUrl: "/images/modern-tote.jpg",
      category: "Totes",
    },
    {
      id: 3,
      name: "Vintage Satchel",
      description: "A vintage satchel with a unique look.",
      price: 69.99,
      imageUrl: "/images/vintage-satchel.jpg",
      category: "Satchels",
    },
    {
      id: 4,
      name: "Elegant Clutch",
      description: "An elegant clutch for special occasions.",
      price: 49.99,
      imageUrl: "/images/elegant-clutch.jpg",
      category: "Clutches",
    },
  ];
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
