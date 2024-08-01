import AboutCraftmanship from "@/components/home/AboutCraftmanship";
import ImageSlider from "@/components/ImageSlider";
import MustHaves from "@/components/home/MustHaves";
import HomeCollection from "@/components/home/HomeCollection";
import HomeFeatured from "@/components/home/HomeFeatured";

const images = ["/slide.png", "/slide.png", "/slide.png"];

export default function Home() {
  return (
    <div>
      <ImageSlider images={images} />
      <div className="mt-4 flex flex-col justify-center md:px-8 lg:mx-auto lg:max-w-[1400]">
        <MustHaves />
        <HomeFeatured />
        <HomeCollection />
        <AboutCraftmanship />
      </div>
    </div>
  );
}
