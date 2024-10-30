import React from 'react'
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { assets } from '@/assets/assets';

const Photographer = () => {

  const images = [{

  img: assets.photographer_male[0],
  name: "Jamie Oliver ",
  },
  {
    img: assets.photographer_male[1],
    name: "Eddie Brock",
  },
  {
    img: assets.photographer_male[2],
    name: "Lan Fu Chen",
  },
  {
    img: assets.photographer_male[3],
    name: "Carlos Santana",
  },
  {
    img: assets.photographer_male[4],
    name: "Nathan Wilder",
  },

  {
    img: assets.photographer_female[0],
    name: "Natalie Portman",  
  },
  {
    img: assets.photographer_female[1],
    name: "Jane Fonda",
  },
  {
    img: assets.photographer_female[2],
    name: "Emilia Athalia",
  },
  {
    img: assets.photographer_female[3],
    name: "Jia Xin",
  },
  {
    img: assets.photographer_female[4],
    name: "Miaka Wang",
  }];

  return (
    <div className="h-full w-full  px-5 flex flex-col gap-6 justify-start items-center border border-black  py-20">
      <div className='text-center mt-4'>
        <h1 className='text-4xl font-bold'>Meet Our Expert Photographers Here</h1>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        {/* First Card */}
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className=" group relative h-[379px] w-[300px] mx-[10px] my-[10px] rounded-[20px] overflow-hidden shadow-lg border border-black">
              <div className="absolute inset-0 transition-transform duration-800 ease-in-out group-hover:scale-150">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:object-left transition-all duration-700 ease-in-out "
                  priority
                />
              </div>

              <div className="relative h-[342px] w-[260px] border-2 border-red-500 rounded-[15px] flex justify-center items-center m-auto mt-[18.5px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <h2 className="absolute bottom-[130px] left-[25px] w-[15px] text-white text-[30px] leading-none  drop-shadow-lg">
                  {item.name}
                </h2>
                <div className="absolute bottom-[30px] h-[100px] w-[70px] flex flex-row gap-2 items-center  text-white">
                  <FaInstagram className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                  <FaTwitter className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                  <FaFacebook className="text-[30px] transition-all duration-200 ease-in-out hover:text-[50px] cursor-pointer" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photographer
