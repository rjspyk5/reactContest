import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
export const Navbar = () => {
  const { user, logOut } = useAuth();

  const megaMenu = (
    <ul className="menu  bg-base-200 rounded-box lg:min-w-max">
      <li>
        <a className="hover:text-green-500">Solutions</a>
        <ul>
          <li>
            <a className="hover:text-green-500">Design</a>
          </li>
          <li>
            <a className="hover:text-green-500">Development</a>
          </li>
          <li>
            <a className="hover:text-green-500">Hosting</a>
          </li>
          <li>
            <a className="hover:text-green-500">Domain register</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="hover:text-green-500">Enterprise</a>
        <ul>
          <li>
            <a className="hover:text-green-500">CRM software</a>
          </li>
          <li>
            <a className="hover:text-green-500">Marketing management</a>
          </li>
          <li>
            <a className="hover:text-green-500">Security</a>
          </li>
          <li>
            <a className="hover:text-green-500">Consulting</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="hover:text-green-500">Products</a>
        <ul>
          <li>
            <a className="hover:text-green-500">UI Kit</a>
          </li>
          <li>
            <a className="hover:text-green-500">Wordpress themes</a>
          </li>
          <li>
            <a className="hover:text-green-500">Wordpress plugins</a>
          </li>
          <li>
            <a className="hover:text-green-500">Open source</a>
            <ul>
              <li>
                <a className="hover:text-green-500">Auth management system</a>
              </li>
              <li>
                <a className="hover:text-green-500">VScode theme</a>
              </li>
              <li>
                <a className="hover:text-green-500">Color picker app</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a className="hover:text-green-500">Company</a>
        <ul>
          <li>
            <a className="hover:text-green-500">About us</a>
          </li>
          <li>
            <a className="hover:text-green-500">Contact us</a>
          </li>
          <li>
            <a className="hover:text-green-500">Privacy policy</a>
          </li>
          <li>
            <a className="hover:text-green-500">Press kit</a>
          </li>
        </ul>
      </li>
    </ul>
  );

  const megamenu2 = (
    <ul className=" lg:menu-horizontal before:w-0  lg:min-w-max">
      <li>
        <a className="text-green-500">Solutions</a>
        <ul className="before:w-0 m-0 p-0">
          <li>
            <a className="hover:text-green-500">Design</a>
          </li>
          <li>
            <a className="hover:text-green-500">Development</a>
          </li>
          <li>
            <a className="hover:text-green-500">Hosting</a>
          </li>
          <li>
            <a className="hover:text-green-500">Domain register</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="text-green-500">Enterprise</a>
        <ul className="before:w-0 m-0 p-0 f">
          <li>
            <a className="hover:text-green-500">CRM software</a>
          </li>
          <li>
            <a className="hover:text-green-500">Marketing management</a>
          </li>
          <li>
            <a className="hover:text-green-500">Security</a>
          </li>
          <li>
            <a className="hover:text-green-500">Consulting</a>
          </li>
        </ul>
      </li>
      <li>
        <a className="text-green-500">Products</a>
        <ul className="before:w-0 m-0 p-0">
          <li>
            <a className="hover:text-green-500">UI Kit</a>
          </li>
          <li>
            <a className="hover:text-green-500">Wordpress themes</a>
          </li>
          <li>
            <a className="hover:text-green-500">Wordpress plugins</a>
          </li>
          <li>
            <a className="hover:text-green-500">Open source</a>
            <ul className="before:w-0 m-0 p-0">
              <li>
                <a className="hover:text-green-500">Auth management system</a>
              </li>
              <li>
                <a className="hover:text-green-500">VScode theme</a>
              </li>
              <li>
                <a className="hover:text-green-500">Color picker app</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a className="text-green-500">Company</a>
        <ul className="before:w-0 m-0 p-0 x">
          <li>
            <a className="hover:text-green-500">About us</a>
          </li>
          <li>
            <a className="hover:text-green-500">Contact us</a>
          </li>
          <li>
            <a className="hover:text-green-500">Privacy policy</a>
          </li>
          <li>
            <a className="hover:text-green-500">Press kit</a>
          </li>
        </ul>
      </li>
    </ul>
  );

  const menu = (
    <>
      <li className="relative group">
        <NavLink to="/services">Services</NavLink>
        <div className="absolute  top-10 z-50 bg-base-200 hidden group-hover:block left-[-250px]">
          {megamenu2}
        </div>
      </li>
      <li>
        <NavLink to="/faqs">FAQs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );
  const menu2 = (
    <>
      <li className="">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/faqs">FAQs</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky z-50 top-0  *:text-white *:font-bold bg-[#7b7a7aa8]">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar justify-between backdrop-blur-2xl bg-[#76747458] absolute  w-full ">
            {/* Drawer button */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <Link to="/" className="px-1  lg:hidden">
                Certify
              </Link>
            </div>
            {/* Main Drawer */}
            <Link to="/" className="px-2 hidden lg:block">
              Certify
            </Link>
            <div className="hidden  lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {menu}
              </ul>
            </div>
            <div className="flex gap-2 md:gap-4">
              {/* <button className="btn px-2 md:px-3 min-h-2 text-sm md:text-base h-8 md:h-12 font-bold text-green-600 bg-white  rounded-full  border-green-600 border-2 hover:border-border-green-700">
                Track Order
              </button>
              <button className="btn px-2 md:px-3 min-h-2 h-8 md:h-12 text-sm md:text-base  rounded-full bg-gradient-to-r from-[green] to-[#06a906] text-white border-none">
                Get an instant quote
              </button> */}
              {user ? (
                <button
                  onClick={() => logOut()}
                  className="btn px-2 md:px-4 min-h-2 h-8 md:h-10 text-sm md:text-base  rounded bg-gradient-to-r from-[green] to-[#0fd80f] text-white border-none hover:bg-gradient-to-br transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn px-2 md:px-4 min-h-2 h-8 md:h-10 text-sm md:text-base  rounded bg-gradient-to-r from-[green] to-[#0fd80f] text-white border-none hover:bg-gradient-to-br transition duration-300 ease-in-out"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">{menu2}</ul>
        </div>
      </div>
    </div>
  );
};
