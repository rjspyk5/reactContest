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
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              Your one-stop shop for property certification
            </h1>
            <p className="mb-5">
              One-stop solution for your services. Order any service, anytime.
            </p>
            <button className="btn   rounded-full bg-green-500 text-white">
              Get an instant quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};