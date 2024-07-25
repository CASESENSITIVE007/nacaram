import { ShopPage } from "@/components/ShopPage";

export default async function AllProductsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    return <div>Base URL not set</div>;
  }
  const res = await fetch(`${baseUrl ? baseUrl : ""}/api/products`);
  if (!res.ok) {
    return <div>Error fetching products</div>;
  }
  const products = await res.json();

  return <ShopPage products={products} />;
}
