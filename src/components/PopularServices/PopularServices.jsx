import React from "react";
import { SectionHeader } from "./../SectionHeader/SectionHeader";
import img1 from "../../assets/topServices Image/services1.jpg";
import img2 from "../../assets/topServices Image/services2.jpg";
import img3 from "../../assets/topServices Image/services.jpg";

export const PopularServices = () => {
  return (
    <div>
      <SectionHeader heading={"Most Popular Services"} />
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <img className="w-full h-full" src={img1} alt="" />
          <div className="absoulte z-10 backdrop-blur-3xl bootm-0"></div>
        </div>
        <div className="relative">
          <img className="w-full h-full" src={img2} alt="" />
          <div className="absoulte z-10 backdrop-blur-3xl bootm-0"></div>
        </div>
        <div className="relative">
          <img className="w-full h-full" src={img3} alt="" />
          <div className="absoulte z-10 backdrop-blur-3xl bootm-0"></div>
        </div>
      </div>
    </div>
  );
};
