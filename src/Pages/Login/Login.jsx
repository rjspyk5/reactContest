import React from "react";
import img from "../../assets/watcing.jpg";

export const Login = () => {
  return (
    <div>
      <div className="font-sans">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="relative min-h-screen flex flex-col bg-no-repeat bg-center bg-cover  sm:justify-center items-center bg-gray-100 "
        >
          <div className="absolute  w-full h-full  bg-black bg-opacity-40"></div>
          {/* <img src={img} className="w-full h-full absolute blur-[5px]" alt="" /> */}

          <div className="relative sm:max-w-md w-full mt-28 mb-10">
            <div className="card bg-[#4a494923] backdrop-blur-xl   shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-[#29292923] backdrop-blur-xl  shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl   px-6 py-4 bg-[#d7d7d70a] backdrop-blur shadow-md">
              <label
                for=""
                className="block mt-3 text-white text-xl text-center font-semibold"
              >
                Registration
              </label>
              <form className="mt-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:outline-none placeholder-gray-400 text-slate-900"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="mt-1 block p-2 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:outline-none placeholder-gray-400 text-slate-900"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="mt-1 p-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 focus:outline-none placeholder-gray-400 text-slate-900"
                  />
                </div>

                <div className="mt-7">
                  <button className="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Registrar
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-white w-full">
                    Or Register with
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>

                  <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">Already have an account?</label>
                    <a
                      href="#"
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Login Now
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
