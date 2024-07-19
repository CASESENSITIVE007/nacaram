import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center">
      <button
        onClick={decreaseQuantity}
        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        className="w-12 text-center border-t border-b border-gray-300"
      />
      <button
        onClick={increaseQuantity}
        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
