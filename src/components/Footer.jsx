import React from 'react'
import logo from "../assets/logo1.png"
import { IoLogoFacebook } from "react-icons/io5"
import { RiInstagramFill } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='w-full flex flex-col font-instrument-sans text-white px-6 lg:px-32 py-10 bg-black'>
      <div className='border-b border-b-white flex flex-col lg:flex-row justify-between items-start lg:items-center pb-10 gap-6'>
        <div className='flex flex-col gap-2 items-start lg:items-center'>
          <img src={logo} className='h-20 w-40 object-center' />
          <p>Phone number</p>
          <p>+34 911 72 07 45</p>
        </div>
        <ul className='flex flex-col sm:flex-row text-base sm:text-lg gap-2 sm:gap-5'>
          <li>Home</li>
          <li>Menu</li>
          <li>Wines</li>
          <li>Christmas Dinner</li>
        </ul>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 gap-4'>
        <p className='text-sm sm:text-base'>copyright &copy; 2025 Brastra</p>
        <div className='flex gap-3 text-2xl sm:text-4xl'>
          <IoLogoFacebook />
          <RiInstagramFill />
        </div>
      </div>
    </div>
  )
}

export default Footer
