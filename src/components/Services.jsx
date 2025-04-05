import React from 'react';
import chef from "../assets/chef.png";
import food6 from "../assets/food6.png";
import logo1 from "../assets/logo1.png";
import { SiCodefresh } from "react-icons/si";
import { IoReceiptSharp } from "react-icons/io5";
import { PiChefHat } from "react-icons/pi";

const Services = () => {
  return (
    <div className="w-full h-fit overflow-hidden bg-black text-white py-10">
      <div className="flex flex-col gap-3 items-center text-center px-4">
        <h1 className="font-albert-sans font-bold text-3xl md:text-4xl">Our Special Environment</h1>
        <div className="flex items-center justify-center text-[#FF0000] gap-3 font-prata text-xl">
          <span className="w-16 border-t border-[#FF0000]"></span>
          <span>Feast your eyes</span>
          <span className="w-16 border-t border-[#FF0000]"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4 sm:px-8 lg:px-16 py-12 max-w-[1200px] mx-auto">
        {/* Left images */}
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-2/3 justify-center items-center">
          <img src={chef} alt="Chef" className="h-[300px] md:h-[400px] lg:h-[500px] object-contain w-full md:w-1/2" />
          <img src={food6} alt="Dish" className="h-[200px] md:h-[300px] lg:h-[350px] object-cover w-full md:w-1/3" />
        </div>

        {/* Features card */}
        <div className="bg-white/10 p-6 rounded-xl flex flex-col items-center gap-6 w-full lg:w-1/3">
          <img src={logo1} alt="Logo" className="w-20 h-20 object-contain" />

          <div className="flex flex-col items-center text-center gap-2">
            <SiCodefresh className="text-4xl text-red-500" />
            <p className="font-bold font-albert-sans text-xl">Fresh Products</p>
            <p className="text-sm text-neutral-400 w-10/12">These nutrients support everything from immune function to bone health.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <PiChefHat className="text-4xl text-red-500" />
            <p className="font-bold font-albert-sans text-xl">Skilled Chefs</p>
            <p className="text-sm text-neutral-400 w-10/12">Excellent culinary skills, time management expertise, the ability to work.</p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <IoReceiptSharp className="text-4xl text-red-500" />
            <p className="font-bold font-albert-sans text-xl">Unique Recipes</p>
            <p className="text-sm text-neutral-400 w-10/12">An extra visual element around these items on your menu will attract guests.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
