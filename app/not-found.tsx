import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4">
      {/* <Image src="/logo.png" alt="logo" width={256} height={256} /> */}
      <h1 className="text-4xl font-bold">404</h1>
      <Link className={buttonVariants()} href="/">
        Return Home
      </Link>
    </div>
  );
}
