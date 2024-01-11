/* eslint-disable @next/next/no-img-element */
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 border rounded-2xl bg-orange-300  bg-none flex flex-col md:flex-row lg:flex-row justify-between items-center">
      <div className=" md:grow lg:grow md:pl-40 lg:pl-40  p-10 ">
        <div className="flex items-center justify-start md:mb-20 lg:mb-20 ">
          <div className="relative ">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="md:pl-6 lg:pl-6 md:pr-2 lg:pr-2 border border-gray-300 p-2 rounded-full focus:outline-none focus:ring focus:border-orange-300 md:w-96 lg:w-96 w-80 z-0"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-1 p-4 bottom-1 top-1 rounded-xl flex items-center pointer-events-none bg-orange-600 text-white z-20 cursor-pointer gap-2"
            >
              Subscribe <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        <div className="flex justify-start items-center flex-col-reverse md:flex-row lg:flex-row ">
          <div className="">
            <h1 className="md:text-black lg:text-black text-black md:text-4xl lg:text-4xl text-2xl text-left font-bold">
              pti<span className="text-orange-700 text-4xl font-bold">.</span>
            </h1>
            <p className="md:text-black-300 lg:text-black-300 text-black text-left p-2 text-sm md:text-xl lg:text-xl">
              Copyright© Tripp. All Right Reserved
            </p>
          </div>
          <div className="flex items-center justify-between mt-10 ml-10 gap-2 ">
            <FaGoogle className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
            <FaTwitter className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
            <FaInstagram className="w-8 h-8 p-2 text-orange-500 rounded-full bg-orange-100" />
          </div>
        </div>
      </div>
      <div className="bg-orange-300 lg:bg-none md:bg-none hidden md:block lg:block rounded-3xl">
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
