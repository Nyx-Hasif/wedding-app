import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoCameraOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaMartiniGlassCitrus, FaMusic } from "react-icons/fa6";
import { HiOutlineCake } from "react-icons/hi";
import { RiSparkling2Line } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";
import Marquee from "react-fast-marquee";

const Hero = () => {

    const icons = [{
        icon: <SlLocationPin />,
        title: "Venue"
    },
    {
        icon: <IoCameraOutline />,
        title: "Photography"
    },
    {
        icon: <GoDeviceCameraVideo />,
        title: "Videography"
    },
    {
        icon: <TbToolsKitchen2 />,
        title: "Catering"
    },
    {
        icon: <FaMartiniGlassCitrus />,
        title: "Drinks"
    },
    {
        icon: <HiOutlineCake />,
        title: "Cakes"
    },
    {
        icon: <RiSparkling2Line />,
        title: "Beauty"
    },
    {
        icon: <GiLovers />,
        title: "Wedding"
    }
]

  return (
    <div className="flex flex-col justify-start items-center border border-black py-6 w-full md:gap-4 overflow-auto">
      {/* hero section */}
      <div className="flex md:flex-row flex-col border border-black md:min-h-[60%] min-w-[80%]  ">
        {/* left */}
        <div className="flex flex-col justify-center items-start  border border-black gap-8 py-4 px-4 md:w-1/2 ">
          <h1 className="text-3xl md:text-6xl font-extrabold">Plan your shooting place </h1>
          <p>
            Set your shooting place so that our photographer bring you the best
            shooting experience and the best service
          </p>
          <button className="px-4 py-4 border border-black rounded-full">
            Learn More
          </button>
        </div>
        {/* right */}
        <div className="flex flex-col  justify-center items-center gap-4 border py-2 border-black md:w-1/2 ">
          <div className="flex flex-row gap-4">
            <Image
              src={assets.hero[0]}
              alt="logo"
              draggable="false"
              className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px]"
            />
            <Image
              src={assets.hero[1]}
              alt="logo"
              draggable="false"
              className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-tl-[80px] rounded-tr-[80px] rounded-br-[80px]"
            />
          </div>
          <div className="flex flex-row gap-4">
            <Image
              src={assets.hero[2]}
              alt="logo"
              draggable="false"
              className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-tl-[80px] rounded-br-[80px] rounded-bl-[80px]"
            />
            <Image
              src={assets.hero[3]}
              alt="logo"
              draggable="false"
              className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] rounded-br-[80px] rounded-tr-[80px] rounded-bl-[80px]"
            />
          </div>
        </div>
      </div>
      {/* marquee section */}
        <div className="flex flex-col justify-center items-center border border-black py-5 sm:rounded-[50px] gap-4 md:text-xl max-w-[100%] md:max-w-[80%] overflow-hidden ">
        <h1 className="md:block hidden">Explore wedding vendors by category</h1>
        <Marquee speed={100} gradientWidth={50} className="flex flex-row gap-4 overflow-hidden">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  items-center border border-black  py-2 px-2 mx-4 min-w-[200px]">
              <div className="md:text-2xl border-2 border-black rounded-full py-2 px-2 bg-slate-700 text-white">
                {item.icon}
              </div>
              <h1>{item.title}</h1>
            </div>
          ))}
        </Marquee>
      </div>
   
  
    </div>
  );
}

export default Hero
