import ProductCard from "@/components/ProductCard";
import products, { Product } from "@/lib/products";

export default function Page({ params }: { params: { category: string } }) {
  const { category } = params;

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="container mx-auto md:px-20 px-4 py-8">
      <h1 className="text-3xl text-center font-semibold mb-6">
        {category} Bags
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
