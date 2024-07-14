import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex md:flex-col w-full shrink-0 items-center px-4 md:px-6 justify-between gap-2">
      <Sheet>
        <Link href="/" className="mr-6 md:flex">
          <Image src="/logo.png" alt="nacaram" width={100} height={100} />
          <span className="sr-only">Nacaram</span>
        </Link>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden my-6">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6  md:flex" prefetch={false}>
            <Image src="/logo.png" alt="nacaram" width={100} height={100} />
            <span className="sr-only">Nacaram</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/all-products"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="mx-auto hidden md:flex gap-6 ">
        <Link href="/" prefetch={false}>
          <Button variant="link">Home</Button>
        </Link>
        <Link href="/about" prefetch={false}>
          <Button variant="link">About</Button>
        </Link>
        <Link href="/all-products" prefetch={false}>
          <Button variant="link">Products</Button>
        </Link>
        <Link href="/contact" prefetch={false}>
          <Button variant="link">Contact</Button>
        </Link>
        <Link href="/">
          <Button variant="link">Log in</Button>
        </Link>
      </nav>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
