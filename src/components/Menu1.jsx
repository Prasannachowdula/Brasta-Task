import React from 'react'
import { PiBowlFood } from "react-icons/pi"

const Menu1 = ({ menu, title, image }) => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-between px-6 lg:px-12 py-10 gap-6 lg:gap-10'>
      
      <div className='w-full lg:w-[35%] h-[300px] lg:h-[400px]'>
        <img src={image} className='w-full h-full object-contain' />
      </div>

      <div className='w-full lg:w-[65%] flex flex-col items-center lg:pr-16'>

        <div className="flex font-albert-sans items-center space-x-2">
          <div className="flex items-center">
            <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
            <div className="w-16 lg:w-20 h-0.5 bg-white"></div>
          </div>

          <h1 className="text-white text-2xl lg:text-3xl font-bold">{title}</h1>

          <div className="flex items-center">
            <div className="w-16 lg:w-20 h-0.5 bg-white"></div>
            <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
          </div>
        </div>

        <div className='flex flex-col font-poppins gap-3 w-full mt-4'>
          {menu.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black text-white p-4 w-full rounded-md">
              
              <div className="w-16 h-16 mb-2 sm:mb-0">
                <img src={item.image} className="w-full h-full object-cover rounded" />
              </div>

              <div className="flex-1 sm:px-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h2 className="text-lg uppercase">{item.name}</h2>
                  <span className="text-xl"><PiBowlFood /></span>
                  <div className="flex-1 border-dotted border-b border-gray-500 hidden sm:block"></div>
                  <div className="text-lg text-right sm:text-left">{item.price}</div>
                </div>
                <p className="text-xs text-gray-400 mt-1 sm:mt-0">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu1
