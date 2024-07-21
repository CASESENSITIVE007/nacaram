import { Input } from "./ui/input";
import { Button } from "./ui/button";
import type { SetStateAction, Dispatch } from "react";

const QuantitySelector = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}) => {
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center gap-2">
      <Button
        className="border-l-0"
        variant={"outline"}
        onClick={decreaseQuantity}
      >
        -
      </Button>
      <Input
        // type="number"
        value={quantity}
        readOnly
        className="w-12 border-b border-t border-gray-300 text-center"
      />
      <Button
        className="border-r-0"
        variant={"outline"}
        onClick={increaseQuantity}
      >
        +
      </Button>
    </div>
  );
};

export default QuantitySelector;
