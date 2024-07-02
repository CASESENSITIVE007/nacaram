import React from 'react'
import './Footer.css'
import{
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    Twitter
}from "lucide-react";
// import footer_logo from '../assets/logo_big.png'
// import instagram_icon from '../assets/instagram_icon.png'
// import pintester_icon from '../assets/pintester_icon.png'
// import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-log0">
                {/* <img src={footer_logo} alt="" /> */}
                <br />
                <br />
                <br />
                <br />
                <p>Nacaram</p>
            </div>
            <ul className="footer-links">
                {/* <li>Company</li> */}
                <li>Products</li>
                {/* <li>Offices</li> */}
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons ">
                <div className="footer-icons-container">
                    <InstagramIcon/>
                </div>
                <div className="footer-icons-container">
                  <FacebookIcon/>
                </div>
                <div className="footer-icons-container">
                    <TwitterIcon/>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
