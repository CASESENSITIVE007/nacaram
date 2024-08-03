import React from "react";
import background from "../components/bgimg.jpg";
import bg from "./bg_image.jpg"

import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer bg-header  mt-12 h-2/6 pb-10 p-5 pt-12 lg:font-xl font-serif bg-cover bg-center  bg-bg_image "   >
      <div className="upper justify-around border-b  p-2  text-center p-10 mb-10  lg:flex  ">
        <div className="home-div flex flex-col justify-center lg:text-center md:text-left mb-10   lg:border-t  ">
          <FooterLink  href="/"  >HOME</FooterLink>
          <FooterLink href="/about">ABOUT</FooterLink>
          <FooterLink href="/contact">CONTACT</FooterLink>
        </div>
        <div className="privacy lg:border-t  flex flex-col lg:text-center md:text-right   mb-10 justify-center  ">
          <FooterLink href="/shipping">SHIPPING & RETURNS</FooterLink>
          <FooterLink href="/privacy">PRIVACY POLICY</FooterLink>
        </div>
        <div className="subscribe lg:border-t flex flex-col mb-10 lg:text-center md:text-left justify-center ">
          <p className="">Subscribe to our newsletter for Nacaram</p>
          <p>news for promotion</p>
          <form className="mt-2 lg:mt-10">
            <input
              className="h-10 border-none bg-white  p-2 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
            <button className="h-10 w-12 bg-black text-white">Join</button>
          </form>
        </div>
        <div className="aboutus lg:border-t flex flex-col justify-center lg:text-center md:text-right ">
          <FooterLink href="/about">ABOUT US</FooterLink>
          <br />
          <p>
            Lorem ipsum dolor sit amet crm dolorum t <br />
            otam necessitatibus? Dolorem, v <br />
            itae dolores?
          </p>
        </div>
      </div>

      <div className="lower">
        <div className="socialIcons mb-5 mr-3.5 mt-8 flex justify-center gap-4 pb-0 pr-0 pt-8">
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

        <p className="m-8 text-center">COPYRIGHT @ 2024 Nacaram</p>
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
      <p className="underline-offset-4 hover:underline">{children}</p>
    </Link>
  );
};
