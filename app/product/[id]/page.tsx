import ProductDetail from "../../../components/ProductDetail";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(
    `${baseUrl ? baseUrl : ""}/api/products?id=${params.id}`,
  );
  const product = await res.json();

  if (!product) return <div>Loading...</div>;

  return <ProductDetail product={product} />;
};

export default ProductPage;
