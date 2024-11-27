import React from "react";
import second from "../../assets/h6.jpg";
export const Hero = () => {
  return (
    <div>
      <div
        className={`hero min-h-screen bg-[url(${second})]`}
        style={{
          backgroundImage: `url(${second})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
              Your one-stop shop for property certification
            </h1>
            <p className="mb-5">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <button className="btn   rounded-full bg-green-500 text-white border-white">
              Get an instant quote
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="flex justify-center items-center bg-[#4C7C00] text-white py-7 font-bold">
          UK-wide service
        </div>
        <div className="flex justify-center items-center bg-[#599000] text-white py-7 font-bold">
          UK-wide service
        </div>
        <div className="flex justify-center items-center bg-[#65A400] text-white py-7 font-bold">
          UK-wide service
        </div>
        <div className="flex justify-center items-center bg-[#72B800] text-white py-7 font-bold">
          UK-wide service
        </div>
      </div>
    </div>
  );
};
