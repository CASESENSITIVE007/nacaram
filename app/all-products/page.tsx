import { ShopPage } from "@/components/ShopPage";

export default async function AllProductsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl ? baseUrl : ""}/api/products`);
  if (!res.ok) {
    throw new Error(`Error fetching products: ${res.status}`);
  }
  const products = await res.json();

  return <ShopPage products={products} />;
}
