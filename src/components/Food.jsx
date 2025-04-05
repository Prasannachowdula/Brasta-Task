import React from 'react'
import food1 from "../assets/food1.png"
import logo1 from "../assets/logo1.png"
import FoodItems from './FoodItems'

const Food = () => {
  return (
    <div className='w-full h-fit pb-20 relative flex justify-center bg-black'>
      <div className='w-full absolute flex justify-between h-[20%] px-2 sm:px-5'>
        <img src={food1} className='h-full max-w-[40%] object-contain' />
        <img src={logo1} className='pr-2 sm:pr-10 w-[100px] sm:w-auto object-contain' />
      </div>

      <div className='flex flex-col w-full text-white items-center gap-4 pt-32 px-4 sm:px-0'>
        <div className='flex flex-wrap items-center justify-center text-[#FF0000] gap-3 font-prata text-base sm:text-xl'>
          <span className='w-12 sm:w-20 border-t'></span>
          <span>Slice of Heaven</span>
          <span className='w-12 sm:w-20 border-t'></span>
        </div>
        <h1 className='font-bold font-albert-sans text-2xl sm:text-3xl text-center px-2'>Essence of Traditional Flavors</h1>

        <div className='w-full sm:w-10/12 mt-4 bg-white/10 rounded-xl h-fit p-2 sm:p-4'>
          <FoodItems />
        </div>
      </div>
    </div>
  )
}

export default Food
