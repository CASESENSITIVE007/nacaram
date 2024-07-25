import { BadgeX } from "lucide-react";
import Image from "next/image";
import prodImg from "@/public/images/image.png";
export default function cartItems() {
  let id = 1;

  return (
    // outline for cart
    <div className="cartItems font-serif">
      {/*  for small or medium window */}

      <div className="responsive cartItems-format m-auto my-2 block w-9/12 p-5 lg:hidden">
        <Image
          className="m-auto block h-32 w-32 p-2 lg:hidden"
          src={prodImg}
          alt="Product_img"
        />
        <p className="mt-2 block text-center lg:hidden">
          details Lorem ipsum, dolor{" "}
        </p>

        <div className="price_remove_qty mt-10 flex justify-around border-b border-t p-4">
          <p className="lg:hidden">80$</p>
          <p className="lg:hidden">1</p>
          <p className="lg:hidden">
            <BadgeX />
          </p>
        </div>
      </div>

      {/* end small or med size window */}

      {/* for large size window */}

      <div className="cartItems-format mb-2 mt-10 grid grid-cols-8 lg:border-t">
        <Image
          className="col-span-2 hidden h-32 w-32 p-2 lg:block"
          src={prodImg}
          alt="Product_img"
        />

        <p className="col-span-3 hidden p-2 lg:block">
          details Lorem ipsum, dolor{" "}
        </p>
        <p className="m-auto hidden p-2 lg:block">80$</p>
        <p className="m-auto hidden p-2 lg:block">1</p>
        <p className="m-auto hidden p-2 lg:block">
          <BadgeX />
        </p>
      </div>

      {/* end large size window */}
    </div>
  );
}
