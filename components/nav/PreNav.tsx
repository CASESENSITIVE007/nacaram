// src/components/Navbar.tsx
import React from "react";
import {
  SearchIcon,
  UserIcon,
  ShoppingCartIcon,
  HomeIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import NavSheet from "./NavSheet";
import Cart from "../CartSheet";

const PreNav: React.FC = () => {
  return (
    <div className="bg-header">
      <div className="flex flex-col items-center justify-between gap-2 p-2 md:flex-row md:gap-4 md:p-4">
        <div className="hidden space-x-4 md:flex">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="text-center">Free Shipping</div>
        <div className="flex items-center space-x-4">
          <NavSheet />
          <Link href="/search">
            <SearchIcon className="h-4 w-5" />
          </Link>
          <Link href="/account">
            <UserIcon className="h-4 w-5" />
          </Link>
          <Link href="/">
            <HomeIcon className="h-4 w-5" />
          </Link>

          {/* <ShoppingCartIcon className="h-4 w-5" /> */}
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default PreNav;
