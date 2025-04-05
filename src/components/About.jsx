import React from 'react'
import about from "../assets/about.png"
import about1 from "../assets/about1.png"
import logo from "../assets/logo1.png"
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { RiHomeFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const About = () => {
  return (
    <div
      className='w-full h-fit overflow-hidden bg-cover grid text-white font-albert-sans grid-cols-1 lg:grid-cols-2 bg-no-repeat'
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Image section */}
      <div className='flex items-end justify-center'>
        <img src={about1} className='h-[300px] lg:h-[50%] min-w-[80%] lg:min-w-[50%] object-cover' />
      </div>

      {/* Text section */}
      <div className='w-full h-full flex flex-col bg-gradient-to-r gap-10 items-center justify-center py-10 lg:py-14 from-black/20 via-neutral-950 to-black px-4'>
        <img src={logo} className='h-44 w-52 lg:h-56 lg:w-64 object-cover' />
        
        <div className='w-full lg:w-8/12 flex justify-center flex-col items-center'>
          <span className='flex justify-start pb-2 w-full lg:w-9/12'>
            <BiSolidQuoteAltLeft className='text-xl lg:text-2xl' />
          </span>

          <p className='text-base lg:text-xl text-center w-full lg:w-8/12 leading-relaxed'>
            Welcome to Brastra, where the essence of traditional flavors meets modern culinary artistry. Our journey began with a simple vision: to create a dining experience that brings people together over delicious, carefully crafted dishes inspired by our roots and local ingredients. At Brastra, we believe in honoring heritage while embracing innovation, resulting in a menu that celebrates both classic favorites and unique, original creations.
            <span className='w-full flex justify-end mt-2'>
              <BiSolidQuoteAltRight className='text-xl lg:text-2xl' />
            </span>
          </p>
        </div>

        <div className='w-full lg:w-8/12 flex flex-col items-end gap-2 text-sm lg:text-base'>
          <p className='flex gap-2 items-center justify-end text-right'>
            5th Eve, Colombo Road, Galle. <RiHomeFill />
          </p>
          <p className='flex gap-2 items-center justify-end text-right'>
            +94 111 123 457 <MdCall />
          </p>
          <p className='flex gap-2 items-center justify-end text-right'>
            brastra@gmail.com <IoMail />
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
