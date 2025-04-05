import React from 'react'
import food2 from "../assets/food2.png"
import food3 from "../assets/food3.png"
import food4 from "../assets/food4.png"
import food5 from "../assets/food5.png"

const FoodItems = () => {
  const items = [
    { name: "Patatas Bravas", image: food2, price: "5.00" },
    { name: "Paella de Mariscos", image: food3, price: "18.00" },
    { name: "Chuletón de Buey", image: food4, price: "30.00" },
    { name: "Cocido Madrileño", image: food5, price: "16.00" },
  ]

  return (
    <div className='font-poppins w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 lg:p-10'>
      {items.map((item, index) => {
        return (
          <div className='w-full h-full flex flex-col rounded-md bg-black/40' key={index}>
            <img src={item.image} className='w-full h-[200px] sm:h-[250px] object-cover rounded-t-md' />
            <div className='flex flex-col py-4 items-center gap-3 px-2 text-center'>
              <p className='uppercase text-lg sm:text-xl'>{item.name}</p>
              <p className='font-semibold text-red-500'>${item.price}</p>
              <button className='px-6 sm:px-8 py-2 rounded-md bg-red-500 border-t-2 border-t-[#D22020] font-semibold'>View</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FoodItems
