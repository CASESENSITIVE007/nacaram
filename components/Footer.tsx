import React from "react";
import background from "../components/bgimg.jpg";

import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
const Footer = () => {
  return (
    <div className="  footer bg-yellow-100  h-2/6 mt-12 mr-0 mb-0 pt-12 pr-0 pb-8  font-extralight ">
      <div className="upper md:block justify-around  text-center  border-b border-white sm:block lg:flex   ">
        <div className="home-div border-t border-white  text-left">
          <Link href="/">
            <FooterLink href="/">Home</FooterLink>
          </Link>
          <Link href="/about">
            <FooterLink href="/about">ABOUT</FooterLink>
          </Link>
          <Link href="/contact">
            <FooterLink href="/contact">CONTACT</FooterLink>
          </Link>
        </div>
        <div className="privacy border-t border-white text-left">
          <FooterLink href="/shipping">SHIPPING & RETURNS</FooterLink>
          <FooterLink href="/privacy">PRIVACY POLICY</FooterLink>
        </div>
        <div className="subscribe border-t border-white ">
          <p className="">Subscribe to our newsletter for Nacaram</p>
          <p>news for promotion</p>
          <form className="mt-10">
            <input
              className="border-none outline-none  bg-white  h-10 p-2 "
              type="text"
              placeholder="Enter Email Address"
            />
            <button className=" bg-black text-white h-10 w-12">Join</button>
          </form>
        </div>
        <div className="aboutus border-t border-white">
          <FooterLink href="/about">ABOUT US</FooterLink>
          <br />
          <p>
            Lorem ipsum dolor sit amet crm dolorum t <br />
            otam necessitatibus? Dolorem, v <br />
            itae dolores?
          </p>
        </div>
      </div>

      <div className="lower  ">
        <div className="socialIcons flex justify-center gap-4 mt-8 mr-3.5 mb-5 pt-8 pr-0 pb-0  ">
          <div className="insta">
            <InstagramIcon />
          </div>
          <div className="fb">
            <FacebookIcon />
          </div>
          <div className="twitter">
            <TwitterIcon />
          </div>
        </div>

        <p className="text-center m-8  ">COPYRIGHT @ 2024 Nacaram</p>
      </div>
    </div>
  );
};

export default Footer;

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <p className="hover:underline underline-offset-4">{children}</p>
    </Link>
  );
};
