import { ProductCarousel } from "@/components/Carousel";
import Nav from "@/components/Nav";
import PreNav from "@/components/PreNav";
import ProductsCollection from "@/components/ProductsCollection";
import ProductsShowcase from "@/components/ProductsShowcase";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <PreNav />
      <Nav />
      <ProductCarousel />
      <div className="flex flex-col justify-center mt-4 px-8">
        <ProductsShowcase />
        <ProductsCollection />
      </div>
    </main>
  );
}
