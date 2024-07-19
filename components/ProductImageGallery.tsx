interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery = ({ images }: ProductImageGalleryProps) => {
  return (
    <div>
      <img src={images[0]} alt="Product Image" className="w-full mb-4" />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-16 h-16 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
