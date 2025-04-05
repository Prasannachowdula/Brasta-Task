import React from 'react'
import header from "../assets/header.png"
import { MdOutlinePhone } from "react-icons/md"

const Hero = () => {
  return (
    <div className='bg-black w-full text-white flex flex-col lg:flex-row gap-2 h-fit overflow-hidden'>
      <div className='w-full lg:w-[65%] flex flex-col gap-6 lg:gap-7 p-6 lg:p-20 lg:py-36 h-full'>
        <h1 className='font-semibold text-4xl sm:text-6xl lg:text-8xl font-poppins leading-tight lg:leading-[6rem]'>
          Fresh Foods<br />
          <span className='font-playwrite font-light'>with</span> Great taste
        </h1>
        <p className='font-albert-sans w-full lg:w-8/12 text-sm sm:text-base'>
          Whether you’re here for a casual lunch, a romantic dinner, or a celebration, Baristra’s warm and attentive service promises to make your visit delightful. Enjoy the charm of our modern, stylish interior.
        </p>
        <button className='flex gap-3 rounded-full border border-white px-6 py-3 items-center w-fit text-sm sm:text-base'>
          <MdOutlinePhone className='text-lg sm:text-xl' />
          Call or Book
        </button>
      </div>
      <div className='w-full lg:w-[35%] h-[300px] lg:h-full'>
        <img src={header} className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Hero
