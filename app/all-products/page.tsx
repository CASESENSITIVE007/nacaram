import { ShopPage } from "@/components/ShopPage";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";

export default async function AllProductsPage() {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // const res = await fetch(`${baseUrl ? baseUrl : ""}/api/products`);
  // if (!res.ok) {
  //   return <div>Error fetching products</div>;
  // }
  // const products = await res.json();

  const products = await getProducts();
  return <ShopPage products={products} />;
}
