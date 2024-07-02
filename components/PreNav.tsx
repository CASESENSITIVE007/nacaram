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

const PreNav: React.FC = () => {
  return (
    <div className="bg-yellow-200 text-gray-800">
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
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
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="text-center">
          Free Shipping to the Contiguous Spain for Orders Over $50!
        </div>
        <div className="flex space-x-4">
          <Link href="/search">
            <SearchIcon className="w-5 h-5" />
          </Link>
          <Link href="/account">
            <UserIcon className="w-5 h-5" />
          </Link>
          <Link href="/">
            <HomeIcon className="w-5 h-5" />
          </Link>
          <Link href="/cart">
            <ShoppingCartIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreNav;
