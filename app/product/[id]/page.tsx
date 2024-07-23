import ProductDetail from "../../../components/ProductDetail";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/products?id=${params.id}`);
  const product = await res.json();

  if (!product) return <div>Loading...</div>;

  return <ProductDetail product={product} />;
};

export default ProductPage;
