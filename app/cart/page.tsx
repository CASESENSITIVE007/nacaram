import CartItems from "@/components/CartItems";
export default function cart() {
  let id = 1;
  if (id > 0) {
    return (
      <div className="m-auto w-9/12 font-serif">
        <h1 className="mt-10 p-2 text-center font-serif text-3xl font-semibold">
          My Bag
        </h1>
        <div className="cartItems-format-main mt-5 grid grid-cols-8">
          <p className="col-span-2 hidden p-2 text-xl font-semibold lg:block">
            Product
          </p>
          <p className="col-span-3 hidden p-2 text-xl font-semibold lg:block">
            Details
          </p>
          <p className="hidden p-2 text-center text-xl font-semibold lg:block">
            Prize
          </p>
          <p className="md:text-md ml-1 hidden p-2 text-center font-semibold lg:block lg:text-xl">
            Qty
          </p>
          <p className="md:text-md hidden p-2 text-center font-semibold lg:block lg:text-xl">
            Remove
          </p>
        </div>
        <CartItems />
        <CartItems />
        <CartItems />

        {/* text area  */}
        <div className="customMsg mt-10">
          <p className="font-semibold">
            Please leave special instructions below:
          </p>
          <textarea
            className="mt-2 w-[44vh] resize border-2 p-2"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    );
  } else
    return (
      <p className="mt-16 text-center font-serif text-2xl font-medium">
        Cart is Empty
      </p>
    );
}
