import React from "react";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export const HowWeWork = () => {
  return (
    <div>
      <SectionHeader heading={"How We Work"} />
      <div className="flex flex-col md:flex-row gap-20">
        <div className="flex flex-col items-center justify-center p-5 space-y-5">
          <div className="bg-gradient-to-r from-green-400 to-green-700 p-1 rounded-full">
            <div className="bg-white m-1 flex justify-center items-center rounded-full w-28 h-28">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-green-700">
                1
              </h2>
            </div>
          </div>
          <p className="text-2xl font-semibold text-green-500">
            Get an instant quote
          </p>
          <p className="text-center opacity-65">
            Select your service, enter your details and get your quote.
            Alternatively, you can call or email us.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 space-y-5">
          <div className="bg-gradient-to-r from-green-400 to-green-700 p-1 rounded-full">
            <div className="bg-white m-1 flex justify-center items-center rounded-full w-28 h-28">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-green-700">
                2
              </h2>
            </div>
          </div>
          <p className="text-2xl font-semibold text-green-500">
            Pay online or by phone
          </p>
          <p className="text-center opacity-65">
            Pay securely online or by phone. Our call centre and live chat is
            there for you every step of the way.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 space-y-5">
          <div className="bg-gradient-to-r from-green-400 to-green-700 p-1 rounded-full">
            <div className="bg-white m-1 flex justify-center items-center rounded-full w-28 h-28">
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-green-400 to-green-700">
                3
              </h2>
            </div>
          </div>
          <p className="text-2xl font-semibold text-green-500">
            We take care of the rest
          </p>
          <p className="text-center opacity-65">
            We’ll contact you to schedule your order. With fast turnaround times
            your order will be completed in no time.
          </p>
        </div>
      </div>
    </div>
  );
};
