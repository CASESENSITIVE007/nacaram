import React from 'react'
import Link from 'next/link';

import{
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    Twitter
    
}from "lucide-react";
const Footer = () => {
    return (
        
        <div className='  footer bg-yellow-100  h-2/6 mt-12 mr-0 mb-0 pt-12 pr-0 pb-8  font-extralight '>
            <div className="upper md:block justify-around  text-center  border-b border-white sm:block lg:flex   ">
            <div className="home-div border-t border-white ">
                <p className=' mt-2 ' ><Link href="/">HOME</Link></p>
               <p> <Link href="/about">ABOUT</Link>  </p>
                <p><Link href="/contact">CONTACT</Link></p>
                <p className='cursor-pointer' >WHOLESALE SITE</p>
            </div>
            <div className="privacy border-t border-white">
                <p className=' mt-2'><Link href="/shipping">SHIPPING & RETURNS</Link></p>
                <p><Link href="/privacy">PRIVACY POLICY</Link></p>
            </div>
            <div className="subscribe border-t border-white">
                <p className=' mt-2' >Subscribe to our newsletter for Nacaram</p>
                <p>news for promotion</p>
                <form className=''>
                    <input className='border-none outline-none  bg-white mt-2  h-10 p-2 ' type="text" placeholder='Enter Email Address' />
                    <button className=' bg-black text-white h-10 w-12' >Join</button>
                </form>
            </div>
            <div className="aboutus border-t border-white">
                
                <p className=' mt-2' >ABOUT US</p>
                <br />
                <p>Lorem ipsum dolor sit amet crm dolorum t <br />
                    otam necessitatibus? Dolorem, v <br />
                    itae dolores?</p>
                
            </div>
            </div>

            <div className="lower  ">
                <div className="socialIcons flex justify-center gap-4 mt-8 mr-3.5 mb-5 pt-8 pr-0 pb-0  ">
                <div className='insta' >
                <Link href="https://www.instagram.com/"><InstagramIcon/></Link>
                </div>
                <div className='fb' >
                <Link href="https://www.facebook.com/"><FacebookIcon/></Link>
                </div>
                <div className='twitter' >
                <Link href="https://x.com/"><TwitterIcon/></Link>
                </div>
                </div>

                <p className='text-center m-8 '>COPYRIGHT @ 2024 Nacaram</p>
               
            </div>
        </div>
    )
}

export default Footer
