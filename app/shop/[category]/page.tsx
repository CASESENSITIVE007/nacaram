import ProductCard from "@/components/ProductCard";
import products, { Product } from "@/lib/products";
import Link from "next/link";

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="container mx-auto px-4 py-8 md:px-20">
      <h1 className="mb-6 text-center text-3xl font-semibold">
        {category} Bags
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <Link href="/">
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
