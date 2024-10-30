import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { FaShippingFast, FaRegThumbsUp } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";

const Element = () => {
  return (
    <div className="flex flex-col  items-center border h-[100vh] w-[full] border-black">
      {/* coupon header */}
      <div className="flex justify-center items-center border border-black w-full bg-black h-[5%] ">
        <p className="text-white">
          Get 10% off your purchase with coupon code{" "}
          <u className="font-medium ">WEDD2024</u>
        </p>
      </div>
      {/* images box */}
      <div className="relative ">
        {/* image */}
        <div className="flex flex-row border border-black h-[75vh] w-[full] ">
          <Image
            src={assets.ring[0]}
            alt="ring1"
            className=" w-1/2 object-cover"
          />
          <Image
            src={assets.ring[1]}
            alt="ring1"
            className=" w-1/2 object-cover"
          />
        </div>

        {/* text image */}
        <div className="flex flex-col gap-2 md:gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center ">
          <p className="font-medium text-md md:text-lg ">
            Experience the power of your ring
          </p>
          <h1 className="text-lg md:text-4xl font-bold min-w-[300px]">
            Get your ring with right choice and more elegant
          </h1>
          <button className="md:py-2 md:px-2 py-1 px-1 bg-red-600  m-auto rounded-lg text-white text-sm md:text-lg font-small">
            Browse now!
          </button>
        </div>
      </div>

      {/* review section */}
      <div className="flex flex-col md:flex-row justify-start md:justify-center  md:gap-10  border border-black w-full min-h-[20vh]  py-0 md:py-4 ">
        {/* items */}
        <div className="flex flex-row gap-2 items-center py-2 px-2 sm:py-4 sm:px-4 border border-red-600 min-w-[200px] rounded-md">
          <FaShippingFast className="text-3xl" />
          <h1>Fast and Free Shipping</h1>
        </div>

        <div className="flex flex-row gap-2 items-center py-2 px-2 sm:py-4 sm:px-4 border border-red-600 min-w-[200px] rounded-md">
          <MdMobileFriendly className="text-3xl" />
          <h1>Eco Friendly</h1>
        </div>

        <div className="flex flex-row gap-2 items-center py-2 px-2 sm:py-4 sm:px-4 border border-red-600 min-w-[200px] rounded-md">
          <FaRegThumbsUp className="text-3xl" />
          <h1>Best Choice</h1>
        </div>
      </div>
    </div>
  );
}

export default Element

