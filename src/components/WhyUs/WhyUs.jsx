import React from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import img from "../../assets/h.jpg";
import { IoHome } from "react-icons/io5";

export const WhyUs = () => {
  return (
    <div>
      <SectionHeader heading="Why Choose Us" />
      <div
        className="hero place-items-start min-h-screen"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay w-full h-full bg-opacity-50 bg-black"></div>
        <div className="flex flex-col lg:flex-row gap-16 md:p-10  p-3">
          <div className="w-full lg:w-50">
            <p
              style={{ lineHeight: "3rem" }}
              className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white "
            >
              Expertise on your doorstep, covering the whole of the UK.
            </p>
          </div>
          <div className="w-full lg:w-50">
            <div className="rounded grid grid-cols-2 *:rounded-lg gap-5 md:gap-10 ">
              <div className="flex-col items-center justify-center space-y-5 bg-white p-8 md:p-10">
                <div className="flex justify-center">
                  <IoHome
                    className="text-green-500 text-center block mt-5"
                    size={50}
                  />
                </div>
                <p className="font-semibold text-green-500 md:text-5xl text-3xl text-center">
                  2000+
                </p>
                <p className="leading-6 text-center text-base  md:text-lg opacity-70">
                  5-star ratings on Trustpilot across our divisions
                </p>
              </div>
              <div className="flex-col items-center justify-center space-y-5 bg-white p-8 md:p-10">
                <div className="flex justify-center">
                  <IoHome
                    className="text-green-500 text-center block mt-5"
                    size={50}
                  />
                </div>
                <p className="font-semibold text-green-500 md:text-5xl text-3xl text-center">
                  2000+
                </p>
                <p className="leading-6 text-center text-base  md:text-lg opacity-70">
                  5-star ratings on Trustpilot across our divisions
                </p>
              </div>
              <div className="flex-col items-center justify-center space-y-5 bg-white p-8 md:p-10">
                <div className="flex justify-center">
                  <IoHome
                    className="text-green-500 text-center block mt-5"
                    size={50}
                  />
                </div>
                <p className="font-semibold text-green-500 md:text-5xl text-3xl text-center">
                  2000+
                </p>
                <p className="leading-6 text-center text-base  md:text-lg opacity-70">
                  5-star ratings on Trustpilot across our divisions
                </p>
              </div>
              <div className="flex-col items-center justify-center space-y-5 bg-white p-8 md:p-10">
                <div className="flex justify-center">
                  <IoHome
                    className="text-green-500 text-center block mt-5"
                    size={50}
                  />
                </div>
                <p className="font-semibold text-green-500 md:text-5xl text-3xl text-center">
                  2000+
                </p>
                <p className="leading-6 text-center text-base  md:text-lg opacity-70">
                  5-star ratings on Trustpilot across our divisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
