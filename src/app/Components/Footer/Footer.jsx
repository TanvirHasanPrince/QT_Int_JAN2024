/* eslint-disable @next/next/no-img-element */
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 border rounded-2xl md:bg-orange-300 lg:bg-orange-300 bg-none flex flex-col md:flex-row lg:flex-row justify-between items-center">
      <div className=" grow pl-40 ">
        <div className="flex items-center justify-start mb-20">
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="pl-6 pr-2 border border-gray-300 p-2 rounded-full sm:pl-8 sm:p-2 sm:rounded-2xl focus:outline-none focus:ring focus:border-orange-300 w-96 z-0"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-1 p-4 bottom-1 top-1 rounded-xl flex items-center pointer-events-none bg-orange-600 text-white z-20 cursor-pointer gap-2"
            >
              Subscribe <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div>
            <h1 className="md:text-black lg:text-black text-black md:text-4xl lg:text-4xl text-2xl text-left font-bold">
              pti<span className="text-orange-700 text-4xl font-bold">.</span>
            </h1>
            <p className="md:text-black-300 lg:text-black-300 text-black text-left p-2 text-sm md:text-xl lg:text-xl">
              Copyright© Tripp. All Right Reserved
            </p>
          </div>
          <div className="flex items-center justify-between mt-10 ml-10 gap-2">
            <FaGoogle className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
            <FaTwitter className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
            <FaInstagram className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
          </div>
        </div>
      </div>
      <div className="bg-orange-300 lg:bg-none md:bg-none rounded-3xl">
        <img
          src="https://i.ibb.co/9gGmDkh/Image2.png"
          alt="Tripp Logo"
          className="w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
