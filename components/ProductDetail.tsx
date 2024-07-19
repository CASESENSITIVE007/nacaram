import ProductImageGallery from "./ProductImageGallery";
import QuantitySelector from "./QuantitySelector";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string[];
  details: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <ProductImageGallery images={product.imageUrl} />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-lg font-semibold mb-4">
            ${product.price.toFixed(2)}
          </div>
          <QuantitySelector />
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Add to My Bag
          </button>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Details</h2>
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
