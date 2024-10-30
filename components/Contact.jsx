import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='flex lg:h-screen flex-col gap-6 justify-start items-center border border-black h-full overflow-auto pt-12'>

        {/* contact text */}
      <div className='flex flex-col gap-4 justify-center items-center border border-black mt-10 max-w-[600px] px-8 py-8 text-center'>
        <h1 className='text-6xl font-medium'>Contact Us</h1>
        <p className='text-lg font-medium'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>

      {/* contact icons */}
      <div className='flex flex-col lg:flex-row border border-black py-4 px-[10%] gap-6'>
            <div className='flex flex-row items-center gap-3'>
                <div className='border-2 border-black py-3 px-3 rounded-full'>
                    <FaLocationDot className='text-xl' />
                </div>
                <div className='border border-black'>
                    <h1 className='text-xl font-bold'>Location</h1>
                    <p className='text-lg font-medium'>A108 Adam Street, New York, NY 535022</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div className='border-2 border-black py-3 px-3 rounded-full'>
                    <IoCall className='text-xl' />
                </div>
                <div className='border border-black'>
                    <h1 className='text-xl font-bold'>Call</h1>
                    <p className='text-lg font-medium'>+1 5589 55488 55</p>
                </div>
            </div>
            <div className='flex flex-row items-center gap-3'>
                <div className='border-2 border-black py-3 px-3 rounded-full'>
                    <MdEmail  className='text-xl' />
                </div>
                <div className='border border-black'>
                    <h1 className='text-xl font-bold'>Email</h1>
                    <p className='text-lg font-medium'>+1 5589 55488 55</p>
                </div>
            </div>

      </div>

      {/* contact form */}
      <form className='flex flex-col border border-black gap-4 w-full px-[10%] py-6'>
            <div className='flex flex-col sm:flex-row gap-4 '>
                <input type="text" placeholder='Your Name' className='border-2 border-black sm:w-[60%] h-[40px] pl-2 outline-none'/>
                <input type="text"  placeholder='Your Email ' className='border-2 border-black sm:w-[40%] h-[40px] pl-2 outline-none'/>
            </div>
                <input type="text" placeholder='Subject' className='border-2 border-black w-[100%] h-[40px] pl-2 outline-none'/>
                <textarea type="text" placeholder='Message' className='border-2 border-black w-[100%] h-[100px] pl-2 outline-none'/>
                <button className='border-2 border-black w-[200px] mx-auto py-3 px-3 rounded-md'>Send Message</button>    
      </form>
    </div>
  )
}

export default Contact
