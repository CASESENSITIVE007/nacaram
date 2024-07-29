import Link from "next/link";
import ShopProductCard from "./product_related/ShopProductCard";
import type { Product } from "@/types/productType";

export const ShopPage = ({ products }: { products: Product[] }) => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-20">
      <h1 className="mb-6 text-center text-3xl font-semibold">Bags</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product: Product) => (
          <Link
            href="/product/[id]"
            as={`/product/${product.id}`}
            key={product.id}
          >
            <ShopProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
