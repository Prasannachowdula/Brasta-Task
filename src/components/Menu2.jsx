import React from 'react'

import { PiBowlFood } from "react-icons/pi";
const Menu2 = ({menu,title,image}) => {
   
  return (
    <div className='w-full px-[48px] justify-between max-lg:gap-10 py-10 h-fit flex '>
      
      <div className='w-[65%] pl-16 max-xl:pl-0  flex flex-col items-center'>
         
    <div className="flex font-albert-sans items-center space-x-2">
        
        <div className="flex items-center">
        <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
            <div className="w-20 h-0.5 bg-white"></div>
            
        </div>

        <h1 className="text-white text-3xl font-bold">{title}</h1>

        
        <div className="flex items-center">
           
            <div className="w-20 h-0.5 bg-white"></div>
            <div className="w-1 h-1 bg-white border-2 border-white rotate-45"></div>
        </div>
    </div>
         <div className='flex flex-col font-poppins gap-2 w-full mt-3'>
            {menu.map((item,index)=>{
                return <div key={index} className="flex items-center justify-between bg-black text-white p-4 w-full ">
                {/* Image */}
                <div className="w-16 h-16">
                  <img
                    src={item.image}
                  
                    className="w-full h-full object-cover"
                  />
                </div>
          
                
                <div className="flex-1 px-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg  uppercase">{item.name}</h2>
                    <span className=""><PiBowlFood/></span> 
                    
                <div className="flex-1 border-dotted border-b border-gray-500"></div>
          
                
          <div className="text-lg ">{item.price}</div>
                  </div>
                  <p className="text-xs text-gray-400">
                   {item.des}
                  </p>
                </div>
              </div>
            })}
            </div>
      </div>
      <div className='w-[35%] h-[400px]'>
         <img src={image} className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}

export default Menu2