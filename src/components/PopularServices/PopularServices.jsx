import React from "react";
import { SectionHeader } from "./../SectionHeader/SectionHeader";
import img1 from "../../assets/topServices Image/services1.jpg";
import img2 from "../../assets/topServices Image/services2.jpg";
import img3 from "../../assets/topServices Image/services.jpg";

export const PopularServices = () => {
  return (
    <div>
      <SectionHeader heading={"Most Popular Services"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-0">
        <div className="relative">
          <img className="w-full h-full" src={img1} alt="" />
          <div className="absolute space-y-4 bottom-0 h-1/2 bg-[#30303051] w-full backdrop-blur-lg p-3">
            <h1 className="text-4xl font-semibold text-white max-w-[200px]">
              Gas Saftey Cetificates
            </h1>
            <div className="flex justify-center items-center">
              <button className="btn   rounded-full bg-green-500 text-white border-white">
                Get an instant quote
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full" src={img2} alt="" />
          <div className="absolute space-y-4 bottom-0 h-1/2 bg-[#30303051] w-full backdrop-blur-lg p-3">
            <h1 className="text-4xl font-semibold text-white max-w-[200px]">
              Gas Saftey Cetificates
            </h1>
            <div className="flex justify-center items-center">
              <button className="btn   rounded-full bg-green-500 text-white border-white">
                Get an instant quote
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full" src={img3} alt="" />
          <div className="absolute space-y-4 bottom-0 h-1/2 bg-[#30303051] w-full backdrop-blur-lg p-3">
            <h1 className="text-4xl font-semibold text-white max-w-[200px]">
              Gas Saftey Cetificates
            </h1>
            <div className="flex justify-center items-center">
              <button className="btn   rounded-full bg-green-500 text-white border-white">
                Get an instant quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
