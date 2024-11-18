import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
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
        <div className="absolute  top-10 bg-base-200 hover:bg-none  left-[-250px]">
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
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar justify-between bg-base-300 w-full ">
            {/* Drawer button */}
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
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
            </div>
            {/* Main Drawer */}
            <div className="mx-2  px-2">Navbar Title</div>
            <div className="hidden  lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {menu}
              </ul>
            </div>
            <div>test</div>
          </div>
          {/* Page content here */}
          Content
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
