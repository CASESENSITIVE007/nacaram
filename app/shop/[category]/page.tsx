import { ShopPage } from "@/components/ShopPage";
import { getProducts } from "@/lib/products";
import { Product } from "@/types/productType";
import { LoaderCircleIcon } from "lucide-react";
import { Suspense } from "react";

async function ShopPageCategory({ params }: { params: { category: string } }) {
  const categ = params.category;
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const res = await fetch(
  //   `${baseUrl ? baseUrl : ""}/api/products?category=${categ == "all" ? "" : categ}`,
  //   { cache: "no-store" },
  // );
  // const products: Product[] = await res.json();

  const products: Product[] = await getProducts(categ === "all" ? "" : categ);

  return <ShopPage products={products} />;
}

export default function Page({ params }: { params: { category: string } }) {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <ShopPageCategory params={params} />
    </Suspense>
  );
}

function FallbackComponent() {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center">
      <LoaderCircleIcon className="h-12 w-12 animate-spin" />
    </div>
  );
}
