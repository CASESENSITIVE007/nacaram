// src/app/api/products/route.ts
import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Classic Handbag",
    description: "A classic handbag for everyday use.",
    price: 59.99,
    imageUrl: "/images/classic-handbag.jpg",
  },
  {
    id: 2,
    name: "Modern Tote",
    description: "A stylish tote for modern women.",
    price: 79.99,
    imageUrl: "/images/modern-tote.jpg",
  },
  {
    id: 3,
    name: "Vintage Satchel",
    description: "A vintage satchel with a unique look.",
    price: 69.99,
    imageUrl: "/images/vintage-satchel.jpg",
  },
  {
    id: 4,
    name: "Elegant Clutch",
    description: "An elegant clutch for special occasions.",
    price: 49.99,
    imageUrl: "/images/elegant-clutch.jpg",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
