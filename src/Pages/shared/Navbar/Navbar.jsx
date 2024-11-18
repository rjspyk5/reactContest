import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const menu = (
    <>
      <li>
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

  const megaMenu = (
    <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
      <li>
        <a>Solutions</a>
        <ul>
          <li>
            <a>Design</a>
          </li>
          <li>
            <a>Development</a>
          </li>
          <li>
            <a>Hosting</a>
          </li>
          <li>
            <a>Domain register</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Enterprise</a>
        <ul>
          <li>
            <a>CRM software</a>
          </li>
          <li>
            <a>Marketing management</a>
          </li>
          <li>
            <a>Security</a>
          </li>
          <li>
            <a>Consulting</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Products</a>
        <ul>
          <li>
            <a>UI Kit</a>
          </li>
          <li>
            <a>Wordpress themes</a>
          </li>
          <li>
            <a>Wordpress plugins</a>
          </li>
          <li>
            <a>Open source</a>
            <ul>
              <li>
                <a>Auth management system</a>
              </li>
              <li>
                <a>VScode theme</a>
              </li>
              <li>
                <a>Color picker app</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a>Company</a>
        <ul>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
          <li>
            <a>Privacy policy</a>
          </li>
          <li>
            <a>Press kit</a>
          </li>
        </ul>
      </li>
    </ul>
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
          <ul className="menu bg-base-200 min-h-full w-80 p-4">{menu}</ul>
        </div>
      </div>
    </div>
  );
};
