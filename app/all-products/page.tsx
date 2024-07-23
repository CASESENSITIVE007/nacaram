import { ShopPage } from "@/components/ShopPage";

export default async function AllProductsPage() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return <ShopPage products={products} />;
}
