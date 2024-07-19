import AboutCraftmanship from "@/components/AboutCraftmanship";
import Carousel from "@/components/Carousel";
import MustHaves from "@/components/MustHaves";
import ProductsCollection from "@/components/ProductsCollection";
import ProductsShowcase from "@/components/ProductsShowcase";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <div className="mt-4 flex flex-col justify-center md:px-8 lg:mx-auto lg:max-w-[1400]">
        <MustHaves />
        <AboutCraftmanship />
        <ProductsShowcase />
        <ProductsCollection />
      </div>
    </div>
  );
}
