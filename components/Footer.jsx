import React from 'react'
import { FaInstagramSquare, FaFacebook, FaYoutube,FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full  h-[max] text-white bg-black">
      {/* parent for 2 Elements */}
      <div className="flex flex-row justify-center w-full  md:py-6 border border-black">
        {/* first element */}
        <div className="flex flex-col border gap-4 border-black w-full md:w-[50%] py-4 px-4 sm:ml-4">
          <h1 className="text-2xl font-medium">Dont Miss Out</h1>
          <p className="max-w-[382px]">
            Sign up for the latest beauty news, product samples and coupons
          </p>

          <div className="flex justify-start gap-2 md:gap-4 md:flex-row flex-col md:max-w-[380px] ">
            <input
              type="text"
              className="border border-white outline-none md:min-w-[370px] pl-4"
              placeholder="Enter Your Email Address"
            />
          </div>
          <button className="border-2 border-white md:max-w-[370px] font-semibold">
            Subscribe
          </button>
          <p className="max-w-[382px]">
            This site is intended for demonstration purposes only.By
            susbscribing to this site, you agree to the terms of use.
          </p>
          <p>*Required information</p>
          <div className="flex flex-row  justify-start gap-5  w-max text-2xl">
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <FaInstagramSquare />
            </div>
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <FaFacebook />
            </div>
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <FaSquareXTwitter />
            </div>
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <FaYoutube />
            </div>
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <BiLogoGmail />
            </div>
            <div className="rounded-full border-2 border-white md:p-2 p-1">
              <FaPinterest />
            </div>
          </div>
        </div>

        {/* second element */}
        <div className="lg:flex flex-row hidden md:gap-8 border border-black w-[50%]">
          <div className="border border-black">
            <h1 className="text-xl font-medium">Company</h1>
            <ul className="mt-4">
              <li>About</li>
              <li>Expert and Spokesmodels</li>
            </ul>
          </div>
          <div className="border border-black">
            <h1 className="text-xl font-medium">Customer Service</h1>
            <ul className="mt-4">
              <li>Contact Us</li>
              <li>My Account</li>
              <li>Store Locator</li>
              <li>Redeem rewards</li>
            </ul>
          </div>
          <div className="border border-black">
            <h1 className="text-xl font-medium">More to Explore</h1>
            <ul className="mt-4">
              <li>Beauty Wedding Dress</li>
              <li>Offers</li>
              <li>Packages and Consultations</li>
              <li>Photographers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* third element */}
      <div className="lg:flex hidden flex-row justify-between items-center border-t-2 border-white py-4 px-16">
        <div className="flex flex-row gap-6">
          <p>SITE MAP</p>
          <p>PRIVACY</p>
          <p>TERMS</p>
          <p>USER CONTENT PERMISSION TERMS</p>
          <p>DOTA2</p>
          <p>DISCLAIMER</p>
        </div>

        <div className="flex flex-row gap-6">
          <p>© 2024 All Rights Reserved</p>
          <div>Back to the top</div>
        </div>
      </div>

      {/* policies */}
      <div className="flex flex-row justify-center items-center border-t border-white sm:py-2 px-4">
        <p className="font-thin">
          This site is intended for demonstration purposes only.By susbscribing
          to this site, you agree to the terms of use.
        </p>
      </div>
    </div>
  );
}

export default Footer
