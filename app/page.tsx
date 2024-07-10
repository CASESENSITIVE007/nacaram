import AboutCraftmanship from "@/components/AboutCraftmanship";
import Carousel from "@/components/Carousel";
import MustHaves from "@/components/MustHaves";
import ProductsCollection from "@/components/ProductsCollection";
import ProductsShowcase from "@/components/ProductsShowcase";

export default function Home() {
  return (
    <div className="">

      <Carousel />
      <div className="flex flex-col justify-center mt-4 px-8">
        <MustHaves />
        <AboutCraftmanship />
        <ProductsShowcase />
        <ProductsCollection />
      </div>
    </div>
  );
}
