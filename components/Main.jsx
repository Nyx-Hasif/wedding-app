import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden  ">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={assets.video} type="video/mp4" />
      </video>

      {/* Gradient overlay  */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
        }}
      />

      {/* Wave SVG - tambah z-index */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L80,213.3C160,235,320,277,480,261.3C640,245,800,171,960,160C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  min-w-[300px] z-20">
        <div className="flex flex-col ">
          <h1 className="text-3xl sm:text-4xl font-thin">
            Plan your forever, better.
          </h1>
          <p className="mt-3 text-lg max-w-[350px]">
            Design a personalized website, create an all-in-one registry, and
            experience wedding planning the way it should be.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-5 mt-5 ">
          <button className="rounded-md px-2 py-2 font-medium bg-purple-800 hover:bg-purple-950">
            Get Started
          </button>
          <button className="rounded-md border border-white px-2 py-2 font-medium hover:bg-white hover:text-purple-900 transition-all duration-500">
            Find an Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
