import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React, { JSX, SVGProps } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Nav() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-between gap-2 px-4">
      <Link href="/" className="w-32 md:flex md:w-auto">
        <Image src="/logo_alt1.png" alt="nacaram" width={250} height={250} />

        <span className="sr-only">Nacaram</span>
      </Link>

      <NavigationMenu className="mx-auto hidden gap-6 md:flex">
        <NavigationMenuList>
          <Link
            href="/"
            prefetch={false}
            className={navigationMenuTriggerStyle()}
          >
            Home
          </Link>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[500px]">
                {/* <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/all-products"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <BriefcaseIcon className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        All Products
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Stylish and versatile handbags for every occasion.
                        Beutifull. Customizable.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li> */}
                <ListItem href="/all-products" title="All Products">
                  Take a look at all our products.
                </ListItem>
                <ListItem href="/shop/Totes" title="Totes">
                  Spacious and practical totes for everyday use.
                </ListItem>
                <ListItem href="/shop/Clutches" title="Clutches">
                  Chic clutches perfect for evening events and parties.
                </ListItem>
                <ListItem href="/shop/Satchels" title="Satchels">
                  Elegant satchels combining style and functionality.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <Link
            href="/about"
            prefetch={false}
            className={navigationMenuTriggerStyle()}
          >
            About
          </Link>

          <Link
            href="/contact"
            prefetch={false}
            className={navigationMenuTriggerStyle()}
          >
            Contact
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href || "/404"}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
