'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenuFold4Fill } from "react-icons/ri";

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
  <div  className='fixed top-0 left-0 w-full z-30'>
       <div className='flex flex-1 sm:justify-between items-center py-4 px-4 border border-black bg-white'>
            <div className='sm:flex hidden gap-8 items-center '>
                <Link href="/"><Image draggable="false" src={assets.logo} alt={"Logo"} width={50} height={50} className='cursor-pointer'/></Link>
                <div><Link href="/">Home</Link></div>
                <div><Link href="/about">About</Link></div>
                <div><Link href="/gallery">Gallery</Link></div>
                <div><Link href="/contact">Contact</Link></div>
            </div>
            <div className='sm:flex hidden gap-5 '>
                <button>LogIn</button>
                <button>Get Started</button>
            </div>

            {/* Mobile */}
            <div onClick={openMenu} className='sm:hidden cursor-pointer text-2xl'>
                {isOpen? <RiMenuFold4Fill />:<RxHamburgerMenu />}
            </div>

            {/* Mobile Image view */}
            <div className='sm:hidden mx-auto'>
                <div><Image draggable="false" src={assets.logo} alt={"Logo"} width={50} height={50} className='cursor-pointer'/></div>
            </div>
      </div>

      <div className={`flex flex-col text-center  ${isOpen? "max-h-[300px] " : "max-h-0"} transition-all duration-500 overflow-hidden sm:hidden bg-white`} >
        <Link href="/" className='py-2'>Home</Link>
        <Link href="/about" className='py-2'>About</Link>
        <Link href="/gallery" className='py-2'>Gallery</Link>
        <Link href="/contact" className='py-2'>Contact</Link>
        <Link href="/" className='py-2'>Get Started</Link>
    
      </div>
  </div>
  )
}

export default Navbar