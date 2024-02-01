import React from "react";
import { WNGC_logo } from "../../assets";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-[#2C3F46]">
      <div className="flex flex-col md:flex-row max-w-4xl justify-between m-auto text-[#808080] py-8 md:px-2 px-10 gap-4">
        <div className="flex flex-col md:items-center justify-center cursor-pointer">
          <img src={WNGC_logo} alt="Wesnile Golf Club Logo" className="w-16 " />
          <p className="mt-2">WestNile Golf Club</p>
        </div>
        <div className="">
          <h4 className="py-2 font-titleFont text-xl font-bold">Contact Us</h4>
          <div className="text-sm">
            <p>WestNile Golf Club</p>
            <p>Weatherhead ParkLane</p>
            <p> Arua City, Uganda</p>
            <p>Email: info@westnilegolfclub.com</p>
            <p>Phone: +256 789 012345</p>
          </div>
        </div>
        <div className="footer-social">
          <h4 className="py-2 font-titleFont text-xl font-bold">Follow Us</h4>
          <ul className="text-sm">
            <li className="flex items-center justify-start gap-4 cursor-pointer">
              <FaFacebook />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center justify-start gap-4 cursor-pointer">
              <FaXTwitter />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center justify-start gap-4 cursor-pointer">
              <FaInstagram />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-[#65787E] flex justify-center items-center w-full p-2 bg-[#1e2b30] text-sm">
        <p>&copy; 2024 WestNile Golf Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
