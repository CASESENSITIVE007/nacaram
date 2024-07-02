import { ProductCarousel } from "@/components/Carousel";
import Nav from "@/components/Nav";
import PreNav from "@/components/PreNav";
import ProductsShowcase from "@/components/ProductsShowcase";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <PreNav />
      <Nav />
      <div className="flex flex-col justify-center ">
        <ProductCarousel />
        <ProductsShowcase />
      </div>
      <div>Well I made a next app finally</div>
      <div>
        Click this Button to go to the next page{" "}
        <Link href="/about">
          <Button>About</Button>
        </Link>{" "}
      </div>
    </main>
  );
}
