import AboutCraftmanship from "@/components/home/AboutCraftmanship";
import Carousel from "@/components/Carousel";
import MustHaves from "@/components/home/MustHaves";
import HomeCollection from "@/components/home/HomeCollection";
import ProductsShowcase from "@/components/product_related/ProductsShowcase";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <div className="mt-4 flex flex-col justify-center md:px-8 lg:mx-auto lg:max-w-[1400]">
        <MustHaves />
        <AboutCraftmanship />
        <ProductsShowcase />
        <HomeCollection />
      </div>
    </div>
  );
}
