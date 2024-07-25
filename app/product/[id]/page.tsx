import { getProduct } from "@/lib/products";
import ProductDetail from "../../../components/product_related/ProductDetail";
import { Suspense } from "react";
import { LoaderCircleIcon } from "lucide-react";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const res = await fetch(
  //   `${baseUrl ? baseUrl : ""}/api/products?id=${params.id}`,
  // );
  // const product = await res.json();

  const product = await getProduct(params.id);

  if (!product) return <div>Loading...</div>;

  return <ProductDetail product={product} />;
};

const Page = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense fallback={<FallbackComponent />}>
      <ProductPage params={params} />
    </Suspense>
  );
};

function FallbackComponent() {
  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center">
      <LoaderCircleIcon className="h-12 w-12 animate-spin" />
    </div>
  );
}

export default Page;
