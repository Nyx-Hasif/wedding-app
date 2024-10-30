'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Carousel = () => {



const images = [{
  image:assets.india.india_culture,
  title:"India Culture"

},
{
  image:assets.japan.japan_culture,
  title:"Japan Culture",
},
{
  image:assets.chinese.chinese_culture,
  title:"Chinese Culture",
},
{
  image:assets.arab.arab_culture,
  title:"Arabic Culture"
},
{
  image:assets.korea.korea_culture,
  title:"Korea Culture"
},
{
  image:assets.malay.malay_culture,
  title:"Malay Culture"
},
{
  image:assets.western.western_culture,
  title:"Western Culture"

}]

const [currentIndex, setCurrentIndex] = useState(0); //initial index 0 in images array

const handleNext = () => {
  setCurrentIndex(prevIndex => (
    prevIndex === images.length -1? 0 : prevIndex + 1 // initial 0 = prevIndex ...prevIndex(0) === 6 ..jika benar akan naik ke initial balik (0) jika salah akan naik + 1
  ))
}
const handlePrev = () => {
 setCurrentIndex(prevIndex =>(
  prevIndex === 0 ? images.length - 1 : prevIndex - 1 // jika nilai prevIndex xsama dgn 0 maka jika benar akan paparkan (images.lenght - 1 ) jika salah akan prevIndex - 1
 ))
}

const handleClick = (NewIndex) => {
  setCurrentIndex(NewIndex)
}


useEffect(()=>{
  const timer = setInterval(()=>{
    handleNext()
  },10000)

  return () => clearInterval(timer)
},[currentIndex]);

  return (
    <div className="flex h-screen w-full items-center border border-black">
      {/* Parent */}
      <div className="flex mx-auto items-center sm:flex-row flex-col min-w-[80%] h-[80vh]  border border-green-700 ">
        {/* Left */}
        
        <div className="flex flex-col gap-5 border border-black sm:min-w-[60%] min-w-[100%] h-[50%] sm:h-full py-2 px-2 md:py-4 md:px-4 relative">
          <div className="border border-red-600 h-[100%] ">
            <Image
              draggable="false"
              src={images[currentIndex].image}
              alt={"Logo"}
              className="cursor-pointer object-cover object-center  w-full h-full"
            />
            {/* group next/prev button */}
            <div className="absolute inset-0 flex justify-between items-center px-4 text-white">
              <div onClick={handlePrev} className="text-3xl cursor-pointer ">
                <GrLinkPrevious />
              </div>
              <div onClick={handleNext} className="text-3xl cursor-pointer">
                <GrLinkNext />
              </div>
            </div>
          </div>
          {/* Text Content Left */}
          <div className="flex flex-col items-start text-white font-bold text-md md:text-xl gap-2 border border-white sm:h-[20%] py-2 px-2 sm:py-4 sm:px-4 absolute bottom-2 sm:bottom-4 left-2 right-2 md:left-4 md:right-4">
            <h1>{images[currentIndex].title} </h1>
            <p>Wedding Ceremony</p>
            <button className="bg-white text-black px-1 py-1 rounded-md">
              Learn more
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-start border border-black  sm:min-w-[40%] min-w-[100%] h-[50%] sm:h-full py-2 px-2 md:py-4 md:px-4 overflow-auto">
          {/* Content */}
          <div className="flex flex-1 flex-col gap-3 border border-red-600  ">
            {images.map((item,index) => (
              <div onClick={()=>handleClick(index)} key={index} className={`relative flex flex-row justify-start ${currentIndex === index ? "bg-slate-100" : ""} items-center gap-4 w-full border border=black h-[100px] cursor-pointer rounded-md px-2 hover:bg-slate-100 transition-all duration-500`}>
                <Image
                  draggable="false"
                  src={item.image}
                  alt="arab"
                  width={80}
                  height={80}
                  className="rounded-md z-10"
                />
                {currentIndex === index && <div className="loading-bar"></div>}
                <h1 className='z-10 font-medium'>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel
