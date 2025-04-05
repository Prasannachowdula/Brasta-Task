import React from 'react';
import rose from "../assets/rose.png";

const RoseWine = () => {
  const Wines = [
    { name: "Monteabellón 2021", price: "20" },
    { name: "Arnaiz 2022", price: "18" },
    { name: "La Galga", price: "19" },
    { name: "Carmelo Rodero Roble", price: "26" },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      {Wines.map((item, index) => (
        <div
          key={index}
          className="w-full font-poppins flex flex-col h-[450px] sm:h-[500px] md:h-[600px]"
        >
          <div className="h-[75%] bg-[#2B2B2B] w-full flex justify-center items-center p-4">
            <img src={rose} className="max-h-full object-contain" alt={item.name} />
          </div>
          <div className="flex flex-col gap-1 items-center py-4 text-center">
            <h1 className="text-lg sm:text-xl">{item.name}</h1>
            <p className="text-sm sm:text-base font-medium">€{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoseWine;
