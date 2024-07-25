import { ShopPage } from "@/components/ShopPage";
import { Product } from "@/types/productType";

export default async function Shop({
  params,
}: {
  params: { category: string };
}) {
  const categ = params.category;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseUrl ? baseUrl : ""}/api/products?category=${categ == "all" ? "" : categ}`,
    { cache: "no-store" },
  );
  const products: Product[] = await res.json();

  return <ShopPage products={products} />;
}
