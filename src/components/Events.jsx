import React from 'react'
import event from "../assets/events.png"
import food7 from "../assets/food7.png"

const Events = () => {
  return (
    <div
      className='w-full h-auto relative flex flex-col lg:flex-row items-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${event})` }}
    >
      <div className='w-full font-poppins flex flex-col gap-1 text-white p-6 sm:p-10 lg:p-20 lg:px-32 h-auto lg:h-[60%] bg-black bg-opacity-70'>
        <h1 className='font-semibold text-red-500 text-sm sm:text-base'>discount</h1>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Upcoming Events</h1>
        <p className='mt-4 text-sm sm:text-base text-neutral-400 max-w-full lg:w-4/12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className='w-full h-full absolute lg:static top-0 left-0 p-4 sm:p-10 lg:pr-20 flex justify-center lg:justify-end items-end'>
        <img src={food7} className='w-3/4 sm:w-2/3 lg:w-auto object-contain' />
      </div>
    </div>
  )
}

export default Events
