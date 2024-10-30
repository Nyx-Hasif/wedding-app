'use client'
import { blog_data } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const GalleryFilter = () => {

    const [active,setActive] = useState('All');


  return (
    <div className='flex flex-col border border-black w-full  overflow-auto'>
        {/* title */}
     <div className='border border-black py-6 px-6 text-center'>
        <h1>Check out our event image below ! </h1>
        <p>Review and find out your prosperity and set your style now !</p>
     </div>


     {/* filter */}
     <div className='flex flex-col border border-black items-center '>
        {/* buttons */}
        <div className='flex flex-wrap gap-3 border border-black py-4 px-4 w-full justify-center'>
           <button onClick={()=> setActive('All')} className={`${active === 'All'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>All</button>
           <button onClick={()=> setActive('India')} className={`${active === 'India'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>India</button>
           <button onClick={()=> setActive('Japan')} className={`${active === 'Japan'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Japan</button>
           <button onClick={()=> setActive('China')} className={`${active === 'China'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>China</button>
           <button onClick={()=> setActive('Korea')} className={`${active === 'Korea'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Korea</button>
           <button onClick={()=> setActive('Malay')} className={`${active === 'Malay'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Malay</button>
           <button onClick={()=> setActive('Arab')} className={`${active === 'Arab'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>Arab</button>
           <button onClick={()=> setActive('West')} className={`${active === 'West'?'bg-black text-white border border-transparent':'bg-white text-black border border-black'}  p-2 min-w-[80px]`}>West</button>  
        </div>

        {/* images result */}
        <div className='flex flex-wrap justify-center md:justify-start  items-center border border-black py-8 px-4 md:max-w-[80%] gap-4'>
            {blog_data.filter(item=> active === 'All' || item.category === active).map((item,index)=>(
                 <div key={index} className='border border-black md:ml-[26px] '>
                 <Image draggable="false" src={item.image} alt={item.title} width={250} height={250}/>
            </div> 
            ))}       
        </div>
     </div>
    </div>
  )
}

export default GalleryFilter
