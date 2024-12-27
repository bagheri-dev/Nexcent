import { AiOutlineYoutube } from "react-icons/ai";
import Logo from "/images/logo-site.png";
import { FiTwitter } from "react-icons/fi";
import { IoIosGlobe } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#263238] p-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="space-y-8 w-full text-white">
            <div className="flex gap-3 items-center">
              <img src={Logo} alt="" />
              <p className="text-4xl font-bold">Nexcent</p>
            </div>
            <p>
              Copyright © 2020 Nexcent ltd. <br /> All rights reserved
            </p>
            <div className="flex gap-5 text-xl">
              <FaInstagram />
              <IoIosGlobe />
              <FiTwitter />
              <AiOutlineYoutube />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="text-white space-y-4">
              <label className="font-bold text-xl">Company</label>
              <ul className="space-y-3">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Priceing</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="text-white space-y-4">
              <label className="font-bold text-xl">Support</label>
              <ul className="space-y-3">
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
              </ul>
            </div>
            <div className="text-white space-y-4">
              <label className="font-bold text-xl">Stay up to data</label>
              <div className="flex items-center py-2 px-3 bg-[#89939E] rounded-xl">
                <input
                  className="outline-none bg-inherit text-white"
                  type="text"
                  placeholder="Your email address"
                />
                <BsSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
