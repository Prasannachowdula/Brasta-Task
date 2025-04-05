import React from 'react';
import sp from "../assets/sp.png";

const SparklingWine = () => {
  const Wines = [
    { name: "Monteabellón 2021", price: "20" },
    { name: "Arnaiz 2022", price: "18" },
    { name: "La Galga", price: "19" },
    { name: "Carmelo Rodero Roble", price: "26" },
  ];

  return (
    <div className="h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 sm:px-10 lg:px-24 py-10">
      {Wines.map((item, index) => (
        <div key={index} className="w-full font-poppins flex flex-col h-[450px] sm:h-[500px] md:h-[550px]">
          <div className="h-[70%] bg-[#2B2B2B] w-full flex justify-center items-center p-4">
            <img src={sp} alt={item.name} className="object-contain max-h-full" />
          </div>
          <div className="flex flex-col gap-2 items-center py-4">
            <h1 className="text-lg md:text-xl text-center">{item.name}</h1>
            <p className="text-base">€{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SparklingWine;
